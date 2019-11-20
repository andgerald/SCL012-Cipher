window.cipher = {
  encode: (textoEncode,buttonOffset) => {
   let saveText= "";
    for (let i=0;i<textoEncode.length;i++){
      let codeAscii=textoEncode.charCodeAt(i)
      if(codeAscii>=65 && codeAscii<=90){
        let resultado =(codeAscii - 65 + parseInt(buttonOffset)) % 26 + 65;
        saveText+=String.fromCharCode(resultado);
      }
      
      else if(codeAscii>=32 && codeAscii<=32){
        let resultado =(codeAscii - 32 + parseInt(buttonOffset)) % 1 + 32;
        saveText+=String.fromCharCode(resultado);
      }
        else if (codeAscii>=97 && codeAscii<=122){
          let resultado=(codeAscii- 97 + parseInt(buttonOffset)) % 26 +97;
          saveText+=String.fromCharCode(resultado);
        
      }
  
    }
    
    return saveText;
   
  },
  decode: (textoDecode,buttonOffset) => {
    
    let saveText= "";
    for (let i=0;i<textoDecode.length;i++){
      let codeAscii=textoDecode.charCodeAt(i)
      if(codeAscii>=65 && codeAscii<=90){
        let resultado =(codeAscii - 90 - parseInt(buttonOffset)) % 26 + 90;
        saveText+=String.fromCharCode(resultado);

      }
      else if(codeAscii>=32 && codeAscii<=32){
        let resultado =(codeAscii - 32 - parseInt(buttonOffset)) % 1 + 32;
        saveText+=String.fromCharCode(resultado);
    }
    else if (codeAscii>=97 && codeAscii<=122){
      let resultado =(codeAscii - 122 - parseInt(buttonOffset)) % 26 + 122;
      saveText+=String.fromCharCode(resultado);
      }
    }

    return saveText;

  }
};

