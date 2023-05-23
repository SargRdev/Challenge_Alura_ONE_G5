let texto = document.getElementById("texto")
let mensaje = document.querySelector("#mensaje")
let muneco = document.querySelector(".muneco")

function myFunction() {
   var copyText = document.getElementById("mensaje");
   copyText.select();
   copyText.setSelectionRange(0, 99999);
   navigator.clipboard.writeText(copyText.value);
   
   var btnCopiado = document.getElementById("btnCopiar");
   btnCopiado.innerHTML = "Copiado: " + copyText.value;
 }
 
function btnEncriptar() {
   let textoCifrado = encriptar(texto.value)
   mensaje.value = textoCifrado 
}

function btnDesencriptar() {
   let textoCifrado = Desencriptar(texto.value)
       mensaje.value = textoCifrado
      muneco.style.display = "none";
}

function encriptar(stringEncriptar) {
   let regla = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
   stringEncriptar = stringEncriptar.toLowerCase();

   for (let i = 0; i < regla.length; i++) {

      if (stringEncriptar.includes(regla[i][0])) {
         stringEncriptar = stringEncriptar.replaceAll(regla[i][0], regla[i][1])
      }
   }

   return stringEncriptar

}

function Desencriptar(stringDesencriptar) {
   let regla = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
   stringDesencriptar = stringDesencriptar.toLowerCase();

   for (let i = 0; i < regla.length; i++) {

      if (stringDesencriptar.includes(regla[i][1])) {
         stringDesencriptar = stringDesencriptar.replaceAll(regla[i][1], regla[i][0])
      }
   }

   return stringDesencriptar

}