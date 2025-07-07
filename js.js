  const container = document.getElementById('trail-container');

  document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    container.appendChild(trail);

    setTimeout(() => {
      trail.remove();
    }, 500);
  });

  document.addEventListener("DOMContentLoaded", function () {
    const enviar = document.getElementById("enviar")
    const formulario = document.getElementById("meuFormulario")

    enviar.addEventListener("click", function (event) {
      event.preventDefault()

      const nome = document.getElementById("nome").value.trim()
      const email = document.getElementById("email").value.trim()
      const mensagem = document.getElementById("mensagem").value.trim()

      if (!nome || !email || !mensagem) {
        mostrarMensagem("Por favor, preencha todos os campos.", true)
        return
      }

      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      if (!emailValido) {
        mostrarMensagem("Por favor, insira um e-mail válido.", true)
        return
      }

      mostrarMensagem("Mensagem enviado com sucesso!", false)

      setTimeout(() => {
        formulario.reset()
      }, 100)
    })

    function mostrarMensagem(texto, erro = false) {
      const alerta = document.getElementById("mensagem-alerta")
      alerta.textContent = texto
      alerta.className = "mensagem-alerta" + (erro ? " erro" : "")
      alerta.classList.add("visivel")

      setTimeout(() => {
        alerta.classList.remove("visivel")
        setTimeout(() => {
          alerta.className = "mensagem-alerta oculto"
        }, 400)
      }, 3000)
    }
  })
  
  

  

  
  
  
  
  

