async function buscarUsuarios() {

    const resposta = await fetch(
      "https://spa-5m5q.onrender.com/usuarios"
    );
  
    const usuarios = await resposta.json();
  
    const lista = document.getElementById(
      "listaUsuarios"
    );
  
    lista.innerHTML = "";
  
    usuarios.forEach(usuario => {
  
      lista.innerHTML += `
        <li>${usuario.nome}</li> <br>
        <li>${usuario.email}</li> <br>
        <li>${usuario.telefone}</li>
      `;
  
    });
  
  }