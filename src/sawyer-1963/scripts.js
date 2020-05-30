const circ = document.querySelector("circle");
const output = document.getElementById("output");
const btn = document.querySelector("button");
const toggle = document.querySelector("#togglefill");

console.log('circ', circ);

const useEventType =
  typeof window.PointerEvent === "function" ? "pointer" : "mouse";
const listeners = [
  "click",
  "touchstart",
  "touchend",
  "touchmove",
  `${useEventType}enter`,
  `${useEventType}leave`,
  `${useEventType}move`,
];

const pointerHandler = (event) => {
  event.preventDefault();
  const evtype = document.createTextNode(event.type + "\n");
  output.appendChild(evtype);
};

listeners.map((etype) => {
  circ.addEventListener(etype, pointerHandler);
});

btn.addEventListener("click", (event) => {
  output.innerHTML = "";
});

toggle.addEventListener("change", (event) => {
  event.target.checked
    ? circ.setAttribute("fill", "#D79CFD")
    : circ.setAttribute("fill", "none");
});
