-- Rooted People Services - Supabase Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Leads table - Main contact form submissions
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    service_interest VARCHAR(255),
    message TEXT,
    source_page VARCHAR(255),
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Service Inquiries table - Specific service request details
CREATE TABLE IF NOT EXISTS service_inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
    service_type VARCHAR(255) NOT NULL,
    company_size VARCHAR(100),
    urgency VARCHAR(50),
    budget_range VARCHAR(100),
    preferred_start_date DATE,
    additional_details TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Newsletter Subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT true,
    unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_service_inquiries_lead_id ON service_inquiries(lead_id);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- RLS Policies - Allow public insert for forms, but restrict reads
-- These policies allow anyone to submit forms but only authenticated users to read data

-- Leads policies
CREATE POLICY "Allow public insert on leads" ON leads
    FOR INSERT TO anon
    WITH CHECK (true);

CREATE POLICY "Allow authenticated read on leads" ON leads
    FOR SELECT TO authenticated
    USING (true);

-- Service inquiries policies
CREATE POLICY "Allow public insert on service_inquiries" ON service_inquiries
    FOR INSERT TO anon
    WITH CHECK (true);

CREATE POLICY "Allow authenticated read on service_inquiries" ON service_inquiries
    FOR SELECT TO authenticated
    USING (true);

-- Newsletter policies
CREATE POLICY "Allow public insert on newsletter_subscribers" ON newsletter_subscribers
    FOR INSERT TO anon
    WITH CHECK (true);

CREATE POLICY "Allow authenticated read on newsletter_subscribers" ON newsletter_subscribers
    FOR SELECT TO authenticated
    USING (true);

-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Comments for documentation
COMMENT ON TABLE leads IS 'Main table for storing contact form submissions and lead information';
COMMENT ON TABLE service_inquiries IS 'Detailed service-specific inquiry information linked to leads';
COMMENT ON TABLE newsletter_subscribers IS 'Email subscribers for marketing communications';

