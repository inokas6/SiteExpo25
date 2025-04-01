const supabaseUrl = 'https://dbiglyeokpcsqtgydzxh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiaWdseWVva3Bjc3F0Z3lkenhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NzAyMjUsImV4cCI6MjA1ODA0NjIyNX0.gRGNMzYPpTpTO-cVtJPflhJJSmkayjgD0HJP-WkgYp4';

// Criar o cliente Supabase globalmente
window.supabase = supabase.createClient(supabaseUrl, supabaseKey);

console.log("Supabase inicializado com sucesso:", window.supabase);