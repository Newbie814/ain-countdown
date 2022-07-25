const numbers = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

function resetDOM() {
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');

  numbers.forEach((num) => {
    num.classList.value = '';
  });

  numbers[0].classList.add('in');
}

function runAnimation() {
  numbers.forEach((num, index) => {
    const nextToLast = numbers.length - 1;

    num.addEventListener('animationend', (event) => {
      if (event.animationName === 'goIn' && index !== nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (event.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    });
  });
}

replay.addEventListener('click', () => {
  resetDOM();
  runAnimation();
});
