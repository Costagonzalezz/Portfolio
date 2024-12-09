// Pegando os elementos que preciso
const slider = document.getElementById('imageSlider'); // O container dos slides
const slides = Array.from(slider.children); // Transformando os slides em array pra facilitar 
const totalSlides = slides.length; // Total de slides que tem
const slidesVisible = 4; // Quantos slides aparecem por vez

// Função que faz a magica acontecer
function moveSlider(direction) {
   // Se direction é positivo, vai pra direita
   if (direction > 0) {
       // Primeiro coloca a transição suave
       slider.style.transition = 'transform 0.5s ease-in-out';
       // Move os slides pro lado (usando o cálculo de quanto precisa mover baseado em quantos slides aparecem)
       slider.style.transform = `translateX(-${100 / slidesVisible}%)`;

       // Depois que terminou de mover...
       setTimeout(() => {
           // Tira a transição pra não ver a mágica acontecendo
           slider.style.transition = 'none';
           // Pega o primeiro slide e joga pro final
           slider.appendChild(slider.firstElementChild);
           // Volta tudo pro lugar sem ninguém perceber
           slider.style.transform = 'translateX(0)';
           // Devolve a transição suave depois de um tempinho
           setTimeout(() => {
               slider.style.transition = 'transform 0.5s ease-in-out';
           }, 50);
       }, 500);
   } else {
       // Se tá indo pra esquerda, é mais ou menos a mesma coisa só que ao contrário
       // Tira a transição primeiro
       slider.style.transition = 'none';
       // Pega o último e joga no começo
       slider.prepend(slider.lastElementChild);
       // Move tudo pro lado
       slider.style.transform = `translateX(-${100 / slidesVisible}%)`;

       // Depois de um tempinho...
       setTimeout(() => {
           // Coloca a transição de volta
           slider.style.transition = 'transform 0.5s ease-in-out';
           // E move suavemente pro lugar
           slider.style.transform = 'translateX(0)';
       }, 50);
   }
}

// Chama a função uma vez quando carrega pra garantir que tá tudo no lugar
moveSlider(0);