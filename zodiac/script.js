const images = document.querySelector("#container").querySelectorAll(".sign");
const signIcons = document.querySelectorAll(".sign_icon");
const finaleSignIcon = document.querySelector("#sign_icon_final");
const radius = 265;
const speed = 0.00005;
let final = false;

const progress = localStorage.getItem("progress");
const check = CryptoJS.SHA256(progress).toString(CryptoJS.enc.Hex);
console.log(check);
const getFinale = new Image();
getFinale.onload = () => {
    final = true
    signIcons.forEach(i => i.style.display = "none");
    finaleSignIcon.src = `${check}.png`;
    finaleSignIcon.style.display = "block";
    finaleSignIcon.style.zIndex = "3";
    finaleSignIcon.classList.add('visible');

    const finalLink = document.createElement("a");
    finalLink.href = `${check}.html`;
    finaleSignIcon.parentNode.insertBefore(finalLink, finaleSignIcon);
    finalLink.appendChild(finaleSignIcon);
}
getFinale.onerror = () => {
    console.log("haha no final puzzle for you");
}

getFinale.src = `${check}.png`;

images.forEach((img, i) => {
    img.addEventListener('mouseenter', () => {
        if (!final) signIcons[i].classList.add('visible');
    });
    img.addEventListener('mouseleave', () => {
        signIcons[i].classList.remove('visible');
    });
});

function orbit(time) {
    images.forEach((image, i) => {
        const offset = (i / images.length) * Math.PI * 2;
        const angle = time*speed+offset
        const newX = Math.cos(angle)*radius;
        const newY = Math.sin(angle)*radius;

        image.style.transform = `translate(${newX}px, ${newY}px)`;
    });
    requestAnimationFrame(orbit);
}
requestAnimationFrame(orbit);
