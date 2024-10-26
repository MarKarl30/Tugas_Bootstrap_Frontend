/* Subscribe Popup */
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const modal = new bootstrap.Modal(document.getElementById('subscribeModal'));
    modal.show();
});

/* Back to Top Button */
window.onscroll = function() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* Burger Menu */
function toggleMenu() {
    document.querySelector('.navbar ul').classList.toggle('show');
}

let isMusicPlaying = false; // Flag to track if the music has started

function playAudio() {
    const audio = document.getElementById('background-music');
    if (!isMusicPlaying) {
        audio.play().then(() => {
            isMusicPlaying = true; // Update flag to true once audio is playing
            audio.volume = 0.5;
            console.log("Background music is playing.");
        }).catch(error => {
            console.error("Error trying to play audio:", error);
        });
    }
}

// Event listener for user interaction
document.addEventListener('click', playAudio);