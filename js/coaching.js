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
    const showElement = 750;
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
}, 100);




/*************************************************
GENERA EL CONTENIDO DE CADA UNO DE LOS MATERIALES
**************************************************/


/*
GENERA EL CONTENIDO DEL MATERIAL FORMACION ENTIEMPOS DE CAMBIOS
*/
const formTimeChange = () => {
    setActiveCourse();
    setCourse()[5].children[0].classList.add('activeMaterial')
    /* CAMBIA LA IMAGEN Y EL resume DEL CURSO   */
    setCourse()[0].src = "img/courses/capacitacionCoaching/formacionEnTiempoDeCambio/formacion.png"
    setCourse()[1].innerHTML = `
    <p class="titleResume">Glosario</p>
    <ul>
        <li>Vasto cat??logo con definici??n de palabras.</li>
        <li>ISBN 978-607-458-011-2</li>
        <li>Formato Libros, CD.</li>
        <li>Ficha tecnica</li>
        <ul>
            <li>5 vol??menes</li>
            <li>608 p??ginas en total</li>
            <li>Formato 19.5 x 27 cm</li>
            <li>Interiores a todo color en papel couch?? mate de 115 gr</li>
            <li>Encuadernaci??n en pasta dura plastificada</li>
        </ul>
    </ul>
    `
    /* CAMBIA ARTICLE presentacion */
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">Pr??cticas de desarrollo integral: Ser, Familia, Empresa y Sociedad</p>
    <p class="description">El instrumento ideal para un excelente desempe??o en los diferentes ??mbitos de la vida.</p>
    <p class="titleParrafo">Textos complementarios</p>
    <p class="description">Informaci??n interesante relacionada con los temas y contenidos de cada secci??n.</p>
    <p class="titleParrafo">Cuestionarios y evaluaciones</p>
    <p class="description">El lector tendr?? oportunidad de reafirmar sus conocimientos.</p>
    <p class="titleParrafo">Ejercicios y actividades</p>
    <p class="description">Para poner manos a la obra, a trav??s de ejercicios simples, que permitir??n mover las emociones y la raz??n para llegar a la conciencia de uno mismo y del entorno.</p>
    <p class="titleParrafo">Lecturas y reflexiones</p>
    <p class="description">Textos que tienen la finalidad de alimentar las ideas y los conceptos sobre las diversas esferas que rodean a las personas: individual, familiar, emocional, laboral e institucional.</p>
    <p class="titleParrafo">ISBN 978-607-458-011-2</p>
    `
    /* CAMBIA EL CONTENIDO DE material */
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">liderazgo e influencia</li>
        <li id="tab2">solucion de conflictos y negociacion</li>
        <li id="tab3">salud emocional y comunicacion</li>
        <li id="tab4">equilibrio: profesion y familia</li>
        <li id="tab5">logro de metas</li>
        <li id="tab6">sonidos del exito y la reflexion</li>
    </ol>
    <div class="content">
        <img src="img/courses/capacitacionCoaching/formacionEnTiempoDeCambio/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>??Est?? dispuesto a conocer sus capacidades y confiar en su poder?, en estos tiempo se ha hablado mucho sobre el l??der, ya que la falta de una figura respetable ha dejado al descubierto la desconfianza de las personas que conforman organizaciones y comunidades.<br>
                El l??der no es una figura m??tica, es un conocedor de las organizaciones sociales quien equilibra el talento con autoridad y orienta las acciones comunes hacia la obtenci??n de resultados eficaces; es un gestor de recursos. Si bien concentra poder, al encabezar actividades y dirigir grupos, siempre lo hace bajo una escala de valores que toma en cuenta a la cultura organizacional y a sus integrantes.<br>
                Este volumen ayudar?? a conocer el tipo de liderazgo ideal para sus necesidades; recuerde: un l??der no nace, se hace.</p>
            <p class="important">ISBN 978-607-458-012-9</p>
        </div>
    </div>
    <span id="uls"></span>
    `
    setActiveTabs();
    setCourse()[6].children[0].classList.add('activeMaterial')


    /* CAMBIA EL CONTENT DE LOS TABS AL DAR CLICK */
    document.querySelector('#tab1').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[0].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/formacionEnTiempoDeCambio/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>??Est?? dispuesto a conocer sus capacidades y confiar en su poder?, en estos tiempo se ha hablado mucho sobre el l??der, ya que la falta de una figura respetable ha dejado al descubierto la desconfianza de las personas que conforman organizaciones y comunidades.<br>
                El l??der no es una figura m??tica, es un conocedor de las organizaciones sociales quien equilibra el talento con autoridad y orienta las acciones comunes hacia la obtenci??n de resultados eficaces; es un gestor de recursos. Si bien concentra poder, al encabezar actividades y dirigir grupos, siempre lo hace bajo una escala de valores que toma en cuenta a la cultura organizacional y a sus integrantes.<br>
                Este volumen ayudar?? a conocer el tipo de liderazgo ideal para sus necesidades; recuerde: un l??der no nace, se hace.</p>
            <p class="important">ISBN 978-607-458-012-9</p>
        </div>
        `
    })
    document.querySelector('#tab2').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[1].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/formacionEnTiempoDeCambio/2.png" alt="" id="imgContent">
        <div id="desContent">
            <p>En m??ltiples ocasiones todos nos hemos enfrentado a conflictos y problemas que parecen no tener soluci??n o la que se considera, es poco satisfactoria. Es aqu?? donde se debe pensar con claridad para optar por la m??s adecuada. Precisamente, este libro proporciona ideas, reflexiones y nuevos caminos para encarar los retos constantes a los que se enfrenta cualquier persona en su vida cotidiana.<br>
            Conozca los mecanismos que transforman las dificultades en oportunidades de progreso, pero adem??s, tambi??n aprenda a plantear estrategias de negociaci??n en circunstancias delicadas en las que ganar, a veces es perder.<br>
            </p>
            <p class="important">ISBN 978-607-458-013-6</p>
        </div>
        `
    })
    document.querySelector('#tab3').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[2].classList.add('activeMaterial') 
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/formacionEnTiempoDeCambio/3.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Este volumen re??ne los elementos base desde los que el lector podr?? evolucionar su imagen y mejorar su esquema corporal a partir de la conciencia de las emociones, as?? como de la energ??a que emanan.<br>
            Pocas veces nos detenemos a pensar en las heridas emocionales que han mellado nuestro esp??ritu y que se traducen en problemas de autoaceptaci??n, lo que afecta la forma de relacionarnos con los dem??s y provoca que la comunicaci??n pierda eficacia, no s??lo en el ??mbito personal, sino tambi??n en el organizacional.<br>
            Al tener a la mano t??cnicas de introspecci??n y mec??nicas de manejo emocional y cambio de actitud, se tendr?? la llave a una buena y m??s sana relaci??n con el mundo y consigo mismo, que se traducir?? en una mejor posici??n y desarrollo en todas sus actividades.
            </p>
            <p class="important">ISBN 978-607-458-014-3</p>
        </div>
        `
    })
    document.querySelector('#tab4').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[3].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/formacionEnTiempoDeCambio/4.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Los ??mbitos profesional y familiar son dos ??reas vitales para el ser humano, sin embargo en la actualidad es com??n que parezcan poco combinables, lo que ocasiona que una de las dos se vea mellada en su desempe??o; para lograr la conciliaci??n entre ??stas es necesaria una reflexi??n m??s profunda sobre nuestra funci??n en ambas esferas, por un lado la importancia de la constante capacitaci??n (acad??mica o autodidacta) y el conocimiento de los sectores econ??micos, y por otro la necesidad de trascender a trav??s de la familia.<br>
            Este volumen est?? destinado a dar todos los elementos para comprender que estas dos instituciones aportan a la sociedad elementos igualmente valiosos, que potencian el cambio en todos los sentidos y que deben convivir en armon??a en la praxis diaria de cada uno.<br>
            </p>
            <p class="important">ISBN 978-607-458-015-0</p>
        </div>
        `
    })
    document.querySelector('#tab5').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[4].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/formacionEnTiempoDeCambio/5.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Iniciar un camino siempre es f??cil, continuarlo hasta sus ??ltimas consecuencias requiere constancia, dedicaci??n, esfuerzo y tenacidad.<br>
            En este traj??n se inmiscuye la motivaci??n que interviene de manera determinante en los procesos que se activan para alcanzar los objetivos personales, grupales, institucionales y sociales.<br>
            El presente libro proporcionar?? los datos y t??cnicas espec??ficas para incrementar la motivaci??n que lo impulsar?? a alcanzar los objetivos propuestos para que nunca m??s se dejen metas sin cruzar.
            </p>
            <p class="important">ISBN 978-607-458-016-7</p>
        </div>
        `
    })
    document.querySelector('#tab6').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[5].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/formacionEnTiempoDeCambio/6.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Esta producci??n musical favorece la reflexi??n, estimula el pensamiento positivo. Nos prepara para crear estados mentales precisos, centrados, intensos y duraderos.<br>
            A trav??s de ??as t??cnicas sonoras y narraciones logramos visualizar, reflexionar y planificar.<br>
            Nos apoya en saber rectificar y cambiar, tomar decisiones y asumir nuestra responsabilidad.
            </p>
        </div>
        `
    })
}

formTimeChange()



/*
GENERA EL CONTENIDO DEL MATEIRAL SITEMA INTEGRAL 
*/
const sisIntegral = () => {
    setActiveCourse();
    setCourse()[5].children[1].classList.add('activeMaterial')
    setCourse()[0].src = "img/courses/capacitacionCoaching/sistemaIntegral/sistema.png" 
    setCourse()[1].innerHTML = `
    <p class="titleResume">Formato: Libro + CD ROM</p>
    <p>Ficha t??cnica</p>
    <ul>
        <li>Material interactivo: 3 CD-ROM</li>
        <li>Taquistoscopio</li>
        <li>Cron??metro</li>
        <li>Formato 21.5 x 28 cm.</li>
        <li>Interiores impresos a color en papel couch?? mate de 118 grs.</li>
        <li>Gu??a de Evaluaci??n inicial con encuadernaci??n r??stica</li>
        <li>3 libros de pasta dura con espiral pl??stico</li>
        <li>Requerimientos m??nimos del sistema:</li>
        <ul>
            <li>Unidad de CD-ROM/DVD</li>
            <li>Windows Vista, 7, 8, 8.1 y 10</li>
            <li>Mac OS 10.4 o superior/li>
            <li>Procesador 1GHz</li>
            <li>Memoria RAM 1 GB, m??nimo</li>
            <li>Resoluci??n m??nima de pantalla 1024 x 768 p??xeles</li>
        </ul>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">Pr??cticas de desarrollo integral: Ser, Familia, Empresa y Sociedad</p>
    <p class="description">El contenido del Sistema integral de lectura r??pida, comprensi??n y memorizaci??n, le ofrece una ense??anza eficiente a trav??s de estrategias, habilidades y nuevas t??cnicas especializadas de lectura con las que sin duda aumentar?? la velocidad, comprensi??n y retenci??n de la informaci??n. <br>
    Otro beneficio que el sistema proporciona es el conocimiento de t??cnicas de apoyo que permitir??n aprovechar hasta el m??s m??nimo detalle del texto, agilizar los movimientos oculares de tal manera que podr?? localizar datos espec??ficos en cuesti??n de segundos y ser?? capaz de retener las ideas principales. <br>
    Este m??todo de lectura est?? dise??ado para cualquier tipo de persona que sepa leer de manera tradicional y que tenga el inter??s de alcanzar velocidades mayores a 1900 palabras por minuto, con un entendimiento total de la informaci??n; sin importar la edad, profesi??n o condici??n social.<br>
    Algunas otras ganancias que se obtendr??n al modificar h??bitos y vicios del proceso lector son:<br></p>
    <ul id="uls">
        <li>La oportunidad de leer todo lo que quiera en un menor tiempo.</li>
        <li>Entender cualquier tipo de material de lectura sin importar la extensi??n.</li>
        <li>Recordar toda la informaci??n y datos precisos que se leyeron utiliz??ndola no s??lo en el momento sino en posteriores ocasiones.</li>
        <li>Desarrollar, fortalecer y sobre todo disfrutar el h??bito de la lectura.</li>
        <li>Poder estudiar de una manera m??s eficaz.</li>
        <li>Poder lograr un pensamiento m??s ??gil y efectivo.</li>
        <li>Tener mayores conocimientos sobre temas diversos.</li>
        <li>Lograr un mejor nivel cultural.</li>
        <li>Tomar mejores decisiones.</li>
        <li>Tener mejores temas de conversaci??n si no se sabe bailar.</li>
        <li>Tener conocimiento de m??s palabras para usar en una conversaci??n.</li>
        <li>Poder preparar con menos tiempo una exposici??n escolar o laboral.</li>
        <li>Poder localizar datos espec??ficos en menos tiempo.</li>
    </ul>
    <p class="titleParrafo">ISBN 978-607-458-089-1</p>
    `
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">evaluacion inicial</li>
        <li id="tab2">ciclo 1 velocidad - persepcion: desarrollo de habilidades perceptivas</li>
        <li id="tab3">ciclo 2 comprension total: atencion y contentracion</li>
        <li id="tab4">ciclo 3 retencion total: memoria</li>
        <li id="tab5">multimedia</li>
        <li id="tab6">taquitoscopio</li>
    </ol>
    <div class="content">
        <img src="img/courses/capacitacionCoaching/sistemaIntegral/1.png"  alt="" id="imgContent">
        <div id="desContent">
            <p>Ahora es momento de cambiar esa lectura tradicional, sil??bica y pausada que se nos ense???? desde la infancia, en su momento fue l??gica e incluso suficiente, pero actualmente no se adecua al ritmo y a las necesidades intelectuales de la era de la informaci??n. Hoy en d??a se nos demanda ser devoradores de textos, pero no s??lo leer r??pido es suficiente sino leer y comprender cualquier tipo de informaci??n. Por ello, es de suma importancia convertirse en un lector altamente efectivo.</p>            
        </div>
    </div>
    `
    setActiveTabs();
    setCourse()[6].children[0].classList.add('activeMaterial')

    document.querySelector('#tab1').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[0].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/sistemaIntegral/1.png"  alt="" id="imgContent">
        <div id="desContent">
            <p>Ahora es momento de cambiar esa lectura tradicional, sil??bica y pausada que se nos ense???? desde la infancia, en su momento fue l??gica e incluso suficiente, pero actualmente no se adecua al ritmo y a las necesidades intelectuales de la era de la informaci??n. Hoy en d??a se nos demanda ser devoradores de textos, pero no s??lo leer r??pido es suficiente sino leer y comprender cualquier tipo de informaci??n. Por ello, es de suma importancia convertirse en un lector altamente efectivo.</p>            
        </div>
        `
    })
    document.querySelector('#tab2').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[1].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/sistemaIntegral/2.png"  alt="" id="imgContent">
        <div id="desContent">
            <p>En este primer ciclo del Sistema Integral de Lectura R??pida comprensi??n y memorizaci??n adem??s de mejorar su habilidad visual perceptiva, desarrollar?? otras habilidades que le ayudar??n a perfeccionar muchos aspectos de su vida diaria, por ejemplo: su nivel de atenci??n y concentraci??n, que a su vez le brindar?? la capacidad de poder realizar varias actividades al mismo tiempo.<br>
            En este ciclo el objetivo principal es que consiga una r??pida percepci??n de palabras, as?? como tambi??n, identificar y eliminar todos aquellos ruidos, distractores y malos h??bitos que afectan su proceso lector.
            </p>
            <p class="important">ISBN 978-607-458-046-4</p>
        </div>
        `
    })
    document.querySelector('#tab3').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[2].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/sistemaIntegral/3.png"  alt="" id="imgContent">
        <div id="desContent">
            <p>Leer es una tarea que debe desarrollarse con eficacia y eficiencia, pues de ello depende que en el futuro estemos frente a individuos con capacidades efectivas para el estudio, la comprensi??n y satisfacci??n plena en la realizaci??n de sus actividades encomendadas. Si no se aprende a leer de forma adecuada, la vida del individuo tendr?? rezagos, fallas en la manera de estudiar, escasa cultura, posibles fracasos, lectores incompetentes, entre otras causas.<br>
            Este ciclo tiene como prop??sito mejorar progresivamente su comprensi??n de lectura por medio de ejercicios totalmente planeados e id??neos. Tambi??n se le proporcionan estrategias y t??cnicas que le permitir??n leer con los dos hemisferios del cerebro, as?? conseguir?? un cambio radical en su manera tradicional de lectura.
            </p>
            <p class="important">ISBN 978-607-458-091-4</p>
        </div>
        `
    })
    document.querySelector('#tab4').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[3].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/sistemaIntegral/4.png"  alt="" id="imgContent">
        <div id="desContent">
            <p>En este tercer ciclo se seguir??n ejercitando todas las habilidades, estrategias, t??cnicas y capacidades que ha aprendido durante las lecciones anteriores; adem??s, se incluyen nuevas t??cnicas de apoyo (mnemotecnia) para mejorar la memoria, t??cnicas para que en cuesti??n de instantes se pueda obtener la idea general del texto utilizando toda la informaci??n contenida en el mismo, as?? como para buscar datos espec??ficos, organizar y retener la informaci??n de cualquier texto en tan s??lo unos segundos, optimizando de esta manera el tiempo dedicado al estudio diario.<br>
            La habilidad a trabajar en este ciclo es la retenci??n total, combin??ndola con la rapidez y comprensi??n. A partir de este momento la forma de leer ser?? otra, por lo que no podr?? retroceder a los malos h??bitos y siempre leer?? con las t??cnicas, habilidades y estrategias aprendidas, ya que de esto depende el verdadero dominio de las mismas.
            </p>
            <p class="important">ISBN 978-607-458-8</p>
        </div>
        `
    })
    document.querySelector('#tab5').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[4].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/sistemaIntegral/5.png"  alt="" id="imgContent">
        <div id="desContent">
            <p>3 CD-ROM Material interactivo de apoyo<br>
            Dise??ados l??dicamente para reforzar la metodolog??a y el aprendizaje de las lecciones de cada uno de los ciclos.<br>
            Cada CD contiene un breve resumen de las lecciones y ejercicios interactivos de apoyo que especifican los objetivos a cubrir, el modo de relaci??n y el tiempo ideal para su ejecuci??n.
            </p>
            <p class="important">ISBN 978-607-458-016-7</p>
        </div>
        `
    })
    document.querySelector('#tab6').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[5].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/sistemaIntegral/6.png"  alt="" id="imgContent">
        <div id="desContent">
            <p>Para el desarrollo de cursos, programas o sistemas de lectura veloz ha sido muy importante la utilizaci??n de un instrumento llamado taquistoscopio que etimol??gicamente proviene del griego takhistos, significa el m??s veloz y de scopein que significa ver; es decir, ver r??pidamente.<br>
            Este instrumento lo utiliz?? un grupo de pilotos de la fuerza a??rea estadounidense, pues se requer??a reconocer r??pidamente aviones enemigos durante la Segunda Guerra Mundial en el entrenamiento de pilotos de combate. Gracias a esto se descubri?? que hab??a personas capaces de distinguir im??genes con proyecciones de media mil??sima de segundo. Fue en la d??cada de los cincuenta cuando una profesora norteamericana, Evelyn Wood, adapt?? las t??cnicas del taquistoscopio a un aparato port??til que permiti?? incrementar la velocidad de lectura y desde entonces esta herramienta ha sido empleada en este tipo de cursos.
            </p>
        </div>
        `
    })
}



/*
GENERA EL CONTENIDO DEL MATERIAL LIDERAZGO EN ACCION
 */
const liderazgoAccion = () => {
    setActiveCourse();
    setCourse()[5].children[2].classList.add('activeMaterial')
    setCourse()[0].src = "img/courses/capacitacionCoaching/liderazgoEnAccion/liderazgo.png" 
    setCourse()[1].innerHTML = `
    <p class="titleResume">Formato</p>
    <ul>
        <li>5 vol??menes</li>
        <li>Ficha t??cnica</li>
        <ul>
            <li>5 tomos</li>
            <li>Formato 19.6 x 26.8 cm</li>
            <li>Interiores en papel semimate de 100 grs. impreso a color/li>
            <li>Din??mico y atractivo material gr??fico</li>
            <li>Encuadernados en pasta dura a color con plastificado brillante</li>
        </ul>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">Liderazgo en accion</p>
    <p class="description">Obra que le brinda un extenso marco de referencia para desarrollar un pensamiento positivo y fortalecer su crecimiento personal. Contiene ideas pr??cticas y herramientas significativas que le permitir??n transformar los acontecimientos en grandes oportunidades de crecimiento. Dirigida a j??venes, profesionistas, docentes, empresarios y padres de familia.</p>
    <ul id="uls">
        <li>Se destacan vivencias y experiencias de aut??nticos l??deres de todos los tiempos</li>
        <li>Se exponen las mejores alternativas de comunicaci??n para que usted las conozca y pr??ctique con el fin de lograr la reciprocidad de valiosas y ben??ficas influencias</li>
        <li>Frases de personajes c??lebres apoyan los temas</li>
    </ul>
    <p class="titleParrafo">ISBN 978-968-418-333-9</p>
    `
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">el lider: vision, mision y accion</li>
        <li id="tab2">valores</li>
        <li id="tab3">relaciones</li>
        <li id="tab4">creatividad y cambio</li>
        <li id="tab5">inteligencia emocional</li>
    </ol>
    <div class="content">
        <img src="img/courses/capacitacionCoaching/liderazgoEnAccion/1.png"   alt="" id="imgContent">
        <div id="desContent">
            <p>Adquiera las cualidades que poseen los l??deres, y con las cuales influyen en quienes los rodean.</p>            
            <p class="important">ISBN 978-968-418-334-6</p>
        </div>
    </div>
    `
    setActiveTabs();
    setCourse()[6].children[0].classList.add('activeMaterial')
    document.querySelector('#tab1').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[0].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/liderazgoEnAccion/1.png"   alt="" id="imgContent">
        <div id="desContent">
            <p>Adquiera las cualidades que poseen los l??deres, y con las cuales influyen en quienes los rodean.</p>            
            <p class="important">ISBN 978-968-418-334-6</p>
        </div>
        `
    })
    document.querySelector('#tab2').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[1].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/liderazgoEnAccion/2.png"   alt="" id="imgContent">
        <div id="desContent">
            <p>La honestidad, la disciplina, la perseverancia y el optimismo son algunas de las caracter??sticas de un verdadero l??der.</p>
            <p class="important">ISBN 978-968-418-335-3</p>
        </div>
        `
    })
    document.querySelector('#tab3').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[2].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/liderazgoEnAccion/3.png"   alt="" id="imgContent">
        <div id="desContent">
            <p>La asertividad, la confianza en los dem??s, la buena comunicaci??n, entre otras caracter??sticas, colaboran para que podamos relacionarnos de forma positiva con quienes nos rodean.</p>
            <p class="important">ISBN 978-968-418-336-0</p>
        </div>
        `
    })
    document.querySelector('#tab4').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[3].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/liderazgoEnAccion/4.png"   alt="" id="imgContent">
        <div id="desContent">
            <p>La imaginaci??n, la creatividad y una mente abierta son poderosas armas para vencer los obst??culos de la vida.</p>
            <p class="important">ISBN 978-968-418-337-7</p>
        </div>
        `
    })
    document.querySelector('#tab5').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[4].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/liderazgoEnAccion/5.png"   alt="" id="imgContent">
        <div id="desContent">
            <p>Por medio de la inteligencia emocional, aprenda a elegir las sensaciones que desea experimentar y modifique las emociones negativas.</p>
            <p class="important">ISBN 978-968-418-338-4</p>
        </div>
        `
    })
}



/*
GENERA EL CONTENIDO DEL MATERIAL DESTREZA MENTAL
 */
const destreza = () => {
    setActiveCourse();
    setCourse()[5].children[3].classList.add('activeMaterial')
    setCourse()[0].src = "img/courses/capacitacionCoaching/destrezaMental/destreza.png"  
    setCourse()[1].innerHTML = `
    <p class="titleResume">Contenido:</p>
    <ul>
        <li>4 CD ROM</li>
        <li>1 Libro, encuadernaci??n tapa dura.</li>
        <li>2 Libros, encuadernaci??n r??stica</li>
        <li>Juego ???Desaf??o Mental??? (1 tablero y 75 tarjetas).</li>
        <li>Juego ?????Qu?? me cuentas???? (50 tarjetas, 1 dado y 1 cron??metro).</li>
        <li>Requerimientos m??nimos del sistema:</li>
        <ul>
            <li>Microsoft Windows?? 8, 8.1 y 10</li>
            <li>Mac OS?? 10.5 o superior.</li>
            <li>Procesador DUAL CORE de 2 GHz.</li>
            <li>2 GB RAM</li>
            <li>Resoluci??n de pantalla 1280??720 pixeles.</li>
            <li>Video 512 MB.</li>
            <li>Tarjeta de sonido</li>
            <li>Espacio m??nimo requerido en disco duro de 5 GB.</li>
            <li>Unidad lectora de CD/DVD-ROM.</li>
        </ul>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">desafios para esta mentalmente en forma</p>
    <p class="description">Sistema que le permite incrementar sus habilidades cerebrales mediante ejercicios debidamente planeados y estructurados. Se entrenan los hemisferios izquierdo y derecho del cerebro, gracias al fortalecimiento de cinco ??reas especializadas.</p>
    <ul id="uls">
        <li>Lenguaje</li>
        <li>Memoria</li>
        <li>Atention</li>
        <li>Visioespacialidad</li>
        <li>Razonamiento</li>
    </ul>
    <p class="titleParrafo">ISBN 978-607-458-089-1</p>
    `
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">orientacion inicial</li>
        <li id="tab2">herramientas para sus sentidos</li>
        <li id="tab3">herramientas l??dicas</li>
        <li id="tab4">tablero</li>
    </ol>
    <div class="content">
        <img src="img/courses/capacitacionCoaching/destrezaMental/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>El cerebro humano es uno de los ??rganos m??s importantes del cuerpo humano, es primordial conocer sus principales funciones, as?? como los procesos negativos que inciden en su deterioro y las herramientas de las que disponemos para prevenirlo.<br>
            El buen uso de las habilidades cognitivas como lig????stica, memoria, l??gica, razonamiento, atenci??n y visoespacialidad, aunadas a una buena alimentaci??n, pueden prevenir enfermedades como Alzheimer o la esclerosis m??ltiple, que van en crecimiento en nuestro tiempo y que ya son consideradas como problemas de salud p??blica mundial.<br>
            Cada secci??n del cuadernillo dispone de un cuadro C-Q-A (qu?? conozco, qu?? quiero saber, qu?? aprend??), como material did??ctico utilizado para que usted organice el seguimiento de la informaci??n a la que acceder?? y autoeval??e su aprendizaje.
            </p>            
            <p class="important">ISBN 978-607-458-092-1</p>
        </div>
    </div>
    `
    setActiveTabs();
    setCourse()[6].children[0].classList.add('activeMaterial')

    document.querySelector('#tab1').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[0].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/destrezaMental/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>El cerebro humano es uno de los ??rganos m??s importantes del cuerpo humano, es primordial conocer sus principales funciones, as?? como los procesos negativos que inciden en su deterioro y las herramientas de las que disponemos para prevenirlo.<br>
            El buen uso de las habilidades cognitivas como lig????stica, memoria, l??gica, razonamiento, atenci??n y visoespacialidad, aunadas a una buena alimentaci??n, pueden prevenir enfermedades como Alzheimer o la esclerosis m??ltiple, que van en crecimiento en nuestro tiempo y que ya son consideradas como problemas de salud p??blica mundial.<br>
            Cada secci??n del cuadernillo dispone de un cuadro C-Q-A (qu?? conozco, qu?? quiero saber, qu?? aprend??), como material did??ctico utilizado para que usted organice el seguimiento de la informaci??n a la que acceder?? y autoeval??e su aprendizaje.
            </p>            
            <p class="important">ISBN 978-607-458-092-1</p>
        </div>
        `
    })
    document.querySelector('#tab2').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[1].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/destrezaMental/2.png"    alt="" id="imgContent">
        <div id="desContent">
            <p>El adecuado uso de las funciones cognitivas se puede mejorar de forma exponencial utilizando herramientas complementarias. En el presente cuadernillo se le presentar??n diversas opciones como:</p>
            <ul>
                <li>La gimnasia cerebral: conjunto de din??micas f??sicas que tienen como objeto ejercitar diversas habilidades cognitivas mediante el movimiento.</li>
                <li>La musicoterapia: selecciones musicales especialmente dise??adas para lograr un mejor funcionamiento cerebral que le permita aprender, relajarse o estudiar de forma m??s simple y r??pida.</li>
                <li>La mnemotecnia: t??cnica que tiene como finalidad el estudio de la memorizaci??n, utilizando el m??nimo de esfuerzo.</li>
            </ul>
            <p>Para complementar estas herramientas, se le presentar?? un apartado sobre la alimentaci??n adecuada para mejorar los procesos de su cerebro.<br>
            Este material contiene 226 ejercicios impresos que le ayudar??n a trabajar las habilidades cognitivas de:
            </p>
            <ul>
                <li>Ling????stica</li>
                <li>Memoria</li>
                <li>L??gica y razonamiento</li>
                <li>Atenci??n</li>
                <li>Visoespacialidad</li>
            </ul>
            <p>El objetivo de este libro es que usted pueda continuar con su ejercitamiento diario mientras se transporta para ir al trabajo o a la escuela, durante sus ratos libres o cuando sale de viaje, en general, cuando no tiene a la mano una computadora para resolver los ejercicios que, en formato electr??nico, contiene el kit de Destreza Mental.</p>
            <p class="important">ISBN 978-604-458-090-7</p>
        </div>
        `
    })
    document.querySelector('#tab3').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[2].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/destrezaMental/3.png"    alt="" id="imgContent">
        <div id="desContent">
            <p>Cuatro discos, que contienen ejercicios que te brindar??n una preparaci??n para que puedas ir percibiendo avances en las facultades cognitivas.<br>
            En el nivel intermedio se encontrar??n herramientas que permitir??n fomentar las habilidades b??sicas que han despertado en ti, o se solidificaron con el trabajo de los ejercicios del disco anterior;<br>
            El nivel avanzado presenta una serie de ejercicios que ayudar??n a combinar las habilidades cognitivas para resolver diversos problemas logrando una mayor capacidad de pensamiento.<br>
            Con los ejercicios del nivel experto, te dar??s cuenta de como se han incrementado tus habilidades cognitivas exponencialmente, logrando resolver complejas situaciones en cada una de las ??reas: ling????stica, memoria, atenci??n, l??gica y visoespacialidad.<br>
            Incluye dos juegos; ??Qu?? me cuentas? y Desaf??o mental, que pondr??n a prueba tus habilidades cognitivas.<br>
            Facultades que trabaja:
            </p>
            <ul>
                <li>Principalmente la memoria, fortaleciendo los c??digos individuales de aprendizaje.</li>
                <li>Atenci??n y concentrci??n.</li>
                <li>Integraci??n de hemisferios cerebrales</li>
                <li>Visoespacialidad.</li>
                <li>Facultades ling????sticas.</li>
                <li>L??gica.</li>
            </ul>
            <p class="important">ISBN 978-607-458-091-4</p>
        </div>
        `
    })
    document.querySelector('#tab4').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[3].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/destrezaMental/4.png"    alt="" id="imgContent">
        `
    })
}



/*
GENERAL EL CONTENIDO DEL MATERIAL PODER DEL LENGUAJE
*/
const poderLenguaje = () => {
    setActiveCourse();
    setCourse()[5].children[4].classList.add('activeMaterial')
    setCourse()[0].src = "img/courses/capacitacionCoaching/elPoderDelLenguaje/poder.png"  
    setCourse()[1].innerHTML = `
    <p class="titleResume">Ficha t??cnica</p>
    <ul>
        <li>8 vol??menes.</li>
        <li>1, 536 p??ginas en total</li>
        <li>Interiores a dos tintas en papel bond de 90 gr.</li>
        <li>Encuadernaci??n en pasta dura plastificada</li>
        <li>??til y resistente estuche de cart??n</li>
        <li>Formato 16.5 x 25 cm</li>
        <li>Incluye CD-ROM</li>
        <li>Requerimientos m??nimos del sistema:</li>
        <ul>
            <li>Windows?? 8, 8.1 y 10</li>
            <li>Procesador Intel Dual Core 2</li>
            <li>Memoria RAM: 1 GB</li>
            <li>Resoluci??n de video m??nima de 800 x 600 p??xeles</li>
        </ul>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">Una obra que le ayudar?? a desarrollar las habilidades necesarias para expresarse con seguridad, t??cnica y fluidez.</p>
    <p class="description">En cualquier momento y ??mbito de la vida es muy necesario tener la capacidad de expresar las ideas con fluidez, tanto de forma escrita como oral. Sobre todo en la actualidad donde la din??mica de un mundo globalizado exige la agilizaci??n del intercambio de informaci??n.<br>
    Esta obra ha sido concebida con el fin obtener resultados concretos y eficaces en lo que respecta al manejo de la lengua, a trav??s de m??todos recomendados por la pedagog??a moderna y las ??ltimas corrientes de la semiolog??a para el aprendizaje y la memorizaci??n. Una herramienta indispensable ya que comunicarse bien es una de las claves del ??xito.
    </p>
    <p class="titleParrafo">ISBN 978-968-418-276-9</p>
    `
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">la gramatica y sus componentes</li>
        <li id="tab2">100 modelos conjugados y masde 10,000 verbos de uso cotidiano</li>
        <li id="tab3">escribir bien</li>
        <li id="tab4">reglas de ortografia</li>
        <li id="tab5">aumente su vocabulario</li>
        <li id="tab6">analisis de lectura y escritos</li>
        <li id="tab7">estudiar, comprender y memorizar</li>
        <li id="tab8">hablar en publico</li>
    </ol>
    <div class="content">
        <img src="img/courses/capacitacionCoaching/elPoderDelLenguaje/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Un libro dise??ado para obtener el dominio y correcto manejo de la estructura del idioma al hablar y escribir. De forma pr??ctica se analizan los conceptos m??s elementales y sus relaciones para conformar nuestra lengua.</p>            
            <p class="important">ISBN 978-968-418-277-6</p>
        </div>
    </div>
    <span id="uls"></span>

    `
    setActiveTabs();
    setCourse()[6].children[0].classList.add('activeMaterial')

    document.querySelector('#tab1').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[0].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/elPoderDelLenguaje/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Un libro dise??ado para obtener el dominio y correcto manejo de la estructura del idioma al hablar y escribir. De forma pr??ctica se analizan los conceptos m??s elementales y sus relaciones para conformar nuestra lengua.</p>            
            <p class="important">ISBN 978-968-418-277-6</p>
        </div>
        `
    })
    document.querySelector('#tab2').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[1].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/elPoderDelLenguaje/2.png"    alt="" id="imgContent">
        <div id="desContent">
            <p>??til herramienta para aprender la conjugaci??n correcta de todos los tipos de verbos como los reflexivos, rec??procos, etc??tera, y de las clases de verbos como los regulares, irregulares, auxiliares, etc??tera. Contiene los 100 modelos de conjugaci??n del espa??ol y ayuda a resolver dudas en la conjugaci??n y ortograf??a de m??s de 10, 000 verbos.</p>
            <p class="important">ISBN 978-968-418-278-3</p>
        </div>
        `
    })
    document.querySelector('#tab3').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[2].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/elPoderDelLenguaje/3.png"    alt="" id="imgContent">
        <div id="desContent">
            <p>Conozca las t??cnicas de redacci??n; ad??ntrese en los diversos g??neros y sus muy particulares caracter??sticas con este pr??ctico libro que presenta las estrategias para aprender a escribir correctamente.</p>
            <p class="important">ISBN 978-968-418-279-0</p>
        </div>
        `
    })
    document.querySelector('#tab4').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[3].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/elPoderDelLenguaje/4.png"    alt="" id="imgContent">
        <div id="desContent">
            <p>Este volumen es un instrumento indispensable a cualquier edad, ya que es imperativa la necesidad de no cometer errores ortogr??ficos, que ensucien un texto y a la vez la imagen del autor del mismo.</p>
            <p class="important">ISBN 978-968-418-280-6</p>
        </div>
        `
    })
    document.querySelector('#tab5').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[4].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/elPoderDelLenguaje/5.png"    alt="" id="imgContent">
        <div id="desContent">
            <p>La finalidad de este libro es enriquecer su l??xico mediante breves explicaciones y sencillos ejercicios, lo que permitir?? contar con mayores recursos de vocabulario que podr?? usar en la expresi??n oral y escrita.</p>
            <p class="important">ISBN 978-968-418-281-3</p>
        </div>
        `
    })
    document.querySelector('#tab6').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[5].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/elPoderDelLenguaje/6.png"    alt="" id="imgContent">
        <div id="desContent">
            <p>Cuando la toma de decisiones depende de la cabal comprensi??n de un texto, es vital contar con las herramientas necesarias para lograrlo de manera eficaz: memoria, an??lisis, s??ntesis, comprensi??n e inferencia. Este libro proporciona las bases para desarrollar estas habilidades.</p>
            <p class="important">ISBN 978-968-418-282-0</p>
        </div>
        `
    })
    document.querySelector('#tab7').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[6].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/elPoderDelLenguaje/7.png"    alt="" id="imgContent">
        <div id="desContent">
            <p>Saque el m??ximo partido a sus lecturas mediante el desarrollo de las t??cnicas de memorizaci??n, que le permitir??n ampliar su capacidad de lectura y retenci??n de los contenidos.</p>
            <p class="important">ISBN 978-968-418-283-7</p>
        </div>
        `
    })
    document.querySelector('#tab8').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[7].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/elPoderDelLenguaje/8.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Este tomo es un gran manual para todas aquellas personas que quieren o necesitan desarrollar sus habilidades comunicativas, ya sea para dirigirse a un interlocutor o a un p??blico amplio. Recuerde que la palabra abre las puertas al ??xito.</p>
            <p class="important">ISBN 978-968-418-284-4</p>
        </div>
        `
    })
}



/*
GENERA EL CONTENIDO DEL CURSO ATREVETE YA 
 */
const atreveteYa = () => {
    setActiveCourse();
    setCourse()[5].children[5].classList.add('activeMaterial')
    setCourse()[0].src = "img/courses/capacitacionCoaching/atreveteYa/atrevete.png"
    setCourse()[1].innerHTML = `
    <p class="titleResume">Especificaciones T??cnicas:</p>
    <ul>
        <li>5 vol??menes.</li>
        <li>600 p??ginas totales.</li>
        <li>Formato 19.5 x 27 cm.</li>
        <li>Interiores a todo color en papel couch?? mate de 115 gr.</li>
        <li>Profusamente ilustrada.</li>
        <li>Lujosa encuadernaci??n en pasta dura plastificada.</li>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">??Atrevete... Ya!</p>
    <p class="description">Cada tomo es un aliado en su evoluci??n profesional y humana, en la b??squeda de la superaci??n y la armon??a. Cultive sus capacidades, fortalezca sus cualidades y engrandezca al triunfador que hay en usted. 
    <span>??El momento es AHORA!</span></p>
    <ul id="uls">
        <li>??tiles consejos lo inspiran a superar los obst??culos y alcanzar sus metas.</li>
        <li>Fortalezca sus deseos de triunfo y las oportunidades reales de lograrlo.</li>
        <li>Aprenda a trabajar en equipo, mot??vese, genere el cambio e infunda entusiasmo en las personas a su alrededor.</li>
        <li>Conceptos que son un instrumento de progreso y una herramienta de vida.</li>
    </ul>
    <p class="titleParrafo">ISBN 978-607-458-132-4</p>
    `
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">cuerpo sano, mente ganadora</li>
        <li id="tab2">aprender a pensar en positivo</li>
        <li id="tab3">logro profesional y economico</li>
        <li id="tab4">trabajo en equipo y liderazgo</li>
        <li id="tab5">los frutos de la inteligencia emocional</li>
    </ol>
    <div class="content">
        <img src="img/courses/capacitacionCoaching/atreveteYa/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Una mente decidida y un cuerpo en armon??a es lo que se requiere para lograr un progreso personal y laboral. Conozca la manera de incentivar su autovaloraci??n y su entusiasmo y de cultivar su integridad y fortaleza f??sica.</p>
            <p class="important">ISBN 978-607-458-132-4</p>
        </div>
    </div>
    `
    setActiveTabs();
    setCourse()[6].children[0].classList.add('activeMaterial')

    document.querySelector('#tab1').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[0].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/atreveteYa/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Una mente decidida y un cuerpo en armon??a es lo que se requiere para lograr un progreso personal y laboral. Conozca la manera de incentivar su autovaloraci??n y su entusiasmo y de cultivar su integridad y fortaleza f??sica.</p>
            <p class="important">ISBN 978-607-458-132-4</p>
        </div>
        `
    })
    document.querySelector('#tab2').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[1].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/atreveteYa/2.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Saber aprovechar las prodigiosas cualidades del cerebro a su favor est?? al alcance de su mano. Los ejercicios y los desaf??os en este tomo le ayudar??n a utilizar su caudal de inteligencia al m??ximo.</p>
            <p class="important">ISBN 978-607-458-133-1</p>
        </div>
        `
    })
    document.querySelector('#tab3').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[2].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/atreveteYa/3.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Trabajo y riqueza est??n estrechamente relacionados. Aprender c??mo causar una buena impresi??n, c??mo manejar el tiempo, c??mo adquirir el h??bito del orden, c??mo expresarse correctamente y todo lo relativo a establecer una buena metodolog??a de trabajo, lo conducir?? a un futuro desahogado.</p>
            <p class="important">ISBN 978-607-458-134-8</p>
        </div>
        `
    })
    document.querySelector('#tab4').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[3].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/atreveteYa/4.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Conozca los secretos de c??mo integrarse a un buen grupo de trabajo, y c??mo hacer que su labor rinda y luzca. Todo equipo necesita un l??der, y el liderazgo es una cualidad que se aprende, se gana, se merece. Sepa c??mo y p??ngase en acci??n.</p>
            <p class="important">ISBN 978-607-458-135-5</p>
        </div>
        `
    })
    document.querySelector('#tab5').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[4].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/atreveteYa/5.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Conozca las claves para hacer de las emociones, un arma para el progreso laboral. Aqu?? encontrar?? sugerencias orientadas a que todo lo obtenido en ese campo, redunde en una vida plena.</p>
        </div>
        `
    })
}



/*
GENERA EL CONTENIDO DEL MATERIAL MANUAL DE ENFERMERIA
 */
const manEnfermeria = () => {
    setActiveCourse();
    setCourse()[5].children[6].classList.add('activeMaterial')
    setCourse()[0].src = "img/courses/capacitacionCoaching/manualEnfermeria.png"
    setCourse()[1].innerHTML = `
    <p class="titleResume">Ficha t??cnica</p>
    <ul>
        <li>1 Volumen</li>
        <li>Formato: 20 X 27 CM</li>
        <li>912 P??ginas</li>
        <li>Encuadernaci??n en carton?? plastificado</li>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">Un compendio te??rico-pr??ctico para profesionales, auxiliares y estudiantes de enfermeria , con las ultimas tendencias en servicios de salud</p>
    <p class="description">Una obra de referencia indispensable para estudiantes y auxiliares de enfermer??a. M??s de 900 p??ginas con conceptos fundamentales, diagn??sticos, descripci??n de t??cnicas paso a paso.<br>
    Presenta ilustraciones y fotograf??as que muestran la pr??ctica de los cuidados de enfermer??a. Incluye normativa actual y procedimientos innovadores. Un modelo de an??lisis de los cuidados de enfermer??a que aporta a estos profesionales el desarrollo de pensamiento cr??tico para tomar decisiones cl??nicas adecuadas.
    </p>
    `
    setCourse()[3].innerHTML = `
    <span id="tabs"></span>
    <span id="uls"></span>
    <span class="content"></span>
    `
}
document.querySelector('#formTimeChange').addEventListener('click', formTimeChange)
document.querySelector('#sisIntegral').addEventListener('click', sisIntegral)
document.querySelector('#liderazgoAccion').addEventListener('click', liderazgoAccion)
document.querySelector('#destreza').addEventListener('click', destreza)
document.querySelector('#poderLenguaje').addEventListener('click', poderLenguaje)
document.querySelector('#atreveteYa').addEventListener('click', atreveteYa)
document.querySelector('#manEnfermeria').addEventListener('click', manEnfermeria)