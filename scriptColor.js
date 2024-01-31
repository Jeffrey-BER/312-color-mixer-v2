// Refferences
const redRef = document.getElementById("sliderRed");
const greenRef = document.getElementById("sliderGreen");
const blueRef = document.getElementById("sliderBlue");
const valueDisplay = document.getElementById("valueDisplay");
const colorViewer = document.getElementById("colorViewer");

// Listeners:
redRef.addEventListener("input", updateStates);
greenRef.addEventListener("input", updateStates);
blueRef.addEventListener("input", updateStates);

// Stat holder for the RGB Values:
let state = {
  redValue: 255,
  greenValue: 0,
  blueValue: 255,
};

// Render function
function render() {
  colorViewer.style.backgroundColor = `rgb(${state.redValue}, ${state.greenValue}, ${state.blueValue})`;
  // Create a string representing the RGB values
  let rgbText = `RGB(${state.redValue}, ${state.greenValue}, ${state.blueValue})`;

  // Clear previous content of valueDisplay
  valueDisplay.innerHTML = "";

  // Create a text node with the RGB string
  let textNode = document.createTextNode(rgbText);

  // Append the text node to the valueDisplay element
  valueDisplay.appendChild(textNode);
}

// function to updat the state

function updateStates() {
  // state.redValue = number(sliderRed.value);??
  state.redValue = document.getElementById("sliderRed").value;
  state.greenValue = document.getElementById("sliderGreen").value;
  state.blueValue = document.getElementById("sliderBlue").value;

  // Bi directional binding
  redRef.value = state.redValue;
  greenRef.value = state.greenValue;
  blueRef.value = state.blueValue;

  render();
}

// Initial set up:
render();
