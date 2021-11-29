const backtoTop = document.getElementById('back-to-top');
window.onscroll = function () {
    if (window.scrollY === 0) {
        backtoTop.style.display = 'none';
    } else {
        backtoTop.style.display = 'block';
    }
}