document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopButton = document.getElementById("scroll-to-top");
  var mobileColumns = document.querySelectorAll(".mobile-column");
  var searchInputDesktop = document.getElementById("search-input");
  var searchInputMobile = document.getElementById("search-input");
  var carousel = document.getElementById("carouselExampleIndicators");

  function filterItems(searchTerm) {
    mobileColumns.forEach(function (column) {
      var items = column.querySelectorAll(".entry-title-link");
      items.forEach(function (item) {
        var title = item.innerText.toLowerCase();
        var isVisible = title.includes(searchTerm);
        item.closest(".mobile-column").style.display = isVisible ? "block" : "none";
      });
    });
  }

  function handleSearchInput(inputElement) {
    var searchTerm = inputElement.value.toLowerCase();
    filterItems(searchTerm);

    // Ocultar o carrossel se houver qualquer entrada no campo de pesquisa
    carousel.style.display = searchTerm.length > 0 ? "none" : "block";
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    handleSearchInput(searchInputDesktop);
  }

  searchInputDesktop.addEventListener("input", function () {
    handleSearchInput(searchInputDesktop);
  });

  searchInputMobile.addEventListener("input", function () {
    handleSearchInput(searchInputMobile);
  });

  // Adicionado tratamento para o envio do formulário
  document.querySelector("form").addEventListener("submit", handleFormSubmit);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Função para fechar o menu hamburguer
  function closeMobileMenu() {
    // Substitua o seletor abaixo pelo ID real do seu menu hamburguer
    var mobileMenu = document.getElementById("navbarToggleExternalContent");

    // Adicione a lógica para fechar o menu hamburguer aqui
    // Exemplo:
    if (mobileMenu && mobileMenu.classList.contains("show")) {
      mobileMenu.classList.remove("show");
    }
  }

  // Adiciona o evento de clique para todos os links do menu hamburguer
  var mobileMenuLinks = document.querySelectorAll("#navbarToggleExternalContent a");
  mobileMenuLinks.forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
  });
});
