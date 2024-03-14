let ServicesContainer = document.querySelector('.Services__Container')
let ServicesText = document.querySelector('.services__text')
let ServicesParagraph = document.querySelector('.services__text__p')

ServicesText.addEventListener('click',() => {
    ServicesContainer.classList.toggle('Services__Extend')
    ServicesParagraph.innerHTML === 'مشاهده بیشتر'? ServicesParagraph.innerHTML = 'بستن' : ServicesParagraph.innerHTML = 'مشاهده بیشتر';
})

let BackToTheTop = document.querySelector('.Footer__Back__To__Top')

BackToTheTop.addEventListener('click',() => {
   window.scrollTo(0,top)
})