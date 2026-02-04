var size = 12;
window.onload = main;
function main() {
    animate();
}

function animate() {
    size += 2;
    if (size > 72) size = 12;
    let ttl = document.getElementById('ttl');
    ttl.style.fontSize = size;
    setTimeout(animate, 500);
}