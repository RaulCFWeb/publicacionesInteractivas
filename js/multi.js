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
const animationsSimples= () => {
    window.addEventListener('scroll', () => {

        const menuContainerSimple = document.querySelector('.menuContainerSimple')
        menuContainerSimple.getBoundingClientRect().top < 550 ? menuContainerSimple.style.animation = 'hiddenFromRight ease-in-out 1s' : menuContainerSimple.style.animation = ''

        const imgCourseSimple1 = document.querySelector('#imgCourseSimple1')
        imgCourseSimple1.getBoundingClientRect().top < 550 ? imgCourseSimple1.style.animation = 'hiddenFromLeft ease-in-out 1s' : imgCourseSimple1.style.animation = ''

        const description = document.querySelectorAll('.presentationSimple .description')
        for (let i = 0; i < description.length; i++){
            description[i].getBoundingClientRect().top < 550 ? description[i].style.animation = 'hiddenFromRight ease-in-out 1s' : description[i].style.animation = ''
        }
    })
}
/*
FUNCION PARA DETECTAR EL SCROL Y AGREGA ANIMACIONES A LOS MATERIALES
 CON TABS
*/
const animationsTabs = () => {
    window.addEventListener('scroll', () => {

        const menuContainer = document.querySelector('.menuContainer')
        menuContainer.getBoundingClientRect().top < 550 ? menuContainer.style.animation = 'hiddenFromRight ease-in-out 1s' : menuContainer.style.animation = ''

        const course = document.querySelector('.course')
        course.getBoundingClientRect().top < 550 ? course.style.animation = 'hiddenFromLeft ease-in-out 1s' : course.style.animation = ''

        const titleParrafo = document.querySelectorAll('.presentation .titleParrafo')   
        for (let i = 0; i < titleParrafo.length; i++){
            titleParrafo[i].getBoundingClientRect().top < 550 ? titleParrafo[i].style.animation = 'hiddenFromLeft ease-in-out 1s' : titleParrafo[i].style.animation = ''
        }
        const description = document.querySelectorAll('.presentation .description')
        for (let i = 0; i < description.length; i++){
            description[i].getBoundingClientRect().top < 550 ? description[i].style.animation = 'hiddenFromRight ease-in-out 1s' : description[i].style.animation = ''
        }
        const tabs = document.querySelector('#tabs')
        tabs.getBoundingClientRect().top < 550 ? tabs.style.animation = 'hiddenFromLeft ease-in-out 1s' : tabs.style.animation = ''
        const content = document.querySelector('.content')
        content.getBoundingClientRect().top < 550 ? content.style.animation = 'hiddenFromRight ease-in-out 1s' : content.style.animation = ''

        const uls = document.querySelector('#uls')
        uls.getBoundingClientRect().top < 550 ? uls.style.animation = 'hiddenFromLeft ease-in-out 1s' : uls.style.animation =''

    })
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
            <p class="description">Póngase al tanto de todos los temas relacionados con la informática, como son: correos electrónicos, internet, cómo proteger su computadora, editor de textos, música, llevar cuentas con excel y más.</p>
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
    
    animationsSimples();
}

animationsSimples();

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
            <p class="description">¡Emprende un viaje de conocimiento a través de las matemáticas! Diviértete y aprende matemáticas por medio de explicaciones, ejemplos y tablas. Diseñado para que los estudiantes aprendan con facilidad y pongan a prueba sus conocimientos a través de ejercicios. </p>
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
    animationsSimples();
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
                        <li>Más de 1,200 biografías</li>
                        <li>1,350 fotografías</li>
                        <li>Entornos en 3D</li>
                        <li>Requerimientos del sistema:</li>
                        <ul>
                            <li>Unidad de CD-ROM</li>
                            <li>Microsoft Windows® 8, 8.1 y 10</li>
                            <li>Procesador de doble núcleo 1 GHz</li>
                            <li>Memoria RAM 1 GB</li>
                            <li>Resolución de pantalla 800 x 600 pixeles.</li>
                            <li>Espacio libre en disco duro de 800 MB</li>
                            <li>Tarjeta de sonido.</li>
                            <li>Bocinas</li>
                            <li>Este producto no funcionará sin una tarjeta de sonido.</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </article>
        <article class="presentation">
            <p class="titleParrafo">Colección Estudiantil<br>
            ¡Entre más exploran, más aprenden!
            </p>
            <p class="description">El mejor complemento de los programas educativos con el soporte que brinda la Multimedia.<br>
            10 enciclopedias en CD-ROM con un formato de navegación fácil de usar, información clara que se despliega en atractivas pantallas sencillas de manejar y permiten obtener datos y detalles de los temas que integran cada volumen.<br>
            La excelente combinación de textos, ilustraciones, animaciones, videos, películas y sonido ofrecen una forma de aprendizaje ágil y amena.<br>
            Contiene
            </p>
            <ul id="uls">
                <li>Divertidas animaciones que captan el interés de los chicos y estimula el deseo de saber más sobre cada tema.</li>
                <li>Dinámicos personajes que guían la travesía por el conocimiento.</li>
                <li>Iconos que, con un sólo un clic, despliegan información detallada, atractivas imágenes y sorprendentes sonidos que dan vida a los objetos de estudio.</li>
                <li>Herramienta de movilidad que permite manipular el objeto para observarlo desde diferentes ángulos.</li>
                <li>Actividades que se adaptan al ritmo de aprendizaje de los estudiantes, que paulatinamente incrementan el grado de dificultad conforme se avanza, también aporta ejemplos para reafirmar el tema, según se requiera.</li>
                <li>Pequeñas secciones que ofrecen consejos a los padres para sacar el máximo provecho de la información.</li>
            </ul>
        </article>
        <article class="material">
                <ol id="tabs">
                    <li id="tab1">enciclopedia de la naturaleza 3.0</li>
                    <li id="tab2">crónica del siglo xx</li>
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
                        <p>Guía imprescindible para conocer el mundo natural. Podrá observar el comportamiento de los animales en su hábitat natural y conocer el universo de la vida microscópica. Incluye un módulo de rocas y minerales con más de 300 nuevas imágenes. Todo este universo de conocimientos, se ofrecen con facilidad mediante su Consola interactiva, diseñada para una navegación sencilla. Cuanta con apoyos sensoriales como:</p>
                        <ul>
                            <li>Sonidos. Explora el fascinante mundo de la comunicación entre las aves mediante la identificación de sus diferentes llamados.</li>
                            <li>Visión animal. Mira el mundo a través de los ojos de los animales. Relaciona animales y plantas con sus imágenes microscópicas.</li>
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
            <p>Guía imprescindible para conocer el mundo natural. Podrá observar el comportamiento de los animales en su hábitat natural y conocer el universo de la vida microscópica. Incluye un módulo de rocas y minerales con más de 300 nuevas imágenes. Todo este universo de conocimientos, se ofrecen con facilidad mediante su Consola interactiva, diseñada para una navegación sencilla. Cuanta con apoyos sensoriales como:</p>
            <ul>
                <li>Sonidos. Explora el fascinante mundo de la comunicación entre las aves mediante la identificación de sus diferentes llamados.</li>
                <li>Visión animal. Mira el mundo a través de los ojos de los animales. Relaciona animales y plantas con sus imágenes microscópicas.</li>
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
            <p>Engloba los hechos más importantes ocurridos en el siglo XX. Compendio de los acontecimientos que describe los componentes que movilizan a las sociedades modernas: modas, manías, política, personalidades, guerras, deportes, ciencia y arte. Es una obra de referencia muy entretenida, completa y útil sobre la fascinante historia de la humanidad contemporánea<br>
            Su interface de usuarios tiene un potente sistema de búsqueda y una impresionante interconexión a una redacción de noticias que ubican perfectamente el espíritu de este gran siglo. Contiene más de 70 videoclips, 90 archivos sonoros, mapas animados, fotografías y biografías.
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
            <p>Viaje por los diferentes periodos históricos. Averigüe qué pasaba en las diferentes partes del mundo en distintas épocas a través de dos características didácticas principales:</p>
            <ul>
                <li>La sección, Quién es quién y los libros temáticos. Al pasar las páginas de los libros interactivos se conocerá a las personalidades que han intervenido en la Historia y algunas de las innovaciones que hicieron.</li>
                <li>Una red de conceptos. Con un clic del ratón se tendrá acceso a toda la información sobre los hechos históricos, las fechas en que ocurrieron y de quienes participaron en ellos.</li>
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
            <p>Amplio panorama del mundo científico. Desde la Astronomía hasta la Física, a través de información actualizada que se irá descubriendo mediante un escenario interactivo de fácil manejo, que permite navegar por sus diferentes secciones temáticas, conectadas entre sí, para ampliar los conocimientos de cada tema.<br>
            La enciclopedia contiene 4 secciones:
            </p>
            <ul>
                <li>El espacio. Podrás conocer datos interesantes acerca del sistema solar, las estrellas o saber más del Big Bang, la teoría que intenta explicar el origen del Universo.</li>
                <li>Diccionario de la ciencia. Con un sólo clic del ratón se tiene acceso a la definición y pronunciación de los términos científicos y técnicos más importantes.</li>
                <li>Animaciones y videos. Más de 80 animaciones y secuencias de video con narraciones amenas que explican e ilustran el cómo, en dónde y el porqué de los fenómenos naturales y algunos experimentos científicos.</li>
                <li>Quién es quién en la ciencia. Un compendio para conocer a los grandes científicos que dedicaron su vida a la ciencia e hicieron los descubrimientos más sorprendentes</li>
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
            Es una enciclopedia dinámica y espectacular mediante la que el usuario se convierte en testigo de los procesos geológicos, que en tiempo vida real, se desarrollaron en millones de años. Visite también una galería de piedras preciosas donde conocerá las principales rocas y minerales que constituyen la corteza terrestre.
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
            <p>Un interesante viaje para conocer todo acerca de los animales más maravillosos y atractivos que han habitado la Tierra: los dinosaurios.<br>
            Este material ofrece información de cerca de 50 especies de estos animales, mientras viaja acompañando, por todo el mundo, a los paleontólogos más famosos en busca de fósiles.<br>
            Visite el Museo Virtual, donde descubrirá el mundo subterráneo, podrá hacer excavaciones y reconstruir sus propios dinosaurios animados. Además cuenta con una galería de infinidad de modelos en 3D, exposiciones interactivas, animaciones y videos e incluso simulaciones de los sonidos de los dinosaurios<br>
            Cuenta con dos secciones interactivas fabulosas:
            </p>
            <ul>
                <li>Túneles del tiempo. Un recorrido por los distintos periodos donde se podrán ver videos y animaciones o manipular modelos en 3D.</li>
                <li>Zona de excavación. Un sitio donde se encontrarán fósiles para poder reconstruir modelos animados y aprender a distinguir las diferentes características que hicieron únicos a estos animales.</li>
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
            <p>Esta obra combina las cualidades cartográficas de un atlas convencional con la información detallada de una enciclopedia, es una fuente de referencia para consultar en casa, la escuela o el trabajo.<br>
            Sienta las bases para los atlas interactivos debido a su fabuloso grupo de mapas diseñados por computadora y pensados especialmente para verlos en pantalla, en los que muestran el mundo con una claridad y minuciosidad imposible de alcanzar algún atlas impreso.<br>
            Esto se logra mediante sus dos grandes secciones interactivas:
            </p>
            <ul>
                <li>Mapas detallados. A partir de vistas generales del mundo o de los continentes, los usuarios pueden acercarse cuanto quieran hasta obtener primeros planos de países o regiones concretas.</li>    
                <li>Obra de consulta. Galería de fotografías y videos que descubren aspectos de la geografía, cultura y costumbres de cada país, apoyados en gráficos y diagramas que permiten establecer de forma inmediata comparaciones entre los diferentes países del mundo.</li>    
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
            <p>Explore el complejo mundo de los felinos salvajes y conózcalos a fondo, desde sus hábitats, su dieta, sus conductas y cuáles son las especies en peligro de extinción.<br>
            Realice un recorrido por diversas culturas y contemple obras de arte de civilizaciones antiguas, inspiradas en los felinos, donde podrá comprobar la importancia que han tenido a través del tiempo.<br>
            Accese a una sala de anatomía donde es posible quitar las diferentes capas del cuerpo de un gato doméstico para ver y descubrir cómo funciona cada uno de los sistemas de su cuerpo: los músculos, los órganos, hasta llegar al último plano, el del esqueleto. ¡Experimente la manera cómo ven en la oscuridad!
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
            <p>Emocionante aventura por la anatomía humana. Excelente combinación de textos, ilustraciones, animaciones, artículos y narraciones con una novedosa y muy avanzada interface que ofrece un alto nivel de interactividad.<br>
            La complejidad de los términos médicos no son obstáculos para su comprensión, ya que cuenta con la definición de todas las palabras técnicas, además de que tiene un apoyo auditivo en el que se aprende cómo pronunciarlas.<br>
            Dos de sus características de recursos didácticos más importantes son:
            </p>
            <ul>
                <li>Su Consola. Desde la que se tiene fácil acceso a toda la información que contiene este título.</li>
                <li>Modelos 3D. Observa los distintos órganos desde cualquier ángulo mediante la aplicación de rotaciones del aparato circulatorio y las distintas partes del esqueleto, con giros hasta de 360º.</li>
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
            <p>Lo mejor de la información sobre los planetas, las galaxias, las estrellas, y las diferentes teorías acerca del Universo<br>
            Gran variedad de recursos didácticos maravillosos como: viajar a bordo del Skylab, explorar el modelo tridimensional de la Mir, y viajar a la cara oculta de la Luna. Todo esto con exclusivas imágenes de la NASA.<br>
            Dentro de este CD encontrará también:
            </p>
            <ul>
                <li>El planetario. Una representación de la esfera celeste que puede ser observada desde cualquier punto de la Tierra.</li>
                <li>Actividades. Una galería de emocionantes actividades como la construcción de tres tipos de naves virtuales que deben despegar.</li>
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
    animationsTabs();
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
                            <li>Microsoft Windows® 8, 8.1 y 10</li>
                            <li>Procesador de doble núcleo 1 GHz</li>
                            <li>Memoria RAM 1 GB</li>
                            <li>Resolución de pantalla 800 x 600 pixeles.</li>
                            <li>Espacio libre en disco duro de 800 MB</li>
                            <li>Tarjeta de sonido.</li>
                            <li>Bocinas</li>
                            <li>Este producto no funcionará sin una tarjeta de sonido.</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </article>
        <article class="presentation">
            <p class="titleParrafo">Colección Infantil<br>
            ¡Aprender y poner a prueba los conocimientos adquiridos nunca fue tan divertido!
            </p>
            <p class="description">Dinámicos y lúdicos personajes guiarán a los pequeñines a través del conocimiento, con el apoyo de increíbles películas, sonidos y exposiciones interactivas. Es una herramienta fácil de usar que se compone de pantallas que con un simple clic, sobre el objeto que llame la atención, despliega información detallada, imágenes y sonidos sorprendentes que dan vida a los objetos de estudio, que aparecen en modelos 3D, lo que permite moverlos para observarlos desde diferentes ángulos.<br>
            Contiene una galería de juegos y actividades dirigidos a desarrollar las habilidades del niño conforme a su ritmo de aprendizaje, ya que se adaptan a sus respuestas y paulatinamente incrementan el grado de dificultad.<br>
            Las divertidas animaciones cautivan el interés de los niños, y estimulan su deseo de saber más acerca de los temas mientras van acompañados de los dinámicos personajes.<br>
            Cuenta con un diccionario bilingüe que le ofrece la posibilidad de cambiar el idioma (inglés o español) cuando lo desee así como pequeñas secciones donde se ofrecen consejos a los padres para sacar el máximo provecho de la información.
            </p>
        </article>
        <article class="material">
                <ol id="tabs">
                    <li id="tab1">cómo funcionan las cosas 3.0</li>
                    <li id="tab2">mi increíble cuerpo humano</li>
                    <li id="tab3">animales increíbles</li>
                    <li id="tab4">mi primer diccionario interactivo, genial y alucinante 2.1</li>
                    <li id="tab5">el atlas del pequeño aventurero</li>
                    <li id="tab6">contar y agrupar</li>
                    <li id="tab7">sumar y restar</li>
                    <li id="tab8">juega con las matemáticas</li>
                    <li id="tab9">juega con las palabras</li>
                    <li id="tab10">juega con las ciencias</li>
                </ol>
                <div class="content">
                    <img src="img/courses/multimedia/coleccionInfantil/1.png" alt="" id="imgContent">
                    <div id="desContent">
                        <p>El contenido de este CD permite descubrir el funcionamiento de más de 150 máquinas, para aprender sobre los principios de la ciencia en que se basan esos artefactos así como conocer a los inventores que los hicieron posibles desde el año 7000 a.C. hasta nuestros días<br>
                        David Macaulay y su mascota el Gran Mamut Peludo serán serán sus guías en la tecnología con el apoyo de 1, 000 ilustraciones, 300 animaciones, 27 videos, 22 películas, 70 000 palabras y 1 500 pantallas.
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
            <p>El contenido de este CD permite descubrir el funcionamiento de más de 150 máquinas, para aprender sobre los principios de la ciencia en que se basan esos artefactos así como conocer a los inventores que los hicieron posibles desde el año 7000 a.C. hasta nuestros días<br>
            David Macaulay y su mascota el Gran Mamut Peludo serán serán sus guías en la tecnología con el apoyo de 1, 000 ilustraciones, 300 animaciones, 27 videos, 22 películas, 70 000 palabras y 1 500 pantallas.
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
            <p>La mejor introducción al cuerpo humano y su funcionamiento.<br>
            Más de 25 órganos y partes del cuerpo en 3D, 4 juegos interactivos, 35 000 palabras, 2 horas de audio, juegos y experimentos.<br>
            Los niños observan cortes transversales de cada órgano con amplias descripciones y datos fascinantes. Acompañarán a Skelly, un esqueleto en 3D, en su jornada diaria y aprenderán cómo funciona su cuerpo ante múltiples circunstancias, como el cansancio y el hambre, entre otras.
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
            <p>A través de su contenido y de la mano del lagarto Hugo descubrirán criaturas exóticas y sorprendentes de todo el mundo y conocerán sus características más singulares.<br>
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
            <p>Herramienta de consulta de inapreciable valor, inclusive para los niños que aún no saben leer, a través del cual se pude explorar el lenguaje y comprender el funcionamiento de la lengua.<br>
            Cada palabra clave tiene su propia pantalla con su definición y con una aplicación auditiva en que se puede oír cómo se pronuncia, así como ilustraciones sobre su significado.<br>
            Todo esto de una manera fácil, accesible y sumamente didáctica mediante más de 1, 250 pantallas, 1, 100 ilustraciones, 850 animaciones, 2, 500 pronunciaciones y más de 3, 000 efectos de sonido.
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
            <p>Los niños descifrarán los misterios de la Geografía, cartografía y los viajes. Visitarán ciudades importantes y conocerán su historia; subirán a las montañas, aprenderán la flora y fauna de junglas y selvas, disfrutarán de un tour en avión o barco y realizarán emocionantes e ingeniosas actividades.<br>
            El material se compone de más de 44 mapas animados, 200 animaciones, 400 ventanas desplegables y 1 hora de audio.
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
            <p>Pingüi, el pingüino será el guía que llevará a los niños a conocer los conceptos matemáticos más esenciales como los números y las figuras geométricas.<br>
            Los pequeños aprenderán los conceptos fundamentales de contar y agrupar a través de una selección de juegos y actividades de fácil ejecución.
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
            <p>Como un complemento del CD 7, surge este material en el que Polo, el oso, y Pingüi se encargarán de llevar a los niños a recorrer el mundo de los números y símbolos matemáticos de un modo divertido.<br>
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
            <p>Este CD está diseñado para niños que ya saben sumar y restar, mediante el cual reforzarán su capacidad de cálculo, entenderán conceptos matemáticos un poco más abstractos y aplicarán sus conocimientos a la vida cotidiana.<br>
            Está estructurado como un viaje a las antiguas civilizaciones para que el aprendizaje de los primeros conceptos matemáticos sea más rápido.<br>
            Programa integrado por 250 temas básicos matemáticos elaborados por maestros y pedagogos, con 3, 000 problemas y 2 millones de cuestiones aritméticas de cálculo mental como material didáctico.
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
            <p>Un programa imprescindible para que los niños desarrollen su habilidad para deletrear palabras. Su formato es el de un concurso de televisión en que los niños podrán viajar a cuatro planetas, cada uno con una forma distinta de deletrear.<br>
            Se integra de 4, 200 términos básicos divididos en tres grados de dificultad, 50 grupos de palabras para practicar las áreas problemáticas de la lexicología y 100 divertidos grupos de palabras que gustan a los niños.
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
            <p>Es un juego interactivo destinado a pequeños de seis a diez años, para aprender sobre el mundo de las ciencias, a través de explicaciones, ejercicios y experimentos.<br>
            El programa presenta tres ambientes principales, en los que se tratan temas generales sobre la materia, la energía, las fuerzas y los seres vivos en un despliegue de material multimedia.<br>
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
    animationsTabs();
}

document.querySelector('#computacion').addEventListener('click', computacion)
document.querySelector('#matematicas').addEventListener('click', matematicas)
document.querySelector('#colectionEst').addEventListener('click', colectionEst)
document.querySelector('#colectionInf').addEventListener('click', colectionInf)



