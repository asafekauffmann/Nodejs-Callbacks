/* 
0-  Obter o Id de um  usuario
1- Obter o numero de telefone de um usuario a partir do seu Id
2- Obter o endereço do usuario pelo seu Id
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
    return callback(null,{
      telefone: '00221144345',
      ddd: 11
    })
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
  obterTelefone(usuario.id, function obterTelefone(error1, telefone) {
    if (error) {
      console.error("Deu Ruim em TELEFONE", error)
      return;
  }
});


//const telefone = obterTelefone(usuario.id);

//console.log('usuario', usuario);
//console.log('telefone', telefone);