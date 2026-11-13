// =========================================
// 1. DATA PORTOFOLIO
// =========================================
const ROLES = [
  'UI/UX Designer',
  'Product Design Enthusiast',
  'Frontend Web Learner'
];

// 1 PROYEK UI/UX: NEKOBREW (Terhubung ke gambar preview & Figma)
const PROJECTS = [
  {
    icon: '☕',
    category: 'Web UI/UX Design & Interactive Prototype',
    title: 'NEKOBREW — Coffee & Bakery Website',
    subtitle: 'Perancangan antarmuka website kafe bernuansa hangat dan tenang untuk eksplorasi menu kopi, bakery, serta pemesanan online.',
    previewImage: 'nekobrew.png',
    figmaUrl: 'https://www.figma.com/design/u9kMF6zDq7tGMf9H5Rh0ON/NEKOBREW?node-id=0-1&t=EtjhHdqGmdoqoxsR-1',
    figmaEmbedUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2Fu9kMF6zDq7tGMf9H5Rh0ON%2FNEKOBREW%3Fnode-id%3D0-1',
    overview: 'NEKOBREW adalah studi kasus perancangan UI/UX website untuk kedai kopi dan bakery yang mengusung konsep suasana tenang, hangat, dan santai. Desain difokuskan pada penyampaian atmosfer brand melalui visual editorial yang kuat serta navigasi katalog produk yang praktis.',
    features: [
      { title: 'Atmospheric Hero & Storytelling', desc: 'Tampilan pembuka dengan kontras tipografi yang tegas dan visual suasana penyajian kopi.' },
      { title: 'Clear Category Navigation', desc: 'Akses cepat ke halaman Home, Coffee, Bakery, Shop, dan About dalam satu bilah navigasi.' },
      { title: 'Integrated Shop & Cart Flow', desc: 'Alur pemilihan produk kopi dan roti yang terhubung langsung dengan indikator keranjang belanja.' },
      { title: 'Interactive Figma Prototype', desc: 'Simulasi perpindahan antar halaman website yang dapat diuji langsung melalui kanvas Figma.' }
    ],
    highlights: [
      'Menerapkan hierarki tipografi dan kontras warna gelap-hangat agar teks tetap mudah dibaca di atas foto latar.',
      'Menyusun tata letak komponen berbasis Auto Layout di Figma sehingga konsisten dan siap diimplementasikan ke HTML/CSS.'
    ],
    tech: ['Figma', 'Web UI Design', 'UX Flow', 'Wireframing', 'Interactive Prototype']
  }
];

// KEAHLIAN DASAR + LOGO
const BASIC_SKILLS = [
  {
    name: 'Figma',
    level: 'UI/UX & Prototype',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
  },
  {
    name: 'HTML5',
    level: 'Struktur Web Dasar',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS3',
    level: 'Styling & Layout',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  {
    name: 'JavaScript',
    level: 'Interaktivitas Dasar',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'Canva',
    level: 'Visual & Presentasi',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'
  },
  {
    name: 'GitHub',
    level: 'Version Control',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  }
];

// =========================================
// 2. DARK MODE TOGGLE
// =========================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  themeIcon.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  themeIcon.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// =========================================
// 3. ASCII MORPH TEXT EFFECT (JUDUL HERO)
// =========================================
const morphEl = document.getElementById('asciiMorphTitle');
const morphChars = '!<>-_\\/[]{}—=+*^?#________';

function runAsciiMorph(element) {
  const targetText = element.dataset.text;
  let iteration = 0;
  clearInterval(element._morphTimer);

  element._morphTimer = setInterval(() => {
    element.textContent = targetText
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' ';
        if (index < iteration) return targetText[index];
        return morphChars[Math.floor(Math.random() * morphChars.length)];
      })
      .join('');

    if (iteration >= targetText.length) {
      clearInterval(element._morphTimer);
    }
    iteration += 1 / 2;
  }, 30);
}

runAsciiMorph(morphEl);
morphEl.addEventListener('mouseenter', () => runAsciiMorph(morphEl));

// =========================================
// 4. TYPEWRITER CAROUSEL (ROLES)
// =========================================
const roleEl = document.getElementById('typewriterRole');
let roleIdx = 0;
let charIdx = 0;
let isDeleting = false;

function typeRoleLoop() {
  const currentRole = ROLES[roleIdx];
  roleEl.textContent = currentRole.substring(0, charIdx);

  let delay = isDeleting ? 45 : 90;

  if (!isDeleting && charIdx === currentRole.length) {
    delay = 1600;
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    roleIdx = (roleIdx + 1) % ROLES.length;
    delay = 350;
  }

  charIdx += isDeleting ? -1 : 1;
  setTimeout(typeRoleLoop, delay);
}
typeRoleLoop();

// =========================================
// 5. ASCII ART TYPEWRITER (KANAN HERO)
// =========================================
const asciiArtBox = document.getElementById('asciiArtBox');
const cuteCatAscii = [
  '      /\\_____/\\',
  '     /  o   o  \\',
  '    ( ==  ^  == )',
  '     )         (',
  '    (           )',
  '   ( (  )   (  ) )',
  '  (__(__)___(__)__)'
].join('\n');

let artIdx = 0;
function typeAsciiArt() {
  if (artIdx <= cuteCatAscii.length) {
    asciiArtBox.textContent = cuteCatAscii.slice(0, artIdx);
    artIdx++;
    setTimeout(typeAsciiArt, 14);
  }
}
typeAsciiArt();

// =========================================
// 6. FLOATING STICKERS DENGAN EFEK SCROLL
// =========================================
const stickersLayer = document.getElementById('stickersLayer');
const stickerConfigs = [
  { emoji: '⭐', ix: -160, iy: -90, fx: -440, fy: -150 },
  { emoji: '🌸', ix: 160, iy: -80, fx: 450, fy: -170 },
  { emoji: '💖', ix: -170, iy: 110, fx: -430, fy: 170 },
  { emoji: '✨', ix: 170, iy: 120, fx: 440, fy: 160 },
  { emoji: '🎀', ix: -110, iy: -140, fx: -270, fy: -230 },
  { emoji: '☕', ix: 120, iy: -130, fx: 290, fy: -220 },
  { emoji: '🎨', ix: -130, iy: 150, fx: -280, fy: 220 },
  { emoji: '🎓', ix: 130, iy: 150, fx: 290, fy: 210 },
  { emoji: '🌷', ix: -190, iy: 10, fx: -470, fy: 10 },
  { emoji: '🍓', ix: 190, iy: 10, fx: 470, fy: 10 }
];

const stickerEls = stickerConfigs.map((cfg) => {
  const span = document.createElement('span');
  span.className = 'sticker-item';
  span.textContent = cfg.emoji;
  stickersLayer.appendChild(span);
  return { el: span, cfg };
});

function updateStickersOnScroll() {
  const stage = document.querySelector('.journal-stage');
  if (!stage) return;

  const rect = stage.getBoundingClientRect();
  const winH = window.innerHeight;
  const visible = Math.min(1, Math.max(0, (winH - rect.top) / (winH * 0.85)));
  const scaleFactor = window.innerWidth < 768 ? 0.42 : 1;

  stickerEls.forEach(({ el, cfg }, i) => {
    const ix = cfg.ix * scaleFactor;
    const iy = cfg.iy * scaleFactor;
    const fx = cfg.fx * scaleFactor;
    const fy = cfg.fy * scaleFactor;

    const x = ix + (fx - ix) * visible;
    const y = iy + (fy - iy) * visible;
    const scale = (window.innerWidth < 768 ? 0.65 : 0.85) + 0.35 * visible;
    const rot = (i % 2 === 0 ? 1 : -1) * visible * 22;

    el.style.transform = `translate(${x}px, ${y}px) scale(${scale}) rotate(${rot}deg)`;
  });
}

window.addEventListener('scroll', () => requestAnimationFrame(updateStickersOnScroll), { passive: true });
window.addEventListener('resize', updateStickersOnScroll);
updateStickersOnScroll();

// =========================================
// 7. RENDER 1 PROJECT UI/UX & KEAHLIAN DASAR (LOOPING)
// =========================================
const projectsGrid = document.getElementById('projectsGrid');
PROJECTS.forEach((proj, index) => {
  const card = document.createElement('article');
  card.className = 'project-card';
  card.innerHTML = `
    <img src="${proj.previewImage}" alt="Preview ${proj.title}" class="project-banner" />
    <div class="project-body">
      <div class="project-top">
        <div class="project-icon">${proj.icon}</div>
        <div>
          <span class="project-badge">${proj.category}</span>
          <h3 class="project-title">${proj.title}</h3>
        </div>
      </div>
      <p class="project-subtitle">${proj.subtitle}</p>
      <div class="tech-pills">
        ${proj.tech.map((t) => `<span class="tech-pill">${t}</span>`).join('')}
      </div>
      <div class="project-links">
        <button class="btn-small primary" data-project-idx="${index}">Lihat Studi Kasus &amp; Preview Figma</button>
        <a href="${proj.figmaUrl}" target="_blank" rel="noopener noreferrer" class="btn-small">Buka File Figma &nearr;</a>
      </div>
    </div>
  `;
  projectsGrid.appendChild(card);
});

const techStackGrid = document.getElementById('techStackGrid');
const loopedSkills = [...BASIC_SKILLS, ...BASIC_SKILLS];

loopedSkills.forEach((item) => {
  const div = document.createElement('div');
  div.className = 'tech-item';
  div.innerHTML = `
    <img src="${item.icon}" alt="Logo ${item.name}" loading="lazy" />
    <span>${item.name}</span>
    <small>${item.level}</small>
  `;
  techStackGrid.appendChild(div);
});

// =========================================
// 8. MODAL FOTO PROFIL TUNGGAL (JURNAL)
// =========================================
const profileModal = document.getElementById('profileModal');
const journalCard = document.getElementById('journalCard');
const closeProfileModal = document.getElementById('closeProfileModal');

journalCard.addEventListener('click', () => {
  profileModal.classList.remove('hidden');
});

closeProfileModal.addEventListener('click', () => profileModal.classList.add('hidden'));
profileModal.addEventListener('click', (e) => {
  if (e.target === profileModal) profileModal.classList.add('hidden');
});

// =========================================
// 9. MODAL DETAIL PROYEK & EMBED FIGMA
// =========================================
const projectModal = document.getElementById('projectModal');
const projectModalContent = document.getElementById('projectModalContent');
const closeProjectModal = document.getElementById('closeProjectModal');

projectsGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-project-idx]');
  if (!btn) return;

  const proj = PROJECTS[Number(btn.dataset.projectIdx)];
  projectModalContent.innerHTML = `
    <div class="project-top">
      <div class="project-icon">${proj.icon}</div>
      <div>
        <span class="project-badge">${proj.category}</span>
        <h2 class="project-title">${proj.title}</h2>
      </div>
    </div>
    <iframe class="figma-embed-frame" src="${proj.figmaEmbedUrl}" allowfullscreen title="Figma Preview NEKOBREW"></iframe>
    <p style="margin: 0.75rem 0; color: var(--text-secondary);">${proj.overview}</p>
    <h3 style="margin-top:1rem;">Key Features</h3>
    <div class="modal-features-grid">
      ${proj.features.map((f) => `<div class="feature-box"><strong>${f.title}</strong><p style="font-size:0.85rem; margin-top:0.2rem;">${f.desc}</p></div>`).join('')}
    </div>
    <h3>Design Highlights</h3>
    <ul class="highlights-list">
      ${proj.highlights.map((h) => `<li>${h}</li>`).join('')}
    </ul>
    <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:1rem; margin-top:1rem;">
      <div class="tech-pills" style="margin:0;">
        ${proj.tech.map((t) => `<span class="tech-pill">${t}</span>`).join('')}
      </div>
      <a href="${proj.figmaUrl}" target="_blank" rel="noopener noreferrer" class="btn-small primary">Buka Fullscreen di Figma &nearr;</a>
    </div>
  `;
  projectModal.classList.remove('hidden');
});

closeProjectModal.addEventListener('click', () => projectModal.classList.add('hidden'));
projectModal.addEventListener('click', (e) => {
  if (e.target === projectModal) projectModal.classList.add('hidden');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    profileModal.classList.add('hidden');
    projectModal.classList.add('hidden');
  }
});

// =========================================
// 10. SALIN EMAIL (CONTACT)
// =========================================
const copyEmailBtn = document.getElementById('copyEmailBtn');
const copyFeedback = document.getElementById('copyFeedback');

copyEmailBtn.addEventListener('click', () => {
  const email = copyEmailBtn.dataset.email;
  navigator.clipboard.writeText(email).then(() => {
    copyFeedback.textContent = `✅ Email ${email} berhasil disalin!`;
    setTimeout(() => (copyFeedback.textContent = ''), 3000);
  });
});