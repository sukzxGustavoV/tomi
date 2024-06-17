// Adiciona um evento de mudança ao elemento com o id 'color-filter'
document.getElementById('color-filter').addEventListener('change', function() {
    // atribui o valor da propriedade value do elemento atual à variável filterClass.
    const filterClass = this.value; /*váriavel constante*/

    // Seleciona todas as imagens com a classe 'filter-image'
    const images = document.querySelectorAll('.filter-image');

    // Para cada imagem selecionada... método de array que executa uma função para cada elemento do array.
    images.forEach(img => {
        // Remove todas as classes existentes da imagem, exceto 'filter-image'
        img.className = 'filter-image'; // Reset the class

        // Se a classe selecionada não for 'default' (ou seja, uma opção de filtro foi selecionada)...
        if (filterClass !== 'default') {
            // Adiciona a classe selecionada à imagem
            img.classList.add(filterClass);
        }
    });
});

document.getElementById('increase-font').addEventListener('click', function() {
    changeFontSize(2); // aumenta a fonte em 2 pixels
});

document.getElementById('decrease-font').addEventListener('click', function() {
    changeFontSize(-2); // diminui a fonte em 2 pixels
});

function changeFontSize(delta) {
    var body = document.getElementsByTagName('body')[0];
    var currentFontSize = window.getComputedStyle(body, null).getPropertyValue('font-size');
    var newFontSize = (parseFloat(currentFontSize) + delta) + 'px';
    body.style.fontSize = newFontSize;
}
function validarForm() {
    var form = document.getElementById("myForm");
    var radios = form.querySelectorAll('input[type="radio"]');
    var todasRespondidas = true;
    
    radios.forEach(function(radio) {
      var question = radio.closest('.question');
      var checked = question.querySelector('input[type="radio"]:checked');
      if (!checked) {
        todasRespondidas = false;
        question.classList.add('error');
      } else {
        question.classList.remove('error');
      }
    });
    
    if (todasRespondidas) {
      form.submit();
    } else {
      alert("Por favor, responda todas as perguntas.");
    }
  }