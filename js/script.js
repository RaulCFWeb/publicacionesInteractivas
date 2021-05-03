/************* SLIDER AUTOMATICO ******************/
const banners = ["img/banner/bannerVivaLingua.jpg", "img/banner/bannerInglesNew.jpg", "img/banner/pagosOnline.png", "img/banner/destreza.png", "img/banner/bolsaTrabajo.png", "img/banner/sistemaIntegral.png"]
let i = 0
const imgBanner = () => {
    const image = document.querySelector('#imgBanner')
    let totalImages = banners.length 
    totalImages -= 1
    image.src = banners[i]
    i < totalImages ? i++ : i = 0
}
setInterval(imgBanner, 3000);



/* REMPLAZA LAS IMAGENES EN LA CLASE COURSES CUANDO EL MOUSE
ENTRE Y SALE  */
const changeImagesCourses = () => {
    document.querySelector('#capacitacionImage').addEventListener('mouseenter', () => {
        document.querySelector('#capacitacionImage').src = "img/courses/CapacitacionR.png"
    })
    document.querySelector('#capacitacionImage').addEventListener('mouseleave', () => {
        document.querySelector('#capacitacionImage').src = "img/courses/CapacitacionN.png"
    })
    document.querySelector('#diccionarioImage').addEventListener('mouseenter', () => {
        document.querySelector('#diccionarioImage').src = "img/courses/DiccionariosR.png" 
    })
    document.querySelector('#diccionarioImage').addEventListener('mouseleave', () => {
        document.querySelector('#diccionarioImage').src = "img/courses/DiccionariosN.png"
    })
    document.querySelector('#multimediaImage').addEventListener('mouseenter', () => {
        document.querySelector('#multimediaImage').src = "img/courses/MultimediaR.png" 
    })
    document.querySelector('#multimediaImage').addEventListener('mouseleave', () => {
        document.querySelector('#multimediaImage').src = "img/courses/MultimediaN.png"
    })
    document.querySelector('#idiomasImage').addEventListener('mouseenter', () => {
        document.querySelector('#idiomasImage').src = "img/courses/IdiomasR.png"
    })
    document.querySelector('#idiomasImage').addEventListener('mouseleave', () => {
        document.querySelector('#idiomasImage').src = "img/courses/IdiomasN.png"
    })
    document.querySelector('#infantilImage').addEventListener('mouseenter', () => {
        document.querySelector('#infantilImage').src = "img/courses/InfantilR.png"
    })
    document.querySelector('#infantilImage').addEventListener('mouseleave', () => {
        document.querySelector('#infantilImage').src = "img/courses/InfantilN.png"
    })
    document.querySelector('#culturaImage').addEventListener('mouseenter', () => {
        document.querySelector('#culturaImage').src = "img/courses/CulturaR.png"
    })
    document.querySelector('#culturaImage').addEventListener('mouseleave', () => {
        document.querySelector('#culturaImage').src = "img/courses/CulturaN.png"
    })
}
changeImagesCourses()


