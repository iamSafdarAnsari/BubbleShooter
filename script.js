const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 600;

const bubbleRadius = 20;
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
const bubbles = [];

function createBubble(x, y, color) {
    return { x, y, color, popped: false };
}

function drawBubble(bubble) {
    if (!bubble.popped) {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubbleRadius, 0, Math.PI * 2);
        ctx.fillStyle = bubble.color;
        ctx.fill();
        ctx.closePath();
    }
}

function initBubbles() {
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 8; col++) {
            const x = bubbleRadius + col * (bubbleRadius * 2 + 5);
            const y = bubbleRadius + row * (bubbleRadius * 2 + 5);
            const color = colors[Math.floor(Math.random() * colors.length)];
            bubbles.push(createBubble(x, y, color));
        }
    }
}

function drawBubbles() {
    bubbles.forEach(drawBubble);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gameLoop() {
    clearCanvas();
    drawBubbles();
    // Here you would add shooting mechanics and collision detection
    requestAnimationFrame(gameLoop);
}

canvas.addEventListener('click', (event) => {
    const clickX = event.clientX - canvas.offsetLeft;
    const clickY = event.clientY - canvas.offsetTop;
    // Handle shooting the bubble towards the clicked position
});

initBubbles();
gameLoop();
