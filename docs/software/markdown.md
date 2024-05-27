# Markdown

## How to make slide show of figures


<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slideshow</title>
    <style>
        .slideshow-container {
            max-width: 500px;
            position: relative;
            margin: auto;
        }
        .mySlides {
            display: none;
        }
        img {
            width: 100%;
            height: 300px;
            object-fit: cover;
        }
        .prev, .next {
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: auto;
            margin-top: -22px;
            padding: 16px;
            color: white;
            font-weight: bold;
            font-size: 18px;
            transition: 0.6s ease;
            border-radius: 0 3px 3px 0;
            user-select: none;
        }
        .next {
            right: 0;
            border-radius: 3px 0 0 3px;
        }
        .prev:hover, .next:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }
        .caption {
            text-align: center;
            color: #f2f2f2;
            padding: 8px 12px;
            background-color: rgba(0, 0, 0, 0.8);
        }
    </style>
</head>
<body>

<div class="slideshow-container">
    <div class="mySlides">
        <img src="https://github.com/yers-m/documentation/raw/main/docs/software/figures/py3Dmol_cortisol.png">
    </div>
    <div class="mySlides">
        <img src="https://github.com/yers-m/documentation/raw/main/docs/software/figures/py3Dmol_17-OHP.png">
    </div>
    <div class="mySlides">
        <img src="https://github.com/yers-m/documentation/raw/main/docs/software/figures/py3Dmol_CBG.png">
    </div>
    <a class="prev" onclick="plusSlides(-1)">❮</a>
    <a class="next" onclick="plusSlides(1)">❯</a>
</div>

<script>
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
</script>

</body>
</html> -->


---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slideshow</title>
    <style>
        /* Container for the entire slideshow */
        .slideshow-container {
            max-width: 500px;
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
            overflow: hidden;
            position: relative;
        }
        /* Image styling for proper fit and zoom effect */
        .image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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
        }
    </style>
</head>
<body>

<div class="slideshow-container">
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
    <a class="prev" onclick="plusSlides(-1)">❮</a>
    <a class="next" onclick="plusSlides(1)">❯</a>
</div>

<script>
    var slideIndex = 1; // Initial slide index
    showSlides(slideIndex); // Display the first slide

    // Function to change slides
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Function to show a specific slide
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // Main function to display slides
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) { // Wrap around to the first slide
            slideIndex = 1;
        }
        if (n < 1) { // Wrap around to the last slide
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) { // Hide all slides
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block"; // Show the current slide
    }

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
</script>

</body>
</html>

---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slideshow</title>
    <style>
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
            overflow: hidden;
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
        }
    </style>
</head>
<body>

<div class="slideshow-container">
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
    <a class="prev" onclick="plusSlides(-1)">❮</a>
    <a class="next" onclick="plusSlides(1)">❯</a>
</div>

<script>
    var slideIndex = 1; // Initial slide index
    showSlides(slideIndex); // Display the first slide

    // Function to change slides
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Function to show a specific slide
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // Main function to display slides
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) { // Wrap around to the first slide
            slideIndex = 1;
        }
        if (n < 1) { // Wrap around to the last slide
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) { // Hide all slides
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block"; // Show the current slide
    }

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
</script>

</body>
</html>

---