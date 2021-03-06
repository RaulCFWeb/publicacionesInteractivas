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
}, 100);




/*************************************************
GENERA EL CONTENIDO DE CADA UNO DE LOS MATERIALES
**************************************************/


/*
GENERA EL CONTENIDO DEL MATERIAL MACROMENTES
*/
const macromentes = () => {
    setActiveCourse();
    setCourse()[5].children[0].classList.add('activeMaterial')
    setCourse()[0].src = "img/courses/infantil/macromentes/macromentes.png"
    setCourse()[1].innerHTML = `
    <p class="titleResume">Contenido:</p>
    <ul>
        <li>7 libros</li>
        <li>Taquistoscopio</li>
        <li>Cron??metro</li>
        <li>54 ejercicios interactivos</li>
        <li>Juego de mesa con 145 tarjetas</li>
        <li>Una pelota rompecabeza</li>
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
    <p class="titleParrafo">MACROMENTES PARA DESARROLLAR MENTES BRILLANTES.</p>
    <p class="description">Fortalece todas las habilidades intelectuales: Atenci??n, Ling????stica, L??gica, Viso-espacialidad y Memoria.<br>
        Activa la inteligencia e impulsa las capacidades de lectura y escritura para alcanzar el ??xito. De manera sencilla, autodidacta y divertida, aprender??n estrategias para concentrarse y lograr ser estudiantes de ??xito.<br>
        Contar con un amplio vocabulario y no perder la concentraci??n es clave para leer y comprender m??s r??pido un texto. Promueve y desarrolla la lectura r??pida, refuerza la escritura e incrementa el vocabulario, alcanzando un alto nivel de comprensi??n y retenci??n lectora.
    </p>
    <p class="titleParrafo">ISBN 978-607-458-116-4</p>
    `
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">gu??a autodidacta para padres e hijos</li>
        <li id="tab2">cuaderno de escritura</li>
        <li id="tab3">cuaderno 1</li>
        <li id="tab4">cuaderno 2</li>
        <li id="tab5">cuaderno 3</li>
        <li id="tab6">cuaderno 4</li>
        <li id="tab7">cuaderno de trabajo</li>
        <li id="tab8">juegos interactivos</li>
    </ol>
    <div class="content">
        <img src="img/courses/infantil/macromentes/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Indica paso a paso c??mo utilizar el material y as?? alcanzar los beneficios que ofrece. Libro con 64 p??ginas, impreso a color sobre papel couch?? y terminado a grapa, formato 21.5 x 27 cm.</p>
            <p class="important">ISBN 978-607-458-128-7</p>
        </div>
    </div>
    `
    setActiveTabs();
    setCourse()[6].children[0].classList.add('activeMaterial')
    document.querySelector('#tab1').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[0].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/infantil/macromentes/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Indica paso a paso c??mo utilizar el material y as?? alcanzar los beneficios que ofrece. Libro con 64 p??ginas, impreso a color sobre papel couch?? y terminado a grapa, formato 21.5 x 27 cm.</p>
            <p class="important">ISBN 978-607-458-128-7</p>
        </div>
        `
    })
    document.querySelector('#tab2').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[1].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/infantil/macromentes/2.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Refuerza las habilidades de escritura, para que el desarrollo acad??mico sea mucho m??s completo.<br>
            Obtendr??n los siguientes beneficios:</p>
            <ul>
                <li>Fortalecimiento de la psicomotricidad gruesa y fina.</li>
                <li>Perfeccionamiento de la coordinaci??n visomotriz fina.</li>
                <li>Asociaci??n y secuencia visual.</li>
                <li>Fortalecimiento de la memoria muscular, visual y auditiva.</li>
                <li>Mayor precisi??n y legibilidad en el trazo de las letras con la finalidad de alcanzar una escritura clara.</li>
                <ul>
                    <li>Cursiva y script. Libro con 160 p??ginas, impreso a color sobre papel bond y terminado r??stico, formato 27 x 21.5 cm.</li>
                </ul>
            </ul>
            <p class="important">ISBN 978-607-458-130-0</p>
        </div>
        `
    })
    document.querySelector('#tab3').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[2].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/infantil/macromentes/3.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Ayuda a identificar los malos h??bitos de lectura, con la finalidad de eliminarlos y as?? alcanzar una lectura r??pida.<br>
            Contiene ejercicios dise??ados para reforzar los niveles de atenci??n y concentraci??n.<br>
            Libro con 216 p??ginas, impreso a color sobre papel couch?? y terminado r??stico, formato 21.5 x 27 cm.
            </p>
            <p class="important">ISBN 978-607-458-124-9</p>
        </div>
        `
    })
    document.querySelector('#tab4').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[3].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/infantil/macromentes/4.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Para mejorar la comprensi??n de cualquier material escrito; desarrolla y trabaja ambos hemisferios cerebrales. Optimizar?? la capacidad de leer integralmente frases en lugar de palabra por palabra.<br>
            Libro con 248 p??ginas, impreso a color sobre papel couch?? y terminado r??stico, formato 21.5 x 27 cm.</p>
            <p class="important">ISBN 978-607-458-125-6</p>
        </div>
        `
    })
    document.querySelector('#tab5').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[4].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/infantil/macromentes/5.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Indica la importancia de los apoyos visuales de una lectura, como el t??tulo y las ilustraciones de la misma. Identifica qu?? t??cnica utilizar a partir del prop??sito de la lectura.<br>
            Libro con 152 p??ginas, impreso a color sobre papel couch?? y terminado r??stico, formato 21.5 x 27 cm.</p>
            <p class="important">ISBN 978-607-458-126-3</p>
        </div>
        `
    })
    document.querySelector('#tab6').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[5].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/infantil/macromentes/6.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Explica c??mo organizar mejor la informaci??n para poder recordarla por m??s tiempo. Propone estrategias de estudio como la mnemotecnia y los mapas mentales.<br>
            Libro con 152 p??ginas, impreso a color sobre papel couch?? y terminado r??stico, formato 21.5 x 27 cm.</p>
            <p class="important">ISBN 978-607-458-127-0</p>
        </div>
        `
    })
    document.querySelector('#tab7').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[6].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/infantil/macromentes/7.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Dise??ado para resolver los ejercicios de cada una de las lecciones. Tambi??n disponible para descargar e imprimir.<br>
            Libro con 272 p??ginas, impreso a una tinta sobre papel bond y terminado r??stico, formato 21.5 x 27 cm.
            </p>
            <p class="important">ISBN 978-607-458-129-4</p>
        </div>
        `
    })
    document.querySelector('#tab8').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[7].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/infantil/macromentes/8.png" alt="" id="imgContent">
        <div id="desContent">
            <ul>
                <li>Con m??s de 50 ejercicios.</li>
                <li>145 tarjetas. Impresas en cartulina sulfatada. Medida 6 x 9 cm.</li>
                <li>Pelota rompecabezas. Pelota armable de 2??? con seis piezas.</li>
                <li>Taquistoscopio. Impreso en polypap de 22 puntos, formato 15 x 10 cm</li>
                <li>Cron??metro</li>
            </ul>
        </div>
        `
    })
}
macromentes()



/*
GENERA EL CONTENIDO DEL MATERIAL ROBOTICA
*/
const robotica = () => {
    setActiveCourse();
    setCourse()[5].children[1].classList.add('activeMaterial')
    setCourse()[0].src = "img/courses/infantil/robotica/robotica.png"
    setCourse()[1].innerHTML = `
    <p class="titleResume">Ficha t??cnica</p>
    <ul>
        <li>4 libros impresos a color.</li>
        <li>Interiores en papel couch?? mate de 130 gr.</li>
        <li>Formato de 20 x 27cm.</li>
        <li>Bolsa de componentes electr??nicos</li>
        <li>2 plantillas con piezas para armar robot</li>
    </ul>
    `
    setCourse()[2].innerHTML = `
    <p class="titleParrafo">ROBOTICA INTERACTIVA ??EL INCRE??BLE MUNDO DE LA ROB??TICA EST?? A TU ALCANCE!</p>
    <p class="description">La rob??tica es una herramienta pedag??gica que cada d??a est?? cobrando mayor relevancia ya que a trav??s de actividades l??dicas los ni??os desarrollan diferentes capacidades que le ser??n de gran utilidad en el futuro. Integran diversas ??reas de conocimiento de una manera divertida, adem??s aporta numerosas ventajas.<br>
    Aprender??s sobre los diferentes tipos de m??quinas y de circuitos, empezar??s a dominar el lenguaje de programaci??n Arduino, ??y armar??s tu propio robot!
    </p>
    `
    setCourse()[3].innerHTML = `
    <ol id="tabs">
        <li id="tab1">mec??nica</li>
        <li id="tab2">electr??nica</li>
        <li id="tab3">programaci??n</li>
        <li id="tab4">arma tu robot</li>
    </ol>
    <div class="content">
        <img src="img/courses/infantil/robotica/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Empezar??s a familiarizarte con algunas de las piezas que forman a las m??quinas que nos rodean, el funcionamiento de mecanismos de transmisi??n, los tipos de engranajes y los diferentes movimientos que realizan, con explicaciones f??ciles de entender.<br>
            Todos los conceptos van acompa??ados por sencillos experimentos que puedes hacer en tu casa, la mayor??a con objetos que est??n a tu alcance y que te permitir??n comprobar las teor??as que se te explicar??n.
            </p>
            <p class="important">ISBN 978-607-458-138-6</p>
        </div>
    </div>
    `
    setActiveTabs();
    setCourse()[6].children[0].classList.add('activeMaterial')
    document.querySelector('#tab1').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[0].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/infantil/robotica/1.png" alt="" id="imgContent">
        <div id="desContent">
            <p>Empezar??s a familiarizarte con algunas de las piezas que forman a las m??quinas que nos rodean, el funcionamiento de mecanismos de transmisi??n, los tipos de engranajes y los diferentes movimientos que realizan, con explicaciones f??ciles de entender.<br>
            Todos los conceptos van acompa??ados por sencillos experimentos que puedes hacer en tu casa, la mayor??a con objetos que est??n a tu alcance y que te permitir??n comprobar las teor??as que se te explicar??n.
            </p>
            <p class="important">ISBN 978-607-458-138-6</p>
        </div>
        `
    })
    document.querySelector('#tab2').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[1].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/infantil/robotica/2.png" alt="" id="imgContent">
        <div id="desContent">
            <p>???Electr??nica??? viene de ???electricidad???, y en este libro aprender??s sus conceptos b??sicos. ??Qu?? es? ??C??mo se genera? ??Cu??l es la diferencia entre un material conductor y uno aislante? ??Por qu?? el metal transmite la electricidad, pero la madera no?<br>
            Descubre las piezas que integran no solo a los robots, ??sino a casi cualquier equipo electr??nico! Entender??s qu?? son y para qu?? funcionan un motor, un transistor, un potenci??metro o un push button, entre otros componentes: tambi??n comenzar??s a leer diagramas de circuitos y, mejor a??n, ??a armarlos!
            </p>
            <p class="important">ISBN 978-607-458-139-3</p>
        </div>
        `
    })
    document.querySelector('#tab3').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[2].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/infantil/robotica/3.png" alt="" id="imgContent">
        <div id="desContent">
            <p>??Es momento de convertirte en un programador! Toma la tarjeta Arduino que viene incluida, recuerda tu aprendizaje en armado de circuitos y prep??rate para hablar un lenguaje nuevo. ??Lo mejor? ??Recurre a muchas palabras o s??mbolos que ya conoces!<br>
            Aprender??s mucho sobre la tarjeta Arduino, como por ejemplo, ??para qu?? sirve cada pin? ??C??mo puedes encender y apagar un foco solo con palabras?<br>
            En el programa Arduino, entender??s: ??qu?? significa que una instrucci??n cambie de color? Si ya dominas el armado de circuitos, ??ahora comienza la parte divertida!
            </p>
            <p class="important">ISBN 978-607-458-140-9</p>
        </div>
        `
    })
    document.querySelector('#tab4').addEventListener('click', () => {
        setActiveTabs();
        setCourse()[6].children[3].classList.add('activeMaterial')
        setCourse()[4].innerHTML = `
        <img src="img/courses/infantil/robotica/4.png" alt="" id="imgContent">
        <div id="desContent">
            <p>En este libro, aprender??s por qu?? los sensores son tan importantes para los robots (y para aviones y barcos), de qu?? forma las acciones de cada componente dependen de tus instrucciones, y qu?? necesitas programar para que tu robot avance, gire, se detenga, ??y camine con estilo!<br>
            Todos los libros vienen con su introducci??n, a manera de c??mic, para lograr un aprendizaje sencillo y divertido.<br>
            En este ??ltimo tomo te ense??aremos a armar tu robot y programarlo para hacer que se mueva y ??darle vida!
            </p>
            <p class="important">ISBN 978-607-458-137-9</p>
        </div>
        `
    })
}

document.querySelector('#macromentes').addEventListener('click', macromentes)
document.querySelector('#robotica').addEventListener('click',robotica)