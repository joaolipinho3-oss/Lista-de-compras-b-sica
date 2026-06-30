//Definindo os objetos e constantes do document.

const darkModeButton = document.getElementById("dark-mode-button");
const sendButton = document.getElementById("botão-enviar");
const textInput = document.getElementById("input-text");
const previewLista = document.getElementById("molde-lista");
let itensArray = [];

//Verificando se as constantes não são nulas caso ocorra alguma modificação futura no código.

if (sendButton && textInput && previewLista && itensArray != null) {
  console.log("As constantes funcionam adequadamente.");
} else {
  console.log("Reveja as constantes e revise o código.");
}

//Eventos de adcionar itens a lista.

function verificarItemVazio() { //inputText não pode ser vazio
  console.log("VerificarItemVazio --> Passou")
  const valor = textInput.value
if (!valor || valor.trim() === "") {
  alert("O item não pode ser vazio!");
  return;
}
adicionarParaLista();
}

function adicionarParaLista() {
  console.log("Item adicionado para a lista")
  const item = document.createElement("li");
  const deleteButton = document.createElement("button");
  const textItem = document.createElement("span");

  textItem.classList.add("texto-item");
  item.classList.add("item-lista");
  deleteButton.classList.add("botao-excluir");
  textItem.textContent = textInput.value;

  previewLista.appendChild(item);

  itensArray.push(textInput.value);
  deleteButton.textContent = "🗑️";
  item.appendChild(textItem);
  item.appendChild(deleteButton);
  console.log(item);

  deleteButton.addEventListener("click", () => {
    previewLista.removeChild(item);
  });

  // Habilitar ou desabilitar item
  item.addEventListener("dblclick", () => {
  item.classList.toggle("item-disabled")
  console.log("Item desabilitado")
} )

}

sendButton.addEventListener("click", () => verificarItemVazio());

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Previne o comportamento padrão como o envio do formulário.
    console.log("Enter foi pressionado");
    verificarItemVazio();
  }
});

// Funcionalidades do botão de modo escuro da página

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  changeLogo();
});

function changeLogo() {
  const img = document.getElementById("github-logo")
  const btn = darkModeButton

  if (document.body.classList.contains("dark-mode")) {
    img.src = "/icons/GitHub_Invertocat_White.png"
    btn.textContent = "☀️"
  } else {
    img.src = "/icons/GitHub_Invertocat_Black.png"
    btn.textContent = "🌒"
  }

}