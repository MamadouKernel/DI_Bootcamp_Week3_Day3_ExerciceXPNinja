function handleClick(event) {
    const colorIndex = Math.floor(Math.random() * 15);
    const selectedColor = listColor[colorIndex];
    let newDiv = document.createElement("div");
    newDiv.style.backgroundColor = selectedColor;
    newDiv.style.float = 'left';
    newDiv.style.height = "100px";
    newDiv.style.width = "100px";
    newDiv.style.animation = "expand .5s ease-in-out";
    containerDiv.appendChild(newDiv);
  }
  
  const listColor = [
    "aqua",
    "aquamarine",
    "bisque",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "lightskyblue",
    "peru",
    "pink",
    "olive",
    "orangered",
    "yellowgreen",
    "blue",
    "red",
    "maroon",
  ];
  
  const containerDiv = document.getElementsByClassName("container")[0];
  
  const clickableDiv = document.getElementById("click");
  
  clickableDiv.addEventListener("click", handleClick);

/**
*@Author KM_KONATE
*/
