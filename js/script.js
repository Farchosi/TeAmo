document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter-container');

    envelope.addEventListener('click', () => {
        envelope.style.display = 'none';
        letter.style.display = 'block';
        window.scrollTo({ top: letter.offsetTop - 50, behavior: 'smooth' });
    });
});

function nextPage(num) {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 }, colors: ['#ff4d4d'] });

    const currentPage = document.querySelector('.page.active');
    const nextP = document.getElementById('p' + num);

    currentPage.classList.remove('active');
    nextP.classList.add('active');

    // Scroll suave para simular que bajamos por el pergamino
    setTimeout(() => {
        window.scrollBy({ top: 300, behavior: 'smooth' });
    }, 100);
}

function showGiftScreen() {
    const letter = document.getElementById('letter-container');
    const giftScreen = document.getElementById('gift-screen');

    // La carta se va hacia arriba
    letter.classList.add('fade-up-out');

    // Traemos el regalo desde el fondo
    setTimeout(() => {
        letter.style.display = 'none';
        giftScreen.style.display = 'block';
        setTimeout(() => giftScreen.classList.add('visible'), 50);
    }, 800);
}

function triggerGift() {
    const paper = document.querySelector('.folded-paper');
    const btn = document.getElementById('open-gift-btn');
    const giftContent = document.getElementById('final-gift');

    // Animación de apertura
    btn.style.opacity = '0';
    setTimeout(() => {
        btn.style.display = 'none';
        paper.classList.add('open');
        
        // Revelar texto final
        setTimeout(() => {
            giftContent.classList.add('reveal');
            confetti({ particleCount: 150, spread: 100 });
        }, 600);
    }, 400);
}