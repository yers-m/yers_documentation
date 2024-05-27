// Initialize slide indices for multiple slideshows
var slideIndices = {};

// Function to change slides
function plusSlides(n, slideshowId) {
    showSlides(slideIndices[slideshowId] += n, slideshowId);
}

// Function to show a specific slide
function currentSlide(n, slideshowId) {
    showSlides(slideIndices[slideshowId] = n, slideshowId);
}

// Main function to display slides
function showSlides(n, slideshowId) {
    var i;
    var slideshow = document.getElementById(slideshowId);
    var slides = slideshow.getElementsByClassName("mySlides");
    if (n > slides.length) { // Wrap around to the first slide
        slideIndices[slideshowId] = 1;
    }
    if (n < 1) { // Wrap around to the last slide
        slideIndices[slideshowId] = slides.length;
    }
    for (i = 0; i < slides.length; i++) { // Hide all slides
        slides[i].style.display = "none";
    }
    slides[slideIndices[slideshowId] - 1].style.display = "block"; // Show the current slide
}

// Initial setup for each slideshow
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.slideshow-container').forEach(container => {
        var id = container.id;
        slideIndices[id] = 1;
        showSlides(1, id);
    });

    // Zoom functionality for images
    document.querySelectorAll('.zoom').forEach(img => {
        img.addEventListener('click', function() {
            if (this.classList.contains('zoomed')) {
                this.classList.remove('zoomed'); // Remove zoom
                document.getElementById('dimmed-overlay').remove(); // Remove dimmed overlay
            } else {
                this.classList.add('zoomed'); // Add zoom
                const overlay = document.createElement('div');
                overlay.classList.add('dimmed-overlay');
                overlay.id = 'dimmed-overlay';
                document.body.appendChild(overlay); // Add dimmed overlay
            }
        });
    });

    // Add captions based on file names
    document.querySelectorAll('.image-container').forEach(container => {
        const img = container.querySelector('img');
        const caption = container.querySelector('.caption');
        const fileName = img.src.split('/').pop().split('.')[0]; // Extract file name
        caption.innerText = fileName.replace(/_/g, ' '); // Set caption text
    });
});

