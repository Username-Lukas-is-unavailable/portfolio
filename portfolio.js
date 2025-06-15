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
    const clickableElements = document.querySelectorAll(".nav_img, .logo, .page_down, .project_item a, .bongos, .lo_nav_item");
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



// Logo (in navbar) SFX
document.addEventListener("DOMContentLoaded", () => {
    const logoElements = document.querySelectorAll(".logo");

    // List of cool and awesome sfx options
    const sounds = {
        sfx_hi_long: document.getElementById("sfx_hi_long"),
        sfx_yay: document.getElementById("sfx_yay"),
        sfx_uhm: document.getElementById("sfx_uhm"),
        sfx_gremlin: document.getElementById("sfx_gremlin"),
        sfx_bleh: document.getElementById("sfx_bleh"),
        sfx_balloonboy: document.getElementById("sfx_balloonboy"),
        sfx_clown: document.getElementById("sfx_clown"),
        sfx_meow: document.getElementById("sfx_meow"),
        sfx_mewo: document.getElementById("sfx_mewo"),
        sfx_mlp: document.getElementById("sfx_mlp"),
        sfx_party: document.getElementById("sfx_party"),
        sfx_oh: document.getElementById("sfx_oh"),
        sfx_laugh: document.getElementById("sfx_laugh"),
        sfx_quack: document.getElementById("sfx_quack"),
        sfx_sneeze: document.getElementById("sfx_sneeze"),
        sfx_yippee: document.getElementById("sfx_yippee"),
        sfx_sus: document.getElementById("sfx_sus")
    };

    // Prevent these three from blowing the users eardrums out
    sounds.sfx_uhm.volume = 0.5;
    sounds.sfx_gremlin.volume = 0.5;
    sounds.sfx_bleh.volume = 0.5;
    sounds.sfx_meow.volume = 0.5;
    sounds.sfx_mewo.volume = 0.5;
    sounds.sfx_clown.volume = 0.5;
    sounds.sfx_yippee.volume = 0.75;

    const soundOptions = Object.values(sounds);

    logoElements.forEach(logo => {
        logo.addEventListener("mouseenter", () => {
            const soundToPlay = soundOptions[Math.floor(Math.random() * soundOptions.length)];
            soundToPlay.currentTime = 0;
            soundToPlay.play().catch(err => {
                console.warn("Playback prevented:", err);
            });
        });
    });
});

// hotbar animations (hover wiggle and click shake)
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".bongos, .project_link, .wallclock, .logo, .social_link, .music_player, .nav_img, .page_down, .song_stop_button, .lo_nav_item");

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


// music playr in hotbar
document.addEventListener("DOMContentLoaded", () => {
    const musicButtons = document.querySelectorAll(".music_player");
    const songDisplay = document.getElementById("song_display");

    // animate the grammophone while playing a song
    const swayBounce = gsap.timeline({
        repeat: -1,
        yoyo: true,
        paused: true,
        defaults: {
            duration: 0.7,
            ease: "power1.inOut",
            transformOrigin: "bottom center"
        }


    });

    swayBounce
        .to(".music_player", { rotation: 5, y: -2 })
        .to(".music_player", { rotation: -5, y: 2 });

    // make pagedoll do a little dance :3
    const pagedollDance = gsap.to(".pagedoll", {
        scaleY: 1.1,
        transformOrigin: "bottom center",
        duration: 0.7,
        ease: "elastic.out(1, 0.5)",
        yoyo: true,
        repeat: -1,
        paused: true
    });


    // Make logo do a dance too :3
    const logoSway = gsap.timeline({
        repeat: -1,
        yoyo: true,
        paused: true,
        defaults: {
            duration: 0.7,
            ease: "power1.inOut",
            transformOrigin: "bottom center"
        }
    });

    logoSway
        .to(".logo", { rotation: 5, y: -2 })
        .to(".logo", { rotation: -5, y: 3 });


    // playlist
    const playlist = [

        { id: "msc_bhava_by_sternens_lapis", name: '"Bhava" by Sternens Lapis', album: "Improv Album"},
        { id: "msc_evys_theme_by_sternens_lapis", name: `"Evy's Theme" by Sternens Lapis`, album: "BOSSFIGHT OST" },
        { id: "msc_hyohaku-sai-iri_banana_by_sternens_lapis", name: `"Hyōhaku-zai-iri banana (漂白剤入りバナナ)" by Sternens Lapis`, album: "Improv Album" },
        { id: "msc_unnamed_chipsynth_by_sternens_lapis", name: `"Ré Nao" by Sternens Lapis`, album: "Improv Album" },
        { id: "msc_wrong_6_oclock_by_sternens_lapis", name: `"Going to bed at the Wrong 6 O'Clock" by Sternens Lapis`, album: "Memory Mortuarium" },
        { id: "msc_floccinaucinihilipilification_by_sternens_lapis", name: `"Floccinaucinihilipilification" by Sternens Lapis`, album: "Memory Mortuarium" },
        { id: "msc_abandoned_arcade_by_sternens_lapis", name: '"Abandoned Arcade" by Sternens Lapis', album: "Improv Album" },
        { id: "msc_athazagoraphobia_by_sternens_lapis", name: `"Athazagoraphobia (Music Mix)" by Sternens Lapis`, album: "Memory Mortuarium"},
        { id: "msc_darkness_before_dawn_by_sternens_lapis", name: '"Darkness Before Dawn" by Sternens Lapis', album: "Improv Album" },
        { id: "msc_unused_theme_1_by_sternens_lapis", name: '"Unused Theme 1" by Sternens Lapis"', album: "BOSSFIGHT OST" },
        { id: "sfx_nokia", name: `"Espionage" by Nokia Sound Team`, album: `Nokia Ringtones Library` },
    ];

    const songs = playlist.map(track => document.getElementById(track.id));
    let currentIndex = -1;
    let currentAudio = null;

    // update the player icon based on the state of the music player
    function updateBackground(isPlaying) {
        musicButtons.forEach(button => {
            button.style.background = isPlaying
                ? "url(images/grammophone_skip.webp) no-repeat center center"
                : "url(images/grammophone.webp) no-repeat center center";
            button.style.backgroundSize = "contain";
        });
    }

    function updateBackgroundPause(isPaused) {
        musicButtons.forEach(button => {
            button.style.background = isPaused
                ? "url(images/grammophone_paused.webp) no-repeat center center"
                : "url(images/grammophone.webp) no-repeat center center";
            button.style.backgroundSize = "contain";
        });
    }

    function updateSongDisplay(name, album) {
        const titleEl = document.getElementById("song_title");
        const albumEl = document.getElementById("song_album");

        if (titleEl && albumEl) {

            setTimeout(() => {
                titleEl.textContent = `Now Playing: ${name}`;
                albumEl.textContent = `Album: ${album}`;

            })
        }
    }

    musicButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Stop current song if applicable
            if (currentAudio && !currentAudio.paused) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }

            currentIndex++; // skip song (next array item)

            if (currentIndex < songs.length) {
                currentAudio = songs[currentIndex];
                currentAudio.play().catch(err => {
                    console.warn("Playback blocked:", err);
                });

                currentAudio.play().catch(err => {
                    console.warn("Playback blocked:", err);
                });

                // Stop animations when song ends
                currentAudio.onended = () => {
                    swayBounce.pause(0); // stop and reset
                    pagedollDance.pause(0);
                    logoSway.pause(0);
                    updateSongDisplay("None", "—");
                    updateBackgroundPause(true);
                    stopButtons.forEach(btn => btn.classList.remove("active"));

                };

                updateBackgroundPause(false);
                updateBackground(true);
                updateSongDisplay(playlist[currentIndex].name, playlist[currentIndex].album);
                swayBounce.play(); // start swaying
                pagedollDance.play();
                logoSway.play();
                stopButtons.forEach(btn => btn.classList.add("active"));
            }

            else {
                // Reset
                currentIndex = -1;
                currentAudio = null;
                updateBackground(false);
                updateBackgroundPause(false);
                updateSongDisplay("None", "—");
                swayBounce.pause(0); // stop and reset sway
                pagedollDance.pause(0);
                logoSway.pause(0);
            }
        });
    });

    // stop button (highly requested feature)
    const stopButtons = document.querySelectorAll(".song_stop_button");
    const ejectSound = document.getElementById("sfx_song_stop");
    const switchSound = document.getElementById("sfx_switch");


    stopButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (currentAudio && !currentAudio.paused) { // If song is actively playing
                // Play an eject cassette sound even though it's themed after a grammophone
                ejectSound.currentTime = 0;
                ejectSound.play().catch(err => {
                    console.warn("Sound playback blocked:", err);
                });

                // The part where it actually stops the song
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }

            else {
                // Play the other sound when no song is currently playing
                switchSound.currentTime = 0;
                switchSound.play().catch(err => {
                    console.warn("Sound playback blocked:", err);
                });
            }


            // Resetting all the animations and reverting the UI stuff to default
            swayBounce.pause(0);
            pagedollDance.pause(0);
            logoSway.pause(0);
            updateSongDisplay("None", "—");
            updateBackground(false);
            updateBackgroundPause(false);
            stopButtons.forEach(btn => btn.classList.remove("active"));

            // Reset index
            currentIndex = -1;
            currentAudio = null;
        });
    });

});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
            content.style.marginTop = "0";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.marginTop = "5%";
        }
    });
}