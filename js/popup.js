const formulario = document.querySelector('.agendamento_formulario');
const botao = document.querySelector('.agendamento_formulario_botao');
const popup = document.querySelector('.agendamento_popup');
const carregamento = document.querySelector('.popup_carregamento');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const whatsapp = document.getElementById('whatsapp').value; // Corrigido
  const mensagem = document.getElementById('mensagem').value;
  const metodoContato = document.querySelector('input[name="contato"]:checked').value; // Corrigido

  if (metodoContato === 'whatsapp') {
    const whatsappLink = `https://api.whatsapp.com/send/?phone=557188362390&text=Nome: ${encodeURIComponent(nome)}%0AEmail: ${encodeURIComponent(email)}%0AWhatsapp: ${encodeURIComponent(whatsapp)}%0ADescrição do Pedido: ${encodeURIComponent(mensagem)}&type=whatsapp_number&app_absent=0`;
  
    window.location.href = whatsappLink;
  } else {
    var parametros = {
      nome: nome,
      email: email,
      whatsapp: whatsapp,
      mensagem: mensagem
    }

    emailjs.send('service_1k8x0kf', 'template_wxryj8t', parametros).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );

    popup.classList.add('agendamento_popup_ativo');
    carregamento.classList.add('agendamento_popup_ativo');

    popupTempo = setTimeout(() => {
      popup.classList.remove('agendamento_popup_ativo');
    }, 5000);

    carregamentoTempo = setTimeout(() => {
      carregamento.classList.remove('agendamento_popup_ativo');
    }, 5300);
  }
});

closeIcon.addEventListener('click', () => {
  popup.classList.remove('agendamento_popup_ativo');

  setTimeout(() => {
    carregamento.classList.remove('agendamento_popup_ativo');
  }, 300);

  clearTimeout(popupTempo);
  clearTimeout(carregamentoTempo);
});
