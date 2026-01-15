// Portfolio Filter Functionality

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter cards
            portfolioCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all') {
                    card.style.display = 'block';
                    // Trigger animation
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else if (category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Initialize with all visible
    portfolioCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
});
