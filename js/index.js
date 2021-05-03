/* 
DETECTA EL SCROL Y AGREGA ANIMACIONES AL INDEX
*/
window.addEventListener('scroll', () => {
    /* FORM CONTACT */
    const contactIndex = document.querySelector('#contact')
    const contactIndexDetected = document.querySelector('#contact').getBoundingClientRect()
    contactIndexDetected.top < 550 ? contactIndex.style.animation = 'hiddenFromLeft ease-in-out 1s' : contactIndex.style.animation = ''

    /* TITLES Y DESCRIPTION DE SECTION .ELEMENT INDEX */
    const titlesIndex = document.querySelectorAll('section .title')
    const titlesIndex1Detected = document.querySelectorAll('section .title')[0].getBoundingClientRect()
    const titlesIndex2Detected = document.querySelectorAll('section .title')[1].getBoundingClientRect()
    const titlesIndex3Detected = document.querySelectorAll('section .title')[2].getBoundingClientRect()
    titlesIndex1Detected.top < 550 ? titlesIndex[0].style.animation = 'hiddenFromLeft ease-in-out 1s' : titlesIndex[0].style.animation = ''
    titlesIndex2Detected.top < 550 ? titlesIndex[1].style.animation = 'hiddenFromLeft ease-in-out 1s' : titlesIndex[1].style.animation = ''
    titlesIndex3Detected.top < 550 ? titlesIndex[2].style.animation = 'hiddenFromRight ease-in-out 1s' : titlesIndex[2].style.animation = ''

    const descriptionIndex = document.querySelectorAll('section .description')
    const descriptionIndex1Detected = document.querySelectorAll('section .description')[0].getBoundingClientRect()
    const descriptionIndex2Detected = document.querySelectorAll('section .description')[1].getBoundingClientRect()
    const descriptionIndex3Detected = document.querySelectorAll('section .description')[2].getBoundingClientRect()

    descriptionIndex1Detected.top < 550 ? descriptionIndex[0].style.animation = 'hiddenFromLeft ease-in-out 1s' : descriptionIndex[0].style.animation = ''
    descriptionIndex2Detected.top < 550 ? descriptionIndex[1].style.animation = 'hiddenFromLeft ease-in-out 1s' : descriptionIndex[1].style.animation = ''
    descriptionIndex3Detected.top < 550 ? descriptionIndex[2].style.animation = 'hiddenFromRight ease-in-out 1s' : descriptionIndex[2].style.animation = ''
})

