const sendButton = document.getElementById("botão-enviar");
const textInput = document.getElementById("input-text");
const previewLista = document.getElementById("molde-lista");
let itensArray = [];

if (sendButton && textInput && previewLista && itensArray != null) {
console.log("As constantes funcionam adequadamente.")
} else {
    console.log("Reveja as constantes e revise o código.")
};

//Eventos de click


sendButton.addEventListener('click', () => {
    const item = document.createElement("li");
    const deleteButton = document.createElement("button");
    const textItem = document.createElement("span")

    textItem.classList.add("texto-item");
    item.classList.add("item-lista");
    deleteButton.classList.add("botao-excluir");

    deleteButton.textContent = "X"

    item.appendChild(textItem)
    item.textContent = textInput.value
    previewLista.appendChild(item)
    item.appendChild(deleteButton)
    itensArray.push(previewLista.value);
    console.log(item);

    deleteButton.addEventListener('click', () => {
        previewLista.removeChild(item)
    })

});