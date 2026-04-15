/* ===============================================================
   COMUNICA · App principal
   Web de aprendizaje y ensayo de técnicas de comunicación.
   Sin dependencias. Todo se guarda en localStorage.
   =============================================================== */

/* ---------- 1. MÓDULOS DE APRENDIZAJE ---------- */
const modules = [
  {
    title: 'Comunicación no verbal',
    summary: 'Tu cuerpo habla antes que tu boca. Trabaja postura, gestos y mirada.',
    points: [
      'Postura abierta: hombros atrás, barbilla paralela al suelo.',
      'Mirada en triángulo (ojo–ojo–boca) 3–5 s por interlocutor.',
      'Gestos por encima de la cintura, con las palmas visibles.',
      'Sonrisa auténtica (implica ojos) al saludar.'
    ],
    exercise: 'Graba 30 s en vídeo presentándote. Revisa solo tu cuerpo (sin audio).'
  },
  {
    title: 'Voz y paraverbal',
    summary: 'Volumen, ritmo, tono y pausas. La voz transmite más emoción que la palabra.',
    points: [
      'Volumen: proyecta desde el diafragma, no desde la garganta.',
      'Ritmo: 120–150 palabras/min es cómodo para el oyente.',
      'Tono: varía para evitar monotonía; baja al final de la frase.',
      'Pausas: úsalas antes de una idea clave — crean expectación.'
    ],
    exercise: 'Lee un párrafo tres veces — rápido, normal y con pausas largas. Escucha la diferencia.'
  },
  {
    title: 'Comunicación verbal',
    summary: 'Claridad y concreción. Menos adjetivos, más verbos y ejemplos.',
    points: [
      'Regla 1 idea = 1 frase. Evita subordinadas largas.',
      'Sustituye "cosas/temas/aspectos" por la palabra concreta.',
      'Elimina muletillas: "o sea", "vale", "¿sabes?".',
      'Usa analogías y números cuando expliques algo abstracto.'
    ],
    exercise: 'Explica tu trabajo en 30 s sin usar jerga técnica.'
  },
  {
    title: 'Escucha activa',
    summary: 'Comunicar también es escuchar. Reformula, pregunta, valida.',
    points: [
      'Mira al que habla. Asiente sin interrumpir.',
      'Reformula: "Entonces lo que te preocupa es…".',
      'Pregunta abierta > pregunta cerrada.',
      'Valida la emoción antes de rebatir: "Entiendo que…".'
    ],
    exercise: 'En tu próxima conversación, haz 3 preguntas antes de dar tu opinión.'
  },
  {
    title: 'Asertividad',
    summary: 'Decir lo que piensas sin agredir ni someterte. Defiende tu postura con respeto.',
    points: [
      'Usa "yo" en lugar de "tú": "Yo necesito…" vs "Tú siempre…".',
      'Separa hecho + sentimiento + petición (técnica DESC).',
      'Di "no" sin justificarte en exceso. Una razón basta.',
      'Acepta la discrepancia: no todos tienen que estar de acuerdo.'
    ],
    exercise: 'Escribe una situación donde te costó decir no. Reformúlala asertivamente.'
  },
  {
    title: 'Hablar en público',
    summary: 'Estructura + ensayo + presencia. Lo demás es secundario.',
    points: [
      'Estructura: gancho → 3 ideas → cierre memorable.',
      'Ensaya en voz alta al menos 3 veces. Con cronómetro.',
      'Empieza mirando a una persona amiga, no al suelo.',
      'Termina con llamada a la acción, no con "y eso es todo".'
    ],
    exercise: 'Prepara un pitch de 60 s con 3 ideas y cierre. Grábate con la herramienta de ensayo.'
  },
  {
    title: 'Primera impresión',
    summary: 'Se forma en 7 segundos. Cuida aspecto, actitud y primeras palabras.',
    points: [
      'Llega 5 min antes. Respira y aterriza.',
      'Apretón de manos firme (no aplastante), 2 segundos, mirando.',
      'Frase de apertura preparada: nombre + rol + algo memorable.',
      'Recuerda y usa el nombre del interlocutor en los primeros 2 min.'
    ],
    exercise: 'Prepara tu presentación de 15 s para un evento de networking.'
  },
  {
    title: 'Inteligencia conversacional',
    summary: 'Conversar no es turnarse monólogos. Es co-crear significado.',
    points: [
      'Entra con curiosidad, no con agenda.',
      'Construye sobre lo que dice el otro ("sí, y…" > "sí, pero…").',
      'Detecta señales de cierre: mira el reloj, resume, se gira.',
      'Termina con un gesto de gratitud o próximo paso claro.'
    ],
    exercise: 'En tu próxima conversación, usa 3 veces "sí, y…" para continuar una idea.'
  }
];

function renderModules() {
  const grid = document.getElementById('modulesGrid');
  grid.innerHTML = modules.map((m, i) => `
    <details class="card module-card">
      <summary>
        <span><span class="num">${String(i + 1).padStart(2, '0')}</span><strong>${m.title}</strong></span>
        <span class="chev">›</span>
      </summary>
      <div class="body">
        <p>${m.summary}</p>
        <ul>${m.points.map(p => `<li>${p}</li>`).join('')}</ul>
        <div class="exercise"><span class="label">Ejercicio</span>${m.exercise}</div>
      </div>
    </details>
  `).join('');
}

/* ---------- 2. FLASHCARDS ---------- */
const flashcards = [
  { cat: 'no-verbal', q: '¿Qué porcentaje del mensaje atribuye Mehrabian a lo no verbal + paraverbal cuando hay incongruencia emocional?', a: 'Aproximadamente el 93% (55% no verbal + 38% paraverbal). Ojo: solo aplica a mensajes emocionales/de actitud, no a todo contenido.' },
  { cat: 'no-verbal', q: 'Regla de la mirada en triángulo', a: 'Alterna la mirada entre ojo, ojo y boca del interlocutor, 3–5 segundos en cada vértice. Crea conexión sin resultar intimidante.' },
  { cat: 'no-verbal', q: '¿Qué transmiten las manos por debajo de la cintura?', a: 'Inseguridad, sumisión o falta de energía. Mantén los gestos a la altura del pecho, con las palmas visibles.' },
  { cat: 'no-verbal', q: 'Sonrisa "Duchenne" vs. social', a: 'La auténtica (Duchenne) involucra los músculos de los ojos (patas de gallo). La social solo mueve la boca y se percibe como falsa.' },
  { cat: 'voz', q: 'Velocidad ideal al hablar en público', a: 'Entre 120 y 150 palabras por minuto. Más rápido satura; más lento aburre.' },
  { cat: 'voz', q: '¿Qué es la proyección de voz?', a: 'Apoyar la voz en el diafragma (no en la garganta) para llegar al fondo de la sala sin gritar. Se entrena con respiración abdominal.' },
  { cat: 'voz', q: 'Función de la pausa dramática', a: 'Crear expectación, enfatizar una idea y dar tiempo al oyente para procesar. Una pausa de 2 s antes de una frase clave aumenta su impacto.' },
  { cat: 'voz', q: 'Tono ascendente vs descendente al final de la frase', a: 'Ascendente suena a pregunta/inseguridad. Descendente transmite afirmación y seguridad. Termina las frases hacia abajo.' },
  { cat: 'verbal', q: 'Regla 1-1-1 para claridad', a: 'Una idea por frase, una frase por respiración, una conclusión por intervención. Evita oraciones con múltiples subordinadas.' },
  { cat: 'verbal', q: 'Tres muletillas más frecuentes en español', a: '"O sea", "¿vale?" y "en plan". Se sustituyen con pausas silenciosas.' },
  { cat: 'verbal', q: 'Fórmula del storytelling simple', a: 'Situación → complicación → resolución. Conecta datos con emoción mediante ejemplos concretos y personajes.' },
  { cat: 'escucha', q: '¿Qué es reformular?', a: 'Repetir con tus palabras lo que dice el otro para confirmar comprensión: "Entonces, si entiendo bien, lo que te preocupa es…".' },
  { cat: 'escucha', q: 'Pregunta abierta vs cerrada', a: 'Abierta invita a desarrollar ("¿Cómo te sentiste?"); cerrada solo admite sí/no ("¿Te sentiste mal?"). Las abiertas abren conversación; las cerradas la cierran.' },
  { cat: 'escucha', q: '¿Qué bloquea la escucha activa?', a: 'Pensar tu respuesta mientras el otro habla, interrumpir, juzgar, dar consejos prematuros, mirar el móvil.' },
  { cat: 'asertividad', q: 'Técnica DESC para dar feedback', a: 'Describe el hecho + Expresa cómo te afecta + Sugiere el cambio + Consecuencia positiva. Ej: "Cuando llegas tarde, me genera estrés; te pediría avisar; así coordinamos mejor".' },
  { cat: 'asertividad', q: 'Técnica del disco rayado', a: 'Repetir con calma y el mismo tono tu postura ante insistencias, sin justificarte: "Entiendo, pero no puedo ahora".' },
  { cat: 'asertividad', q: 'Banco de niebla', a: 'Reconocer la parte cierta del argumento contrario sin ceder en lo esencial: "Es posible, sí, puede ser"… y seguir con tu posición.' },
  { cat: 'asertividad', q: '¿Cómo decir NO sin agredir?', a: 'Agradece + da una razón breve + cierra sin disculparte en exceso. Ej: "Gracias por pensar en mí. Esta semana no puedo. Otra vez será."' },
  { cat: 'publico', q: 'Estructura mínima de una intervención', a: 'Gancho (capta atención) → Cuerpo (3 ideas máximo) → Cierre (memorable + llamada a la acción).' },
  { cat: 'publico', q: '¿Cuántas veces hay que ensayar en voz alta?', a: 'Mínimo 3 veces completas, preferiblemente de pie y cronometrado. El ensayo mental no sustituye al físico.' },
  { cat: 'publico', q: 'Regla de los 3 tercios para el nervio escénico', a: 'El primer tercio los nervios pesan; el segundo se estabiliza; el tercero disfrutas. Saber que pasa ayuda a resistir los primeros minutos.' },
  { cat: 'publico', q: '¿Qué hacer si te quedas en blanco?', a: 'Pausa, respira, bebe agua, repite la última frase y retoma. El público no sabe tu guión: solo tú notas el salto.' },
  { cat: 'no-verbal', q: 'Proxémica: distancia social vs íntima', a: 'Íntima: <45 cm. Personal: 45 cm–1,2 m. Social: 1,2–3,6 m. Pública: >3,6 m. Respetar la zona evita incomodar.' },
  { cat: 'voz', q: 'Ejercicio de dicción con corcho', a: 'Leer en voz alta con un corcho o lápiz entre los dientes fuerza a articular consonantes. 2 minutos al día bastan.' }
];

let flashDeck = [];
let flashIndex = 0;

function loadFlashStats() {
  try { return JSON.parse(localStorage.getItem('flashStats') || '{}'); }
  catch { return {}; }
}
function saveFlashStats(stats) {
  localStorage.setItem('flashStats', JSON.stringify(stats));
}

function rebuildFlashDeck() {
  const cat = document.getElementById('flashCategory').value;
  const stats = loadFlashStats();
  flashDeck = flashcards
    .filter(c => cat === 'all' || c.cat === cat)
    .map((c, idx) => ({ ...c, id: `${c.cat}-${idx}-${c.q.slice(0, 12)}`, knew: stats[c.q] === 'knew' }));
  // Las no sabidas primero
  flashDeck.sort((a, b) => (a.knew === b.knew ? 0 : a.knew ? 1 : -1));
  flashIndex = 0;
  showFlash();
}

function showFlash() {
  const card = document.getElementById('flashcard');
  card.classList.remove('flipped');
  if (!flashDeck.length) {
    document.getElementById('flashQuestion').textContent = 'No hay tarjetas en esta categoría.';
    document.getElementById('flashAnswer').textContent = '—';
    document.getElementById('flashTag').textContent = '—';
    document.getElementById('flashProgress').textContent = '';
    return;
  }
  const c = flashDeck[flashIndex];
  document.getElementById('flashQuestion').textContent = c.q;
  document.getElementById('flashAnswer').textContent = c.a;
  document.getElementById('flashTag').textContent = catLabel(c.cat);
  const remaining = flashDeck.filter(x => !x.knew).length;
  document.getElementById('flashProgress').textContent =
    `Tarjeta ${flashIndex + 1} de ${flashDeck.length} · ${remaining} por repasar`;
}

function catLabel(cat) {
  const labels = {
    'no-verbal': 'No verbal',
    'voz': 'Voz',
    'verbal': 'Verbal',
    'escucha': 'Escucha',
    'asertividad': 'Asertividad',
    'publico': 'En público'
  };
  return labels[cat] || cat;
}

function nextFlash(markKnew) {
  if (!flashDeck.length) return;
  const current = flashDeck[flashIndex];
  const stats = loadFlashStats();
  stats[current.q] = markKnew ? 'knew' : 'review';
  saveFlashStats(stats);
  current.knew = markKnew;

  // avanzar: buscar la siguiente no sabida; si no queda, avanzar normal
  const nextUnknown = flashDeck.findIndex((c, i) => i > flashIndex && !c.knew);
  if (nextUnknown !== -1) {
    flashIndex = nextUnknown;
  } else {
    flashIndex = (flashIndex + 1) % flashDeck.length;
  }
  showFlash();
}

function initFlashcards() {
  document.getElementById('flashCategory').addEventListener('change', rebuildFlashDeck);
  const card = document.getElementById('flashcard');
  card.addEventListener('click', () => card.classList.toggle('flipped'));
  card.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); card.classList.toggle('flipped'); }
    if (e.key === 'ArrowRight') nextFlash(false);
  });
  document.getElementById('flashKnew').addEventListener('click', () => nextFlash(true));
  document.getElementById('flashRepeat').addEventListener('click', () => nextFlash(false));
  document.getElementById('flashReset').addEventListener('click', () => {
    localStorage.removeItem('flashStats');
    rebuildFlashDeck();
  });
  rebuildFlashDeck();
}

/* ---------- 3. GRABADORA DE VOZ ---------- */
let mediaRecorder, chunks = [];

async function initRecorder() {
  const startBtn = document.getElementById('recStart');
  const stopBtn = document.getElementById('recStop');
  const status = document.getElementById('recStatus');
  const playback = document.getElementById('recPlayback');

  startBtn.addEventListener('click', async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      chunks = [];
      mediaRecorder.ondataavailable = e => chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        playback.src = URL.createObjectURL(blob);
        playback.hidden = false;
        stream.getTracks().forEach(t => t.stop());
      };
      mediaRecorder.start();
      startBtn.disabled = true;
      stopBtn.disabled = false;
      status.textContent = '● Grabando…';
      status.classList.add('recording');
    } catch (err) {
      status.textContent = 'Permiso denegado';
      alert('No se pudo acceder al micrófono. Revisa permisos del navegador.');
    }
  });

  stopBtn.addEventListener('click', () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop();
    startBtn.disabled = false;
    stopBtn.disabled = true;
    status.textContent = 'Listo — escúchate';
    status.classList.remove('recording');
  });
}

/* ---------- 4. CRONÓMETRO ---------- */
let timerInterval, timerSeconds = 0, timerRunning = false;

function formatTime(s) {
  const m = Math.floor(s / 60).toString().padStart(2, '0');
  const sec = (s % 60).toString().padStart(2, '0');
  return `${m}:${sec}`;
}

function updateMilestones() {
  const goal = parseInt(document.getElementById('timerGoal').value, 10) || 120;
  document.querySelectorAll('#milestones .milestone').forEach(el => {
    const at = parseFloat(el.dataset.at) * goal;
    el.classList.toggle('done', timerSeconds >= at);
  });
}

function initTimer() {
  const display = document.getElementById('timerDisplay');
  const start = document.getElementById('timerStart');
  const pause = document.getElementById('timerPause');
  const reset = document.getElementById('timerReset');

  start.addEventListener('click', () => {
    if (timerRunning) return;
    timerRunning = true;
    timerInterval = setInterval(() => {
      timerSeconds++;
      display.textContent = formatTime(timerSeconds);
      updateMilestones();
    }, 1000);
  });
  pause.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerRunning = false;
  });
  reset.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerRunning = false;
    timerSeconds = 0;
    display.textContent = '00:00';
    updateMilestones();
  });
  document.getElementById('timerGoal').addEventListener('input', updateMilestones);
}

/* ---------- 5. GENERADOR DE TEMAS Y TRABALENGUAS ---------- */
const topics = [
  'Convence al equipo de adoptar una nueva herramienta.',
  'Explica tu proyecto favorito a un niño de 10 años.',
  'Defiende por qué el silencio es una herramienta comunicativa.',
  'Cuenta un error profesional y qué aprendiste.',
  'Presenta un libro que te cambió.',
  'Explica un concepto técnico sin usar jerga.',
  'Describe tu ciudad a alguien que nunca la ha visitado.',
  'Convence a alguien de hacer una actividad que no le apetece.',
  'Resume tu última semana en 60 segundos.',
  'Defiende una idea impopular con respeto.',
  'Explica tu trabajo usando una metáfora.',
  'Cuenta una historia que empiece con "Nunca olvidaré…".',
  'Describe una conversación difícil reciente.',
  'Presenta una idea en 3 frases: problema, solución, beneficio.',
  'Habla de alguien que admires y por qué.',
  'Explica cómo tomas decisiones importantes.',
  'Describe tu rutina ideal para un día perfecto.',
  'Argumenta a favor y en contra del teletrabajo en 30 s cada uno.',
  'Cuenta la historia de un objeto que tengas cerca.',
  'Presenta un hobby a alguien que no lo conoce.'
];

const tongues = [
  'Tres tristes tigres tragaban trigo en un trigal.',
  'El cielo está enladrillado, ¿quién lo desenladrillará? El desenladrillador que lo desenladrille, buen desenladrillador será.',
  'Pablito clavó un clavito, un clavito clavó Pablito.',
  'Pepe Pecas pica papas con un pico, con un pico pica papas Pepe Pecas.',
  'El perro de San Roque no tiene rabo porque Ramón Ramírez se lo ha robado.',
  'Como poco coco como, poco coco compro.',
  'Erre con erre cigarro, erre con erre barril, rápido ruedan los carros cargados de azúcar al ferrocarril.',
  'Me han dicho que has dicho un dicho, un dicho que he dicho yo. El que lo ha dicho mintió, y en caso de que lo hubiera dicho, sería muy bien dicho.',
  'Pedro Pablo Pérez Pereira, pobre pintor portugués, pinta paisajes por poca plata para pasar por París.',
  'Paco Peco, chico rico, le gritaba como un loco a su tío Federico, y éste dijo: "¡Poco a poco, Paco Peco, poco pico!".'
];

function initRandomizers() {
  const topicBtn = document.getElementById('topicBtn');
  const topicBox = document.getElementById('topicBox');
  topicBtn.addEventListener('click', () => {
    topicBox.textContent = topics[Math.floor(Math.random() * topics.length)];
  });

  const tongueBtn = document.getElementById('tongueBtn');
  const tongueBox = document.getElementById('tongueBox');
  const showTongue = () => { tongueBox.textContent = tongues[Math.floor(Math.random() * tongues.length)]; };
  tongueBtn.addEventListener('click', showTongue);
  showTongue();
}

/* ---------- 6. RESPIRACIÓN ---------- */
let breathRunning = false, breathTimeout;

function initBreathing() {
  const btn = document.getElementById('breathBtn');
  const bubble = document.getElementById('bubble');
  const label = document.getElementById('bubbleLabel');

  function phase(name, className, text, duration, next) {
    bubble.className = 'bubble ' + className;
    label.textContent = text;
    breathTimeout = setTimeout(next, duration);
  }

  function cycle(remaining) {
    if (!breathRunning || remaining <= 0) {
      bubble.className = 'bubble';
      label.textContent = breathRunning ? '¡Bien hecho!' : 'Pulsa comenzar';
      breathRunning = false;
      btn.textContent = 'Comenzar';
      return;
    }
    phase('in', 'inhale', 'Inhala (4 s)', 4000, () =>
      phase('hold', 'hold', 'Retén (2 s)', 2000, () =>
        phase('out', 'exhale', 'Exhala (6 s)', 6000, () => cycle(remaining - 1))
      )
    );
  }

  btn.addEventListener('click', () => {
    if (breathRunning) {
      breathRunning = false;
      clearTimeout(breathTimeout);
      bubble.className = 'bubble';
      label.textContent = 'Detenido';
      btn.textContent = 'Comenzar';
      return;
    }
    breathRunning = true;
    btn.textContent = 'Detener';
    cycle(3);
  });
}

/* ---------- 7. POSTURA ---------- */
const postureItems = [
  'Pies paralelos, firmes en el suelo.',
  'Rodillas ligeramente desbloqueadas.',
  'Hombros hacia atrás y abajo, relajados.',
  'Pecho abierto, sin encorvarse.',
  'Barbilla paralela al suelo, mirada al frente.',
  'Manos visibles, ni en bolsillos ni cruzadas delante.',
  'Respira por la nariz, exhala por la boca. 3 veces.'
];

function initPosture() {
  const ul = document.getElementById('postureList');
  ul.innerHTML = postureItems.map(p => `<li>${p}</li>`).join('');
}

/* ---------- 8. HÁBITOS ---------- */
const habits = [
  'Respiración diafragmática antes de una reunión',
  'Leer 1 trabalenguas en voz alta',
  'Grabar 1 min ensayando algo',
  'Usar 1 pausa dramática en una conversación',
  'Preguntar más que afirmar en una charla',
  'Eliminar una muletilla durante el día',
  'Dar feedback con técnica DESC',
  'Mantener contacto visual en una conversación'
];

function todayKey() { return 'habits-' + new Date().toISOString().slice(0, 10); }

function loadHabits() {
  try { return JSON.parse(localStorage.getItem(todayKey()) || '[]'); }
  catch { return []; }
}
function saveHabits(done) {
  localStorage.setItem(todayKey(), JSON.stringify(done));
}

function renderHabits() {
  const list = document.getElementById('habitsList');
  const score = document.getElementById('habitsScore');
  const done = loadHabits();
  list.innerHTML = habits.map((h, i) => `
    <li class="${done.includes(i) ? 'done' : ''}" data-i="${i}">
      <input type="checkbox" ${done.includes(i) ? 'checked' : ''} />
      <span>${h}</span>
    </li>
  `).join('');
  list.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
      const i = parseInt(li.dataset.i, 10);
      const current = loadHabits();
      const idx = current.indexOf(i);
      if (idx >= 0) current.splice(idx, 1); else current.push(i);
      saveHabits(current);
      renderHabits();
    });
  });
  score.textContent = `${done.length} / ${habits.length} completados hoy`;
}

function initHabits() {
  renderHabits();
  document.getElementById('habitsReset').addEventListener('click', () => {
    localStorage.removeItem(todayKey());
    renderHabits();
  });
}

/* ---------- 9. QUIZ ---------- */
const quiz = [
  {
    q: '¿Qué transmite una mirada esquiva al hablar en público?',
    opts: ['Seguridad', 'Inseguridad o falta de convicción', 'Superioridad', 'Empatía'],
    correct: 1,
    explain: 'La mirada sostenida transmite seguridad y conexión. Esquivarla sugiere inseguridad o que no crees en lo que dices.'
  },
  {
    q: 'Según Mehrabian, en un mensaje emocional ¿qué peso tiene el contenido verbal?',
    opts: ['7%', '38%', '55%', '93%'],
    correct: 0,
    explain: 'El 7% verbal + 38% paraverbal + 55% no verbal. Importante: solo aplica a mensajes emocionales, no a todo contenido.'
  },
  {
    q: '¿Cuál es la estructura clásica de una intervención eficaz?',
    opts: ['Datos → anécdota → datos', 'Gancho → ideas clave → cierre', 'Introducción larga → conclusión rápida', 'Lista de puntos sin conexión'],
    correct: 1,
    explain: 'Un buen discurso capta (gancho), desarrolla 2-3 ideas y cierra con algo memorable o una llamada a la acción.'
  },
  {
    q: '¿Qué es la técnica del "disco rayado"?',
    opts: ['Subir el volumen progresivamente', 'Repetir con calma tu postura sin justificarte', 'Cambiar de tema cuando incomoda', 'Imitar al interlocutor'],
    correct: 1,
    explain: 'Consiste en reiterar con serenidad tu posición ante insistencias, sin entrar en discusión ni justificarte en exceso.'
  },
  {
    q: 'La velocidad ideal al hablar en público se sitúa en:',
    opts: ['60-80 ppm', '120-150 ppm', '180-220 ppm', 'Cuanto más rápido, mejor'],
    correct: 1,
    explain: '120-150 palabras por minuto permite que el oyente procese. Más rápido satura, más lento pierde atención.'
  },
  {
    q: '¿Qué característica define una sonrisa auténtica?',
    opts: ['Muestra los dientes', 'Involucra los músculos de los ojos', 'Dura al menos 5 segundos', 'Se acompaña de una carcajada'],
    correct: 1,
    explain: 'La sonrisa de Duchenne implica ojos (patas de gallo). La social solo mueve la boca y el cerebro la detecta como falsa.'
  },
  {
    q: 'La escucha activa implica principalmente:',
    opts: ['Asentir constantemente', 'Reformular y validar lo que dice el otro', 'Dar consejos rápidos', 'Esperar turno para hablar'],
    correct: 1,
    explain: 'Reformular ("entonces, si entiendo bien…") muestra comprensión. Validar la emoción abre la conversación.'
  },
  {
    q: '¿Qué es la técnica DESC?',
    opts: ['Describir - Expresar - Sugerir - Consecuencia', 'Desarrollar - Explicar - Silenciar - Cerrar', 'Dudar - Escuchar - Sentir - Continuar', 'Decidir - Ejecutar - Supervisar - Corregir'],
    correct: 0,
    explain: 'DESC estructura el feedback: describes el hecho, expresas cómo te afecta, sugieres cambio y nombras la consecuencia positiva.'
  },
  {
    q: 'Si te quedas en blanco hablando en público, lo mejor es:',
    opts: ['Disculparte inmediatamente', 'Pausa, respira y repite la última frase', 'Terminar la intervención', 'Cambiar de tema sin avisar'],
    correct: 1,
    explain: 'El público no conoce tu guion. Una pausa y retomar la última idea disimula casi cualquier laguna.'
  },
  {
    q: 'Una pausa antes de una idea clave sirve para:',
    opts: ['Rellenar tiempo', 'Crear expectación y enfatizar', 'Permitir que tomen apuntes', 'Mostrar duda'],
    correct: 1,
    explain: 'La pausa dramática es una de las herramientas más infrautilizadas. 2 segundos bien colocados valen más que un adjetivo.'
  }
];

function renderQuiz() {
  const box = document.getElementById('quizBox');
  const score = document.getElementById('quizScore');
  const answers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');

  box.innerHTML = quiz.map((q, i) => `
    <div class="quiz-q" data-i="${i}">
      <h4>${i + 1}. ${q.q}</h4>
      <div class="opts">
        ${q.opts.map((o, j) => `<button class="opt" data-j="${j}">${o}</button>`).join('')}
      </div>
      <div class="explain" hidden></div>
    </div>
  `).join('');

  box.querySelectorAll('.quiz-q').forEach(qEl => {
    const i = parseInt(qEl.dataset.i, 10);
    const q = quiz[i];
    // Si ya estaba respondida, renderizar estado
    if (answers[i] !== undefined) markAnswered(qEl, answers[i], q);

    qEl.querySelectorAll('.opt').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answers[i] !== undefined) return;
        const j = parseInt(btn.dataset.j, 10);
        answers[i] = j;
        localStorage.setItem('quizAnswers', JSON.stringify(answers));
        markAnswered(qEl, j, q);
        updateScore();
      });
    });
  });

  function markAnswered(qEl, selected, q) {
    qEl.querySelectorAll('.opt').forEach((b, j) => {
      b.disabled = true;
      if (j === q.correct) b.classList.add('correct');
      if (j === selected && selected !== q.correct) b.classList.add('wrong');
    });
    const explain = qEl.querySelector('.explain');
    explain.textContent = (selected === q.correct ? 'Correcto. ' : 'Incorrecto. ') + q.explain;
    explain.hidden = false;
  }

  function updateScore() {
    const ans = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
    const total = Object.keys(ans).length;
    const correct = Object.entries(ans).filter(([i, v]) => parseInt(v, 10) === quiz[i].correct).length;
    score.textContent = `${correct} / ${total} respondidas correctamente`;
  }
  updateScore();
}

function initQuiz() {
  renderQuiz();
  document.getElementById('quizReset').addEventListener('click', () => {
    localStorage.removeItem('quizAnswers');
    renderQuiz();
  });
}

/* ---------- 10. DIARIO ---------- */
function loadJournal() {
  try { return JSON.parse(localStorage.getItem('journal') || '[]'); }
  catch { return []; }
}
function saveJournal(entries) {
  localStorage.setItem('journal', JSON.stringify(entries));
}

function renderJournal() {
  const list = document.getElementById('journalList');
  const entries = loadJournal().sort((a, b) => b.date.localeCompare(a.date));
  if (!entries.length) {
    list.innerHTML = '<li class="muted" style="padding:1rem">Aún no has registrado ninguna entrada. Empieza hoy con 2 minutos.</li>';
    return;
  }
  list.innerHTML = entries.map(e => `
    <li class="journal-entry" data-id="${e.id}">
      <div class="date">${new Date(e.date).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}</div>
      <h4>${escapeHtml(e.situation)}</h4>
      <p><span class="label">Fue bien:</span>${escapeHtml(e.good)}</p>
      <p><span class="label">A mejorar:</span>${escapeHtml(e.improve)}</p>
      <button class="del" data-id="${e.id}">Eliminar</button>
    </li>
  `).join('');

  list.querySelectorAll('.del').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      saveJournal(loadJournal().filter(e => e.id !== id));
      renderJournal();
    });
  });
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function initJournal() {
  const form = document.getElementById('journalForm');
  const dateInput = document.getElementById('journalDate');
  dateInput.value = new Date().toISOString().slice(0, 10);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const entry = {
      id: Date.now().toString(),
      date: dateInput.value,
      situation: document.getElementById('journalSituation').value.trim(),
      good: document.getElementById('journalGood').value.trim(),
      improve: document.getElementById('journalImprove').value.trim()
    };
    const entries = loadJournal();
    entries.push(entry);
    saveJournal(entries);
    form.reset();
    dateInput.value = new Date().toISOString().slice(0, 10);
    renderJournal();
  });

  renderJournal();
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderModules();
  initFlashcards();
  initRecorder();
  initTimer();
  initRandomizers();
  initBreathing();
  initPosture();
  initHabits();
  initQuiz();
  initJournal();
});
