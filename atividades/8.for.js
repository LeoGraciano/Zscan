//Veja o código a seguir e responda as perguntas a seguir.


//8.a
for (var i = 0; i <= 3; i++) {
    setTimeout(function () { console.log(i); }, 100);
}
//sequencia de chamada no consolo do numero 4, porquê quando disparado a função do timeout o valor variavel i já foi alterado para seu ultimo estado.


//8.b
for (var i = 0; i <= 3; i++) {
    console.log(i)
}
//só removendo o timeout para ser chamando sem delay