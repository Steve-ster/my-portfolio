import { supabase } from '@/lib/supabase';

export async function GET(request) {
  try {
    const { data: projects, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return Response.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return Response.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { title, description, image_url, project_url, github_url } = await request.json();

    const { data, error } = await supabase
      .from('projects')
      .insert([{ title, description, image_url, project_url, github_url }])
      .select();

    if (error) throw error;

    return Response.json(data[0], { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return Response.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
