/*
REMPLAZA EL CONTENIDO DE LA PAGINA SEGUN EL INDICE RETURNADO DE LA
FUNCION
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
/* QUITA LA CLASE activeMaterial DE TODOS CURSOS Y LA AGREGA
AL QUE ESTA ACTIVO */
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

/*
COMPRUEBA SI EL CONTENIDO YA SE PUEDE MOSTRAR  
*/
setInterval(() => {
    const showElement = 700
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

    const uls = document.querySelectorAll('.presentation #uls')
    for (let i = 0; i < uls.length; i++){
        if(uls[i].getBoundingClientRect().top < showElement) {
            uls[i].style.left = '0'
            uls[i].style.transition = 'all 1s ease-in-out' 
        }
    }
    const ols = document.querySelector('#ols')
    if(ols.getBoundingClientRect().top < showElement){
        ols.style.left = '0'
        ols.style.transition = 'all 1s ease-in-out'
    }
}, 100);



/*************************************************
GENERA EL CONTENIDO DE CADA UNO DE LOS MATERIALES
**************************************************/
/*
GENERA EL CONTENIDO DEL MATERIAL VIVA LINGUA
*/
const vivaLingua = () => {
    setActiveCourse();
    setCourse()[5].children[0].classList.add('activeMaterial')
    setCourse()[0].src = "img/courses/idiomas/vivaLingua.jpg"
    setCourse()[1].innerHTML = `
    <p class="titleResume">Requisitos del sistema</p>
    <ul>
        <li>Sistema Operativo: Windows® 8, 8.1 y 10. No es compatible con MAC ni con iOS.</li>
        <li>Espacio libre en disco duro: 4 GB</li>
        <li>Tarjeta de sonido</li>
        <li>Bocinas y micrófono</li>
        <li>Conexión a Internet para descarga y activación del curso. Posteriormente no será necesaria, ya que el curso funciona offline.</li>
        <li>Para mejores resultados en el Reconocimiento de Voz, se recomienda el uso de una diadema USB. (No incluida con el curso)</li>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">Viva Lingua english</p>
    <p class="description">¡Un curso para toda la familia!<br>
        Sistema completo de aprendizaje lingüístico que puede utilizar en la vida cotidiana, los viajes y la profesión. La combinación ideal entre tecnología de vanguardia y contenido de alta calidad. Sus características lo hacen el mejor en su género.<br>
        Instale su curso con nuestra tarjeta Viva Lingua English<br>
        Contenido
    </p>
    <ul id="uls">
        <li>CURSO 1: Curso para principiantes y estudiantes con conocimientos iniciales del idioma.</li>
        <li>AUDIO CURSO 1: Todas las pistas de audio contenidas en el módulo Curso 1. Se pueden exportar.</li>
        <li>CURSO 2: Curso de niveles intermedio y avanzado.</li>
        <li>AUDIO CURSO 2: Todas las pistas de audio contenidas en el módulo Curso 2. Se pueden exportar.</li>
        <li>COMUNICACIÓN: Para practicar la pronunciación.</li>
        <li>AUDIO COMUNICACIÓN: Todas las pistas de audio contenidas en el módulo Comunicación. Se pueden exportar.</li>
        <li>VOCABULARIO: Palabras que podrán practicarse, tanto en escritura como en pronunciación.</li>
        <li>GRAMÁTICA: Para conocer y practicar las reglas gramaticales.</li>
        <li>BUSINESS: Estructurado para practicar y aprender inglés en las diversas situaciones que se presentan en la oficina y el mundo de los negocios.</li>
        <li>AUDIO BUSINESS: Todas las pistas de audio contenidas en el módulo Business. Se pueden exportar.</li>
    </ul>
    <span id="tabs"></span>
    <span class="content"></span>
    <span id="uls"></span>
    <span id="ols"></span>
    `
    setCourse()[3].innerHTML = ''
}
vivaLingua()



/*
GENERA EL CONTENIDO DEL MATERIAL INGLES SIN FRONTERAS
*/
const inglesSinFronteras = () => {
    setActiveCourse();
    setCourse()[5].children[1].classList.add('activeMaterial')
    setCourse()[0].src = "img/courses/idiomas/inglesSinFronteras/curso.png"
    setCourse()[1].innerHTML = `
    <span class="titleResume">Requisitos del sistema</span>
    <ul>
        <li>Unidad de CD-ROM</li>
        <li>Windows: 8, 8.1 y 10</li>
        <li>Memoria 1 GB RAM</li>
        <li>Espacio en disco duro 4 GB</li>
        <li>Resolución de pantalla 1024 x 768 píxeles</li>
        <li>Tarjeta de sonido</li>
        <li>Micrófono, audífonos</li>
        <li>Conexión a internet únicamente para activar el producto.</li>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">INGLÉS Curso que contempla detalles y proporciona los recursos idóneos que se ajustan a las necesidades de aprendizaje de cada usuario.<br>
    “WELCOME TO ENGLISH IDIOMAS SIN FRONTERAS”
    </p>
    <p class="description">Aprenda inglés con un Método Europeo multi galardonado por sus aportaciones al proceso de aprendizaje en el ámbito de los idiomas, mediante tecnología de vanguardia aplicada a contenidos de la más alta calidad.<br>
    El concepto del curso permite conocer la cultura del país del cual estamos aprendiendo el idioma, ya que emprenderemos un viaje a través de algunas de las regiones más representativas de los Estados Unidos, tales como;
    </p>
    <ul id="uls">
        <li>Nueva York, la ciudad que nunca duerme</li>
        <li>Los Angeles y el sueño americano</li>
        <li>Chicago y su arquitectura maravillosa</li>
        <li>Las Vegas, la capital del juego</li>
        <li>Hawai, el pequeño paraíso</li>
    </ul>
    <p class="description">Inglés idiomas sin fronteras, cubre los parámetros internacionales de enseñanza, estandarizados por el “Marco Común Europeo de Referencia para las Lenguas”, aspecto que lo convierte en un curso que proporciona un aprendizaje significativo.</p>
    `
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">curso 1</li>
        <li id="tab2">audio curso 1</li>
        <li id="tab3">curso 2</li>
        <li id="tab4">audio curso 2</li>
        <li id="tab5">comunicación</li>
        <li id="tab6">audio comunucación</li>
        <li id="tab7">business</li>
        <li id="tab8">audio business</li>
        <li id="tab9">gramática</li>
        <li id="tab10">vocabulario</li>
    </ol>
    <div class="content">
        <img src="img/courses/idiomas/inglesSinFronteras/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Ideal para aquellos que desean iniciar un proceso de aprendizaje dentro del idioma inglés o para quienes ya poseen conocimientos esenciales del mismo.<br>
            El curso integra aproximadamente 10,000 ejercicios divididos en habilidades como; comprensión auditiva y lectora, gramática, pronunciación y producción verbal.<br>
            Posee un “Diccionario” integrado; nos ofrece la posibilidad de crear “Notas” personalizadas dentro del propio curso; integra un “Buscador” para agilizar el rastreo de información.<br>
            Al finalizar el curso el usuario tendrá los conocimientos para presentar una Certificación Internacional KET, equivalente a los niveles de aprendizaje A1 y A2.
            </p>
        </div>
    </div>
    <span id="ols"></span>

    `
    setActiveTabs();
    setCourse()[6].children[0].classList.add('activeMaterial')
    
    document.querySelector('#tab1').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[0].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/inglesSinFronteras/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Ideal para aquellos que desean iniciar un proceso de aprendizaje dentro del idioma inglés o para quienes ya poseen conocimientos esenciales del mismo.<br>
            El curso integra aproximadamente 10,000 ejercicios divididos en habilidades como; comprensión auditiva y lectora, gramática, pronunciación y producción verbal.<br>
            Posee un “Diccionario” integrado; nos ofrece la posibilidad de crear “Notas” personalizadas dentro del propio curso; integra un “Buscador” para agilizar el rastreo de información.<br>
            Al finalizar el curso el usuario tendrá los conocimientos para presentar una Certificación Internacional KET, equivalente a los niveles de aprendizaje A1 y A2.
            </p>
        </div>
        `
    })
    document.querySelector('#tab2').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[1].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/inglesSinFronteras/2.png" alt="" id="imgContent">
        <div id="desContent">
            <p>El aprendizaje móvil, denominado en inglés “m-learning” ofrece métodos modernos de apoyo al proceso de aprendizaje mediante el uso de dispositivos móviles, tales como los lectores MP3 y teléfonos inteligentes (smartphones)<br>
            El curso permite exportar las pistas de audio a dichos dispositivos, logrando con ello que el aprendizaje lo acompañe en todo momento, motivando la comprensión auditiva.
            </p>
        </div>
        `
    })
    document.querySelector('#tab3').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[2].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/inglesSinFronteras/3.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Este curso posiciona a los usuarios en un nivel de aprendizaje B1 y B2, con aproximadamente 9,000 ejercicios.<br>
            Continúa el proceso de aprendizaje bajo la misma dinámica que en el curso 1, practicas y evaluación en todo momento para cada una de las habilidades<br>
            Los niveles de aprendizaje denominados B1 y B2 otorgan al usuario un nivel de aprendizaje intermedio y avanzado, permitiendo presentar una Certificación Internacional PET o TOEFL, en las Instituciones indicadas para tal fin.
            </p>
        </div>
        `
    })
    document.querySelector('#tab4').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[3].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/inglesSinFronteras/4.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Hoy en día existen herramientas que amplían los procesos cognitivos; los dispositivos móviles apoyan en este proceso, ayudando a los estudiantes a construir su propio aprendizaje y a compartirlo.<br>
            El curso refuerza dicho proceso al permitir la descarga de las pistas de audio mediante programas de música disponibles en la red, los cuales convierten sus pistas en formato mp3 y de ahí a cualquier dispositivo de su preferencia.
            </p>
        </div>
        `
    })
    document.querySelector('#tab5').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[4].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/inglesSinFronteras/5.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Este CD-ROM interactivo nos da la opción de poner en práctica lo que hemos aprendido con el curso 1, curso 2 y nuestro disco de gramática.<br>
            ¡Es momento de hablar Inglés! ¡Es tiempo de comunicar nuestras ideas!<br>
            Es el momento de demostrarnos a nosotros mismos que poseemos los elementos para cubrir una de las habilidades más complejas para los hispanohablantes, ¡La producción verbal!
            </p>
        </div>
        `
    })
    document.querySelector('#tab6').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[5].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/inglesSinFronteras/6.png" alt="" id="imgContent">
        <div id="desContent">
            <p>El programa de actividades de la UNESCO acepta y promociona ideas en pro de la educación de calidad, en este contexto el aprendizaje móvil se esta convirtiendo en una de las soluciones a los problemas que enfrenta el sector educativo.<br>
            Este curso atiende dichas necesidades, facilitando el traslado de contenidos a dispositivos tecnológicos de gran demanda entre la población.<br>
            ¡Hagamos de esta particularidad una opción de aprendizaje e incorporémoslo a nuestra vida cotidiana!
            </p>
        </div>
        `
    })
    document.querySelector('#tab7').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[6].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/inglesSinFronteras/7.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Este curso esta diseñado para todos aquellos usuarios que poseen conocimientos intermedios o avanzados del idioma y necesiten ampliar sus recursos discursivos y trasladarlos a contextos profesionales<br>
            Este CD-ROM apoya en el refuerzo y adquisición de léxico, así como en determinadas estructuras y destrezas dentro de un entorno profesional.<br>
            El curso proporciona una estructura diseñada específicamente para un ambiente de negocios, con ella aprenderemos a escribir correos, redactar cartas para altos ejecutivos, cartas de exposición de motivos, presentaciones ejecutivas, exposiciones, entre otros aspectos de suma importancia para quienes de desenvuelven en este ámbito.
            </p>
        </div>
        `
    })
        document.querySelector('#tab8').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[7].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/inglesSinFronteras/8.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Como lo hemos mencionado previamente, las pistas se pueden exportar a dispositivos que hoy en día son de uso común.<br>
            El audio de Bussines no es la excepción, a través de las conversaciones que nos brinda seremos parte del crecimiento laboral de nuestro protagonista, desde su primer día de trabajo hasta las responsabilidades de alguien que logra ocupar un puesto de mayor rango.
            </p>
        </div>
        `
    })
    document.querySelector('#tab9').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[8].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/inglesSinFronteras/9.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Todos los idiomas requieren una base gramatical sólida que permita a corto plazo la comunicación efectiva, para lograr tal objetivo, el curso integra este CD-ROM cuyo contenido presenta las estructuras tradicionales de la lengua inglesa.<br>
            La gramática representa la parte teórica indispensable para llevar a cabo los ejercicios, contemplados en el curso 1 y posteriormente el curso 2, por lo que se recomienda trabajar de manera simultanea ambos discos, y lograr con ello un aprendizaje integral.
            </p>
        </div>
        `
    })
    document.querySelector('#tab10').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[9].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/inglesSinFronteras/10.png" alt="" id="imgContent">
        <div id="desContent">
            <p>El método de enseñanza integra un CD-ROM dedicado al vocabulario, indispensable para la construcción de conversaciones.<br>
            El disco de vocabulario se aleja de lo convencional, evitando concentrar el aprendizaje en las listas tradicionales; la propuesta se basa en ejercicios de memorización, traducción y dictado, en esté último la corrección ortográfica será una prioridad.<br>
            Diez minutos después de cada sesión marcaran la diferencia, ya que entre más léxico se tenga, resultara más sencillo comprender las pistas de audio que el curso invita a descargar.
            </p>
        </div>
        `
    })
}



/*
GENERA EL CONTENIDO DEL MATERIAL iNGLES INTERACTIVO
*/
const inglesInteractivo = () => {
    setActiveCourse();
    setCourse()[5].children[2].classList.add('activeMaterial')
    setCourse()[0].src = "img/courses/idiomas/interactivoParaTi/curso.png"
    setCourse()[1].innerHTML = `
    <p class="titleResume">Requisitos del sistema</p>
    <ul>
        <li>Unidad de CD-ROM</li>
        <li>Windows: 8, 8.1 y 10</li>
        <li>Memoria 1 GB RAM</li>
        <li>Espacio en disco duro 4 GB</li>
        <li>Resolución de pantalla 1024 x 768 píxeles</li>
        <li>Tarjeta de sonido</li>
        <li>Micrófono, audífonos</li>
        <li>Acceso a internet</li>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">INGLÉS INTERACTIVO PARA TI, IDIOMAS SIN FRONTERAS.</p>
    <p class="description">El método más innovador, didáctico y eficiente por la combinación de sus excelentes contenidos y la tecnología de sus herramientas de apoyo.<br>
    Sistema integral de enseñanza del idioma inglés estructurado como viaje virtual por diferentes ciudades de Estados Unidos, desarrollado en un entorno cotidiano para familiarizar a los jóvenes con el ambiente sociocultural del país, que se ajusta a tres aspectos importantes para los jóvenes en la adquisición de conocimientos: la forma lúdica de aprendizaje, el ritmo de vida actual y la nueva tecnología.<br>
    Diseñado para aprender y dominar el inglés americano o británico, con las herramientas necesarias para el conocimiento y perfeccionamiento de las cuatro principales habilidades lingüísticas: escuchar, hablar, leer y escribir; de forma autodidáctica e interactiva.
    </p>
    <p class="titleParrafo">PREPARACIÓN DE EXÁMENES (CD-ROM)</p>
    <p class="description">Al terminar los cursos que componen este programa del idioma inglés y los ejercicios de este disco, el usuario está preparado para presentar los exámenes de certificación más exigentes del idioma, tales como:</p>
    <ul id="uls">
        <li>Certificate A1 The European Language Certificates (TELC)</li>
        <li>Certificate A2 The European Language Certificates (TELC)</li>
        <li>Certificate B1 The European Language Certificates (TELC)</li>
        <li>Key English Test (KET) University of Cambridge</li>
        <li>Preliminary English Test (PET) University of Cambridge</li>
    </ul>
    <p class="titleParrafo">TUTORA BILINGÜE.</p>
    <ul id="uls">
        <li>Guía virtual en el desarrollo del curso, así como de los ejercicios a resolver</li>
        <li>Diccionario Integrado</li>
        <li>Práctica herramienta siempre activa, que con sólo un clic presenta la traducción de palabras y facilita otras referencias de la expresión</li>
        <li>Taller de Pronunciación</li>
        <li>Prácticas en inglés americano o británico que indican al usuario los errores y aciertos, además de mostrar gráficamente las palabras emitidas con la dicción acertad</li>
        <li>Detección de Errores</li>
        <li>Sistema efectivo de apoyo para corregir las equivocaciones ortográficas y de sintaxis, mejorando la calificación establecida para avanzar a la siguiente lección.</li>
        <li>Voice Pilot</li>
        <li>Instrucciones establecidas que permiten manejar el programa con la voz del usuario</li>
        <li>Audio Export</li>
        <li>Sistema para descargar el audio de las lecciones de los CD-ROM o CD-AUDIO, en cualquier dispositivo de almacenamiento: USB, celular, iPod, etcétera y seguir estudiando en todo momento y lugar</li>
        <li>IntelliPlan</li>
        <li>Administrador que ayuda a visualizar el contenido de cada CD-ROM; así como llevar un registro del avance del curso y los resultados de cada evaluación</li>
    </ul>
    <p class="titleParrafo">ASESORÍA VÍA TELEFÓNICA</p>
    <p class="description">Especialistas en el idioma inglés apoyarán y orientarán en las dudas al comunicarse a los siguientes teléfonos: 55 5250 8099 ó 800 024 9086, de Lunes a Viernes de 9:00 a 18:00 horas., mail: asesoriaidiomas@publicacionesint.com.mx</p>
    `
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">curso 1</li>
        <li id="tab2">audio curso 1</li>
        <li id="tab3">curso 2</li>
        <li id="tab4">audio curso 2</li>
        <li id="tab5">gramática</li>
        <li id="tab6">comunicación</li>
        <li id="tab7">audio comunucación</li>
    </ol>
    <div class="content">
        <img src="img/courses/idiomas/interactivoParaTi/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Para alcanzar el nivel básico pre-intermedio del idioma. Compuesto por:</p>
            <ul>
                <li>12 lecciones estratégicas en un contexto sociocultural</li>
                <li>Más de 450 ejercicios interactivos de comprensión y pronunciación</li>
                <li>35 proyecciones de situaciones comunes, laboratorio de pronunciación y práctica de vocabulario.</li>
            </ul>
        </div>
    </div>
    <span id="ols"></span>

    `
    setActiveTabs();
    setCourse()[6].children[0].classList.add('activeMaterial')

    document.querySelector('#tab1').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[0].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/interactivoParaTi/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Para alcanzar el nivel básico pre-intermedio del idioma. Compuesto por:</p>
            <ul>
                <li>12 lecciones estratégicas en un contexto sociocultural</li>
                <li>Más de 450 ejercicios interactivos de comprensión y pronunciación</li>
                <li>35 proyecciones de situaciones comunes, laboratorio de pronunciación y práctica de vocabulario.</li>
            </ul>
        </div>
        `
    })
    document.querySelector('#tab2').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[1].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/interactivoParaTi/2.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Se inicia el estímulo de la comprensión auditiva con frases y expresiones sencillas. Los audios son primordiales para reforzar el nivel de comprensión auditiva, al mismo tiempo permiten practicar la pronunciación del idioma inglés.</p>
        </div>
        `
    })
    document.querySelector('#tab3').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[2].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/interactivoParaTi/3.png" alt="" id="imgContent">
        <div id="desContent">
            <p>El viaje interactivo capacita para mantener conversaciones circunstanciales y alista para presentar la certificación B2 del MCER (Marco común Europeo de Referencia para las Lenguas)</p>
            <ul>
                <li>Este curso incluye 10 lecciones</li>
                <li>Más de 350 ejercicios interactivos de comprensión y de pronunciación</li>
                <li>29 proyecciones de situaciones comunes</li>
                <li>Laboratorio de pronunciación y práctica de vocabulario.</li>
            </ul>
        </div>
        `
    })
    document.querySelector('#tab4').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[3].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/interactivoParaTi/4.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Se continúa desarrollando la comprensión auditiva y se inicia el entendimiento de diálogos usuales. Estudia inglés y practica en cualquier lugar y horario que se adecúe a tus actividades.</p>
        </div>
        `
    })
    document.querySelector('#tab5').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[4].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/interactivoParaTi/5.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Curso práctico con la explicación de las reglas del idioma y ejercicios interactivos que refuerzan el adecuado uso de las palabras, la relación entre ellas y la correcta construcción de expresiones.<br>
            Compuesto por:
            </p>
            <ul>
                <li>11 lecciones</li>
                <li>Más de 410 ejercicios interactivos de comprensión y de pronunciación</li>
                <li>Sección de estudio selectivo de las estructuras más importantes del inglés.</li>
            </ul>
        </div>
        `
    })
    document.querySelector('#tab6').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[5].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/interactivoParaTi/6.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Se desarrolla y se fortalece la comprensión de frases y expresiones de uso frecuente en situaciones cotidianas: salir de compras, visitar lugares turísticos, participar en reuniones.<br>
            Compuesto por:
            </p>
            <ul>
                <li>12 lecciones</li>
                <li>Más de 225 ejercicios interactivos de comprensión y de pronunciación</li>
                <li>30 proyecciones de situaciones comunes</li>
                <li>Laboratorio de pronunciación y práctica de vocabulario.</li>
            </ul>
        </div>
        `
    })
    document.querySelector('#tab7').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[6].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/interactivoParaTi/7.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Fortalece la capacidad de comunicación oral al participar en diversas conversaciones.<br>
            Compuesto por:
            </p>
            <ul>
                <li>30 diálogos divididos en 12 lecciones.</li>
                <li>Los audios son primordiales para reforzar el nivel de comprensión auditiva</li>
                <li>Listos para escuchar en cualquier dispositivo de almacenamiento de audio</li>
            </ul>
        </div>
        `
    })
}



/*
GENERA EL CONTENIDO DEL MATERIAL LIGA DE LA JUSTICIA
*/
const ligaJusticia = () => {
    setActiveCourse();
    setCourse()[5].children[3].classList.add('activeMaterial')
    setCourse()[0].src = "img/courses/idiomas/ligaJusticia/curso.png"
    setCourse()[1].innerHTML = `
    <p class="titleResume">Requisitos del sistema</p>
    <ul>
        <li>2 CD Audio</li>
        <li>8 Libros, encuadernación rústica</li>
        <li>1 póster plan de estudios</li>
        <li>Requisitos Mínimos del Sistema:</li>
        <ul>
            <li>Microsoft Windows® 8, 8.1, y 10</li>
            <li>Mac OS® 10.9, 10.10, 10.11 y 10.12</li>
            <li>Procesador doble núcleo de 1GHz</li>
            <li>Unidad DVD-Rom</li>
            <li>Resolución de pantalla 1280x720px</li>
        </ul>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">THE ULTIMATE ENGLISH COURSE LIGA DE LA JUSTICIA</p>
    <p class="description">CURSO INTERACTIVO PARA APRENDER INGLÉS, DISFRUTANDO HORAS Y HORAS DE DIVERSIÓN.<br>
    Increíble y único curso de inglés cuyo uso de materiales exclusivos garantiza un aprendizaje sencillo, dinámico y divertido.<br>
    ¡Como nunca lo imaginaste!<br>
    Aprender inglés con los Súper Héroes de la Liga de la Justicia te brinda horas de diversión, además de que fomenta el desarrollo de las cuatro habilidades de aprendizaje: hablar, escuchar, escribir y leer.
    </p>
    <p class="titleParrafo">¿CÓMO FUNCIONA?</p>
    <p class="description">El curso tiene como base un libro de gramática, discos de audio y libros de trabajo para practicar la escritura. Después de realizar la lección, los estudiantes practican la lectura con los cómics, se acostumbran auditivamente y ejercitan la pronunciación del idioma con los discos de audio, amplían su vocabulario y, por último, refuerzan conocimientos en los juegos interactivos de los discos multimedia.</p>
    `
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">grammar</li>
        <li id="tab2">workbooks</li>
        <li id="tab3">exámenes y respuestas y manual para mi primera evaluación curricular</li>
        <li id="tab4">mission</li>
    </ol>
    <div class="content">
        <img src="img/courses/idiomas/ligaJusticia/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Este libro de gramática descriptiva desarrolla los temas que los estudiantes deben conocer y aplicar dentro de la enseñanza básica e intermedia a lo largo de 12 unidades.<br>
            El hecho de estar redactado en español posibilita el aprendizaje para cualquier estudiante que desee dominar el idioma inglés, al ser su primer acercamiento a esta lengua extranjera.
            </p>
        </div>
    </div>
    <span id="ols"></span>

    `
    setActiveTabs();
    setCourse()[6].children[0].classList.add('activeMaterial')

    document.querySelector('#tab1').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[0].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/ligaJusticia/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Este libro de gramática descriptiva desarrolla los temas que los estudiantes deben conocer y aplicar dentro de la enseñanza básica e intermedia a lo largo de 12 unidades.<br>
            El hecho de estar redactado en español posibilita el aprendizaje para cualquier estudiante que desee dominar el idioma inglés, al ser su primer acercamiento a esta lengua extranjera.
            </p>
        </div>
        `
    })
    document.querySelector('#tab2').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[1].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/ligaJusticia/2.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Cinco libros de trabajo que integran ejercicios para reforzar los temas aprendidos en el libro de gramática. Cada Workbook ofrece actividades con las que el estudiante logrará desarrollar habilidades de deducción y análisis.<br>
            Cada palabra se podrá escuchar posteriormente en el audio llamado Ultra Words.
            </p>
        </div>
        `
    })
    document.querySelector('#tab3').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[2].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/ligaJusticia/3.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Este recurso ofrece 12 exámenes correspondientes a las unidades de Grammar. Aquí se encuentran las respuestas de cada examen y de los cinco Workbooks.<br>
            Esta alternativa permite un monitoreo adecuado: ofrece la oportunidad de calificar de manera tangible lo entendido, y con ello permanecer al pendiente de lo que realmente se ha aprendido.<br>
            Se trata de un manual que llevará de la mano a los estudiantes que deseen evaluar sus conocimientos del idioma a través de mecanismos internacionales.<br>
            Aquí se encontrará una explicación ágil y sencilla de cómo deben prepararse para acreditar esta importante evaluación, aprovechando al máximo los recursos que ofrece el curso.
            </p>
        </div>
        `
    })
    document.querySelector('#tab4').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[3].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/ligaJusticia/4.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Es el audio que comprende cada una de las pistas en el libro de Grammar. Los tracks ofrecen una pronunciación ágil y dinámica, tal cual se habla el idioma en situaciones cotidianas.<br>
            Ambos Missions pueden ser descargados a cualquier reproductor portátil, para que el alumno esté en constante contacto con la pronunciación.
            </p>
        </div>
        `
    })
}



/*
GENERA EL CONTENIDO DEL MATERIAL CURSO DE ALEMAN
*/
const aleman = () => {
    setActiveCourse();
    setCourse()[5].children[4].classList.add('activeMaterial')
    setCourse()[0].src = "img/courses/idiomas/aleman/curso.png"
    setCourse()[1].innerHTML = `
    <p class="titleResume">Requisitos del sistema</p>
    <ul>
        <li>Unidad de CD-ROM</li>
        <li>Windows: 8, 8.1 y 10</li>
        <li>Memoria 1 GB RAM</li>
        <li>Espacio en disco duro 4 GB</li>
        <li>Resolución de pantalla 1024 x 768 píxeles</li>
        <li>Tarjeta de sonido</li>
        <li>Micrófono, audífonos</li>
        <li>Acceso a internet</li>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">ALEMAN IDIOMAS SIN FRONTERAS.</p>
    <p class="description">¡Emprenda un interesante viaje virtual a Alemania para aprender su idioma con el sistema lingüístico más completo e innovador!<br>
    Estudie alemán al mismo tiempo que conoce cómo vive la gente, en un maravilloso curso estructurado en forma de viaje por todo el país. Es un sistema completo de aprendizaje que puede utilizar en la vida cotidiana, los viajes y la profesión.<br>
    Especialmente diseñado para garantizar un aprendizaje efectivo, accesible y divertido. ¡Totalmente interactivo!<br>
    Combinación ideal entre tecnología de vanguardia y contenido de alta calidad <span>¡Sus características lo hacen el mejor en su género!</span>
    </p>
    <p class="titleParrafo">MODERADOR EN VIDEO</p>
    <p class="description">Es un maestro virtual que lo guiará en el proceso de aprendizaje</p>
    <p class="titleParrafo">COMANDOS DE VOZ</p>
    <p class="description">Dé indicaciones al programa mediante su voz.</p>
    <p class="titleParrafo">SITUACIONES DE APRENDIZAJE AUTÉNTICAS Y COTIDIANAS</p>
    <p class="description">Los diálogos de las historias en imágenes están estructurados en el lenguaje usual, a través de ellos practicará la comprensión auditiva, lectora y la pronunciación.</p>
    <p class="titleParrafo">CONTROL DE PRONUNCIACIÓN</p>
    <p class="description">En este laboratorio aprenderá las reglas y las peculiaridades de una correcta pronunciación, mediante una aplicación de reconocimiento de voz que le ayudará a desarrollar una buena dicción.</p>
    <p class="titleParrafo">DICCIONARIO INTEGRADO</p>
    <p class="description">Vea la traducción de las palabras al dar un clic sobre ellas.</p>
    <p class="titleParrafo">ÍNDICE DE GRAMÁTICA</p>
    <p class="description">Consulta rápida de cualquier tema a estudiar, con ejemplos que le ayudarán a una mejor comprensión.</p>
    <p class="titleParrafo">ANÁLISIS DE ERRORES</p>
    <p class="description">El sistema de corrección es capaz de diferenciar entre errores ortográficos, gramaticales, sintácticos y de contenido.</p>
    <p class="titleParrafo">VENTANA INTELLIPLAN</p>
    <p class="description">Donde se graban los avances de usuario, lleva un registro del aprendizaje para que cada vez que inicie el programa lo lleve directamente a la lección en que se quedó.</p>
    <p class="titleParrafo">AUDIO EXPORT PARA IPOD, REPRODUCTOR MP3 O CELULARES</p>
    <p class="description">Escuche las lecciones en cualquier momento del día, ya que puede bajarlas a su iPod o a algún reproductor de MP3 y teléfonos celulares.</p>
    <p class="titleParrafo">REVISTA EN LÍNEA</p>
    <p class="description">Le proporciona temas de interés y actualidad en el idioma que está estudiando; además de un diccionario de alemán y diversas lecturas para practicar.</p>
    <p class="titleParrafo">ASESORÍA VÍA TELEFÓNICA</p>
    <p class="description">Especialistas en el idioma inglés apoyarán y orientarán en las dudas al comunicarse a los siguientes teléfonos: 55 5250 8099 ó 800 024 9086, de Lunes a Viernes de 9:00 a 18:00 horas., mail: asesoriaidiomas@publicacionesint.com.mx</p>
    `
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">curso 1</li>
        <li id="tab2">audio curso 1</li>
        <li id="tab3">curso 2 nivel avanzado</li>
        <li id="tab4">audio curso 2</li>
        <li id="tab5">audio comunucación</li>
        <li id="tab6">gramática</li>
        <li id="tab7">vocabulario</li>

    </ol>
    <div class="content">
        <img src="img/courses/idiomas/aleman/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Para principiantes y usuarios con nociones básicas del idioma<br>
            Programa de estudio dividido en:
            </p>
            <ul>
                <li>12 lecciones</li>
                <li>Más de 400 ejercicios escritos y de pronunciación</li>
                <li>4 horas de historias en imágenes distribuidas en un total de 25 diálogos</li>
            </ul>
        </div>
    </div>
    <span id="ols"></span>

    `
    setActiveTabs();
    setCourse()[6].children[0].classList.add('activeMaterial')
    
    document.querySelector('#tab1').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[0].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/aleman/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Para principiantes y usuarios con nociones básicas del idioma<br>
            Programa de estudio dividido en:
            </p>
            <ul>
                <li>12 lecciones</li>
                <li>Más de 400 ejercicios escritos y de pronunciación</li>
                <li>4 horas de historias en imágenes distribuidas en un total de 25 diálogos</li>
            </ul>
        </div>
        `
    })
    document.querySelector('#tab2').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[1].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/aleman/2.png" alt="" id="imgContent">
        <div id="desContent">
            <p>¡Escuche las lecciones en cualquier momento del día!<br>
            Se componen de los diálogos que integran las lecciones del curso 1, listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudarán a reforzar la comprensión auditiva de las lecciones.
            </p>
        </div>
        `
    })
    document.querySelector('#tab3').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[2].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/aleman/3.png" alt="" id="imgContent">
        <div id="desContent">
            <ul>
                <li>Compuesto por 9 lecciones integradas</li>
                <li>Más de 250 ejercicios escritos y de pronunciación</li>
                <li>Este nivel cuenta con 5 horas de historias en imágenes en un total de 25 diálogos.</li>
            </ul>
        </div>
        `
    })
    document.querySelector('#tab4').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[3].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/aleman/4.png" alt="" id="imgContent">
        <div id="desContent">
            <p>¡Escuche las lecciones en cualquier momento del día!<br>
            Se componen de los diálogos que integran las lecciones del curso 2, listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudarán a reforzar la comprensión auditiva de las lecciones.
            </p>
        </div>
        `
    })
    document.querySelector('#tab5').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[4].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/aleman/5.png" alt="" id="imgContent">
        <div id="desContent">
            <p>¡Escuche las lecciones en cualquier momento del día!<br>
            Se componen de los diálogos que integran las lecciones del curso de Comunicación, listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudarán a reforzar la comprensión auditiva de las lecciones.
            </p>
        </div>
        `
    })
    document.querySelector('#tab6').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[5].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/aleman/6.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Material diseñado para profundizar en el conocimiento de la gramática alemana.<br>
            Se integra de 14 lecciones con los principios y normas gramaticales más usuales y cerca de 350 ejercicios, para aprender de una manera progresiva y didáctica.
            </p>
        </div>
        `
    })
    document.querySelector('#tab7').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[6].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/aleman/7.png" alt="" id="imgContent">
        <div id="desContent">
            <p>El método de enseñanza integra un CD-ROM dedicado al vocabulario, indispensable para la construcción de conversaciones.<br>
            El disco de vocabulario se aleja de lo convencional, evitando concentrar el aprendizaje en las listas tradicionales; la propuesta se basa en ejercicios de memorización, traducción y dictado, en esté último la corrección ortográfica será una prioridad.<br>
            Diez minutos después de cada sesión marcaran la diferencia, ya que entre más léxico se tenga, resultara más sencillo comprender las pistas de audio que el curso invita a descargar.
            </p>
        </div>
        `
    })
}



/*
GENERA EL CONTENIDO DEL MATERIAL CURSO DE FRANCES
*/
const frances = () => {
    setActiveCourse();
    setCourse()[5].children[5].classList.add('activeMaterial')
    setCourse()[0].src = "img/courses/idiomas/frances/curso.png"
    setCourse()[1].innerHTML = `
    <p class="titleResume">Requisitos del sistema</p>
    <ul>
        <li>Unidad de CD-ROM</li>
        <li>Windows: 8, 8.1 y 10</li>
        <li>Memoria 1 GB RAM</li>
        <li>Espacio en disco duro 4 GB</li>
        <li>Resolución de pantalla 1024 x 768 píxeles</li>
        <li>Tarjeta de sonido</li>
        <li>Micrófono, audífonos</li>
        <li>Acceso a internet</li>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">FRANCES IDIOMAS SIN FRONTERAS.</p>
    <p class="description">¡Emprenda un interesante viaje virtual a Francia para aprender su idioma con el sistema lingüístico más completo e innovador!<br>
    Equilibrio perfecto entre tecnología de vanguardia con alta calidad en contenidos<span>¡Las características del curso lo hacen el mejor en su género!</span><br>
    Se estructura en forma de viaje virtual por las principales regiones de Francia donde usted estudia el idioma al mismo tiempo que conoce cómo vive la gente ¡Disfrute de la inmersión sociocultural y la práctica del idioma! Es un sistema completo de aprendizaje lingüístico que puede utilizar en la vida cotidiana, los viajes y la profesión. Especialmente diseñado para garantizar un aprendizaje efectivo, accesible y divertido.<span> ¡Totalmente interactivo!</span>
    </p>
    <p class="titleParrafo">MODERADOR EN VIDEO</p>
    <p class="description">Es un maestro virtual que lo guiará en el proceso de aprendizaje</p>
    <p class="titleParrafo">COMANDOS DE VOZ</p>
    <p class="description">Dé indicaciones al programa mediante su voz.</p>
    <p class="titleParrafo">SITUACIONES DE APRENDIZAJE AUTÉNTICAS Y COTIDIANAS</p>
    <p class="description">Los diálogos de las historias en imágenes están estructurados en el lenguaje usual, a través de ellos practicará la comprensión auditiva, lectora y la pronunciación.</p>
    <p class="titleParrafo">CONTROL DE PRONUNCIACIÓN</p>
    <p class="description">En este laboratorio aprenderá las reglas y las peculiaridades de una correcta pronunciación, mediante una aplicación de reconocimiento de voz que le ayudará a desarrollar una buena dicción.</p>
    <p class="titleParrafo">DICCIONARIO INTEGRADO</p>
    <p class="description">Vea la traducción de las palabras al dar un clic sobre ellas.</p>
    <p class="titleParrafo">ÍNDICE DE GRAMÁTICA</p>
    <p class="description">Consulta rápida de cualquier tema a estudiar, con ejemplos que le ayudarán a una mejor comprensión.</p>
    <p class="titleParrafo">ANÁLISIS DE ERRORES</p>
    <p class="description">El sistema de corrección es capaz de diferenciar entre errores ortográficos, gramaticales, sintácticos y de contenido.</p>
    <p class="titleParrafo">VENTANA INTELLIPLAN</p>
    <p class="description">Donde se graban los avances de usuario, lleva un registro del aprendizaje para que cada vez que inicie el programa lo lleve directamente a la lección en que se quedó.</p>
    <p class="titleParrafo">AUDIO EXPORT PARA IPOD, REPRODUCTOR MP3 O CELULARES</p>
    <p class="description">Escuche las lecciones en cualquier momento del día, ya que puede bajarlas a su iPod o a algún reproductor de MP3 y teléfonos celulares.</p>
    <p class="titleParrafo">REVISTA EN LÍNEA</p>
    <p class="description">Le proporciona temas de interés y actualidad en el idioma que está estudiando; además de un diccionario de alemán y diversas lecturas para practicar.</p>
    <p class="titleParrafo">ASESORÍA VÍA TELEFÓNICA</p>
    <p class="description">Especialistas en el idioma inglés apoyarán y orientarán en las dudas al comunicarse a los siguientes teléfonos: 55 5250 8099 ó 800 024 9086, de Lunes a Viernes de 9:00 a 18:00 horas., mail: asesoriaidiomas@publicacionesint.com.mx</p>
    `
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">curso 1</li>
        <li id="tab2">audio curso 1</li>
        <li id="tab3">curso 2 nivel avanzado</li>
        <li id="tab4">audio curso 2</li>
        <li id="tab5">comunucación</li>
        <li id="tab6">audio comunucación</li>
        <li id="tab7">gramática</li>
        <li id="tab8">vocabulario</li>

    </ol>
    <div class="content">
        <img src="img/courses/idiomas/frances/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Para principiantes y usuarios con nociones básicas del idioma<br>
            Programa de estudio dividido en:
            </p>
            <ul>
                <li>12 lecciones</li>
                <li>Más de 200 ejercicios escritos y de pronunciación</li>
                <li>4 horas de historias en imágenes distribuidas en un total de 35 diálogos</li>
            </ul>
        </div>
    </div>
    <span id="ols"></span>

    `
    setActiveTabs();
    setCourse()[6].children[0].classList.add('activeMaterial')

    document.querySelector('#tab1').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[0].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/frances/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Para principiantes y usuarios con nociones básicas del idioma<br>
            Programa de estudio dividido en:
            </p>
            <ul>
                <li>12 lecciones</li>
                <li>Más de 200 ejercicios escritos y de pronunciación</li>
                <li>4 horas de historias en imágenes distribuidas en un total de 35 diálogos</li>
            </ul>
        </div>
        `
    })
    document.querySelector('#tab2').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[1].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/frances/2.png" alt="" id="imgContent">
        <div id="desContent">
            <p>¡Escuche las lecciones en cualquier momento del día!<br>
            Contiene todos los diálogos que integran las lecciones del curso 1 listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudarán a reforzar la comprensión auditiva de las lecciones.<br>
            Llévelos con usted mientras viaja, hace ejercicio, sale a caminar...
            </p>
        </div>
        `
    })
    document.querySelector('#tab3').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[2].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/frances/3.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Compuesto por:</p>
            <ul>
                <li>10 lecciones integradas</li>
                <li>Más de 200 ejercicios escritos y de pronunciación</li>
                <li>Este nivel cuenta con 5 horas de historias en imágenes en un total de 30 diálogos</li>
            </ul>
        </div>
        `
    })
    document.querySelector('#tab4').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[3].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/frances/4.png" alt="" id="imgContent">
        <div id="desContent">
            <p>¡Escuche las lecciones en cualquier momento del día!<br>
            Se componen de los diálogos que integran las lecciones del curso 2, listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudarán a reforzar la comprensión auditiva de las lecciones.<br>
            Llévelos con usted mientras viaja, hace ejercicio, sale a caminar...
            </p>
        </div>
        `
    })
    document.querySelector('#tab5').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[4].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/frances/5.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Principiantes y usuarios con nociones básicas del idioma.<br>
            Programa compuesto por 13 lecciones con más de 150 ejercicios escritos y de pronunciación, tiene 3 horas de historias en imágenes en un total de 30 diálogos.
            </p>
        </div>
        `
    })
    document.querySelector('#tab6').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[5].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/frances/6.png" alt="" id="imgContent">
        <div id="desContent">
            <p>¡Escuche las lecciones en cualquier momento del día!<br>
            Se componen de los diálogos que integran las lecciones del cursos de Comunicación, listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudarán a reforzar la comprensión auditiva de las lecciones.
            </p>
        </div>
        `
    })
    document.querySelector('#tab7').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[6].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/frances/7.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Material diseñado para profundizar en el conocimiento de la gramática francesa.<br>
            Se integra de 11 lecciones con los principios y normas gramaticales más usuales y cerca de 200 ejercicios, para aprender de una manera progresiva y didáctica.
            </p>
        </div>
        `
    })
    document.querySelector('#tab8').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[7].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/frances/8.png" alt="" id="imgContent">
        <div id="desContent">
            <p>El método de enseñanza integra un CD-ROM dedicado al vocabulario, indispensable para la construcción de conversaciones.<br>
            El disco de vocabulario se aleja de lo convencional, evitando concentrar el aprendizaje en las listas tradicionales; la propuesta se basa en ejercicios de memorización, traducción y dictado, en esté último la corrección ortográfica será una prioridad.<br>
            Diez minutos después de cada sesión marcaran la diferencia, ya que entre más léxico se tenga, resultara más sencillo comprender las pistas de audio que el curso invita a descargar.
            </p>
        </div>
        `
    })
}



/*
GENERA EL CONTENIDO DEL MATERIAL CURSO DE ITALIANO
*/
const italiano = () => {
    setActiveCourse();
    setCourse()[5].children[6].classList.add('activeMaterial')
    setCourse()[0].src = "img/courses/idiomas/italiano/curso.png"
    setCourse()[1].innerHTML = `
    <p class="titleResume">Requisitos del sistema</p>
    <ul>
        <li>Unidad de CD-ROM</li>
        <li>Windows: 8, 8.1 y 10</li>
        <li>Memoria 1 GB RAM</li>
        <li>Espacio en disco duro 4 GB</li>
        <li>Resolución de pantalla 1024 x 768 píxeles</li>
        <li>Tarjeta de sonido</li>
        <li>Micrófono, audífonos</li>
        <li>Acceso a internet</li>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">ITALIANO IDIOMAS SIN FRONTERAS.</p>
    <p class="description">¡Aprenda italiano a través de un interesante viaje virtual a Italia, con el sistema lingüístico más completo e innovador!<br>
    Estudie italiano y al mismo tiempo conozca cómo vive la gente del país, ya que el curso se estructura en forma de viaje.<br>
    Es un sistema completo de aprendizaje lingüístico que puede utilizar en la vida cotidiana, los viajes y la profesión.<br>
    Especialmente diseñado para garantizar un aprendizaje efectivo, accesible y divertido. ¡Totalmente interactivo!<br>
    Es la combinación ideal entre tecnología de vanguardia y contenido de alta calidad. ¡Sus características lo hacen el mejor en su género!
    </p>
    <p class="titleParrafo">MODERADOR EN VIDEO</p>
    <p class="description">Es un maestro virtual que lo guiará en el proceso de aprendizaje</p>
    <p class="titleParrafo">COMANDOS DE VOZ</p>
    <p class="description">Dé indicaciones al programa mediante su voz.</p>
    <p class="titleParrafo">SITUACIONES DE APRENDIZAJE AUTÉNTICAS Y COTIDIANAS</p>
    <p class="description">Los diálogos de las historias en imágenes están estructurados en el lenguaje usual, a través de ellos practicará la comprensión auditiva, lectora y la pronunciación.</p>
    <p class="titleParrafo">CONTROL DE PRONUNCIACIÓN</p>
    <p class="description">En este laboratorio aprenderá las reglas y las peculiaridades de una correcta pronunciación, mediante una aplicación de reconocimiento de voz que le ayudará a desarrollar una buena dicción.</p>
    <p class="titleParrafo">DICCIONARIO INTEGRADO</p>
    <p class="description">Vea la traducción de las palabras al dar un clic sobre ellas.</p>
    <p class="titleParrafo">ÍNDICE DE GRAMÁTICA</p>
    <p class="description">Consulta rápida de cualquier tema a estudiar, con ejemplos que le ayudarán a una mejor comprensión.</p>
    <p class="titleParrafo">ANÁLISIS DE ERRORES</p>
    <p class="description">El sistema de corrección es capaz de diferenciar entre errores ortográficos, gramaticales, sintácticos y de contenido.</p>
    <p class="titleParrafo">VENTANA INTELLIPLAN</p>
    <p class="description">Donde se graban los avances de usuario, lleva un registro del aprendizaje para que cada vez que inicie el programa lo lleve directamente a la lección en que se quedó.</p>
    <p class="titleParrafo">AUDIO EXPORT PARA IPOD, REPRODUCTOR MP3 O CELULARES</p>
    <p class="description">Escuche las lecciones en cualquier momento del día, ya que puede bajarlas a su iPod o a algún reproductor de MP3 y teléfonos celulares.</p>
    <p class="titleParrafo">REVISTA EN LÍNEA</p>
    <p class="description">Le proporciona temas de interés y actualidad en el idioma que está estudiando; además de un diccionario de alemán y diversas lecturas para practicar.</p>
    <p class="titleParrafo">ASESORÍA VÍA TELEFÓNICA</p>
    <p class="description">Especialistas en el idioma inglés apoyarán y orientarán en las dudas al comunicarse a los siguientes teléfonos: 55 5250 8099 ó 800 024 9086, de Lunes a Viernes de 9:00 a 18:00 horas., mail: asesoriaidiomas@publicacionesint.com.mx</p>
    `
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">curso 1</li>
        <li id="tab2">audio curso 1</li>
        <li id="tab3">curso 2 nivel avanzado</li>
        <li id="tab4">audio curso 2</li>
        <li id="tab5">comunucación</li>
        <li id="tab6">audio comunucación</li>
        <li id="tab7">gramática</li>
        <li id="tab8">vocabulario</li>

    </ol>
    <div class="content">
        <img src="img/courses/idiomas/italiano/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Para principiantes y usuarios con nociones básicas del idioma<br>
            Programa de estudio dividido en:
            </p>
            <ul>
                <li>12 lecciones</li>
                <li>Más de 300 ejercicios escritos y de pronunciación</li>
                <li>4 horas de historias en imágenes distribuidas en un total de 25 diálogos</li>
            </ul>
        </div>
    </div>
    <span id="ols"></span>

    `
    setActiveTabs();
    setCourse()[6].children[0].classList.add('activeMaterial')

    document.querySelector('#tab1').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[0].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/italiano/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Para principiantes y usuarios con nociones básicas del idioma<br>
            Programa de estudio dividido en:
            </p>
            <ul>
                <li>12 lecciones</li>
                <li>Más de 300 ejercicios escritos y de pronunciación</li>
                <li>4 horas de historias en imágenes distribuidas en un total de 25 diálogos</li>
            </ul>
        </div>
        `
    })
    document.querySelector('#tab2').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[1].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/italiano/2.png" alt="" id="imgContent">
        <div id="desContent">
            <p>¡Escuche las lecciones en cualquier momento del día!<br>
            Contiene todos los diálogos que integran las lecciones del curso 1 listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudarán a reforzar la comprensión auditiva de las lecciones.Se componen de los diálogos que integran las lecciones del curso 1, listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudarán a reforzar la comprensión auditiva de las lecciones.
            </p>
        </div>
        `
    })
    document.querySelector('#tab3').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[2].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/italiano/3.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Compuesto por:</p>
            <ul>
                <li>12 lecciones integradas</li>
                <li>Más de 300 ejercicios escritos y de pronunciación</li>
                <li>Este nivel cuenta con 5 horas de historias en imágenes en un total de 25 diálogos</li>
            </ul>
        </div>
        `
    })
    document.querySelector('#tab4').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[3].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/italiano/4.png" alt="" id="imgContent">
        <div id="desContent">
            <p>¡Escuche las lecciones en cualquier momento del día!<br>
            Se componen de los diálogos que integran las lecciones del curso 2, listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudarán a reforzar la comprensión auditiva de las lecciones.<br>
            Llévelos con usted mientras viaja, hace ejercicio, sale a caminar...
            </p>
        </div>
        `
    })
    document.querySelector('#tab5').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[4].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/italiano/5.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Principiantes y usuarios con nociones básicas del idioma.<br>
            Programa compuesto por 9 lecciones con más de 200 ejercicios escritos y de pronunciación, tiene 3 horas de historias en imágenes en un total de 25 diálogos.
            </p>
        </div>
        `
    })
    document.querySelector('#tab6').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[5].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/italiano/6.png" alt="" id="imgContent">
        <div id="desContent">
            <p>¡Escuche las lecciones en cualquier momento del día!<br>
            Se componen de los diálogos que integran las lecciones del cursos de Comunicación, listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudarán a reforzar la comprensión auditiva de las lecciones.
            </p>
        </div>
        `
    })
    document.querySelector('#tab7').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[6].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/italiano/7.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Material diseñado para profundizar en el conocimiento de la gramática italiana.<br>
            Es un material diseñado para profundizar en el conocimiento de la gramática del idioma italiano. Se integra de 13 lecciones con los principios y normas gramaticales más usuales y cerca de 350 ejercicios, para aprender de una manera progresiva y didáctica.
            </p>
        </div>
        `
    })
    document.querySelector('#tab8').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[7].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/italiano/8.png" alt="" id="imgContent">
        <div id="desContent">
            <p>El método de enseñanza integra un CD-ROM dedicado al vocabulario, indispensable para la construcción de conversaciones.<br>
            El disco de vocabulario se aleja de lo convencional, evitando concentrar el aprendizaje en las listas tradicionales; la propuesta se basa en ejercicios de memorización, traducción y dictado, en esté último la corrección ortográfica será una prioridad.<br>
            Diez minutos después de cada sesión marcaran la diferencia, ya que entre más léxico se tenga, resultara más sencillo comprender las pistas de audio que el curso invita a descargar.
            </p>
        </div>
        `
    })
}



document.querySelector('#vivaLingua').addEventListener('click', vivaLingua)
document.querySelector('#inglesSinFronteras').addEventListener('click', inglesSinFronteras)
document.querySelector('#inglesInteractivo').addEventListener('click', inglesInteractivo)
document.querySelector('#ligaJusticia').addEventListener('click', ligaJusticia)
document.querySelector('#aleman').addEventListener('click', aleman)
document.querySelector('#frances').addEventListener('click', frances)
document.querySelector('#italiano').addEventListener('click', italiano)