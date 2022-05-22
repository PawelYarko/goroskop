import './sass/main.scss';

const refs ={
    form: document.querySelector('.main__form'),
    footerEl: document.querySelector('.main__footer--start'),
}

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.toggle('is-open');
    }
  });
  createFooter();
}



function createFooter(){
    refs.footerEl.classList.toggle('is-active')
    const footer = `<p class="main__footer main__footer--end">2020 © HOROSCOP PERSONAL</p>`;
    console.log(refs.footerEl)
    refs.form.insertAdjacentHTML("beforeend", footer);
}

let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.form__button--container');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

refs.form.addEventListener('submit', formSubmit)

function formSubmit(e){
    e.preventDefault();
}
