var body = document.querySelector('body');

body.style.margin = '0';

for (i = 0; i < 63; i++) {
  var square = document.createElement('div');
  body.appendChild(square);
  square.style.width = '11.1%';
  square.style.float='left';
  square.style.display='block';
  square.style.paddingBottom = '11.1%';
  if (i % 2 === 0) {
    square.style.backgroundColor = 'black';
  } else {
    square.style.backgroundColor = 'red';
  }
}