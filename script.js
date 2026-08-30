const images = [
    "gorsel1.jpg",
    "gorsel2.jpg",
    "gorsel3.jpg",
    "gorsel4.jpg"
];

let currentIndex = 0;

const envelope = document.getElementById('envelopeWrapper');
const surpriseImg = document.getElementById('surprise-image');
const instruction = document.querySelector('.instruction');

envelope.addEventListener('click', function(e) {
    if (!e.target.classList.contains('nav-btn')) {
        envelope.classList.toggle('open');
        
        if (envelope.classList.contains('open')) {
            instruction.textContent = "Kapatmak için dışarıya tıkla!";
        } else {
            instruction.textContent = "Açmak için zarfa tıkla!";
        }
    }
});

function changeImage(direction, event) {
    event.stopPropagation();
    currentIndex += direction;
    
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    
    surpriseImg.style.opacity = 0;
    setTimeout(() => {
        surpriseImg.src = images[currentIndex];
        surpriseImg.style.opacity = 1;
    }, 200);
}
