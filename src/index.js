import './sass/main.scss';

const refs ={
    form: document.querySelector('.main__form'),
    footerEl: document.querySelector('.main__footer'),
    btnContainer: document.querySelector('.form__button--container'),
    radioBtns: document.querySelectorAll('.form__radio-btn'),
    formBtn: document.querySelector('.form__button'),
    mainContainer: document.querySelector('.main__content'),
    timeContainer: document.querySelector('.time__container'),
}

let sex = '';   

refs.form.addEventListener('change', onRadioBtnCkick);
refs.form.addEventListener('submit', onBtnSubmitClick);



function onRadioBtnCkick(e){
    e.preventDefault();
     

    for(const radioBtn of refs.radioBtns){
        if(radioBtn.checked){
            sex = radioBtn.value;
            refs.btnContainer.classList.add('is-open');
            refs.footerEl.classList.toggle('main__footer--end');
        }
    }
}

function onBtnSubmitClick(e){
    e.preventDefault();
    // console.log(sex);
    refs.mainContainer.classList.add('is-active'); 
    refs.timeContainer.classList.remove('is-active');

    

}
