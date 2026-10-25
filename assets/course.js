// מפת הקורס "מדעי החקלאות". כל היחידות פתוחות תמיד: אין חסימה בין יחידות.
// יחידה חדשה: מוסיפים שורה עם url (נתיב מתיקיית האתר הראשית). בלי url = "בקרוב".
const COURSE = [
  { n: 1, t: 'הרכב המזון: התזונאי של הרפת', d: 'אבות המזון והזנת בקר. 7 תחנות, סימולטור בליל ודו״ח סיום.', url: 'unit1-rechivei-hamazon/index.html', icon: '🐄' },
  { n: 2, t: 'מערכת העיכול: מסע המזון', d: 'מבנה ותפקוד של מערכת העיכול באדם, בעוף ובפרה. מצגת, סימולציה ותרגול.', url: 'unit2-digestion/index.html', icon: '🌾' },
  { n: 3, t: 'סוגי מזונות ומנת המזון', d: 'מזון גס ומרוכז, תחמיץ, שחת וקש, חומר יבש, הזנת פטמים ומטילות, אנרגיה ומחלות תזונתיות.', url: 'unit3-feeds/index.html', icon: '🌽' },
  { n: 4, t: 'חלב: מהעטין למכון החליבה', d: 'העטין, הרכב החלב ואיכותו, פסטור, מכון החליבה, קולוסטרום ועגלים.', icon: '🥛' }
];
// base: '' בדף הבית, '../' בתוך תיקיית יחידה
function renderCourse(el, cur, base = '') {
  base = 'https://hagit2303.github.io/haklaut/'; // עותק עצמאי: כל הקישורים לאתר הקורס
  el.innerHTML = `<a class="stop" href="${base}index.html?v=202610252319" style="text-decoration:none">🏠 דף הבית</a>` + COURSE.map(u => {
    const tag = `<span class="eartag"><span>${u.n}</span></span>`;
    if (u.n === cur) return `<span class="stop cur" aria-current="page">${tag}${u.t}</span>`;
    return u.url ? `<a class="stop done" href="${base}${u.url}?v=202610252319" style="text-decoration:none">${tag}${u.t}</a>` : `<span class="stop" style="opacity:.5">${tag}${u.t} · בקרוב</span>`;
  }).join('');
}
