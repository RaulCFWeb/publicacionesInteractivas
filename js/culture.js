/* **********CON TABS********
REMPLAZA EL CONTENIDO DE LA PAGINA SEGUN EL INDICE RETURNADO DE LA
FUNCION DE LOS MATERIALES CON TABS
*/
const setCourse = () => {
    const imgCourse = document.querySelector('#imgCourse')
    const resume = document.querySelector('.resume')
    const presentation = document.querySelector('.presentation')
    const material = document.querySelector('.material')
    const content = document.querySelector('.content')
    const menuContainer = document.querySelector('.menuContainer')
    const tabs = document.querySelector('#tabs')
    return [imgCourse, resume, presentation, material, content, menuContainer, tabs]
}
/* 
QUITA LA CLASE activeMaterial DE TODOS CURSOS Y LA AGREGA
AL QUE ESTA ACTIVO DE LOS MATERIALES CON TABS
*/
const setActiveCourse = () => {
    for (mat of setCourse()[5].children){
        mat.classList.remove('activeMaterial')
    }
}




/* ************** MATERIALES SIMPLE*****************
REMPLAZA EL CONTENIDO DE LA PAGINA SEGUN EL INDICE RETURNADO DE LA
FUNCION DE LOS MATERIALES SIMPLES
*/
const setCourseSimple = () => {
    const imgCourseSimple1 = document.querySelector('#imgCourseSimple1')
    const imgCourseSimple2 = document.querySelector('#imgCourseSimple2')
    const presentationSimple = document.querySelector('.presentationSimple')
    const menuContainerSimple = document.querySelector('.menuContainerSimple')
    return [imgCourseSimple1, imgCourseSimple2, presentationSimple, menuContainerSimple]
}
/*
QUITA LA CLASE activeMaterial DE TODOS CURSOS Y LA AGREGA
AL QUE ESTA ACTIVO DE LOS MATERIALES SIMPLES
*/
const setActiveCourseSimple = () => {
    for (mat of setCourseSimple()[3].children){
        mat.classList.remove('activeMaterial')
    }
}

/************************ ANIMACIONES ******************
FUNCION PARA DETECTAR EL SCROL Y AGREGA ANIMACIONES A LOS MATERIALES
SIMPLES
*/
const showElement = 700
const animationsSimples= () => {
    const menuContainerSimple = document.querySelector('.menuContainerSimple')
    if(menuContainerSimple.getBoundingClientRect().top < showElement){
        menuContainerSimple.style.left= '0'
        menuContainerSimple.style.transition = 'all 1s ease-in-out'
    }

    const imgCourseSimple1 = document.querySelector('#imgCourseSimple1')
    if(imgCourseSimple1.getBoundingClientRect().top < showElement){
        imgCourseSimple1.style.left= '0'
        imgCourseSimple1.style.transition = 'all 1s ease-in-out'
    }

    const description = document.querySelectorAll('.presentationSimple .description')
    for (let i = 0; i < description.length; i++){
        if(description[i].getBoundingClientRect().top < showElement) {
            description[i].style.right = '0'
            description[i].style.transition = 'all 0.8s ease-in-out' 
        }
    }
    const titleParrafo = document.querySelectorAll('.presentationSimple .titleParrafo')   
    for (let i = 0; i < titleParrafo.length; i++){
        if(titleParrafo[i].getBoundingClientRect().top < showElement){
            titleParrafo[i].style.left = '0'
            titleParrafo[i].style.transition = 'all 0.8s ease-in-out' 
        }
    }
}
setInterval(animationsSimples, 101);
/*
FUNCION PARA DETECTAR EL SCROL Y AGREGA ANIMACIONES A LOS MATERIALES
 CON TABS
*/
const animationsTabs = () => {
    const menuContainer = document.querySelector('.menuContainer')
    if(menuContainer.getBoundingClientRect().top < showElement){
    menuContainer.style.right= '0'
    menuContainer.style.transition = 'all 1s ease-in-out'
    }

    const course = document.querySelector('.course')
    if(course.getBoundingClientRect().top < showElement){
        course.style.left = '0'
        course.style.transition = 'all 1s ease-in-out'
    }

    const titleParrafo = document.querySelectorAll('section .titleParrafo')
    for (let i = 0; i < titleParrafo.length; i++){
        if(titleParrafo[i].getBoundingClientRect().top < showElement) {
            titleParrafo[i].style.left = '0'
            titleParrafo[i].style.transition = 'all 1s ease-in-out' 
        }
    }

    const description = document.querySelectorAll('.presentation .description')
    for (let i = 0; i < description.length; i++){
        if(description[i].getBoundingClientRect().top < showElement) {
            description[i].style.right = '0'
            description[i].style.transition = 'all 0.9s ease-in-out' 
        }
    }

    const uls = document.querySelector('#uls')
    if(uls.getBoundingClientRect().top < showElement){
        uls.style.left = '0'
        uls.style.transition = 'all 1s ease-in-out'
    }
}



/*************************************************
GENERA EL CONTENIDO DE CADA UNO DE LOS MATERIALES
**************************************************/
/*
GENERA EL CONTENIDO DEL MATERIAL MEXICO
*/
const mexico = () => {
    const setSection = document.querySelector('#setSection')
    setSection.innerHTML = `
    <div class="containerSimple">
        <div class="menuContainerSimple">
            <a id="mexico">México</a>
            <a id="artGuiaVisual">Arte, guía visual definitiva</a>
        </div>
        <div id="courseSimple" class="courseSimple">
            <img id="imgCourseSimple1" src="img/courses/cultura/mexico.png" alt="">
        </div>
        <div class="presentationSimple">
            <p class="titleParrafo">MEXICO Y SUS ESTADOS</p>
            <p class="description">México y sus estados es un deleite visual, un homenaje a la diversidad natural y cultural de este país. Cuenta con diversas secciones para conocer más acerca de todos y cada unos de los estados que conforman México.<br>
                Esta obra, que pretende ser un acercamiento a la pluralidad de nuestro país, una visión de conjunto de sus riquezas naturales, de sus hombres y mujeres, de su vasta herencia cultural, y del curso apasionante de su historia, se ha estructurado en treinta y dos capítulos —un capítulo por entidad federativa— que se presentan ordenados alfabéticamente con el deseo de proporcionarle al lector una fácil consulta.<br>
                En el apartado de atractivos turísticos convergen de forma equilibrada zonas arqueológicas, museos, sitios y monumentos históricos; artesanías, platillos y fiestas tradicionales; playas, bosques, desiertos y demás lugares de interés. Cierra cada capítulo, con la mención de los nombres de quienes contribuyeron a forjar el destino de cada región.
            </p>
            <p class="titleParrafo">ISBN 978-607-458-069-3</p>
        </div>
    </div>
    <span id="uls"></span>
    <span class="menuContainer"></span>
    <span class="course"></span>
    `
    /*SE AGREGARON SPANS VACIOS EN EL HTML CON CLASES E IDS PARA
    EVITARLOS MENSAJES DE ERROR EN LA CONSOLA*/

    setActiveCourseSimple()
    setCourseSimple()[3].children[0].classList.add('activeMaterial')
    document.querySelector('#mexico').addEventListener('click', mexico)
    document.querySelector('#artGuiaVisual').addEventListener('click', artGuiaVisual)
    setInterval(animationsSimples, 101);
}




/*
GENERA EL CONTENIDO DEL MATERIAL ARTE GUIA VISUAL
*/
const artGuiaVisual = () => {
    const setSection = document.querySelector('#setSection')
    setSection.innerHTML = `
    <div class="container">
        <div class="menuContainer">
        <a id="mexico">México</a>
        <a id="artGuiaVisual" >Arte, guía visual definitiva</a>
        </div>
        <article class="course">
            <img id="imgCourse" src="img/courses/cultura/arteGuiaVisual.png" alt="">
            <div>
                <div class="resume">
                    <p class="titleResume">Características físicas de la obra:</p>
                    <ul>
                        <li>12 volúmenes de 88 páginas</li>
                        <li>Formato 30.7 X 25.8 CM.</li>
                        <li>Interiores en papel mate de 130 g impresos a color.</li>
                        <li>Encuadernados en pasta dura con plastificado brillante.</li>
                    </ul>
                </div>
            </div>
        </article>
        <article class="presentation">
            <p class="titleParrafo">ARTE, GUÍA VISUAL DEFINITIVA<br>
            LA MÁS GRANDIOSA RECOPILACIÓN DE ARTE UNIVERSAL.
            </p>
            <p class="description">Excepcional aproximación al arte que aborda a los artistas y las características visuales más representativas de cada periodo, desde las sugestivas imágenes de la prehistoria hasta las seductoras y contundentes instalaciones del siglo XX, incluyendo las tendencias occidentales y no occidentales.<br>
            Su exhaustividad en materia artística está garantizada por un equipo de expertos y consultores en arte occidental, asiático, africano y americano.<br>
            Cada sección está estructurada con información de los principales periodos, una introducción descriptiva de ellos y sus movimientos; además de exponer elementos clave e influencias de la época.<br>
            Características del contenido:
            </p>
            <ul id="uls">
                <li>Descripción de cada época o movimiento del arte para contextualizar al lector.</li>
                <li>Resumidas biografías de los artistas.</li>
                <li>Análisis gráfico sumamente detallado de las pinturas más relevantes.</li>
                <li>Recuadros informativos.</li>
                <li>Recuadros informativos.</li>
                <li>Los 12 volúmenes contienen información de aproximadamente720 artistas.</li>
                <li>Cada volumen contiene un índice con los títulos de las obras y autores para su fácil localización.</li>
            </ul>
        </article>
        <article class="material">
        </article>
    </div>
    <span class="menuContainerSimple"></span>
    <span id="imgCourseSimple1"></span>
    `
     /*SE AGREGARON SPANS VACIOS EN EL HTML CON CLASES E IDS PARA
    EVITARLOS MENSAJES DE ERROR EN LA CONSOLA*/
    setActiveCourse();
    setCourse()[5].children[1].classList.add('activeMaterial')
    document.querySelector('#mexico').addEventListener('click', mexico)
    document.querySelector('#artGuiaVisual').addEventListener('click', artGuiaVisual)
    setInterval(animationsTabs, 100);
}


document.querySelector('#mexico').addEventListener('click', mexico)
document.querySelector('#artGuiaVisual').addEventListener('click', artGuiaVisual)





