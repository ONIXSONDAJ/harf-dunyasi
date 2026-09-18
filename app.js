'use strict';

/* =========================================================
   VERİ – MEB 1. sınıf ilk okuma-yazma harf grupları
   ========================================================= */
const GRUPLAR = [
  ['e', 'l', 'a', 'k', 'i', 'n'],
  ['o', 'm', 'u', 't', 'ü', 'y'],
  ['ö', 'r', 'ı', 'd', 's', 'b'],
  ['z', 'ç', 'g', 'ş', 'c', 'p'],
  ['h', 'v', 'ğ', 'f', 'j'],
];
const TUM_HARFLER = GRUPLAR.flat();
const SESLI = 'aeıioöuü';

const KELIMELER = {
  e: [['Elma', '🍎'], ['Ev', '🏠'], ['Ekmek', '🍞']],
  l: [['Limon', '🍋'], ['Lale', '🌷'], ['Lahana', '🥬']],
  a: [['Araba', '🚗'], ['Ayı', '🐻'], ['Arı', '🐝']],
  k: [['Kedi', '🐱'], ['Kalem', '✏️'], ['Kelebek', '🦋']],
  i: [['İnek', '🐄'], ['İğne', '🪡'], ['İtfaiye', '🚒']],
  n: [['Nine', '👵'], ['Nota', '🎵'], ['Nokta', '⚫']],
  o: [['Okul', '🏫'], ['Otobüs', '🚌'], ['Orman', '🌲']],
  m: [['Muz', '🍌'], ['Maymun', '🐒'], ['Mantar', '🍄']],
  u: [['Uçak', '✈️'], ['Uğurböceği', '🐞'], ['Uçurtma', '🪁']],
  t: [['Top', '⚽'], ['Tavşan', '🐰'], ['Tren', '🚂']],
  ü: [['Üzüm', '🍇'], ['Üçgen', '🔺'], ['Ünlem', '❗']],
  y: [['Yıldız', '⭐'], ['Yumurta', '🥚'], ['Yılan', '🐍']],
  ö: [['Ördek', '🦆'], ['Örümcek', '🕷️'], ['Örgü', '🧶']],
  r: [['Robot', '🤖'], ['Roket', '🚀'], ['Radyo', '📻']],
  ı: [['Ispanak', '🥬'], ['Işık', '💡'], ['Irmak', '🏞️']],
  d: [['Dondurma', '🍦'], ['Deve', '🐪'], ['Domates', '🍅']],
  s: [['Saat', '⏰'], ['Salyangoz', '🐌'], ['Sincap', '🐿️']],
  b: [['Balık', '🐟'], ['Balon', '🎈'], ['Bisiklet', '🚲']],
  z: [['Zürafa', '🦒'], ['Zeytin', '🫒'], ['Zar', '🎲']],
  ç: [['Çiçek', '🌸'], ['Çilek', '🍓'], ['Çorap', '🧦']],
  g: [['Gül', '🌹'], ['Gemi', '🚢'], ['Güneş', '☀️']],
  ş: [['Şemsiye', '☂️'], ['Şapka', '🎩'], ['Şeftali', '🍑']],
  c: [['Ceviz', '🌰'], ['Cetvel', '📏'], ['Civciv', '🐤']],
  p: [['Pasta', '🎂'], ['Penguen', '🐧'], ['Portakal', '🍊']],
  h: [['Horoz', '🐓'], ['Havuç', '🥕'], ['Hediye', '🎁']],
  v: [['Vazo', '🏺'], ['Vapur', '⛴️'], ['Vişne', '🍒']],
  ğ: [['Ağaç', '🌳'], ['Dağ', '⛰️'], ['Yağmur', '🌧️']],
  f: [['Fil', '🐘'], ['Fare', '🐭'], ['Fener', '🔦']],
  j: [['Jaguar', '🐆'], ['Jeton', '🪙'], ['Jelibon', '🍬']],
};

/* Kelime Kur / Eksik Harf oyunları için kısa kelimeler (küçük harf, en fazla 7 harf) */
const KELIME_LISTESI = [
  // 1. grup harfleriyle
  ['el', '✋'], ['kale', '🏰'], ['anne', '👩'], ['lale', '🌷'], ['kek', '🧁'], ['inek', '🐄'], ['nine', '👵'], ['ekin', '🌾'],
  // 2. grup
  ['at', '🐎'], ['ay', '🌙'], ['ok', '🏹'], ['top', '⚽'], ['elma', '🍎'], ['kutu', '📦'], ['okul', '🏫'], ['limon', '🍋'],
  ['koyun', '🐑'], ['ayna', '🪞'], ['kayık', '🛶'], ['tilki', '🦊'], ['kilit', '🔒'], ['mum', '🕯️'], ['yol', '🛣️'],
  ['kalem', '✏️'], ['etek', '👗'], ['ayak', '🦶'], ['kulak', '👂'], ['et', '🥩'], ['yumak', '🧶'], ['tay', '🐴'],
  ['maymun', '🐒'], ['uyku', '😴'], ['ev', '🏠'],
  // 3. grup
  ['ördek', '🦆'], ['balık', '🐟'], ['araba', '🚗'], ['kedi', '🐱'], ['arı', '🐝'], ['ayı', '🐻'], ['deve', '🐪'],
  ['ekmek', '🍞'], ['süt', '🥛'], ['saat', '⏰'], ['bebek', '👶'], ['radyo', '📻'], ['robot', '🤖'], ['roket', '🚀'],
  ['balon', '🎈'], ['kurt', '🐺'], ['kitap', '📖'], ['burun', '👃'], ['bal', '🍯'], ['su', '💧'], ['bot', '🥾'],
  ['kar', '❄️'], ['dede', '👴'], ['baba', '👨'], ['abla', '👧'], ['aslan', '🦁'], ['sincap', '🐿️'], ['tren', '🚂'],
  ['domates', '🍅'], ['tavuk', '🐔'], ['sandal', '🛶'], ['dolma', '🥙'],
  // 4. grup
  ['muz', '🍌'], ['çiçek', '🌸'], ['çilek', '🍓'], ['şapka', '🎩'], ['kuş', '🐦'], ['gül', '🌹'], ['gemi', '🚢'],
  ['güneş', '☀️'], ['zar', '🎲'], ['zil', '🔔'], ['ceviz', '🌰'], ['pasta', '🎂'], ['çorap', '🧦'], ['koç', '🐏'],
  ['geyik', '🦌'], ['keçi', '🐐'], ['zürafa', '🦒'], ['zebra', '🦓'], ['peynir', '🧀'], ['çay', '🍵'], ['diş', '🦷'],
  ['şeker', '🍬'], ['uçak', '✈️'], ['gözlük', '👓'], ['kapı', '🚪'], ['çanta', '👜'], ['pizza', '🍕'], ['penguen', '🐧'],
  ['civciv', '🐤'], ['çekiç', '🔨'], ['göz', '👁️'], ['zeytin', '🫒'], ['örümcek', '🕷️'], ['cetvel', '📏'],
  // 5. grup
  ['fil', '🐘'], ['fare', '🐭'], ['horoz', '🐓'], ['havuç', '🥕'], ['vazo', '🏺'], ['vapur', '⛴️'], ['ağaç', '🌳'],
  ['dağ', '⛰️'], ['yağmur', '🌧️'], ['jeton', '🪙'], ['hediye', '🎁'], ['fener', '🔦'], ['vişne', '🍒'],
  ['fıstık', '🥜'], ['yaprak', '🍃'], ['fincan', '☕'], ['jelibon', '🍬'], ['fırça', '🖌️'], ['hamburger', '🍔'],
];

/* Birbirine karıştırılan harfler (Farklı Olanı Bul oyunu) */
const BENZER = {
  b: ['d', 'p'], d: ['b', 'p'], p: ['b', 'd'], m: ['n'], n: ['m', 'h'], h: ['n'],
  u: ['ü'], ü: ['u'], o: ['ö'], ö: ['o'], ı: ['i'], i: ['ı'], c: ['ç'], ç: ['c'],
  s: ['ş'], ş: ['s'], g: ['ğ'], ğ: ['g'], t: ['f'], f: ['t'], v: ['y'], y: ['v'],
  l: ['i'], k: ['t'], e: ['a'], a: ['e'], r: ['n'], z: ['s'], j: ['y'],
};

/* =========================================================
   YARDIMCILAR
   ========================================================= */
const $ = (s) => document.querySelector(s);
const buyuk = (h) => h.toLocaleUpperCase('tr-TR');
const rastgele = (dizi) => dizi[Math.floor(Math.random() * dizi.length)];
const karistir = (dizi) => {
  const d = [...dizi];
  for (let i = d.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [d[i], d[j]] = [d[j], d[i]];
  }
  return d;
};
const sesliMi = (h) => SESLI.includes(h);

/* Kalıcı kayıt (localStorage) */
const VARSAYILAN = { isim: '', grup: 5, ogrenilen: {}, yildiz: 0 };
let kayit = kayitYukle();

function kayitYukle() {
  try {
    return Object.assign({}, VARSAYILAN, JSON.parse(localStorage.getItem('harfDunyasi') || '{}'));
  } catch (e) {
    return { ...VARSAYILAN };
  }
}
function kaydet() {
  try { localStorage.setItem('harfDunyasi', JSON.stringify(kayit)); } catch (e) { /* özel mod vb. */ }
  ustBilgiGuncelle();
}
function yildizEkle(n) {
  kayit.yildiz += n;
  kaydet();
}

/* Oyunlarda kullanılacak harf havuzu: ayarlardaki gruba kadar */
function havuz() {
  return GRUPLAR.slice(0, kayit.grup).flat();
}

/* =========================================================
   SES EFEKTLERİ (Web Audio) ve KONUŞMA (Web Speech)
   ========================================================= */
let actx = null;
function sesBaglam() {
  if (!actx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    actx = new AC();
  }
  if (actx.state === 'suspended') actx.resume();
  return actx;
}
function ton(frek, sure, tip = 'sine', gecikme = 0, siddet = 0.18) {
  const c = sesBaglam();
  if (!c) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = tip;
  o.frequency.value = frek;
  g.gain.value = siddet;
  o.connect(g).connect(c.destination);
  const t = c.currentTime + gecikme;
  o.start(t);
  g.gain.setValueAtTime(siddet, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + sure);
  o.stop(t + sure);
}
function sesEfekti(ad) {
  if (ad === 'dogru') { ton(523, 0.15); ton(659, 0.15, 'sine', 0.12); ton(784, 0.3, 'sine', 0.24); }
  else if (ad === 'yanlis') { ton(220, 0.25, 'sawtooth', 0, 0.08); ton(180, 0.3, 'sawtooth', 0.15, 0.08); }
  else if (ad === 'pat') { ton(700, 0.08, 'square', 0, 0.12); ton(300, 0.12, 'square', 0.05, 0.1); }
  else if (ad === 'tik') { ton(880, 0.06, 'triangle', 0, 0.1); }
  else if (ad === 'kazan') { [523, 659, 784, 1047].forEach((f, i) => ton(f, 0.35, 'sine', i * 0.15)); }
}

function turkceSes() {
  if (!('speechSynthesis' in window)) return null;
  const sesler = speechSynthesis.getVoices();
  return sesler.find((v) => v.lang && v.lang.toLowerCase().startsWith('tr')) || null;
}
function konus(metin) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(metin);
  u.lang = 'tr-TR';
  u.rate = 0.85;
  u.pitch = 1.1;
  const v = turkceSes();
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}
/* Tek harfin sesi: TTS'e uygun metin */
function harfSesi(h) {
  if (h === 'ğ') konus('yumuşak ge');
  else konus(h);
}
if ('speechSynthesis' in window) {
  speechSynthesis.onvoiceschanged = () => {};
  speechSynthesis.getVoices();
}

/* =========================================================
   KONFETİ
   ========================================================= */
function konfeti(adet = 60) {
  const alan = $('#konfeti');
  const renkler = ['#ff7b54', '#4ecdc4', '#ffc93c', '#7bd389', '#c77dff', '#ff9ff3'];
  for (let i = 0; i < adet; i++) {
    const p = document.createElement('div');
    p.className = 'konfeti-parca';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.background = rastgele(renkler);
    p.style.animationDuration = 1.6 + Math.random() * 1.4 + 's';
    p.style.animationDelay = Math.random() * 0.4 + 's';
    p.style.transform = `rotate(${Math.random() * 360}deg)`;
    alan.appendChild(p);
    setTimeout(() => p.remove(), 3500);
  }
}

/* =========================================================
   EKRAN GEÇİŞLERİ
   ========================================================= */
const BASLIKLAR = {
  menu: 'Harf Dünyası',
  ders: 'Harfleri Öğren',
  harf: 'Harf',
  oyunlar: 'Oyunlar',
  'oyun-ses': 'Sesi Dinle, Harfi Bul',
  'oyun-resim': 'Hangi Harfle Başlar?',
  'oyun-eslestir': 'Büyük-Küçük Eşleştir',
  'oyun-balon': 'Balon Patlat',
  'oyun-kelime': 'Kelime Kur',
  'oyun-eksik': 'Eksik Harf',
  'oyun-av': 'Harf Avı',
  'oyun-farkli': 'Farklı Olanı Bul',
  ayarlar: 'Ayarlar',
};
const USTEKRAN = {
  ders: 'menu', harf: 'ders', oyunlar: 'menu', ayarlar: 'menu',
  'oyun-ses': 'oyunlar', 'oyun-resim': 'oyunlar', 'oyun-eslestir': 'oyunlar', 'oyun-balon': 'oyunlar',
  'oyun-kelime': 'oyunlar', 'oyun-eksik': 'oyunlar', 'oyun-av': 'oyunlar', 'oyun-farkli': 'oyunlar',
};
let aktifEkran = 'menu';

function git(id) {
  oyunuDurdur();
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  document.querySelectorAll('.ekran').forEach((e) => e.classList.remove('aktif'));
  $('#ekran-' + id).classList.add('aktif');
  $('#geri').style.visibility = id === 'menu' ? 'hidden' : 'visible';
  $('#baslik').textContent = BASLIKLAR[id] || 'Harf Dünyası';
  aktifEkran = id;
  window.scrollTo(0, 0);

  if (id === 'menu') menuGuncelle();
  if (id === 'ders') harfListesiCiz();
  if (id === 'oyunlar') oyunMenuGuncelle();
  if (id === 'ayarlar') ayarlariDoldur();
  if (id === 'oyun-ses') sesOyunuBasla();
  if (id === 'oyun-resim') resimOyunuBasla();
  if (id === 'oyun-eslestir') eslestirBasla();
  if (id === 'oyun-balon') balonHazirla();
  if (id === 'oyun-kelime') kelimeOyunuBasla();
  if (id === 'oyun-eksik') eksikOyunuBasla();
  if (id === 'oyun-av') avOyunuBasla();
  if (id === 'oyun-farkli') farkliOyunuBasla();
}

$('#geri').addEventListener('click', () => {
  sesEfekti('tik');
  git(USTEKRAN[aktifEkran] || 'menu');
});
document.querySelectorAll('[data-git]').forEach((b) => {
  b.addEventListener('click', () => { sesEfekti('tik'); git(b.dataset.git); });
});

/* =========================================================
   ANA MENÜ
   ========================================================= */
function ustBilgiGuncelle() {
  $('#ust-yildiz').textContent = '⭐ ' + kayit.yildiz;
}
function menuGuncelle() {
  const ad = kayit.isim ? `Merhaba, ${kayit.isim}!` : 'Merhaba!';
  $('#selam').textContent = ad;
  const sayi = Object.keys(kayit.ogrenilen).length;
  const yuzde = Math.round((sayi / TUM_HARFLER.length) * 100);
  $('#ilerleme-metni').textContent =
    sayi === 0 ? 'Harfleri öğrenmeye hazır mısın?'
      : sayi === TUM_HARFLER.length ? 'Tüm harfleri öğrendin! Süpersin! 🎉'
        : `${sayi} / ${TUM_HARFLER.length} harf öğrendin`;
  $('#ilerleme-dolu').style.width = yuzde + '%';
  ustBilgiGuncelle();
}

/* =========================================================
   DERS: HARF LİSTESİ
   ========================================================= */
function harfListesiCiz() {
  const alan = $('#harf-listesi');
  alan.innerHTML = '';
  GRUPLAR.forEach((grup, gi) => {
    const baslik = document.createElement('div');
    baslik.className = 'grup-baslik';
    baslik.textContent = `${gi + 1}. Grup`;
    alan.appendChild(baslik);

    const izgara = document.createElement('div');
    izgara.className = 'harf-izgara';
    grup.forEach((h) => {
      const k = document.createElement('div');
      k.className = 'harf-kutu' + (sesliMi(h) ? ' sesli' : '') + (kayit.ogrenilen[h] ? ' ogrenildi' : '');
      k.innerHTML = `${buyuk(h)}<small>${h}</small>` + (kayit.ogrenilen[h] ? '<span class="yildiz">⭐</span>' : '');
      k.addEventListener('click', () => { sesEfekti('tik'); harfAc(h); });
      izgara.appendChild(k);
    });
    alan.appendChild(izgara);
  });
}

/* =========================================================
   DERS: TEK HARF
   ========================================================= */
let seciliHarf = 'e';
let cizBuyukMu = true;

function harfAc(h) {
  seciliHarf = h;
  git('harf');
  $('#baslik').textContent = `${buyuk(h)} ${h} harfi`;
  $('#harf-buyuk').textContent = buyuk(h);
  $('#harf-kucuk').textContent = h;

  const rozet = $('#harf-rozet');
  rozet.textContent = sesliMi(h) ? '🎵 Sesli harf' : '🔇 Sessiz harf';
  rozet.className = 'rozet ' + (sesliMi(h) ? 'sesli' : 'sessiz');

  $('#harf-not').textContent =
    h === 'ğ' ? 'Ğ harfi ile başlayan kelime yoktur. Ğ hep kelimenin içinde olur: a-ğ-aç, da-ğ.'
      : h === 'ı' ? 'Büyük I harfinin noktası yoktur: I – ı.'
        : h === 'i' ? 'Büyük İ harfinin de noktası vardır: İ – i.'
          : '';

  const ogr = $('#btn-ogrendim');
  ogr.textContent = kayit.ogrenilen[h] ? '⭐ Öğrendin!' : '⭐ Öğrendim!';
  ogr.disabled = !!kayit.ogrenilen[h];
  ogr.style.opacity = kayit.ogrenilen[h] ? 0.6 : 1;

  const kelimeler = $('#kelime-kartlari');
  kelimeler.innerHTML = '';
  KELIMELER[h].forEach(([ad, emoji]) => {
    const k = document.createElement('div');
    k.className = 'kelime-kart';
    k.innerHTML = `<div class="emoji">${emoji}</div><div class="ad">${vurgula(ad, h)}</div>`;
    k.addEventListener('click', () => konus(ad));
    kelimeler.appendChild(k);
  });

  cizBuyukMu = true;
  $('#ciz-buyuk').classList.add('secili');
  $('#ciz-kucuk').classList.remove('secili');
  cizSifirla();

  const i = TUM_HARFLER.indexOf(h);
  $('#onceki-harf').disabled = i === 0;
  $('#sonraki-harf').disabled = i === TUM_HARFLER.length - 1;
  $('#onceki-harf').style.opacity = i === 0 ? 0.4 : 1;
  $('#sonraki-harf').style.opacity = i === TUM_HARFLER.length - 1 ? 0.4 : 1;

  setTimeout(() => harfSesi(h), 300);
}

/* Kelimede harfi renklendir (ilk eşleşen harf) */
function vurgula(kelime, h) {
  const kucukKelime = kelime.toLocaleLowerCase('tr-TR');
  const i = kucukKelime.indexOf(h);
  if (i < 0) return kelime;
  return kelime.slice(0, i) + '<b>' + kelime[i] + '</b>' + kelime.slice(i + 1);
}

$('#btn-harf-sesi').addEventListener('click', () => harfSesi(seciliHarf));
$('#btn-ogrendim').addEventListener('click', () => {
  if (kayit.ogrenilen[seciliHarf]) return;
  kayit.ogrenilen[seciliHarf] = true;
  yildizEkle(1);
  sesEfekti('kazan');
  konfeti(40);
  konus('Aferin! ' + buyuk(seciliHarf) + ' harfini öğrendin.');
  harfAc(seciliHarf);
});
$('#onceki-harf').addEventListener('click', () => {
  const i = TUM_HARFLER.indexOf(seciliHarf);
  if (i > 0) harfAc(TUM_HARFLER[i - 1]);
});
$('#sonraki-harf').addEventListener('click', () => {
  const i = TUM_HARFLER.indexOf(seciliHarf);
  if (i < TUM_HARFLER.length - 1) harfAc(TUM_HARFLER[i + 1]);
});

/* ---------- Harf yazma (canvas) ---------- */
const tuval = $('#ciz');
const ctx = tuval.getContext('2d');
let ciziyor = false;

function cizSifirla() {
  ctx.clearRect(0, 0, tuval.width, tuval.height);
  // Kılavuz çizgileri
  ctx.strokeStyle = '#eee';
  ctx.lineWidth = 2;
  [75, 150, 225].forEach((y) => {
    ctx.beginPath(); ctx.moveTo(10, y); ctx.lineTo(290, y); ctx.stroke();
  });
  // Gri harf
  const metin = cizBuyukMu ? buyuk(seciliHarf) : seciliHarf;
  ctx.fillStyle = '#d9d9d9';
  ctx.font = '700 230px Fredoka, "Segoe UI", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(metin, 150, cizBuyukMu ? 160 : 150);
  // Başlangıç noktası ipucu
  ctx.fillStyle = '#7bd389';
  ctx.beginPath(); ctx.arc(70, 50, 7, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#6d5f8f';
  ctx.font = '600 14px Fredoka, "Segoe UI", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('buradan başla', 84, 55);
}
function tuvalKonum(e) {
  const r = tuval.getBoundingClientRect();
  return {
    x: ((e.clientX - r.left) / r.width) * tuval.width,
    y: ((e.clientY - r.top) / r.height) * tuval.height,
  };
}
tuval.addEventListener('pointerdown', (e) => {
  ciziyor = true;
  tuval.setPointerCapture(e.pointerId);
  const p = tuvalKonum(e);
  ctx.strokeStyle = '#ff7b54';
  ctx.lineWidth = 14;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(p.x, p.y);
  ctx.lineTo(p.x + 0.1, p.y + 0.1);
  ctx.stroke();
});
tuval.addEventListener('pointermove', (e) => {
  if (!ciziyor) return;
  const p = tuvalKonum(e);
  ctx.lineTo(p.x, p.y);
  ctx.stroke();
});
['pointerup', 'pointercancel', 'pointerleave'].forEach((ev) =>
  tuval.addEventListener(ev, () => { ciziyor = false; }));

$('#ciz-temizle').addEventListener('click', () => { sesEfekti('tik'); cizSifirla(); });
$('#ciz-buyuk').addEventListener('click', () => {
  cizBuyukMu = true;
  $('#ciz-buyuk').classList.add('secili');
  $('#ciz-kucuk').classList.remove('secili');
  cizSifirla();
});
$('#ciz-kucuk').addEventListener('click', () => {
  cizBuyukMu = false;
  $('#ciz-kucuk').classList.add('secili');
  $('#ciz-buyuk').classList.remove('secili');
  cizSifirla();
});

/* =========================================================
   OYUN ORTAK
   ========================================================= */
const TUR_SAYISI = 10;
let sonTekrar = null;      // "Tekrar oyna" için
let zamanlayicilar = [];   // setInterval / setTimeout temizliği

function zamanla(fn, ms, tekrar = false) {
  const id = tekrar ? setInterval(fn, ms) : setTimeout(fn, ms);
  zamanlayicilar.push({ id, tekrar });
  return id;
}
function oyunuDurdur() {
  zamanlayicilar.forEach(({ id, tekrar }) => (tekrar ? clearInterval(id) : clearTimeout(id)));
  zamanlayicilar = [];
}

function secenekUret(dogru, adet = 4, haric = []) {
  const digerler = karistir(havuz().filter((h) => h !== dogru && !haric.includes(h))).slice(0, adet - 1);
  return karistir([dogru, ...digerler]);
}

function sonucGoster(dogru, toplam, tekrarFn) {
  oyunuDurdur();
  sonTekrar = tekrarFn;
  const oran = dogru / toplam;
  const yildiz = oran >= 0.9 ? 3 : oran >= 0.6 ? 2 : 1;
  yildizEkle(yildiz);
  $('#sonuc-yildiz').textContent = '⭐'.repeat(yildiz) + '☆'.repeat(3 - yildiz);
  $('#sonuc-baslik').textContent = yildiz === 3 ? 'Harikasın! 🎉' : yildiz === 2 ? 'Çok iyi! 👏' : 'Güzel deneme! 💪';
  $('#sonuc-metin').textContent = `${toplam} sorudan ${Math.round(dogru)} tanesini doğru bildin. ${yildiz} yıldız kazandın!`;
  $('#sonuc').classList.remove('gizli');
  sesEfekti('kazan');
  if (yildiz >= 2) konfeti(yildiz === 3 ? 80 : 40);
  konus(yildiz === 3 ? 'Harikasın!' : yildiz === 2 ? 'Çok iyi!' : 'Güzel deneme, tekrar dene!');
}
$('#sonuc-tekrar').addEventListener('click', () => {
  $('#sonuc').classList.add('gizli');
  sesEfekti('tik');
  if (sonTekrar) sonTekrar();
});
$('#sonuc-menu').addEventListener('click', () => {
  $('#sonuc').classList.add('gizli');
  sesEfekti('tik');
  git('oyunlar');
});

function oyunMenuGuncelle() {
  const h = havuz();
  $('#oyun-grup-bilgi').textContent =
    `Oyunlarda ${kayit.grup}. gruba kadar olan ${h.length} harf çıkıyor. (Ayarlardan değiştirebilirsin.)`;
}

/* =========================================================
   OYUN 1: SESİ DİNLE, HARFİ BUL
   ========================================================= */
const sesOyun = { tur: 0, dogru: 0, hedef: 'e', kilit: false };

function sesOyunuBasla() {
  sesOyun.tur = 0; sesOyun.dogru = 0;
  sesTurSonraki();
}
function sesTurSonraki() {
  if (sesOyun.tur >= TUR_SAYISI) { sonucGoster(sesOyun.dogru, TUR_SAYISI, sesOyunuBasla); return; }
  sesOyun.tur++;
  sesOyun.kilit = false;
  sesOyun.hedef = rastgele(havuz());
  $('#ses-tur').textContent = `Soru ${sesOyun.tur} / ${TUR_SAYISI}`;
  $('#ses-puan').textContent = `✅ ${sesOyun.dogru}`;

  const alan = $('#ses-secenekler');
  alan.innerHTML = '';
  const buyukMu = Math.random() < 0.5;
  secenekUret(sesOyun.hedef).forEach((h) => {
    const b = document.createElement('button');
    b.className = 'secenek';
    b.textContent = buyukMu ? buyuk(h) : h;
    b.addEventListener('click', () => sesCevap(b, h));
    alan.appendChild(b);
  });
  zamanla(() => harfSesi(sesOyun.hedef), 400);
}
function sesCevap(buton, h) {
  if (sesOyun.kilit) return;
  if (h === sesOyun.hedef) {
    sesOyun.kilit = true;
    sesOyun.dogru++;
    buton.classList.add('dogru');
    sesEfekti('dogru');
    $('#ses-puan').textContent = `✅ ${sesOyun.dogru}`;
    zamanla(sesTurSonraki, 900);
  } else {
    buton.classList.add('yanlis');
    sesEfekti('yanlis');
    zamanla(() => buton.classList.remove('yanlis'), 500);
  }
}
$('#ses-dinle').addEventListener('click', () => harfSesi(sesOyun.hedef));

/* =========================================================
   OYUN 2: HANGİ HARFLE BAŞLAR?
   ========================================================= */
const resimOyun = { tur: 0, dogru: 0, hedef: 'e', kelime: '', kilit: false };

function resimOyunuBasla() {
  resimOyun.tur = 0; resimOyun.dogru = 0;
  resimTurSonraki();
}
function resimTurSonraki() {
  if (resimOyun.tur >= TUR_SAYISI) { sonucGoster(resimOyun.dogru, TUR_SAYISI, resimOyunuBasla); return; }
  resimOyun.tur++;
  resimOyun.kilit = false;
  const uygun = havuz().filter((h) => h !== 'ğ'); // ğ ile kelime başlamaz
  resimOyun.hedef = rastgele(uygun);
  const [kelime, emoji] = rastgele(KELIMELER[resimOyun.hedef]);
  resimOyun.kelime = kelime;

  $('#resim-tur').textContent = `Soru ${resimOyun.tur} / ${TUR_SAYISI}`;
  $('#resim-puan').textContent = `✅ ${resimOyun.dogru}`;
  $('#resim-emoji').textContent = emoji;
  $('#resim-kelime').innerHTML = '';

  const alan = $('#resim-secenekler');
  alan.innerHTML = '';
  secenekUret(resimOyun.hedef, 4, ['ğ']).forEach((h) => {
    const b = document.createElement('button');
    b.className = 'secenek';
    b.textContent = buyuk(h);
    b.addEventListener('click', () => resimCevap(b, h));
    alan.appendChild(b);
  });
  zamanla(() => konus(kelime), 400);
}
function resimCevap(buton, h) {
  if (resimOyun.kilit) return;
  if (h === resimOyun.hedef) {
    resimOyun.kilit = true;
    resimOyun.dogru++;
    buton.classList.add('dogru');
    sesEfekti('dogru');
    $('#resim-puan').textContent = `✅ ${resimOyun.dogru}`;
    $('#resim-kelime').innerHTML = vurgula(resimOyun.kelime, h);
    zamanla(resimTurSonraki, 1200);
  } else {
    buton.classList.add('yanlis');
    sesEfekti('yanlis');
    zamanla(() => buton.classList.remove('yanlis'), 500);
  }
}
$('#resim-dinle').addEventListener('click', () => konus(resimOyun.kelime));

/* =========================================================
   OYUN 3: BÜYÜK-KÜÇÜK EŞLEŞTİR (hafıza oyunu)
   ========================================================= */
const esOyun = { acik: [], kalan: 0, hamle: 0, kilit: false };

function eslestirBasla() {
  const harfler = karistir(havuz()).slice(0, 6);
  const kartlar = karistir(harfler.flatMap((h) => [
    { h, metin: buyuk(h) },
    { h, metin: h },
  ]));
  esOyun.acik = [];
  esOyun.kalan = harfler.length;
  esOyun.hamle = 0;
  esOyun.kilit = false;
  esBilgi();

  const tahta = $('#es-tahta');
  tahta.innerHTML = '';
  kartlar.forEach((k) => {
    const d = document.createElement('div');
    d.className = 'es-kart';
    d.textContent = k.metin;
    d.dataset.h = k.h;
    d.addEventListener('click', () => esKartAc(d));
    tahta.appendChild(d);
  });
}
function esBilgi() {
  $('#es-hamle').textContent = `Hamle: ${esOyun.hamle}`;
  $('#es-kalan').textContent = `Kalan: ${esOyun.kalan}`;
}
function esKartAc(kart) {
  if (esOyun.kilit || kart.classList.contains('acik') || kart.classList.contains('bulundu')) return;
  kart.classList.add('acik');
  sesEfekti('tik');
  esOyun.acik.push(kart);
  if (esOyun.acik.length < 2) return;

  esOyun.hamle++;
  esOyun.kilit = true;
  const [a, b] = esOyun.acik;
  if (a.dataset.h === b.dataset.h && a.textContent !== b.textContent) {
    zamanla(() => {
      a.classList.add('bulundu'); b.classList.add('bulundu');
      a.classList.remove('acik'); b.classList.remove('acik');
      esOyun.acik = [];
      esOyun.kalan--;
      esOyun.kilit = false;
      sesEfekti('dogru');
      harfSesi(a.dataset.h);
      esBilgi();
      if (esOyun.kalan === 0) {
        // 6 çift için 6 hamle mükemmel; puanı hamleye göre hesapla
        const dogru = esOyun.hamle <= 9 ? 10 : esOyun.hamle <= 14 ? 7 : 4;
        zamanla(() => sonucGoster(dogru, 10, eslestirBasla), 600);
      }
    }, 350);
  } else {
    sesEfekti('yanlis');
    zamanla(() => {
      a.classList.remove('acik'); b.classList.remove('acik');
      esOyun.acik = [];
      esOyun.kilit = false;
      esBilgi();
    }, 800);
  }
  esBilgi();
}

/* =========================================================
   OYUN 4: BALON PATLAT
   ========================================================= */
const balonOyun = { hedef: 'a', puan: 0, sure: 45, calisiyor: false, patlatilan: 0 };
const BALON_RENKLER = ['#ff7b54', '#4ecdc4', '#ffc93c', '#7bd389', '#c77dff', '#ff9ff3', '#54a0ff'];

function balonHazirla() {
  balonOyun.calisiyor = false;
  const alan = $('#balon-alan');
  alan.querySelectorAll('.balon').forEach((b) => b.remove());
  $('#balon-baslat').style.display = '';
  $('#balon-sure').textContent = '⏱ 45';
  $('#balon-puan').textContent = '🎯 0';
  balonOyun.hedef = rastgele(havuz());
  $('#balon-hedef').textContent = `${buyuk(balonOyun.hedef)} ${balonOyun.hedef}`;
}
function balonBasla() {
  balonOyun.puan = 0;
  balonOyun.sure = 45;
  balonOyun.patlatilan = 0;
  balonOyun.calisiyor = true;
  balonOyun.hedef = rastgele(havuz());
  $('#balon-hedef').textContent = `${buyuk(balonOyun.hedef)} ${balonOyun.hedef}`;
  $('#balon-baslat').style.display = 'none';
  $('#balon-puan').textContent = '🎯 0';
  $('#balon-sure').textContent = '⏱ 45';
  konus(balonOyun.hedef === 'ğ' ? 'yumuşak ge balonlarını patlat' : balonOyun.hedef + ' balonlarını patlat');

  zamanla(balonUret, 900, true);
  zamanla(() => {
    balonOyun.sure--;
    $('#balon-sure').textContent = '⏱ ' + balonOyun.sure;
    if (balonOyun.sure <= 0) balonBitir();
  }, 1000, true);
}
function balonUret() {
  if (!balonOyun.calisiyor) return;
  const alan = $('#balon-alan');
  const hedefMi = Math.random() < 0.4;
  const h = hedefMi ? balonOyun.hedef : rastgele(havuz().filter((x) => x !== balonOyun.hedef));
  const b = document.createElement('div');
  b.className = 'balon';
  b.dataset.h = h;
  b.textContent = Math.random() < 0.5 ? buyuk(h) : h;
  b.style.left = 4 + Math.random() * 68 + '%';
  b.style.background = rastgele(BALON_RENKLER);
  b.style.animationDuration = 5 + Math.random() * 3 + 's';
  b.addEventListener('pointerdown', () => balonTikla(b));
  b.addEventListener('animationend', (e) => { if (e.animationName === 'yuksel') b.remove(); });
  alan.appendChild(b);
}
function balonTikla(b) {
  if (!balonOyun.calisiyor || b.classList.contains('pat')) return;
  if (b.dataset.h === balonOyun.hedef) {
    balonOyun.puan++;
    balonOyun.patlatilan++;
    $('#balon-puan').textContent = '🎯 ' + balonOyun.puan;
    sesEfekti('pat');
    b.classList.add('pat');
    zamanla(() => b.remove(), 260);
    // Her 5 doğru balonda hedef harf değişsin
    if (balonOyun.patlatilan % 5 === 0) {
      balonOyun.hedef = rastgele(havuz().filter((x) => x !== balonOyun.hedef));
      $('#balon-hedef').textContent = `${buyuk(balonOyun.hedef)} ${balonOyun.hedef}`;
      harfSesi(balonOyun.hedef);
    }
  } else {
    sesEfekti('yanlis');
    b.classList.add('yanlis');
    zamanla(() => b.classList.remove('yanlis'), 320);
  }
}
function balonBitir() {
  balonOyun.calisiyor = false;
  oyunuDurdur();
  $('#balon-alan').querySelectorAll('.balon').forEach((b) => b.remove());
  // 12+ balon = 3 yıldız, 7+ = 2 yıldız
  const dogru = balonOyun.puan >= 12 ? 10 : balonOyun.puan >= 7 ? 7 : 4;
  sonucGoster(dogru, 10, () => { balonHazirla(); balonBasla(); });
  $('#sonuc-metin').textContent = `${balonOyun.puan} balon patlattın!`;
}
$('#balon-baslat').addEventListener('click', () => { sesEfekti('tik'); balonBasla(); });

/* =========================================================
   KELİME OYUNLARI ORTAK: gruba uygun kelimeler
   ========================================================= */
function uygunKelimeler(enAz = 2) {
  const h = havuz();
  const uygun = KELIME_LISTESI.filter(([k]) => k.length >= enAz && [...k].every((x) => h.includes(x)));
  return uygun.length >= 4 ? uygun : KELIME_LISTESI.filter(([k]) => k.length >= enAz);
}
/* Aynı kelime art arda gelmesin diye karıştırılmış sıra */
function kelimeSirasi(enAz) {
  const liste = karistir(uygunKelimeler(enAz));
  const sira = [];
  while (sira.length < TUR_SAYISI) sira.push(...karistir(liste));
  return sira.slice(0, TUR_SAYISI);
}

/* =========================================================
   OYUN 5: KELİME KUR
   ========================================================= */
const kelimeOyun = { tur: 0, dogru: 0, kelime: '', konum: 0, hata: 0, sira: [], kilit: false };

function kelimeOyunuBasla() {
  kelimeOyun.tur = 0; kelimeOyun.dogru = 0;
  kelimeOyun.sira = kelimeSirasi(2);
  kelimeTurSonraki();
}
function kelimeTurSonraki() {
  if (kelimeOyun.tur >= TUR_SAYISI) { sonucGoster(kelimeOyun.dogru, TUR_SAYISI, kelimeOyunuBasla); return; }
  const [kelime, emoji] = kelimeOyun.sira[kelimeOyun.tur];
  kelimeOyun.tur++;
  kelimeOyun.kelime = kelime;
  kelimeOyun.konum = 0;
  kelimeOyun.hata = 0;
  kelimeOyun.kilit = false;

  $('#kelime-tur').textContent = `Soru ${kelimeOyun.tur} / ${TUR_SAYISI}`;
  $('#kelime-puan').textContent = `✅ ${Math.round(kelimeOyun.dogru)}`;
  $('#kelime-emoji').textContent = emoji;

  const slotlar = $('#kelime-slotlar');
  slotlar.innerHTML = '';
  [...kelime].forEach(() => {
    const s = document.createElement('div');
    s.className = 'slot';
    slotlar.appendChild(s);
  });

  // Taşlar: kelimenin harfleri + (3 harften uzunsa) 1 şaşırtıcı harf
  const harfler = [...kelime];
  if (kelime.length >= 3) {
    const digerler = havuz().filter((h) => !harfler.includes(h));
    if (digerler.length) harfler.push(rastgele(digerler));
  }
  const tasler = $('#kelime-tasler');
  tasler.innerHTML = '';
  karistir(harfler).forEach((h) => {
    const b = document.createElement('button');
    b.className = 'tas';
    b.textContent = h;
    b.addEventListener('click', () => kelimeTas(b, h));
    tasler.appendChild(b);
  });
  zamanla(() => konus(kelime), 400);
}
function kelimeTas(buton, h) {
  if (kelimeOyun.kilit || buton.classList.contains('kullanildi')) return;
  const beklenen = kelimeOyun.kelime[kelimeOyun.konum];
  if (h === beklenen) {
    buton.classList.add('kullanildi');
    const slot = $('#kelime-slotlar').children[kelimeOyun.konum];
    slot.textContent = h;
    slot.classList.add('dolu');
    kelimeOyun.konum++;
    sesEfekti('tik');
    if (kelimeOyun.konum === kelimeOyun.kelime.length) {
      kelimeOyun.kilit = true;
      kelimeOyun.dogru += kelimeOyun.hata === 0 ? 1 : 0.5;
      $('#kelime-puan').textContent = `✅ ${Math.round(kelimeOyun.dogru)}`;
      sesEfekti('dogru');
      zamanla(() => konus(kelimeOyun.kelime), 300);
      zamanla(kelimeTurSonraki, 1500);
    }
  } else {
    kelimeOyun.hata++;
    buton.classList.add('yanlis');
    sesEfekti('yanlis');
    zamanla(() => buton.classList.remove('yanlis'), 500);
  }
}
$('#kelime-dinle').addEventListener('click', () => konus(kelimeOyun.kelime));

/* =========================================================
   OYUN 6: EKSİK HARF
   ========================================================= */
const eksikOyun = { tur: 0, dogru: 0, kelime: '', konum: 0, sira: [], kilit: false };

function eksikOyunuBasla() {
  eksikOyun.tur = 0; eksikOyun.dogru = 0;
  eksikOyun.sira = kelimeSirasi(3);
  eksikTurSonraki();
}
function eksikKelimeYaz(gosterHarf) {
  const k = eksikOyun.kelime;
  const i = eksikOyun.konum;
  const orta = gosterHarf ? `<span class="bosluk">${k[i]}</span>` : '<span class="bosluk">_</span>';
  $('#eksik-kelime').innerHTML = k.slice(0, i) + orta + k.slice(i + 1);
}
function eksikTurSonraki() {
  if (eksikOyun.tur >= TUR_SAYISI) { sonucGoster(eksikOyun.dogru, TUR_SAYISI, eksikOyunuBasla); return; }
  const [kelime, emoji] = eksikOyun.sira[eksikOyun.tur];
  eksikOyun.tur++;
  eksikOyun.kelime = kelime;
  eksikOyun.konum = Math.floor(Math.random() * kelime.length);
  eksikOyun.kilit = false;

  $('#eksik-tur').textContent = `Soru ${eksikOyun.tur} / ${TUR_SAYISI}`;
  $('#eksik-puan').textContent = `✅ ${eksikOyun.dogru}`;
  $('#eksik-emoji').textContent = emoji;
  eksikKelimeYaz(false);

  const dogruHarf = kelime[eksikOyun.konum];
  const alan = $('#eksik-secenekler');
  alan.innerHTML = '';
  // Kelimede geçen diğer harfler şaşırtıcı olmasın
  secenekUret(dogruHarf, 4, [...kelime]).forEach((h) => {
    const b = document.createElement('button');
    b.className = 'secenek';
    b.textContent = h;
    b.addEventListener('click', () => eksikCevap(b, h));
    alan.appendChild(b);
  });
  zamanla(() => konus(kelime), 400);
}
function eksikCevap(buton, h) {
  if (eksikOyun.kilit) return;
  if (h === eksikOyun.kelime[eksikOyun.konum]) {
    eksikOyun.kilit = true;
    eksikOyun.dogru++;
    buton.classList.add('dogru');
    sesEfekti('dogru');
    eksikKelimeYaz(true);
    $('#eksik-puan').textContent = `✅ ${eksikOyun.dogru}`;
    zamanla(() => konus(eksikOyun.kelime), 300);
    zamanla(eksikTurSonraki, 1400);
  } else {
    buton.classList.add('yanlis');
    sesEfekti('yanlis');
    zamanla(() => buton.classList.remove('yanlis'), 500);
  }
}
$('#eksik-dinle').addEventListener('click', () => konus(eksikOyun.kelime));

/* =========================================================
   OYUN 7: HARF AVI (5x5 tabloda hedef harfleri bul)
   ========================================================= */
const AV_TUR = 5;
const avOyun = { tur: 0, puan: 0, hedef: 'a', kalan: 0, hata: 0, kilit: false };

function avOyunuBasla() {
  avOyun.tur = 0; avOyun.puan = 0;
  avTurSonraki();
}
function avTurSonraki() {
  if (avOyun.tur >= AV_TUR) { sonucGoster(avOyun.puan, AV_TUR * 2, avOyunuBasla); return; }
  avOyun.tur++;
  avOyun.hata = 0;
  avOyun.kilit = false;
  avOyun.hedef = rastgele(havuz());
  const adet = 4 + Math.floor(Math.random() * 3); // 4-6 hedef
  avOyun.kalan = adet;

  $('#av-hedef').textContent = `${buyuk(avOyun.hedef)} ${avOyun.hedef}`;
  $('#av-tur').textContent = `Tur ${avOyun.tur} / ${AV_TUR}`;
  $('#av-kalan').textContent = `Kalan: ${adet}`;

  const digerler = havuz().filter((h) => h !== avOyun.hedef);
  const hucreler = [];
  for (let i = 0; i < 25; i++) hucreler.push(i < adet ? avOyun.hedef : rastgele(digerler));
  const izgara = $('#av-izgara');
  izgara.innerHTML = '';
  karistir(hucreler).forEach((h) => {
    const b = document.createElement('button');
    b.className = 'av-hucre';
    b.textContent = Math.random() < 0.5 ? buyuk(h) : h;
    b.addEventListener('click', () => avHucre(b, h));
    izgara.appendChild(b);
  });
  zamanla(() => harfSesi(avOyun.hedef), 400);
}
function avHucre(buton, h) {
  if (avOyun.kilit || buton.classList.contains('bulundu')) return;
  if (h === avOyun.hedef) {
    buton.classList.add('bulundu');
    sesEfekti('tik');
    avOyun.kalan--;
    $('#av-kalan').textContent = `Kalan: ${avOyun.kalan}`;
    if (avOyun.kalan === 0) {
      avOyun.kilit = true;
      avOyun.puan += avOyun.hata === 0 ? 2 : avOyun.hata <= 2 ? 1 : 0;
      sesEfekti('dogru');
      zamanla(avTurSonraki, 1000);
    }
  } else {
    avOyun.hata++;
    buton.classList.add('yanlis');
    sesEfekti('yanlis');
    zamanla(() => buton.classList.remove('yanlis'), 500);
  }
}

/* =========================================================
   OYUN 8: FARKLI OLANI BUL (3x3, biri farklı)
   ========================================================= */
const farkliOyun = { tur: 0, dogru: 0, kilit: false };

function farkliOyunuBasla() {
  farkliOyun.tur = 0; farkliOyun.dogru = 0;
  farkliTurSonraki();
}
function farkliTurSonraki() {
  if (farkliOyun.tur >= TUR_SAYISI) { sonucGoster(farkliOyun.dogru, TUR_SAYISI, farkliOyunuBasla); return; }
  farkliOyun.tur++;
  farkliOyun.kilit = false;
  $('#farkli-tur').textContent = `Soru ${farkliOyun.tur} / ${TUR_SAYISI}`;
  $('#farkli-puan').textContent = `✅ ${farkliOyun.dogru}`;

  const h = havuz();
  const temel = rastgele(h);
  const benzerler = (BENZER[temel] || []).filter((x) => h.includes(x));
  const farkli = benzerler.length && Math.random() < 0.75
    ? rastgele(benzerler)
    : rastgele(h.filter((x) => x !== temel));
  const buyukMu = Math.random() < 0.4;
  const farkliIndeks = Math.floor(Math.random() * 9);

  const izgara = $('#farkli-izgara');
  izgara.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    const harf = i === farkliIndeks ? farkli : temel;
    const b = document.createElement('button');
    b.className = 'farkli-hucre';
    b.textContent = buyukMu ? buyuk(harf) : harf;
    b.addEventListener('click', () => farkliCevap(b, i === farkliIndeks, farkli));
    izgara.appendChild(b);
  }
}
function farkliCevap(buton, dogruMu, farkli) {
  if (farkliOyun.kilit) return;
  if (dogruMu) {
    farkliOyun.kilit = true;
    farkliOyun.dogru++;
    buton.classList.add('dogru');
    sesEfekti('dogru');
    harfSesi(farkli);
    $('#farkli-puan').textContent = `✅ ${farkliOyun.dogru}`;
    zamanla(farkliTurSonraki, 1000);
  } else {
    buton.classList.add('yanlis');
    sesEfekti('yanlis');
    zamanla(() => buton.classList.remove('yanlis'), 500);
  }
}

/* =========================================================
   AYARLAR
   ========================================================= */
function ayarlariDoldur() {
  $('#ayar-isim').value = kayit.isim;
  $('#ayar-grup').value = String(kayit.grup);
  sesDurumuYaz();
}
function sesDurumuYaz() {
  const alan = $('#ayar-ses-durumu');
  if (!alan) return;
  if (!('speechSynthesis' in window)) {
    alan.textContent = '⚠️ Bu tarayıcı sesli okuma desteklemiyor. Chrome veya Edge kullanın.';
    return;
  }
  const v = turkceSes();
  alan.textContent = v
    ? `✅ Türkçe ses hazır: ${v.name}`
    : '⚠️ Türkçe ses bulunamadı. Windows Ayarlar → Zaman ve Dil → Dil → Türkçe dil paketini (konuşma ile) yükleyin.';
}
if ('speechSynthesis' in window) speechSynthesis.addEventListener('voiceschanged', sesDurumuYaz);
$('#ayar-kaydet').addEventListener('click', () => {
  kayit.isim = $('#ayar-isim').value.trim();
  kayit.grup = Number($('#ayar-grup').value) || 5;
  kaydet();
  sesEfekti('dogru');
  git('menu');
});
$('#ayar-sifirla').addEventListener('click', () => {
  if (!confirm('Tüm yıldızlar ve öğrenilen harfler silinecek. Emin misin?')) return;
  kayit = { ...VARSAYILAN, isim: kayit.isim, grup: kayit.grup, ogrenilen: {} };
  kaydet();
  git('menu');
});

/* =========================================================
   BAŞLAT
   ========================================================= */
document.addEventListener('pointerdown', () => sesBaglam(), { once: true });
git('menu');
