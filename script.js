const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const menuOverlay = document.getElementById('menuOverlay');

if (!hamburger || !sidebar || !menuOverlay) {
    console.error('Menu elements not found!');
    console.log('Hamburger:', hamburger);
    console.log('Sidebar:', sidebar);
    console.log('Menu Overlay:', menuOverlay);
}

if (hamburger) {
    hamburger.addEventListener('click', function(e) {
        console.log('Hamburger clicked!');
        e.stopPropagation();
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
        menuOverlay.classList.toggle('active');
    });
}

if (menuOverlay) {
    menuOverlay.addEventListener('click', function() {
        console.log('Overlay clicked');
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        menuOverlay.classList.remove('active');
    });
}

if (sidebar) {
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', function() {
            console.log('Link clicked');
            hamburger.classList.remove('active');
            sidebar.classList.remove('active');
            menuOverlay.classList.remove('active');
        });
    });
}

document.querySelectorAll('.info-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.info-section').forEach(section => {
    observer.observe(section);
});