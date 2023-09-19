// let elements = document.querySelectorAll(".text");
// elements.forEach((element) => {
//   let innerText = element.innerText;
//   element.innerHTML = "";
//   let textContainer = document.createElement("div");
//   textContainer.classList.add("block");
//   for (let letter of innerText) {
//     let span = document.createElement("span");
//     span.innerText = letter.trim() === "" ? "/xa0" : letter;
//     span.classList.add("letter");
//     textContainer.appendChild(span);
//   }
//   element.appendChild(textContainer);
//   element.appendChild(textContainer.cloneNode(true));
// });
// elements.forEach((element) => {
//   element.addEventListener("mouseover", () => {
//     element.classList.remove("play");
//   });
// });

const svg = document.querySelector("#svg");
const mouse = svg.createSVGPoint();
const leftEye = createEye("#left-eye");
const rightEye = createEye("#right-eye");

let requestId = null;
window.addEventListener("mousemove", onmousemove);

function onFrame() {
  let point = mouse.matrixTransForm(svg.getScreenCTM().inverse());
  leftEye.rotateTo(point);
  rightEye.rotateTo(point);
  requestId = null;
}
function onmousemove(event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  if (!requestId) {
    requestId = requestAnimationFrame(onFrame);
  }
}
function createEye(selector) {
  const element = document.querySelector(selector);
  TweenMax.set(element, {
    transformOrigin: "center",
  });
  let bbox = element.getBBox();
  let centerX = bbox.x + bbox.width / 2;
  let centerY= bbox.y + bbox.height /2
  function rotateTo(point){
    let dx = point.x - centerX;
    let dy = point.x - centerY;
    let angle = Math.atan2(dy,dx)
    TweenMax.to(element,0.3,{
      rotation: angle + "_rad_short"
    })
  }
  return{
    element,rotateTo
  }
}
