let equation = "";
// ? elements
const resultElement = document.querySelector(".result > h1");
// ? events
document.querySelectorAll("header .numbers > p").forEach((element) => {
  element.addEventListener("click", (e) => {
    const number = +e.target.getAttribute("data-number");
    const modeClass = number == 2 ? "theme-2" : number == 3 ? "theme-3" : "";
    document.body.classList.remove("theme-2", "theme-3");
    if (modeClass) document.body.classList.add(modeClass);
  });
});
Array.from(document.getElementsByClassName("button")).forEach((ele) => {
  ele.addEventListener("click", (e) => {
    let key = e.target.getAttribute("data");
    switch (key) {
      case ".":
        resultElement.innerText += ".";
        break;
      case "equal":
        equation += resultElement.innerText;
        console.log(equation);
        console.log(eval(equation) + "");
        resultElement.innerText = eval(equation) + "";
        equation = "";
        break;
      case "reset":
        equation = "";
        resultElement.innerText = "0";
        break;
      case "del":
        let screenValue = resultElement.innerText.slice(0, length - 1);
        if (!screenValue) screenValue = "0";
        resultElement.innerText = screenValue;
    }
    if (!isNaN(key)) {
      resultElement.innerText =
        resultElement.innerText === "0" ? key : resultElement.innerText + key;
      return;
    } else if (["/", "*", "+", "-"].includes(key)) {
      equation += `${resultElement.innerText}${key}`;
      resultElement.innerText = "0";
      return;
    }
  });
});
