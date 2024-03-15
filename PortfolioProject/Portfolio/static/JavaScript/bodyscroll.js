// // // JavaScript for the image slider functionality
// // document.addEventListener('DOMContentLoaded', function () {
// //     const body = document.body;

// //     const images = [
// //         '/static/images/image1.jpg', // Replace with your image file paths
// //         '/static/images/image2.jpg',
// //         '/static/images/image3.jpg',
// //         // Add more image file paths as needed
// //     ];

// //     let currentIndex = 0;

// //     function changeBackground() {
// //         body.style.backgroundImage = `url(${images[currentIndex]})`;
// //         currentIndex = (currentIndex + 1) % images.length;
// //     }

// //     // Start rotating background images
// //     setInterval(changeBackground, 2000); // Change background image every 2 seconds
// // });



// // document.addEventListener('DOMContentLoaded', function () {
// //     const body = document.body;

// //     const images = [
// //         { src: '/static/images/image1.jpg', opacity: 1 }, // Replace with your image file paths and initial opacities
// //         { src: '/static/images/image2.jpg', opacity: 0 },
// //         { src: '/static/images/image3.jpg', opacity: 0 },
// //         // Add more image file paths and initial opacities as needed
// //     ];

// //     let currentIndex = 0;

// //     function changeBackground() {
// //         body.style.backgroundImage = images[currentIndex].src;
// //         body.style.opacity = images[currentIndex].opacity;
// //         currentIndex = (currentIndex + 1) % images.length;
// //     }

// //     function changeImage() {
// //         sliderImage.src = images[currentIndex].src;
// //         body.style.opacity = images[currentIndex].opacity;
// //         currentIndex = (currentIndex + 1) % images.length;
// //     }


// //     function changeImage() {
// //         sliderImage.src = images[currentIndex].src;
// //         // body.style.opacity = images[currentIndex].opacity; // Comment out this line to prevent opacity change
// //         currentIndex = (currentIndex + 1) % images.length;
// //     }

// //     // Start rotating images
// //     setInterval(changeImage, 2000); // Change image every 2 seconds
// // });
// document.addEventListener('DOMContentLoaded', function () {
//     const body = document.body;

//     const images = [
//         { src: '/static/images/image1.jpg', opacity: 1 },
//         { src: '/static/images/image2.jpg', opacity: 0 },
//         { src: '/static/images/image3.jpg', opacity: 0 },
//         // Add more image file paths and initial opacities as needed
//     ];

//     let currentIndex = 0;

//     function changeBackground() {
//         body.style.backgroundImage = `url(${images[currentIndex].src})`;
//         currentIndex = (currentIndex + 1) % images.length;
//     }

//     // Start rotating background images
//     setInterval(changeBackground, 2000); // Change background image every 2 seconds
// });
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;

    const images = [
        "{% static 'images/image10.jpg' %}",
        "{% static 'images/thumb2.jpg' %}",
        "{% static 'images/thumb3.jpg' %}"
        
        // Add more image file paths as needed
    ];

    let currentIndex = 0;

    function changeBackground() {
        body.classList.add('opacity-0'); // Add the opacity-0 class
        setTimeout(() => {
            body.style.backgroundImage = `url(${images[currentIndex]})`;
            currentIndex = (currentIndex + 1) % images.length;
            body.classList.remove('opacity-0'); // Remove the opacity-0 class after the image is changed
        }, 1000); // Change background image after 1 second (adjust as needed)
    }

    // Start rotating background images
    setInterval(changeBackground, 2000); // Change background image every 2 seconds
});