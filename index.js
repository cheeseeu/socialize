document.addEventListener('DOMContentLoaded', function() {
    // Get all anchor links ending with #something
    var links = document.querySelectorAll('a[href*="#"]:not([href="#"])');
    
    // Loop through each link
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();

            try {
            // Get target section ID from link's href attribute
            var targetId = link.getAttribute('href').substring(1);

            // Scroll to the target section
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        } catch (error) {
            return;
        }
        });
    });
});

const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

ctx.beginPath();
ctx.moveTo(0, height / 2);

for (let i = 0; i <= width; i++) {
  const y = Math.sin(i * Math.PI / 180) * 50 + height / 2;
  ctx.lineTo(i, y);
}

ctx.lineTo(width, height);
ctx.lineTo(0, height);
ctx.closePath();

const gradient = ctx.createLinearGradient(0, 0, 0, height);
gradient.addColorStop(0, 'rgba(255, 168, 0, 0.6)');
gradient.addColorStop(1, 'rgba(223, 101, 3, 1)');

ctx.fillStyle = gradient;
ctx.fill();






function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

function randomGradient() {
    return `linear-gradient(${randomInRange(0, 360)}deg, rgba(${Math.floor(randomInRange(0, 255))}, ${Math.floor(randomInRange(0, 255))}, ${Math.floor(randomInRange(0, 255))}, 1), rgba(${Math.floor(randomInRange(0, 255))}, ${Math.floor(randomInRange(0, 255))}, ${Math.floor(randomInRange(0, 255))}, 1))`;
}

function createTriangle() {
    const triangle = document.createElement('div');
    triangle.className = 'triangle';

    // Generate a random size for the triangle
    const size = randomInRange(20, 50); // Adjust min and max sizes as needed
    const halfSize = size / 2;

    // Set the size and transparent borders to create a triangle shape
    triangle.style.width = `0`;
    triangle.style.height = `0`;
    triangle.style.borderLeft = `${halfSize}px solid transparent`;
    triangle.style.borderRight = `${halfSize}px solid transparent`;
    triangle.style.borderBottom = `${size}px solid rgba(255, 168, 0, 1)`;

    // Position the triangle randomly within the container
    triangle.style.left = `${randomInRange(0, 100)}%`;
    triangle.style.top = `${randomInRange(0, 100)}%`;

    // Apply a random rotation
    triangle.style.transform = `rotate(${randomInRange(0, 360)}deg)`;

    // Add a class for smaller triangles to apply blur effect
    if (size < 35) {
        triangle.classList.add('blurry');
    }

    return triangle;
}

function addTriangles(numTriangles) {
    const container = document.getElementById('container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    for (let i = 0; i < numTriangles; i++) {
        const triangle = createTriangle();
        container.appendChild(triangle);

        // Trigger reflow to ensure transition is applied
        triangle.getBoundingClientRect();

        // Remove opacity style to trigger the transition
        triangle.style.opacity = '1';
    }
}

addTriangles(10);
