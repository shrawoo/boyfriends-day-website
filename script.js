const albumPhotos = [
  {
    name: 'first date',
    src: 'assets/photo1.svg',
    caption: 'our first date',
  },
  {
    name: 'late-night talk',
    src: 'assets/photo2.svg',
    caption: 'the night we started talking for hours',
  },
  {
    name: 'happy chaos',
    src: 'assets/photo3.svg',
    caption: 'all the laughter',
  },
  {
    name: 'little rituals',
    src: 'assets/photo4.svg',
    caption: 'our tiny rituals',
  },
  {
    name: 'best kind of comfort',
    src: 'assets/photo5.svg',
    caption: 'the kind of comfort that feels like home',
  },
  {
    name: 'us',
    src: 'assets/photo6.svg',
    caption: 'just us',
  },
  {
    name: 'favorite memory',
    src: 'assets/photo7.svg',
    caption: 'one of my favorite memories',
  },
  {
    name: 'future',
    src: 'assets/photo8.svg',
    caption: 'all the versions of us to come',
  },
];

const timelineItems = [
  {
    title: 'the day we started talking',
    date: 'day one',
    text: 'I still remember how easy it felt to talk to you. It was all a little unexpected, and suddenly every conversation started feeling like the best part of my day.',
    image: 'assets/photo1.svg',
  },
  {
    title: 'our first proper conversation',
    date: 'we never shut up after',
    text: 'There was just something about the way you spoke that made me want to keep listening. We ended up talking for hours, and it still feels like the beginning of something really special.',
    image: 'assets/photo2.svg',
  },
  {
    title: 'our first call',
    date: 'you were nervous, i was smiling',
    text: 'The first time we called, I remember thinking how strange and nice it was to hear your voice without typing it. It made the whole thing feel more real and a lot more thrilling.',
    image: 'assets/photo3.svg',
  },
  {
    title: 'our first date',
    date: 'the best kind of memory',
    text: 'Everything about it felt easy. We were just there, being ourselves, and for a second it was like the world had slowed down just enough for us to enjoy it.',
    image: 'assets/photo4.svg',
  },
  {
    title: 'our funniest moment',
    date: 'we could not stop laughing',
    text: 'One of the best parts of us is how easy it is to laugh together. Even the smallest silly moments become these little stories that I still replay in my head.',
    image: 'assets/photo5.svg',
  },
  {
    title: 'our first fight + making up',
    date: 'we made it through',
    text: 'It taught me that even the messy parts can still be tender, because we can be honest and still come back to each other softer than before.',
    image: 'assets/photo6.svg',
  },
  {
    title: 'a random memory that means a lot to me',
    date: 'little details stay',
    text: 'Sometimes it’s not the big moments that stay with me. It’s the tiny ones — the way you say things, the little jokes, the quiet moments that feel so full of care.',
    image: 'assets/photo7.svg',
  },
];

const loveCards = [
  {
    title: 'your ridiculously confident personality',
    message: 'You carry yourself with this weirdly comforting certainty, and it makes me admire you more than I can say.',
  },
  {
    title: 'the way you make me laugh',
    message: 'You somehow turn the most random moments into the funniest ones and I always end up smiling because of you.',
  },
  {
    title: 'your ambition',
    message: 'The way you want things and go after them with so much drive is honestly one of the most attractive things about you.',
  },
  {
    title: 'how you always have something to say',
    message: 'Even when I’m tired, your voice kind of makes everything feel more alive. You have a way of filling a room and my mind with presence.',
  },
  {
    title: 'your stubborn little brain',
    message: 'You can be the most stubborn person I know, but that same brain of yours is also one of the things I admire most about you.',
  },
  {
    title: 'the way you care even when you don’t say it',
    message: 'You show love in subtle, real ways. It’s there in the details, and I notice it more than I think you know.',
  },
  {
    title: 'how easy you are to love',
    message: 'Not in a one-dimensional way, but in a deep, complete way. Loving you has felt natural, warm, and surprisingly beautiful.',
  },
];

const quizQuestions = [
  {
    question: 'Who texted first?',
    options: ['you', 'me', 'the universe', 'neither'],
    answer: 'you',
  },
  {
    question: 'Who is more stubborn?',
    options: ['you', 'me', 'both equally', 'the cat'],
    answer: 'both equally',
  },
  {
    question: 'Who would survive longer without texting?',
    options: ['you', 'me', 'both would fail instantly', 'the phone'],
    answer: 'you',
  },
  {
    question: 'Who is more likely to say “I’m fine” when they’re definitely not fine?',
    options: ['you', 'me', 'both', 'no one, we are honest'],
    answer: 'both',
  },
  {
    question: 'Who makes the other laugh more?',
    options: ['you', 'me', 'we both do', 'the memes'],
    answer: 'we both do',
  },
  {
    question: 'Who is more likely to start a deep conversation at 1AM?',
    options: ['you', 'me', 'both', 'the Wi-Fi'],
    answer: 'both',
  },
];

const openWhenLetters = [
  {
    title: 'open when you miss me',
    message: 'Missing me is allowed. I am still here, even if I am not next to you. You have had a place in my heart for a while now, and I hope this reminds you that I am not going anywhere.',
  },
  {
    title: 'open when you’re having a bad day',
    message: 'Bad days do not mean you are failing. They mean you are human. Take a breath. You are still worthy, still loved, still enough — and I am still proud of you, even on the hardest days.',
  },
  {
    title: 'open when you need motivation',
    message: 'You are capable of more than you think. You have a dreamer’s heart and a fighter’s will. Keep going. I believe in you, even when you forget to believe in yourself.',
  },
  {
    title: 'open when you want to know what I think about you',
    message: 'I think you are funny, intelligent, beautiful in ways that feel quietly powerful, and deeply kind underneath all the layers that make you you. I admire you more than I say out loud.',
  },
  {
    title: 'open when you can’t sleep',
    message: 'I hope this little note helps you feel a tiny bit closer to me tonight. You deserve calm, rest, and softness. Try to let your mind settle. I am thinking of you.',
  },
];

const yourName = 'shrawoo';
const signature = '— your girl';

const mainContent = document.getElementById('mainContent');
const openBtn = document.getElementById('openBtn');
const loveGrid = document.getElementById('loveGrid');
const galleryGrid = document.getElementById('galleryGrid');
const timelineList = document.getElementById('timelineList');
const quizCard = document.getElementById('quizCard');
const envelopeGrid = document.getElementById('envelopeGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const finalReveal = document.getElementById('finalReveal');
const lastBtn = document.getElementById('lastBtn');
const letterText = document.getElementById('letterText');
const secretHeart = document.getElementById('secretHeart');

function revealOnScroll() {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => observer.observe(element));
}

function openMainExperience() {
  openBtn.addEventListener('click', () => {
    const landing = document.getElementById('landing');
    landing.style.display = 'none';
    mainContent.classList.add('visible');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.classList.add('main-open');
  });
}

function renderTimeline() {
  timelineList.innerHTML = timelineItems
    .map(
      (item, index) => `
        <article class="timeline-item ${index === 0 ? 'expanded' : ''}">
          <details ${index === 0 ? 'open' : ''}>
            <summary>
              <span class="timeline-badge" aria-hidden="true"></span>
              <span class="timeline-head">
                <h3>${item.title}</h3>
                <span class="meta">${item.date}</span>
              </span>
            </summary>
            <div class="content">
              <div class="timeline-content-wrap">
                <p>${item.text}</p>
                <img src="${item.image}" alt="${item.title}" />
              </div>
            </div>
          </details>
        </article>
      `
    )
    .join('');

  document.querySelectorAll('.timeline-item details').forEach((detail) => {
    detail.addEventListener('toggle', () => {
      document.querySelectorAll('.timeline-item').forEach((item) => {
        const current = item.querySelector('details');
        if (current !== detail) current.open = false;
      });
    });
  });
}

function renderGallery() {
  galleryGrid.innerHTML = albumPhotos
    .map(
      (photo, index) => `
        <figure class="gallery-item" tabindex="0" data-index="${index}">
          <img src="${photo.src}" alt="${photo.name}" />
          <figcaption>${photo.caption}</figcaption>
        </figure>
      `
    )
    .join('');

  document.querySelectorAll('.gallery-item').forEach((item) => {
    item.addEventListener('click', () => openLightbox(item.dataset.index));
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(item.dataset.index);
      }
    });
  });
}

function openLightbox(index) {
  const photo = albumPhotos[index];
  lightboxImage.src = photo.src;
  lightboxCaption.textContent = photo.caption;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
}

function renderLoveCards() {
  loveGrid.innerHTML = loveCards
    .map(
      (card) => `
        <article class="love-card" tabindex="0" aria-label="Flip card: ${card.title}">
          <div class="love-card-inner">
            <div class="love-card-face love-card-front">
              <h3>${card.title}</h3>
            </div>
            <div class="love-card-face love-card-back">
              <p>${card.message}</p>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  document.querySelectorAll('.love-card').forEach((card) => {
    card.addEventListener('click', () => card.classList.toggle('is-flipped'));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.classList.toggle('is-flipped');
      }
    });
  });
}

function renderQuiz() {
  let currentIndex = 0;
  let score = 0;
  let selectedAnswers = [];

  const renderQuestion = () => {
    const current = quizQuestions[currentIndex];
    if (!current) {
      renderResult();
      return;
    }

    const questionHTML = `
      <div class="quiz-question">
        <h3>${current.question}</h3>
        <ul class="quiz-options">
          ${current.options
            .map(
              (option) => `
                <li>
                  <button class="quiz-option" data-option="${option}">${option}</button>
                </li>
              `
            )
            .join('')}
        </ul>
        <div class="quiz-actions">
          <button type="button" class="quiz-back" ${currentIndex === 0 ? 'disabled' : ''}>back</button>
          <button type="button" class="quiz-next">next</button>
        </div>
      </div>
    `;

    quizCard.innerHTML = questionHTML;

    document.querySelectorAll('.quiz-option').forEach((button) => {
      button.addEventListener('click', () => {
        selectedAnswers[currentIndex] = button.dataset.option;
        document.querySelectorAll('.quiz-option').forEach((btn) => {
          btn.classList.remove('selected');
          btn.disabled = true;
        });
        button.classList.add('selected');
      });
    });

    const nextButton = document.querySelector('.quiz-next');
    nextButton.addEventListener('click', () => {
      if (!selectedAnswers[currentIndex]) {
        const currentOption = document.querySelector('.quiz-option');
        if (currentOption) currentOption.focus();
        return;
      }

      currentIndex += 1;
      renderQuestion();
    });

    const backButton = document.querySelector('.quiz-back');
    backButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex -= 1;
        renderQuestion();
      }
    });
  };

  const renderResult = () => {
    score = quizQuestions.reduce((total, question, index) => {
      return total + (selectedAnswers[index] === question.answer ? 1 : 0);
    }, 0);

    const resultText =
      score >= 5
        ? 'you two are basically a love documentary.'
        : score >= 3
          ? 'pretty good. you know the vibe.'
          : 'you’re still learning the chaotic little details — and that’s cute.';

    quizCard.innerHTML = `
      <div class="quiz-result">
        <h3>score: ${score}/${quizQuestions.length}</h3>
        <p>${resultText}</p>
        <button class="quiz-reset" type="button">play again</button>
      </div>
    `;

    document.querySelector('.quiz-reset').addEventListener('click', () => {
      currentIndex = 0;
      score = 0;
      selectedAnswers = [];
      renderQuestion();
    });
  };

  renderQuestion();
}

function renderEnvelopes() {
  envelopeGrid.innerHTML = openWhenLetters
    .map(
      (item) => `
        <article class="envelope" tabindex="0" aria-label="Open ${item.title}">
          <div class="envelope-body">
            <p class="envelope-note">open when...</p>
            <h3 class="envelope-title">${item.title}</h3>
          </div>
          <div class="envelope-letter">
            <p>${item.message}</p>
          </div>
        </article>
      `
    )
    .join('');

  document.querySelectorAll('.envelope').forEach((envelope) => {
    envelope.addEventListener('click', () => envelope.classList.toggle('open'));
    envelope.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        envelope.classList.toggle('open');
      }
    });
  });
}

function revealFinalMessage() {
  lastBtn.addEventListener('click', () => {
    finalReveal.classList.add('visible');
    const bgBurst = document.createElement('div');
    bgBurst.className = 'sparkle-burst';
    document.body.appendChild(bgBurst);
    setTimeout(() => bgBurst.remove(), 1800);

    spawnFloatingHearts();
    spawnSparkles();
  });
}

function spawnFloatingHearts() {
  for (let i = 0; i < 20; i += 1) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = '♡';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${5 + Math.random() * 4}s`;
    heart.style.opacity = String(0.3 + Math.random() * 0.6);
    heart.style.fontSize = `${16 + Math.random() * 20}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }
}

function spawnSparkles() {
  for (let i = 0; i < 30; i += 1) {
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.top = `${Math.random() * 100}vh`;
    sparkle.style.animationDelay = `${Math.random() * 0.5}s`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
  }
}

function bindSecretHeart() {
  let count = 0;
  secretHeart.addEventListener('click', () => {
    count += 1;
    if (count >= 5) {
      const secretMessage = document.createElement('div');
      secretMessage.className = 'secret-reveal';
      secretMessage.textContent = 'okay fine, you’re my favourite person.';
      document.body.appendChild(secretMessage);
      setTimeout(() => secretMessage.remove(), 2400);
      count = 0;
    }
  });
}

function initMusic() {
  const musicToggle = document.getElementById('musicToggle');
  const audio = new Audio('song.mp3');
  audio.loop = true;
  audio.volume = 0.28;

  let audioContext;
  let melodyInterval;
  let isPlaying = false;

  const fallbackMelody = () => {
    const notes = [220, 277.18, 329.63, 392.0, 329.63, 277.18, 349.23, 440];
    let index = 0;
    if (melodyInterval) clearInterval(melodyInterval);

    melodyInterval = setInterval(() => {
      if (!isPlaying) return;
      const freq = notes[index % notes.length];
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }

      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.value = 0.0001;
      osc.connect(gain);
      gain.connect(audioContext.destination);
      gain.gain.exponentialRampToValueAtTime(0.04, audioContext.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.5);
      osc.start();
      osc.stop(audioContext.currentTime + 0.5);
      index += 1;
    }, 340);
  };

  const toggleMusic = async () => {
    if (audio.paused) {
      try {
        await audio.play();
        isPlaying = true;
        musicToggle.textContent = '❚❚';
        musicToggle.setAttribute('aria-label', 'Pause music');
      } catch (error) {
        audio.src = '';
        isPlaying = true;
        fallbackMelody();
        musicToggle.textContent = '❚❚';
      }
    } else {
      audio.pause();
      isPlaying = false;
      musicToggle.textContent = '♪';
      musicToggle.setAttribute('aria-label', 'Play music');
    }
  };

  musicToggle.addEventListener('click', toggleMusic);

  audio.addEventListener('error', () => {
    musicToggle.dataset.fallback = 'true';
    fallbackMelody();
  });
}

function setEditableText() {
  const signatureElement = document.querySelector('.signature');
  if (signatureElement) signatureElement.textContent = signature;
  document.title = "happy boyfriend's day ♡";
  const letterHead = document.querySelector('.section-label');
  if (letterHead) {
    letterHead.textContent = 'okay, one serious thing...';
  }
}

function setNameText() {
  const heading = document.querySelector('.eyebrow');
  if (heading) heading.textContent = `for ${yourName}`;
}

function init() {
  renderTimeline();
  renderGallery();
  renderLoveCards();
  renderQuiz();
  renderEnvelopes();
  revealOnScroll();
  openMainExperience();
  revealFinalMessage();
  bindSecretHeart();
  initMusic();
  setEditableText();
  setNameText();

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });
}

init();
