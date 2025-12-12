import { supabase } from '@/lib/supabase';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Verify credentials match admin credentials
    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
      return Response.json({ error: 'Invalid credentials' }, { status: 401 });
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
    return Response.json({
      success: true,
      email: email,
      token: Buffer.from(email + ':' + Date.now()).toString('base64')
    });
  } catch (error) {
    console.error('Login error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
