import './sass/main.scss';

const refs ={
    form: document.querySelector('.main__form'),
    footerElStart: document.querySelector('.main__footer--start'),
    footerElEnd: document.querySelector('.main__footer--end'),
    btnContainer: document.querySelector('.form__button--container'),
    radioBtns: document.querySelectorAll('.form__radio-btn'),
    formBtn: document.querySelector('.form__button'),
    mainContaer: document.querySelector('.main__content'),
}

let sex = '';   

refs.form.addEventListener('change', onRadioBtnCkick);
refs.form.addEventListener('submit', onBtnSubmitClick);

function newFooter(){
    refs.footerElStart.classList.toggle('is-active');
    refs.btnContainer.classList.toggle('is-open');
    refs.footerElEnd.classList.toggle('is-active'); 
}

function onRadioBtnCkick(e){
    e.preventDefault();
     

    for(const radioBtn of refs.radioBtns){
        if(radioBtn.checked){
            sex = radioBtn.value;
            newFooter();
        }
    }
}

function onBtnSubmitClick(e){
    e.preventDefault();
    // console.log(sex);
    refs.mainContaer.classList.add('is-active'); 
    

}
