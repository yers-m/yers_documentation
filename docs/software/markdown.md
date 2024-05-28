# Markdown

## Slideshow of figures

* Functionalities 
    * slide show
    * height determines dimensions of the image
    * 1.8x zoom-in by clicking 
        * can be changed in `transform: scale(1.8)`
    * dimmed overlay
        * to dim everything around figure when zoomed in

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

/* Dimmed overlay */
.dimmed-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
    z-index: 9; /* Ensure the overlay is below the zoomed image */
    pointer-events: none; /* Allow interaction with elements behind the overlay */
}

.dimmed-overlay.zoomed {
    display: none; /* Hide the overlay when an image is zoomed */
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
```

### Linking in Markdown file

* the code used in any markdown file (.md) within Github Pages
    * change `slideshow_i` with slideshow number for separate slidesshows (e.g. slideshow_1, slideshow_2)
    * change `slide_i` with path/link to image
    * change `...` with path to your main GitHub repository 

```html
#### Slideshow i
<div class="slideshow-container" id="slideshow_i">
    <div class="mySlides">
        <div class="image-container">
            <img src="image_i" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <a class="prev" onclick="plusSlides(-1, 'slideshow_i')">❮</a>
    <a class="next" onclick="plusSlides(1, 'slideshow_i')">❯</a>
</div>

*Caption for Slideshow*

<link rel="stylesheet" href=".../docs/stylesheets/extra.css">
<script src=".../docs/javascripts/custom.js"></script>
```

### Demonstration  

#### Slideshow 1
<div class="slideshow-container" id="slideshow1">
    <!-- Each slide with image and caption -->
    <div class="mySlides">
        <div class="image-container">
            <img src="https://matt.might.net/articles/phd-school-in-pictures/images/PhDKnowledge.007.jpg" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <div class="mySlides">
        <div class="image-container">
            <img src="https://matt.might.net/articles/phd-school-in-pictures/images/PhDKnowledge.008.jpg" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <div class="mySlides">
        <div class="image-container">
            <img src="https://matt.might.net/articles/phd-school-in-pictures/images/PhDKnowledge.009.jpg" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <div class="mySlides">
        <div class="image-container">
            <img src="https://matt.might.net/articles/phd-school-in-pictures/images/PhDKnowledge.010.jpg" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <div class="mySlides">
        <div class="image-container">
            <img src="https://matt.might.net/articles/phd-school-in-pictures/images/PhDKnowledge.012.jpg" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <!-- Navigation buttons -->
    <a class="prev" onclick="plusSlides(-1, 'slideshow1')">❮</a>
    <a class="next" onclick="plusSlides(1, 'slideshow1')">❯</a>
</div>

*Images were adopted from Matt Might. "The illustrated guide to a Ph.D." [🔗](https://matt.might.net/articles/phd-school-in-pictures/)*

#### Slideshow 2
<div class="slideshow-container" id="slideshow2">
    <!-- Each slide with image and caption -->
    <div class="mySlides">
        <div class="image-container">
            <img src="http://www.phdcomics.com/comics/archive/phd050508s.gif" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <div class="mySlides">
        <div class="image-container">
            <img src="http://www.phdcomics.com/comics/archive/phd092809s.gif" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <div class="mySlides">
        <div class="image-container">
            <img src="http://www.phdcomics.com/comics/archive/phd031305s.gif" class="zoom">
            <div class="caption"></div>
        </div>
    </div>
    <!-- Navigation buttons -->
    <a class="prev" onclick="plusSlides(-1, 'slideshow2')">❮</a>
    <a class="next" onclick="plusSlides(1, 'slideshow2')">❯</a>
</div>

*Comics were adopted from Jorge Cham. "The 200 Most Popular Comics" [🔗](https://phdcomics.com/comics/most_popular.php)*

<link rel="stylesheet" href="https://github.com/yers-m/documentation/raw/main/docs/stylesheets/extra.css">
<script src="https://github.com/yers-m/documentation/raw/main/docs/javascripts/custom.js"></script>

---

## 3Dmol.js
### Description
* 3D molecular visualization tool for web browsers.
* Interactive: Real-time manipulation (rotate, zoom).
* Customizable: Supports various rendering styles (stick, sphere, cartoon) and color schemes.
* Ease of Use: Simple JavaScript API for web developers.
* Ideal for embedding in web pages and applications.
* Open Source [3Dmol.js GitHub webpage](https://github.com/3dmol/3Dmol.js)

* Ideas for the future:
    * synchronised view

### Demonstration
#### Example 1: Caffeine
* input

```html
<center><div style="height: 450px; width: 100%; position: relative;" class='viewer_3Dmoljs' data-cid='2519' data-backgroundcolor='0xffffff' data-style='stick:colorscheme=cyanCarbon' data-ui='true'></div></center>

<script src="https://3Dmol.org/build/3Dmol-min.js"></script>     
<script src="https://3Dmol.org/build/3Dmol.ui-min.js"></script>  
```

* Output

<center><div style="height: 450px; width: 100%; position: relative;" class='viewer_3Dmoljs' data-cid='2519' data-backgroundcolor='0xffffff'    data-style='stick:colorscheme=cyanCarbon' data-ui='true'></div></center>

*Structure of caffeine. "CID:2519" [🔗](https://pubchem.ncbi.nlm.nih.gov/compound/Caffeine)*

#### Example 2: 

*

```html
<center><div style="height: 450px; width: 100%; position: relative;" class='viewer_3Dmoljs' data-pdb='3EML' data-backgroundcolor='0xffffff'
        data-style='stick:colorscheme=cyanCarbon' data-ui='true'></div></center>

<center><div style="height: 450px; width: 100%; position: relative;" class='viewer_3Dmoljs' data-pdb='3EML' data-backgroundcolor='0xffffff'
        data-style='cartoon:color=spectrum' data-surface='opacity:.5'></div></center>

<script src="https://3Dmol.org/build/3Dmol-min.js"></script>     
<script src="https://3Dmol.org/build/3Dmol.ui-min.js"></script>  
```
*

<center><div style="height: 450px; width: 100%; position: relative;" class='viewer_3Dmoljs' data-pdb='3EML' data-backgroundcolor='0xffffff'
        data-style='stick:colorscheme=cyanCarbon' data-ui='true'></div></center>

<center><div style="height: 450px; width: 100%; position: relative;" class='viewer_3Dmoljs' data-pdb='3EML' data-backgroundcolor='0xffffff'
        data-style='cartoon:color=spectrum' data-surface='opacity:.5'></div></center>

*Structure of Human A2A Adenosine Receptor bound to ZM241385. It is antagonized by caffeine. "PDB:3EML" [🔗](https://www.rcsb.org/structure/3EML)*

---

<script src="https://3Dmol.org/build/3Dmol-min.js"></script>     
<script src="https://3Dmol.org/build/3Dmol.ui-min.js"></script>    

---
