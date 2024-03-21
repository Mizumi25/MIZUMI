import { func1  } from "./info.js";
import { func2 } from "./img.js";

const wrapper = document.querySelector(".wrapper")
const backkk = document.createElement("h2")
backkk.innerHTML = `<a href="../../index.html">Back</a>`;
backkk.className = "backk";

const data = {
    title1: "this is title1",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    btn: "contact",
    img: "./images/prof.jpg",
    proj: "Projects",
    img1: "./images/prof.jpg",
    img2: "./images/prof.jpg",
    img3: "./images/prof.jpg",
    para1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    para2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    para3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
}


const { title1, para, btn, img} = data

wrapper.append(func1(title1, para, btn, img))
wrapper.append(func2(img))
wrapper.append(backkk);