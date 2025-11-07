import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import type { Lead } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create lead object
    const lead: Lead = {
      name: body.name,
      email: body.email,
      phone: body.phone || null,
      company: body.company || null,
      service_interest: body.service_interest || null,
      message: body.message,
      source_page: body.source_page || 'unknown',
      status: 'new',
    };

    // Insert into Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert([lead])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit lead', details: error.message },
        { status: 500 }
      );
    }

    // If service inquiry details are provided, create service inquiry
    if (body.service_inquiry && data) {
      const { error: inquiryError } = await supabase
        .from('service_inquiries')
        .insert([
          {
            lead_id: data.id,
            service_type: body.service_inquiry.service_type,
            company_size: body.service_inquiry.company_size || null,
            urgency: body.service_inquiry.urgency || null,
            budget_range: body.service_inquiry.budget_range || null,
            preferred_start_date: body.service_inquiry.preferred_start_date || null,
            additional_details: body.service_inquiry.additional_details || null,
          },
        ]);

      if (inquiryError) {
        console.error('Service inquiry error:', inquiryError);
        // Don't fail the request, just log it
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry! We will get back to you soon.',
        data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Lead submission endpoint. Use POST to submit a lead.' },
    { status: 200 }
  );
}

