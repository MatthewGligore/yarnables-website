document.addEventListener("DOMContentLoaded", function () {
    // Select the main image and small images
    const mainImg = document.getElementById('MainImg');
    const smallImages = document.querySelectorAll('.small-img');
    let currentIndex = 0;

    if (mainImg) {
        // Create a container around the main image and arrows if not already created
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        mainImg.parentNode.insertBefore(imgContainer, mainImg); // Insert container
        imgContainer.appendChild(mainImg); // Move mainImg inside the container

        // Create left arrow
        const prevArrow = document.createElement('i');
        prevArrow.classList.add('fas', 'fa-chevron-left');
        prevArrow.id = 'prev';
        prevArrow.style.cursor = 'pointer';
        prevArrow.style.position = 'absolute';
        prevArrow.style.left = '10px';
        prevArrow.style.top = '50%';
        prevArrow.style.transform = 'translateY(-50%)';
        prevArrow.style.fontSize = '24px';
        prevArrow.style.zIndex = '1';
        prevArrow.style.padding = '10px';

        // Create right arrow
        const nextArrow = document.createElement('i');
        nextArrow.classList.add('fas', 'fa-chevron-right');
        nextArrow.id = 'next';
        nextArrow.style.cursor = 'pointer';
        nextArrow.style.position = 'absolute';
        nextArrow.style.right = '10px';
        nextArrow.style.top = '50%';
        nextArrow.style.transform = 'translateY(-50%)';
        nextArrow.style.fontSize = '24px';
        nextArrow.style.zIndex = '1';
        nextArrow.style.padding = '10px';

        // Append the arrows inside the image container
        imgContainer.appendChild(prevArrow);
        imgContainer.appendChild(nextArrow);

        // Click event for small images
        smallImages.forEach((img, index) => {
            img.addEventListener('click', function () {
                currentIndex = index; // Update current index
                updateMainImage(currentIndex);
            });
        });

        // Function to update the main image
        function updateMainImage(index) {
            mainImg.src = smallImages[index].src;
        }

        // Click event for the "next" arrow
        nextArrow.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % smallImages.length; // Loop to the first image if at the end
            updateMainImage(currentIndex);
        });

        // Click event for the "prev" arrow
        prevArrow.addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + smallImages.length) % smallImages.length; // Loop to the last image if at the start
            updateMainImage(currentIndex);
        });

        // Add styling for the container dynamically (or you can do it in CSS)
        imgContainer.style.position = 'relative';
        imgContainer.style.width = '100%'; // Adjust based on your design
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Select the main image and small images
    const icon = document.getElementById('icon');

    if (icon){
        const tiktok = document.createElement('i');
        tiktok.classList.add('fab', 'fa-tiktok');
        icon.appendChild(icon);
    }

