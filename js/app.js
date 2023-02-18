function getInputValue(id) {
    const valueString = document.getElementById(id).value;
    const value = parseFloat(valueString);
    return value;
  }
  
  function traingleRhombusPentagonArea(value1, value2) {
    const result = 0.5 * value1 * value2;
    return result;
  }
  
  function RectangleparallelogramArea(value1, value2) {
    const result = value1 * value2;
    return result;
  }
  
  function ellipseArea(value1, value2) {
    const result = 3.14 * value1 * value2;
    return result;
  }
  
  function areaCalculation(id, value) {
    const areaCalculate = document.getElementById("area-calculate-section");
    const ol = document.getElementById("order-list");
    const li = document.createElement("li");
    li.innerText = id;
    ol.appendChild(li);
   li.style.textAlign = 'left';
    const p = document.createElement("span");
    p.innerText = value;
    li.appendChild(p);
    p.style.textAlign = 'left';
    if(id=='parallelogram'){
      p.style.marginLeft = "0px";
      p.style.marginRight = "0px";
    }
    else{
      p.style.marginLeft = "10px";
      p.style.marginRight = "10px";
    }
    
    const p1 = document.createElement("span");
    p1.innerHTML = "<span>cm<sup>2</sup></span>";
    li.appendChild(p1);
    const button = document.createElement("button");
    button.innerHTML = "<span>convert to m<sup>2</sup></span>";
    li.appendChild(button);
     button.style.marginLeft = "10px";
    button.style.backgroundColor = "blue";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    li.style.marginBottom = "15px";
  }
  
  document.getElementById("tri-btn").addEventListener("click", function () {
    const baseValue = getInputValue("tri-base-value");
    const heightValue = getInputValue("tri-height-value");
    if (baseValue >= 0 && heightValue >= 0) {
      const areaTraingle = traingleRhombusPentagonArea(baseValue, heightValue);
      const triArea = areaTraingle.toFixed(2);
      areaCalculation("Triangle", triArea);
    } else alert("plz enter a valid input");
  });
  
  document.getElementById("rectangle-btn").addEventListener("click", function () {
    const widthValue = getInputValue("rect-w-value");
    const lengthValue = getInputValue("rect-l-value");
    if (widthValue >= 0 && lengthValue >= 0) {
      const areaRectangle = RectangleparallelogramArea(widthValue, lengthValue);
      const rectArea = areaRectangle.toFixed(2);
      areaCalculation("Rectangle", rectArea);
    } else alert("plz enter a valid input");
  });
  
  document
    .getElementById("parallelogram-btn")
    .addEventListener("click", function () {
      const baseValue = getInputValue("parallelogram-base");
      const heightValue = getInputValue("parallelogram-height");
      if (baseValue >= 0 && heightValue >= 0) {
        const areaParallelogram = RectangleparallelogramArea(
          baseValue,
          heightValue
        );
        const parallelArea = areaParallelogram.toFixed(2);
        areaCalculation("parallelogram", parallelArea);
      } else alert("plz enter a valid input");
    });
  
  document.getElementById("rhombus-btn").addEventListener("click", function () {
    const baseValue = getInputValue("rhombusd1");
    const heightValue = getInputValue("rhombusd2");
    if (baseValue >= 0 && heightValue >= 0) {
      const areaRhombus = traingleRhombusPentagonArea(baseValue, heightValue);
      const rhombusArea = areaRhombus.toFixed(2);
      areaCalculation("Rhombus", rhombusArea);
    } else alert("plz enter a valid input");
  });
  
  document.getElementById("pentagon-btn").addEventListener("click", function () {
    const baseValue = getInputValue("pentagon-b");
    const heightValue = getInputValue("pentagon-p");
    if (baseValue >= 0 && heightValue >= 0) {
      const areaPentagon = traingleRhombusPentagonArea(baseValue, heightValue);
      const pentagonArea = areaPentagon.toFixed(2);
      areaCalculation("Pentagon", pentagonArea);
    } else alert("plz enter a valid input");
  });
  
  document.getElementById("ellipse-btn").addEventListener("click", function () {
    const baseValue = getInputValue("ellipse-b");
    const heightValue = getInputValue("ellipse-a");
    if (baseValue >= 0 && heightValue >= 0) {
      const areaellipse = ellipseArea(baseValue, heightValue);
      const EllipseArea = areaellipse.toFixed(2);
      areaCalculation("Ellipse", EllipseArea);
    } else alert("plz enter a valid input");
  });
  
  // random backgroundColor generate
  
  function mouseOver() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  document.getElementById("pentagon-id").onmouseover = function () {
    var colors = mouseOver();
    document.getElementById("pentagon-id").style.backgroundColor = colors;
  };
  document.getElementById("pentagon-id").onmouseleave = function () {
    document.getElementById("pentagon-id").style.backgroundColor = "white";
  };
  
  document.getElementById("traingle-id").onmouseover = function () {
    var colors = mouseOver();
    document.getElementById("traingle-id").style.backgroundColor = colors;
  };
  document.getElementById("traingle-id").onmouseleave = function () {
    document.getElementById("traingle-id").style.backgroundColor = "white";
  };
  
  document.getElementById("rectangle-id").onmouseover = function () {
    var colors = mouseOver();
    document.getElementById("rectangle-id").style.backgroundColor = colors;
  };
  document.getElementById("rectangle-id").onmouseleave = function () {
    document.getElementById("rectangle-id").style.backgroundColor = "white";
  };
  document.getElementById("parallelogram-id").onmouseover = function () {
    var colors = mouseOver();
    document.getElementById("parallelogram-id").style.backgroundColor = colors;
  };
  document.getElementById("parallelogram-id").onmouseleave = function () {
    document.getElementById("parallelogram-id").style.backgroundColor = "white";
  };
  document.getElementById("rhombus-id").onmouseover = function () {
    var colors = mouseOver();
    document.getElementById("rhombus-id").style.backgroundColor = colors;
  };
  document.getElementById("rhombus-id").onmouseleave = function () {
    document.getElementById("rhombus-id").style.backgroundColor = "white";
  };
  document.getElementById("ellipse-id").onmouseover = function () {
    var colors = mouseOver();
    document.getElementById("ellipse-id").style.backgroundColor = colors;
  };
  document.getElementById("ellipse-id").onmouseleave = function () {
    document.getElementById("ellipse-id").style.backgroundColor = "white";
  };
  