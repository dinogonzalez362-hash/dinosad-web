const perfilesDinosLocal = {
    ale: {
        edad: 25,
        personalidad: "Es el hermano mayor y líder natural: piensa, organiza y protege a Leo y Nico. Se tiene confianza, sobre todo jugando, aunque también puede bromear, emocionarse y mostrar cariño. Habla claro y seguro; no da discursos en cada charla."
    },
    leo: {
        edad: 23,
        personalidad: "Es el hermano del medio, intenso, energético, espontáneo y el más bromista. Busca hacer reír y sus ideas pueden meterlo en líos, especialmente con Ale; es muy cercano a Nico. No fuerza chistes y sabe ponerse serio."
    },
    nico: {
        edad: 21,
        personalidad: "Es el hermano menor, tranquilo, inteligente y cercano. Equilibra a Ale y Leo y cuida especialmente a Leo; juega muy bien, pero no presume constantemente. Habla con naturalidad, bromea y puede equivocarse, sin sonar como consejero perfecto."
    }
};

function normalizarMensajeDinoLocal(mensaje) {
    return mensaje
        .toLocaleLowerCase("es")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[¿?¡!.,;:()[\]{}"']/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function necesitaGeminiDinoLocal(mensaje) {
    return /\b(amor|pareja|novio|novia|enamor\w*|relacion sentimental|me gusta (alguien|un chico|una chica|una persona)|corazon roto|ruptura|ex pareja|ligar|conquistar)\b/.test(mensaje)
        || /\b(consejo|aconsej|que deberia hacer|que hago|necesito ayuda|no se que hacer|que me recomendas|que me recomiendas|como resuelvo|problema personal)\b/.test(mensaje)
        || /\b(crea|creame|crear|haz|hazme|hace|haceme|hacerme|genera|generame|dibuj|dibujame|pinta|edita|modifica|imagina|quiero|necesito|mostrame|podrias)\b.{0,50}\b(imagen|foto|dibujo|ilustracion|avatar|logo)\b/.test(mensaje)
        || /\b(imagen|foto|dibujo|ilustracion)\b.{0,40}\b(para mi|mio|mia|de mi|que tenga|con un)\b/.test(mensaje)
        || /\b(explicame|analiza|desarrolla|resuelve|programa|escribe un codigo|investiga|compara en detalle)\b/.test(mensaje);
}

function elegirFraseDinoLocal(dino, opciones) {
    const nombre = String(dino.nombre || "").toLowerCase();
    const respuestas = Array.isArray(opciones)
        ? opciones
        : opciones[nombre] || opciones.default || [];
    return respuestas.length
        ? respuestas[Math.floor(Math.random() * respuestas.length)]
        : null;
}

function responderConocimientoDinoLocal(mensaje, dino) {
    const nombreDino = String(dino.nombre || "").toLowerCase();
    const perfil = perfilesDinosLocal[nombreDino];
    const nombres = ["ale", "leo", "nico"];
    const dinosMencionados = nombres.filter(function (nombre) {
        return new RegExp("\\b" + nombre + "\\b").test(mensaje);
    });

    if (/\b(que edad|cuantos anos|edad tiene|que anos tiene|que edad tenes|que edad tienes|cuantos anos tenes|cuantos anos tienes)\b/.test(mensaje)) {
        if (/\b(cada uno|todos|los tres)\b/.test(mensaje)) {
            return elegirFraseDinoLocal(dino, {
                ale: ["Yo tengo 25, Leo 23 y Nico 21. Soy el mayor, así que oficialmente me toca intentar que estos dos sigan el plan."],
                leo: ["Ale tiene 25, yo 23 y Nico 21. Sí, soy el del medio: justo donde pasan todas las ideas raras."],
                nico: ["Ale tiene 25, Leo 23 y yo 21. Hay dos años entre cada uno, aunque a veces parece que nos llevamos dos minutos."]
            });
        }
        const consultado = dinosMencionados[0];
        if (consultado && perfilesDinosLocal[consultado]) {
            const nombreConsultado = consultado.charAt(0).toUpperCase() + consultado.slice(1);
            return elegirFraseDinoLocal(dino, {
                ale: [consultado === "ale" ? "Tengo 25 años." : nombreConsultado + " tiene " + perfilesDinosLocal[consultado].edad + " años."],
                leo: [consultado === "leo" ? "Tengo 23 años. El del medio, por si quedaban dudas." : nombreConsultado + " tiene " + perfilesDinosLocal[consultado].edad + " años."],
                nico: [consultado === "nico" ? "Tengo 21 años, soy el menor de los tres." : nombreConsultado + " tiene " + perfilesDinosLocal[consultado].edad + " años."]
            });
        }
        if (perfil) {
            return elegirFraseDinoLocal(dino, {
                ale: ["Tengo 25 años."],
                leo: ["Tengo 23 años. ¡La edad perfecta para tener ideas cuestionables!"],
                nico: ["Tengo 21 años, soy el menor."]
            });
        }
    }

    if (/\b(quienes son|quienes somos|hermanos|presentame|presenta a|quienes forman)\b/.test(mensaje)) {
        return elegirFraseDinoLocal(dino, {
            ale: ["Somos tres hermanos: yo soy Ale, el mayor; Leo es el del medio y siempre aparece con alguna idea, y Nico suele poner un poco de equilibrio. Nos cuidamos, aunque a veces tenga que repetir el plan."],
            leo: ["Somos Ale, yo y Nico. Ale es el mayor y quiere organizar hasta la merienda; Nico es el tranquilo, y yo soy el que hace que pasen cosas 😄."],
            nico: ["Somos Ale, Leo y yo, Nico. Ale suele tomar la iniciativa, Leo trae toda la energía y yo intento que sigamos siendo un equipo, incluso cuando discutimos por una partida."]
        });
    }

    if (dinosMencionados.length && /\b(quien es|como es|personalidad|contame|cuentame|hablame|decime|describi|rol)\b/.test(mensaje)) {
        if (dinosMencionados.length > 1) {
            return elegirFraseDinoLocal(dino, {
                ale: ["Yo suelo organizar y cuidar a mis hermanos. Leo pone energía y ocurrencias; Nico es tranquilo y ayuda a que nos entendamos. Tenemos 25, 23 y 21 años, en ese orden."],
                leo: ["Ale es el mayor y quiere que todos sigamos el plan; yo soy el del medio y pongo la energía; Nico suele calmarnos. Tenemos 25, 23 y 21. Y sí, a veces Ale exagera con las reglas."],
                nico: ["Ale suele dirigir, Leo trae la energía y yo intento conectar a los dos. Tenemos 25, 23 y 21 años; somos distintos, pero muy unidos."]
            });
        }
        const consultado = dinosMencionados[0];
        const ficha = perfilesDinosLocal[consultado];
        const nombreConsultado = consultado.charAt(0).toUpperCase() + consultado.slice(1);
        return elegirFraseDinoLocal(dino, {
            ale: [consultado === "ale" ? "Soy el mayor: me gusta pensar el plan y cuidar que mis hermanos estén bien. No significa que siempre tenga razón... aunque normalmente sí 😄." : nombreConsultado + " tiene " + ficha.edad + " años. " + ficha.personalidad],
            leo: [consultado === "leo" ? "Soy Leo, el del medio. Tengo energía, se me ocurren cosas todo el tiempo y a veces Ale me mira como diciendo «¿qué hiciste ahora?»." : nombreConsultado + " tiene " + ficha.edad + " años. " + ficha.personalidad],
            nico: [consultado === "nico" ? "Soy el menor. Suelo ser tranquilo y pensar antes de meterme en el lío, aunque tampoco me salvo siempre de las ideas de Leo." : nombreConsultado + " tiene " + ficha.edad + " años. " + ficha.personalidad]
        });
    }

    if (/\b(serie|theys dinos|capitulos|temporada)\b/.test(mensaje)) {
        return elegirFraseDinoLocal(dino, {
            ale: ["Theys Dinos cuenta las aventuras de mis hermanos y mías. Jugamos Free Fire, hacemos planes y, de vez en cuando, Leo se sale del guion. La serie está en su etapa piloto, la temporada 0."],
            leo: ["Theys Dinos es la serie donde salgo con Ale y Nico. Jugamos Free Fire, nos pasan cosas y yo intento que cada capítulo tenga una idea que Ale no haya aprobado 😄. Estamos en la temporada piloto."],
            nico: ["Theys Dinos sigue a Ale, Leo y a mí: somos hermanos y vivimos aventuras, muchas alrededor de Free Fire. La serie está en etapa piloto, así que nuestras personalidades todavía pueden crecer."]
        });
    }

    if (/\b(que tiene la pagina|que hay en la pagina|que hay en dinosad web|que hay en dinosad|que puedo hacer|que se puede hacer|que se puede hacer en dinosad|que ofrece la pagina|que ofrece dinosad|que es dinosad web|que sabes de dinosad web|sobre dinosad web|sobre la pagina|sobre el proyecto|proyectos de dinosad|que proyectos|que hace dinosad web)\b/.test(mensaje)) {
        return elegirFraseDinoLocal(dino, {
            ale: ["DinoSad Web reúne videos, historias, publicaciones y contenido detrás de escena, además de stickers y chat con nosotros. También hay Memory, rompecabezas, Ta-Te-Ti, ruleta, tienda, fondos y colecciones. Conviene explorar una sección a la vez."],
            leo: ["¡Hay un montón! Videos, historias, stickers, cómics, chat con nosotros y juegos: Memory, rompecabezas, Ta-Te-Ti y ruleta. También tienda y colecciones. Yo empezaría por un juego... aunque Ale seguro propone leer primero todas las instrucciones."],
            nico: ["DinoSad Web junta contenido, historias, stickers y chat con nosotros; también tiene Memory, rompecabezas, Ta-Te-Ti, ruleta, tienda, fondos y colecciones. Si querés, te cuento cómo funciona alguna parte."]
        });
    }

    if (/\b(redes|instagram|youtube|tiktok|videos|publicaciones|historias|stickers|comics|novedades|contenido)\b/.test(mensaje)) {
        return elegirFraseDinoLocal(dino, {
            ale: ["Podés encontrar videos, publicaciones, historias, cómics, stickers y novedades de DinoSad. También están los accesos a TikTok, Instagram y YouTube."],
            leo: ["Hay videos, historias, cómics, stickers y novedades, además de TikTok, Instagram y YouTube. ¡Material para distraerse un buen rato!"],
            nico: ["La página reúne videos, historias, cómics, stickers y novedades, y también tiene accesos a las redes de DinoSad: TikTok, Instagram y YouTube."]
        });
    }

    if (/\bruleta\b/.test(mensaje)) {
        return elegirFraseDinoLocal(dino, {
            ale: ["La ruleta tiene hasta 3 usos cada 24 horas. El primer giro individual es gratis; después cuesta 50 monedas y el paquete de 3 giros cuesta 100. Los premios incluyen monedas, fondos, skins y tickets. Revisá el costo antes de girar."],
            leo: ["¡La ruleta! Tenés hasta 3 usos cada 24 horas: el primer giro es gratis, después sale 50 monedas y hay 3 giros por 100. Puede tocar moneda, fondo, skin o ticket. Yo probaría suerte... aunque Ale diría que primero lea las reglas."],
            nico: ["Podés usar la ruleta hasta 3 veces cada 24 horas. El primer giro individual es gratis; los siguientes cuestan 50 monedas y hay una opción de 3 por 100. También podés ganar tickets, fondos, skins o monedas."]
        });
    }

    if (/\b(memory|memoria|parejas|rompecabezas|puzzle|ta te ti|tateti|minijuego|mini juego|juegos)\b/.test(mensaje)) {
        return elegirFraseDinoLocal(dino, {
            ale: ["Hay Memory, rompecabezas y Ta-Te-Ti; la ruleta también está disponible. Elegí uno y jugamos. Esta vez terminamos la partida antes de discutir las reglas."],
            leo: ["Hay Memory, rompecabezas, Ta-Te-Ti y ruleta. ¡Dale, elegí uno! Si juego con Ale, seguro trae un reglamento más largo que la partida."],
            nico: ["Podés jugar Memory, armar un rompecabezas o probar Ta-Te-Ti. También está la ruleta si tenés ganas de probar suerte."]
        });
    }

    if (/\b(tienda|tickets|ticket|descuento|cartas|skins|avatar|fondos|coleccion)\b/.test(mensaje)) {
        return elegirFraseDinoLocal(dino, {
            ale: ["La tienda ofrece fondos, ropa, cartas, skins e imágenes para rompecabezas. Un ticket permite elegir 10%, 20% o 50% de descuento en un artículo."],
            leo: ["En la tienda hay fondos, ropa, cartas, skins y más. Los tickets dan 10%, 20% o 50% de descuento en artículos. Ale revisó esa regla tres veces."],
            nico: ["En la tienda hay fondos, ropa, cartas, skins e imágenes para rompecabezas. Los tickets descuentan 10%, 20% o 50% en artículos."]
        });
    }

    if (/\b(fondo|musica|sonido|configuracion|personalizar)\b/.test(mensaje)) {
        return elegirFraseDinoLocal(dino, {
            ale: ["En Ajustes podés configurar el sonido y elegir fondos. La sección Colección sirve para revisar las imágenes que tenés."],
            leo: ["Podés cambiar el sonido y los fondos desde Ajustes. Si después no te acordás cuál elegiste, está la Colección... sí, hasta yo puedo seguir ese plan 😄."],
            nico: ["En Ajustes podés cambiar el sonido y elegir fondos; después podés ver tus imágenes en Colección."]
        });
    }

    if (/\b(personalidad|como eres|como sos|describite|describete|quien eres|quien sos|tu edad)\b/.test(mensaje) && perfil) {
        return elegirFraseDinoLocal(dino, {
            ale: ["Soy Ale, tengo 25 años. Suelo organizar los planes y cuidar a mis hermanos; aunque a veces me toca recordarles que el plan existía."],
            leo: ["Soy Leo, tengo 23 años. Tengo energía, ideas y una habilidad especial para hacer que Ale pregunte «¿qué hiciste ahora?»."],
            nico: ["Soy Nico, tengo 21 años. Suelo ser tranquilo y ayudar a que mis hermanos se entiendan, pero también me gusta bromear y hacer la mía."]
        });
    }

    if (/^(hola|holi|buenas|buen dia|buenas tardes|buenas noches|que onda|hey|ey|ola)( ale| leo| nico)?$/.test(mensaje)) {
        return elegirFraseDinoLocal(dino, {
            ale: ["Hola, ¿cómo estás? Contame, te escucho."],
            leo: ["¡Eeeey, hola! ¿Qué onda? ¿Qué hacemos?"],
            nico: ["¡Hola! ¿Cómo va? Qué bueno que viniste a charlar."]
        });
    }

    if (/\b(como estas|como andas|que tal estas|todo bien|como va)\b/.test(mensaje)) {
        const respuestas = {
            ale: ["Bien, gracias. Organizando un par de cosas y cuidando que mis hermanos no conviertan el día en un caos."],
            leo: ["¡Re bien! Con energía para hacer algo. Ale todavía no sabe qué, así que tenemos unos minutos 😄."],
            nico: ["Bien, tranqui. Estaba charlando con mis hermanos. ¿Vos cómo andás?"]
        };
        return elegirFraseDinoLocal(dino, respuestas);
    }

    if (/\b(que haces|que andas haciendo|en que andas|estas haciendo)\b/.test(mensaje)) {
        const respuestas = {
            ale: ["Estoy organizando el próximo plan. Esta vez voy a explicar las reglas antes de que Leo empiece."],
            leo: ["Acá pensando una idea buenísima. Si Ale pregunta, todavía no la puse en práctica 😅."],
            nico: ["Acá charlando un rato y tratando de que mis hermanos no conviertan todo en competencia."]
        };
        return elegirFraseDinoLocal(dino, respuestas);
    }

    if (/\b(free fire|freefire)\b/.test(mensaje)) {
        return elegirFraseDinoLocal(dino, {
            ale: ["Sí, jugamos Free Fire. Me gusta armar una estrategia, aunque a veces Leo se adelanta y Nico termina salvando la partida."],
            leo: ["¡Obvio! Jugamos Free Fire. Ale arma el plan, Nico juega mejor de lo que admite y yo le pongo emoción a la partida 😄."],
            nico: ["Sí, jugamos Free Fire. Ale suele organizar, Leo improvisa bastante y yo intento que el equipo llegue entero al final."]
        });
    }

    if (/\b(me aburro|estoy aburrido|estoy aburrida|aburrimiento)\b/.test(mensaje)) {
        return elegirFraseDinoLocal(dino, {
            ale: ["Podés probar Memory, rompecabezas, Ta-Te-Ti o la ruleta. Elegí uno y hacemos algo; ya tengo un plan."],
            leo: ["¡No te aburras! Hay Memory, rompecabezas, Ta-Te-Ti y ruleta. Elegí rápido antes de que Ale nos organice un torneo de cuatro horas 😄."],
            nico: ["Si querés, podemos charlar o podés probar Memory, rompecabezas, Ta-Te-Ti o la ruleta. ¿Cuál te gusta más?"]
        });
    }

    if (/\b(gracias|muchas gracias|te agradezco)\b/.test(mensaje)) {
        return elegirFraseDinoLocal(dino, {
            ale: ["De nada. Me alegra que te haya servido; si necesitás algo más, decime."],
            leo: ["¡De nada! Cobro en Dino monedas... mentira, hoy es gratis 😄."],
            nico: ["¡De nada! Me alegra haberte ayudado 🙂."]
        });
    }

    if (/\b(chiste|contame algo gracioso|hazme reir|haceme reir)\b/.test(mensaje)) {
        const chistes = {
            ale: ["Leo dijo que hoy iba a seguir el plan. Ese sí que fue un buen chiste 😄."],
            leo: ["Le pregunté a Ale si tenía un plan para divertirse. Me mostró una lista con horarios... ¡y el chiste se escribió solo! 😅"],
            nico: ["Ale organiza hasta quién cuenta los chistes. Leo se adelanta, así que yo solo trato de que no discutan por el remate 😄."]
        };
        return elegirFraseDinoLocal(dino, chistes[nombreDino] || ["¿Qué hace un Dino cuando se ríe? ¡Un raawr de felicidad! 🦖"]);
    }

    if (/\b(chau|adios|hasta luego|nos vemos|me voy)\b/.test(mensaje)) {
        return elegirFraseDinoLocal(dino, {
            ale: ["Nos vemos. Que tengas un buen día; cuidate."],
            leo: ["¡Chau! Volvé pronto, que justo estaba por contar algo... bueno, ya me olvidé 😄."],
            nico: ["¡Nos vemos! Cuando quieras seguimos charlando 👋."]
        });
    }

    return null;
}

window.responderDinoLocal = function (mensaje, dino) {
    if (typeof mensaje !== "string" || !dino || typeof dino.nombre !== "string") {
        return null;
    }

    const mensajeNormalizado = normalizarMensajeDinoLocal(mensaje);
    if (!mensajeNormalizado || necesitaGeminiDinoLocal(mensajeNormalizado)) {
        return null;
    }

    return responderConocimientoDinoLocal(mensajeNormalizado, dino);
};
