'use strict'

function game() {
    console.log('-- SKYLAB PASAPALABRA --')
    var i=true
    while(i===true) {
        name=prompt('Bienvenido al Pasapalabra de Skylab.\n¿Cómo te llamas?','')
        if (name==='' || isNaN(name)===false || name===null) {
            alert('¡El valor intoducido no es correcto!')
        } else {
            i=false
        }
    }
    let option=window.confirm('¿Estás preparado?\nSi(Aceptar) / No(Cancelar)')
    if (option) {
        pasapalabra()
    } else {
        var option2=window.confirm('¿Quieres cerrar el programa? Si tu respuesta es NO, se ejecutará el juego\nSi(Aceptar) / No(Cancelar)')
        if (option2) {
            return
        } else {
            pasapalabra()
        }
    }
    let option=window.confirm('¿Quieres volver a jugar?\nSi(Aceptar / No(Cancelar)')
    if (option) {
        for (i=0;i<questions.length;i++) {
            questions[i].status=0
        }
        game()
    } else {
        return '¡Hasta Luego!'
    }
}
function pasapalabra() {
    point=0
    var answers=0
    while (answers<27) {
        for (var i=0;i<questions.length;i++) {
            if (questions[i].status===0) {
                console.log(`${questions[i].question}`)
                let option=prompt('¿Cuál es tu respuesta?').toUpperCase() //Arreglar problema amb els null
                if (option===(questions[i].answer).toUpperCase()) {
                    console.log('¡Respuesta correcta!')
                    questions[i].status=1
                    point+=1
                    answers+=1
                } else if (option!=='PASAPALABRA') {
                    console.log('¡Respuesta incorrecta!')
                    questions[i].status=2
                    answers+=1
                } else {
                    console.log('¡Perfecto! Pasamos a otra pregunta')
                }
            }
        }
    }
    console.log(`¡Has terminado el juego! Has contestado correctamente ${point} preguntas y has fallado ${27-point}.\nTu puntuación ha sido de ${point}/27, ¡enhorabuena!`)
    hallOfFame.push(hall(name,point))
    console.log(hallOfFame)
    console.log(sortHigh().join('\n'))
}
var hall = (name,point) => {
    return {
        name:name,
        point:point
    }
}
function sortHigh() {
    list=[]
    for (var i=0;i<hallOfFame.length;i++) {
        if (hallOfFame[i+1].point>=hallOfFame[i].point) { //aixo no xuta, afegir un altre bucle (buscar internet)
            list.shift(hallOfFame[i].point)
        }
    }
    return list
}
var questions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos"},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}, ]
var hallOfFame=[]
var name
var point
var list=[]
game()