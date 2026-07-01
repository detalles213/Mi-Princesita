//==============================
// ELEMENTOS
//==============================

const escena = document.getElementById("scene");

const titulo = document.getElementById("title");

const subtitulo = document.getElementById("subtitle");

const boton = document.getElementById("start");

const musica = document.getElementById("musica");

const musicButton = document.getElementById("musicButton");

const finalScreen = document.getElementById("finalScreen");

const openLetter = document.getElementById("openLetter");

const letter = document.getElementById("letter");

const letterText = document.getElementById("letterText");

const gallery = document.getElementById("gallery");

const viewer=document.getElementById("viewer");

const viewerImg=document.getElementById("viewerImg");

const closeViewer=document.getElementById("closeViewer");

const nextSection = document.getElementById("nextSection");

const nextButton = document.getElementById("nextButton");


//==============================
// ESCENAS
//==============================

const escenas = [

{
titulo:"Eres mi flor 🌹",

texto:`

Hay sentimientos que, cuando intento hablarlo, como que
no siempre encuentro las palabras adecuadas, quiero decirte
un monton de cosas, pero no soy bueno expresando con palabras..

<br><br>

Por eso decidi hacer esto

solo para ti.

`,

boton:"Comenzar ❤️"

},

{

titulo:"Hola, mi Princesita 👑",

texto:`

Antes que cualquier cosa...

<br><br>

Quiero que sepas que siempre estare para ti sin importar de como esten las cosas
tu seras mi prioridad siempre, te protegere con mi vida si es necesario, eres a
quien amo con todo mi corazon y con toda mi alma, aunq no lo creas, eres la mejor
en todo lo que haces, eres alguien maravillosa, te amo como no tienes idea, 
no estas sola, siempre estare ahi para ti amor 🫂

<br><br>


Espero que te guste esto, lo hice con mucho amor para ti

`,

boton:"Continuar ❤️"

},

{

titulo:"Quiero hablar sobre ti 🌸",

texto:`

Admiro muchísimo la mujer que eres.

<br><br>

Trabajas.

<br>

Estudias.

<br>

Eres disciplinada.

<br>

Nunca te rindes.

<br>

Apesar que te estresas y no sabes q hacer, siempre buscar alguna manera de solucionar las cosas.

<br>

Te esfuerzas todos los días.

<br><br>

Y aun así...

siempre encuentras un espacio
para nosotros.

<br><br>

|Eso es algo que nunca dejaré
de admirar, simplemente eres la mejor|

`,

boton:"Continuar ❤️"

},

{

titulo:"Gracias ❤️",

texto:`

Gracias por escucharme.

<br><br>

Gracias por apoyarme.

<br><br>

Gracias por aparecer en mi vida.

<br><br>

Gracias por elegirme.

<br><br>

Gracias por cuidarme a tu manera.

<br><br>

Gracias por siempre estar ahi cuando mas te necesito.

<br><br>

Gracias por tus lindos detalles.

<br><br>

Gracias por siempre esforzarte por mi.

<br><br>

Gracias por escucharme.

<br><br>

<br><br>

Gracias por abrazarme.

<br><br>

Gracias por confiar en mí.

<br><br>

|Tal vez no te lo digo siempre...

pero veo todo lo que haces por nosotros|

`,

boton:"Continuar ❤️"

},

{

titulo:"Hay algo que quiero contarte 🤍",

texto:`

Hay algo que he querido decirte

<br><br>

No es un reclamo.

<br>

No es una queja.

<br><br>

espero tambien que estes escuchando la musica

`,

boton:"Continuar ❤️"

},

{

titulo:"Indiferencias y Amor 💖",

texto:`

Se que tenemos nuestras indiferencias, discusiones, como toda pareja
tambien entiendo que no es bueno tanto eso porque se supone que
debemos disfrutar cada momento juntos y ser felices, quiero que
todo sea reciproco, supongo que ya sabes a que me refiero, no
lo hago con el fin de presionarte, porque se que trabajas y
estudias y aveces tu tiempo es limitado, y se que cuando
tienes tiempo, me lo dedicas, y amo mucho eso, e incluso
siento que si estas mejorando, porque osea te habia comentado sobre los
pequeños detalles y como que si lo estas haciendo, esa nota que me diste
cuando fui a tu casa, lo aprecio mucho porque para mi tiene un gran
significado y un gran impacto en mi, solo una cosa, quisiera sentir
tu preocupacion, aveces me enfermo y como q tipo, si me gustaria
que te preocupes por mi, no digo q no lo hagas, sino preguntar
si voy bien, que me duele y eso, porque cuando tu lo estas,
siempre estoy ahi viendo si te falta algo, o si te llevo algo
osea no digo que me compres medicina ni nada, simplemente
basta con preguntar, a mi me interesa tu interes, nose si
me entiendes

<br><br>

`,

boton:"Continuar ❤️"

},

{

titulo:"Mi Mundo eres Tú 🤍",

texto:`

Tu seras mi prioridad, tu eres mi mundo, eres mi todo, eres la mejor en todo
sabes algo?, sky esta muy orgulloso de ti, de como te has esforzado
de como nunca te rindes, el esta feliz ahi viendote desde arriba, nunca te
rindas, tu eres la mejor y siempre sera asi, no estas sola, aca estoy para ti, estoy
para cuidarte, para protegerte, para amarte, para cuidarte

Siempre le pido a Dios que te cuide en cada momento, que te ayude en tus tareas,
en tu trabajo, con Mauri, se que aveces es cansado y estresante, pero tambien se
que si tu llegaste  a tener ese trabajo, es porque ya estaba en los planes de Dios
y se que lo hizo con un propósito, nunca te rindas, vas a ver como las cosas mejoraran
te amo un monton, eso nunca lo dudes ni lo olvides


`,

boton:"Continuar ❤️"

},

{

titulo:"Ahora sobre mi 🌙",

texto:`

Bueno no tengo mucho que decir aca, ya me conoces, y bueno, solo
amo tus detalles que vienen de ti, asi sea lo mas pequeño y lo sabes
simplemente amo todo de ti y cada cosa que venga de ti 

`,

boton:"Continuar ❤️"

},

{

titulo:"Errores que cometo ❤️",

texto:`

Sé que yo también tengo errores, pero siempre trato de mejorar porque quiero ser alguien mejor,
te amo como no tienes idea, aveces soy cortante, tengo cambios de humor, pero enserio trato de
mejorar, porque para mi tu significas mucho y te amo con todas mis fuerzas, nose que haria si 
te llegara a pasar algo

<br><br>

`,

boton:"Continuar ❤️"

},

{

titulo:"Lo que más deseo 🌸",

texto:`

No quiero una relación perfecta.

<br><br>

Quiero una relación
donde ambos aprendamos.

<br><br>

Donde ambos nos cuidemos.

<br>

Donde ambos crezcamos.

<br>

Donde ambos nos ayudemos.

<br>

Donde ambos demostremos interes.

<br>

Y donde nunca dejemos
de elegirnos.

`,

boton:"Continuar ❤️"

},

{

titulo:"Gracias por existir ❤️",

texto:`

Gracias por ser tú.

<br><br>

Gracias por todo
lo que haces.

<br><br>

Gracias por hacerme sentir
que no camino solo.

<br><br>

Y si algún día vuelves
a leer este pequeño detalle

quiero que recuerdes algo.

`,

boton:"Continuar ❤️"

},

{

titulo:"Te amo ❤️",

texto:`

No importa cuánto tiempo pase.

<br><br>

Siempre quiero seguir aprendiendo
a amarte mejor, quiero aprender mas sobre ti, de lo que te gusta
para asi poder consentirte, no tengo mucho para poder comprarte lo que desees
pero siempre tratare de consentirte y de darte todo, porque tu eres lo más
valioso para mi, eres mi princesita a quien amo demasiado

<br><br>

||Porque cada día que pasa,

te elijo una vez más||

<br><br>

Gracias por existir.

Te amo infinitamente, de aca hasta la luna a paso de tortuga. 🐢♾️❤️

`,

boton:"Final ❤️"

}

];


const carta = `

Mi Princesita...

Si llegaste hasta aquí...

dejame decirte algo.

❤️

Quería que supieras cuánto te admiro.

Cuánto valoro cada esfuerzo que haces.

Y cuánto agradezco que estés en mi vida.

También quería expresarte de como me siento un poco.

No para hacerte sentir mal.

Ni mucho menos trato de minimizar tus esfuerzos ni tus sentimientos.

Ni para pedirte que cambies.

Solo para que conozcas un poquito mejor cómo me siento amado.

Porque para mí...

un "¿Cómo estás?"

un "¿Ya te sientes mejor?"

un "¿Necesitas algo?"

o un "mira pensé en ti y te hice esto o te traje esto o algo"

son pequeños detalles que pueden significar mucho.

Y de la misma manera...

quiero seguir aprendiendo cómo hacerte sentir amada a ti.

Porque el amor también se aprende.

Y yo quiero aprenderlo contigo.

Habrán dias buenos, días malos, pero siempre contaras conmigo para todo,

porque te amo infinitamente y siempre estare dispuesto a todo por ti,

Se que el estrés, el trabajo, los estudios te consumen mucho y que aveces

paras bajoneada, pero siempre estare para lo que necesites, nunca estarás

sola, siempre estare contigo, te amo infinitamente, no quiero pelear ni nada

solo mejoremos, perdon por todo, trato de mejorar aun, graicas por siempre hacerme

sentir especial para ti, por hacerme feliz, y mi cumpleaños jamas lo olvidare, 

porque es algo que valoro demasiado, y siempre lo estare recordando, eres la mejor

en todo, cada detalle tuyo lo tengo en mi billetera, en mi escritorio, porque para

mi, tu siempre estaras presente en mis pensamientos y cada logro que tengas, o cada

avance o algo, siempre lo celebrare, porque todo importa y no quiero que minimices

tus esfuerzos, tu eres la mejor y siempre sera asi, recuerdalo siempre

Gracias por cada abrazo.

Gracias por cada risa.

Gracias por estar conmigo.

Gracias por ser TÚ.

Gracias por cada momento.

Y gracias...

por existir.

Te amo muchísimo. ❤️

`;


//==============================
// CONTROL
//==============================

let actual = 0;


//==============================
// FUNCIÓN
//==============================

function escribirTexto(elemento,texto,velocidad){

    elemento.innerHTML="";

    let i=0;

    const intervalo=setInterval(()=>{

        elemento.innerHTML+=texto.charAt(i);

        i++;

        if(i>=texto.length){

            clearInterval(intervalo);

        }

    },velocidad);

}

function mostrarEscena(){

    escena.classList.add("fade-out");

    setTimeout(()=>{

        titulo.innerHTML=escenas[actual].titulo;

        escribirTexto(subtitulo,escenas[actual].texto.replace(/<br>/g,"\n"),30);

        boton.innerHTML=escenas[actual].boton;

        escena.classList.remove("fade-out");

        escena.classList.add("fade-in");

    },700);

}

function escribirCarta(){

    letterText.innerHTML="";

    let i=0;

    const intervalo=setInterval(()=>{

        letterText.innerHTML+=carta.charAt(i);

        i++;

        if(i>=carta.length){

            clearInterval(intervalo);

        }

    },30);

}

//==============================
// BOTÓN
//==============================

boton.addEventListener("click",()=>{

actual++;

if(actual<escenas.length){

mostrarEscena();

}else{

    escena.style.display="none";

    finalScreen.classList.add("active");

}

});


function crearEstrellas(){

    const contenedor=document.getElementById("stars");

    for(let i=0;i<80;i++){

        let estrella=document.createElement("div");

        estrella.classList.add("estrella");

        estrella.style.top=Math.random()*100+"vh";

        estrella.style.left=Math.random()*100+"vw";

        estrella.style.animationDuration=(Math.random()*3+2)+"s";

        contenedor.appendChild(estrella);

    }

}

crearEstrellas();

//==============================
// CORAZONES FLOTANTES
//==============================

function crearCorazon(){

    const corazon=document.createElement("div");

    corazon.classList.add("corazon");

    corazon.innerHTML="💖";

    corazon.style.left=Math.random()*100+"vw";

    corazon.style.fontSize=(Math.random()*18+18)+"px";

    corazon.style.animationDuration=(Math.random()*6+6)+"s";

    document.body.appendChild(corazon);

    setTimeout(()=>{

        corazon.remove();

    },12000);

}

// Crear un corazón cada 2 segundos
setInterval(crearCorazon,2000);



//==============================
// PÉTALOS
//==============================

function crearPetalo(){

    const petalo=document.createElement("div");

    petalo.classList.add("petalo");

    petalo.innerHTML="🌸";

    petalo.style.left=Math.random()*100+"vw";

    petalo.style.fontSize=(Math.random()*12+14)+"px";

    petalo.style.animationDuration=(Math.random()*6+8)+"s";

    document.body.appendChild(petalo);

    setTimeout(()=>{

        petalo.remove();

    },15000);

}

setInterval(()=>{

    crearPetalo();

},1800);




//==============================
// MÚSICA
//==============================

let reproduciendo = false;

musicButton.addEventListener("click",()=>{

    if(!reproduciendo){

        musica.volume = 0.25;

        musica.play();

        musicButton.innerHTML = "⏸️ Pausar música";

        reproduciendo = true;

    }else{

        musica.pause();

        musicButton.innerHTML = "🎵 Música";

        reproduciendo = false;

    }

});


//==============================
// CARTA
//==============================

openLetter.addEventListener("click",()=>{

    letter.classList.add("open");

    escribirCarta();

    openLetter.style.display="none";

    document.body.classList.add("scroll");

    window.scrollTo({ top:0, behavior:"smooth" });

    // esperar que termine la carta y mostrar fotos
    setTimeout(mostrarGaleria, 8000);

});


function mostrarGaleria(){

    gallery.style.display="flex";

    let fotos = document.querySelectorAll(".photo");

    fotos.forEach((foto, i)=>{

        setTimeout(()=>{

            foto.classList.add("show");

        }, i * 1200);

    });

setTimeout(()=>{

    nextSection.style.display="block";

}, fotos.length * 1200 + 1000);

}



//==============================
// VISOR DE FOTOS
//==============================

let escala=1;

document.querySelectorAll(".photo img").forEach(img=>{

    img.addEventListener("click",()=>{

        viewer.classList.add("show");

        viewerImg.src=img.src;

        escala=1;

        viewerImg.style.transform="scale(1)";

    });

});

closeViewer.addEventListener("click",()=>{

    viewer.classList.remove("show");

});

viewer.addEventListener("click",(e)=>{

    if(e.target===viewer){

        viewer.classList.remove("show");

    }

});

zoomIn.addEventListener("click",()=>{

    escala+=0.2;

    viewerImg.style.transform=`scale(${escala})`;

});

zoomOut.addEventListener("click",()=>{

    if(escala>0.4){

        escala-=0.2;

        viewerImg.style.transform=`scale(${escala})`;

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        viewer.classList.remove("show");

    }

});

viewerImg.addEventListener("wheel",(e)=>{

    e.preventDefault();

    if(e.deltaY<0){

        escala+=0.1;

    }else{

        escala=Math.max(0.4,escala-0.1);

    }

    viewerImg.style.transform=`scale(${escala})`;

});