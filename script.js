/* =====================================================================
   ✏️  EDIT YOUR DETAILS HERE — everything on the site updates from this
   ===================================================================== */
const CONFIG = {
  groom: { ar: "محمد", en: "Mohamed" },
  bride: { ar: "ريم", en: "Reem" },

  wedding: {
    start: "2026-12-27T18:00:00+02:00",             // 27/12/2026 — 6 PM Cairo time
    end:   "2026-12-27T23:00:00+02:00",
    mapUrl: "https://maps.google.com/maps?rlz=1C5OZZY_enUS1214US1214&fvr=1&pvq=OiUweDE0ZjdiYTIzOWEzMmQ4Zjc6MHgxZGJmY2M2ODMxZDAxN2Fi&vet=10CAAQoqAOahgKEwioybKlvICYAxUAAAAAHQAAAAAQsAI..i&cs=0&um=1&ie=UTF-8&fb=1&gl=us&sa=X&ftid=0x14f7ba239a32d8f7:0x1dbfcc6831d017ab",
    mapEmbedQuery: "Wady El Amar Venue, Al Mahalla Al Kobra Tanta Road, Egypt",
  },

  katb: {
    date: "2026-12-18",                              // ⚠️ you wrote 18/12/2027 — please confirm
    time: null,                                      // e.g. "2026-12-18T19:00:00+02:00"
    place: null,                                     // e.g. { ar: "مسجد ...", en: "... Mosque" }
  },

  whatsapp: "",      // e.g. "201001234567" (country code, no +). Leave empty to hide RSVP section
  music: "",         // e.g. "music/song.mp3" — leave empty to hide the music button
  hashtag: "",       // e.g. "#Mohamed_and_Sara"
};

/* =====================================================================
   Translations
   ===================================================================== */
const T = {
  ar: {
    bismillah: "بسم الله الرحمن الرحيم",
    cardKicker: "دعوة زفاف",
    cardInvite: "يتشرفان بدعوتكم لمشاركتهما فرحة العمر",
    tapToOpen: "اضغط لفتح الدعوة",
    heroKicker: "بكل الحب والسعادة ندعوكم لحضور حفل زفاف",
    verse: "﴿ وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ﴾",
    verseRef: "سورة الروم — الآية ٢١",
    countdownTitle: "العد التنازلي ليومنا المميز",
    days: "يوم", hours: "ساعة", minutes: "دقيقة", seconds: "ثانية",
    married: "تم الزفاف بحمد الله ♡ شكراً لمشاركتكم فرحتنا",
    eventsTitle: "تفاصيل المناسبات",
    katbTitle: "كتب الكتاب",
    weddingTitle: "حفل الزفاف",
    dateLabel: "التاريخ", timeLabel: "الموعد", placeLabel: "المكان",
    tba: "سيتم الإعلان قريباً",
    addGoogle: "أضف إلى تقويم Google",
    addApple: "أضف إلى التقويم (iPhone)",
    venueTitle: "مكان الحفل",
    venueName: "قاعة وادي القمر",
    venueAddress: "طريق المحلة الكبرى - طنطا",
    openMap: "افتح الموقع على خرائط Google",
    rsvpTitle: "تأكيد الحضور",
    rsvpSub: "يسعدنا تأكيد حضوركم قبل ٢٠ ديسمبر",
    rsvpName: "الاسم بالكامل", rsvpCount: "عدد الأفراد", rsvpMsg: "رسالة للعروسين (اختياري)",
    rsvpYes: "سأحضر بإذن الله", rsvpNo: "أعتذر عن الحضور", rsvpSend: "إرسال عبر واتساب",
    footerText: "حضوركم يكمل فرحتنا",
    share: "مشاركة الدعوة",
    copied: "تم نسخ رابط الدعوة",
    calTitle: "حفل زفاف",
  },
  en: {
    bismillah: "In the name of Allah, the Most Gracious, the Most Merciful",
    cardKicker: "Wedding Invitation",
    cardInvite: "request the pleasure of your company to celebrate their wedding",
    tapToOpen: "Tap to open",
    heroKicker: "Together with their families, invite you to celebrate the wedding of",
    verse: "“And among His signs is that He created for you spouses from among yourselves so that you may find tranquility in them, and He placed between you affection and mercy.”",
    verseRef: "Surah Ar-Rum — 30:21",
    countdownTitle: "Counting Down to Our Day",
    days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds",
    married: "Happily married ♡ Thank you for celebrating with us",
    eventsTitle: "Celebrations",
    katbTitle: "Katb El Ketab",
    weddingTitle: "Wedding Party",
    dateLabel: "Date", timeLabel: "Time", placeLabel: "Venue",
    tba: "To be announced",
    addGoogle: "Add to Google Calendar",
    addApple: "Add to Calendar (iPhone)",
    venueTitle: "The Venue",
    venueName: "Wady El Amar Venue",
    venueAddress: "Al Mahalla Al Kobra - Tanta Road",
    openMap: "Open in Google Maps",
    rsvpTitle: "RSVP",
    rsvpSub: "Kindly confirm your attendance before December 20",
    rsvpName: "Full name", rsvpCount: "Number of guests", rsvpMsg: "A message for the couple (optional)",
    rsvpYes: "Joyfully attend", rsvpNo: "Regretfully decline", rsvpSend: "Send via WhatsApp",
    footerText: "Your presence will complete our joy",
    share: "Share invitation",
    copied: "Invitation link copied",
    calTitle: "Wedding of",
  },
};

/* =====================================================================
   Helpers
   ===================================================================== */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const TZ = "Africa/Cairo";
let lang = new URLSearchParams(location.search).get("lang") || localStorage.getItem("lang") || "ar";
if (!T[lang]) lang = "ar";

const locale = () => (lang === "ar" ? "ar-EG" : "en-GB");
const asDate = (s) => new Date(s.length === 10 ? s + "T12:00:00+02:00" : s);
const fmt = (s, opts) => new Intl.DateTimeFormat(locale(), { timeZone: TZ, ...opts }).format(asDate(s));
const longDate = (s) => fmt(s, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
const shortDate = (s) => {
  const d = asDate(s);
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: TZ, day: "2-digit", month: "2-digit", year: "numeric" }).formatToParts(d);
  const get = (t) => parts.find((p) => p.type === t).value;
  return `${get("day")} . ${get("month")} . ${get("year")}`;
};
const timeOf = (s) => fmt(s, { hour: "numeric", minute: "2-digit", hour12: true });
const coupleNames = () => `${CONFIG.groom[lang]} & ${CONFIG.bride[lang]}`;

/* =====================================================================
   Render (language-dependent content)
   ===================================================================== */
function render() {
  const t = T[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $("#langBtn").textContent = lang === "ar" ? "EN" : "ع";

  $$("[data-i18n]").forEach((el) => (el.textContent = t[el.dataset.i18n] ?? ""));
  $$("[data-i18n-ph]").forEach((el) => (el.placeholder = t[el.dataset.i18nPh] ?? ""));
  $$("[data-name]").forEach((el) => (el.textContent = CONFIG[el.dataset.name][lang]));

  const dates = {
    weddingShort: shortDate(CONFIG.wedding.start),
    weddingLong: longDate(CONFIG.wedding.start),
    weddingTime: timeOf(CONFIG.wedding.start),
    katbLong: longDate(CONFIG.katb.date),
  };
  $$("[data-date]").forEach((el) => (el.textContent = dates[el.dataset.date]));

  const tba = `<span class="tba">${t.tba}</span>`;
  $("#katbTime").innerHTML = CONFIG.katb.time ? timeOf(CONFIG.katb.time) : tba;
  $("#katbPlace").innerHTML = CONFIG.katb.place ? CONFIG.katb.place[lang] : tba;

  const initials = `${CONFIG.groom.en[0]}&${CONFIG.bride.en[0]}`;
  $("#monoLetters").textContent = initials;
  $("#archLetters").textContent = initials;

  document.title = `${coupleNames()} | ${t.cardKicker}`;
  setupCalendar();
}

/* =====================================================================
   Countdown
   ===================================================================== */
function tick() {
  const diff = asDate(CONFIG.wedding.start) - Date.now();
  if (diff <= 0) {
    $("#countdownBox").classList.add("hidden");
    $("#cdDone").classList.remove("hidden");
    return;
  }
  const n = (v) => new Intl.NumberFormat(locale()).format(v);
  $("#cdDays").textContent = n(Math.floor(diff / 864e5));
  $("#cdHours").textContent = n(Math.floor((diff / 36e5) % 24));
  $("#cdMins").textContent = n(Math.floor((diff / 6e4) % 60));
  $("#cdSecs").textContent = n(Math.floor((diff / 1e3) % 60));
}

/* =====================================================================
   Calendar (Google + .ics for iPhone/Outlook)
   ===================================================================== */
const icsStamp = (s) => asDate(s).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
function setupCalendar() {
  const t = T[lang];
  const title = `${t.calTitle} ${coupleNames()}`;
  const loc = `${t.venueName} - ${t.venueAddress}`;
  const details = `${t.venueName}\n${CONFIG.wedding.mapUrl}`;
  const url = new URL("https://calendar.google.com/calendar/render");
  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", title);
  url.searchParams.set("dates", `${icsStamp(CONFIG.wedding.start)}/${icsStamp(CONFIG.wedding.end)}`);
  url.searchParams.set("location", loc);
  url.searchParams.set("details", details);
  $("#gcalBtn").href = url.toString();

  $("#icsBtn").onclick = () => {
    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Wedding//EN", "BEGIN:VEVENT",
      `UID:wedding-${icsStamp(CONFIG.wedding.start)}@invite`,
      `DTSTAMP:${icsStamp(new Date().toISOString())}`,
      `DTSTART:${icsStamp(CONFIG.wedding.start)}`,
      `DTEND:${icsStamp(CONFIG.wedding.end)}`,
      `SUMMARY:${title}`, `LOCATION:${loc}`,
      `DESCRIPTION:${details.replace(/\n/g, "\\n")}`,
      "BEGIN:VALARM", "TRIGGER:-P1D", "ACTION:DISPLAY", `DESCRIPTION:${title}`, "END:VALARM",
      "END:VEVENT", "END:VCALENDAR",
    ].join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
    a.download = "wedding.ics";
    a.click();
  };
}

/* =====================================================================
   Intro card → open the website
   ===================================================================== */
function openInvitation() {
  const intro = $("#intro");
  if (intro.classList.contains("opening")) return;
  intro.classList.add("opening");
  burst();
  const music = $("#bgMusic");
  if (CONFIG.music) music.play().then(() => $("#musicBtn").classList.add("playing")).catch(() => {});
  setTimeout(() => {
    document.body.classList.remove("locked");
    $("#site").classList.add("visible");
    $("#site").setAttribute("aria-hidden", "false");
    window.scrollTo(0, 0);
  }, 700);
  setTimeout(() => intro.classList.add("gone"), 1900);
}

/* =====================================================================
   Gold sparkles canvas
   ===================================================================== */
const canvas = $("#sparkles");
const ctx = canvas.getContext("2d");
let particles = [];
function resize() { canvas.width = innerWidth * devicePixelRatio; canvas.height = innerHeight * devicePixelRatio; }
function makeParticle(x, y, burstMode) {
  const a = Math.random() * Math.PI * 2, sp = burstMode ? 2 + Math.random() * 6 : 0.15 + Math.random() * 0.35;
  return {
    x: x ?? Math.random() * canvas.width, y: y ?? Math.random() * canvas.height,
    vx: Math.cos(a) * sp * devicePixelRatio, vy: (burstMode ? Math.sin(a) * sp : -sp) * devicePixelRatio,
    r: (Math.random() * 1.8 + 0.6) * devicePixelRatio, life: burstMode ? 90 : Infinity,
    tw: Math.random() * Math.PI * 2,
  };
}
function burst() {
  const cx = canvas.width / 2, cy = canvas.height / 2;
  for (let i = 0; i < 120; i++) particles.push(makeParticle(cx, cy, true));
}
function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter((p) => p.life > 0);
  for (const p of particles) {
    p.x += p.vx; p.y += p.vy; p.tw += 0.05;
    if (p.life !== Infinity) { p.life--; p.vx *= 0.97; p.vy = p.vy * 0.97 + 0.03; }
    if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
    const alpha = (p.life === Infinity ? 0.35 + Math.sin(p.tw) * 0.3 : p.life / 90);
    ctx.beginPath();
    const rgb = theme() === "light" ? "176, 136, 64" : "232, 200, 130";
    ctx.fillStyle = `rgba(${rgb}, ${Math.max(alpha, 0)})`;
    ctx.shadowColor = `rgba(${rgb}, .8)`; ctx.shadowBlur = 8;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
  }
  requestAnimationFrame(loop);
}

/* =====================================================================
   Light / dark appearance
   ===================================================================== */
const ICONS = {
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>',
};
const theme = () => document.documentElement.dataset.theme || "dark";
function applyTheme(t) {
  document.documentElement.dataset.theme = t;
  localStorage.setItem("theme", t);
  // show the icon of the mode you'll switch TO
  $("#themeBtn").innerHTML = t === "dark" ? ICONS.sun : ICONS.moon;
  document.querySelector('meta[name="theme-color"]').content = t === "dark" ? "#0e1522" : "#fbf7ee";
}
function toggleTheme() {
  const next = theme() === "dark" ? "light" : "dark";
  if (document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.startViewTransition(() => applyTheme(next));   // smooth cross-fade of the whole page
  } else {
    document.body.classList.add("switching");
    setTimeout(() => { applyTheme(next); requestAnimationFrame(() => document.body.classList.remove("switching")); }, 380);
  }
}

/* =====================================================================
   Smooth language switch: fade out → swap text/direction → keep the
   guest at the same section → fade back in
   ===================================================================== */
let switching = false;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
async function switchLanguage() {
  if (switching) return;
  switching = true;

  // Remember which section is on screen so we can return to it after the layout changes
  const sections = [...$$("#site > *")];
  const anchor = sections.find((el) => el.getBoundingClientRect().bottom > innerHeight * 0.35) || sections[0];
  const before = anchor.getBoundingClientRect().top;

  $("#langBtn").classList.add("flip");
  document.body.classList.add("switching");
  await wait(380);

  lang = lang === "ar" ? "en" : "ar";
  localStorage.setItem("lang", lang);
  render(); tick();
  try { await Promise.race([document.fonts.ready, wait(400)]); } catch {}

  if (document.body.classList.contains("locked") === false) {
    const after = anchor.getBoundingClientRect().top;
    window.scrollBy({ top: after - before, behavior: "instant" });
  }

  requestAnimationFrame(() => {
    document.body.classList.remove("switching");
    $("#langBtn").classList.remove("flip");
    setTimeout(() => (switching = false), 450);
  });
}

/* =====================================================================
   Init
   ===================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  render();
  tick(); setInterval(tick, 1000);

  // Intro
  const intro = $("#intro");
  intro.addEventListener("click", openInvitation);
  intro.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && openInvitation());

  // Language
  // Preload both languages' fonts so switching never flashes unstyled text
  ['400 1em "Amiri"', '700 1em "Amiri"', '400 1em "Aref Ruqaa"', '400 1em "Great Vibes"',
   '400 1em "Cormorant Garamond"', 'italic 400 1em "Cormorant Garamond"', '600 1em "Cormorant Garamond"']
    .forEach((f) => document.fonts?.load(f).catch(() => {}));

  applyTheme(theme());
  $("#themeBtn").addEventListener("click", (e) => { e.stopPropagation(); toggleTheme(); });

  $("#langBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    switchLanguage();
  });

  // Photo fallback
  const photo = $("#couplePhoto");
  photo.alt = coupleNames();
  photo.addEventListener("error", () => { photo.remove(); $("#archFallback").classList.add("show"); });

  // Map
  $("#mapBtn").href = CONFIG.wedding.mapUrl;
  $("#mapFrame").src = `https://maps.google.com/maps?q=${encodeURIComponent(CONFIG.wedding.mapEmbedQuery)}&z=14&output=embed`;

  // Music
  if (CONFIG.music) {
    const music = $("#bgMusic");
    music.src = CONFIG.music;
    const btn = $("#musicBtn");
    btn.classList.remove("hidden");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (music.paused) { music.play(); btn.classList.add("playing"); }
      else { music.pause(); btn.classList.remove("playing"); }
    });
  }

  // Hashtag
  if (CONFIG.hashtag) $("#hashtag").textContent = CONFIG.hashtag; else $("#hashtag").remove();

  // RSVP via WhatsApp
  if (CONFIG.whatsapp) {
    $("#rsvp").classList.remove("hidden");
    $("#rsvpForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const t = T[lang];
      const attending = document.querySelector('input[name="attend"]:checked').value === "yes";
      const lines = [
        `💍 ${t.rsvpTitle} — ${coupleNames()}`,
        `${t.rsvpName}: ${$("#rsvpName").value}`,
        attending ? `✅ ${t.rsvpYes}` : `❌ ${t.rsvpNo}`,
        attending ? `${t.rsvpCount}: ${$("#rsvpCount").value}` : "",
        $("#rsvpMsg").value ? `💌 ${$("#rsvpMsg").value}` : "",
      ].filter(Boolean);
      window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
    });
  }

  // Share
  $("#shareBtn").addEventListener("click", async () => {
    const data = { title: document.title, text: `${T[lang].cardKicker} — ${coupleNames()}`, url: location.href };
    if (navigator.share) { try { await navigator.share(data); } catch {} return; }
    await navigator.clipboard?.writeText(location.href);
    const toast = $("#toast");
    toast.textContent = T[lang].copied;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2200);
  });

  // Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.15 });
  $$(".reveal").forEach((el) => io.observe(el));

  // Sparkles
  resize(); addEventListener("resize", resize);
  for (let i = 0; i < 45; i++) particles.push(makeParticle());
  loop();
});
