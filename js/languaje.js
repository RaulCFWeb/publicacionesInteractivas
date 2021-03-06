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
        <li>Sistema Operativo: Windows?? 8, 8.1 y 10. No es compatible con MAC ni con iOS.</li>
        <li>Espacio libre en disco duro: 4 GB</li>
        <li>Tarjeta de sonido</li>
        <li>Bocinas y micr??fono</li>
        <li>Conexi??n a Internet para descarga y activaci??n del curso. Posteriormente no ser?? necesaria, ya que el curso funciona offline.</li>
        <li>Para mejores resultados en el Reconocimiento de Voz, se recomienda el uso de una diadema USB. (No incluida con el curso)</li>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">Viva Lingua english</p>
    <p class="description">??Un curso para toda la familia!<br>
        Sistema completo de aprendizaje ling????stico que puede utilizar en la vida cotidiana, los viajes y la profesi??n. La combinaci??n ideal entre tecnolog??a de vanguardia y contenido de alta calidad. Sus caracter??sticas lo hacen el mejor en su g??nero.<br>
        Instale su curso con nuestra tarjeta Viva Lingua English<br>
        Contenido
    </p>
    <ul id="uls">
        <li>CURSO 1: Curso para principiantes y estudiantes con conocimientos iniciales del idioma.</li>
        <li>AUDIO CURSO 1: Todas las pistas de audio contenidas en el m??dulo Curso 1. Se pueden exportar.</li>
        <li>CURSO 2: Curso de niveles intermedio y avanzado.</li>
        <li>AUDIO CURSO 2: Todas las pistas de audio contenidas en el m??dulo Curso 2. Se pueden exportar.</li>
        <li>COMUNICACI??N: Para practicar la pronunciaci??n.</li>
        <li>AUDIO COMUNICACI??N: Todas las pistas de audio contenidas en el m??dulo Comunicaci??n. Se pueden exportar.</li>
        <li>VOCABULARIO: Palabras que podr??n practicarse, tanto en escritura como en pronunciaci??n.</li>
        <li>GRAM??TICA: Para conocer y practicar las reglas gramaticales.</li>
        <li>BUSINESS: Estructurado para practicar y aprender ingl??s en las diversas situaciones que se presentan en la oficina y el mundo de los negocios.</li>
        <li>AUDIO BUSINESS: Todas las pistas de audio contenidas en el m??dulo Business. Se pueden exportar.</li>
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
        <li>Resoluci??n de pantalla 1024 x 768 p??xeles</li>
        <li>Tarjeta de sonido</li>
        <li>Micr??fono, aud??fonos</li>
        <li>Conexi??n a internet ??nicamente para activar el producto.</li>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">INGL??S Curso que contempla detalles y proporciona los recursos id??neos que se ajustan a las necesidades de aprendizaje de cada usuario.<br>
    ???WELCOME TO ENGLISH IDIOMAS SIN FRONTERAS???
    </p>
    <p class="description">Aprenda ingl??s con un M??todo Europeo multi galardonado por sus aportaciones al proceso de aprendizaje en el ??mbito de los idiomas, mediante tecnolog??a de vanguardia aplicada a contenidos de la m??s alta calidad.<br>
    El concepto del curso permite conocer la cultura del pa??s del cual estamos aprendiendo el idioma, ya que emprenderemos un viaje a trav??s de algunas de las regiones m??s representativas de los Estados Unidos, tales como;
    </p>
    <ul id="uls">
        <li>Nueva York, la ciudad que nunca duerme</li>
        <li>Los Angeles y el sue??o americano</li>
        <li>Chicago y su arquitectura maravillosa</li>
        <li>Las Vegas, la capital del juego</li>
        <li>Hawai, el peque??o para??so</li>
    </ul>
    <p class="description">Ingl??s idiomas sin fronteras, cubre los par??metros internacionales de ense??anza, estandarizados por el ???Marco Com??n Europeo de Referencia para las Lenguas???, aspecto que lo convierte en un curso que proporciona un aprendizaje significativo.</p>
    `
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">curso 1</li>
        <li id="tab2">audio curso 1</li>
        <li id="tab3">curso 2</li>
        <li id="tab4">audio curso 2</li>
        <li id="tab5">comunicaci??n</li>
        <li id="tab6">audio comunucaci??n</li>
        <li id="tab7">business</li>
        <li id="tab8">audio business</li>
        <li id="tab9">gram??tica</li>
        <li id="tab10">vocabulario</li>
    </ol>
    <div class="content">
        <img src="img/courses/idiomas/inglesSinFronteras/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Ideal para aquellos que desean iniciar un proceso de aprendizaje dentro del idioma ingl??s o para quienes ya poseen conocimientos esenciales del mismo.<br>
            El curso integra aproximadamente 10,000 ejercicios divididos en habilidades como; comprensi??n auditiva y lectora, gram??tica, pronunciaci??n y producci??n verbal.<br>
            Posee un ???Diccionario??? integrado; nos ofrece la posibilidad de crear ???Notas??? personalizadas dentro del propio curso; integra un ???Buscador??? para agilizar el rastreo de informaci??n.<br>
            Al finalizar el curso el usuario tendr?? los conocimientos para presentar una Certificaci??n Internacional KET, equivalente a los niveles de aprendizaje A1 y A2.
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
            <p>Ideal para aquellos que desean iniciar un proceso de aprendizaje dentro del idioma ingl??s o para quienes ya poseen conocimientos esenciales del mismo.<br>
            El curso integra aproximadamente 10,000 ejercicios divididos en habilidades como; comprensi??n auditiva y lectora, gram??tica, pronunciaci??n y producci??n verbal.<br>
            Posee un ???Diccionario??? integrado; nos ofrece la posibilidad de crear ???Notas??? personalizadas dentro del propio curso; integra un ???Buscador??? para agilizar el rastreo de informaci??n.<br>
            Al finalizar el curso el usuario tendr?? los conocimientos para presentar una Certificaci??n Internacional KET, equivalente a los niveles de aprendizaje A1 y A2.
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
            <p>El aprendizaje m??vil, denominado en ingl??s ???m-learning??? ofrece m??todos modernos de apoyo al proceso de aprendizaje mediante el uso de dispositivos m??viles, tales como los lectores MP3 y tel??fonos inteligentes (smartphones)<br>
            El curso permite exportar las pistas de audio a dichos dispositivos, logrando con ello que el aprendizaje lo acompa??e en todo momento, motivando la comprensi??n auditiva.
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
            Contin??a el proceso de aprendizaje bajo la misma din??mica que en el curso 1, practicas y evaluaci??n en todo momento para cada una de las habilidades<br>
            Los niveles de aprendizaje denominados B1 y B2 otorgan al usuario un nivel de aprendizaje intermedio y avanzado, permitiendo presentar una Certificaci??n Internacional PET o TOEFL, en las Instituciones indicadas para tal fin.
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
            <p>Hoy en d??a existen herramientas que ampl??an los procesos cognitivos; los dispositivos m??viles apoyan en este proceso, ayudando a los estudiantes a construir su propio aprendizaje y a compartirlo.<br>
            El curso refuerza dicho proceso al permitir la descarga de las pistas de audio mediante programas de m??sica disponibles en la red, los cuales convierten sus pistas en formato mp3 y de ah?? a cualquier dispositivo de su preferencia.
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
            <p>Este CD-ROM interactivo nos da la opci??n de poner en pr??ctica lo que hemos aprendido con el curso 1, curso 2 y nuestro disco de gram??tica.<br>
            ??Es momento de hablar Ingl??s! ??Es tiempo de comunicar nuestras ideas!<br>
            Es el momento de demostrarnos a nosotros mismos que poseemos los elementos para cubrir una de las habilidades m??s complejas para los hispanohablantes, ??La producci??n verbal!
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
            <p>El programa de actividades de la UNESCO acepta y promociona ideas en pro de la educaci??n de calidad, en este contexto el aprendizaje m??vil se esta convirtiendo en una de las soluciones a los problemas que enfrenta el sector educativo.<br>
            Este curso atiende dichas necesidades, facilitando el traslado de contenidos a dispositivos tecnol??gicos de gran demanda entre la poblaci??n.<br>
            ??Hagamos de esta particularidad una opci??n de aprendizaje e incorpor??moslo a nuestra vida cotidiana!
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
            <p>Este curso esta dise??ado para todos aquellos usuarios que poseen conocimientos intermedios o avanzados del idioma y necesiten ampliar sus recursos discursivos y trasladarlos a contextos profesionales<br>
            Este CD-ROM apoya en el refuerzo y adquisici??n de l??xico, as?? como en determinadas estructuras y destrezas dentro de un entorno profesional.<br>
            El curso proporciona una estructura dise??ada espec??ficamente para un ambiente de negocios, con ella aprenderemos a escribir correos, redactar cartas para altos ejecutivos, cartas de exposici??n de motivos, presentaciones ejecutivas, exposiciones, entre otros aspectos de suma importancia para quienes de desenvuelven en este ??mbito.
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
            <p>Como lo hemos mencionado previamente, las pistas se pueden exportar a dispositivos que hoy en d??a son de uso com??n.<br>
            El audio de Bussines no es la excepci??n, a trav??s de las conversaciones que nos brinda seremos parte del crecimiento laboral de nuestro protagonista, desde su primer d??a de trabajo hasta las responsabilidades de alguien que logra ocupar un puesto de mayor rango.
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
            <p>Todos los idiomas requieren una base gramatical s??lida que permita a corto plazo la comunicaci??n efectiva, para lograr tal objetivo, el curso integra este CD-ROM cuyo contenido presenta las estructuras tradicionales de la lengua inglesa.<br>
            La gram??tica representa la parte te??rica indispensable para llevar a cabo los ejercicios, contemplados en el curso 1 y posteriormente el curso 2, por lo que se recomienda trabajar de manera simultanea ambos discos, y lograr con ello un aprendizaje integral.
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
            <p>El m??todo de ense??anza integra un CD-ROM dedicado al vocabulario, indispensable para la construcci??n de conversaciones.<br>
            El disco de vocabulario se aleja de lo convencional, evitando concentrar el aprendizaje en las listas tradicionales; la propuesta se basa en ejercicios de memorizaci??n, traducci??n y dictado, en est?? ??ltimo la correcci??n ortogr??fica ser?? una prioridad.<br>
            Diez minutos despu??s de cada sesi??n marcaran la diferencia, ya que entre m??s l??xico se tenga, resultara m??s sencillo comprender las pistas de audio que el curso invita a descargar.
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
        <li>Resoluci??n de pantalla 1024 x 768 p??xeles</li>
        <li>Tarjeta de sonido</li>
        <li>Micr??fono, aud??fonos</li>
        <li>Acceso a internet</li>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">INGL??S INTERACTIVO PARA TI, IDIOMAS SIN FRONTERAS.</p>
    <p class="description">El m??todo m??s innovador, did??ctico y eficiente por la combinaci??n de sus excelentes contenidos y la tecnolog??a de sus herramientas de apoyo.<br>
    Sistema integral de ense??anza del idioma ingl??s estructurado como viaje virtual por diferentes ciudades de Estados Unidos, desarrollado en un entorno cotidiano para familiarizar a los j??venes con el ambiente sociocultural del pa??s, que se ajusta a tres aspectos importantes para los j??venes en la adquisici??n de conocimientos: la forma l??dica de aprendizaje, el ritmo de vida actual y la nueva tecnolog??a.<br>
    Dise??ado para aprender y dominar el ingl??s americano o brit??nico, con las herramientas necesarias para el conocimiento y perfeccionamiento de las cuatro principales habilidades ling????sticas: escuchar, hablar, leer y escribir; de forma autodid??ctica e interactiva.
    </p>
    <p class="titleParrafo">PREPARACI??N DE EX??MENES (CD-ROM)</p>
    <p class="description">Al terminar los cursos que componen este programa del idioma ingl??s y los ejercicios de este disco, el usuario est?? preparado para presentar los ex??menes de certificaci??n m??s exigentes del idioma, tales como:</p>
    <ul id="uls">
        <li>Certificate A1 The European Language Certificates (TELC)</li>
        <li>Certificate A2 The European Language Certificates (TELC)</li>
        <li>Certificate B1 The European Language Certificates (TELC)</li>
        <li>Key English Test (KET) University of Cambridge</li>
        <li>Preliminary English Test (PET) University of Cambridge</li>
    </ul>
    <p class="titleParrafo">TUTORA BILING??E.</p>
    <ul id="uls">
        <li>Gu??a virtual en el desarrollo del curso, as?? como de los ejercicios a resolver</li>
        <li>Diccionario Integrado</li>
        <li>Pr??ctica herramienta siempre activa, que con s??lo un clic presenta la traducci??n de palabras y facilita otras referencias de la expresi??n</li>
        <li>Taller de Pronunciaci??n</li>
        <li>Pr??cticas en ingl??s americano o brit??nico que indican al usuario los errores y aciertos, adem??s de mostrar gr??ficamente las palabras emitidas con la dicci??n acertad</li>
        <li>Detecci??n de Errores</li>
        <li>Sistema efectivo de apoyo para corregir las equivocaciones ortogr??ficas y de sintaxis, mejorando la calificaci??n establecida para avanzar a la siguiente lecci??n.</li>
        <li>Voice Pilot</li>
        <li>Instrucciones establecidas que permiten manejar el programa con la voz del usuario</li>
        <li>Audio Export</li>
        <li>Sistema para descargar el audio de las lecciones de los CD-ROM o CD-AUDIO, en cualquier dispositivo de almacenamiento: USB, celular, iPod, etc??tera y seguir estudiando en todo momento y lugar</li>
        <li>IntelliPlan</li>
        <li>Administrador que ayuda a visualizar el contenido de cada CD-ROM; as?? como llevar un registro del avance del curso y los resultados de cada evaluaci??n</li>
    </ul>
    <p class="titleParrafo">ASESOR??A V??A TELEF??NICA</p>
    <p class="description">Especialistas en el idioma ingl??s apoyar??n y orientar??n en las dudas al comunicarse a los siguientes tel??fonos: 55 5250 8099 ?? 800 024 9086, de Lunes a Viernes de 9:00 a 18:00 horas., mail: asesoriaidiomas@publicacionesint.com.mx</p>
    `
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">curso 1</li>
        <li id="tab2">audio curso 1</li>
        <li id="tab3">curso 2</li>
        <li id="tab4">audio curso 2</li>
        <li id="tab5">gram??tica</li>
        <li id="tab6">comunicaci??n</li>
        <li id="tab7">audio comunucaci??n</li>
    </ol>
    <div class="content">
        <img src="img/courses/idiomas/interactivoParaTi/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Para alcanzar el nivel b??sico pre-intermedio del idioma. Compuesto por:</p>
            <ul>
                <li>12 lecciones estrat??gicas en un contexto sociocultural</li>
                <li>M??s de 450 ejercicios interactivos de comprensi??n y pronunciaci??n</li>
                <li>35 proyecciones de situaciones comunes, laboratorio de pronunciaci??n y pr??ctica de vocabulario.</li>
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
            <p>Para alcanzar el nivel b??sico pre-intermedio del idioma. Compuesto por:</p>
            <ul>
                <li>12 lecciones estrat??gicas en un contexto sociocultural</li>
                <li>M??s de 450 ejercicios interactivos de comprensi??n y pronunciaci??n</li>
                <li>35 proyecciones de situaciones comunes, laboratorio de pronunciaci??n y pr??ctica de vocabulario.</li>
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
            <p>Se inicia el est??mulo de la comprensi??n auditiva con frases y expresiones sencillas. Los audios son primordiales para reforzar el nivel de comprensi??n auditiva, al mismo tiempo permiten practicar la pronunciaci??n del idioma ingl??s.</p>
        </div>
        `
    })
    document.querySelector('#tab3').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[2].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/interactivoParaTi/3.png" alt="" id="imgContent">
        <div id="desContent">
            <p>El viaje interactivo capacita para mantener conversaciones circunstanciales y alista para presentar la certificaci??n B2 del MCER (Marco com??n Europeo de Referencia para las Lenguas)</p>
            <ul>
                <li>Este curso incluye 10 lecciones</li>
                <li>M??s de 350 ejercicios interactivos de comprensi??n y de pronunciaci??n</li>
                <li>29 proyecciones de situaciones comunes</li>
                <li>Laboratorio de pronunciaci??n y pr??ctica de vocabulario.</li>
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
            <p>Se contin??a desarrollando la comprensi??n auditiva y se inicia el entendimiento de di??logos usuales. Estudia ingl??s y practica en cualquier lugar y horario que se adec??e a tus actividades.</p>
        </div>
        `
    })
    document.querySelector('#tab5').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[4].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/idiomas/interactivoParaTi/5.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Curso pr??ctico con la explicaci??n de las reglas del idioma y ejercicios interactivos que refuerzan el adecuado uso de las palabras, la relaci??n entre ellas y la correcta construcci??n de expresiones.<br>
            Compuesto por:
            </p>
            <ul>
                <li>11 lecciones</li>
                <li>M??s de 410 ejercicios interactivos de comprensi??n y de pronunciaci??n</li>
                <li>Secci??n de estudio selectivo de las estructuras m??s importantes del ingl??s.</li>
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
            <p>Se desarrolla y se fortalece la comprensi??n de frases y expresiones de uso frecuente en situaciones cotidianas: salir de compras, visitar lugares tur??sticos, participar en reuniones.<br>
            Compuesto por:
            </p>
            <ul>
                <li>12 lecciones</li>
                <li>M??s de 225 ejercicios interactivos de comprensi??n y de pronunciaci??n</li>
                <li>30 proyecciones de situaciones comunes</li>
                <li>Laboratorio de pronunciaci??n y pr??ctica de vocabulario.</li>
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
            <p>Fortalece la capacidad de comunicaci??n oral al participar en diversas conversaciones.<br>
            Compuesto por:
            </p>
            <ul>
                <li>30 di??logos divididos en 12 lecciones.</li>
                <li>Los audios son primordiales para reforzar el nivel de comprensi??n auditiva</li>
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
        <li>8 Libros, encuadernaci??n r??stica</li>
        <li>1 p??ster plan de estudios</li>
        <li>Requisitos M??nimos del Sistema:</li>
        <ul>
            <li>Microsoft Windows?? 8, 8.1, y 10</li>
            <li>Mac OS?? 10.9, 10.10, 10.11 y 10.12</li>
            <li>Procesador doble n??cleo de 1GHz</li>
            <li>Unidad DVD-Rom</li>
            <li>Resoluci??n de pantalla 1280x720px</li>
        </ul>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">THE ULTIMATE ENGLISH COURSE LIGA DE LA JUSTICIA</p>
    <p class="description">CURSO INTERACTIVO PARA APRENDER INGL??S, DISFRUTANDO HORAS Y HORAS DE DIVERSI??N.<br>
    Incre??ble y ??nico curso de ingl??s cuyo uso de materiales exclusivos garantiza un aprendizaje sencillo, din??mico y divertido.<br>
    ??Como nunca lo imaginaste!<br>
    Aprender ingl??s con los S??per H??roes de la Liga de la Justicia te brinda horas de diversi??n, adem??s de que fomenta el desarrollo de las cuatro habilidades de aprendizaje: hablar, escuchar, escribir y leer.
    </p>
    <p class="titleParrafo">??C??MO FUNCIONA?</p>
    <p class="description">El curso tiene como base un libro de gram??tica, discos de audio y libros de trabajo para practicar la escritura. Despu??s de realizar la lecci??n, los estudiantes practican la lectura con los c??mics, se acostumbran auditivamente y ejercitan la pronunciaci??n del idioma con los discos de audio, ampl??an su vocabulario y, por ??ltimo, refuerzan conocimientos en los juegos interactivos de los discos multimedia.</p>
    `
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">grammar</li>
        <li id="tab2">workbooks</li>
        <li id="tab3">ex??menes y respuestas y manual para mi primera evaluaci??n curricular</li>
        <li id="tab4">mission</li>
    </ol>
    <div class="content">
        <img src="img/courses/idiomas/ligaJusticia/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Este libro de gram??tica descriptiva desarrolla los temas que los estudiantes deben conocer y aplicar dentro de la ense??anza b??sica e intermedia a lo largo de 12 unidades.<br>
            El hecho de estar redactado en espa??ol posibilita el aprendizaje para cualquier estudiante que desee dominar el idioma ingl??s, al ser su primer acercamiento a esta lengua extranjera.
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
            <p>Este libro de gram??tica descriptiva desarrolla los temas que los estudiantes deben conocer y aplicar dentro de la ense??anza b??sica e intermedia a lo largo de 12 unidades.<br>
            El hecho de estar redactado en espa??ol posibilita el aprendizaje para cualquier estudiante que desee dominar el idioma ingl??s, al ser su primer acercamiento a esta lengua extranjera.
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
            <p>Cinco libros de trabajo que integran ejercicios para reforzar los temas aprendidos en el libro de gram??tica. Cada Workbook ofrece actividades con las que el estudiante lograr?? desarrollar habilidades de deducci??n y an??lisis.<br>
            Cada palabra se podr?? escuchar posteriormente en el audio llamado Ultra Words.
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
            <p>Este recurso ofrece 12 ex??menes correspondientes a las unidades de Grammar. Aqu?? se encuentran las respuestas de cada examen y de los cinco Workbooks.<br>
            Esta alternativa permite un monitoreo adecuado: ofrece la oportunidad de calificar de manera tangible lo entendido, y con ello permanecer al pendiente de lo que realmente se ha aprendido.<br>
            Se trata de un manual que llevar?? de la mano a los estudiantes que deseen evaluar sus conocimientos del idioma a trav??s de mecanismos internacionales.<br>
            Aqu?? se encontrar?? una explicaci??n ??gil y sencilla de c??mo deben prepararse para acreditar esta importante evaluaci??n, aprovechando al m??ximo los recursos que ofrece el curso.
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
            <p>Es el audio que comprende cada una de las pistas en el libro de Grammar. Los tracks ofrecen una pronunciaci??n ??gil y din??mica, tal cual se habla el idioma en situaciones cotidianas.<br>
            Ambos Missions pueden ser descargados a cualquier reproductor port??til, para que el alumno est?? en constante contacto con la pronunciaci??n.
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
        <li>Resoluci??n de pantalla 1024 x 768 p??xeles</li>
        <li>Tarjeta de sonido</li>
        <li>Micr??fono, aud??fonos</li>
        <li>Acceso a internet</li>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">ALEMAN IDIOMAS SIN FRONTERAS.</p>
    <p class="description">??Emprenda un interesante viaje virtual a Alemania para aprender su idioma con el sistema ling????stico m??s completo e innovador!<br>
    Estudie alem??n al mismo tiempo que conoce c??mo vive la gente, en un maravilloso curso estructurado en forma de viaje por todo el pa??s. Es un sistema completo de aprendizaje que puede utilizar en la vida cotidiana, los viajes y la profesi??n.<br>
    Especialmente dise??ado para garantizar un aprendizaje efectivo, accesible y divertido. ??Totalmente interactivo!<br>
    Combinaci??n ideal entre tecnolog??a de vanguardia y contenido de alta calidad <span>??Sus caracter??sticas lo hacen el mejor en su g??nero!</span>
    </p>
    <p class="titleParrafo">MODERADOR EN VIDEO</p>
    <p class="description">Es un maestro virtual que lo guiar?? en el proceso de aprendizaje</p>
    <p class="titleParrafo">COMANDOS DE VOZ</p>
    <p class="description">D?? indicaciones al programa mediante su voz.</p>
    <p class="titleParrafo">SITUACIONES DE APRENDIZAJE AUT??NTICAS Y COTIDIANAS</p>
    <p class="description">Los di??logos de las historias en im??genes est??n estructurados en el lenguaje usual, a trav??s de ellos practicar?? la comprensi??n auditiva, lectora y la pronunciaci??n.</p>
    <p class="titleParrafo">CONTROL DE PRONUNCIACI??N</p>
    <p class="description">En este laboratorio aprender?? las reglas y las peculiaridades de una correcta pronunciaci??n, mediante una aplicaci??n de reconocimiento de voz que le ayudar?? a desarrollar una buena dicci??n.</p>
    <p class="titleParrafo">DICCIONARIO INTEGRADO</p>
    <p class="description">Vea la traducci??n de las palabras al dar un clic sobre ellas.</p>
    <p class="titleParrafo">??NDICE DE GRAM??TICA</p>
    <p class="description">Consulta r??pida de cualquier tema a estudiar, con ejemplos que le ayudar??n a una mejor comprensi??n.</p>
    <p class="titleParrafo">AN??LISIS DE ERRORES</p>
    <p class="description">El sistema de correcci??n es capaz de diferenciar entre errores ortogr??ficos, gramaticales, sint??cticos y de contenido.</p>
    <p class="titleParrafo">VENTANA INTELLIPLAN</p>
    <p class="description">Donde se graban los avances de usuario, lleva un registro del aprendizaje para que cada vez que inicie el programa lo lleve directamente a la lecci??n en que se qued??.</p>
    <p class="titleParrafo">AUDIO EXPORT PARA IPOD, REPRODUCTOR MP3 O CELULARES</p>
    <p class="description">Escuche las lecciones en cualquier momento del d??a, ya que puede bajarlas a su iPod o a alg??n reproductor de MP3 y tel??fonos celulares.</p>
    <p class="titleParrafo">REVISTA EN L??NEA</p>
    <p class="description">Le proporciona temas de inter??s y actualidad en el idioma que est?? estudiando; adem??s de un diccionario de alem??n y diversas lecturas para practicar.</p>
    <p class="titleParrafo">ASESOR??A V??A TELEF??NICA</p>
    <p class="description">Especialistas en el idioma ingl??s apoyar??n y orientar??n en las dudas al comunicarse a los siguientes tel??fonos: 55 5250 8099 ?? 800 024 9086, de Lunes a Viernes de 9:00 a 18:00 horas., mail: asesoriaidiomas@publicacionesint.com.mx</p>
    `
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">curso 1</li>
        <li id="tab2">audio curso 1</li>
        <li id="tab3">curso 2 nivel avanzado</li>
        <li id="tab4">audio curso 2</li>
        <li id="tab5">audio comunucaci??n</li>
        <li id="tab6">gram??tica</li>
        <li id="tab7">vocabulario</li>

    </ol>
    <div class="content">
        <img src="img/courses/idiomas/aleman/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Para principiantes y usuarios con nociones b??sicas del idioma<br>
            Programa de estudio dividido en:
            </p>
            <ul>
                <li>12 lecciones</li>
                <li>M??s de 400 ejercicios escritos y de pronunciaci??n</li>
                <li>4 horas de historias en im??genes distribuidas en un total de 25 di??logos</li>
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
            <p>Para principiantes y usuarios con nociones b??sicas del idioma<br>
            Programa de estudio dividido en:
            </p>
            <ul>
                <li>12 lecciones</li>
                <li>M??s de 400 ejercicios escritos y de pronunciaci??n</li>
                <li>4 horas de historias en im??genes distribuidas en un total de 25 di??logos</li>
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
            <p>??Escuche las lecciones en cualquier momento del d??a!<br>
            Se componen de los di??logos que integran las lecciones del curso 1, listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudar??n a reforzar la comprensi??n auditiva de las lecciones.
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
                <li>M??s de 250 ejercicios escritos y de pronunciaci??n</li>
                <li>Este nivel cuenta con 5 horas de historias en im??genes en un total de 25 di??logos.</li>
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
            <p>??Escuche las lecciones en cualquier momento del d??a!<br>
            Se componen de los di??logos que integran las lecciones del curso 2, listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudar??n a reforzar la comprensi??n auditiva de las lecciones.
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
            <p>??Escuche las lecciones en cualquier momento del d??a!<br>
            Se componen de los di??logos que integran las lecciones del curso de Comunicaci??n, listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudar??n a reforzar la comprensi??n auditiva de las lecciones.
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
            <p>Material dise??ado para profundizar en el conocimiento de la gram??tica alemana.<br>
            Se integra de 14 lecciones con los principios y normas gramaticales m??s usuales y cerca de 350 ejercicios, para aprender de una manera progresiva y did??ctica.
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
            <p>El m??todo de ense??anza integra un CD-ROM dedicado al vocabulario, indispensable para la construcci??n de conversaciones.<br>
            El disco de vocabulario se aleja de lo convencional, evitando concentrar el aprendizaje en las listas tradicionales; la propuesta se basa en ejercicios de memorizaci??n, traducci??n y dictado, en est?? ??ltimo la correcci??n ortogr??fica ser?? una prioridad.<br>
            Diez minutos despu??s de cada sesi??n marcaran la diferencia, ya que entre m??s l??xico se tenga, resultara m??s sencillo comprender las pistas de audio que el curso invita a descargar.
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
        <li>Resoluci??n de pantalla 1024 x 768 p??xeles</li>
        <li>Tarjeta de sonido</li>
        <li>Micr??fono, aud??fonos</li>
        <li>Acceso a internet</li>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">FRANCES IDIOMAS SIN FRONTERAS.</p>
    <p class="description">??Emprenda un interesante viaje virtual a Francia para aprender su idioma con el sistema ling????stico m??s completo e innovador!<br>
    Equilibrio perfecto entre tecnolog??a de vanguardia con alta calidad en contenidos<span>??Las caracter??sticas del curso lo hacen el mejor en su g??nero!</span><br>
    Se estructura en forma de viaje virtual por las principales regiones de Francia donde usted estudia el idioma al mismo tiempo que conoce c??mo vive la gente ??Disfrute de la inmersi??n sociocultural y la pr??ctica del idioma! Es un sistema completo de aprendizaje ling????stico que puede utilizar en la vida cotidiana, los viajes y la profesi??n. Especialmente dise??ado para garantizar un aprendizaje efectivo, accesible y divertido.<span> ??Totalmente interactivo!</span>
    </p>
    <p class="titleParrafo">MODERADOR EN VIDEO</p>
    <p class="description">Es un maestro virtual que lo guiar?? en el proceso de aprendizaje</p>
    <p class="titleParrafo">COMANDOS DE VOZ</p>
    <p class="description">D?? indicaciones al programa mediante su voz.</p>
    <p class="titleParrafo">SITUACIONES DE APRENDIZAJE AUT??NTICAS Y COTIDIANAS</p>
    <p class="description">Los di??logos de las historias en im??genes est??n estructurados en el lenguaje usual, a trav??s de ellos practicar?? la comprensi??n auditiva, lectora y la pronunciaci??n.</p>
    <p class="titleParrafo">CONTROL DE PRONUNCIACI??N</p>
    <p class="description">En este laboratorio aprender?? las reglas y las peculiaridades de una correcta pronunciaci??n, mediante una aplicaci??n de reconocimiento de voz que le ayudar?? a desarrollar una buena dicci??n.</p>
    <p class="titleParrafo">DICCIONARIO INTEGRADO</p>
    <p class="description">Vea la traducci??n de las palabras al dar un clic sobre ellas.</p>
    <p class="titleParrafo">??NDICE DE GRAM??TICA</p>
    <p class="description">Consulta r??pida de cualquier tema a estudiar, con ejemplos que le ayudar??n a una mejor comprensi??n.</p>
    <p class="titleParrafo">AN??LISIS DE ERRORES</p>
    <p class="description">El sistema de correcci??n es capaz de diferenciar entre errores ortogr??ficos, gramaticales, sint??cticos y de contenido.</p>
    <p class="titleParrafo">VENTANA INTELLIPLAN</p>
    <p class="description">Donde se graban los avances de usuario, lleva un registro del aprendizaje para que cada vez que inicie el programa lo lleve directamente a la lecci??n en que se qued??.</p>
    <p class="titleParrafo">AUDIO EXPORT PARA IPOD, REPRODUCTOR MP3 O CELULARES</p>
    <p class="description">Escuche las lecciones en cualquier momento del d??a, ya que puede bajarlas a su iPod o a alg??n reproductor de MP3 y tel??fonos celulares.</p>
    <p class="titleParrafo">REVISTA EN L??NEA</p>
    <p class="description">Le proporciona temas de inter??s y actualidad en el idioma que est?? estudiando; adem??s de un diccionario de alem??n y diversas lecturas para practicar.</p>
    <p class="titleParrafo">ASESOR??A V??A TELEF??NICA</p>
    <p class="description">Especialistas en el idioma ingl??s apoyar??n y orientar??n en las dudas al comunicarse a los siguientes tel??fonos: 55 5250 8099 ?? 800 024 9086, de Lunes a Viernes de 9:00 a 18:00 horas., mail: asesoriaidiomas@publicacionesint.com.mx</p>
    `
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">curso 1</li>
        <li id="tab2">audio curso 1</li>
        <li id="tab3">curso 2 nivel avanzado</li>
        <li id="tab4">audio curso 2</li>
        <li id="tab5">comunucaci??n</li>
        <li id="tab6">audio comunucaci??n</li>
        <li id="tab7">gram??tica</li>
        <li id="tab8">vocabulario</li>

    </ol>
    <div class="content">
        <img src="img/courses/idiomas/frances/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Para principiantes y usuarios con nociones b??sicas del idioma<br>
            Programa de estudio dividido en:
            </p>
            <ul>
                <li>12 lecciones</li>
                <li>M??s de 200 ejercicios escritos y de pronunciaci??n</li>
                <li>4 horas de historias en im??genes distribuidas en un total de 35 di??logos</li>
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
            <p>Para principiantes y usuarios con nociones b??sicas del idioma<br>
            Programa de estudio dividido en:
            </p>
            <ul>
                <li>12 lecciones</li>
                <li>M??s de 200 ejercicios escritos y de pronunciaci??n</li>
                <li>4 horas de historias en im??genes distribuidas en un total de 35 di??logos</li>
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
            <p>??Escuche las lecciones en cualquier momento del d??a!<br>
            Contiene todos los di??logos que integran las lecciones del curso 1 listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudar??n a reforzar la comprensi??n auditiva de las lecciones.<br>
            Ll??velos con usted mientras viaja, hace ejercicio, sale a caminar...
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
                <li>M??s de 200 ejercicios escritos y de pronunciaci??n</li>
                <li>Este nivel cuenta con 5 horas de historias en im??genes en un total de 30 di??logos</li>
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
            <p>??Escuche las lecciones en cualquier momento del d??a!<br>
            Se componen de los di??logos que integran las lecciones del curso 2, listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudar??n a reforzar la comprensi??n auditiva de las lecciones.<br>
            Ll??velos con usted mientras viaja, hace ejercicio, sale a caminar...
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
            <p>Principiantes y usuarios con nociones b??sicas del idioma.<br>
            Programa compuesto por 13 lecciones con m??s de 150 ejercicios escritos y de pronunciaci??n, tiene 3 horas de historias en im??genes en un total de 30 di??logos.
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
            <p>??Escuche las lecciones en cualquier momento del d??a!<br>
            Se componen de los di??logos que integran las lecciones del cursos de Comunicaci??n, listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudar??n a reforzar la comprensi??n auditiva de las lecciones.
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
            <p>Material dise??ado para profundizar en el conocimiento de la gram??tica francesa.<br>
            Se integra de 11 lecciones con los principios y normas gramaticales m??s usuales y cerca de 200 ejercicios, para aprender de una manera progresiva y did??ctica.
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
            <p>El m??todo de ense??anza integra un CD-ROM dedicado al vocabulario, indispensable para la construcci??n de conversaciones.<br>
            El disco de vocabulario se aleja de lo convencional, evitando concentrar el aprendizaje en las listas tradicionales; la propuesta se basa en ejercicios de memorizaci??n, traducci??n y dictado, en est?? ??ltimo la correcci??n ortogr??fica ser?? una prioridad.<br>
            Diez minutos despu??s de cada sesi??n marcaran la diferencia, ya que entre m??s l??xico se tenga, resultara m??s sencillo comprender las pistas de audio que el curso invita a descargar.
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
        <li>Resoluci??n de pantalla 1024 x 768 p??xeles</li>
        <li>Tarjeta de sonido</li>
        <li>Micr??fono, aud??fonos</li>
        <li>Acceso a internet</li>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">ITALIANO IDIOMAS SIN FRONTERAS.</p>
    <p class="description">??Aprenda italiano a trav??s de un interesante viaje virtual a Italia, con el sistema ling????stico m??s completo e innovador!<br>
    Estudie italiano y al mismo tiempo conozca c??mo vive la gente del pa??s, ya que el curso se estructura en forma de viaje.<br>
    Es un sistema completo de aprendizaje ling????stico que puede utilizar en la vida cotidiana, los viajes y la profesi??n.<br>
    Especialmente dise??ado para garantizar un aprendizaje efectivo, accesible y divertido. ??Totalmente interactivo!<br>
    Es la combinaci??n ideal entre tecnolog??a de vanguardia y contenido de alta calidad. ??Sus caracter??sticas lo hacen el mejor en su g??nero!
    </p>
    <p class="titleParrafo">MODERADOR EN VIDEO</p>
    <p class="description">Es un maestro virtual que lo guiar?? en el proceso de aprendizaje</p>
    <p class="titleParrafo">COMANDOS DE VOZ</p>
    <p class="description">D?? indicaciones al programa mediante su voz.</p>
    <p class="titleParrafo">SITUACIONES DE APRENDIZAJE AUT??NTICAS Y COTIDIANAS</p>
    <p class="description">Los di??logos de las historias en im??genes est??n estructurados en el lenguaje usual, a trav??s de ellos practicar?? la comprensi??n auditiva, lectora y la pronunciaci??n.</p>
    <p class="titleParrafo">CONTROL DE PRONUNCIACI??N</p>
    <p class="description">En este laboratorio aprender?? las reglas y las peculiaridades de una correcta pronunciaci??n, mediante una aplicaci??n de reconocimiento de voz que le ayudar?? a desarrollar una buena dicci??n.</p>
    <p class="titleParrafo">DICCIONARIO INTEGRADO</p>
    <p class="description">Vea la traducci??n de las palabras al dar un clic sobre ellas.</p>
    <p class="titleParrafo">??NDICE DE GRAM??TICA</p>
    <p class="description">Consulta r??pida de cualquier tema a estudiar, con ejemplos que le ayudar??n a una mejor comprensi??n.</p>
    <p class="titleParrafo">AN??LISIS DE ERRORES</p>
    <p class="description">El sistema de correcci??n es capaz de diferenciar entre errores ortogr??ficos, gramaticales, sint??cticos y de contenido.</p>
    <p class="titleParrafo">VENTANA INTELLIPLAN</p>
    <p class="description">Donde se graban los avances de usuario, lleva un registro del aprendizaje para que cada vez que inicie el programa lo lleve directamente a la lecci??n en que se qued??.</p>
    <p class="titleParrafo">AUDIO EXPORT PARA IPOD, REPRODUCTOR MP3 O CELULARES</p>
    <p class="description">Escuche las lecciones en cualquier momento del d??a, ya que puede bajarlas a su iPod o a alg??n reproductor de MP3 y tel??fonos celulares.</p>
    <p class="titleParrafo">REVISTA EN L??NEA</p>
    <p class="description">Le proporciona temas de inter??s y actualidad en el idioma que est?? estudiando; adem??s de un diccionario de alem??n y diversas lecturas para practicar.</p>
    <p class="titleParrafo">ASESOR??A V??A TELEF??NICA</p>
    <p class="description">Especialistas en el idioma ingl??s apoyar??n y orientar??n en las dudas al comunicarse a los siguientes tel??fonos: 55 5250 8099 ?? 800 024 9086, de Lunes a Viernes de 9:00 a 18:00 horas., mail: asesoriaidiomas@publicacionesint.com.mx</p>
    `
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">curso 1</li>
        <li id="tab2">audio curso 1</li>
        <li id="tab3">curso 2 nivel avanzado</li>
        <li id="tab4">audio curso 2</li>
        <li id="tab5">comunucaci??n</li>
        <li id="tab6">audio comunucaci??n</li>
        <li id="tab7">gram??tica</li>
        <li id="tab8">vocabulario</li>

    </ol>
    <div class="content">
        <img src="img/courses/idiomas/italiano/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Para principiantes y usuarios con nociones b??sicas del idioma<br>
            Programa de estudio dividido en:
            </p>
            <ul>
                <li>12 lecciones</li>
                <li>M??s de 300 ejercicios escritos y de pronunciaci??n</li>
                <li>4 horas de historias en im??genes distribuidas en un total de 25 di??logos</li>
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
            <p>Para principiantes y usuarios con nociones b??sicas del idioma<br>
            Programa de estudio dividido en:
            </p>
            <ul>
                <li>12 lecciones</li>
                <li>M??s de 300 ejercicios escritos y de pronunciaci??n</li>
                <li>4 horas de historias en im??genes distribuidas en un total de 25 di??logos</li>
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
            <p>??Escuche las lecciones en cualquier momento del d??a!<br>
            Contiene todos los di??logos que integran las lecciones del curso 1 listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudar??n a reforzar la comprensi??n auditiva de las lecciones.Se componen de los di??logos que integran las lecciones del curso 1, listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudar??n a reforzar la comprensi??n auditiva de las lecciones.
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
                <li>M??s de 300 ejercicios escritos y de pronunciaci??n</li>
                <li>Este nivel cuenta con 5 horas de historias en im??genes en un total de 25 di??logos</li>
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
            <p>??Escuche las lecciones en cualquier momento del d??a!<br>
            Se componen de los di??logos que integran las lecciones del curso 2, listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudar??n a reforzar la comprensi??n auditiva de las lecciones.<br>
            Ll??velos con usted mientras viaja, hace ejercicio, sale a caminar...
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
            <p>Principiantes y usuarios con nociones b??sicas del idioma.<br>
            Programa compuesto por 9 lecciones con m??s de 200 ejercicios escritos y de pronunciaci??n, tiene 3 horas de historias en im??genes en un total de 25 di??logos.
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
            <p>??Escuche las lecciones en cualquier momento del d??a!<br>
            Se componen de los di??logos que integran las lecciones del cursos de Comunicaci??n, listos para exportarlos y escucharlos en su MP3, iPod o celular, que le ayudar??n a reforzar la comprensi??n auditiva de las lecciones.
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
            <p>Material dise??ado para profundizar en el conocimiento de la gram??tica italiana.<br>
            Es un material dise??ado para profundizar en el conocimiento de la gram??tica del idioma italiano. Se integra de 13 lecciones con los principios y normas gramaticales m??s usuales y cerca de 350 ejercicios, para aprender de una manera progresiva y did??ctica.
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
            <p>El m??todo de ense??anza integra un CD-ROM dedicado al vocabulario, indispensable para la construcci??n de conversaciones.<br>
            El disco de vocabulario se aleja de lo convencional, evitando concentrar el aprendizaje en las listas tradicionales; la propuesta se basa en ejercicios de memorizaci??n, traducci??n y dictado, en est?? ??ltimo la correcci??n ortogr??fica ser?? una prioridad.<br>
            Diez minutos despu??s de cada sesi??n marcaran la diferencia, ya que entre m??s l??xico se tenga, resultara m??s sencillo comprender las pistas de audio que el curso invita a descargar.
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