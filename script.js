const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

document.querySelectorAll('.small-img').forEach(img => {
    img.addEventListener('click', function () {
        document.getElementById('MainImg').src = this.src;
    });
});

document.getElementById('quantity').addEventListener('input', function (event) {
    let input = event.target.value;

    // Replace any non-digit characters
    input = input.replace(/[^0-9]/g, '');

    // Update the input value with the filtered digits only
    event.target.value = input;
});


