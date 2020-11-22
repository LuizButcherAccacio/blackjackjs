
var tagTitulo, textoCompleto, textoAtual;

function iniciar() {
  
  //isso aqui 'desliga' a funcao:
  return;

  //document.getElementsByTagName('h1')[0].innerHTML += ' - iniciou.';

  tagTitulo = document.getElementsByTagName('h1')[0];

  textoCompleto = tagTitulo.innerHTML;

  tagTitulo.innerHTML = '&nbsp;';

  textoAtual = '';

  window.setInterval(function() {

    if (textoAtual.length == textoCompleto.length) {
      textoAtual = textoCompleto[0] + '';
    } else {
      textoAtual += textoCompleto[textoAtual.length];
    }

    //TODO: uma letra de cada cor (aleatoria)
    //dica: tagTitulo.innerHTML = '<span style="">' + textoAtual + '</span>';

    tagTitulo.innerHTML = textoAtual;

    /*
    //isso 'e a forma longa:
    if (textoAtual == '') {
      tagTitulo.innerHTML = '&nbsp;';
    } else {
      tagTitulo.innerHTML = textoAtual;
    }
    */

    //isso e a forma curta:
    //tagTitulo.innerHTML = (textoAtual == '') ? '&nbsp;' : textoAtual;


  }, 150);
}