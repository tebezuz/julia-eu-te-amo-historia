document.addEventListener('DOMContentLoaded', function() {
    // Animação suave para scroll
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Adiciona classe de destaque aos períodos quando visíveis
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.period').forEach(period => {
        period.style.opacity = '0';
        period.style.transform = 'translateY(20px)';
        period.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(period);
    });
});
