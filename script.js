const mainBox = document.getElementById("main-box");
const mainBox1 = document.getElementById("main-box1");
const mainBox2 = document.getElementById("main-box2");
const mainBox3 = document.getElementById("main-box3");
const sourceVideo = document.getElementById("video");

const fundo = document.getElementById("fundo");

//---------mainbox1

mainBox.addEventListener("mouseover", function () {
  mainBox.style.height = "400px";
  mainBox.style.width = "600px";
  mainBox.style.zIndex = 2;
  mainBox1.style.zIndex = 0;
  mainBox2.style.zIndex = 0;
  mainBox3.style.zIndex = 0;

  fundo.style.backdropFilter = "blur(3px)";
  fundo.style.backgroundColor = "rgba(32, 32, 32, 0.73), 0.77)";

  console.log(mainBox.style.zIndex);
  console.log(mainBox1.style.zIndex);
  console.log(mainBox2.style.zIndex);
  console.log(mainBox3.style.zIndex);

  sourceVideo.src = "drake.mp4";
});

mainBox.addEventListener("mouseout", function () {
  mainBox.style.height = "80px";
  mainBox.style.width = "400px";
  mainBox.style.zIndex = 2;
  mainBox1.style.zIndex = 2;
  mainBox2.style.zIndex = 2;
  mainBox3.style.zIndex = 2;

  fundo.style.backdropFilter = "blur(0px)";
  fundo.style.backgroundColor = "transparent";
  sourceVideo.src = "#";
});

//---------mainbox2

mainBox1.addEventListener("mouseover", function () {
  mainBox1.style.height = "400px";
  mainBox1.style.width = "600px";
  mainBox1.style.zIndex = 2;
  mainBox2.style.zIndex = 0;
  mainBox3.style.zIndex = 0;
  mainBox.style.zIndex = 0;

  fundo.style.backdropFilter = "blur(3px)";
  fundo.style.backgroundColor = "rgba(32, 32, 32, 0.73), 0.77)";

  console.log(mainBox.style.zIndex);
  console.log(mainBox1.style.zIndex);
  console.log(mainBox2.style.zIndex);
  console.log(mainBox3.style.zIndex);

  sourceVideo.src = "drake2.mp4";
});

mainBox1.addEventListener("mouseout", function () {
  mainBox1.style.height = "80px";
  mainBox1.style.width = "400px";
  mainBox1.style.zIndex = 2;
  mainBox.style.zIndex = 2;
  mainBox2.style.zIndex = 2;
  mainBox3.style.zIndex = 2;

  fundo.style.backdropFilter = "blur(0px)";
  fundo.style.backgroundColor = "trasnparent";

  sourceVideo.src = "#";
});

//---------mainbox3

mainBox2.addEventListener("mouseover", function () {
  mainBox2.style.height = "400px";
  mainBox2.style.width = "600px";
  mainBox2.style.zIndex = 2;
  mainBox1.style.zIndex = 0;
  mainBox3.style.zIndex = 0;
  mainBox.style.zIndex = 0;

  fundo.style.backdropFilter = "blur(3px)";
  fundo.style.backgroundColor = "rgba(32, 32, 32, 0.73), 0.77)";

  console.log(mainBox.style.zIndex);
  console.log(mainBox1.style.zIndex);
  console.log(mainBox2.style.zIndex);
  console.log(mainBox3.style.zIndex);

  sourceVideo.src = "drake3.mp4";
});

mainBox2.addEventListener("mouseout", function () {
  mainBox2.style.height = "80px";
  mainBox2.style.width = "400px";
  mainBox2.style.zIndex = 2;
  mainBox1.style.zIndex = 2;
  mainBox.style.zIndex = 2;
  mainBox3.style.zIndex = 2;

  fundo.style.backdropFilter = "blur(0px)";
  fundo.style.backgroundColor = "transparent";
  sourceVideo.src = "#";
});

//------------ mainbox4

mainBox3.addEventListener("mouseover", function () {
  mainBox3.style.height = "400px";
  mainBox3.style.width = "600px";
  mainBox3.style.zIndex = 2;
  mainBox1.style.zIndex = 0;
  mainBox2.style.zIndex = 0;
  mainBox.style.zIndex = 0;

  fundo.style.backdropFilter = "blur(3px)";
  fundo.style.backgroundColor = "rgba(32, 32, 32, 0.73), 0.77)";

  console.log(mainBox.style.zIndex);
  console.log(mainBox1.style.zIndex);
  console.log(mainBox2.style.zIndex);
  console.log(mainBox3.style.zIndex);

  sourceVideo.src = "drake4.mp4";
});

mainBox3.addEventListener("mouseout", function () {
  mainBox3.style.height = "80px";
  mainBox3.style.width = "400px";
  mainBox3.style.zIndex = 2;
  mainBox.style.zIndex = 2;
  mainBox1.style.zIndex = 2;
  mainBox2.style.zIndex = 2;

  fundo.style.backdropFilter = "blur(0px)";
  fundo.style.backgroundColor = "transparent";
  sourceVideo.src = "#";
});
