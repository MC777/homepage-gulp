// console.log('siema');
// const name = 'XXX';
// const surname = 'BBB'
// const age = 31;
// let isTrue = true;
// isTrue = false;
// isTrue = 'Tak';
// console.log(name);
// console.log(isTrue);
// console.log(`Mam na imie ${name} i mówie ${isTrue}`);

// const heading = document.querySelector('.mainHeader');
// console.log(heading);

// const paragraphs = document.querySelectorAll('p');
// console.log(paragraphs);
// console.log(paragraphs[0]);

// const about = document.querySelector('.about__paragraph--js');
// console.log(about.innerHTML);
// about.innerHTML = `<strong>Nazywam</strong> sie ${name} i mam ${age} lat`;

// const wel = document.querySelector('.welcome__paragraph--js');
// console.log(wel.innerHTML);
// wel.innerHTML = `Witaj ${name} na mojej stronie!`


// function calculate(x) {
//   x = x + 3;
//   console.log(x);
//   return x * 7;
// }

// console.log(calculate(2));

// const calculateFat = (x) => {
//   x = x + 1;
//   console.log(x);
//   return x + 5;
// }

// console.log(calculateFat(1));

// const welcomeMessage = (x, y) => {
//   return `Witaj ${x} ${y} na mojej stronie!`
// }

// console.log(welcomeMessage(name, surname))


// function handleClick() {
//   console.log('halo');
// }

// const button = document.querySelector('.header__button--js');
// console.log(button);
// button.addEventListener('click', (e) => {
//   const header = document.querySelector('.header__title--js');
//   header.innerHTML = 'klik klik';
//   header.classList.toggle('header__title--red');
//   alert('hello');
//   // console.log(e);
//   // console.log('Hello arrow!');
// });

// const navigationSwitcher = document.querySelector('.navigation__switcher--js');

// navigationSwitcher.addEventListener('click', (e) => {
//   const navigationList = document.querySelector('.navigation__list--js');
//   navigationList.classList.toggle('navigation__list--visible');
// });

// const faces = ['emp1', 'emo2', 'emo3', 'emo4'];

// for (let i = 0; i < faces.length; i++) {
//   console.log(`${faces[i]} powtórzenie`);
// }

// let a = 10;
// while (a > 0){
//   a--;
//   console.log(a);
// }

// const person = {
//   name: 'Marek',
//   age: 21,
//   count: 34
// }

// for (let property in person){
//   console.log(`${property}: ${person[[property]]}`)
// }

// const jsonPerson = JSON.stringify(person);
// console.log(jsonPerson.name);

// localStorage.setItem('person', jsonPerson);

// const personStringify = localStorage.getItem('person');
// const newPerson = JSON.parse(personStringify);
// console.log(newPerson);

// localStorage.removeItem('person');
const focusInput = document.querySelector('.focus--js');


if (localStorage.getItem('focusInput')) {
  focusInput.value = localStorage.getItem('focusInput');
}

focusInput.addEventListener('keyup', (e) => {
  localStorage.setItem('focusInput', e.target.value);
})