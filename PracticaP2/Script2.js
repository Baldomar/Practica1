document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'a0f0bca2480d59d197a976b0ef237a96.jpg',
        'cyber-security-hacker_811396-12176.jpg',
        'hacknew.png',
        'hacker.jpeg'
    ];

    let currentImageIndex = 0;
    const hackerImage = document.getElementById('hackerImage');

    function changeImage() {
        hackerImage.src = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Iniciar cambio de imágenes cada 5 segundos
    setInterval(changeImage, 2000);
    
    document.getElementById('learnMoreBtn').addEventListener('click', function() {
        alert('Descubre más sobre el mundo de los hackers. ¡Visita nuestra sección de recursos!');
    });
});
