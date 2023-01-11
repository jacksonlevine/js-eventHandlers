onload = function() {
  let bo = document.querySelector("body")
  bo.onmousemove = function() {
    let rvalue = Math.random()*50;
    let gvalue = Math.random()*50;
    let bvalue = Math.random()*50;
    bo.style.backgroundColor = "rgb("+ rvalue +","+gvalue+","+bvalue+")";
    bo.style.marginLeft = "" + Math.random()*30 + "%";
    bo.style.color = "rgb("+ Math.random()*200 +","+Math.random()*200+","+Math.random()*200+")";
  }
  bo.onscroll = function() {
    let rvalue = Math.random()*50;
    let gvalue = Math.random()*50;
    let bvalue = Math.random()*50;
    bo.style.backgroundColor = "rgb("+ rvalue +","+gvalue+","+bvalue+")";
    bo.style.marginLeft = "" + Math.random()*30 + "%";
    bo.style.color = "rgb("+ Math.random()*200 +","+Math.random()*200+","+Math.random()*200+")";
  }
}