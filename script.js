// Görsellerin adlarını buraya ekliyoruz (4 Adet)
const images = [
    "gorsel1.jpg", // 1. Görsel
    "gorsel2.jpg", // 2. Görsel
    "gorsel3.jpg", // 3. Görsel
    "gorsel4.jpg"  // 4. Görsel
];

let currentIndex = 0;

const envelope = document.getElementById('envelopeWrapper');
const surpriseImg = document.getElementById('surprise-image');
const instruction = document.querySelector('.instruction');

// Zarf alanına tıklandığında aç/kapat yap
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

// Görseller arası geçiş fonksiyonu
function changeImage(direction, event) {
    event.stopPropagation();
    
    currentIndex += direction;
    
    // 4 fotoğrafa göre döngü kontrolü
    if (currentIndex >= images.length) {
        currentIndex = 0; // 4. resimden sonra 1. resme döner
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1; // 1. resimdeyken geriye basılırsa 4. resme gider
    }
    
    surpriseImg.style.opacity = 0;
    setTimeout(() => {
        surpriseImg.src = images[currentIndex];
        surpriseImg.style.opacity = 1;
    }, 200);
}
