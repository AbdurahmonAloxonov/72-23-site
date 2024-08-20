// Modalni ochish va yopish
const modal = document.getElementById('myModal');
const btn = document.querySelector('.learn-more');
const span = document.querySelector('.close');

// Modalni ochish
btn.onclick = () => {
    modal.style.display = 'block';
}

// Modalni yopish
span.onclick = () => {
    modal.style.display = 'none';
}

// Modal tashqarisiga bosilganda yopish
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Slaydlarni ko‘rsatish
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    Array.from(slides).forEach((slide, index) => {
        slide.style.display = index + 1 === slideIndex ? "block" : "none";
    });
}

// Modal fon rangini animatsiya qilish
const modalContent = document.querySelector('.modal-content');
modalContent.addEventListener('mouseover', () => {
    modalContent.style.animation = 'colorChange 2s infinite';
});
modalContent.addEventListener('mouseout', () => {
    modalContent.style.animation = 'none';
});
