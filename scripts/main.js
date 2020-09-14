let mymage = document.querySelector("img");

mymage.onclick = function () {
  let mySrc = mymage.getAttribute("src");
  if (mySrc === "images/maxresdefault.jpg") {
    mymage.setAttribute("src", "images/dust.jpg");
  } else {
    mymage.setAttribute("src", "images/maxresdefault.jpg");
  }
};

let menuElem = document.getElementById("ky");
let titleElem = menuElem.querySelector(".title1");

titleElem.onclick = function () {
  menuElem.classList.toggle("open");
};

let changeBack = document.querySelector(".jotaro");

let menuElem2 = document.getElementById("joseph");
let titleElem2 = menuElem2.querySelector(".title2");

titleElem2.onclick = function () {
  menuElem2.classList.toggle("open");
};

let menuElem3 = document.getElementById("avdol");
let titleElem3 = menuElem3.querySelector(".title3");

titleElem3.onclick = function () {
  menuElem3.classList.toggle("open");
};

let menuElem4 = document.getElementById("polnaref");
let titleElem4 = menuElem4.querySelector(".title4");

titleElem4.onclick = function () {
  menuElem4.classList.toggle("open");
};

let menuElem5 = document.getElementById("kakyoin");
let titleElem5 = menuElem5.querySelector(".title5");

titleElem5.onclick = function () {
  menuElem5.classList.toggle("open");
};

let menuElem6 = document.getElementById("iggy");
let titleElem6 = menuElem6.querySelector(".title6");

titleElem6.onclick = function () {
  menuElem6.classList.toggle("open");
};
let section = document.querySelector('.section')
let changeBack2 = document.getElementById("joseph");
changeBack2.onclick = function () {
  html.style = `font-size: 10px;
    font-family: Georgia, "Times New Roman", Times, serif;
    background-image: url("images/HermitPurple.png");
    min-height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;`;
  section.style = ` width: 600px;
    margin: 0 auto;
    background-color: rgb(63, 23, 54);
    /* background-color: rgb(55, 64, 80); */
    padding: 0 20px 20px 20px;
    border: 5px solid black;
    color: white
    `;
  jojo.style = `
    font-size: 60px;
  text-align: center;
  margin: 0;
  padding: 20px 0;
  color: rgb(211, 41, 106);
  text-shadow: 3px 3px 1px rgb(21, 5, 27);
    `;

  sd.style = `font-size: 60px;
    text-align: center;
    margin: 0;
    padding: 20px 0;
    color: rgb(211, 41, 106);
    text-shadow: 3px 3px 1px rgb(21, 5, 27);`;
  let name = document.getElementsByClassName("name");
  name.style = `font-size: 40px;
    text-align: center;
    margin: 0;
    padding: 20px 0;
    color: rgb(211, 41, 106);
    text-shadow: 3px 3px 1px rgb(21, 5, 27);`;
};

let changeBack3 = document.getElementById("avdol");
changeBack3.onclick = function () {
  html.style = `font-size: 10px;
    font-family: Georgia, "Times New Roman", Times, serif;
    background-image: url("images/Magician's_Red.png");
    min-height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;`;

    section.style = ` width: 600px;
    margin: 0 auto;
    background-color: #eca33c;
    /* background-color: rgb(55, 64, 80); */
    padding: 0 20px 20px 20px;
    border: 5px solid black;
    text-shadow: 1px 0.5px 0.5px white;`;

  jojo.style = `
    font-size: 60px;
  text-align: center;
  margin: 0;
  padding: 20px 0;
  color: rgb(207, 69, 34);
  text-shadow: 3px 3px 1px rgb(21, 5, 27);
    `;

  sd.style = `font-size: 60px;
    text-align: center;
    margin: 0;
    padding: 20px 0;
    color: rgb(207, 69, 34);
    text-shadow: 3px 3px 1px rgb(21, 5, 27);`;
};

let changeBack4 = document.getElementById("polnaref");
changeBack4.onclick = function () {
  html.style = `font-size: 10px;
    font-family: Georgia, "Times New Roman", Times, serif;
    background-image: url("images/5cc.png");
    min-height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;`;
    section.style = `
  width: 600px;
  margin: 0 auto;
  background-color:  rgb(55, 64, 80);
  padding: 0 20px 20px 20px;
  border: 5px solid black;
  color: white
  `;

  jojo.style = `
    font-size: 60px;
  text-align: center;
  margin: 0;
  padding: 20px 0;
  color: silver;
  text-shadow: 3px 3px 1px rgb(21, 5, 27);
    `;

  sd.style = `font-size: 60px;
    text-align: center;
    margin: 0;
    padding: 20px 0;
    color: silver;
    text-shadow: 3px 3px 1px rgb(21, 5, 27);`;
};

let changeBack5 = document.getElementById("kakyoin");
changeBack5.onclick = function () {
  html.style = `font-size: 10px;
    font-family: Georgia, "Times New Roman", Times, serif;
    background-image: url("images/hg.jpg");
    min-height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;`;

    section.style = ` width: 600px;
    margin: 0 auto;
    background-color: rgb(195, 197, 199);
    /* background-color:  rgb(81, 82, 83); */
    padding: 0 20px 20px 20px;
    border: 5px solid black;`;

  jojo.style = `
    font-size: 60px;
  text-align: center;
  margin: 0;
  padding: 20px 0;
  color: rgb(36, 131, 41);
  text-shadow: 3px 3px 1px rgb(21, 5, 27);
    `;

  sd.style = `font-size: 60px;
    text-align: center;
    margin: 0;
    padding: 20px 0;
    color: rgb(36, 131, 41);
    text-shadow: 3px 3px 1px rgb(21, 5, 27);`;
};

let changeBack6 = document.getElementById("iggy");
changeBack6.onclick = function () {
  html.style = `font-size: 10px;
    font-family: Georgia, "Times New Roman", Times, serif;
    background-image: url("images/TheFool_Anime.png");
    min-height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;`;

    section.style = ` width: 600px;
    margin: 0 auto;
    background-color: #eca33c;
    /* background-color: rgb(55, 64, 80); */
    padding: 0 20px 20px 20px;
    border: 5px solid black;`;

  jojo.style = `
    font-size: 60px;
  text-align: center;
  margin: 0;
  padding: 20px 0;
  color: rgb(211, 41, 106);
  text-shadow: 3px 3px 1px rgb(21, 5, 27);
    `;

  sd.style = `font-size: 60px;
    text-align: center;
    margin: 0;
    padding: 20px 0;
    color: rgb(211, 41, 106);
    text-shadow: 3px 3px 1px rgb(21, 5, 27);`;
};

changeBack.onclick = function () {
  document.body.style.backgroundImage = "images/dust.jpg";
  if (changeBack.id == "ky") {
    html.style = `font-size: 10px;
  font-family: Georgia, "Times New Roman", Times, serif;
  background-image: url("https://i.pinimg.com/originals/07/21/96/072196289dc6073b98588044a26c967f.jpg");
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;`;
  }
};
