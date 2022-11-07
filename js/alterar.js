function cancel(){
  let modal = document.getElementById("modal");
  modal.style.display = 'none';
}

function temCerteza(){
  let name = document.getElementById("name");
  let tel = document.getElementById("number");
  let email = document.getElementById("email")
  let senha = document.getElementById("txtSenha");

  if(name === ""){
    focus(name);
    alert("Nome Invalido");
  }
  else if(tel === ""){
    focus(tel);
    alert("Numero Invalido");
  }
  else if(email === ""){
    FocusEvent(email);
    alert("Email Invalido");
  }
  else if(senha === ""){
    FocusEvent(senha);
    alert("Senha invalida")
  }
  else{
    let modal = document.getElementById("modal");
    modal.style.display = 'block';
  }
  
}

function salvar(){
  let name = document.getElementById("name");
  let tel = document.getElementById("number");
  let email = document.getElementById("email")
  let senha = document.getElementById("txtSenha");

  if(name === ""){
    focus(name);
    alert("Nome Invalido");
  }
  else if(tel === ""){
    focus(tel);
    alert("Numero Invalido");
  }
  else if(email === ""){
    FocusEvent(email);
    alert("Email Invalido");
  }
  else if(senha === ""){
    FocusEvent(senha);
    alert("Senha invalida")
  }
  else{
    alert("seus dados foram alterados")
  }
}