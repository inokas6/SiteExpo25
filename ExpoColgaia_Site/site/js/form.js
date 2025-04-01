document.addEventListener("DOMContentLoaded", async () => {
    await carregarCursos();
});

document.getElementById("Expo-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const status = document.getElementById("status").value;
    const id_curso = document.getElementById("id_curso").value || null;

    const expocolgaia = document.querySelector('input[name="expocolgaia"]:checked')?.value;
    const local = document.querySelector('input[name="local"]:checked')?.value;
    const projetos = document.querySelector('input[name="projetos"]:checked')?.value;
    const esclarecido = document.querySelector('input[name="esclarecido"]:checked')?.value;
    const organizado = document.querySelector('input[name="organizado"]:checked')?.value;

    const motivosInput = document.getElementById("motivos");
    const melhoriasInput = document.getElementById("melhorias");

    const motivos = motivosInput ? motivosInput.value || null : null;
    const melhorias = melhoriasInput ? melhoriasInput.value || null : null;

   

    try {
        const { data, error } = await supabase.from("feedback").insert([
            { nome, status, id_curso, expocolgaia, local, motivos, projetos, esclarecido, organizado, melhorias }
        ]);
        
        if (error) {
            throw error;
        }
        
        alert("Feedback enviado com sucesso!");
        
        document.getElementById("Expo-form").reset();
        window.location.reload();

    } catch (error) {
        console.error("Erro ao enviar feedback:", error);
        alert("Ocorreu um erro ao enviar o feedback. Tente novamente.");
    }
});

async function carregarCursos() {
    try {
        const { data, error } = await supabase.from("curso").select("id, nome");
        if (error) throw error;
        
        const cursoSelect = document.getElementById("id_curso");
        cursoSelect.innerHTML = `<option value="">Selecione um curso</option>`;
        
        data.forEach(curso => {
            cursoSelect.innerHTML += `<option value="${curso.id}">${curso.nome}</option>`;
        });
    } catch (error) {
        console.error("Erro ao carregar cursos:", error);
    }
}
function verificarStatus() {
    let status = document.getElementById("status").value;
    let perguntaExpo = document.getElementById("pergunta-expo");
    let perguntaLocal = document.getElementById("pergunta-local");
    let cursoLabel = document.getElementById("curso-label");
    let cursoSelect = document.getElementById("id_curso");

    // Se o status for "Ex-Aluno", exibe diretamente a pergunta-local
    if (status === "Ex-Aluno" || status === "Aluno") {
        cursoLabel.style.display = "block";  // Exibe o label do curso
        cursoSelect.style.display = "block"; // Exibe o select de curso
    } else {
        cursoLabel.style.display = "none";  // Esconde o label do curso
        cursoSelect.style.display = "none"; // Esconde o select de curso
    }

    // Exibe a pergunta correspondente ao status
    if (status === "Ex-Aluno") {
        perguntaLocal.style.display = "block";
        perguntaExpo.style.display = "none"; // Esconde a pergunta-expo
    } else {
        perguntaExpo.style.display = "block";
        perguntaLocal.style.display = "none"; // Esconde a pergunta-local
    }
}
