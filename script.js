function showText(number) {
  if (number === 1) {
    document.querySelector("#description1").classList.remove("hideText");
    document.querySelector("#description1").classList.add("showText");
  } else if (number === 2) {
    document.querySelector("#description2").classList.remove("hideText");
    document.querySelector("#description2").classList.add("showText");
  } else {
    document.querySelector("#description3").classList.remove("hideText");
    document.querySelector("#description3").classList.add("showText");
  }
}

function hideText(number) {
  if (number === 1) {
    document.querySelector("#description1").classList.remove("showText");
    document.querySelector("#description1").classList.add("hideText");
  } else if (number === 2) {
    document.querySelector("#description2").classList.remove("showText");
    document.querySelector("#description2").classList.add("hideText");
  } else {
    document.querySelector("#description3").classList.remove("showText");
    document.querySelector("#description3").classList.add("hideText");
  }
}

function alertText(number) {
  alert(`${number}번째 추억이에요! 눌러주셔서 감사합니다 :)`);
}
