/* 
COMPRUEBA SI EL CONTENIDO YA SE PUEDE MOSTRAR 
*/
setInterval(() => {
    const showElement = 700
    /* TITLES Y DESCRIPTION DE SECTION .ELEMENT INDEX */
    const titleIndex = document.querySelectorAll('section .title')
    for (let i = 0; i < titleIndex.length; i++){
        if(titleIndex[i].getBoundingClientRect().top < showElement) {
            titleIndex[i].style.left = '0'
            titleIndex[i].style.transition = 'all 1s ease-in-out' 
        }
    }
    const descriptionIndex = document.querySelectorAll('section .description')
    for (let i = 0; i < descriptionIndex.length; i++){
        if(descriptionIndex[i].getBoundingClientRect().top < showElement) {
            descriptionIndex[i].style.left = '0'
            descriptionIndex[i].style.transition = 'all 1s ease-in-out' 
        }
    }
    /* FORM CONTACT */
    const forms = document.querySelector('.form')
    if(forms.getBoundingClientRect().top < showElement){
        forms.style.opacity = '1'
        forms.style.transition = 'all 2s ease-in-out'
    }
}, 100);

