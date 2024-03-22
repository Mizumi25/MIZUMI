import { func1  } from "./info.js";
import { func2 } from "./img.js";

const wrapper = document.querySelector(".wrapper")
const backkk = document.createElement("h2")
backkk.innerHTML = `<a href="../../index.html">Back</a>`;
backkk.className = "backk";

const data = {
    title1: "this is my Activity1",
    para: "I am James Rafty D. Libago",
    btn: "contact",
    img: "./images/prof.jpg",
    proj: "Projects",
    img1: "./images/prof.jpg",
    img2: "./images/prof.jpg",
    img3: "./images/prof.jpg",
    para1: "The Shiba Inu is a breed of hunting dog from Japan. A small-to-medium breed, it is the smallest of the six original breed of dogs native to Japan. Its name literally translates to brushwood dog",
    para2: "The Shiba Inu is a breed of hunting dog from Japan. A small-to-medium breed, it is the smallest of the six original breed of dogs native to Japan. Its name literally translates to brushwood dog",
    para3: "The Shiba Inu is a breed of hunting dog from Japan. A small-to-medium breed, it is the smallest of the six original breed of dogs native to Japan. Its name literally translates to brushwood dog",
}


const { title1, para, btn, img} = data

wrapper.append(func1(title1, para, btn, img))
wrapper.append(func2(img))
wrapper.append(backkk);