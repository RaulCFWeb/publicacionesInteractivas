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
/* QUITA LA CLASE activeMaterial DE TODOS LOS TABS Y LA AGREGA
AL QUE ESTA ACTIVO */
const setActiveTabs = () => {
    for (tab of setCourse()[6].children){
        tab.classList.remove('activeMaterial')
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
}
setInterval(animationsSimples, 100);
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

    const tabs = document.querySelector('#tabs')
    if(tabs.getBoundingClientRect().top < showElement){
        tabs.style.left = '0'
        tabs.style.transition = 'all 1s ease-in-out'
    }
    
    const content = document.querySelector('.content')
    if(content.getBoundingClientRect().top < showElement){
        content.style.right = '0'
        content.style.transition = 'all 1s ease-in-out'
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
GENERA EL CONTENIDO DEL MATERIAL COMPUTACION
*/
const computacion = () => {
    const setSection = document.querySelector('#setSection')
    setSection.innerHTML = `
    <div class="containerSimple">
        <div class="menuContainerSimple">
            <a id="computacion">Computacion</a>
            <a id="matematicas">Matematicas</a>
            <a id="colectionEst">Coleccion estudiantil</a>
            <a id="colectionInf">Coleccion infantil</a>
        </div>
        <div id="courseSimple" class="courseSimple">
            <img id="imgCourseSimple1" src="img/courses/multimedia/computer.png" alt="">
        </div>
        <div class="presentationSimple">
            <p class="description">P??ngase al tanto de todos los temas relacionados con la inform??tica, como son: correos electr??nicos, internet, c??mo proteger su computadora, editor de textos, m??sica, llevar cuentas con excel y m??s.</p>
        </div>
    </div>
    <span class="menuContainer"></span>
    <span class="course"></span>
    <span id="tabs"></span>
    <span class="content"></span>
    <span id="uls"></span>
    `
    /*SE AGREGARON SPANS VACIOS EN EL HTML CON CLASES E IDS PARA
    EVITARLOS MENSAJES DE ERROR EN LA CONSOLA*/
    setActiveCourseSimple()
    setCourseSimple()[3].children[0].classList.add('activeMaterial')
    document.querySelector('#computacion').addEventListener('click', computacion)
    document.querySelector('#matematicas').addEventListener('click', matematicas)
    document.querySelector('#colectionEst').addEventListener('click', colectionEst)
    document.querySelector('#colectionInf').addEventListener('click', colectionInf)
    
    setInterval(animationsSimples, 100);
}


/*
GENERA EL CONTENIDO DEL MATERIAL MATEMATICAS
*/
const matematicas = () => {
    const setSection = document.querySelector('#setSection')
    setSection.innerHTML = `
    <div class="containerSimple">
        <div class="menuContainerSimple">
            <a id="computacion">Computacion</a>
            <a id="matematicas">Matematicas</a>
            <a id="colectionEst">Coleccion estudiantil</a>
            <a id="colectionInf">Coleccion infantil</a>
        </div>
        <div id="courseSimple" class="courseSimple">
            <img id="imgCourseSimple1" src="img/courses/multimedia/matematicas.png" alt="">
        </div>
        <div class="presentationSimple">
            <p class="description">??Emprende un viaje de conocimiento a trav??s de las matem??ticas! Divi??rtete y aprende matem??ticas por medio de explicaciones, ejemplos y tablas. Dise??ado para que los estudiantes aprendan con facilidad y pongan a prueba sus conocimientos a trav??s de ejercicios. </p>
        </div>
    </div>
    <span class="menuContainer"></span>
    <span class="course"></span>
    <span id="tabs"></span>
    <span class="content"></span>
    <span id="uls"></span>
    `
    /*SE AGREGARON SPANS VACIOS EN EL HTML CON CLASES E IDS PARA
    EVITARLOS MENSAJES DE ERROR EN LA CONSOLA*/
    setActiveCourseSimple()
    setCourseSimple()[3].children[1].classList.add('activeMaterial')
    document.querySelector('#computacion').addEventListener('click', computacion)
    document.querySelector('#matematicas').addEventListener('click', matematicas)
    document.querySelector('#colectionEst').addEventListener('click', colectionEst)
    document.querySelector('#colectionInf').addEventListener('click', colectionInf)
    setInterval(animationsSimples, 100);
}



/*
GENERA EL CONTENIDO DEL MATERIAL COLECCION ESTUDIANTIL
*/
const colectionEst = () => {
    const setSection = document.querySelector('#setSection')
    setSection.innerHTML = `
    <div class="container">
        <div class="menuContainer">
        <a id="computacion">Computacion</a>
        <a id="matematicas">Matematicas</a>
        <a id="colectionEst">Coleccion estudiantil</a>
        <a id="colectionInf">Coleccion infantil</a>
        </div>
        <article class="course">
            <img id="imgCourse" src="img/courses/multimedia/coleccionEstudiantil/coleccion.png" alt="">
            <div>
                <div class="resume">
                    <p class="titleResume">Contenido:</p>
                    <ul>
                        <li>CD ROM Multimedia</li>
                        <li>10 CD ROM</li>
                        <li>6,000 Noticias</li>
                        <li>M??s de 1,200 biograf??as</li>
                        <li>1,350 fotograf??as</li>
                        <li>Entornos en 3D</li>
                        <li>Requerimientos del sistema:</li>
                        <ul>
                            <li>Unidad de CD-ROM</li>
                            <li>Microsoft Windows?? 8, 8.1 y 10</li>
                            <li>Procesador de doble n??cleo 1 GHz</li>
                            <li>Memoria RAM 1 GB</li>
                            <li>Resoluci??n de pantalla 800 x 600 pixeles.</li>
                            <li>Espacio libre en disco duro de 800 MB</li>
                            <li>Tarjeta de sonido.</li>
                            <li>Bocinas</li>
                            <li>Este producto no funcionar?? sin una tarjeta de sonido.</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </article>
        <article class="presentation">
            <p class="titleParrafo">Colecci??n Estudiantil<br>
            ??Entre m??s exploran, m??s aprenden!
            </p>
            <p class="description">El mejor complemento de los programas educativos con el soporte que brinda la Multimedia.<br>
            10 enciclopedias en CD-ROM con un formato de navegaci??n f??cil de usar, informaci??n clara que se despliega en atractivas pantallas sencillas de manejar y permiten obtener datos y detalles de los temas que integran cada volumen.<br>
            La excelente combinaci??n de textos, ilustraciones, animaciones, videos, pel??culas y sonido ofrecen una forma de aprendizaje ??gil y amena.<br>
            Contiene
            </p>
            <ul id="uls">
                <li>Divertidas animaciones que captan el inter??s de los chicos y estimula el deseo de saber m??s sobre cada tema.</li>
                <li>Din??micos personajes que gu??an la traves??a por el conocimiento.</li>
                <li>Iconos que, con un s??lo un clic, despliegan informaci??n detallada, atractivas im??genes y sorprendentes sonidos que dan vida a los objetos de estudio.</li>
                <li>Herramienta de movilidad que permite manipular el objeto para observarlo desde diferentes ??ngulos.</li>
                <li>Actividades que se adaptan al ritmo de aprendizaje de los estudiantes, que paulatinamente incrementan el grado de dificultad conforme se avanza, tambi??n aporta ejemplos para reafirmar el tema, seg??n se requiera.</li>
                <li>Peque??as secciones que ofrecen consejos a los padres para sacar el m??ximo provecho de la informaci??n.</li>
            </ul>
        </article>
        <article class="material">
                <ol id="tabs">
                    <li id="tab1">enciclopedia de la naturaleza 3.0</li>
                    <li id="tab2">cr??nica del siglo xx</li>
                    <li id="tab3">historia del mundo 2.0</li>
                    <li id="tab4">enciclopedia de la ciencia 3.0</li>
                    <li id="tab5">la tierra</li>
                    <li id="tab6">dinosaurios</li>
                    <li id="tab7">atlas del mundo</li>
                    <li id="tab8">felinos</li>
                    <li id="tab9">el cuerpo humano 3.0</li>
                    <li id="tab10">enciclopedia del espacio y el universo</li>
                </ol>
                <div class="content">
                    <img src="img/courses/multimedia/coleccionEstudiantil/1.png" alt="" id="imgContent">
                    <div id="desContent">
                        <p>Gu??a imprescindible para conocer el mundo natural. Podr?? observar el comportamiento de los animales en su h??bitat natural y conocer el universo de la vida microsc??pica. Incluye un m??dulo de rocas y minerales con m??s de 300 nuevas im??genes. Todo este universo de conocimientos, se ofrecen con facilidad mediante su Consola interactiva, dise??ada para una navegaci??n sencilla. Cuanta con apoyos sensoriales como:</p>
                        <ul>
                            <li>Sonidos. Explora el fascinante mundo de la comunicaci??n entre las aves mediante la identificaci??n de sus diferentes llamados.</li>
                            <li>Visi??n animal. Mira el mundo a trav??s de los ojos de los animales. Relaciona animales y plantas con sus im??genes microsc??picas.</li>
                        </ul>
                    </div>
                </div>
        </article>
    </div>
    <span class="menuContainerSimple"></span>
    <span id="imgCourseSimple1"></span>
    `
    /*SE AGREGARON SPANS VACIOS EN EL HTML CON CLASES E IDS PARA
    EVITARLOS MENSAJES DE ERROR EN LA CONSOLA*/
    setActiveTabs();
    setCourse()[6].children[0].classList.add('activeMaterial')

    document.querySelector('#tab1').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[0].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionEstudiantil/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Gu??a imprescindible para conocer el mundo natural. Podr?? observar el comportamiento de los animales en su h??bitat natural y conocer el universo de la vida microsc??pica. Incluye un m??dulo de rocas y minerales con m??s de 300 nuevas im??genes. Todo este universo de conocimientos, se ofrecen con facilidad mediante su Consola interactiva, dise??ada para una navegaci??n sencilla. Cuanta con apoyos sensoriales como:</p>
            <ul>
                <li>Sonidos. Explora el fascinante mundo de la comunicaci??n entre las aves mediante la identificaci??n de sus diferentes llamados.</li>
                <li>Visi??n animal. Mira el mundo a trav??s de los ojos de los animales. Relaciona animales y plantas con sus im??genes microsc??picas.</li>
            </ul>
        </div>
        `
    })
    document.querySelector('#tab2').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[1].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionEstudiantil/2.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Engloba los hechos m??s importantes ocurridos en el siglo XX. Compendio de los acontecimientos que describe los componentes que movilizan a las sociedades modernas: modas, man??as, pol??tica, personalidades, guerras, deportes, ciencia y arte. Es una obra de referencia muy entretenida, completa y ??til sobre la fascinante historia de la humanidad contempor??nea<br>
            Su interface de usuarios tiene un potente sistema de b??squeda y una impresionante interconexi??n a una redacci??n de noticias que ubican perfectamente el esp??ritu de este gran siglo. Contiene m??s de 70 videoclips, 90 archivos sonoros, mapas animados, fotograf??as y biograf??as.
            </p>
        </div>
        `
    })
    document.querySelector('#tab3').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[2].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionEstudiantil/3.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Viaje por los diferentes periodos hist??ricos. Averig??e qu?? pasaba en las diferentes partes del mundo en distintas ??pocas a trav??s de dos caracter??sticas did??cticas principales:</p>
            <ul>
                <li>La secci??n, Qui??n es qui??n y los libros tem??ticos. Al pasar las p??ginas de los libros interactivos se conocer?? a las personalidades que han intervenido en la Historia y algunas de las innovaciones que hicieron.</li>
                <li>Una red de conceptos. Con un clic del rat??n se tendr?? acceso a toda la informaci??n sobre los hechos hist??ricos, las fechas en que ocurrieron y de quienes participaron en ellos.</li>
            </ul>
        </div>
        `
    })
    document.querySelector('#tab4').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[3].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionEstudiantil/4.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Amplio panorama del mundo cient??fico. Desde la Astronom??a hasta la F??sica, a trav??s de informaci??n actualizada que se ir?? descubriendo mediante un escenario interactivo de f??cil manejo, que permite navegar por sus diferentes secciones tem??ticas, conectadas entre s??, para ampliar los conocimientos de cada tema.<br>
            La enciclopedia contiene 4 secciones:
            </p>
            <ul>
                <li>El espacio. Podr??s conocer datos interesantes acerca del sistema solar, las estrellas o saber m??s del Big Bang, la teor??a que intenta explicar el origen del Universo.</li>
                <li>Diccionario de la ciencia. Con un s??lo clic del rat??n se tiene acceso a la definici??n y pronunciaci??n de los t??rminos cient??ficos y t??cnicos m??s importantes.</li>
                <li>Animaciones y videos. M??s de 80 animaciones y secuencias de video con narraciones amenas que explican e ilustran el c??mo, en d??nde y el porqu?? de los fen??menos naturales y algunos experimentos cient??ficos.</li>
                <li>Qui??n es qui??n en la ciencia. Un compendio para conocer a los grandes cient??ficos que dedicaron su vida a la ciencia e hicieron los descubrimientos m??s sorprendentes</li>
            </ul>
        </div>
        `
    })
    document.querySelector('#tab5').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[4].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionEstudiantil/5.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Toda una aventura interactiva en forma de recorrido educativo por el centro de nuestro planeta que permite explorar la fuerza y el misterio de la actividad interna.<br>
            Es una enciclopedia din??mica y espectacular mediante la que el usuario se convierte en testigo de los procesos geol??gicos, que en tiempo vida real, se desarrollaron en millones de a??os. Visite tambi??n una galer??a de piedras preciosas donde conocer?? las principales rocas y minerales que constituyen la corteza terrestre.
            </p>
        </div>
        `
    })
    document.querySelector('#tab6').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[5].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionEstudiantil/6.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Un interesante viaje para conocer todo acerca de los animales m??s maravillosos y atractivos que han habitado la Tierra: los dinosaurios.<br>
            Este material ofrece informaci??n de cerca de 50 especies de estos animales, mientras viaja acompa??ando, por todo el mundo, a los paleont??logos m??s famosos en busca de f??siles.<br>
            Visite el Museo Virtual, donde descubrir?? el mundo subterr??neo, podr?? hacer excavaciones y reconstruir sus propios dinosaurios animados. Adem??s cuenta con una galer??a de infinidad de modelos en 3D, exposiciones interactivas, animaciones y videos e incluso simulaciones de los sonidos de los dinosaurios<br>
            Cuenta con dos secciones interactivas fabulosas:
            </p>
            <ul>
                <li>T??neles del tiempo. Un recorrido por los distintos periodos donde se podr??n ver videos y animaciones o manipular modelos en 3D.</li>
                <li>Zona de excavaci??n. Un sitio donde se encontrar??n f??siles para poder reconstruir modelos animados y aprender a distinguir las diferentes caracter??sticas que hicieron ??nicos a estos animales.</li>
            </ul>
        </div>
        `
    })
    document.querySelector('#tab7').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[6].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionEstudiantil/7.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Esta obra combina las cualidades cartogr??ficas de un atlas convencional con la informaci??n detallada de una enciclopedia, es una fuente de referencia para consultar en casa, la escuela o el trabajo.<br>
            Sienta las bases para los atlas interactivos debido a su fabuloso grupo de mapas dise??ados por computadora y pensados especialmente para verlos en pantalla, en los que muestran el mundo con una claridad y minuciosidad imposible de alcanzar alg??n atlas impreso.<br>
            Esto se logra mediante sus dos grandes secciones interactivas:
            </p>
            <ul>
                <li>Mapas detallados. A partir de vistas generales del mundo o de los continentes, los usuarios pueden acercarse cuanto quieran hasta obtener primeros planos de pa??ses o regiones concretas.</li>    
                <li>Obra de consulta. Galer??a de fotograf??as y videos que descubren aspectos de la geograf??a, cultura y costumbres de cada pa??s, apoyados en gr??ficos y diagramas que permiten establecer de forma inmediata comparaciones entre los diferentes pa??ses del mundo.</li>    
            </ul>
        </div>
        `
    })
    document.querySelector('#tab8').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[7].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionEstudiantil/8.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Explore el complejo mundo de los felinos salvajes y con??zcalos a fondo, desde sus h??bitats, su dieta, sus conductas y cu??les son las especies en peligro de extinci??n.<br>
            Realice un recorrido por diversas culturas y contemple obras de arte de civilizaciones antiguas, inspiradas en los felinos, donde podr?? comprobar la importancia que han tenido a trav??s del tiempo.<br>
            Accese a una sala de anatom??a donde es posible quitar las diferentes capas del cuerpo de un gato dom??stico para ver y descubrir c??mo funciona cada uno de los sistemas de su cuerpo: los m??sculos, los ??rganos, hasta llegar al ??ltimo plano, el del esqueleto. ??Experimente la manera c??mo ven en la oscuridad!
            </p>
        </div>
        `
    })
    document.querySelector('#tab9').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[8].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionEstudiantil/9.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Emocionante aventura por la anatom??a humana. Excelente combinaci??n de textos, ilustraciones, animaciones, art??culos y narraciones con una novedosa y muy avanzada interface que ofrece un alto nivel de interactividad.<br>
            La complejidad de los t??rminos m??dicos no son obst??culos para su comprensi??n, ya que cuenta con la definici??n de todas las palabras t??cnicas, adem??s de que tiene un apoyo auditivo en el que se aprende c??mo pronunciarlas.<br>
            Dos de sus caracter??sticas de recursos did??cticos m??s importantes son:
            </p>
            <ul>
                <li>Su Consola. Desde la que se tiene f??cil acceso a toda la informaci??n que contiene este t??tulo.</li>
                <li>Modelos 3D. Observa los distintos ??rganos desde cualquier ??ngulo mediante la aplicaci??n de rotaciones del aparato circulatorio y las distintas partes del esqueleto, con giros hasta de 360??.</li>
            </ul>
        </div>
        `
    })
    document.querySelector('#tab10').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[9].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionEstudiantil/10.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Lo mejor de la informaci??n sobre los planetas, las galaxias, las estrellas, y las diferentes teor??as acerca del Universo<br>
            Gran variedad de recursos did??cticos maravillosos como: viajar a bordo del Skylab, explorar el modelo tridimensional de la Mir, y viajar a la cara oculta de la Luna. Todo esto con exclusivas im??genes de la NASA.<br>
            Dentro de este CD encontrar?? tambi??n:
            </p>
            <ul>
                <li>El planetario. Una representaci??n de la esfera celeste que puede ser observada desde cualquier punto de la Tierra.</li>
                <li>Actividades. Una galer??a de emocionantes actividades como la construcci??n de tres tipos de naves virtuales que deben despegar.</li>
            </ul>
        </div>
        `
    })
    setActiveCourse();
    setCourse()[5].children[2].classList.add('activeMaterial')
    document.querySelector('#computacion').addEventListener('click', computacion)
    document.querySelector('#matematicas').addEventListener('click', matematicas)
    document.querySelector('#colectionEst').addEventListener('click', colectionEst)
    document.querySelector('#colectionInf').addEventListener('click', colectionInf)
    setInterval(animationsTabs, 100);
}



/*
GENERA EL CONTENIDO DEL MATERIAL COLECCION INFANTIL
*/
const colectionInf = () => {
    document.querySelector('#setSection')
    setSection.innerHTML = `
    <div class="container">
        <div class="menuContainer">
        <a id="computacion">Computacion</a>
        <a id="matematicas">Matematicas</a>
        <a id="colectionEst">Coleccion estudiantil</a>
        <a id="colectionInf">Coleccion infantil</a>
        </div>
        <article class="course">
            <img id="imgCourse" src="img/courses/multimedia/coleccionInfantil/coleccion.png" alt="">
            <div>
                <div class="resume">
                    <p class="titleResume">Contenido:</p>
                    <ul>
                        <li>CD ROM Multimedia.</li>
                        <li>Requerimientos del sistema:</li>
                        <ul>
                            <li>Unidad de CD-ROM</li>
                            <li>Microsoft Windows?? 8, 8.1 y 10</li>
                            <li>Procesador de doble n??cleo 1 GHz</li>
                            <li>Memoria RAM 1 GB</li>
                            <li>Resoluci??n de pantalla 800 x 600 pixeles.</li>
                            <li>Espacio libre en disco duro de 800 MB</li>
                            <li>Tarjeta de sonido.</li>
                            <li>Bocinas</li>
                            <li>Este producto no funcionar?? sin una tarjeta de sonido.</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </article>
        <article class="presentation">
            <p class="titleParrafo">Colecci??n Infantil<br>
            ??Aprender y poner a prueba los conocimientos adquiridos nunca fue tan divertido!
            </p>
            <p class="description">Din??micos y l??dicos personajes guiar??n a los peque??ines a trav??s del conocimiento, con el apoyo de incre??bles pel??culas, sonidos y exposiciones interactivas. Es una herramienta f??cil de usar que se compone de pantallas que con un simple clic, sobre el objeto que llame la atenci??n, despliega informaci??n detallada, im??genes y sonidos sorprendentes que dan vida a los objetos de estudio, que aparecen en modelos 3D, lo que permite moverlos para observarlos desde diferentes ??ngulos.<br>
            Contiene una galer??a de juegos y actividades dirigidos a desarrollar las habilidades del ni??o conforme a su ritmo de aprendizaje, ya que se adaptan a sus respuestas y paulatinamente incrementan el grado de dificultad.<br>
            Las divertidas animaciones cautivan el inter??s de los ni??os, y estimulan su deseo de saber m??s acerca de los temas mientras van acompa??ados de los din??micos personajes.<br>
            Cuenta con un diccionario biling??e que le ofrece la posibilidad de cambiar el idioma (ingl??s o espa??ol) cuando lo desee as?? como peque??as secciones donde se ofrecen consejos a los padres para sacar el m??ximo provecho de la informaci??n.
            </p>
        </article>
        <article class="material">
                <ol id="tabs">
                    <li id="tab1">c??mo funcionan las cosas 3.0</li>
                    <li id="tab2">mi incre??ble cuerpo humano</li>
                    <li id="tab3">animales incre??bles</li>
                    <li id="tab4">mi primer diccionario interactivo, genial y alucinante 2.1</li>
                    <li id="tab5">el atlas del peque??o aventurero</li>
                    <li id="tab6">contar y agrupar</li>
                    <li id="tab7">sumar y restar</li>
                    <li id="tab8">juega con las matem??ticas</li>
                    <li id="tab9">juega con las palabras</li>
                    <li id="tab10">juega con las ciencias</li>
                </ol>
                <div class="content">
                    <img src="img/courses/multimedia/coleccionInfantil/1.png" alt="" id="imgContent">
                    <div id="desContent">
                        <p>El contenido de este CD permite descubrir el funcionamiento de m??s de 150 m??quinas, para aprender sobre los principios de la ciencia en que se basan esos artefactos as?? como conocer a los inventores que los hicieron posibles desde el a??o 7000 a.C. hasta nuestros d??as<br>
                        David Macaulay y su mascota el Gran Mamut Peludo ser??n ser??n sus gu??as en la tecnolog??a con el apoyo de 1, 000 ilustraciones, 300 animaciones, 27 videos, 22 pel??culas, 70 000 palabras y 1 500 pantallas.
                        </p>
                    </div>
                </div>
        </article>
    </div>
    <span id="uls"> </span>
    <span class="menuContainerSimple"></span>
    <span id="imgCourseSimple1"></span>
    `
    /*SE AGREGARON SPANS VACIOS EN EL HTML CON CLASES E IDS PARA
    EVITARLOS MENSAJES DE ERROR EN LA CONSOLA*/

    setActiveTabs();
    setCourse()[6].children[0].classList.add('activeMaterial')
    
    document.querySelector('#tab1').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[0].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionInfantil/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>El contenido de este CD permite descubrir el funcionamiento de m??s de 150 m??quinas, para aprender sobre los principios de la ciencia en que se basan esos artefactos as?? como conocer a los inventores que los hicieron posibles desde el a??o 7000 a.C. hasta nuestros d??as<br>
            David Macaulay y su mascota el Gran Mamut Peludo ser??n ser??n sus gu??as en la tecnolog??a con el apoyo de 1, 000 ilustraciones, 300 animaciones, 27 videos, 22 pel??culas, 70 000 palabras y 1 500 pantallas.
            </p>
        </div>
        `
    })
    document.querySelector('#tab2').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[1].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionInfantil/2.png" alt="" id="imgContent">
        <div id="desContent">
            <p>La mejor introducci??n al cuerpo humano y su funcionamiento.<br>
            M??s de 25 ??rganos y partes del cuerpo en 3D, 4 juegos interactivos, 35 000 palabras, 2 horas de audio, juegos y experimentos.<br>
            Los ni??os observan cortes transversales de cada ??rgano con amplias descripciones y datos fascinantes. Acompa??ar??n a Skelly, un esqueleto en 3D, en su jornada diaria y aprender??n c??mo funciona su cuerpo ante m??ltiples circunstancias, como el cansancio y el hambre, entre otras.
            </p>
        </div>
        `
    })
    document.querySelector('#tab3').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[2].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionInfantil/3.png" alt="" id="imgContent">
        <div id="desContent">
            <p>A trav??s de su contenido y de la mano del lagarto Hugo descubrir??n criaturas ex??ticas y sorprendentes de todo el mundo y conocer??n sus caracter??sticas m??s singulares.<br>
            El contenido multimedia incluye espectaculares videos, juegos, actividades dirigidas y rompecabezas, entre otros.
            </p>
        </div>
        `
    })
    document.querySelector('#tab4').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[3].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionInfantil/4.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Herramienta de consulta de inapreciable valor, inclusive para los ni??os que a??n no saben leer, a trav??s del cual se pude explorar el lenguaje y comprender el funcionamiento de la lengua.<br>
            Cada palabra clave tiene su propia pantalla con su definici??n y con una aplicaci??n auditiva en que se puede o??r c??mo se pronuncia, as?? como ilustraciones sobre su significado.<br>
            Todo esto de una manera f??cil, accesible y sumamente did??ctica mediante m??s de 1, 250 pantallas, 1, 100 ilustraciones, 850 animaciones, 2, 500 pronunciaciones y m??s de 3, 000 efectos de sonido.
            </p>
        </div>
        `
    })
    document.querySelector('#tab5').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[4].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionInfantil/5.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Los ni??os descifrar??n los misterios de la Geograf??a, cartograf??a y los viajes. Visitar??n ciudades importantes y conocer??n su historia; subir??n a las monta??as, aprender??n la flora y fauna de junglas y selvas, disfrutar??n de un tour en avi??n o barco y realizar??n emocionantes e ingeniosas actividades.<br>
            El material se compone de m??s de 44 mapas animados, 200 animaciones, 400 ventanas desplegables y 1 hora de audio.
            </p>
        </div>
        `
    })
    document.querySelector('#tab6').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[5].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionInfantil/6.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Ping??i, el ping??ino ser?? el gu??a que llevar?? a los ni??os a conocer los conceptos matem??ticos m??s esenciales como los n??meros y las figuras geom??tricas.<br>
            Los peque??os aprender??n los conceptos fundamentales de contar y agrupar a trav??s de una selecci??n de juegos y actividades de f??cil ejecuci??n.
            </p>
        </div>
        `
    })
    document.querySelector('#tab7').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[6].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionInfantil/7.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Como un complemento del CD 7, surge este material en el que Polo, el oso, y Ping??i se encargar??n de llevar a los ni??os a recorrer el mundo de los n??meros y s??mbolos matem??ticos de un modo divertido.<br>
            La dificultad de los juegos se adapta a sus respuestas, permitiendo que progresen a su propio ritmo de aprendizaje.
            </p>
        </div>
        `
    })
    document.querySelector('#tab8').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[7].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionInfantil/8.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Este CD est?? dise??ado para ni??os que ya saben sumar y restar, mediante el cual reforzar??n su capacidad de c??lculo, entender??n conceptos matem??ticos un poco m??s abstractos y aplicar??n sus conocimientos a la vida cotidiana.<br>
            Est?? estructurado como un viaje a las antiguas civilizaciones para que el aprendizaje de los primeros conceptos matem??ticos sea m??s r??pido.<br>
            Programa integrado por 250 temas b??sicos matem??ticos elaborados por maestros y pedagogos, con 3, 000 problemas y 2 millones de cuestiones aritm??ticas de c??lculo mental como material did??ctico.
            </p>
        </div>
        `
    })
    document.querySelector('#tab9').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[8].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionInfantil/9.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Un programa imprescindible para que los ni??os desarrollen su habilidad para deletrear palabras. Su formato es el de un concurso de televisi??n en que los ni??os podr??n viajar a cuatro planetas, cada uno con una forma distinta de deletrear.<br>
            Se integra de 4, 200 t??rminos b??sicos divididos en tres grados de dificultad, 50 grupos de palabras para practicar las ??reas problem??ticas de la lexicolog??a y 100 divertidos grupos de palabras que gustan a los ni??os.
            </p>
        </div>
        `
    })
    document.querySelector('#tab10').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[9].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/multimedia/coleccionInfantil/10.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Es un juego interactivo destinado a peque??os de seis a diez a??os, para aprender sobre el mundo de las ciencias, a trav??s de explicaciones, ejercicios y experimentos.<br>
            El programa presenta tres ambientes principales, en los que se tratan temas generales sobre la materia, la energ??a, las fuerzas y los seres vivos en un despliegue de material multimedia.<br>
            En cada uno de ellos se desarrollan 32 temas diferentes, mediante actividades y cuestionarios interactivos.
            </p>
        </div>
        `
    })
    setActiveCourse();
    setCourse()[5].children[3].classList.add('activeMaterial')
    document.querySelector('#computacion').addEventListener('click', computacion)
    document.querySelector('#matematicas').addEventListener('click', matematicas)
    document.querySelector('#colectionEst').addEventListener('click', colectionEst)
    document.querySelector('#colectionInf').addEventListener('click', colectionInf)
    setInterval(animationsTabs, 100);
}

document.querySelector('#computacion').addEventListener('click', computacion)
document.querySelector('#matematicas').addEventListener('click', matematicas)
document.querySelector('#colectionEst').addEventListener('click', colectionEst)
document.querySelector('#colectionInf').addEventListener('click', colectionInf)



