import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Ensure admin credentials exist in environment
    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
      console.error('ADMIN_EMAIL or ADMIN_PASSWORD not set');
      return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
    }

    // Verify credentials match admin credentials
    console.log('Attempting admin login for:', email);
    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Get or create admin user in database
    const { data: user, error } = await supabase
      .from('admin_users')
      .select('*')
      .eq('email', email)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw error;
    }

    // Return success response
    return NextResponse.json({
      success: true,
      email: email,
      token: Buffer.from(email + ':' + Date.now()).toString('base64')
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
