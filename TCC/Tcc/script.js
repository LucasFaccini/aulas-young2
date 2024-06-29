document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });

        project.addEventListener('mouseleave', () => {
            project.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        });
    });
});

document.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    document.getElementById('background').style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});