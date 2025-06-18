console.log(gsap)

// Load leaves
const $leaf = document.getElementById("leaf");
console.log(leaf);

const $leaf2 = document.getElementById("leaf2");
console.log(leaf2);

const $leaf3 = document.getElementById("leaf3");
console.log(leaf3);

let fallenandcantgetup = false;
console.log(fallenandcantgetup);

// upon click cause leaves to fall
document.getElementById("circle").addEventListener("click", fall);
document.getElementById("circle2").addEventListener("click", fall);
document.getElementById("circle3").addEventListener("click", fall);

// Define what it means to "fall" (philosophical)
function fall() {
    if (!fallenandcantgetup) {
        gsap.to($leaf, {y: 125, x: 160, ease: "bounce.out(1,2)", duration: 8});
        gsap.to($leaf2, {y: 125, x: 330, ease: "bounce.out(1,4)", duration: 9});
        gsap.to($leaf3, {y: 125, x: 240, ease: "bounce.out(1, 3)", duration: 6});
        fallenandcantgetup = true;
    }

    // If you have already fallen it is time to pick yourself up from the ground
    if (fallenandcantgetup) {
        gsap.set($leaf, {y: 0, x: 0});
        gsap.set($leaf2, {y: 0, x: 0});
        gsap.set($leaf3, {y: 0, x: 0});
        fallenandcantgetup = false;
    }
}