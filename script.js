const root = document.getElementById("root");
const container = document.createElement("div");
container.id = "container";
root.appendChild(container);
const titleIcon = document.createElement("img");
titleIcon.src = "./assets/images/icon-star.svg";
titleIcon.id = "title-icon";
const titleCont = document.createElement("div");
titleCont.id = "title-cont";
container.appendChild(titleCont);
titleCont.appendChild(titleIcon);
const title = document.createElement("h1");
title.id = "title";
title.textContent = "FAQs";
titleCont.appendChild(title);
const bgImg = document.createElement("img");
bgImg.src = "./assets/images/background-pattern-desktop.svg";
bgImg.id = "bg-img";
root.appendChild(bgImg);
const content = document.createElement("div");
content.id = "content";
container.appendChild(content);
let hidden = 1;


const minus = document.createElement("img");
minus.src = "./assets/images/icon-minus.svg";
minus.className = "minus";

const titles = [
    "What is Frontend Mentor, and how will it help me?", 
    "Is Frontend Mentor free?",
    "Can I use Frontend Mentor projects in my portfolio?",
    "How can I get help if I'm stuck on a Frontend Mentor challenge?",
]

const parags = [
    "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
]

for (let i = 1; i < 5; i++) {
    const innerCont = document.createElement("div");
    innerCont.id = `inner${i}`;
    content.appendChild(innerCont);
    const control = document.createElement("div");
    control.id = `control${i}`;
    control.className = "control";
    innerCont.appendChild(control);
    const innerT = document.createElement("h4");
    innerT.id = `innerT${i}`;
    innerT.textContent = titles[i - 1];
    control.appendChild(innerT);
    const innerPlus = document.createElement("img");
    innerPlus.className = "innerPlus";
    innerPlus.id = `${i}`;
    innerPlus.src = "./assets/images/icon-plus.svg";
    control.appendChild(innerPlus);
    const innerP = document.createElement("p");
    innerP.id = `innerP${i}`;
    innerP.textContent = parags[i - 1];
    innerCont.appendChild(innerP);
    const line = document.createElement("div");
    line.className = "line";
    content.appendChild(line);   
    
}

const controls = document.getElementsByClassName("control");


const toggleFAQ = (event) => {
    const clicked = event.currentTarget; 
    const clickedId = clicked.id.replace("control", ""); 
    const innerPlus = document.getElementById(clickedId); 
    const paragraph = document.getElementById(`innerP${clickedId}`); 

    
    if (paragraph.style.display === "block") {
        paragraph.style.display = "none";
        innerPlus.src = "./assets/images/icon-plus.svg"; 
    } else {
        paragraph.style.display = "block";
        innerPlus.src = minus.src; 
    }
};


for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener("click", toggleFAQ);
}
