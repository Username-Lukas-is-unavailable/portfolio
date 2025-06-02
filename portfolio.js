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
    const clickableElements = document.querySelectorAll(".nav_img, .logo, .page_down, .project_item a, .bongos");
    const clickSound = document.getElementById("sfx_ui_press");

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let audioBuffer;

    fetch("audio/sfx_ui_press.wav")
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
        .then(buffer => {
            audioBuffer = buffer;
        });

    clickableElements.forEach(elem => {
        elem.addEventListener("click", (e) => {
            if (!audioBuffer) return;

            // Check if the element is a link or inside one
            const link = elem.closest("a");

            if (link) {
                e.preventDefault(); // stop the immediate navigation
                playSound(audioContext, audioBuffer);

                // continue navigation
                setTimeout(() => {
                    window.location.href = link.href;
                }, 160); // time of delay
            } else {
                playSound(audioContext, audioBuffer);
            }
        });
    });

    function playSound(ctx, buffer) {
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.playbackRate.value = 0.3 + Math.random() * 0.8;
        source.connect(ctx.destination);
        source.start(0);
    }
});


// Pagedoll SFX
document.addEventListener("DOMContentLoaded", () => {
    const pagedolls = document.querySelectorAll(".pagedoll, .wallclock");
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
    const logoElements = document.querySelectorAll(".logo");
    const hiLongSound = document.getElementById("sfx_hi_long");
    const yaySound = document.getElementById("sfx_yay");

    logoElements.forEach(logo => {
        logo.addEventListener("mouseenter", () => {
            // Randomly choose which sound to play
            const soundToPlay = Math.random() < 0.5 ? hiLongSound : yaySound;

            soundToPlay.currentTime = 0; // rewind to start
            soundToPlay.play().catch(err => {
                console.warn("Playback prevented:", err);
            });
        });
    });
});


// hotbar animations (hover wiggle and click shake)
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".bongos, .project_link, .wallclock, .logo, .social_link");

    elements.forEach(elem => {
        // Hover animation with random rotation
        elem.addEventListener("mouseenter", () => {
            const randomRotation = Math.random() < 0.5 ? 5 : -5;

            gsap.to(elem, {
                duration: 1.5,
                rotation: randomRotation,
                scale: 1.1,
                ease: "elastic.out(1, 0.3)"
            });
        });

        elem.addEventListener("mouseleave", () => {
            gsap.to(elem, {
                duration: 0.5,
                rotation: 0,
                scale: 1,
                ease: "power2.out"
            });
        });

        // Click shake animation
        elem.addEventListener("click", () => {
            gsap.timeline()
                .to(elem, { scale: 1.3, duration: 0.1, ease: "power1.out" })
                .to(elem, { x: -5, duration: 0.05 })
                .to(elem, { x: 5, duration: 0.05 })
                .to(elem, { x: -3, duration: 0.05 })
                .to(elem, { x: 3, duration: 0.05 })
                .to(elem, { x: 0, duration: 0.05 })
                .to(elem, { scale: 1, duration: 0.1, ease: "power1.in" });
        });
    });
});


// pagedoll squash and stretch
document.addEventListener("DOMContentLoaded", () => {
    const dolls = document.querySelectorAll(".pagedoll");

    dolls.forEach(doll => {
        doll.addEventListener("mouseenter", () => {
            gsap.to(doll, {
                duration: 1,
                scaleY: 1.1,
                ease: "elastic.out(1, 0.3)"
            });
        });

        doll.addEventListener("mouseleave", () => {
            gsap.to(doll, {
                duration: 0.4,
                scaleY: 1,
                ease: "power2.out"
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".social_link");
    const boingSound = document.getElementById("sfx_boing");

    links.forEach(link => {
        link.addEventListener("click", () => {
            boingSound.currentTime = 0; // rewind to start
            boingSound.play().catch(err => {
                console.warn("Sound playback blocked:", err);
            });


        });
    });
});


