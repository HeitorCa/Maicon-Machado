const menuIcone = document.querySelector('.header_menu_icone');
const navContainer = document.querySelector('.nav_container');
const fecharIcone = document.querySelector('.header_menu_icone_fechar');
const navItems = document.querySelectorAll('.nav_container a');

const abrirMenu = () => navContainer.classList.toggle('nav_container_aberto');

const fecharMenu = () => navContainer.classList.remove('nav_container_aberto');

menuIcone.addEventListener('click', abrirMenu);
fecharIcone.addEventListener('click', fecharMenu);

navItems.forEach(item => {
  item.addEventListener('click', fecharMenu);
});


function formatarWhatsApp(input) {
    let valor = input.value.replace(/\D/g, '');

    if (valor.length === 0) {
        input.value = '';
    } else if (valor.length <= 2) {
        input.value = '(' + valor;
    } else if (valor.length <= 7) {
        input.value = '(' + valor.slice(0, 2) + ') ' + valor.slice(2);
    } else if (valor.length <= 11) {
        input.value = '(' + valor.slice(0, 2) + ') ' + valor.slice(2, 3) + ' ' + valor.slice(3, 7) + '-' + valor.slice(7);
    } else {
        input.value = '(' + valor.slice(0, 2) + ') ' + valor.slice(2, 3) + ' ' + valor.slice(3, 7) + '-' + valor.slice(7, 11);
    }
}


