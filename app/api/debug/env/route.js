import { NextResponse } from 'next/server';

export async function GET(request) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Unavailable in production' }, { status: 403 });
  }

  return NextResponse.json({
    ADMIN_EMAIL_set: !!process.env.ADMIN_EMAIL,
    ADMIN_PASSWORD_set: !!process.env.ADMIN_PASSWORD,
    NEXT_PUBLIC_SUPABASE_URL_set: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY_set: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  });
}
