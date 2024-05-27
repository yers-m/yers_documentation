# Markdown

## How to make slide show of figures

* the slideshow functionality across multiple markdown files in GitHub Pages
    * use CSS code 
    * use JavaScript code
    * combine both in markdown file

### CSS code for slideshow

* the code used in .../docs/javascripts/extra.css

```css
/* Container for the entire slideshow */
.slideshow-container {
    max-width: 800px;
    min-width: 450px;
    position: relative;
    margin: auto;
}

/* Hide all slides by default */
.mySlides {
    display: none;
}

/* Container for each image to standardize dimensions */
.image-container {
    width: 100%;
    height: 300px;
    overflow: visible; /* Allow overflow for zoom effect */
    position: relative;
    max-width: 800px;
    min-width: 450px;
}

/* Image styling for proper fit and zoom effect */
.image-container img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Ensure the entire image is visible within the container */
    transition: transform 0.2s ease-in-out;
}

/* Navigation buttons */
.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 0;
    width: auto;
    height: 100%;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Position the "next" button on the right */
.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

/* Border radius for "prev" button */
.prev {
    border-radius: 0 3px 3px 0;
}

/* Hover effects for navigation buttons */
.prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

/* Caption styling */
.caption {
    text-align: center;
    color: #f2f2f2;
    padding: 8px 12px;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    bottom: 0;
    width: 100%;
}

/* Styles for zoom effect */
.zoom {
    cursor: zoom-in;
}
.zoomed {
    transform: scale(2);
    cursor: zoom-out;
    position: relative;
    z-index: 10; /* Ensure zoomed image is above other elements */
}
```
### JavaScript code for slideshow

* the code used in .../docs/javascripts/custom.js

```javascript
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
            } else {
                this.classList.add('zoomed'); // Add zoom
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
```

### Linking in Markdown file

* the code used in any markdown file (.md) within Github Pages

```markdown
#### Slideshow 1
<div class="slideshow-container" id="slideshow1">
    <!-- Each slide with image and caption -->
    <div class="mySlides">
        <div class="image-container">
            <img src="https://github.com/yers-m/documentation/raw/main/docs/software/figures/py3Dmol_cortisol.png" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <div class="mySlides">
        <div class="image-container">
            <img src="https://github.com/yers-m/documentation/raw/main/docs/software/figures/py3Dmol_17-OHP.png" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <div class="mySlides">
        <div class="image-container">
            <img src="https://github.com/yers-m/documentation/raw/main/docs/software/figures/py3Dmol_CBG.png" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <!-- Navigation buttons -->
    <a class="prev" onclick="plusSlides(-1, 'slideshow1')">❮</a>
    <a class="next" onclick="plusSlides(1, 'slideshow1')">❯</a>
</div>

#### Slideshow 2
<div class="slideshow-container" id="slideshow2">
    <!-- Each slide with image and caption -->
    <div class="mySlides">
        <div class="image-container">
            <img src="https://github.com/yers-m/documentation/raw/main/docs/Literature/screenshots/study_design_2014_Charite.png" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <div class="mySlides">
        <div class="image-container">
            <img src="https://github.com/yers-m/documentation/raw/main/docs/Literature/screenshots/study_design_2015_Whitaker.png" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <div class="mySlides">
        <div class="image-container">
            <img src="https://github.com/yers-m/documentation/raw/main/docs/Literature/screenshots/study_design_2016_Debono.png" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <!-- Navigation buttons -->
    <a class="prev" onclick="plusSlides(-1, 'slideshow2')">❮</a>
    <a class="next" onclick="plusSlides(1, 'slideshow2')">❯</a>
</div>

<link rel="stylesheet" href="https://github.com/yers-m/documentation/raw/main/docs/stylesheets/extra.css">
<script src="https://github.com/yers-m/documentation/raw/main/docs/javascripts/custom.js"></script>
```

### Result

<!-- <div class="dimmed-overlay" id="dimmed-overlay"></div> -->

#### Slideshow 1
<div class="slideshow-container" id="slideshow1">
    <!-- Each slide with image and caption -->
    <div class="mySlides">
        <div class="image-container">
            <img src="https://github.com/yers-m/documentation/raw/main/docs/software/figures/py3Dmol_cortisol.png" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <div class="mySlides">
        <div class="image-container">
            <img src="https://github.com/yers-m/documentation/raw/main/docs/software/figures/py3Dmol_17-OHP.png" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <div class="mySlides">
        <div class="image-container">
            <img src="https://github.com/yers-m/documentation/raw/main/docs/software/figures/py3Dmol_CBG.png" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <!-- Navigation buttons -->
    <a class="prev" onclick="plusSlides(-1, 'slideshow1')">❮</a>
    <a class="next" onclick="plusSlides(1, 'slideshow1')">❯</a>
</div>

#### Slideshow 2
<div class="slideshow-container" id="slideshow2">
    <!-- Each slide with image and caption -->
    <div class="mySlides">
        <div class="image-container">
            <img src="https://github.com/yers-m/documentation/raw/main/docs/Literature/screenshots/study_design_2014_Charite.png" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <div class="mySlides">
        <div class="image-container">
            <img src="https://github.com/yers-m/documentation/raw/main/docs/Literature/screenshots/study_design_2015_Whitaker.png" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <div class="mySlides">
        <div class="image-container">
            <img src="https://github.com/yers-m/documentation/raw/main/docs/Literature/screenshots/study_design_2016_Debono.png" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <!-- Navigation buttons -->
    <a class="prev" onclick="plusSlides(-1, 'slideshow2')">❮</a>
    <a class="next" onclick="plusSlides(1, 'slideshow2')">❯</a>
</div>

<link rel="stylesheet" href="https://github.com/yers-m/documentation/raw/main/docs/stylesheets/extra.css">
<script src="https://github.com/yers-m/documentation/raw/main/docs/javascripts/custom.js"></script>

---
