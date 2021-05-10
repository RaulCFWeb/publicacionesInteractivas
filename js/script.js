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




