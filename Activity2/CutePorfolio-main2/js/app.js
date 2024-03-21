import { func1  } from "./info.js";
import { func2 } from "./img.js";
import { cards, cardsTitle } from "./card.js";
import { func4 } from "./nav.js";
const navv = document.querySelector("header")
const wrapper = document.querySelector(".section1")
const wrapper2 = document.querySelector(".section2")
const wrapper3 = document.querySelector(".wrapper3")
const li = document.querySelectorAll('.nav ul li')

const data = {
    title1: "this is title1",
    para: "Lorem ipsum dolor sit amet consectetur kk",
    btn: "contact",
    img: "./images/prof.png",
    proj: "Projects",
    img1: "./images/prof.jpg",
    img2: "./images/prof.jpg",
    img3: "./images/prof.jpg",
    para1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    para2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    para3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
}


const { title1, para, btn, img, proj, para1, para2, para3,img1, img2, img3 } = data

navv.append(func4())
wrapper.append(func1(title1, para, btn, img))
wrapper.append(func2(img))
wrapper3.append(cardsTitle(proj))
wrapper2.append(cards(img1, para1))
wrapper2.append(cards(img2, para2))
wrapper2.append(cards(img3, para3))




const toggleButton = document.querySelector('#toggleButton');
const body = document.body;

toggleButton.addEventListener('click', function() {
  if (body.style.background === 'rgb(33, 33, 33)' || body.style.background === '#212121') {
    body.style.background = 'white';
    body.style.color = 'black';
    toggleButton.style.color ="black"
    li.style.color ="black"
  } else {
    body.style.background = '#212121';
    body.style.color = 'white';
    toggleButton.style.color ="white"
    li.style.color ="white"
  }
});




