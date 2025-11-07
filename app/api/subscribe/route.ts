import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import type { NewsletterSubscriber } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existing } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('email', body.email)
      .single();

    if (existing) {
      if (existing.is_active) {
        return NextResponse.json(
          { error: 'This email is already subscribed to our newsletter' },
          { status: 409 }
        );
      } else {
        // Reactivate subscription
        const { data, error } = await supabase
          .from('newsletter_subscribers')
          .update({
            is_active: true,
            unsubscribed_at: null,
          })
          .eq('email', body.email)
          .select()
          .single();

        if (error) {
          console.error('Supabase error:', error);
          return NextResponse.json(
            { error: 'Failed to reactivate subscription', details: error.message },
            { status: 500 }
          );
        }

        return NextResponse.json(
          {
            success: true,
            message: 'Welcome back! Your subscription has been reactivated.',
            data,
          },
          { status: 200 }
        );
      }
    }

    // Create new subscriber
    const subscriber: NewsletterSubscriber = {
      email: body.email,
      name: body.name || null,
      is_active: true,
    };

    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([subscriber])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to subscribe', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for subscribing! Check your inbox for confirmation.',
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
    { message: 'Newsletter subscription endpoint. Use POST to subscribe.' },
    { status: 200 }
  );
}

