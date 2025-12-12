import { supabase } from '@/lib/supabase';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Save to database
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{ name, email, message }])
      .select();

    if (error) throw error;

    return Response.json({
      success: true,
      message: 'Message received! I will get back to you soon.'
    }, { status: 201 });
  } catch (error) {
    console.error('Error saving contact:', error);
    return Response.json({ error: 'Failed to save message' }, { status: 500 });
  }
}
