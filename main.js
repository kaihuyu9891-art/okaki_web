'use strict';

let count = 0;

const countNumber = document.getElementById('count-number');
const countBtn = document.getElementById('count-btn');

if (countNumber && countBtn) {
  countBtn.addEventListener('click', () => {
    count += 1;
    countNumber.textContent = String(count);
  });
}