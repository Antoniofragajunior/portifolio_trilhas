// Alternar entre temas claro e escuro
const btnTema = document.getElementById('btnTema');
const tema = localStorage.getItem('tema') || 'claro';

document.documentElement.setAttribute('data-tema', tema);
atualizarIconeTema(tema);

if (btnTema) {
    btnTema.addEventListener('click', () => {
        const temaAtual = document.documentElement.getAttribute('data-tema');
        const novoTema = temaAtual === 'escuro' ? 'claro' : 'escuro';
        document.documentElement.setAttribute('data-tema', novoTema);
        localStorage.setItem('tema', novoTema);
        atualizarIconeTema(novoTema);
    });
}

function atualizarIconeTema(tema) {
    if (!btnTema) return;
    btnTema.innerHTML = tema === 'escuro'
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
}