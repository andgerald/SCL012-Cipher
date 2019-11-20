//variables de los botones codificar decodificar y offset
const buttonEncode=document.getElementById("boton1");
const buttonDecode=document.getElementById("boton2");


//evento del boton codificar

buttonEncode.addEventListener("click",() =>{
let textoEncode=document.getElementById("cod").value;
let buttonOffset=document.getElementById("position").value;
let resultadoFinal=document.getElementById("deco");
const resultado=window.cipher.encode(textoEncode,buttonOffset)
resultadoFinal.innerHTML = resultado;
});

//evento boton decodificar
buttonDecode.addEventListener("click",() =>{
let textoDecode=document.getElementById("cod").value;
let buttonOffset=document.getElementById("position").value;
let finish=document.getElementById("deco");
const resultado=window.cipher.decode(textoDecode,buttonOffset)
finish.innerHTML = resultado;
});

//boton limpiar
//let buttonclean= document.getElementById("delete")
//buttonclean.addEventListener("click",()=> {
  // let textoEncode=document.getElementById("cod").value="";
    //let textoDecode=document.getElementById("deco").value="";
    //let buttonOffset=document.getElementById("position").value="";  
//});



