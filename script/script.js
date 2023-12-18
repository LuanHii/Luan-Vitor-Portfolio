


document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.link');
    var descricaoElement = document.getElementById('desc');
    var imgElements = document.querySelectorAll('.desc-img');

    function updateDescricao(novaDescricao, novasImagens) {
      descricaoElement.style.opacity = 0;
      descricaoElement.addEventListener('transitionend', function() {
        descricaoElement.textContent = novaDescricao;
        descricaoElement.style.opacity = 1;
      }, { once: true });

      links.forEach(link => link.classList.remove('selected'));
      this.classList.add('selected');

      updateImagens(novasImagens);
    }

    function updateImagens(novasImagens) {
      imgElements.forEach((img, index) => {
        img.style.opacity = 0;
        img.addEventListener('transitionend', function() {
          img.src = novasImagens[index];
          img.style.opacity = 1;
        }, { once: true });
      });
    }

    links.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var novaDescricao = this.getAttribute('data-descricao');
        var novasImagens = JSON.parse(this.getAttribute('data-imagens'));
        updateDescricao.call(this, novaDescricao, novasImagens);
      });
    });

    var descricaoInicial = document.querySelector('.link.selected').getAttribute('data-descricao');
    var imagensIniciais = JSON.parse(document.querySelector('.link.selected').getAttribute('data-imagens'));
    descricaoElement.textContent = descricaoInicial;

    imgElements.forEach((img, index) => {
      img.src = imagensIniciais[index];
    });
  });