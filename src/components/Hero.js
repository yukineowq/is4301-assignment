import React from 'react'

function Hero() {
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-0 py-0 items-center justify-center flex-col">
                <img class="hero" alt="hero" src="/images/nus-hero.png" />
                <br />
                <div class="text-center lg:w-2/3 w-full">
                    <h1 class="title-font sm:text-4xl text-3xl mt-4 mb-4 font-medium text-blue-900">NUS is a leading research university in Asia</h1>
                    <p class="mb-8 leading-relaxed">Learn how our transformative education and multidisciplinary research have nurtured effective global leaders, impacted society and transformed lives for the better.</p>
                </div>
            </div>
        </section>
    )
}

export default Hero