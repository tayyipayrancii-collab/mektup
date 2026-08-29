// İstediğiniz kadar görsel ekleyebilirsiniz
const images = [
    "gorsel1.jpg", // 1. Görselinizin adı
    "gorsel2.jpg"  // 2. Görselinizin adı
];

let currentIndex = 0;

const envelope = document.getElementById('envelopeWrapper');
const surpriseImg = document.getElementById('surprise-image');
const instruction = document.querySelector('.instruction');

// Zarf alanına tıklandığında aç/kapat yap
envelope.addEventListener('click', function(e) {
    // Tıklanan eleman geçiş butonları değilse zarfı aç/kapat
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
    // Butona basıldığında zarfın kapanmasını engelle
    event.stopPropagation();
    
    // Dizideki indeksi güncelle
    currentIndex += direction;
    
    if (currentIndex >= images.length) {
        currentIndex = 0; // Son resimdeyse başa dön
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1; // İlk resimdeyse sona git
    }
    
    // Yumuşak geçiş efekti ile görseli değiştir
    surpriseImg.style.opacity = 0;
    setTimeout(() => {
        surpriseImg.src = images[currentIndex];
        surpriseImg.style.opacity = 1;
    }, 200);
}
