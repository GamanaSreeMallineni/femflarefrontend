<style scoped>
.hero {
    background-image: url('../assets/images2/banner.png');
    background-size: cover;
    background-position: center;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    font-size: 2rem;
    background-color: pink;
}

@media (max-width: 475px) {
    .hero {
        height: 80vh;
        font-size: 1.5rem;
    }
}

@media (max-width: 768px) {
    .hero {
        height: 50vh;
        font-size: 1.5rem;
    }
}

@media (max-width: 640px) {
    .hero {
        height: 20vh;
        font-size: 1.2rem;
    }
}

@media (max-width: 840px) {
    .hero {
        height: 20vh;
        font-size: 1.2rem;
    }
}

@media (max-width: 1040px) {
    .hero {
        height: 20vh;
        font-size: 1.2rem;
    }
}

.fest-title {
    font-family: 'Roboto', sans-serif;
    /* Applying Roboto font from Google Fonts API */
}

/* Preloader Styles */
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    /* Change background color as needed */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    /* Ensure it's on top of other content */
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    /* Light grey */
    border-top: 4px solid #3498db;
    /* Blue */
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* Hide content while preloader is visible */
.content {
    display: none;
}
</style>

<template>


    <!-- ====== Team Section Start -->
    <section class="bg-gradient-to-r from-blue-200 to-pink-300 w-screen mx-auto py-20 px-4 md:px-8 lg:px-16">
        <h2 class="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Cheif Patrons</h2>

        <div class="container mx-auto">




            <div class="-mx-4 flex flex-wrap justify-center">
                <div class="w-full px-4 md:w-1/2 xl:w-1/4">
                    <div class="mx-auto mb-10 w-full max-w-[370px]">
                        <div class="relative overflow-hidden rounded-lg">
                            <img src="../assets/images2/koneru satyanarayana 2.jpg" alt="image" class="w-full" />

                        </div>
                        <div class="text-center mt-3">
                            <h2 class="text-dark dark:text-gray-900 text-base font-semibold">Sri. Koneru Satyanarayana

                            </h2>
                            <p class="text-body-color dark:text-dark-6 text-xs"> Hon’ble President, KLEF </p>
                        </div>

                    </div>
                </div>
                <div class="w-full px-4 md:w-1/2 xl:w-1/4">
                    <div class="mx-auto mb-10 w-full max-w-[370px]">
                        <div class="relative overflow-hidden rounded-lg">
                            <img src="../assets/images2/kanchana3.jpg" alt="image" class="w-full" />

                        </div>
                        <div class="text-center mt-3">
                            <h3 class="text-dark dark:text-gray-900 text-base font-semibold">Smt. K. Kanchana Latha

                            </h3>
                            <p class="text-body-color dark:text-dark-6 text-xs">Secretary, KLEF </p>
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 md:w-1/2 xl:w-1/4">
                    <div class="mx-auto mb-10 w-full max-w-[370px]">
                        <div class="relative overflow-hidden rounded-lg">
                            <img src="../assets/images2/havish2.jpeg" alt="image" class="w-full" />

                        </div>
                        <div class="text-center mt-3">
                            <h3 class="text-dark dark:text-gray-900 text-base font-semibold">Er.Koneru Lakshman Havish

                            </h3>
                            <p class="text-body-color dark:text-dark-6 text-xs">Vice-President, KLEF </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="-mx-4 flex flex-wrap justify-center">
                <div class="w-full px-4 md:w-1/2 xl:w-1/4">
                    <div class="mx-auto mb-10 w-full max-w-[370px]">
                        <div class="relative overflow-hidden rounded-lg">
                            <img src="../assets/images2/raja hareen.jpg" alt="image" class="w-full" />

                        </div>
                        <div class="text-center mt-3">
                            <h2 class="text-dark dark:text-gray-900 text-base font-semibold">Er. Koneru. Raja Hareen

                            </h2>
                            <p class="text-body-color dark:text-dark-6 text-xs"> Vice-President, KLEF </p>
                        </div>

                    </div>
                </div>
                <div class="w-full px-4 md:w-1/2 xl:w-1/4">
                    <div class="mx-auto mb-10 w-full max-w-[370px]">
                        <div class="relative overflow-hidden rounded-lg">
                            <img src="../assets/images2/jagannatha rao.jpg" alt="image" class="w-full" />

                        </div>
                        <div class="text-center mt-3">
                            <h3 class="text-dark dark:text-gray-900 text-base font-semibold">Dr K. S. Jagannatha Rao



                            </h3>
                            <p class="text-body-color dark:text-dark-6 text-xs">Pro Chancellor, KLEF</p>
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 md:w-1/2 xl:w-1/4">
                    <div class="mx-auto mb-10 w-full max-w-[370px]">
                        <div class="relative overflow-hidden rounded-lg">
                            <img src="../assets/images2/parthasaradhi varma 2.jpg" alt="image" class="w-full" />

                        </div>
                        <div class="text-center mt-3">
                            <h3 class="text-dark dark:text-gray-900 text-base font-semibold">Dr.G. Pardha Saradhi Varma



                            </h3>
                            <p class="text-body-color dark:text-dark-6 text-xs">Vice Chancellor, KLEF </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

