window.addEventListener(
    "scroll",                 //Scroll animation for buttons
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false

);

// Little hidden Lucy SFX
// define element and accompanying sound
const heading = document.getElementById("page_heading");
const hiSound = document.getElementById("sfx_hi");

heading.addEventListener("mouseenter", () => {
    hiSound.currentTime = 0; // rewind to the beginning in case of spam-clicking
    hiSound.play().catch(e => {
        // error message in case of autoplay restrictions
        console.log("Playback error:", e);
    });
});

// Click SFX for Navbar + Pagedown + Logo + project list items
document.addEventListener("DOMContentLoaded", () => {
    const navImages = document.querySelectorAll(".nav_img, .logo, .page_down, .project_item a");
    const clickSound = document.getElementById("sfx_ui_press");

    // Create audio context
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Load audio buffer from the <audio> element's source
    let audioBuffer;

    fetch("audio/sfx_ui_press.wav")
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
        .then(buffer => {
            audioBuffer = buffer;
        });

    navImages.forEach(img => {
        img.addEventListener("click", () => {
            if (!audioBuffer) return;

            const source = audioContext.createBufferSource();
            source.buffer = audioBuffer;

            // Add slight random pitch variation
            source.playbackRate.value = 0.3 + Math.random() * 0.8; // decimal numbers define range

            source.connect(audioContext.destination);
            source.start(0);
        });
    });
});

// Pagedoll SFX
document.addEventListener("DOMContentLoaded", () => {
    const pagedolls = document.querySelectorAll(".pagedoll");
    const pingSound = document.getElementById("sfx_ping");

    pagedolls.forEach(doll => {
        doll.addEventListener("click", () => {
            pingSound.currentTime = 0; // rewind to start
            pingSound.play().catch(err => {
                console.warn("Sound playback blocked:", err);
            });
        });
    });
});

// Logo in navbar SFX
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelectorAll(".logo");
    const hiLongSound = document.getElementById("sfx_hi_long");

    logo.forEach(logo => {
        logo.addEventListener("mouseenter", () => {
            hiLongSound.currentTime = 0; // rewind to start
            hiLongSound.play().catch(err => {
                console.warn("Playback prevented:", err);
            });
        });
    });
});
