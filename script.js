async function buscarUsuarios() {

    const resposta = await fetch(
      "http://127.0.0.1:5000"
    );
  
    const usuarios = await resposta.json();
  
    const lista = document.getElementById(
      "listaUsuarios"
    );
  
    lista.innerHTML = "";
  
    usuarios.forEach(usuario => {
  
      lista.innerHTML += `
        <li>${usuario.name}</li> <br>
        <li>${usuario.email}</li> <br>
        <li>${usuario.telefone}</li>
      `;
  
    });
  
  }