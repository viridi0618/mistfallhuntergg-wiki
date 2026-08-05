import type { GuideSection } from "@/lib/types";
import type { LocalizedPageData } from "@/lib/localized-types";
import {
  COMMUNITY_AMA, DEVNOTE_6, DEVNOTE_7, KNOWN_ISSUES_OFFICIAL, LAUNCH_ANNOUNCEMENT, LAUNCH_FAQ, LAUNCH_UPDATE,
  OFFICIAL_SITE, STEAM, STEAM_NEWS, TWITCH_DROPS, XBOX,
} from "./sources.ts";

const UPDATED = "2026-08-01";
const PUBLISHED = "2026-08-01";
const OFFICIAL_URL = "https://mistfallhunter.com/";
const STEAM_URL = "https://store.steampowered.com/app/3282300/Mistfall_Hunter/";
const imagePool = ["site-01", "site-03", "site-06", "steam-07", "steam-06", "site-15", "site-07", "steam-03"];

type PageSpec = Omit<LocalizedPageData, "updated" | "published" | "heroImage" | "heroImageAlt" | "heroImageCaption" | "heroImageSourceUrl" | "contentImages"> & {
  imageIndex: number;
  heroAlt: string;
  heroCaption: string;
  contentImageAlt: string;
  contentCaption: string;
  updated?: string;
  published?: string;
  category?: string;
  keyword?: string;
};

function page(spec: PageSpec): LocalizedPageData {
  const heroKey = imagePool[spec.imageIndex % imagePool.length];
  const contentKey = imagePool[(spec.imageIndex + 1) % imagePool.length];
  const heroOnSteam = heroKey.startsWith("steam-");
  const contentOnSteam = contentKey.startsWith("steam-");
  const localizedSourceLabel = (onSteam: boolean) => spec.locale === "es"
    ? (onSteam ? "Galería oficial de Steam" : "Sitio oficial de Mistfall Hunter")
    : (onSteam ? "Offizielle Steam-Galerie" : "Offizielle Mistfall-Hunter-Website");
  const allSections = [...spec.sections, ...additionalSections(spec.path)];
  const lead = keywordLead(spec.path);
  const sections = allSections.map((section, index) => index === 0 && lead
    ? { ...section, paragraphs: [lead, ...(section.paragraphs ?? [])] }
    : section);
  return {
    ...spec,
    sections,
    updated: spec.updated ?? UPDATED,
    published: spec.published ?? PUBLISHED,
    heroImage: `/images/official/${heroKey}.webp`,
    heroImageAlt: spec.heroAlt,
    heroImageCaption: spec.heroCaption,
    heroImageSourceUrl: heroOnSteam ? STEAM_URL : OFFICIAL_URL,
    contentImages: [{
      src: `/images/official/${contentKey}.webp`, alt: spec.contentImageAlt, caption: spec.contentCaption,
      sourceLabel: localizedSourceLabel(contentOnSteam), sourceUrl: contentOnSteam ? STEAM_URL : OFFICIAL_URL, width: 1600, height: 900,
      placementAfterHeading: spec.sections[0]?.heading,
    }],
  };
}

function keywordLead(path: string) {
  const leads: Record<string, string> = {
    "/es/": "Mistfall Hunter en español necesita algo más que títulos traducidos: esta guía conecta cada respuesta con su contexto, versión y evidencia.",
    "/es/guia-principiantes/": "Esta guía para principiantes de Mistfall Hunter organiza las primeras decisiones para que puedas aprender sin arriesgar equipo innecesario.",
    "/es/como-extraer/": "Aprender a extraer en Mistfall Hunter significa preparar recursos y posición antes de comenzar el regreso.",
    "/es/clases/": "Las clases de Mistfall Hunter cambian alcance, recursos y función, por lo que deben compararse dentro de un modo concreto.",
    "/es/mejor-clase/": "La mejor clase de Mistfall Hunter depende de la tarea, el tamaño del grupo y el coste de cada error.",
    "/es/mejor-clase-solo/": "La mejor clase para jugar solo en Mistfall Hunter debe funcionar sin protección de equipo y conservar una salida.",
    "/es/tier-list-clases/": "Esta tier list de clases de Mistfall Hunter es un marco editorial fechado, no una clasificación oficial.",
    "/es/builds/": "Las builds de Mistfall Hunter deben explicar su función, versión, modo y sacrificios antes de recomendar piezas.",
    "/es/jugar-solo/": "Jugar solo en Mistfall Hunter exige una build autosuficiente y una decisión de extracción tomada con antelación.",
    "/es/servidores/": "Los servidores de Mistfall Hunter deben describirse con los países confirmados y sin inventar un estado en vivo.",
    "/es/bloqueo-regional/": "El bloqueo regional de Mistfall Hunter depende de la región registrada en la cuenta de tienda, no solo de la ubicación física.",
    "/es/codigos/": "Los códigos de Mistfall Hunter solo pueden llamarse activos cuando una fuente oficial confirma texto, vigencia, recompensa y canje.",
    "/de/": "Der Mistfall Hunter Guide auf Deutsch führt von einem klar beschriebenen Symptom zu einem sicheren, überprüfbaren nächsten Schritt.",
    "/de/einstellungen/": "Mistfall Hunter Einstellungen für stabile Leistung brauchen ein reproduzierbares Ausgangsprofil statt eines angeblichen Universal-Presets.",
    "/de/ruckler-beheben/": "Wer Mistfall Hunter Ruckler beheben will, muss zuerst das wiederkehrende Frame-Time-Muster einordnen.",
    "/de/absturz-beheben/": "Mistfall Hunter Absturz beheben bedeutet zunächst, Plattform, Fehlerstufe und exakte Meldung sauber zu dokumentieren.",
    "/de/server/": "Mistfall Hunter Server lassen sich nur anhand offiziell genannter Länder beschreiben; diese Seite besitzt keine Live-Telemetrie.",
    "/de/region-lock/": "Der Mistfall Hunter Region Lock ist eine Kontoregion-Regel und wird durch Crossplay nicht automatisch aufgehoben.",
  };
  return leads[path];
}

function additionalSections(path: string): GuideSection[] {
  const sections: Record<string, GuideSection[]> = {
    "/es/": [
      { heading: "Cómo usamos las fuentes", paragraphs: [
        "Cada afirmación sensible enlaza el documento que realmente se consultó. La web y las tiendas oficiales sirven para género, plataformas y ciclo básico; el FAQ de lanzamiento cubre crossplay, regiones y despliegues; las notas de desarrollo y de actualización se usan para balance, rendimiento e incidencias. Una fuente aparece al pie de la página porque respalda algo concreto, no para decorar una bibliografía.",
        "La fecha visible indica cuándo se volvió a comprobar la respuesta. Si una nota nueva contradice una guía, prevalece el documento oficial más reciente y se conserva el contexto de versión. En recomendaciones editoriales explicamos el criterio y evitamos palabras como garantizado, mejor oficial o siempre funciona.",
      ] },
      { heading: "Un recorrido recomendado de treinta minutos", paragraphs: [
        "Lee primero el proceso de extracción y memoriza solamente tres ideas: objetivo, recurso de regreso y umbral de salida. Después abre la comparación de clases y elige una que tenga una respuesta defensiva que entiendas. Dedica la primera incursión a movimiento y PvE ordinario; deja la optimización de equipo para cuando puedas repetir el regreso.",
        "Si tu problema es técnico o regional, no cambies varios sistemas. Registra la plataforma y el mensaje exacto, confirma la versión y usa la página de servidores o bloqueo regional. Las guías alemanas de ajustes y errores están disponibles desde el selector, pero no se presentan como traducciones españolas inexistentes.",
      ] },
    ],
    "/es/guia-principiantes/": [
      { heading: "Preparación en el refugio", paragraphs: [
        "Revisa cada objeto como una decisión de riesgo. Lleva una combinación que puedas reemplazar y deja espacio para recoger sin ordenar durante una pelea. Identifica qué habilidad te protege, cuál crea distancia y cuál no debes gastar si planeas retirarte. No necesitas memorizar todos los talentos para empezar; necesitas reconocer el coste de tu acción más comprometida.",
        "Ajusta cámara, controles y audio antes de desplegarte. Una sesión de aprendizaje funciona mejor si no estás cambiando sensibilidad en mitad de cada combate. En grupo, acuerden una frase simple para retirarse y otra para comenzar el regreso; tres objetivos distintos consumen recursos sin crear una ventaja común.",
      ] },
      { heading: "Cómo medir una buena primera sesión", paragraphs: [
        "Cuenta decisiones repetibles, no solamente victorias. Una sesión mejora si reconoces el sonido de una pelea cercana, abandonas una ruta sin salida, conservas curación para el retorno o extraes al alcanzar el umbral que fijaste. Esas señales permanecen útiles aunque cambie el balance de una clase.",
        "Si pierdes varias incursiones, reduce una variable: equipo más barato, ruta más corta o un único objetivo. No respondas copiando la build más cara que encuentres. El problema puede ser posición, momento de retirada o desconocimiento del retorno, y añadir valor al inventario solo aumenta el coste de repetirlo.",
      ] },
    ],
    "/es/como-extraer/": [
      { heading: "Ensayo del regreso paso a paso", paragraphs: [
        "En una incursión de bajo riesgo, localiza el flujo indicado por el juego y observa qué acciones interrumpen tu avance. Tras obtener la Soul of Return, no corras directamente sin revisar salud y habilidades. Acércate por una ruta que puedas abandonar, elimina presión PvE cercana cuando sea razonable y escucha antes de comprometerte.",
        "Al iniciar el retorno, vigila el entorno y conserva la opción defensiva que mejor cubra una interrupción. Si tienes que cancelar para sobrevivir, reevalúa en lugar de repetir desde el mismo ángulo. El éxito no consiste solo en activar la acción: consiste en llegar con recursos suficientes para terminarla.",
      ] },
      { heading: "Errores que confunden el diagnóstico", paragraphs: [
        "No concluyas que el servidor falló si otro jugador te interrumpió o si una criatura seguía dentro del área. Tampoco uses una ruta de Demo como prueba de que un punto siempre aparece en lanzamiento. Captura el mensaje exacto y la fase en que ocurrió antes de buscar una solución.",
        "Si un parche menciona Soul of Return, comprueba plataforma y versión porque la distribución puede depender de aprobación. Una corrección anunciada no garantiza que cualquier síntoma parecido tenga la misma causa. Repite el caso exacto en el cliente actualizado y retira workarounds antiguos cuando ya no sean necesarios.",
      ] },
    ],
    "/es/clases/": [
      { heading: "Decisiones que diferencian a cada clase", paragraphs: [
        "Mercenary pregunta cuándo defender y cuándo recuperar espacio. Sorcerer necesita fabricar tiempo para lanzamientos. Blackarrow convierte distancia en presión, Shadowstrix convierte información en iniciativa, Seer convierte protección en tempo del equipo y Withered Knight convierte alcance en control de carril. Esta lectura es más estable que una letra de tier aislada.",
        "Cuando una clase parece débil, identifica la decisión que falta. Tal vez Blackarrow sigue disparando desde el mismo lugar, Sorcerer abre con su lanzamiento más lento o Shadowstrix usa toda movilidad para entrar. Cambiar de clase puede ocultar el patrón sin corregirlo.",
      ] },
      { heading: "Comparación de clase en dos sesiones", paragraphs: [
        "Elige dos clases y usa metas similares con equipo reemplazable. En la primera sesión registra cuánto recurso necesitas para PvE y si puedes retirarte después de fallar una acción. En la segunda prueba la extracción y, si juegas en trío, observa qué herramienta se vuelve más valiosa cuando un compañero crea espacio.",
        "No combines todos los resultados en una cifra. Conserva notas separadas para aprendizaje, solo y trío. Una elección honesta puede ser la clase con la que tomas mejores decisiones, aunque otra tenga una demostración espectacular en manos expertas.",
      ] },
    ],
    "/es/mejor-clase/": [
      { heading: "Escenarios donde cambia la recomendación", paragraphs: [
        "Un principiante que todavía recibe cada ataque necesita claridad defensiva; ahí Mercenary suele enseñar mejor. Un jugador con buena puntería que reconoce rutas puede aprovechar Blackarrow. Un trío que comunica ventanas obtiene más de Seer que un grupo donde cada integrante pelea por separado.",
        "La composición rival también modifica el valor. Movilidad, alcance y control no existen en vacío. Por eso no declaramos que una clase siempre gana a otra ni convertimos una muestra comunitaria en porcentaje global.",
      ] },
      { heading: "Cuándo revisar tu elección", paragraphs: [
        "Mantén la clase durante suficientes incursiones para separar desconocimiento de límite real. Revisa si puedes explicar tu defensa, tu salida y el recurso que gobierna el ciclo. Si no puedes, vuelve a un loadout simple antes de buscar una clase diferente.",
        "Cambia la recomendación cuando una actualización oficial altera una herramienta central o cuando tu objetivo cambia de solo a trío. No la cambies porque una única partida terminó mal. Fecha la nueva prueba, enlaza la nota y explica qué decisión práctica se modificó.",
      ] },
    ],
    "/es/mejor-clase-solo/": [
      { heading: "Ejemplo de decisión solo", paragraphs: [
        "Imagina que escuchas un combate detrás de una puerta y ya llevas un objeto valioso. Blackarrow puede buscar información desde distancia, pero acercarse para un disparo perfecto arriesga la ruta. Mercenary puede sobrevivir mejor al primer contacto, aunque quizá no pueda separar al rival con la misma facilidad. La mejor decisión puede ser rodear y extraer.",
        "Este ejemplo muestra por qué una clase no garantiza resultados. La información disponible, el inventario y la salida pesan tanto como el kit. Evalúa si la clase te permite rechazar una pelea, no solo si puede iniciarla.",
      ] },
      { heading: "Señales de una build solo saludable", bullets: [
        "Resuelve PvE ordinario sin consumir toda la curación.", "Tiene una respuesta inmediata cuando un rival cierra distancia.",
        "Puede abandonar una posición después de fallar la acción principal.", "No depende de una mejora extremadamente cara para funcionar.",
        "Llega al retorno con recursos y no solo con daño potencial.", "Puedes explicar qué cambiarías tras una derrota concreta." ] },
    ],
    "/es/tier-list-clases/": [
      { heading: "Por qué no asignamos una letra universal", paragraphs: [
        "Una S universal implicaría que aprendizaje, solo, PvE, duelo, trío y extracción premian exactamente lo mismo. No es así. Seer puede aumentar el valor de un equipo coordinado y perder parte de ese trabajo al entrar solo; Blackarrow puede controlar distancia en solo y sufrir si una zona niega sus líneas.",
        "Usamos grupos de recomendación ligados a un contexto. El lector puede comprobar el criterio y decidir si coincide con su objetivo. Si buscas una tabla de daño exacto, esta página no la fabrica cuando los desarrolladores no publican datos comparables.",
      ] },
      { heading: "Registro mínimo para una actualización", bullets: [
        "Número de cliente y fecha de la prueba.", "Modo Solo o Trio y composición completa.", "Objetivo de la build y coste aproximado sin inventar precios universales.",
        "Cambio oficial que motivó la revisión.", "Resultado observado en varias situaciones repetibles.", "Limitaciones de la muestra y puntos aún no confirmados." ] },
    ],
    "/es/builds/": [
      { heading: "Tres plantillas de función", paragraphs: [
        "Una build de principiante prioriza defensa legible, recursos suficientes y piezas reemplazables. Una build solo añade una retirada autónoma y evita depender de que un aliado mantenga al objetivo. Una build de trío puede especializarse más porque otra clase aporta protección, control o alcance.",
        "Estas plantillas no dictan un objeto exacto. Preguntan si el conjunto cumple su trabajo. Si dos piezas compiten por el mismo recurso o exigen ventanas incompatibles, simplifica el ciclo antes de invertir en rareza.",
      ] },
      { heading: "Errores al evaluar una build", paragraphs: [
        "No juzgues por una sola victoria ni por un clip donde el rival no responde. Repite PvE, una retirada y el retorno. Registra cuándo te quedas sin recurso y qué habilidad estaba disponible. Un número alto sin contexto no revela consistencia ni coste de error.",
        "Tampoco confundas el nombre de una configuración con evidencia oficial. El creador puede llamarla best build, pero necesitas versión, modo y explicación. Si una nota cambia la habilidad principal, marca el loadout como pendiente hasta probarlo otra vez.",
      ] },
    ],
    "/es/jugar-solo/": [
      { heading: "Flujo de una incursión solo disciplinada", paragraphs: [
        "Durante los primeros minutos confirma ruta, salida y nivel de recursos. Resuelve un objetivo PvE sin anunciar tu posición más de lo necesario. Después decide si el ruido o inventario justifican cambiar el plan. No sigas un combate simplemente porque parece que otro jugador está herido.",
        "Antes del retorno, deja de buscar valor adicional y prepara la aproximación. Si aparece una amenaza, usa la herramienta de retirada que preservaste. Una extracción temprana consolida aprendizaje y equipo; no necesita ser una incursión espectacular.",
      ] },
      { heading: "Errores habituales en solitario", bullets: [
        "Construir como si un compañero fuera a proteger cada lanzamiento.", "Usar toda movilidad para perseguir y quedar sin salida.",
        "Abrir inventario en el lugar donde terminó una pelea ruidosa.", "Tratar poca curación como motivo para buscar más botín.",
        "Confundir entrenamiento con un modo PvE-only confirmado.", "Copiar rutas antiguas de Demo sin verificar el cliente actual." ] },
    ],
    "/es/servidores/": [
      { heading: "Ejemplo de diagnóstico de grupo", paragraphs: [
        "Si una persona no puede aceptar la invitación y las otras dos sí entran, revisa primero cuenta, plataforma, versión y región de esa persona. Reiniciar el router de todos no es una prueba dirigida. Si los tres reciben el mismo mensaje al mismo tiempo, busca un anuncio oficial antes de modificar redes locales.",
        "Cuando informes el problema, evita escribir solamente servidor caído. Incluye acción, mensaje, hora y zona horaria. Esa información permite separar un fallo de autenticación, una incompatibilidad de versión, una regla regional o un posible incidente de servicio.",
      ] },
      { heading: "Cambios de red que no recomendamos", paragraphs: [
        "No abras rangos amplios de puertos, no desactives seguridad, no cambies la región de cuenta y no uses una VPN como respuesta inicial. Esas acciones pueden introducir otro problema y borrar la evidencia del estado original.",
        "Una comparación por cable o un reinicio del router puede ser reversible. Si no cambia el mismo error, restaura la configuración anterior y registra el resultado. El siguiente paso debe responder a una hipótesis concreta, no acumular ajustes.",
      ] },
    ],
    "/es/bloqueo-regional/": [
      { heading: "Antes de comprar para jugar con amigos", paragraphs: [
        "Cada integrante debe comprobar el país registrado en su tienda y la plataforma donde comprará. Comparen la edición disponible y conserven capturas de la información oficial relevante. Una dirección física actual no necesariamente describe cómo la tienda clasifica una cuenta histórica.",
        "Si el caso no aparece en el FAQ, solicita respuesta al soporte antes de crear otra cuenta o adquirir una segunda copia. No presentes una respuesta de un jugador como garantía de que funcionará para todas las tiendas.",
      ] },
      { heading: "Cómo redactar una consulta al soporte", bullets: [
        "Indica plataforma y tienda sin compartir credenciales.", "Escribe el país de registro que muestra la cuenta.", "Nombra la región del amigo y el objetivo de jugar juntos.",
        "Incluye el mensaje exacto de invitación o matchmaking.", "Pregunta por la política aplicable, no por métodos para eludirla.", "Conserva la respuesta oficial para futuras verificaciones." ] },
    ],
    "/es/codigos/": [
      { heading: "Qué datos debe incluir una campaña real", paragraphs: [
        "Un anuncio verificable debería indicar quién organiza la campaña, qué recompensa entrega, cuándo comienza y termina, en qué plataformas funciona y dónde se introduce el código. Si falta el enlace directo o la vigencia, no podemos etiquetarlo como activo.",
        "Las recompensas por login, cosméticos de pruebas elegibles y contenido de una edición de pago tienen mecanismos distintos. Agruparlos bajo códigos hace que el usuario busque un campo de canje que quizá no exista y oculta requisitos importantes.",
      ] },
    ],
    "/de/": [
      { heading: "Vom Symptom zum passenden Test", paragraphs: [
        "Beschreibe zuerst nur das sichtbare Verhalten: ungleichmäßige Bewegung, dauerhaft niedrige Bildrate, Freeze, Prozessende, Dashboard-Rückkehr oder fehlgeschlagene Einladung. Wähle danach den passenden Ratgeber. Eine präzise Kategorie verhindert, dass du Grafikoptionen wegen eines Kontoproblems oder Netzwerkeinstellungen wegen eines GPU-Limits änderst.",
        "Jeder Test braucht einen Ausgangszustand, eine einzelne Änderung und eine wiederholbare Szene. Ein Erfolgssignal ist nicht nur ein besserer Durchschnittswert: Das exakte Symptom sollte bei derselben Aktion ausbleiben oder messbar seltener werden. Bleibt es unverändert, nimm die Änderung zurück.",
      ] },
      { heading: "Wann offizielle Hilfe wichtiger ist", paragraphs: [
        "Bei einer Kontosperre, Kaufberechtigung, Regionsausnahme oder wiederholbaren Absturzmeldung mit aktuellem Client ist offizieller Support der richtige nächste Schritt. Sende Version, Plattform, Zeitpunkt und kurze Reproduktion, aber keine Passwörter oder vollständigen Kontodaten.",
        "Bei neuen Patch Notes prüft die englische Originalquelle, welche Plattform und Version genannt werden. Eine angekündigte Korrektur kann zeitversetzt eintreffen und bedeutet nicht, dass jedes ähnlich klingende Problem dieselbe Ursache hatte.",
      ] },
    ],
    "/de/einstellungen/": [
      { heading: "Testablauf mit Erfolgssignalen", paragraphs: [
        "Führe drei Durchläufe durch: Ausgangsprofil, eine geänderte Option und Rückkehr zum Ausgangsprofil. Nutze dieselbe Route und einen vergleichbaren Kampf. Ein plausibles Erfolgssignal ist eine wiederholbar ruhigere Frame Time im zweiten Lauf, die nach dem Zurücksetzen wieder zum alten Muster zurückkehrt.",
        "Wenn sich nichts ändert, stelle die Option zurück und gehe zur nächsten Kategorie. Werden nur Texturen reduziert, aber der Effektkampf bleibt identisch, war möglicherweise nicht der Speicher die entscheidende Grenze. Das ist ein nützliches negatives Ergebnis.",
      ] },
      { heading: "CPU-, GPU- und Speicherhinweise vorsichtig lesen", paragraphs: [
        "Eine hohe Auslastung allein benennt nicht automatisch die Ursache. Vergleiche Auflösung und effektlastige Szenen für GPU-Hinweise, viele bewegte Figuren für mögliche CPU-Grenzen und längere Sitzungen für Speicher- oder Temperaturmuster. Veröffentliche daraus keine universelle Diagnose.",
        "Wenn ein Problem nach einem Treiberwechsel begann, nutze nur offizielle Herstellerpakete und dokumentiere die Version. Installiere nicht mehrere Tuning-Tools gleichzeitig. Der sichere Zustand muss jederzeit wiederherstellbar bleiben.",
      ] },
    ],
    "/de/ruckler-beheben/": [
      { heading: "Vom ersten Test zum nächsten Schritt", paragraphs: [
        "Tritt der Ruckler nur beim ersten Durchlauf auf, wiederhole exakt dieselbe Route. Wird der zweite Lauf ruhiger, dokumentiere das Muster und teste nach einem Neustart. Bleibt jeder Lauf gleich, setze ein realistisches Frame-Limit und vergleiche anschließend eine teure Grafikoption.",
        "Tritt das Problem erst nach längerer Spielzeit auf, notiere Temperatur, Speichernutzung und Sitzungsdauer, ohne sofort eine Ursache zu behaupten. Ein Neustart, der das Muster vorübergehend zurücksetzt, ist ein Hinweis für die Eskalation, aber noch kein garantierter Speicherfehler.",
      ] },
      { heading: "Erfolg, Misserfolg und Eskalation", paragraphs: [
        "Erfolg bedeutet, dass dieselbe sichtbare Spitze bei mehreren Wiederholungen verschwindet oder deutlich kleiner wird. Ein einmaliger ruhiger Lauf kann Zufall oder eine andere Spielsituation sein. Bewahre daher Ausgangswerte und Zeitpunkte auf.",
        "Wenn aktuelle Version, SSD, stabiles Limit und einzelne Grafikvergleiche nichts ändern, stoppe weitere Systemtweaks. Sende dem Support Route, Uhrzeit, Hardware, Treiber und ein kurzes Frame-Time-Beispiel. Keine unbekannten Startparameter oder DLLs hinzufügen.",
      ] },
    ],
    "/de/absturz-beheben/": [
      { heading: "Erfolgssignale nach jedem Schritt", paragraphs: [
        "Nach Dateiprüfung oder Treiberwechsel wiederholst du die genaue Absturzstufe. Ein erfolgreicher Test erreicht denselben Punkt mehrfach, ohne dass Prozess, Fehlermeldung oder Dashboard-Rückkehr auftreten. Teste nicht gleichzeitig ein anderes Preset und eine andere Route.",
        "Bleibt der Absturz bestehen, stelle temporäre Overlay- oder Einstellungsänderungen zurück und ergänze das Support-Protokoll. Verschiebt sich die Stufe, notiere auch das; es kann zeigen, dass zwei Symptome vermischt wurden.",
      ] },
      { heading: "Wann du sofort aufhören solltest", bullets: [
        "Wenn eine Anleitung Anti-Cheat-Umgehung verlangt.", "Wenn eine unbekannte DLL oder ausführbare Datei heruntergeladen werden soll.",
        "Wenn Sicherheitssoftware dauerhaft deaktiviert werden soll.", "Wenn Registry oder Systemdateien ohne Sicherung pauschal verändert werden.",
        "Wenn ein Konsolenproblem mit Windows-Treiberbefehlen behandelt wird.", "Wenn mehrere Änderungen keine klare Rückkehr zum Ausgangszustand erlauben." ] },
    ],
    "/de/server/": [
      { heading: "Vom Fehlerbild zur nächsten Prüfung", paragraphs: [
        "Scheitert nur eine Einladung, prüfe Version und Kontoregion des betroffenen Mitglieds. Scheitert Matchmaking für alle gleichzeitig, suche eine zeitnahe offizielle Meldung. Hohe Latenz ohne Fehlermeldung ist wiederum ein anderes Symptom und keine automatische Bestätigung einer Störung.",
        "Ein erfolgreicher Test stellt dieselbe Party mit aktueller Version wieder her, ohne dass unsichere Konto- oder Netzwerkänderungen nötig sind. Bleibt das Problem, dokumentiere Zeit, Zeitzone, Plattform und Nachricht für den Support.",
      ] },
      { heading: "Sichere Netzwerkgrenzen", paragraphs: [
        "Ein Neustart des Routers oder ein Kabelvergleich ist reversibel. Breite Portfreigaben, deaktivierte Firewalls, VPN und Regionswechsel sind keine angemessenen ersten Schritte. Setze einen Test zurück, wenn er das exakte Symptom nicht verändert.",
        "Community-Berichte können auf eine mögliche Störung hinweisen, ersetzen aber weder Live-Telemetrie noch ein offizielles Statement. Bewerte immer Zeitpunkt und betroffene Plattform, bevor du einen Einzelfall verallgemeinerst.",
      ] },
    ],
    "/de/region-lock/": [
      { heading: "Vor Kauf und Party-Gründung prüfen", paragraphs: [
        "Alle Mitglieder sollten Plattform, Store und registriertes Kontoland vergleichen. Wenn eine Kombination nicht im offiziellen FAQ beschrieben ist, frage den Support vor dem Kauf. Eine aktuelle Wohnadresse muss nicht automatisch die historische Store-Klassifizierung ändern.",
        "Ein Erfolgssignal ist eine offizielle Bestätigung für die konkrete Kontokombination, nicht nur ein einzelner Spielerbericht. Speichere den Link oder die Support-Antwort, ohne persönliche Kontodaten öffentlich zu teilen.",
      ] },
      { heading: "Unsichere Umgehungen vermeiden", paragraphs: [
        "Nutze keine VPN, falsche Adressdaten oder Käufe über eine fremde Store-Region als Test. Solche Schritte können gegen Plattformregeln verstoßen, Zahlungsprobleme verursachen und die ursprüngliche Diagnose verfälschen.",
        "Wenn Crossplay nicht funktioniert, prüfe zuerst Version, Einladung und Kontoregion. Plattformkompatibilität ist offiziell bestätigt, aber sie garantiert keinen gemeinsamen Serverzugang bei unterschiedlichen Regionsberechtigungen.",
      ] },
    ],
  };
  return sections[path] ?? [];
}

const esCommon = {
  locale: "es" as const,
  version: "Lanzamiento / Temporada 1",
  platforms: "PC, PlayStation 5 y Xbox Series X|S",
};

const spanishPages: LocalizedPageData[] = [
  page({ ...esCommon, path: "/es/", englishPath: "/", imageIndex: 0, pageType: "website",
    title: "Guía de Mistfall Hunter en español: clases, builds y ayuda",
    description: "Guía de Mistfall Hunter en español con consejos para principiantes, clases, builds, extracción, juego solo, servidores, códigos y respuestas verificadas.",
    h1: "Guía de Mistfall Hunter en español", eyebrow: "Guía independiente • fuentes oficiales • actualización de lanzamiento",
    answer: "Aquí encontrarás rutas claras para aprender Mistfall Hunter: cómo extraer, elegir clase, preparar una build, jugar en solitario y entender servidores, restricciones regionales y recompensas sin confundir rumores con información oficial.",
    informationType: "Centro editorial localizado con hechos oficiales y recomendaciones identificadas",
    sections: [
      { heading: "Qué es Mistfall Hunter", paragraphs: [
        "Mistfall Hunter es un ARPG de extracción PvPvE de fantasía oscura en tercera persona desarrollado por Bellring Games. Cada incursión combina enemigos controlados por el juego, otros Gyldhunters potencialmente hostiles, botín y una salida que debes completar para conservar lo conseguido. La página oficial y las tiendas confirman versiones para Windows PC, PlayStation 5 y Xbox Series X|S.",
        "Esta edición en español no intenta sustituir los nombres que aparecen en la interfaz. Cuando una traducción oficial no está confirmada conservamos términos como Returner Woodling, Soul of Return, Gyldhunter y Gyldenmist. Así puedes reconocerlos dentro del juego y evitamos inventar terminología.",
      ] },
      { heading: "Por dónde empezar", paragraphs: [
        "Si es tu primera sesión, comienza con la guía para principiantes y continúa con la explicación de extracción. El objetivo inicial no es maximizar cada objeto, sino aprender una ruta repetible: entrar con equipo reemplazable, completar una meta corta, conservar curación para el regreso y salir antes de que una ventaja pequeña se convierta en una derrota costosa.",
        "Después compara las seis clases de lanzamiento. Nuestras recomendaciones de clase y tier list son marcos editoriales, no rankings oficiales. No publicamos DPS, tasas de extracción ni probabilidades que Bellring Games no haya proporcionado.",
      ] },
      { heading: "Información sensible a cambios", paragraphs: [
        "Las páginas sobre códigos, servidores, bloqueo regional, juego solo, mejores clases y builds muestran fecha de revisión, versión y fuentes. Los anuncios de Beta o Demo no se trasladan automáticamente al lanzamiento. Cuando una respuesta no está confirmada, se indica de forma explícita.",
        "Para noticias de equilibrio o incidencias, comprueba siempre que tu cliente esté actualizado y abre el anuncio oficial enlazado. Las plataformas pueden recibir una actualización en momentos distintos por procesos de aprobación.",
      ] },
      { heading: "Rutas principales", table: { headers: ["Necesidad", "Guía recomendada", "Qué resuelve"], rows: [
        ["Primera incursión", "Guía para principiantes", "Plan de aprendizaje y gestión de riesgo"],
        ["Salir con el botín", "Cómo extraer", "Returner Woodling y Soul of Return"],
        ["Elegir personaje", "Clases y mejor clase", "Roles, alcance y dificultad"],
        ["Problemas de acceso", "Servidores y bloqueo regional", "Hechos oficiales y límites de cuenta"],
      ] } },
    ],
    faqs: [
      { question: "¿Mistfall Hunter tiene modo solo?", answer: "Sí, se puede entrar en solitario, pero sigue siendo una experiencia PvPvE y no una campaña privada exclusivamente PvE." },
      { question: "¿Existe una mejor clase oficial?", answer: "No. Bellring Games no publica una tier list oficial; las recomendaciones de este sitio son editoriales y dependen del modo y la versión." },
      { question: "¿Hay códigos activos?", answer: "No encontramos códigos públicos de canje confirmados en las fuentes oficiales revisadas el 31 de julio de 2026." },
    ],
    related: ["/es/guia-principiantes/", "/es/como-extraer/", "/es/clases/", "/es/builds/", "/es/armas/", "/es/recompensas/"],
    sources: [OFFICIAL_SITE, STEAM, LAUNCH_FAQ],
    heroAlt: "Puente de una fortaleza en ruinas junto a la Gyldenmist dorada", heroCaption: "La fortaleza de Weavereach presenta el mundo que recorren las guías en español.",
    contentImageAlt: "Tres Gyldhunters combatiendo criaturas Corroded en una caverna", contentCaption: "El combate de escuadrón ilustra el ciclo PvPvE explicado en esta introducción." }),

  page({ ...esCommon, path: "/es/guia-principiantes/", englishPath: "/beginner-guide/", imageIndex: 1, pageType: "article",
    title: "Guía para principiantes de Mistfall Hunter: primeras partidas",
    description: "Aprende Mistfall Hunter desde cero con un plan para las primeras incursiones, combate, botín, extracción, elección de clase y errores que conviene evitar.",
    h1: "Guía para principiantes de Mistfall Hunter", eyebrow: "Primeras incursiones • riesgo controlado • lanzamiento",
    answer: "Empieza con equipo que puedas reemplazar, practica una sola decisión por incursión y define antes de entrar cuándo vas a extraer. El progreso más útil al principio es comprender el ciclo, no perseguir el botín más raro.",
    informationType: "Hechos oficiales más orientación editorial para principiantes",
    sections: [
      { heading: "Entiende el ciclo antes de arriesgar equipo", paragraphs: [
        "La estructura oficial es sencilla de describir y difícil de ejecutar: exploras, combates, recoges recursos y buscas regresar con vida. Hay criaturas Corroded y otros jugadores dentro del mismo entorno PvPvE. Morir puede hacerte perder lo que llevabas, así que cada decisión de continuar tiene un coste real.",
        "Prepara una meta corta antes de desplegarte. Puede ser reconocer una ruta, probar la defensa de tu clase o completar una tarea. Lleva curación y recursos suficientes para el regreso; llenar cada espacio del inventario no sirve si llegas sin herramientas al último combate.",
      ] },
      { heading: "Plan para las primeras cinco incursiones", bullets: [
        "Incursión 1: practica movimiento, cámara, esquiva y una cadena de ataques contra PvE ordinario.",
        "Incursión 2: aprende cuándo abrir inventario y cómo abandonar una pelea desfavorable.",
        "Incursión 3: sigue el proceso de Returner Woodling y Soul of Return sin buscar botín adicional.",
        "Incursión 4: fija un umbral de salida, por ejemplo poca curación o un objeto que no quieres perder.",
        "Incursión 5: completa una meta compacta y extrae mientras la situación todavía es favorable.",
      ], note: "El lugar exacto, la probabilidad de aparición y una ruta universal no están confirmados por fuentes oficiales; no los presentamos como hechos.", subsections: [
        { heading: "Equipo que puedas reemplazar", paragraphs: ["Usa un conjunto sencillo cuyo coste no cambie tu forma de jugar. Así puedes repetir una ruta y distinguir un error de decisión de una diferencia causada por el equipo."] },
        { heading: "Un objetivo por incursión", paragraphs: ["Elige práctica de movimiento, PvE, retorno o una tarea concreta. Cuando el objetivo se cumple, compara el valor de salir con el riesgo real de continuar."] },
      ] },
      { heading: "Elige una clase que enseñe decisiones claras", paragraphs: [
        "Mercenary es nuestra recomendación editorial para aprender porque Sword & Shield ofrece una respuesta defensiva legible. Blackarrow puede funcionar para quien ya controla distancia y puntería, mientras que Seer aporta apoyo directo a un grupo. Eso no convierte a ninguna clase en la mejor de forma permanente.",
        "Prueba primero el ritmo de recursos, el alcance y la recuperación de una clase. No copies una build avanzada hasta que entiendas qué problema resuelve. El sistema de Loadout puede compartir configuraciones, pero un share code importa una selección; no demuestra que sea óptima para tu modo o parche.",
      ] },
      { heading: "Errores de principiantes que cuestan una incursión", paragraphs: [
        "El error más frecuente es interpretar cada combate como obligatorio. Si ya gastaste curación, una habilidad de escape o la ventaja de posición, retirarte puede ser la mejor jugada. También conviene ordenar el inventario fuera de rutas visibles y escuchar antes de entrar en una sala donde otro equipo ya combate.",
        "Después de una derrota registra la primera decisión mala, no solamente el golpe final. Tal vez elegiste un pasillo sin salida, seguiste recogiendo con poca curación o comenzaste el retorno demasiado tarde. Corregir una causa concreta produce más aprendizaje que cambiar todo el equipo a la vez.",
      ] },
    ],
    faqs: [
      { question: "¿Qué clase debería usar un principiante?", answer: "Mercenary es nuestra recomendación de aprendizaje, no una designación oficial. Sword & Shield ofrece una estructura defensiva clara." },
      { question: "¿Debo pelear contra todos los jugadores?", answer: "No. La extracción y la supervivencia importan; retirarte de un intercambio desfavorable puede proteger tu objetivo y tus recursos." },
      { question: "¿Qué debo aprender primero?", answer: "Movimiento, defensa, gestión de curación y el proceso de regreso. Añade optimización de build después." },
    ],
    related: ["/es/como-extraer/", "/es/clases/", "/es/jugar-solo/"], sources: [OFFICIAL_SITE, LAUNCH_FAQ, STEAM],
    heroAlt: "Tres Gyldhunters luchando contra criaturas Corroded dentro de una caverna", heroCaption: "Una incursión oficial muestra por qué movimiento, recursos y cooperación importan al empezar.",
    contentImageAlt: "Gyldhunter alzando una mano ante un efecto circular de regreso", contentCaption: "La imagen de regreso acompaña el primer plan práctico de extracción." }),

  page({ ...esCommon, path: "/es/como-extraer/", englishPath: "/how-to-extract/", imageIndex: 2, pageType: "article",
    title: "Cómo extraer en Mistfall Hunter: Soul of Return y regreso",
    description: "Explicación verificada de cómo extraer en Mistfall Hunter usando un Returner Woodling y una Soul of Return, con decisiones seguras para completar el regreso.",
    h1: "Cómo extraer en Mistfall Hunter", eyebrow: "Proceso oficial • Soul of Return • guía de lanzamiento",
    answer: "La web oficial indica que debes derrotar a un Returner Woodling, obtener una Soul of Return y completar el proceso de regreso dentro de la incursión. Conserva recursos para ese momento y evita tratar la extracción como un trámite automático.",
    informationType: "Secuencia oficial con recomendaciones editoriales de riesgo",
    sections: [
      { heading: "La secuencia de extracción confirmada", paragraphs: [
        "El sitio oficial describe el núcleo del regreso: derrota a un Returner Woodling, recoge una Soul of Return y úsala para regresar. Mantenemos esos nombres en inglés porque son términos propios del juego y una traducción oficial estable no está confirmada para esta guía.",
        "La fuente no proporciona una tabla pública completa de ubicaciones fijas, tiempos universales ni probabilidades. Por eso esta página no inventa mapas de aparición. Aprende a reconocer el objetivo y comprueba las indicaciones de la interfaz en tu versión actual.",
      ] },
      { heading: "Prepárate antes de iniciar el regreso", bullets: [
        "Recupera suficiente salud y revisa los recursos defensivos que aún tienes.",
        "Escucha movimiento cercano y comprueba las rutas por las que podría llegar otro Gyldhunter.",
        "Deja de ordenar el inventario cuando estés expuesto; decide antes qué objeto abandonarías.",
        "No gastes toda la movilidad para llegar unos segundos antes si la necesitarás durante la defensa.",
      ], subsections: [
        { heading: "Confirma la Soul of Return", paragraphs: ["Comprueba que el Returner Woodling fue derrotado y que el objeto necesario está disponible antes de cambiar de ruta. No dependas de coordenadas antiguas de una Demo."] },
        { heading: "Prepara salud, cobertura y salida", paragraphs: ["Recupera recursos, escucha los accesos y conserva una habilidad para interrumpir o abandonar el intento. En trío, decide quién realiza la acción y quién vigila."] },
      ] },
      { heading: "Cuándo dejar de recoger botín", paragraphs: [
        "Define un umbral antes de entrar. Puede ser haber completado una tarea, tener poca curación o encontrar un objeto valioso. El umbral evita que una emoción de corto plazo cambie un plan que ya había tenido éxito.",
        "Una bolsa casi llena no obliga a seguir explorando. Compara la ganancia probable de otra sala con el coste de perder toda la incursión. Para principiantes, varias extracciones modestas enseñan más rutas y permiten practicar más veces que una única apuesta extrema.",
      ] },
      { heading: "Si el regreso falla", paragraphs: [
        "Separa la causa observable de la explicación. Registra si perdiste la Soul of Return, si otro jugador interrumpió la acción, si una criatura seguía presionando o si viste un mensaje de error. No asumas que todo fallo es un problema de servidor.",
        "Los anuncios de incidencias de lanzamiento incluyeron un caso relacionado con consumo adicional de Soul of Return y una actualización posterior mencionó correcciones. Comprueba la versión actual y el anuncio oficial antes de aplicar consejos antiguos de Beta o Demo.",
      ] },
    ],
    faqs: [
      { question: "¿Qué objeto necesito para extraer?", answer: "La web oficial nombra la Soul of Return, obtenida al derrotar a un Returner Woodling." },
      { question: "¿Existe una ubicación de extracción fija?", answer: "Las fuentes oficiales revisadas no ofrecen una lista universal de coordenadas o probabilidades; sigue la información de tu incursión actual." },
      { question: "¿La extracción es segura al comenzar?", answer: "No debes tratarla como segura. Conserva salud, movilidad e información para completar el proceso." },
    ],
    related: ["/es/guia-principiantes/", "/es/jugar-solo/", "/es/servidores/"], sources: [OFFICIAL_SITE, KNOWN_ISSUES_OFFICIAL, LAUNCH_UPDATE],
    heroAlt: "Gyldhunter frente a un efecto circular luminoso de regreso", heroCaption: "El arte oficial representa el momento de regreso que esta guía explica.",
    contentImageAlt: "Las seis clases de lanzamiento de Mistfall Hunter posando juntas", contentCaption: "La elección de clase también determina las herramientas disponibles para preparar el regreso." }),

  page({ ...esCommon, path: "/es/clases/", englishPath: "/classes/", imageIndex: 3, pageType: "collection",
    title: "Clases de Mistfall Hunter: las seis clases de lanzamiento",
    description: "Compara las seis clases de Mistfall Hunter: Mercenary, Sorcerer, Blackarrow, Shadowstrix, Seer y Withered Knight, con roles y dificultad práctica.",
    h1: "Clases de Mistfall Hunter", eyebrow: "Seis clases • armas y funciones • lanzamiento",
    answer: "Mistfall Hunter se lanzó con seis clases: Mercenary, Sorcerer, Blackarrow, Shadowstrix, Seer y Withered Knight. Cada una cambia armas, recursos, alcance, movilidad y función; elige según las decisiones que quieres practicar, no por una tier list sin contexto.",
    informationType: "Resumen oficial de clases con comparación editorial",
    sections: [
      { heading: "Comparación rápida de las seis clases", table: { headers: ["Clase", "Identidad práctica", "Exigencia principal"], rows: [
        ["Mercenary", "Frente y defensa legible", "Bloqueo, parry y compromiso"], ["Sorcerer", "Daño y control a distancia", "Crear ventanas de lanzamiento"],
        ["Blackarrow", "Presión física de rango", "Puntería y separación"], ["Shadowstrix", "Movilidad y emboscada", "Entrar con una salida"],
        ["Seer", "Apoyo, protección y control", "Prioridades de equipo"], ["Withered Knight", "Alcance y control de zona", "Recuperaciones deliberadas"],
      ] } },
      { heading: "Clases para aprender y jugar solo", paragraphs: [
        "Nuestra sugerencia de aprendizaje es Mercenary con Sword & Shield porque su plan defensivo se entiende con claridad. Para juego solo y a distancia, Blackarrow puede resultar accesible si mantienes separación; aun así, las notas de lanzamiento ajustaron aspectos de su rendimiento y la recomendación no debe convertirse en un ranking permanente.",
        "Shadowstrix y Sorcerer suelen castigar más los errores de tiempo y posición. Seer gana valor cuando el grupo coordina curación, protección y control. Withered Knight puede dominar pasillos y espacios, pero comprometer una acción lenta sin revisar la recuperación abre una ventana al rival.",
      ] },
      { heading: "Armas y builds no son lo mismo que una clase", paragraphs: [
        "La clase define el marco, pero la dirección final depende del arma, habilidades, talentos, equipo y Affix Gems. Dos personas de la misma clase pueden cumplir trabajos distintos. Antes de copiar una configuración, identifica si busca PvE eficiente, supervivencia en solitario, presión PvP o apoyo de trío.",
        "El sistema de Loadout permite guardar y compartir configuraciones. Un código compartido no es un código de recompensa y tampoco certifica una mejor build. Revisa la versión, el modo y el coste del equipo antes de importarlo.",
      ] },
      { heading: "Cómo probar una clase", bullets: [
        "Usa equipo reemplazable y repite la misma ruta corta.", "Prueba una respuesta defensiva, una forma de crear espacio y una herramienta de salida.",
        "Observa el recurso de clase y la recuperación después de ataques comprometidos.", "Evalúa por qué sobreviviste o fallaste antes de cambiar todos los talentos.",
      ] },
    ],
    faqs: [
      { question: "¿Cuántas clases hay en el lanzamiento?", answer: "Las fuentes oficiales de lanzamiento muestran seis clases." },
      { question: "¿Cuál es la clase más fácil?", answer: "No hay una etiqueta oficial. Recomendamos Mercenary como marco de aprendizaje por su ruta defensiva legible." },
      { question: "¿Puedo cambiar de clase durante una incursión?", answer: "Esta guía no encontró confirmación oficial que permita cambiar de clase dentro de una incursión; comprueba la interfaz actual antes de asumirlo." },
    ],
    related: ["/es/mejor-clase/", "/es/mejor-clase-solo/", "/es/tier-list-clases/", "/es/builds/"], sources: [STEAM, DEVNOTE_7, COMMUNITY_AMA],
    heroAlt: "Las seis clases de Mistfall Hunter reunidas en arte promocional", heroCaption: "La galería oficial presenta las seis clases disponibles en el lanzamiento.",
    contentImageAlt: "Interfaz de talentos de Mistfall Hunter con nodos conectados", contentCaption: "Los talentos amplían la identidad de cada clase después de elegirla." }),

  page({ ...esCommon, path: "/es/mejor-clase/", englishPath: "/best-class/", imageIndex: 4, pageType: "article",
    title: "Mejor clase de Mistfall Hunter según modo y experiencia",
    description: "Compara la mejor clase de Mistfall Hunter para principiantes, solo, trío, rango y apoyo con recomendaciones editoriales y límites de evidencia claros.",
    h1: "Mejor clase de Mistfall Hunter", eyebrow: "Comparación editorial • sin ranking oficial • lanzamiento",
    answer: "No existe una mejor clase oficial para todos. Recomendamos Mercenary para aprender, Blackarrow para solo a distancia y Seer para apoyo directo de trío; son elecciones editoriales condicionadas por modo, habilidad y versión.",
    informationType: "Recomendación editorial basada en funciones oficiales y notas recientes",
    warning: "Bellring Games no publica una tier list oficial. No tratamos observaciones de comunidad como datos de victoria o DPS.",
    sections: [
      { heading: "La mejor clase depende del trabajo", paragraphs: [
        "Antes de comparar nombres, define qué necesitas: una defensa clara para aprender, presión a distancia, movilidad de emboscada, control de zona o soporte para un trío. Una clase sobresaliente en una composición coordinada puede exigir demasiado cuando entra sola.",
        "También importa el coste del error. Un ataque potente con recuperación larga puede ser excelente si el equipo crea la ventana; el mismo movimiento puede ser un riesgo innecesario cuando nadie cubre la retirada.",
      ] },
      { heading: "Nuestras recomendaciones de lanzamiento", table: { headers: ["Objetivo", "Recomendación", "Motivo y límite"], rows: [
        ["Aprender", "Mercenary", "Defensa legible; sigue necesitando gestión de espacio"], ["Solo a distancia", "Blackarrow", "Control de distancia; depende de puntería y rutas"],
        ["Apoyo de trío", "Seer", "Curación, protección y control; menor valor si el equipo no coordina"], ["Emboscada", "Shadowstrix", "Movilidad e iniciativa; exige conservar una salida"],
      ] } },
      { heading: "Cómo interpretar balance y comunidad", paragraphs: [
        "Las notas oficiales pueden confirmar cambios de habilidades o sistemas, pero no crean un ranking completo. Comentarios de jugadores ayudan a detectar preguntas para probar; un solo informe no demuestra frecuencia ni superioridad universal.",
        "La primera actualización de lanzamiento incluyó ajustes de clase. Por eso cualquier recomendación debe conservar fecha y versión. Si un parche cambia el coste, control o recuperación de una herramienta central, vuelve a probar la función antes de mover la clase en una tier list.",
      ] },
      { heading: "Prueba comparativa sin perder recursos", bullets: [
        "Usa rutas y equipo de valor parecido.", "Mide decisiones observables: daño recibido, recursos gastados y posibilidad de retirarte.",
        "Separa rendimiento PvE, duelo y extracción; no los combines en una nota única.", "Conserva la clase que te permite explicar tus errores y repetir una solución." ] },
    ],
    faqs: [
      { question: "¿Cuál es la mejor clase para empezar?", answer: "Mercenary es nuestra recomendación editorial para aprender, sobre todo por la claridad de Sword & Shield." },
      { question: "¿Hay una mejor clase oficial?", answer: "No. Las fuentes oficiales describen clases y cambios de balance, pero no publican un ranking oficial." },
      { question: "¿La mejor clase cambia entre solo y trío?", answer: "Sí puede cambiar la recomendación, porque el apoyo, la protección de lanzamientos y el control coordinado tienen un valor distinto." },
    ],
    related: ["/es/clases/", "/es/mejor-clase-solo/", "/es/tier-list-clases/"], sources: [DEVNOTE_7, LAUNCH_UPDATE, COMMUNITY_AMA],
    heroAlt: "Interfaz de talentos de Mistfall Hunter con mejoras conectadas", heroCaption: "La mejor elección depende de cómo conviertes talentos y herramientas en una función concreta.",
    contentImageAlt: "Gyldhunter solitario ante una abertura luminosa en una caverna", contentCaption: "Una ruta expuesta recuerda que la clase debe evaluarse junto con posición y retirada." }),

  page({ ...esCommon, path: "/es/mejor-clase-solo/", englishPath: "/best-solo-class/", imageIndex: 5, pageType: "article",
    title: "Mejor clase para jugar solo en Mistfall Hunter",
    description: "Elige la mejor clase solo de Mistfall Hunter según alcance, movilidad, defensa y extracción, con una recomendación prudente para el lanzamiento.",
    h1: "Mejor clase para jugar solo en Mistfall Hunter", eyebrow: "Juego solo • supervivencia • recomendación editorial",
    answer: "Blackarrow es nuestra recomendación de lanzamiento para jugadores solo que controlan puntería y distancia; Mercenary ofrece un aprendizaje más defensivo. No es un resultado oficial ni una garantía de extracción.",
    informationType: "Recomendación editorial; no hay datos oficiales de extracción por clase",
    warning: "El juego solo continúa siendo PvPvE. No equivale a un modo privado exclusivamente PvE.",
    sections: [
      { heading: "Qué necesita una clase en solitario", paragraphs: [
        "Sin compañeros, cada build debe encontrar objetivos, resolver PvE, responder a presión de jugadores y conservar una salida. Valora alcance, movilidad, defensa inmediata, recuperación y capacidad de funcionar sin que otra persona cree la ventana.",
        "El daño máximo teórico no basta. Una herramienta que exige exposición prolongada puede rendir menos que otra más modesta pero repetible. También debes poder abandonar una pelea cuando la extracción ya tiene más valor que otro intercambio.",
      ] },
      { heading: "Blackarrow y Mercenary", paragraphs: [
        "Blackarrow puede observar y presionar desde distancia, lo que ayuda a decidir si continuar o separarse. La clase pierde esa ventaja cuando falla desde el mismo ángulo y permite que el rival cierre. Tras un disparo comprometido, cambia la línea y conserva una ruta.",
        "Mercenary reduce parte de la exigencia de puntería y ofrece una lectura defensiva más directa. Su peligro es bloquear sin reposicionarse o comprometer ataques pesados cuando no existe ventana. Elegir entre ambos depende de si gestionas mejor distancia o contacto.",
      ] },
      { heading: "Otras clases en solo", table: { headers: ["Clase", "Puede aportar", "Riesgo principal"], rows: [
        ["Sorcerer", "Control y daño a distancia", "Lanzamientos largos sin protección"], ["Shadowstrix", "Iniciativa y movilidad", "Gastar la salida en la entrada"],
        ["Seer", "Protección y sostenimiento", "Invertir demasiado en utilidad de trío"], ["Withered Knight", "Alcance y zonas", "Recuperaciones lentas en espacio abierto"],
      ] } },
      { heading: "Rutina de prueba solo", bullets: [
        "Entra con una meta pequeña y equipo reemplazable.", "Conserva al menos una respuesta para una tercera parte inesperada.",
        "Anota cuánto recurso requiere el PvE antes de buscar otra pelea.", "Decide el umbral de extracción antes de encontrar el objeto valioso." ] },
    ],
    faqs: [
      { question: "¿Blackarrow es siempre la mejor clase solo?", answer: "No. Es nuestra recomendación de lanzamiento para quien mantiene distancia; el resultado depende de habilidad, build, parche y situación." },
      { question: "¿Solo significa PvE?", answer: "No. El modo solo sigue dentro de la estructura PvPvE según la información oficial revisada." },
      { question: "¿Qué clase solo es más fácil para aprender?", answer: "Mercenary puede ofrecer una ruta defensiva más clara para un principiante que todavía no controla distancia y puntería." },
    ],
    related: ["/es/jugar-solo/", "/es/clases/", "/es/builds/"], sources: [OFFICIAL_SITE, DEVNOTE_7, COMMUNITY_AMA],
    heroAlt: "Gyldhunter solitario frente a una salida luminosa dentro de una caverna", heroCaption: "La ruta en solitario sitúa la recomendación de clase en su contexto real de riesgo.",
    contentImageAlt: "Puente de una fortaleza en ruinas junto a una tormenta dorada", contentCaption: "El acceso expuesto de la fortaleza refuerza la importancia de alcance, cobertura y salida." }),

  page({ ...esCommon, path: "/es/tier-list-clases/", englishPath: "/class-tier-list/", imageIndex: 6, pageType: "article",
    title: "Tier list de clases de Mistfall Hunter por modo",
    description: "Tier list prudente de clases de Mistfall Hunter para aprendizaje, solo y trío, con fecha, versión, criterios y límites de evidencia claramente indicados.",
    h1: "Tier list de clases de Mistfall Hunter", eyebrow: "Marco por modo • lanzamiento • revisión necesaria",
    answer: "No hay una tier list oficial. Nuestro marco de lanzamiento coloca las clases por función y modo, no por DPS inventado: Mercenary destaca para aprender, Blackarrow para solo a distancia y Seer para apoyo coordinado.",
    informationType: "Clasificación editorial provisional; sin telemetría oficial",
    warning: "Esta clasificación se basa en funciones oficiales y experiencia comunitaria reciente, no en datos oficiales de balance, victoria o extracción.",
    sections: [
      { heading: "Cómo leer esta tier list", paragraphs: [
        "Una letra aislada oculta demasiada información. Dividimos la evaluación entre aprendizaje, solo y trío. La misma clase puede subir cuando un compañero protege sus acciones y bajar cuando debe crear su propia ventana.",
        "No usamos valores de DPS o porcentajes que no están publicados. La posición es una recomendación editorial fechada y debe revisarse cuando cambian habilidades, recursos, recuperación o emparejamiento.",
      ], subsections: [
        { heading: "Compara dentro del mismo modo", paragraphs: ["Solo, trío, aprendizaje y extracción premian herramientas distintas. Usa únicamente la columna que coincide con tu objetivo antes de comparar dos clases."] },
        { heading: "Distingue función y daño", paragraphs: ["Protección, control, alcance y retirada pueden decidir una incursión sin producir el golpe más grande. La lista no sustituye esos trabajos por cifras no verificadas."] },
      ] },
      { heading: "Marco provisional de lanzamiento", table: { headers: ["Contexto", "Grupo recomendado", "Lectura correcta"], rows: [
        ["Aprendizaje", "Mercenary", "Plan defensivo claro; no significa victoria automática"], ["Solo a distancia", "Blackarrow", "Buena separación si la puntería y ruta acompañan"],
        ["Trío coordinado", "Seer", "Apoyo directo cuando el grupo convierte protección en ventaja"], ["Alta ejecución", "Shadowstrix / Sorcerer", "Gran valor si se crean ventanas y se conserva salida"],
        ["Control de espacio", "Withered Knight", "Fuerte en carriles; exige respetar recuperación"],
      ] } },
      { heading: "Evidencia y límites", paragraphs: [
        "Las descripciones y notas oficiales permiten verificar armas, funciones y cambios concretos. Las impresiones de jugadores ayudan a decidir qué comparar, pero no convierten una experiencia individual en tasa global. No mezclamos información de Demo con el cliente de lanzamiento sin confirmación.",
        "Si una actualización modifica una herramienta central, la posición queda pendiente hasta repetir pruebas en el modo correspondiente. El nombre de una clase no cambia; su coste de error y su sinergia sí pueden hacerlo.",
      ] },
      { heading: "Construye tu propia comparación", bullets: [
        "Usa el mismo objetivo y nivel de riesgo.", "Registra supervivencia y capacidad de retirada además del daño.",
        "Separa PvE, duelo y extracción.", "Anota versión, plataforma y composición del equipo.",
        "No presentes una muestra personal como clasificación oficial." ] },
    ],
    faqs: [
      { question: "¿Es esta una tier list oficial?", answer: "No. Bellring Games no ha publicado una tier list oficial; este es un marco editorial provisional." },
      { question: "¿Qué clase está arriba para solo?", answer: "Recomendamos Blackarrow para jugadores que mantienen distancia, pero no es una garantía ni una posición permanente." },
      { question: "¿Cuándo se actualizará la clasificación?", answer: "Cuando una nota oficial o pruebas recientes cambien una función central. Cada revisión conserva fecha y versión." },
    ],
    related: ["/es/mejor-clase/", "/es/mejor-clase-solo/", "/es/builds/"], sources: [DEVNOTE_7, LAUNCH_UPDATE, COMMUNITY_AMA],
    heroAlt: "Puente de una fortaleza en ruinas junto a la Gyldenmist dorada", heroCaption: "Una tier list útil debe considerar el entorno y no solo el potencial de daño.",
    contentImageAlt: "Gyldhunter de combate cuerpo a cuerpo atacando junto a un aliado", contentCaption: "El combate cooperativo muestra por qué las funciones cambian entre solo y trío." }),

  page({ ...esCommon, path: "/es/builds/", englishPath: "/builds/", imageIndex: 7, pageType: "collection",
    title: "Builds de Mistfall Hunter: cómo crear una configuración útil",
    description: "Guía de builds de Mistfall Hunter para principiantes, solo y trío: define una función, alinea armas, habilidades, talentos y Affix Gems, y prueba con seguridad.",
    h1: "Builds de Mistfall Hunter", eyebrow: "Loadouts • seis clases • criterios de prueba",
    answer: "Una build útil empieza por una función: limpiar PvE, sobrevivir solo, crear presión PvP o apoyar un trío. Alinea arma, habilidades, talentos, equipo y Affix Gems, y valida la configuración en tu versión antes de invertir recursos.",
    informationType: "Direcciones editoriales de build; no hay mejor configuración oficial",
    warning: "No afirmamos daño máximo, tasas de drop ni una best build confirmada cuando las fuentes oficiales no aportan esos datos.",
    sections: [
      { heading: "Empieza por el trabajo de la build", paragraphs: [
        "Escribe una frase antes de elegir piezas: esta configuración debe sobrevivir sola, limpiar PvE con bajo consumo, iniciar una emboscada o mantener vivo al trío. Cada selección debe apoyar ese trabajo o resolver una debilidad que lo impide.",
        "Una build que intenta cubrir todos los escenarios suele gastar recursos sin alcanzar una respuesta fiable. Conserva una defensa, una salida y un ciclo repetible; después añade especialización si el modo lo permite.",
      ] },
      { heading: "Capas que deben estar alineadas", table: { headers: ["Capa", "Pregunta de control", "Error común"], rows: [
        ["Arma", "¿Qué alcance y recuperación define?", "Elegir solo por rareza"], ["Habilidades", "¿Cómo crea, gana o abandona una ventana?", "Gastar toda la movilidad al entrar"],
        ["Talentos", "¿Refuerzan el ciclo principal?", "Dividir puntos entre planes incompatibles"], ["Equipo y Affix Gems", "¿Aportan utilidad medible?", "Copiar sin revisar coste o versión"],
      ] }, subsections: [
        { heading: "Define el trabajo", paragraphs: ["Describe el resultado que la build debe repetir y elimina las piezas que no lo apoyan. Un objetivo claro permite evaluar el conjunto sin depender de una etiqueta como best build."] },
        { heading: "Conserva defensa y retirada", paragraphs: ["Comprueba qué harás si falla la primera acción. Una build práctica necesita sobrevivir a la respuesta y abandonar un combate que ya no favorece la extracción."] },
      ] },
      { heading: "Share codes y configuraciones importadas", paragraphs: [
        "Los desarrolladores describieron un sistema de Loadout con configuraciones guardadas y share codes. Esos códigos importan elecciones de equipo y gemas; no son códigos de canje, no entregan recompensas y no demuestran que una build sea la mejor.",
        "Antes de importar, pide modo, versión y presupuesto. Sustituye piezas que no puedas reemplazar y prueba una situación controlada. Si la configuración no tiene respuesta defensiva o salida, identifica qué sacrificio pretende compensarlo.",
      ] },
      { heading: "Prueba y registro", bullets: [
        "Usa equipo reemplazable en una ruta conocida.", "Cambia una capa por vez.", "Registra recursos gastados en PvE ordinario.",
        "Comprueba si puedes disengage cuando aparece otra amenaza.", "Repite después de notas de balance relevantes." ] },
    ],
    faqs: [
      { question: "¿Cuál es la mejor build de Mistfall Hunter?", answer: "No existe una mejor build oficial universal. El modo, versión, coste y ejecución cambian la respuesta." },
      { question: "¿Un share code da recompensas?", answer: "No. Un share code de Loadout importa una configuración; no es un código de canje." },
      { question: "¿Debo copiar una build de Beta?", answer: "No sin verificar. Las habilidades, costes y balance pueden cambiar; confirma que corresponde al cliente actual." },
    ],
    related: ["/es/clases/", "/es/mejor-clase/", "/es/jugar-solo/"], sources: [DEVNOTE_7, COMMUNITY_AMA, STEAM],
    heroAlt: "Gyldhunter acorazado atacando cuerpo a cuerpo junto a un aliado", heroCaption: "Una build debe explicar cómo sostiene su función durante un combate real.",
    contentImageAlt: "Puente de una fortaleza destruida junto a la Gyldenmist dorada", contentCaption: "La fortaleza de Weavereach aporta contexto al riesgo para el que se prepara cada build." }),

  page({ ...esCommon, path: "/es/jugar-solo/", englishPath: "/solo-mode/", imageIndex: 5, pageType: "article",
    title: "Cómo jugar solo en Mistfall Hunter: modo y estrategia",
    description: "Guía para jugar solo en Mistfall Hunter: qué confirma el modo PvPvE, cómo preparar rutas, elegir peleas, crear una build autosuficiente y extraer.",
    h1: "Cómo jugar solo en Mistfall Hunter", eyebrow: "Solo PvPvE • rutas y extracción • lanzamiento",
    answer: "Puedes jugar Mistfall Hunter en solitario, pero el entorno sigue siendo PvPvE: no es una campaña privada que elimine jugadores hostiles. Entra con una meta corta, una build autosuficiente y una ruta de retirada.",
    informationType: "Estado oficial del modo y estrategia editorial para solo",
    warning: "No se ha confirmado un modo completo de progresión exclusivamente PvE en las fuentes revisadas.",
    sections: [
      { heading: "Qué significa jugar solo", paragraphs: [
        "Jugar solo describe el tamaño de tu grupo, no la ausencia de PvP. Los materiales oficiales mantienen la identidad PvPvE y distinguen entornos Solo y Trio. El entrenamiento o tutorial no debe presentarse como una campaña completa sin jugadores.",
        "Esta diferencia cambia la preparación. Debes resolver PvE sin gastar toda la curación y conservar una respuesta para un Gyldhunter que escucha el combate. Una victoria contra criaturas puede convertirse en una mala posición si permaneces recogiendo demasiado tiempo.",
      ] },
      { heading: "Build autosuficiente", bullets: [
        "Incluye una respuesta defensiva inmediata.", "Mantén una herramienta de movimiento o control para retirarte.",
        "Elige un ciclo que funcione sin que un aliado proteja el lanzamiento.", "No sacrifiques toda supervivencia por daño teórico.",
        "Lleva una cantidad de recursos compatible con el objetivo, no con una incursión perfecta." ], subsections: [
        { heading: "Respuesta inmediata", paragraphs: ["Reserva una defensa, control o movimiento que funcione sin ayuda. Si toda la seguridad depende de que un aliado cree espacio, la build todavía no es autosuficiente."] },
        { heading: "Salida después del error", paragraphs: ["Prueba qué ocurre cuando falla tu habilidad principal. Debes poder recuperar distancia o abandonar la pelea sin gastar todos los recursos destinados al regreso."] },
      ] },
      { heading: "Rutas, sonido y terceros", paragraphs: [
        "Evita combatir en un punto sin salida conocida. Antes de comprometer una habilidad larga, identifica dónde recuperarás espacio. Si escuchas otra pelea, decide si puedes rodearla; acercarte solo porque hay jugadores ocupados también te expone a un tercer participante.",
        "Tras una pelea, prioriza salud, información y salida antes que inventario. Cambia de ángulo y no permanezcas en el lugar exacto donde el ruido anunció tu posición.",
      ] },
      { heading: "Umbral de extracción para solo", paragraphs: [
        "Elige el umbral antes del despliegue: tarea completada, curación baja o hallazgo valioso. Un jugador solo no tiene compañero que cubra el regreso, por lo que conservar movilidad y control puede valer más que otra pieza de botín.",
        "Si la situación cambia, extraer temprano es una decisión de progreso. No confundas una incursión corta con una incursión fallida. El objetivo es repetir un proceso que puedas explicar y mejorar.",
      ] },
    ],
    faqs: [
      { question: "¿Se puede jugar Mistfall Hunter solo?", answer: "Sí. Los materiales oficiales distinguen Solo y Trio, pero el juego solo continúa dentro de la estructura PvPvE." },
      { question: "¿Hay un modo PvE-only?", answer: "No se encontró confirmación oficial de una campaña completa de progresión exclusivamente PvE en las fuentes revisadas." },
      { question: "¿Qué debería llevar en solo?", answer: "Una respuesta defensiva, una salida y recursos suficientes para el objetivo y el regreso; evita depender de protección de equipo." },
    ],
    related: ["/es/mejor-clase-solo/", "/es/como-extraer/", "/es/builds/"], sources: [OFFICIAL_SITE, LAUNCH_FAQ, COMMUNITY_AMA],
    heroAlt: "Gyldhunter solitario observando una abertura brillante en una caverna", heroCaption: "El juego solo exige leer rutas expuestas y conservar una retirada.",
    contentImageAlt: "Puente de una fortaleza de Weavereach bajo una tormenta dorada", contentCaption: "El puente expuesto ilustra por qué una ruta segura importa tanto como el combate." }),

  page({ ...esCommon, path: "/es/servidores/", englishPath: "/servers/", imageIndex: 6, pageType: "article",
    title: "Servidores de Mistfall Hunter: regiones y estado confirmado",
    description: "Consulta los países de despliegue de servidores de Mistfall Hunter confirmados oficialmente, la diferencia entre ubicación y estado, y el límite de Norteamérica.",
    h1: "Servidores de Mistfall Hunter", eyebrow: "Países confirmados • región de cuenta • sin estado en vivo",
    answer: "El FAQ oficial de lanzamiento nombra despliegues en China, Estados Unidos, Alemania, Singapur y Brasil. Esta lista describe países anunciados, no todas las ciudades ni un monitor de estado en tiempo real.",
    informationType: "Hechos oficiales de despliegue; no es telemetría en vivo",
    warning: "No afirmamos que todos los servidores estén operativos ni publicamos regiones que no aparecen en fuentes oficiales.",
    sections: [
      { heading: "Países de servidor confirmados", table: { headers: ["País nombrado", "Qué confirma", "Qué no confirma"], rows: [
        ["China", "País de despliegue oficial", "Ciudad, capacidad o estado actual"], ["Estados Unidos", "Servidor de Norteamérica", "Acceso de cualquier región"],
        ["Alemania", "País de despliegue oficial", "Cobertura exacta de toda Europa"], ["Singapur", "País de despliegue oficial", "Latencia individual"],
        ["Brasil", "País de despliegue oficial", "Todas las rutas de Sudamérica"],
      ] } },
      { heading: "Servidor, matchmaking y región de cuenta", paragraphs: [
        "La presencia de un servidor en un país no garantiza que cada cuenta pueda seleccionarlo. El FAQ oficial establece una regla específica para cuentas de tienda registradas en Estados Unidos, Canadá, México, Puerto Rico y las Islas Vírgenes de EE. UU.: reciben la versión norteamericana y acceden a servidores norteamericanos ubicados en Estados Unidos.",
        "Crossplay no elimina esa política. Antes de diagnosticar una conexión, separa la región de cuenta, la plataforma, la versión del cliente y el error exacto.",
      ] },
      { heading: "Cómo comprobar una incidencia", bullets: [
        "Confirma que el cliente esté actualizado.", "Comprueba anuncios oficiales actuales antes de cambiar la red local.",
        "Registra hora, zona horaria, plataforma, región de cuenta y mensaje exacto.", "Si falla un solo miembro, prueba la cuenta o plataforma afectada; si fallan todos a la vez, prioriza información de servicio.",
      ] },
      { heading: "Lo que esta página no puede confirmar", paragraphs: [
        "No disponemos de telemetría oficial integrada, por lo que no mostramos un indicador verde o rojo. Tampoco inferimos ciudades, proveedores, ping o capacidad a partir del país anunciado.",
        "Algunos jugadores pueden informar de latencia o colas, pero una experiencia individual no define el estado global. Si usamos reportes comunitarios en el futuro, se marcarán como tales y se conservará la hora.",
      ] },
    ],
    faqs: [
      { question: "¿Dónde hay servidores de Mistfall Hunter?", answer: "El FAQ oficial nombra China, Estados Unidos, Alemania, Singapur y Brasil como países de despliegue." },
      { question: "¿Esta página muestra estado en vivo?", answer: "No. No tenemos telemetría oficial en tiempo real y evitamos presentar una estimación como estado confirmado." },
      { question: "¿Crossplay permite elegir cualquier servidor?", answer: "No necesariamente. La región de la cuenta puede limitar acceso; crossplay no reemplaza esa regla oficial." },
    ],
    related: ["/es/bloqueo-regional/", "/es/jugar-solo/", "/es/guia-principiantes/"], sources: [LAUNCH_FAQ, XBOX, COMMUNITY_AMA],
    heroAlt: "Puente de una fortaleza de Weavereach junto a una tormenta dorada", heroCaption: "La imagen ambiental no representa estado de servicio; esta página solo enumera países confirmados.",
    contentImageAlt: "Gyldhunter acorazado luchando junto a un compañero", contentCaption: "El juego en grupo depende de acceso compatible y no demuestra que un servidor esté operativo." }),

  page({ ...esCommon, path: "/es/bloqueo-regional/", englishPath: "/region-lock/", imageIndex: 7, pageType: "article",
    title: "Bloqueo regional de Mistfall Hunter: cuentas de Norteamérica",
    description: "Entiende el bloqueo regional de Mistfall Hunter para cuentas de Estados Unidos, Canadá, México, Puerto Rico e Islas Vírgenes de EE. UU.",
    h1: "Bloqueo regional de Mistfall Hunter", eyebrow: "Región de cuenta • Norteamérica • FAQ oficial",
    answer: "El FAQ oficial indica que las cuentas de tienda registradas en Estados Unidos, Canadá, México, Puerto Rico y las Islas Vírgenes de EE. UU. reciben la versión norteamericana y solo acceden a servidores norteamericanos ubicados en Estados Unidos.",
    informationType: "Política oficial de lanzamiento; revisión por cuenta y plataforma",
    warning: "No afirmamos que Mistfall Hunter carezca de restricciones regionales. Cambiar VPN, tienda o país de cuenta puede introducir riesgos y no es una solución recomendada.",
    sections: [
      { heading: "A quién afecta la regla confirmada", paragraphs: [
        "La redacción oficial se basa en el país donde está registrada la cuenta de tienda. Nombra Estados Unidos, Canadá, México, Puerto Rico y las Islas Vírgenes de EE. UU. Esas cuentas reciben el build norteamericano y acceden únicamente a servidores norteamericanos ubicados en Estados Unidos.",
        "No ampliamos la lista a países que el anuncio no nombra. Tampoco afirmamos cómo se resuelven todos los casos de mudanza, doble residencia o cuentas históricas; para esos supuestos se necesita confirmación del soporte oficial.",
      ] },
      { heading: "Qué no cambia con crossplay", paragraphs: [
        "El emparejamiento entre plataformas está confirmado, pero crossplay describe compatibilidad de plataforma, no libertad de región. Dos jugadores pueden tener plataformas compatibles y aun así estar separados por la política de cuenta.",
        "Antes de comprar o formar un grupo internacional, cada persona debería revisar el país de su cuenta de tienda y la edición disponible. No crees una cuenta nueva ni cambies datos basándote únicamente en una guía de terceros.",
      ] },
      { heading: "Lista de comprobación para un grupo", bullets: [
        "Anota plataforma y país de registro de la tienda de cada jugador.", "Confirma que todos usan la versión actual.",
        "Compara el mensaje exacto al invitar o emparejar.", "Revisa el FAQ y soporte oficiales si la situación de cuenta no aparece descrita.",
        "Evita VPN, compra en otra región o cambios de país no autorizados." ] },
      { heading: "Casos no confirmados", paragraphs: [
        "Las fuentes revisadas no ofrecen una matriz completa de cada país, tienda y excepción. La ausencia de una mención no prueba que no exista restricción. Por eso la respuesta correcta para un caso no documentado es que aún no está confirmado.",
        "Si un jugador informa de un resultado diferente, ese dato puede orientar una consulta, pero no sustituye a la política oficial ni demuestra que funcione para todas las cuentas.",
      ] },
    ],
    faqs: [
      { question: "¿Mistfall Hunter tiene bloqueo regional?", answer: "Sí existe al menos la restricción norteamericana descrita oficialmente para cuentas de cinco territorios nombrados." },
      { question: "¿Puedo jugar con amigos de otra región mediante crossplay?", answer: "Crossplay no anula la región de cuenta. La posibilidad depende de que las cuentas puedan acceder al mismo entorno de servidor." },
      { question: "¿Una VPN soluciona el bloqueo?", answer: "No recomendamos VPN ni cambios de región. No existe una solución oficial confirmada de ese tipo y puede afectar cuenta, compra o conexión." },
    ],
    related: ["/es/servidores/", "/es/jugar-solo/"], sources: [LAUNCH_FAQ, XBOX],
    heroAlt: "Gyldhunter acorazado atacando junto a otro combatiente", heroCaption: "El arte de grupo contextualiza una guía sobre cuentas que intentan jugar en la misma región.",
    contentImageAlt: "Puente de una fortaleza en ruinas junto a la Gyldenmist dorada", contentCaption: "La fortaleza oficial aporta contexto visual sin presentarse como un mapa de regiones." }),

  page({ ...esCommon, path: "/es/codigos/", englishPath: "/codes/", imageIndex: 0, pageType: "article",
    title: "Códigos de Mistfall Hunter: estado de canje verificado",
    description: "Estado actualizado de códigos de Mistfall Hunter: no hay códigos públicos de canje confirmados y explicamos la diferencia con rewards, Drops, keys y share codes.",
    h1: "Códigos de Mistfall Hunter", eyebrow: "Sin códigos confirmados • revisión oficial • 1 de agosto de 2026",
    answer: "No hay códigos públicos de canje de Mistfall Hunter confirmados en las fuentes oficiales revisadas el 1 de agosto de 2026. El regalo de lanzamiento con Gesture: Thumbs Up y 500 Soul Coins llega por el correo del juego y no requiere una cadena pública.",
    informationType: "Estado oficial revisado; no se publican códigos no verificados",
    warning: "No introduzcas credenciales en generadores de códigos ni trates un share code de build como código de recompensa.",
    sections: [
      { heading: "Estado actual de códigos", paragraphs: [
        "Revisamos el sitio oficial, la tienda y los anuncios oficiales de Steam disponibles para el lanzamiento. No encontramos un código público de canje con texto, recompensa, vigencia y método de uso confirmados. Por eso no mostramos una lista artificial de códigos activos.",
        "El regalo de lanzamiento con Gesture: Thumbs Up y 500 Soul Coins se entrega mediante el correo del juego. No es un código de canje y no requiere introducir una cadena pública. El anuncio fija como fecha límite el 1 de septiembre de 2026 a las 00:00 UTC.",
        "La fecha de revisión importa. Una campaña futura puede cambiar la respuesta; cuando exista un anuncio directo, añadiremos su periodo, requisitos, plataforma y enlace oficial.",
      ] },
      { heading: "No todos los códigos significan recompensa", table: { headers: ["Tipo", "Función", "¿Es redeem code?"], rows: [
        ["Loadout share code", "Importa configuración de equipo y gemas", "No"], ["Game key", "Activa una copia del juego", "No"],
        ["Giveaway", "Promoción con reglas propias", "No necesariamente"], ["Twitch Drop", "Recompensa por campaña y cuenta vinculada", "No necesariamente"],
        ["Regalo de lanzamiento por correo", "Gesture: Thumbs Up y 500 Soul Coins para cuentas elegibles", "No; llega mediante el correo del juego"],
        ["Redeem code", "Cadena oficial introducida en un canal confirmado", "Sí, solo si está anunciado"],
      ] } },
      { heading: "Cómo verificaremos un código futuro", bullets: [
        "Anuncio directo en un canal oficial.", "Texto exacto del código y método de canje.", "Fecha de inicio y final con zona horaria.",
        "Plataformas, regiones y requisitos.", "Recompensa nombrada sin inventar cantidad o probabilidad.", "Prueba de expiración cuando termine la campaña." ] },
      { heading: "Evita estafas y listas recicladas", paragraphs: [
        "Una página que promete moneda ilimitada, un generador o una contraseña compartida no constituye evidencia. No descargues ejecutables ni introduzcas tu cuenta en sitios de terceros. Los códigos de otros juegos o de una prueba antigua tampoco deben trasladarse al lanzamiento.",
        "Si ves un supuesto código, busca el anuncio oficial enlazado. Una captura sin URL puede estar recortada o desactualizada. Hasta confirmar origen y vigencia, la etiqueta correcta es no confirmado.",
      ] },
    ],
    faqs: [
      { question: "¿Hay códigos activos de Mistfall Hunter?", answer: "No se encontraron códigos públicos de canje confirmados en fuentes oficiales revisadas el 1 de agosto de 2026." },
      { question: "¿El regalo de 500 Soul Coins es un código?", answer: "No. Es una recompensa para cuentas elegibles que se entrega mediante el correo del juego." },
      { question: "¿Un share code de build da objetos?", answer: "No. Importa una configuración de Loadout; no otorga moneda, skins ni recompensas." },
      { question: "¿Dónde se publicaría un código real?", answer: "Debe aparecer en un canal oficial con texto, vigencia, condiciones y método de canje verificables." },
    ],
    related: ["/es/", "/es/builds/", "/es/guia-principiantes/"], sources: [OFFICIAL_SITE, STEAM_NEWS, LAUNCH_UPDATE, LAUNCH_FAQ],
    heroAlt: "Puente de una fortaleza en ruinas junto a la Gyldenmist dorada", heroCaption: "El arte oficial no representa un código ni una pantalla de canje.",
    contentImageAlt: "Tres Gyldhunters combatiendo criaturas Corroded en una caverna", contentCaption: "La escena de juego acompaña la distinción entre recompensas y cadenas de canje." }),

  page({ ...esCommon, path: "/es/recompensas/", englishPath: "/rewards/", imageIndex: 0, pageType: "article", category: "Recompensas", keyword: "recompensas mistfall hunter", updated: "2026-08-05", published: "2026-08-05",
    title: "Recompensas de Mistfall Hunter: Drops, regalos y códigos",
    description: "Consulta las recompensas de Mistfall Hunter: códigos, Twitch Drops, regalos de lanzamiento, Pase de batalla y reglas de reclamación verificadas.",
    h1: "Recompensas de Mistfall Hunter", eyebrow: "Estado verificado",
    answer: "Actualmente no hay códigos públicos de canje de Mistfall Hunter confirmados en las fuentes oficiales revisadas el 5 de agosto de 2026. La campaña oficial más reciente de Twitch Drops se celebró del 14 al 22 de junio y ya terminó. Las recompensas de lanzamiento, el Pase de batalla, los regalos por elegibilidad y los códigos para compartir builds son sistemas diferentes y no deben presentarse como códigos activos.",
    informationType: "Estado oficial de recompensas con límites verificados",
    warning: "Esta página separa los códigos de canje, Twitch Drops, regalos de lanzamiento, recompensas por inicio de sesión y códigos para compartir configuraciones. Una recompensa antigua o un Share Code no es un código de canje activo.",
    sections: [
      { heading: "Estado actual de las recompensas", paragraphs: [
        "El estado debe comprobarse por mecanismo. Una publicación oficial puede anunciar una recompensa sin publicar un código que el jugador deba escribir.",
        "A fecha del 5 de agosto de 2026, no se encontró ningún código público de canje activo en las fuentes oficiales revisadas. La campaña de Twitch Drops publicada en la web oficial terminó el 22 de junio. Las recompensas de lanzamiento y del Pase de batalla siguen sus propias condiciones dentro del juego.",
      ], table: { headers: ["Tipo", "Estado", "Cómo se obtiene"], rows: [
        ["Códigos de canje", "No hay códigos públicos confirmados", "Solo mediante un código publicado oficialmente"],
        ["Twitch Drops", "La última campaña terminó el 22 de junio", "Vincular cuentas, ver streams elegibles y reclamar en Twitch"],
        ["Recompensas de lanzamiento", "Dependen de la elegibilidad y del periodo indicado", "Inicio de sesión o correo dentro del juego"],
        ["Pase de batalla de la Temporada 1", "Desbloqueo gratuito descrito oficialmente", "Siete días acumulados de inicio de sesión"],
        ["Share Codes de builds", "Disponibles como herramienta de configuración", "Importan equipamiento y gemas; no conceden objetos"],
      ] } },
      { heading: "Códigos de canje y códigos para compartir builds", paragraphs: [
        "Un código de canje entrega una recompensa cuando el desarrollador publica un texto válido, una vigencia, una recompensa y un método de introducción.",
        "Un código para compartir una configuración, o Loadout Share Code, cumple otra función. Importa una combinación de equipamiento y gemas de afijo en el sistema de Loadout. No entrega moneda, cosméticos, armas ni recompensas.",
        "No introduzcas un Share Code en una supuesta página de recompensas ni compartas contraseñas, códigos de seguridad o tokens de sesión con terceros.",
      ] },
      { heading: "Última campaña oficial de Twitch Drops", paragraphs: [
        "La última campaña oficial publicada se celebró del 14 al 22 de junio, en horario del Pacífico. La campaña ya terminó y sus recompensas se muestran aquí únicamente como historial.",
        "El cofre de selección permitía elegir un arma de calidad Excellent para cualquier clase. El cosmético Returner Woodling – Head estaba limitado a una obtención por cuenta.",
      ], table: { headers: ["Tiempo de visualización", "Recompensa", "Condición"], rows: [
        ["15 minutos", "Healing Elixir ×5 y Gyldenblod ×200", "Vincular la cuenta del juego con Twitch"],
        ["30 minutos", "Excellent Weapon Selection Chest", "Reclamar en Twitch dentro de las 24 horas posteriores a la notificación"],
        ["60 minutos", "Returner Woodling – Head", "Una vez por cuenta y reclamación dentro de 24 horas"],
      ] } },
      { heading: "Cómo reclamar correctamente un Twitch Drop", paragraphs: [
        "Vincula la cuenta del juego y la cuenta de Twitch únicamente mediante las rutas oficiales. Durante una campaña activa, mira un canal que tenga Drops habilitados para Mistfall Hunter y completa el tiempo requerido.",
        "Cuando Twitch envíe la notificación, reclama la recompensa en un máximo de 24 horas. Después, inicia sesión en el juego. Si ya estabas conectado, cierra la sesión y vuelve a entrar.",
        "Si la recompensa sigue sin aparecer 72 horas después de reclamarla, contacta con el soporte oficial e incluye la campaña, la hora de reclamación, la plataforma y la región de la cuenta. No compartas información privada.",
      ] },
      { heading: "Recompensas de lanzamiento y Pase de batalla", paragraphs: [
        "Las recompensas de lanzamiento no son códigos públicos. Se conceden mediante condiciones como el inicio de sesión, la participación previa, la edición comprada o el correo dentro del juego.",
        "La Temporada 1 utiliza el Pase de batalla “Slumbering Contract”. El anuncio oficial explica que puede desbloquearse gratuitamente después de siete días acumulados de inicio de sesión. El atuendo “Slumbering Servant” forma parte de las recompensas del Pase y se obtiene mediante la actividad normal y los tokens correspondientes.",
        "La Deluxe Edition incluye recompensas cosméticas exclusivas y Fate Coins. Antes de comprar o actualizar una edición, comprueba la descripción actual de la tienda, porque el contenido comercial y los precios pueden variar por región.",
      ] },
      { heading: "Qué no está confirmado", paragraphs: [
        "No se presentan como activas campañas antiguas, recompensas de pruebas cerradas ni regalos enviados durante una beta.",
        "Tampoco se publican códigos procedentes de páginas de terceros, vídeos, comentarios o generadores de códigos sin una confirmación oficial.",
        "La ausencia de un código hoy no demuestra que nunca vaya a existir uno. Esta página debe actualizarse cuando Bellring Games publique un código, una campaña o un nuevo periodo de elegibilidad con detalles verificables.",
      ] },
    ],
    faqs: [
      { question: "¿Hay códigos activos de Mistfall Hunter?", answer: "No se encontró ningún código público de canje confirmado en las fuentes oficiales revisadas el 5 de agosto de 2026." },
      { question: "¿Los códigos para compartir builds dan recompensas?", answer: "No. Importan una configuración de equipamiento y gemas de afijo, pero no conceden objetos, monedas ni cosméticos." },
      { question: "¿Están activos los Twitch Drops?", answer: "No se ha confirmado una nueva campaña activa para agosto. La campaña oficial más reciente terminó el 22 de junio." },
      { question: "¿Cuánto tiempo tengo para reclamar un Twitch Drop?", answer: "La campaña oficial indicó que debía reclamarse en Twitch dentro de las 24 horas posteriores a la notificación." },
      { question: "¿Qué hago si no recibo el Drop?", answer: "Vuelve a iniciar sesión y espera el periodo oficial de entrega. Si sigue sin aparecer 72 horas después de reclamarlo, contacta con el soporte oficial." },
    ],
    related: ["/es/codigos/", "/es/armas/", "/es/builds/", "/es/clases/"],
    sources: [TWITCH_DROPS, LAUNCH_UPDATE, LAUNCH_ANNOUNCEMENT, LAUNCH_FAQ, DEVNOTE_6, STEAM],
    heroAlt: "Puente de una fortaleza en ruinas junto a la Gyldenmist dorada", heroCaption: "El arte oficial no representa un código ni una pantalla de canje.",
    contentImageAlt: "Tres Gyldhunters combatiendo criaturas Corroded en una caverna", contentCaption: "La escena de juego acompaña la distinción entre recompensas y cadenas de canje." }),

  page({ ...esCommon, path: "/es/armas/", englishPath: "/weapons/", imageIndex: 3, pageType: "collection", category: "Jugabilidad", keyword: "armas mistfall hunter", updated: "2026-08-05", published: "2026-08-05",
    title: "Armas de Mistfall Hunter: lista por clase y sistemas",
    description: "Consulta todas las armas confirmadas de Mistfall Hunter por clase, sus estilos oficiales, armas sagradas, gemas de afijo y códigos de build.",
    h1: "Armas de Mistfall Hunter", eyebrow: "Guía de armas",
    answer: "Cada clase de Mistfall Hunter tiene familias de armas confirmadas que determinan sus habilidades, talentos y ritmo de combate. Blackarrow utiliza Bow y tiene una segunda arma prevista para una futura temporada, aunque su nombre y fecha concreta no se han anunciado. Sorcerer utiliza Staff y tiene una segunda arma en desarrollo, pero su nombre final y su fecha de lanzamiento siguen sin confirmarse. El sistema también incluye Holy Weapons, gemas de afijo, configuraciones guardadas y códigos para compartir builds.",
    informationType: "Información oficial de armas con explicación editorial",
    warning: "Esta página reúne mecánicas y contenido de lanzamiento confirmados. No publica tasas de obtención, precios de mercado, cifras de daño ni una clasificación absoluta de mejores armas sin respaldo oficial.",
    sections: [
      { heading: "Cómo las armas definen una build", paragraphs: [
        "La elección de arma está vinculada a la dirección de habilidades de cada clase. Una build coherente combina el tipo de arma, los talentos, las habilidades activas, el equipamiento y las gemas de afijo alrededor de una misma función.",
        "El material oficial también describe cambios entre armas o rutas de combate durante una pelea. La elección no es solo una estadística permanente: determina alcance, defensa, control, recursos y forma de entrar o salir de un enfrentamiento.",
        "El sistema de Loadout permite guardar varias configuraciones para cambiar entre planes de combate o exploración.",
      ] },
      { heading: "Armas por clase", subsections: [
        { heading: "Mercenary", paragraphs: ["Armas confirmadas:", "Sword & Shield combina ofensiva con bloqueo y parry. Hammer utiliza ataques cargados y presión de control o aturdimiento. Ninguna de las dos rutas se presenta aquí como la mejor opción universal."], bullets: ["Sword & Shield (espada y escudo)", "Hammer (martillo)"] },
        { heading: "Blackarrow", paragraphs: ["Arma confirmada:", "La rama Archer utiliza disparos completamente cargados, recuperación de energía e interacción de ráfaga con Mysticfly Arrow. La rama Hunter utiliza flechas de estados alterados, daño prolongado, control y ataques básicos que pueden extender la duración de los debuffs. Bellring Games ha confirmado que Blackarrow recibirá una segunda arma en una futura temporada, pero no ha anunciado su nombre ni una fecha concreta."], bullets: ["Bow (arco)"] },
        { heading: "Sorcerer", paragraphs: ["Arma confirmada:", "Elemental utiliza reacciones de Fire, Thunder e Ice para causar daño y controlar espacios. Stardust se orienta al daño y control de área. Stardust Arcana puede omitir parte del proceso de canalización descrito para algunas acciones. La segunda arma de Sorcerer está confirmada como contenido en desarrollo, pero su nombre final y su fecha de lanzamiento no se han anunciado."], bullets: ["Staff (bastón)"] },
        { heading: "Shadowstrix", paragraphs: ["Armas confirmadas:", "Daggers favorece el daño explosivo al romper el sigilo y el ciclo de ocultación de Shadow Veil. Dual Blades utiliza acumulación de heridas, múltiples impactos y una posterior ventana de daño explosivo."], bullets: ["Daggers (dagas)", "Dual Blades (hojas dobles)"] },
        { heading: "Seer", paragraphs: ["Armas confirmadas:", "Catalyst puede seguir una dirección ofensiva con orbes mejorados o una dirección de apoyo con curación, escudos, mejoras y control. Mace puede utilizar presión de alta frecuencia y Speed Boost, o una ruta centrada en Super Armor y reducción de daño."], bullets: ["Catalyst (catalizador)", "Mace (maza)"] },
        { heading: "Withered Knight", paragraphs: ["Armas confirmadas:", "Greatsword utiliza Consecutive Break, Delayed Detonation y la interacción de acumulaciones de Wither o sigilos. Polearm & Shield es contenido oficial de lanzamiento. Introduce seis habilidades nuevas, admite direcciones de DPS y apoyo, y permite rescatar a distancia a un compañero derribado."], bullets: ["Greatsword (mandoble)", "Polearm & Shield (arma de asta y escudo)"] },
      ] },
      { heading: "Resumen de estilos oficiales", table: { headers: ["Clase", "Arma o rama", "Dirección descrita"], rows: [
        ["Mercenary", "Sword & Shield", "Ataque con espada, bloqueo y parry"],
        ["Mercenary", "Hammer", "Ataques cargados, control y aturdimiento"],
        ["Blackarrow", "Bow – Archer", "Disparos cargados, energía y ráfaga"],
        ["Blackarrow", "Bow – Hunter", "Estados alterados, daño prolongado y control"],
        ["Sorcerer", "Staff – Elemental", "Fire, Thunder, Ice y control"],
        ["Sorcerer", "Staff – Stardust", "Daño y control de área"],
        ["Shadowstrix", "Daggers", "Ráfaga desde sigilo"],
        ["Shadowstrix", "Dual Blades", "Heridas, múltiples impactos y acumulación"],
        ["Seer", "Catalyst", "Presión ofensiva o apoyo"],
        ["Seer", "Mace", "Velocidad, Super Armor y reducción de daño"],
        ["Withered Knight", "Greatsword", "Alcance, Wither y detonaciones"],
        ["Withered Knight", "Polearm & Shield", "DPS, apoyo, control de formación y rescate"],
      ] }, note: "La tabla organiza información oficial para facilitar la comparación. No es una tier list y no afirma que una ruta sea superior en todos los modos, parches o niveles de equipamiento." },
      { heading: "Holy Weapons", paragraphs: [
        "Las Holy Weapons, o armas sagradas, forman parte del contenido oficial de lanzamiento. Incluyen afijos exclusivos que pueden cambiar la forma en que funciona un arma, en lugar de limitarse a aumentar una cifra.",
        "El material oficial las describe como recompensas de los jefes del mapa, con diferentes jefes vinculados a diferentes armas sagradas.",
        "No se ha publicado una tasa de obtención oficial suficientemente precisa para esta guía, por lo que no se inventan porcentajes ni rutas garantizadas.",
      ] },
      { heading: "Gemas de afijo y ranuras", paragraphs: [
        "El equipamiento puede incluir una cantidad limitada de afijos propios, mientras que gran parte de la personalización de una build procede de las gemas de afijo insertadas en las ranuras.",
        "Las gemas tienen restricciones de nivel y tipo. El material oficial ha descrito gemas capaces de incluir hasta dos afijos.",
        "Una combinación rara no es automáticamente útil. Los afijos deben reforzar acciones que la build pueda repetir dentro del modo para el que fue creada.",
      ] },
      { heading: "Loadouts y códigos para compartir builds", paragraphs: [
        "El sistema de Loadout permite guardar varias configuraciones completas de equipamiento y gemas.",
        "Un código para compartir una configuración puede importar el equipamiento y las gemas de afijo de otra build. Sirve para copiar la estructura de la configuración, no para recibir los objetos gratuitamente.",
        "Estos códigos no son códigos de canje y no conceden monedas, armas, cosméticos ni recompensas.",
      ] },
      { heading: "Información todavía no confirmada", paragraphs: [
        "El nombre y la fecha concreta de la segunda arma de Blackarrow no se han anunciado; solo existe una ventana amplia de futura temporada.",
        "La segunda arma de Sorcerer está en desarrollo, pero no tiene nombre final ni fecha de lanzamiento confirmados.",
        "Tampoco se publican tasas exactas de drop, precios de mercado, estadísticas numéricas o cantidades totales de armas basadas en bases de datos de terceros. Una base de datos puede contar variantes de calidad y valores como registros separados, lo que no equivale al número de armas distintas.",
      ] },
    ],
    faqs: [
      { question: "¿Qué armas tiene cada clase?", answer: "Mercenary tiene Sword & Shield y Hammer; Blackarrow tiene Bow; Sorcerer tiene Staff; Shadowstrix tiene Daggers y Dual Blades; Seer tiene Catalyst y Mace; Withered Knight tiene Greatsword y Polearm & Shield." },
      { question: "¿Blackarrow tendrá una segunda arma?", answer: "Sí. Está confirmada para una futura temporada, pero no se ha anunciado su nombre ni una fecha concreta." },
      { question: "¿Cuál será la segunda arma de Sorcerer?", answer: "Está confirmada como contenido en desarrollo, pero su nombre final y su fecha de lanzamiento no están confirmados." },
      { question: "¿Hay Holy Weapons en el juego?", answer: "Sí. Son contenido oficial de lanzamiento, tienen afijos exclusivos y se describen como recompensas de diferentes jefes del mapa." },
      { question: "¿Un Share Code entrega el equipamiento?", answer: "No. Importa la estructura de una configuración; no entrega gratuitamente los objetos, monedas o cosméticos." },
    ],
    related: ["/es/builds/", "/es/clases/", "/es/recompensas/", "/es/guia-principiantes/", "/es/como-extraer/"],
    sources: [OFFICIAL_SITE, DEVNOTE_6, DEVNOTE_7, COMMUNITY_AMA, LAUNCH_UPDATE, LAUNCH_ANNOUNCEMENT, STEAM],
    heroAlt: "Las seis clases de Mistfall Hunter reunidas en arte promocional", heroCaption: "La galería oficial presenta las seis clases disponibles en el lanzamiento.",
    contentImageAlt: "Interfaz de talentos de Mistfall Hunter con nodos conectados", contentCaption: "Los talentos amplían la identidad de cada clase después de elegirla." }),
];

const deCommon = {
  locale: "de" as const,
  version: "Launch / Season 1",
  platforms: "Windows-PC, PlayStation 5 und Xbox Series X|S",
};

const germanPages: LocalizedPageData[] = [
  page({ ...deCommon, path: "/de/", englishPath: "/", imageIndex: 0, pageType: "website",
    title: "Mistfall Hunter Guide auf Deutsch: Einstellungen und Hilfe",
    description: "Deutscher Mistfall Hunter Guide zu Einstellungen, Rucklern, Abstürzen, Servern und Region Lock mit klar gekennzeichneten offiziellen Quellen.",
    h1: "Mistfall Hunter Guide auf Deutsch", eyebrow: "Technische Hilfe • offizielle Quellen • Launch-Stand",
    answer: "Dieser deutsche Einstieg bündelt sichere Hilfe zu Grafikeinstellungen, Rucklern, Abstürzen, Servern und Region Lock. Offiziell bestätigte Angaben, redaktionelle Empfehlungen und noch nicht bestätigte Punkte bleiben klar getrennt.",
    informationType: "Lokalisierter technischer Ratgeber mit Quellenkennzeichnung",
    sections: [
      { heading: "Wobei dieser deutsche Guide hilft", paragraphs: [
        "Mistfall Hunter ist ein Third-Person-PvPvE-Extraction-ARPG von Bellring Games. Die offiziellen Store-Seiten führen Windows-PC, PlayStation 5 und Xbox Series X|S. Diese erste deutsche Ausgabe konzentriert sich auf technische Suchanfragen und Zugangsfragen, bei denen ungenaue Ratschläge besonders schnell zu unnötigen Änderungen führen.",
        "Beginne bei Leistungsproblemen mit den Einstellungen. Nutze den Ruckler-Ratgeber für ungleichmäßige Frame Times und den Absturz-Ratgeber, wenn das Spiel geschlossen wird, einfriert oder zum Dashboard zurückkehrt. Server und Region Lock sind getrennte Themen: Ein Verbindungsfehler ist nicht automatisch eine Störung.",
      ] },
      { heading: "Sicherer Diagnosegrundsatz", paragraphs: [
        "Ändere jeweils nur eine Einstellung und wiederhole dieselbe Szene. Notiere Client-Version, Plattform, genaue Fehlermeldung und Zeitpunkt. So erkennst du, ob eine Maßnahme wirklich etwas verändert hat und kannst sie zurücknehmen, wenn sie nicht hilft.",
        "Wir empfehlen keine unbekannten DLL-Dateien, Registry-Reiniger, Anti-Cheat-Umgehungen, dauerhaft deaktivierte Sicherheitssoftware oder breit geöffnete Ports. Ein angeblicher Universal-Fix ohne reproduzierbaren Test ist keine verlässliche Lösung.",
      ] },
      { heading: "Offizielle und redaktionelle Angaben", paragraphs: [
        "DevNote #7 und das erste Launch-Update beschreiben unter anderem Arbeit an Shader-Vorkompilierung, Asset-Loading, Speichernutzung, Low-End-PCs, Konsolen und bestimmten Absturzursachen. Diese Angaben liefern Kontext, garantieren aber keine identische Wirkung auf jedem System.",
        "Unsere Reihenfolge für Einstellungen und Fehlersuche ist redaktionell. Wo ein Schritt nur ein temporärer Workaround oder ein kontrollierter Vergleich ist, wird er so bezeichnet. Community-Berichte werden nicht als allgemeine Ursache dargestellt.",
      ] },
      { heading: "Direkt zum passenden Thema", table: { headers: ["Symptom", "Startseite", "Erstes Ziel"], rows: [
        ["Niedrige oder schwankende Leistung", "Einstellungen", "Stabiles Ausgangsprofil"], ["Ungleichmäßige Bewegungen", "Ruckler beheben", "Frame-Time-Muster einordnen"],
        ["Spiel schließt oder friert ein", "Absturz beheben", "Fehlerstufe und Plattform erfassen"], ["Matchmaking oder Einladung scheitert", "Server / Region Lock", "Dienststatus von Kontoregel trennen"],
      ] } },
    ],
    faqs: [
      { question: "Gibt es einen garantierten Performance-Fix?", answer: "Nein. Hardware, Treiber, Szene und Client-Version unterscheiden sich. Die Ratgeber nutzen kontrollierte, reversible Schritte." },
      { question: "Wo stehen die bestätigten Serverländer?", answer: "Die offizielle Launch-FAQ nennt China, die USA, Deutschland, Singapur und Brasilien als Bereitstellungsländer." },
      { question: "Ist Crossplay gleichbedeutend mit freier Regionswahl?", answer: "Nein. Crossplay hebt die offiziell beschriebene Kontoregion-Regel für Nordamerika nicht auf." },
    ],
    related: ["/de/einstellungen/", "/de/ruckler-beheben/", "/de/absturz-beheben/", "/de/server/"], sources: [OFFICIAL_SITE, STEAM, DEVNOTE_7],
    heroAlt: "Brücke einer Festungsruine neben dem goldenen Gyldenmist", heroCaption: "Die Festung von Weavereach bildet den visuellen Rahmen für den deutschen Hilfebereich.",
    contentImageAlt: "Drei Gyldhunter kämpfen in einer Höhle gegen Corroded-Kreaturen", contentCaption: "Die Kampfszene zeigt den Spielkontext, den die technischen Ratgeber unterstützen." }),

  page({ ...deCommon, path: "/de/einstellungen/", englishPath: "/best-settings/", imageIndex: 4, pageType: "article",
    title: "Mistfall Hunter Einstellungen: FPS und Bildqualität abstimmen",
    description: "Sichere Mistfall Hunter Einstellungen für stabile FPS und klare Bildqualität: Ausgangsprofil, Frame-Limit, Schatten, Effekte, Texturen und Tests ohne erfundene FPS-Werte.",
    h1: "Mistfall Hunter Einstellungen für stabile Leistung", eyebrow: "Grafik • Frame Times • kontrollierte Tests",
    answer: "Starte mit dem hardwarebasierten Preset, installiere das Spiel auf einer SSD und wähle ein realistisches Frame-Limit. Senke zuerst Schatten, Effekte, Reflexionen und volumetrische Qualität; ändere immer nur eine Option und teste dieselbe Szene.",
    informationType: "Offizieller Performance-Kontext plus redaktionelle Einstellungsreihenfolge",
    warning: "Die Wirkung hängt von Hardware, Auflösung, Szene, Treiber und Client-Version ab. Wir nennen keine erfundenen FPS-Zuwächse.",
    sections: [
      { heading: "Ein reproduzierbares Ausgangsprofil", paragraphs: [
        "Nutze zunächst das vom Spiel gewählte Preset und notiere Auflösung, Upscaling, Frame-Limit und Anzeigeart. Teste eine wiederholbare Route mit ruhiger Szene, Bewegung und effektlastigem Kampf. Ein einzelner Blick auf den FPS-Zähler reicht nicht; achte auf gleichmäßige Bewegung und wiederkehrende Einbrüche.",
        "DevNote #7 beschreibt Optimierungen für Shader-Vorkompilierung, Asset-Loading, Speichernutzung, Low-End-PCs, Konsolen und Mikroruckler. Das bedeutet nicht, dass jedes System fehlerfrei läuft. Es erklärt jedoch, warum die aktuelle Launch-Version statt einer Demo-Konfiguration die richtige Basis ist.",
      ] },
      { heading: "Sinnvolle Reihenfolge der Grafikoptionen", table: { headers: ["Schritt", "Optionen", "Beobachtung"], rows: [
        ["1", "Frame-Limit und Auflösung", "Stabiler Zielwert statt ständigem Limitwechsel"], ["2", "Schatten und volumetrische Effekte", "GPU-Last in komplexen Szenen"],
        ["3", "Effekte und Reflexionen", "Kampfspitzen und Lesbarkeit"], ["4", "Texturen", "Nur bei Speicherproblemen schrittweise senken"],
        ["5", "Upscaling", "Bildruhe und Lesbarkeit gegen Leistung abwägen"],
      ] }, subsections: [
        { heading: "Ausgangswert festhalten", paragraphs: ["Notiere Preset, Auflösung und Frame-Limit und nutze eine wiederholbare Szene. Ohne diesen Ausgangswert lässt sich eine ruhigere Bewegung nicht zuverlässig einer Option zuordnen."] },
        { heading: "Eine teure Option vergleichen", paragraphs: ["Ändere Schatten, Effekte, Reflexionen oder Volumetrik einzeln und wiederhole den Test. Setze eine Änderung zurück, wenn sie das sichtbare Muster nicht verbessert."] },
      ] },
      { heading: "Frame-Limit und gleichmäßige Frame Times", paragraphs: [
        "Ein Ziel, das dein System in anspruchsvollen Szenen hält, fühlt sich häufig ruhiger an als ein höherer Durchschnitt mit großen Schwankungen. Vergleiche zum Beispiel einen begrenzten Lauf und einen unbegrenzten Lauf in derselben Szene. Ändere nicht gleichzeitig Preset, Treiber und Limit.",
        "Wenn die Rate nur beim ersten Besuch einer Zone fällt, kann das Muster anders sein als ein dauerhaftes GPU-Limit. Nutze dann den Ruckler-Ratgeber und wiederhole die Route nach einem Neustart, bevor du die Bildqualität pauschal stark reduzierst.",
      ] },
      { heading: "Sichere Grenzen", bullets: [
        "Keine unbekannten Konfigurationsdateien oder DLL-Downloads.", "Anti-Cheat und Sicherheitssoftware nicht umgehen.",
        "Änderungen dokumentieren und unwirksame Tests zurücksetzen.", "Treiber nur aus offiziellen Herstellerquellen beziehen.",
        "Auf Konsole die verfügbaren Modi vergleichen, statt PC-Schritte zu übertragen." ] },
    ],
    faqs: [
      { question: "Was sind die besten Mistfall Hunter Einstellungen?", answer: "Es gibt kein universelles Preset. Starte mit dem Hardware-Preset und senke teure Effekte in einer dokumentierten Reihenfolge." },
      { question: "Sollte ich Texturen zuerst reduzieren?", answer: "Nicht automatisch. Texturen betreffen besonders den Speicherbedarf; Schatten, Effekte und volumetrische Optionen sind oft der sinnvollere erste Vergleich." },
      { question: "Garantiert ein Frame-Limit weniger Ruckler?", answer: "Nein. Es kann Schwankungen glätten, behebt aber keine bestätigte Ursache in jedem Fall." },
    ],
    related: ["/de/ruckler-beheben/", "/de/absturz-beheben/"], sources: [DEVNOTE_7, STEAM, LAUNCH_UPDATE],
    heroAlt: "Mistfall-Hunter-Talentoberfläche mit verbundenen Verbesserungsknoten", heroCaption: "Die offizielle Oberfläche steht hier für ein klares, lesbares Ausgangsprofil und nicht für ein Grafikmenü.",
    contentImageAlt: "Einzelner Gyldhunter vor einem hellen Höhlenausgang", contentCaption: "Die Spielsituation dient als wiederholbare Szene zum Vergleichen von Einstellungen." }),

  page({ ...deCommon, path: "/de/ruckler-beheben/", englishPath: "/stuttering-fix/", imageIndex: 3, pageType: "article",
    title: "Mistfall Hunter Ruckler beheben: Frame-Time-Checkliste",
    description: "Mistfall Hunter Ruckler systematisch beheben: Muster erkennen, aktuelle Version prüfen, SSD und Frame-Limit vergleichen, Grafikoptionen einzeln testen und Risiken vermeiden.",
    h1: "Mistfall Hunter Ruckler beheben", eyebrow: "Frame Times • Shader und Assets • sichere Vergleiche",
    answer: "Prüfe zuerst Client-Version und Installation auf einer SSD, setze ein stabiles Frame-Limit und wiederhole dieselbe Route. Ordne das Muster ein, bevor du Schatten, Effekte oder volumetrische Qualität einzeln reduzierst.",
    informationType: "Offizieller Optimierungskontext mit reversiblen Workarounds",
    warning: "Diese Schritte sind kontrollierte Vergleiche, keine garantierte Fehlerbehebung. Setze jede unwirksame Änderung zurück.",
    sections: [
      { heading: "Das Ruckler-Muster einordnen", table: { headers: ["Muster", "Mögliche Kategorie", "Nächster Vergleich"], rows: [
        ["Nur beim ersten Besuch", "Shader- oder Asset-Vorbereitung", "Dieselbe Route erneut laden"], ["An jeder Gebietsgrenze", "Streaming oder Speicher", "SSD und identische Grenze vergleichen"],
        ["Nur in effektstarken Kämpfen", "GPU- oder Effektlast", "Effekte nach Frame-Limit senken"], ["Wird über Zeit stärker", "Speicher oder Temperatur", "Kurze und lange Sitzung dokumentieren"],
        ["Dauerhaft niedrige Rate", "Anhaltendes Leistungslimit", "Einstellungsreihenfolge nutzen"],
      ] }, subsections: [
        { heading: "Erster Durchlauf", paragraphs: ["Wiederhole dieselbe Route und notiere, ob die Spitze nur beim ersten Kontakt mit Gebiet oder Effekt auftritt. Das Muster ist ein Hinweis, aber noch keine bestätigte Ursache."] },
        { heading: "Wiederkehrende Kampfspitze", paragraphs: ["Teste dieselbe Fähigkeit oder Effektgruppe mit einem stabilen Limit. Tritt die Spitze jedes Mal auf, dokumentiere Szene und Version für einen gezielten Vergleich."] },
        { heading: "Verschlechterung über Zeit", paragraphs: ["Notiere Sitzungsdauer, Kartenwechsel und Temperatur- oder Speicherkontext. Behandle dieses Muster getrennt von einem kurzen Ruckler beim ersten Laden."] },
      ] },
      { heading: "Offizieller Launch-Kontext", paragraphs: [
        "Bellring Games nennt in DevNote #7 Arbeiten an Shader-Vorkompilierung, Asset-Loading, Speichernutzung, Low-End-PCs, Konsolen, Camp-Framerate und Mikrorucklern im Kampf. Diese Aussagen bestätigen Entwicklungsbereiche, nicht die Ursache auf deinem einzelnen System.",
        "Nutze deshalb die aktuelle Version und trenne Beobachtung von Erklärung. Wenn ein zweiter Lauf derselben Route ruhiger ist, ist das ein Muster; es beweist allein noch keinen bestimmten Shader-Fehler.",
      ] },
      { heading: "Kontrollierte PC-Checkliste", bullets: [
        "Spiel und Plattform-Client vollständig aktualisieren.", "Installation auf einer SSD bestätigen und freien Speicher prüfen.",
        "Stabiles Frame-Limit setzen und dieselbe Szene wiederholen.", "Nicht benötigte Overlays für genau einen Test schließen.",
        "Schatten, Effekte und volumetrische Qualität einzeln vergleichen.", "Zeitpunkt, Szene, Treiberversion und Ergebnis notieren." ] },
      { heading: "Wann du nicht weiter optimieren solltest", paragraphs: [
        "Wenn mehrere Spieler gleichzeitig dasselbe Online-Problem melden, prüfe zunächst aktuelle offizielle Mitteilungen. Netzwerk- oder Dienstprobleme werden nicht durch Grafikänderungen gelöst. Ebenso gehört ein vollständiger Programmabsturz in den separaten Absturz-Ratgeber.",
        "Lade keine angeblichen Performance-DLLs und deaktiviere Anti-Cheat oder Windows-Schutz nicht dauerhaft. Eine Änderung ohne klare Rücknahme erschwert die Diagnose und kann neue Risiken erzeugen.",
      ] },
    ],
    faqs: [
      { question: "Warum ruckelt Mistfall Hunter beim ersten Betreten?", answer: "Shader- oder Asset-Vorbereitung ist eine mögliche Kategorie, aber nicht für jedes System offiziell bestätigt. Wiederhole dieselbe Route kontrolliert." },
      { question: "Hilft eine SSD?", answer: "Eine SSD ist eine sichere Basis für Asset-Streaming, aber keine garantierte Lösung für jedes Frame-Time-Problem." },
      { question: "Soll ich alle Grafikoptionen gleichzeitig senken?", answer: "Nein. Ändere jeweils eine Option, sonst kannst du die wirksame Ursache nicht erkennen." },
    ],
    related: ["/de/einstellungen/", "/de/absturz-beheben/"], sources: [DEVNOTE_7, KNOWN_ISSUES_OFFICIAL, LAUNCH_UPDATE],
    heroAlt: "Sechs Mistfall-Hunter-Klassen in offizieller Gruppenillustration", heroCaption: "Die Klassenillustration ist kein Frame-Time-Beweis; sie kennzeichnet nur den Spielbezug des Ratgebers.",
    contentImageAlt: "Talentoberfläche mit mehreren verbundenen Knoten", contentCaption: "Die UI-Aufnahme ist ein Beispiel für eine Szene, in der Eingabe und Bildruhe beobachtet werden können." }),

  page({ ...deCommon, path: "/de/absturz-beheben/", englishPath: "/crashing-fix/", imageIndex: 2, pageType: "article",
    title: "Mistfall Hunter Absturz beheben: PC- und Konsolen-Schritte",
    description: "Mistfall Hunter Abstürze sicher untersuchen: Version, Dateien, Treiber, Fehlerstufe und Logs prüfen, PC und Konsole trennen und gefährliche Universal-Fixes vermeiden.",
    h1: "Mistfall Hunter Absturz beheben", eyebrow: "PC und Konsole • Fehlerdaten • sichere Schritte",
    answer: "Aktualisiere Spiel und System, starte neu, prüfe auf PC die Spieldateien und nutze einen stabilen offiziellen Grafiktreiber. Dokumentiere die genaue Absturzstufe; übertrage keine PC-DLL- oder Treiberschritte auf Konsolen.",
    informationType: "Offiziell belegter Kontext plus temporäre, reversible Diagnose-Schritte",
    warning: "Kein Schritt ist ein garantierter Fix. Lade keine fremden DLLs, umgehe Anti-Cheat nicht und deaktiviere Sicherheitssoftware nicht dauerhaft.",
    sections: [
      { heading: "Zuerst den Absturztyp erfassen", paragraphs: [
        "Notiere, ob der Fehler beim Start, Laden, im Camp, im Kampf oder beim Return auftritt. Halte exakten Meldungstext, Screenshot ohne Kontodaten, Client-Version, Plattform, Datum und Uhrzeit fest. Ein Freeze ohne Prozessende ist ein anderes Symptom als ein sofortiger Desktop-Absturz.",
        "Auf Windows sind Anwendungsfehler und ein eventuell genannter Modulname hilfreich. Auf PlayStation oder Xbox sind Plattform-Fehlercode, Rückkehr zum Dashboard und die letzte UI-Aktion wichtiger. Vermische diese Daten nicht.",
      ], subsections: [
        { heading: "Absturz vor dem Hauptmenü", paragraphs: ["Trenne Start, Anmeldung und erstes Laden. Prüfe Version und Dateien, bevor du Einstellungen änderst, die der Client möglicherweise noch nicht geladen hat."] },
        { heading: "Absturz beim Match-Laden", paragraphs: ["Dokumentiere Modus, Karte, Gruppe und Ladephase. Ein erneuter Test nach dem sicheren Ausgangszustand zeigt, ob der Übergang reproduzierbar ist."] },
        { heading: "Absturz im Match oder Menü", paragraphs: ["Halte Ort, Aktion, Eingabegerät und sichtbaren Effekt oder Bildschirm fest. Die offiziell genannten Launch-Fixes waren auslöserspezifisch und dürfen nicht pauschal übertragen werden."] },
      ] },
      { heading: "Sichere Reihenfolge auf PC", bullets: [
        "Aktuelle Spielversion und Windows-Updates prüfen.", "PC vollständig neu starten.", "Spieldateien über den offiziellen Client verifizieren.",
        "Stabilen Grafiktreiber direkt vom Hersteller installieren.", "Nicht benötigte Overlays für einen Vergleich schließen.",
        "Fehler erneut an derselben Stufe testen und Ergebnis notieren." ] },
      { heading: "Konsolenschritte getrennt halten", paragraphs: [
        "Prüfe System- und Spielupdate, starte die Konsole vollständig neu und dokumentiere den Plattformcode. Verwende nur die von Plattform oder Publisher vorgesehenen Speicher-, Lizenz- oder Supportschritte. Eine Windows-DLL, Treibereinstellung oder Shader-Anweisung ist auf Konsole nicht anwendbar.",
        "Das offizielle Launch-Material nennt Optimierungen für Konsolen und behobene Einzelfälle. Das ist wertvoller Kontext, aber kein Beweis, dass jeder aktuelle Absturz dieselbe Ursache hat.",
      ] },
      { heading: "Offiziell genannte Absturzbereiche", paragraphs: [
        "DevNote #7 und das Launch-Update erwähnen unter anderem zufällige Abstürze im Zusammenhang mit bestimmter Vegetationsanimation und AMD-Haar-Rendering sowie breitere Speicher- und Performance-Arbeit. Prüfe den genauen Wortlaut und die aktuelle Version, bevor du einen alten Workaround beibehältst.",
        "Wenn der sichere Ablauf nicht hilft, sende dem offiziellen Support einen kurzen Reproduktionsweg und die gesammelten Daten. Eine klare Eskalation ist besser als mehrere gleichzeitige Systemänderungen.",
      ] },
    ],
    faqs: [
      { question: "Gibt es einen garantierten Fix für Mistfall Hunter Abstürze?", answer: "Nein. Die Ursache hängt von Plattform, Version und Absturzstufe ab; nutze sichere Schritte und genaue Fehlerdaten." },
      { question: "Soll ich eine DLL aus einem Forum herunterladen?", answer: "Nein. Fremde DLL-Dateien und Anti-Cheat-Umgehungen sind riskant und keine bestätigte offizielle Lösung." },
      { question: "Sind PC- und Konsolen-Schritte gleich?", answer: "Nur die Grundlagen wie Update, Neustart und Dokumentation. Treiber, DLLs und Windows-Dateien gelten nicht für Konsole." },
    ],
    related: ["/de/einstellungen/", "/de/ruckler-beheben/"], sources: [DEVNOTE_7, KNOWN_ISSUES_OFFICIAL, LAUNCH_UPDATE],
    heroAlt: "Gyldhunter hebt die Hand vor einem kreisförmigen Return-Effekt", heroCaption: "Die offizielle Return-Szene ist keine Aufnahme eines Absturzfehlers.",
    contentImageAlt: "Sechs Mistfall-Hunter-Klassen stehen in einer offiziellen Gruppenansicht", contentCaption: "Die Klassenansicht liefert Spielkontext, ohne eine bestimmte Absturzursache zu behaupten." }),

  page({ ...deCommon, path: "/de/server/", englishPath: "/servers/", imageIndex: 6, pageType: "article",
    title: "Mistfall Hunter Server: bestätigte Länder und Status-Hinweise",
    description: "Mistfall Hunter Server erklärt: offiziell genannte Standorte in China, USA, Deutschland, Singapur und Brasilien, Kontoregion und sichere Störungsprüfung.",
    h1: "Mistfall Hunter Server", eyebrow: "Bestätigte Länder • kein Live-Status • Kontoregion",
    answer: "Die offizielle Launch-FAQ nennt Serverbereitstellungen in China, den USA, Deutschland, Singapur und Brasilien. Das ist keine Liste aller Städte und keine Echtzeit-Anzeige des Serverstatus.",
    informationType: "Offizielle Bereitstellungsländer; keine Live-Telemetrie",
    warning: "Wir behaupten nicht, dass alle Server jederzeit online sind, und ergänzen keine nicht offiziell genannten Standorte.",
    sections: [
      { heading: "Offiziell genannte Serverländer", table: { headers: ["Land", "Bestätigte Aussage", "Nicht daraus ableitbar"], rows: [
        ["China", "Bereitstellungsland", "Stadt und aktuelle Kapazität"], ["USA", "Nordamerikanischer Standort", "Freier Zugang für jede Kontoregion"],
        ["Deutschland", "Bereitstellungsland", "Garantierte Latenz in ganz Europa"], ["Singapur", "Bereitstellungsland", "Persönlicher Ping"],
        ["Brasilien", "Bereitstellungsland", "Vollständige Abdeckung Südamerikas"],
      ] } },
      { heading: "Serverstatus ohne falsche Ampel", paragraphs: [
        "Diese Website hat keine offizielle Live-Telemetrie. Deshalb zeigen wir keinen geschätzten Grün- oder Rotstatus. Prüfe bei gleichzeitigen Fehlern mehrerer Spieler aktuelle Steam-Ankündigungen und offizielle Kanäle und achte auf Uhrzeit und Plattform.",
        "Ein einzelner hoher Ping oder fehlgeschlagenes Matchmaking beweist keine globale Störung. Konto, Client-Version, Party-Zustand, lokale Route und Regionsregel können unterschiedliche Ursachen sein.",
      ] },
      { heading: "Verbindung sinnvoll dokumentieren", bullets: [
        "Exakte Meldung und betroffene Aktion notieren.", "Plattform, Client-Version und Kontoregion erfassen.",
        "Datum, Uhrzeit und Zeitzone angeben.", "Prüfen, ob nur ein Party-Mitglied oder alle gleichzeitig betroffen sind.",
        "Netzwerkänderungen nach einem erfolglosen Test zurücksetzen." ] },
      { heading: "Die Nordamerika-Regel", paragraphs: [
        "Laut offizieller FAQ erhalten Store-Konten aus den USA, Kanada, Mexiko, Puerto Rico und den Amerikanischen Jungferninseln den nordamerikanischen Build. Diese Konten können nur auf nordamerikanische Server in den USA zugreifen.",
        "Crossplay hebt diese Kontoregion-Regel nicht auf. Lies den Region-Lock-Ratgeber, bevor du ein internationales Team planst oder einen Verbindungsfehler als Störung interpretierst.",
      ] },
    ],
    faqs: [
      { question: "Wo stehen Mistfall Hunter Server?", answer: "Offiziell genannt werden China, USA, Deutschland, Singapur und Brasilien." },
      { question: "Zeigt diese Seite einen Live-Status?", answer: "Nein. Ohne offizielle Telemetrie wäre eine Statusampel nicht verlässlich." },
      { question: "Kann jedes Konto jeden Server wählen?", answer: "Nein. Mindestens für die offiziell genannten nordamerikanischen Kontoregionen gilt eine Zugriffsbeschränkung." },
    ],
    related: ["/de/region-lock/", "/de/"], sources: [LAUNCH_FAQ, XBOX, COMMUNITY_AMA],
    heroAlt: "Brücke einer Festungsruine neben einem goldenen Sturm", heroCaption: "Die Weavereach-Landschaft ist keine Live-Serverkarte; der Ratgeber nennt nur bestätigte Länder.",
    contentImageAlt: "Gepanzerter Nahkämpfer greift neben einem Verbündeten an", contentCaption: "Die Gruppenszene veranschaulicht, warum gemeinsamer Serverzugang vor dem Match geprüft werden muss." }),

  page({ ...deCommon, path: "/de/region-lock/", englishPath: "/region-lock/", imageIndex: 7, pageType: "article",
    title: "Mistfall Hunter Region Lock: Nordamerika-Regel erklärt",
    description: "Mistfall Hunter Region Lock für Store-Konten aus USA, Kanada, Mexiko, Puerto Rico und Amerikanischen Jungferninseln, inklusive Crossplay-Grenzen.",
    h1: "Mistfall Hunter Region Lock", eyebrow: "Kontoregion • Nordamerika • offizielle Launch-FAQ",
    answer: "Store-Konten aus den USA, Kanada, Mexiko, Puerto Rico und den Amerikanischen Jungferninseln erhalten laut offizieller FAQ den nordamerikanischen Build und können nur nordamerikanische Server in den USA nutzen.",
    informationType: "Offizielle Launch-Regel; Sonderfälle müssen vom Support bestätigt werden",
    warning: "Crossplay beseitigt diese Beschränkung nicht. VPN, unzulässige Regionswechsel oder Käufe über fremde Regionen sind keine bestätigten Lösungen.",
    sections: [
      { heading: "Für welche Konten die Regel gilt", paragraphs: [
        "Die offizielle Formulierung bezieht sich auf das Registrierungsland des Store-Kontos und nennt USA, Kanada, Mexiko, Puerto Rico und die Amerikanischen Jungferninseln. Diese Konten erhalten den nordamerikanischen Build und Zugriff ausschließlich auf nordamerikanische Server in den USA.",
        "Wir erweitern diese Liste nicht durch Vermutung. Für Umzüge, ältere Konten oder andere nicht dokumentierte Sonderfälle gibt es in den geprüften Quellen keine vollständige Matrix; wende dich dafür an den offiziellen Support.",
      ] },
      { heading: "Crossplay ist keine freie Regionswahl", paragraphs: [
        "Die offizielle Launch-FAQ bestätigt plattformübergreifendes Matchmaking. Crossplay bedeutet aber, dass unterstützte Plattformen zusammenspielen können; es ändert nicht automatisch die Serverberechtigung eines Kontos.",
        "Zwei Freunde können daher kompatible Plattformen verwenden und trotzdem nicht denselben Serverbereich erreichen. Prüft Kontoregion und verfügbare Edition, bevor ihr einen Kauf oder eine dauerhafte Party plant.",
      ] },
      { heading: "Checkliste für internationale Gruppen", bullets: [
        "Plattform und Store-Registrierungsland aller Mitglieder erfassen.", "Aktuelle Client-Version vergleichen.",
        "Exakte Einladung- oder Matchmaking-Meldung notieren.", "Offizielle FAQ und Support für nicht dokumentierte Fälle nutzen.",
        "Keine VPN-, Konto- oder Store-Änderung auf Basis eines einzelnen Community-Berichts durchführen." ] },
      { heading: "Was nicht offiziell bestätigt ist", paragraphs: [
        "Die geprüften Quellen erklären nicht jede Kombination aus Land, Plattform, Store und Wohnsitz. Eine nicht erwähnte Region ist nicht automatisch frei von Einschränkungen. Die korrekte Aussage lautet in solchen Fällen: derzeit nicht offiziell bestätigt.",
        "Spielerberichte können einen Einzelfall beschreiben, aber keine allgemeine Richtlinie ersetzen. Wenn ein Bericht genutzt wird, muss er als Community-Angabe gekennzeichnet und zeitlich eingeordnet werden.",
      ] },
    ],
    faqs: [
      { question: "Hat Mistfall Hunter einen Region Lock?", answer: "Ja. Die offizielle FAQ bestätigt mindestens die beschriebene Nordamerika-Regel für fünf genannte Store-Regionen." },
      { question: "Umgeht Crossplay den Region Lock?", answer: "Nein. Plattformkompatibilität ersetzt nicht die Zugangsregel der Kontoregion." },
      { question: "Sollte ich eine VPN nutzen?", answer: "Nein. Eine VPN oder ein Regionswechsel ist keine offiziell bestätigte Lösung und kann Konto, Kauf oder Verbindung gefährden." },
    ],
    related: ["/de/server/", "/de/"], sources: [LAUNCH_FAQ, XBOX],
    heroAlt: "Gepanzerter Gyldhunter kämpft an der Seite eines Verbündeten", heroCaption: "Die Gruppenszene setzt die Kontoregion-Regel in den Kontext gemeinsamer Partys.",
    contentImageAlt: "Brücke einer Festungsruine neben dem goldenen Gyldenmist", contentCaption: "Das offizielle Festungsbild ist keine Darstellung von Store- oder Serverregionen." }),
];

export const localizedPages = [...spanishPages, ...germanPages];
export const localizedPagesByPath = new Map(localizedPages.map((item) => [item.path, item]));

export function getLocalizedPage(path: string) {
  const normalized = path === "/" ? path : `/${path.replace(/^\/+|\/+$/g, "")}/`;
  return localizedPagesByPath.get(normalized);
}

export const localizedKeywordFamilies = Object.fromEntries(localizedPages.map((item) => [item.path, {
  language: item.locale,
  primary: item.locale === "es"
    ? item.h1.replace(/^Guía de |^Cómo /, "").toLowerCase()
    : item.h1.toLowerCase(),
  variants: item.locale === "es"
    ? ["guía Mistfall Hunter", "Mistfall Hunter español", "consejos Mistfall Hunter", "ayuda Mistfall Hunter"]
    : ["Mistfall Hunter Deutsch", "Mistfall Hunter Guide", "Mistfall Hunter Hilfe", "Mistfall Hunter Anleitung"],
}]));
