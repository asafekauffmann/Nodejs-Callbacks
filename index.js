/* 
  // modelo de callBack

  // Model 01
  function myDisplayer(some) {
    document.getElementById("model").innerHTML = some;
  }

  function myCalculator(number1, number2, callback) {
    let anyNumber = number1 + number2;
    callback(anyNumber);
  }

  myCalculator(5, 5, myDisplayer);  // Chamada de função como argumento a funçãp de retorno myDisplayer.
  // Ao se passar uma função como argumento de outra, apenas passe o nome dela, exampleRight && exampleWrong().
  // Aqui chama-se a função myDisplayer como Callback e assim irá.

  
  // Model 02 Criar um array
  const myNumbers = [3, 5, 7, 12, 45, -13, 0, -39, -2, -5];

  // Chamar função removeNegative com callback
  const positiveNumbers = removeNegative(myNumbers, (x) => x >= 0);

  // Mostrar o resultado
  document.getElementById("sec").innerHTML = positiveNumbers;

  // Criando a função removeNegative
  function removeNegative(numbers, callback) {
    const myArray = [];
    for (const n of numbers) {
      if (callback(x)) {
        myArray.push(x);
      }
    }
    return myArray;
  }


  //  Model 03
  function model(caminho, callback) {
    const modelString = "MODEL";
    callback(null, modelString);
  }

  model("arquivo.txt", (error, text) => {
    if (error) {
      console.log("we got a error", error)
    } else {
      console.log("we got the text", text)
    }
  })


  // Model 04
  function obterLeitura(caminho, callback) {
    setTimeout(() => {
      const text = "text inside";
      callback(null, text); 
    }, 1000);
  }

  obterLeitura("arquivo.txt", (error, text) => {
    if (error) {
      console.log("We have a error here", error);
    } else {
      console.log("Look what i find", text);
    }
  });


  // Model 05 - Example Commented
  function moreThan(router, callback) { // assinc function for read a file.
    setTimeout(() => {
      const insideRouter = "Here some contents for you.";
      callback(null, insideRouter); // Chamamos o callback na CONTRUÇÃO DA FUNÇÃO é NULL passamos conteudo do arquivo como argumento do callback.
    }, 
    2000);
  }

  moreThan("file.txt", (error, insideRouter) => { // Chamando a função moreThan callback chama configurando o error.
    if (error) {
      console.log("Some error", error);
    } else {
      console.log("Look, works bro!", insideRouter);
    }
  })
*/



/* 

Node.js Course

0-  Obter o Id de um  usuario;
1- Obter o numero de telefone de um usuario a partir do seu Id;
2- Obter o endereço do usuario pelo seu Id;
*/

function obterUsuario(callback) {
  setTimeout(function() {
    return callback(null, 
      {
        id: 1,
        nome:  "Aladim",
        dataNascimento: new Date()
      }
    ) 
  }, 1000)
}


function obterTelefone(idUsuario, callback) {
  setTimeout(function() {
    return callback(null,
      {
      telefone: '00221144345',
      ddd: 11
      } 
    )
  }, 2000)  
}


function obterEndereco(idUsuario) {

}



function resolverUsuario(error, usuario) {
  console.log('usuario', usuario)
}


obterUsuario(function resolverUsuario(error, usuario) {
  // null || "" || 0 === false
  if (error) {
    console.error("Deu Ruim em USUARIO", error)
  return;
  }
  /* obterTelefone(usuario.id, function obterTelefone(error1, telefone) {

  } {
    if (error) {
      console.error("Deu Ruim em TELEFONE", error)
    return;
  } */
}
);


//const telefone = obterTelefone(usuario.id);

//console.log('usuario', usuario);
//console.log('telefone', telefone);