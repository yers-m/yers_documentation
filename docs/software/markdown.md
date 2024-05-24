# Slideshow of Figures

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hiking Trip: Abisko to Nikkaluokta</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <div class="container my-5">
        <h1 class="text-center mb-5">Some text</h1>

        <div class="accordion" id="tripAccordion">
            <!-- Day 1 -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#day1"
                        aria-expanded="false" aria-controls="day1">
                        <h4>
                            Day 1
                            <small class="text-muted"> Stockholm → Abisko Turiststation (14 June or 1 July)</small>
                        </h4>
                    </button>
                </h2>
                <div id="day1" class="accordion-collapse collapse" data-bs-parent="#tripAccordion">
                    <div class="accordion-body">
                        <ul>
                            <li>14 June or 1 July:
                                <ul>
                                    <li>21:55 Depart Stockholm Centralstation on Vy Nattåg 92</li>
                                </ul>
                            </li>
                            <li>15 June or 2 July:
                                <ul>
                                    <li>10:50 Arrive Boden C/Resecentrum</li>
                                    <li>16:50 Arrive Abisko Turiststation</li>
                                </ul>
                            </li>
                            <li>19 hrs of travel - night train has beds.</li>
                            <li>Cost per person: 797 SEK for train ticket</li>
                            <li>Upon arrival at STF Abisko Turiststation:
                                <ul>
                                    <li>Check into accommodation. </li>
                                    <li>Cost: 400 SEK per person.</li>
                                    <li>Have dinner at Restaurant Kungsleden, known for its delicious local cuisine</li>
                                    <li>Visit the shop to stock up on supplies and rent any needed gear</li>
                                    <li>Relax and prepare for the hike, go to bed early</li>
                                </ul>
                            </li>
                        </ul>

                        <div class="alert alert-info">
                            <strong>Services:</strong> restaurant, shop, sauna, guides, WiFi
                        </div>

                        <div class="alert alert-secondary">
                            <strong>Information:</strong> Abisko is a popular starting point for hikes in the Swedish
                            Lapland, famous for its midnight sun and northern lights. The Abisko Turiststation is a
                            bustling hub for hikers and outdoor enthusiasts.
                        </div>

                        <div id="day1Carousel" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://d2exd72xrrp1s7.cloudfront.net/www/000/1k7/s9/s9rk9yy056glamlcq9ied3cy4fm7g7cj-uhi57078530/0?width=3072&height=2304&crop=false&q=70"
                                        class="d-block w-100" alt="Image 1">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://d2exd72xrrp1s7.cloudfront.net/www/000/1k5/10/10fayskjtim4u17d2gcejmhpi3qawcn5z-uhi31256964/0?width=3072&height=2304&crop=false&q=70"
                                        class="d-block w-100" alt="Image 2">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://d2exd72xrrp1s7.cloudfront.net/www/000/1k7/hj/hjt4ddbstjgc1b4d9peetyj2z4fm7g7el-uhi57078531/0?width=3072&height=2304&crop=false&q=70"
                                        class="d-block w-100" alt="Image 3">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://stfturist-lajka.imgix.net/v1/image/citybreak/7372142?w=800&auto=format"
                                        class="d-block w-100" alt="Image 4">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://stfturist-lajka.imgix.net/v1/image/citybreak/7372121?w=800&auto=format"
                                        class="d-block w-100" alt="Image 4">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://stfturist-lajka.imgix.net/v1/image/citybreak/7372143?w=800&auto=format"
                                        class="d-block w-100" alt="Image 4">
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
                    </div>
                </div>
            </div>
            <!-- Repeat the accordion-item structure for each day of the trip -->

        </div>



    </div>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
</body>

</html>