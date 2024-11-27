document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider2");
  const slides = document.querySelectorAll(".pacote-card");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const slideWidth = slides[0].offsetWidth + 15; // Inclui o gap
  const totalSlides = slides.length;
  let currentIndex = 0;

  // Duplica os slides no início e no final
  const duplicateSlides = () => {
    slides.forEach((slide) => {
      const cloneEnd = slide.cloneNode(true);
      slider.appendChild(cloneEnd);

      const cloneStart = slide.cloneNode(true);
      slider.insertBefore(cloneStart, slider.firstChild);
    });
    slider.style.transform = `translateX(-${totalSlides * slideWidth}px)`; // Ajusta a posição inicial
  };

  duplicateSlides();

  // Atualiza o slider com transição
  const updateSlider = () => {
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    slider.style.transition = "transform 0.5s ease";
  };

  // Remove transição para ajuste instantâneo
  const resetSlider = () => {
    slider.style.transition = "none";
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  };

  // Botão "Próximo"
  nextBtn.addEventListener("click", () => {
    currentIndex++;
    updateSlider();

    if (currentIndex >= totalSlides * 2) {
      setTimeout(() => {
        currentIndex = totalSlides;
        resetSlider();
      }, 500);
    }
  });

  // Botão "Anterior"
  prevBtn.addEventListener("click", () => {
    currentIndex--;
    updateSlider();

    if (currentIndex < 0) {
      setTimeout(() => {
        currentIndex = totalSlides - 1;
        resetSlider();
      }, 500);
    }
  });

});



document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev2");
    const nextBtn = document.querySelector(".next2");
    const slideWidth = slides[0].offsetWidth + 10;
    const totalSlides = slides.length;
    let currentIndex = 0;
  
    // Duplica os slides no início e no final
    const duplicateSlides = () => {
      slides.forEach((slide) => {
        const cloneEnd = slide.cloneNode(true); // Clone para o final
        slider.appendChild(cloneEnd);
  
        const cloneStart = slide.cloneNode(true); // Clone para o início
        slider.insertBefore(cloneStart, slider.firstChild);
      });
      slider.style.transform = `translateX(-${totalSlides * slideWidth}px)`; // Ajusta a posição inicial
    };
  
    duplicateSlides();
  
    // Atualiza o slider com transição
    const updateSlider = () => {
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      slider.style.transition = "transform 0.5s ease";
    };
  
    // Remove transição para ajuste instantâneo
    const resetSlider = () => {
      slider.style.transition = "none";
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };
  
    // Função de rolagem automática
    const autoSlide = () => {
      currentIndex++;
      updateSlider();
  
      // Caso especial: reiniciar no começo
      if (currentIndex >= totalSlides * 2) {
        setTimeout(() => {
          currentIndex = totalSlides;
          resetSlider();
        }, 500); // Tempo igual ao da transição
      }
    };
  
    // Intervalo para rolagem automática
    let autoSlideInterval = setInterval(autoSlide, 5000);
  
    // Pausa e reinício do intervalo automático
    const stopAutoSlide = () => clearInterval(autoSlideInterval);
    const startAutoSlide = () => {
      autoSlideInterval = setInterval(autoSlide, 5000);
    };
  
    // Botão "Próximo"
    nextBtn.addEventListener("click", () => {
      stopAutoSlide();
      currentIndex++;
      updateSlider();
  
      if (currentIndex >= totalSlides * 2) {
        setTimeout(() => {
          currentIndex = totalSlides;
          resetSlider();
        }, 500); // Tempo igual ao da transição
      }
  
      startAutoSlide();
    });
  
    // Botão "Anterior"
    prevBtn.addEventListener("click", () => {
      stopAutoSlide();
      currentIndex--;
      updateSlider();
  
      if (currentIndex < 0) {
        setTimeout(() => {
          currentIndex = totalSlides - 1;
          resetSlider();
        }, 500); // Tempo igual ao da transição
      }
  
      startAutoSlide();
    });
  
    // Pausa ao passar o mouse
    const sliderContainer = document.querySelector(".slider-container");
    sliderContainer.addEventListener("mouseover", stopAutoSlide);
    sliderContainer.addEventListener("mouseout", startAutoSlide);
  
    // Inicia automaticamente
    startAutoSlide();
  });
  