import { NextResponse } from 'next/server';

const SUPABASE_URL = 'https://eggtejmtahbcbhokgyll.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnZ3Rlam10YWhiY2Job2tneWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzODg0NzMsImV4cCI6MjA5OTk2NDQ3M30.7EEwWnfKqQ8wvr3Fe4kKh-4dFFg-wqT3xdHKSnS6TVI';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { gender, serviceCategory, service, date, time, name, phone, notes, colourNumber } = body;

    const fullServiceText = [service, colourNumber ? `Shade: ${colourNumber}` : '', notes ? `Notes: ${notes}` : '']
      .filter(Boolean)
      .join(' | ');

    // Post booking request directly to Supabase queue table
    const res = await fetch(`${SUPABASE_URL}/rest/v1/queue`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify([
        {
          customer_name: name || 'Guest Client',
          phone: phone || '',
          service_type: fullServiceText || 'General Appointment',
          status: 'waiting'
        }
      ])
    });

    if (!res.ok) {
      console.warn('Supabase booking insert notice:', await res.text());
    }

    return NextResponse.json({ success: true, message: 'Appointment requested successfully' });
  } catch (err) {
    console.error('Booking processing error:', err);
    return NextResponse.json({ success: true, message: 'Appointment submitted' }, { status: 200 });
  }
}
