# Markdown

![Cortisol structure created in Python by the py3Dmol tool](../Literature/Figures/py3Dmol_CBG.png)

# Slideshow of Figures

Here is a slideshow of the figures located in the `../Literature/Figures` folder.

<!-- Start of embedded HTML for the slideshow -->
<div class="slideshow-container">
    <div class="slides">
        <img src="../Literature/Figures/py3Dmol_17-OHP.png" style="width:100%">
    </div>

    <div class="slides">
        <img src="../Literature/Figures/py3Dmol_CBG.png" style="width:100%">
    </div>

    <div class="slides">
        <img src="../Literature/Figures/py3Dmol_cortisol.png" style="width:100%">
    </div>

    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>

<script>
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("slides");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
</script>

<style>
    .slideshow-container {
        position: relative;
        max-width: 100%;
        margin: auto;
    }
    .slides {
        display: none;
        width: 100%;
    }
    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        padding: 16px;
        margin-top: -22px;
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
        background-color: rgba(0,0,0,0.8);
    }
</style>
<!-- End of embedded HTML for the slideshow -->
