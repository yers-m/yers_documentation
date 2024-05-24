# Markdown

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Swiper Slideshow</title>
    <!-- Include Swiper CSS -->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <style>
        .swiper-container {
            width: 100%;
            height: 100%;
        }

        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            /* Center slide text vertically */
            display: flex;
            justify-content: center;
            align-items: center;
        }

        img {
            max-width: 100%;
            max-height: 100%;
        }
    </style>
</head>
<body>

<!-- Swiper -->
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../Literature/figures/py3Dmol_17-OHP.png" alt="Slide 1"></div>
        <div class="swiper-slide"><img src="../Literature/figures/py3Dmol_CBG.png" alt="Slide 2"></div>
        <div class="swiper-slide"><img src="../Literature/figures/py3Dmol_cortisol.png" alt="Slide 3"></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
</div>

<!-- Swiper JS -->
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<!-- Initialize Swiper -->
<script>
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
</script>

</body>
</html>
