import { supabase } from "./supabase";

export interface AdminResource {
  id: string;
  title: string;
  description: string;
  tags: string[];
  file_name: string;
  file_url: string;
  created_at: string;
}

const BUCKET = "resources";

export async function getResources(): Promise<AdminResource[]> {
  const { data, error } = await supabase
    .from("resources")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function uploadResource(
  title: string,
  description: string,
  tags: string[],
  file: File
): Promise<void> {
  const path = `${Date.now()}_${file.name}`;

  const { error: uploadError } = await supabase.storage
    .from(BUCKET)
    .upload(path, file);
  if (uploadError) throw uploadError;

  const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(path);

  const { error: insertError } = await supabase.from("resources").insert({
    title,
    description,
    tags,
    file_name: file.name,
    file_url: urlData.publicUrl,
  });
  if (insertError) throw insertError;
}

export async function deleteResource(id: string, file_url: string): Promise<void> {
  // Extract storage path from public URL
  const path = file_url.split(`/${BUCKET}/`)[1];
  if (path) {
    await supabase.storage.from(BUCKET).remove([path]);
  }
  const { error } = await supabase.from("resources").delete().eq("id", id);
  if (error) throw error;
}
