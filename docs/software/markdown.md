# Markdown


<!DOCTYPE html>
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
            width: auto;
            height: auto;
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
</html>


---


<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div id="day1Carousel" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="./figures/py3Dmol_17-OHP.png"
                    class="d-block w-100" alt="Image 1">
            </div>
            <div class="carousel-item">
                <img src="./figures/py3Dmol_CBG.png"
                    class="d-block w-100" alt="Image 2">
            </div>
            <div class="carousel-item">
                <img src="./figures/py3Dmol_cortisol.png"
                    class="d-block w-100" alt="Image 3">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#day1Carousel"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#day1Carousel"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>

</body>
</html> -->
