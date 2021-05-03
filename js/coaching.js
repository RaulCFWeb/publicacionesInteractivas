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
DETECTA EL SCROL Y AGREGA ANIMACIONES
*/
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
        <li>Vasto catálogo con definición de palabras.</li>
        <li>ISBN 978-607-458-011-2</li>
        <li>Formato Libros, CD.</li>
        <li>Ficha tecnica</li>
        <ul>
            <li>5 volúmenes</li>
            <li>608 páginas en total</li>
            <li>Formato 19.5 x 27 cm</li>
            <li>Interiores a todo color en papel couché mate de 115 gr</li>
            <li>Encuadernación en pasta dura plastificada</li>
        </ul>
    </ul>
    `
    /* CAMBIA ARTICLE presentacion */
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">Prácticas de desarrollo integral: Ser, Familia, Empresa y Sociedad</p>
    <p class="description">El instrumento ideal para un excelente desempeño en los diferentes ámbitos de la vida.</p>
    <p class="titleParrafo">Textos complementarios</p>
    <p class="description">Información interesante relacionada con los temas y contenidos de cada sección.</p>
    <p class="titleParrafo">Cuestionarios y evaluaciones</p>
    <p class="description">El lector tendrá oportunidad de reafirmar sus conocimientos.</p>
    <p class="titleParrafo">Ejercicios y actividades</p>
    <p class="description">Para poner manos a la obra, a través de ejercicios simples, que permitirán mover las emociones y la razón para llegar a la conciencia de uno mismo y del entorno.</p>
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
            <p>¿Está dispuesto a conocer sus capacidades y confiar en su poder?, en estos tiempo se ha hablado mucho sobre el líder, ya que la falta de una figura respetable ha dejado al descubierto la desconfianza de las personas que conforman organizaciones y comunidades.<br>
                El líder no es una figura mítica, es un conocedor de las organizaciones sociales quien equilibra el talento con autoridad y orienta las acciones comunes hacia la obtención de resultados eficaces; es un gestor de recursos. Si bien concentra poder, al encabezar actividades y dirigir grupos, siempre lo hace bajo una escala de valores que toma en cuenta a la cultura organizacional y a sus integrantes.<br>
                Este volumen ayudará a conocer el tipo de liderazgo ideal para sus necesidades; recuerde: un líder no nace, se hace.</p>
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
            <p>¿Está dispuesto a conocer sus capacidades y confiar en su poder?, en estos tiempo se ha hablado mucho sobre el líder, ya que la falta de una figura respetable ha dejado al descubierto la desconfianza de las personas que conforman organizaciones y comunidades.<br>
                El líder no es una figura mítica, es un conocedor de las organizaciones sociales quien equilibra el talento con autoridad y orienta las acciones comunes hacia la obtención de resultados eficaces; es un gestor de recursos. Si bien concentra poder, al encabezar actividades y dirigir grupos, siempre lo hace bajo una escala de valores que toma en cuenta a la cultura organizacional y a sus integrantes.<br>
                Este volumen ayudará a conocer el tipo de liderazgo ideal para sus necesidades; recuerde: un líder no nace, se hace.</p>
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
            <p>En múltiples ocasiones todos nos hemos enfrentado a conflictos y problemas que parecen no tener solución o la que se considera, es poco satisfactoria. Es aquí donde se debe pensar con claridad para optar por la más adecuada. Precisamente, este libro proporciona ideas, reflexiones y nuevos caminos para encarar los retos constantes a los que se enfrenta cualquier persona en su vida cotidiana.<br>
            Conozca los mecanismos que transforman las dificultades en oportunidades de progreso, pero además, también aprenda a plantear estrategias de negociación en circunstancias delicadas en las que ganar, a veces es perder.<br>
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
            <p>Este volumen reúne los elementos base desde los que el lector podrá evolucionar su imagen y mejorar su esquema corporal a partir de la conciencia de las emociones, así como de la energía que emanan.<br>
            Pocas veces nos detenemos a pensar en las heridas emocionales que han mellado nuestro espíritu y que se traducen en problemas de autoaceptación, lo que afecta la forma de relacionarnos con los demás y provoca que la comunicación pierda eficacia, no sólo en el ámbito personal, sino también en el organizacional.<br>
            Al tener a la mano técnicas de introspección y mecánicas de manejo emocional y cambio de actitud, se tendrá la llave a una buena y más sana relación con el mundo y consigo mismo, que se traducirá en una mejor posición y desarrollo en todas sus actividades.
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
            <p>Los ámbitos profesional y familiar son dos áreas vitales para el ser humano, sin embargo en la actualidad es común que parezcan poco combinables, lo que ocasiona que una de las dos se vea mellada en su desempeño; para lograr la conciliación entre éstas es necesaria una reflexión más profunda sobre nuestra función en ambas esferas, por un lado la importancia de la constante capacitación (académica o autodidacta) y el conocimiento de los sectores económicos, y por otro la necesidad de trascender a través de la familia.<br>
            Este volumen está destinado a dar todos los elementos para comprender que estas dos instituciones aportan a la sociedad elementos igualmente valiosos, que potencian el cambio en todos los sentidos y que deben convivir en armonía en la praxis diaria de cada uno.<br>
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
            <p>Iniciar un camino siempre es fácil, continuarlo hasta sus últimas consecuencias requiere constancia, dedicación, esfuerzo y tenacidad.<br>
            En este trajín se inmiscuye la motivación que interviene de manera determinante en los procesos que se activan para alcanzar los objetivos personales, grupales, institucionales y sociales.<br>
            El presente libro proporcionará los datos y técnicas específicas para incrementar la motivación que lo impulsará a alcanzar los objetivos propuestos para que nunca más se dejen metas sin cruzar.
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
            <p>Esta producción musical favorece la reflexión, estimula el pensamiento positivo. Nos prepara para crear estados mentales precisos, centrados, intensos y duraderos.<br>
            A través de ñas técnicas sonoras y narraciones logramos visualizar, reflexionar y planificar.<br>
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
    <p>Ficha técnica</p>
    <ul>
        <li>Material interactivo: 3 CD-ROM</li>
        <li>Taquistoscopio</li>
        <li>Cronómetro</li>
        <li>Formato 21.5 x 28 cm.</li>
        <li>Interiores impresos a color en papel couché mate de 118 grs.</li>
        <li>Guía de Evaluación inicial con encuadernación rústica</li>
        <li>3 libros de pasta dura con espiral plástico</li>
        <li>Requerimientos mínimos del sistema:</li>
        <ul>
            <li>Unidad de CD-ROM/DVD</li>
            <li>Windows Vista, 7, 8, 8.1 y 10</li>
            <li>Mac OS 10.4 o superior/li>
            <li>Procesador 1GHz</li>
            <li>Memoria RAM 1 GB, mínimo</li>
            <li>Resolución mínima de pantalla 1024 x 768 píxeles</li>
        </ul>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">Prácticas de desarrollo integral: Ser, Familia, Empresa y Sociedad</p>
    <p class="description">El contenido del Sistema integral de lectura rápida, comprensión y memorización, le ofrece una enseñanza eficiente a través de estrategias, habilidades y nuevas técnicas especializadas de lectura con las que sin duda aumentará la velocidad, comprensión y retención de la información. <br>
    Otro beneficio que el sistema proporciona es el conocimiento de técnicas de apoyo que permitirán aprovechar hasta el más mínimo detalle del texto, agilizar los movimientos oculares de tal manera que podrá localizar datos específicos en cuestión de segundos y será capaz de retener las ideas principales. <br>
    Este método de lectura está diseñado para cualquier tipo de persona que sepa leer de manera tradicional y que tenga el interés de alcanzar velocidades mayores a 1900 palabras por minuto, con un entendimiento total de la información; sin importar la edad, profesión o condición social.<br>
    Algunas otras ganancias que se obtendrán al modificar hábitos y vicios del proceso lector son:<br></p>
    <ul id="uls">
        <li>La oportunidad de leer todo lo que quiera en un menor tiempo.</li>
        <li>Entender cualquier tipo de material de lectura sin importar la extensión.</li>
        <li>Recordar toda la información y datos precisos que se leyeron utilizándola no sólo en el momento sino en posteriores ocasiones.</li>
        <li>Desarrollar, fortalecer y sobre todo disfrutar el hábito de la lectura.</li>
        <li>Poder estudiar de una manera más eficaz.</li>
        <li>Poder lograr un pensamiento más ágil y efectivo.</li>
        <li>Tener mayores conocimientos sobre temas diversos.</li>
        <li>Lograr un mejor nivel cultural.</li>
        <li>Tomar mejores decisiones.</li>
        <li>Tener mejores temas de conversación si no se sabe bailar.</li>
        <li>Tener conocimiento de más palabras para usar en una conversación.</li>
        <li>Poder preparar con menos tiempo una exposición escolar o laboral.</li>
        <li>Poder localizar datos específicos en menos tiempo.</li>
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
            <p>Ahora es momento de cambiar esa lectura tradicional, silábica y pausada que se nos enseñó desde la infancia, en su momento fue lógica e incluso suficiente, pero actualmente no se adecua al ritmo y a las necesidades intelectuales de la era de la información. Hoy en día se nos demanda ser devoradores de textos, pero no sólo leer rápido es suficiente sino leer y comprender cualquier tipo de información. Por ello, es de suma importancia convertirse en un lector altamente efectivo.</p>            
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
            <p>Ahora es momento de cambiar esa lectura tradicional, silábica y pausada que se nos enseñó desde la infancia, en su momento fue lógica e incluso suficiente, pero actualmente no se adecua al ritmo y a las necesidades intelectuales de la era de la información. Hoy en día se nos demanda ser devoradores de textos, pero no sólo leer rápido es suficiente sino leer y comprender cualquier tipo de información. Por ello, es de suma importancia convertirse en un lector altamente efectivo.</p>            
        </div>
        `
    })
    document.querySelector('#tab2').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[1].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/capacitacionCoaching/sistemaIntegral/2.png"  alt="" id="imgContent">
        <div id="desContent">
            <p>En este primer ciclo del Sistema Integral de Lectura Rápida comprensión y memorización además de mejorar su habilidad visual perceptiva, desarrollará otras habilidades que le ayudarán a perfeccionar muchos aspectos de su vida diaria, por ejemplo: su nivel de atención y concentración, que a su vez le brindará la capacidad de poder realizar varias actividades al mismo tiempo.<br>
            En este ciclo el objetivo principal es que consiga una rápida percepción de palabras, así como también, identificar y eliminar todos aquellos ruidos, distractores y malos hábitos que afectan su proceso lector.
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
            <p>Leer es una tarea que debe desarrollarse con eficacia y eficiencia, pues de ello depende que en el futuro estemos frente a individuos con capacidades efectivas para el estudio, la comprensión y satisfacción plena en la realización de sus actividades encomendadas. Si no se aprende a leer de forma adecuada, la vida del individuo tendrá rezagos, fallas en la manera de estudiar, escasa cultura, posibles fracasos, lectores incompetentes, entre otras causas.<br>
            Este ciclo tiene como propósito mejorar progresivamente su comprensión de lectura por medio de ejercicios totalmente planeados e idóneos. También se le proporcionan estrategias y técnicas que le permitirán leer con los dos hemisferios del cerebro, así conseguirá un cambio radical en su manera tradicional de lectura.
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
            <p>En este tercer ciclo se seguirán ejercitando todas las habilidades, estrategias, técnicas y capacidades que ha aprendido durante las lecciones anteriores; además, se incluyen nuevas técnicas de apoyo (mnemotecnia) para mejorar la memoria, técnicas para que en cuestión de instantes se pueda obtener la idea general del texto utilizando toda la información contenida en el mismo, así como para buscar datos específicos, organizar y retener la información de cualquier texto en tan sólo unos segundos, optimizando de esta manera el tiempo dedicado al estudio diario.<br>
            La habilidad a trabajar en este ciclo es la retención total, combinándola con la rapidez y comprensión. A partir de este momento la forma de leer será otra, por lo que no podrá retroceder a los malos hábitos y siempre leerá con las técnicas, habilidades y estrategias aprendidas, ya que de esto depende el verdadero dominio de las mismas.
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
            Diseñados lúdicamente para reforzar la metodología y el aprendizaje de las lecciones de cada uno de los ciclos.<br>
            Cada CD contiene un breve resumen de las lecciones y ejercicios interactivos de apoyo que especifican los objetivos a cubrir, el modo de relación y el tiempo ideal para su ejecución.
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
            <p>Para el desarrollo de cursos, programas o sistemas de lectura veloz ha sido muy importante la utilización de un instrumento llamado taquistoscopio que etimológicamente proviene del griego takhistos, significa el más veloz y de scopein que significa ver; es decir, ver rápidamente.<br>
            Este instrumento lo utilizó un grupo de pilotos de la fuerza aérea estadounidense, pues se requería reconocer rápidamente aviones enemigos durante la Segunda Guerra Mundial en el entrenamiento de pilotos de combate. Gracias a esto se descubrió que había personas capaces de distinguir imágenes con proyecciones de media milésima de segundo. Fue en la década de los cincuenta cuando una profesora norteamericana, Evelyn Wood, adaptó las técnicas del taquistoscopio a un aparato portátil que permitió incrementar la velocidad de lectura y desde entonces esta herramienta ha sido empleada en este tipo de cursos.
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
        <li>5 volúmenes</li>
        <li>Ficha técnica</li>
        <ul>
            <li>5 tomos</li>
            <li>Formato 19.6 x 26.8 cm</li>
            <li>Interiores en papel semimate de 100 grs. impreso a color/li>
            <li>Dinámico y atractivo material gráfico</li>
            <li>Encuadernados en pasta dura a color con plastificado brillante</li>
        </ul>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">Liderazgo en accion</p>
    <p class="description">Obra que le brinda un extenso marco de referencia para desarrollar un pensamiento positivo y fortalecer su crecimiento personal. Contiene ideas prácticas y herramientas significativas que le permitirán transformar los acontecimientos en grandes oportunidades de crecimiento. Dirigida a jóvenes, profesionistas, docentes, empresarios y padres de familia.</p>
    <ul id="uls">
        <li>Se destacan vivencias y experiencias de auténticos líderes de todos los tiempos</li>
        <li>Se exponen las mejores alternativas de comunicación para que usted las conozca y práctique con el fin de lograr la reciprocidad de valiosas y benéficas influencias</li>
        <li>Frases de personajes célebres apoyan los temas</li>
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
            <p>Adquiera las cualidades que poseen los líderes, y con las cuales influyen en quienes los rodean.</p>            
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
            <p>Adquiera las cualidades que poseen los líderes, y con las cuales influyen en quienes los rodean.</p>            
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
            <p>La honestidad, la disciplina, la perseverancia y el optimismo son algunas de las características de un verdadero líder.</p>
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
            <p>La asertividad, la confianza en los demás, la buena comunicación, entre otras características, colaboran para que podamos relacionarnos de forma positiva con quienes nos rodean.</p>
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
            <p>La imaginación, la creatividad y una mente abierta son poderosas armas para vencer los obstáculos de la vida.</p>
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
        <li>1 Libro, encuadernación tapa dura.</li>
        <li>2 Libros, encuadernación rústica</li>
        <li>Juego “Desafío Mental” (1 tablero y 75 tarjetas).</li>
        <li>Juego “¿Qué me cuentas?” (50 tarjetas, 1 dado y 1 cronómetro).</li>
        <li>Requerimientos mínimos del sistema:</li>
        <ul>
            <li>Microsoft Windows® 8, 8.1 y 10</li>
            <li>Mac OS® 10.5 o superior.</li>
            <li>Procesador DUAL CORE de 2 GHz.</li>
            <li>2 GB RAM</li>
            <li>Resolución de pantalla 1280×720 pixeles.</li>
            <li>Video 512 MB.</li>
            <li>Tarjeta de sonido</li>
            <li>Espacio mínimo requerido en disco duro de 5 GB.</li>
            <li>Unidad lectora de CD/DVD-ROM.</li>
        </ul>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">desafios para esta mentalmente en forma</p>
    <p class="description">Sistema que le permite incrementar sus habilidades cerebrales mediante ejercicios debidamente planeados y estructurados. Se entrenan los hemisferios izquierdo y derecho del cerebro, gracias al fortalecimiento de cinco áreas especializadas.</p>
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
        <li id="tab3">herramientas lúdicas</li>
        <li id="tab4">tablero</li>
    </ol>
    <div class="content">
        <img src="img/courses/capacitacionCoaching/destrezaMental/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>El cerebro humano es uno de los órganos más importantes del cuerpo humano, es primordial conocer sus principales funciones, así como los procesos negativos que inciden en su deterioro y las herramientas de las que disponemos para prevenirlo.<br>
            El buen uso de las habilidades cognitivas como ligüística, memoria, lógica, razonamiento, atención y visoespacialidad, aunadas a una buena alimentación, pueden prevenir enfermedades como Alzheimer o la esclerosis múltiple, que van en crecimiento en nuestro tiempo y que ya son consideradas como problemas de salud pública mundial.<br>
            Cada sección del cuadernillo dispone de un cuadro C-Q-A (qué conozco, qué quiero saber, qué aprendí), como material didáctico utilizado para que usted organice el seguimiento de la información a la que accederá y autoevalúe su aprendizaje.
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
            <p>El cerebro humano es uno de los órganos más importantes del cuerpo humano, es primordial conocer sus principales funciones, así como los procesos negativos que inciden en su deterioro y las herramientas de las que disponemos para prevenirlo.<br>
            El buen uso de las habilidades cognitivas como ligüística, memoria, lógica, razonamiento, atención y visoespacialidad, aunadas a una buena alimentación, pueden prevenir enfermedades como Alzheimer o la esclerosis múltiple, que van en crecimiento en nuestro tiempo y que ya son consideradas como problemas de salud pública mundial.<br>
            Cada sección del cuadernillo dispone de un cuadro C-Q-A (qué conozco, qué quiero saber, qué aprendí), como material didáctico utilizado para que usted organice el seguimiento de la información a la que accederá y autoevalúe su aprendizaje.
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
            <p>El adecuado uso de las funciones cognitivas se puede mejorar de forma exponencial utilizando herramientas complementarias. En el presente cuadernillo se le presentarán diversas opciones como:</p>
            <ul>
                <li>La gimnasia cerebral: conjunto de dinámicas físicas que tienen como objeto ejercitar diversas habilidades cognitivas mediante el movimiento.</li>
                <li>La musicoterapia: selecciones musicales especialmente diseñadas para lograr un mejor funcionamiento cerebral que le permita aprender, relajarse o estudiar de forma más simple y rápida.</li>
                <li>La mnemotecnia: técnica que tiene como finalidad el estudio de la memorización, utilizando el mínimo de esfuerzo.</li>
            </ul>
            <p>Para complementar estas herramientas, se le presentará un apartado sobre la alimentación adecuada para mejorar los procesos de su cerebro.<br>
            Este material contiene 226 ejercicios impresos que le ayudarán a trabajar las habilidades cognitivas de:
            </p>
            <ul>
                <li>Lingüística</li>
                <li>Memoria</li>
                <li>Lógica y razonamiento</li>
                <li>Atención</li>
                <li>Visoespacialidad</li>
            </ul>
            <p>El objetivo de este libro es que usted pueda continuar con su ejercitamiento diario mientras se transporta para ir al trabajo o a la escuela, durante sus ratos libres o cuando sale de viaje, en general, cuando no tiene a la mano una computadora para resolver los ejercicios que, en formato electrónico, contiene el kit de Destreza Mental.</p>
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
            <p>Cuatro discos, que contienen ejercicios que te brindarán una preparación para que puedas ir percibiendo avances en las facultades cognitivas.<br>
            En el nivel intermedio se encontrarán herramientas que permitirán fomentar las habilidades básicas que han despertado en ti, o se solidificaron con el trabajo de los ejercicios del disco anterior;<br>
            El nivel avanzado presenta una serie de ejercicios que ayudarán a combinar las habilidades cognitivas para resolver diversos problemas logrando una mayor capacidad de pensamiento.<br>
            Con los ejercicios del nivel experto, te darás cuenta de como se han incrementado tus habilidades cognitivas exponencialmente, logrando resolver complejas situaciones en cada una de las áreas: lingüística, memoria, atención, lógica y visoespacialidad.<br>
            Incluye dos juegos; ¿Qué me cuentas? y Desafío mental, que pondrán a prueba tus habilidades cognitivas.<br>
            Facultades que trabaja:
            </p>
            <ul>
                <li>Principalmente la memoria, fortaleciendo los códigos individuales de aprendizaje.</li>
                <li>Atención y concentrción.</li>
                <li>Integración de hemisferios cerebrales</li>
                <li>Visoespacialidad.</li>
                <li>Facultades lingüísticas.</li>
                <li>Lógica.</li>
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
    <p class="titleResume">Ficha técnica</p>
    <ul>
        <li>8 volúmenes.</li>
        <li>1, 536 páginas en total</li>
        <li>Interiores a dos tintas en papel bond de 90 gr.</li>
        <li>Encuadernación en pasta dura plastificada</li>
        <li>Útil y resistente estuche de cartón</li>
        <li>Formato 16.5 x 25 cm</li>
        <li>Incluye CD-ROM</li>
        <li>Requerimientos mínimos del sistema:</li>
        <ul>
            <li>Windows® 8, 8.1 y 10</li>
            <li>Procesador Intel Dual Core 2</li>
            <li>Memoria RAM: 1 GB</li>
            <li>Resolución de video mínima de 800 x 600 píxeles</li>
        </ul>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">Una obra que le ayudará a desarrollar las habilidades necesarias para expresarse con seguridad, técnica y fluidez.</p>
    <p class="description">En cualquier momento y ámbito de la vida es muy necesario tener la capacidad de expresar las ideas con fluidez, tanto de forma escrita como oral. Sobre todo en la actualidad donde la dinámica de un mundo globalizado exige la agilización del intercambio de información.<br>
    Esta obra ha sido concebida con el fin obtener resultados concretos y eficaces en lo que respecta al manejo de la lengua, a través de métodos recomendados por la pedagogía moderna y las últimas corrientes de la semiología para el aprendizaje y la memorización. Una herramienta indispensable ya que comunicarse bien es una de las claves del éxito.
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
            <p>Un libro diseñado para obtener el dominio y correcto manejo de la estructura del idioma al hablar y escribir. De forma práctica se analizan los conceptos más elementales y sus relaciones para conformar nuestra lengua.</p>            
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
            <p>Un libro diseñado para obtener el dominio y correcto manejo de la estructura del idioma al hablar y escribir. De forma práctica se analizan los conceptos más elementales y sus relaciones para conformar nuestra lengua.</p>            
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
            <p>Útil herramienta para aprender la conjugación correcta de todos los tipos de verbos como los reflexivos, recíprocos, etcétera, y de las clases de verbos como los regulares, irregulares, auxiliares, etcétera. Contiene los 100 modelos de conjugación del español y ayuda a resolver dudas en la conjugación y ortografía de más de 10, 000 verbos.</p>
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
            <p>Conozca las técnicas de redacción; adéntrese en los diversos géneros y sus muy particulares características con este práctico libro que presenta las estrategias para aprender a escribir correctamente.</p>
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
            <p>Este volumen es un instrumento indispensable a cualquier edad, ya que es imperativa la necesidad de no cometer errores ortográficos, que ensucien un texto y a la vez la imagen del autor del mismo.</p>
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
            <p>La finalidad de este libro es enriquecer su léxico mediante breves explicaciones y sencillos ejercicios, lo que permitirá contar con mayores recursos de vocabulario que podrá usar en la expresión oral y escrita.</p>
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
            <p>Cuando la toma de decisiones depende de la cabal comprensión de un texto, es vital contar con las herramientas necesarias para lograrlo de manera eficaz: memoria, análisis, síntesis, comprensión e inferencia. Este libro proporciona las bases para desarrollar estas habilidades.</p>
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
            <p>Saque el máximo partido a sus lecturas mediante el desarrollo de las técnicas de memorización, que le permitirán ampliar su capacidad de lectura y retención de los contenidos.</p>
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
            <p>Este tomo es un gran manual para todas aquellas personas que quieren o necesitan desarrollar sus habilidades comunicativas, ya sea para dirigirse a un interlocutor o a un público amplio. Recuerde que la palabra abre las puertas al éxito.</p>
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
    <p class="titleResume">Especificaciones Técnicas:</p>
    <ul>
        <li>5 volúmenes.</li>
        <li>600 páginas totales.</li>
        <li>Formato 19.5 x 27 cm.</li>
        <li>Interiores a todo color en papel couché mate de 115 gr.</li>
        <li>Profusamente ilustrada.</li>
        <li>Lujosa encuadernación en pasta dura plastificada.</li>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">¡Atrevete... Ya!</p>
    <p class="description">Cada tomo es un aliado en su evolución profesional y humana, en la búsqueda de la superación y la armonía. Cultive sus capacidades, fortalezca sus cualidades y engrandezca al triunfador que hay en usted. 
    <span>¡El momento es AHORA!</span></p>
    <ul id="uls">
        <li>Útiles consejos lo inspiran a superar los obstáculos y alcanzar sus metas.</li>
        <li>Fortalezca sus deseos de triunfo y las oportunidades reales de lograrlo.</li>
        <li>Aprenda a trabajar en equipo, motívese, genere el cambio e infunda entusiasmo en las personas a su alrededor.</li>
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
            <p>Una mente decidida y un cuerpo en armonía es lo que se requiere para lograr un progreso personal y laboral. Conozca la manera de incentivar su autovaloración y su entusiasmo y de cultivar su integridad y fortaleza física.</p>
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
            <p>Una mente decidida y un cuerpo en armonía es lo que se requiere para lograr un progreso personal y laboral. Conozca la manera de incentivar su autovaloración y su entusiasmo y de cultivar su integridad y fortaleza física.</p>
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
            <p>Saber aprovechar las prodigiosas cualidades del cerebro a su favor está al alcance de su mano. Los ejercicios y los desafíos en este tomo le ayudarán a utilizar su caudal de inteligencia al máximo.</p>
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
            <p>Trabajo y riqueza están estrechamente relacionados. Aprender cómo causar una buena impresión, cómo manejar el tiempo, cómo adquirir el hábito del orden, cómo expresarse correctamente y todo lo relativo a establecer una buena metodología de trabajo, lo conducirá a un futuro desahogado.</p>
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
            <p>Conozca los secretos de cómo integrarse a un buen grupo de trabajo, y cómo hacer que su labor rinda y luzca. Todo equipo necesita un líder, y el liderazgo es una cualidad que se aprende, se gana, se merece. Sepa cómo y póngase en acción.</p>
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
            <p>Conozca las claves para hacer de las emociones, un arma para el progreso laboral. Aquí encontrará sugerencias orientadas a que todo lo obtenido en ese campo, redunde en una vida plena.</p>
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
    <p class="titleResume">Ficha técnica</p>
    <ul>
        <li>1 Volumen</li>
        <li>Formato: 20 X 27 CM</li>
        <li>912 Páginas</li>
        <li>Encuadernación en cartoné plastificado</li>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">Un compendio teórico-práctico para profesionales, auxiliares y estudiantes de enfermeria , con las ultimas tendencias en servicios de salud</p>
    <p class="description">Una obra de referencia indispensable para estudiantes y auxiliares de enfermería. Más de 900 páginas con conceptos fundamentales, diagnósticos, descripción de técnicas paso a paso.<br>
    Presenta ilustraciones y fotografías que muestran la práctica de los cuidados de enfermería. Incluye normativa actual y procedimientos innovadores. Un modelo de análisis de los cuidados de enfermería que aporta a estos profesionales el desarrollo de pensamiento crítico para tomar decisiones clínicas adecuadas.
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