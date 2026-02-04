var size = 24;
window.onload = main;
function main() {
    animate();
}

function animate() {
    size += 2;
    if (size > 72) { size = 12; }
    document.getElementById('box').innerText = size;
    document.getElementById('ttl').style.fontSize = size+'pt';
    timeout = setTimeout(animate, 250);
}