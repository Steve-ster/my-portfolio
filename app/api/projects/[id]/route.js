import { supabase } from '@/lib/supabase';

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { title, description, image_url, project_url, github_url } = await request.json();

    const { data, error } = await supabase
      .from('projects')
      .update({ title, description, image_url, project_url, github_url, updated_at: new Date() })
      .eq('id', id)
      .select();

    if (error) throw error;

    return Response.json(data[0]);
  } catch (error) {
    console.error('Error updating project:', error);
    return Response.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error deleting project:', error);
    return Response.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
