//***************************************************************************
//CHECKERBOARD
//***************************************************************************

// var body = document.querySelector('body');

// body.style.margin = '0';

// for (i = 0; i < 63; i++) {
//   var square = document.createElement('div');
//   body.appendChild(square);
//   square.style.width = '11.1%';
//   square.style.float='left';
//   square.style.display='block';
//   square.style.paddingBottom = '11.1%';
//   if (i % 2 === 0) {
//     square.style.backgroundColor = 'black';
//   } else {
//     square.style.backgroundColor = 'red';
//   }
// }

//***************************************************************************
//RANDOM COLORS
//***************************************************************************
// var body = document.querySelector('body');

// body.style.margin = '0';



// for (i = 0; i < 63; i++) {
//   var square = document.createElement('div');
//   body.appendChild(square);
//   square.style.width = '11.1%';
//   square.style.float='left';
//   square.style.display='block';
//   square.style.paddingBottom = '11.1%';
//   var randomColor1 = Math.floor(Math.random()*255);
//   var randomColor2 = Math.floor(Math.random()*255);
//   var randomColor3 = Math.floor(Math.random()*255);
//   square.style.backgroundColor = `rgb(${randomColor1},${randomColor2}, ${randomColor3})`;
// };

//***************************************************************************
//GRADIENT
//***************************************************************************
// var body = document.querySelector('body');

// body.style.margin = '0';



// for (i = 0; i < 63; i++) {
//   var square = document.createElement('div');
//   body.appendChild(square);
//   square.style.width = '11.1%';
//   square.style.float='left';
//   square.style.display='block';
//   square.style.paddingBottom = '11.1%';
//   var randomColor1 = Math.floor(Math.random()*255);
//   var randomColor2 = Math.floor(Math.random()*255);
//   var randomColor3 = Math.floor(Math.random()*255);
//   var opacity = (100-i)/100;
//   if (i % 2 === 0) {
//     square.style.backgroundColor = `rgba(${255},${255}, ${0}, ${opacity})`;
//   } else {
//     square.style.backgroundColor = `rgba(${0},${255}, ${255}, ${opacity})`;
//   }
// };

//***************************************************************************
//RANDOM COLORS W/ TIMER
//***************************************************************************

var body = document.querySelector('body');

body.style.margin = '0';

var colorArray = [];

for (i = 0; i < 63; i++) {
  var square = document.createElement('div');
  body.appendChild(square);
  square.style.width = '11.1%';
  square.style.float='left';
  square.style.display='block';
  square.style.paddingBottom = '11.1%';
  var randomColor1 = Math.floor(Math.random()*255);
  var randomColor2 = Math.floor(Math.random()*255);
  var randomColor3 = Math.floor(Math.random()*255);
  square.style.backgroundColor = `rgb(${randomColor1},${randomColor2}, ${randomColor3})`;
  colorArray.push(square);
};

setInterval(function() {
  for (i = 0; i < 63; i++) {
    var randomColor1 = Math.floor(Math.random()*255);
    var randomColor2 = Math.floor(Math.random()*255);
    var randomColor3 = Math.floor(Math.random()*255);  
    colorArray[i].style.backgroundColor = `rgb(${randomColor1},${randomColor2}, ${randomColor3})`;
  }
}, 2000);

