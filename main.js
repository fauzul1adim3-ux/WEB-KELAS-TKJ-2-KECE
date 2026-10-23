/* ── STUDENTS DATA ─────────────────────────────────── */
/* FORMAT SOSIAL MEDIA:
   wa  : "628xxxxxxxxxx"  → nomor WA (tanpa + , mulai 62)
   ig  : "username"       → username Instagram (tanpa @)
   tt  : "username"       → username TikTok   (tanpa @)
   Isi "" jika tidak ada / belum diisi */
const students=[
    {name:"A. Agil Agustiana",   role:"Student",  num:"01",hobby:"Gamer",    dream:"Engineering",        photo:"AGIL.jpeg",  tags:["PROGRAMMER","ENGGINERING"],      wa:"6285213938037",  ig:"syaagielz",    tt:"callme_gilll"},
  {name:"Siti Rahma",     role:"Vice President",   num:"02",hobby:"Reading",     dream:"Doctor",          photo:"https://randomuser.me/api/portraits/women/44.jpg", tags:["Academic","Kind"],      wa:"6281234560002",ig:"siti.rahma",      tt:"sitirahma"},
  {name:"Annisa Nur Novianti",   role:"Secretary", num:"03", hobby:"Photography", dream:"Journalist",      photo:"ANNISA.jpg",  tags:["Creative","Media"],     wa:"6285782705453",  ig:"annisanvanti_",    tt:"annisanvnti_"},
  {name:"Dewi Lestari",   role:"Treasurer",        num:"04",hobby:"Cooking",     dream:"Chef",            photo:"https://randomuser.me/api/portraits/women/33.jpg", tags:["Organized","Culinary"], wa:"6281234560004",ig:"dewi.lestari",    tt:"dewilestari"},
  {name:"Rizky Firmansyah",role:"Student",         num:"05",hobby:"Gaming",      dream:"Game Dev",        photo:"https://randomuser.me/api/portraits/men/22.jpg",  tags:["Tech","Creative"],      wa:"6281234560005",ig:"rizky.firma",     tt:"rizkyfirma"},
  {name:"Putri Maharani", role:"Student",          num:"06",hobby:"Dance",       dream:"Performer",       photo:"https://randomuser.me/api/portraits/women/26.jpg", tags:["Arts","Active"],        wa:"6281234560006",ig:"putri.maharani",  tt:"putrimaharani"},
  {name:"Fajar Nugraha",  role:"Student",          num:"07",hobby:"Coding",      dream:"Software Eng.",   photo:"https://randomuser.me/api/portraits/men/34.jpg",  tags:["Tech","Logic"],         wa:"6281234560007",ig:"fajar.nugraha",   tt:"fajarnugraha"},
  {name:"Fauzul Adim",    role:"Student",          num:"08",hobby:"Painting",    dream:"Artist",          photo:"https://randomuser.me/api/portraits/women/55.jpg", tags:["Arts","Calm"],          wa:"6285695021458",  ig:"fauzulzee_",     tt:"ayusafitri"},
  {name:"Hidayatul Mustakim",  role:"Vice President", num:"09", hobby:"Fishing",  dream:"Militery",         photo:"aim.jpeg",  tags:["Sports","Smart"],        wa:"6283159377548",  ig:"aimm_mustaqim",   tt:"aim_hm9"},
  {name:"Nabila Azzahra", role:"Student",          num:"10",hobby:"Writing",     dream:"Author",          photo:"https://randomuser.me/api/portraits/women/62.jpg", tags:["Literature","Creative"],wa:"6281234560010",ig:"nabila.azzahra",  tt:"nabilaazzahra"},
  {name:"Muhammad Rafli", role:"Student",          num:"11",hobby:"Music",       dream:"Musician",        photo:"https://randomuser.me/api/portraits/men/52.jpg",  tags:["Arts","Music"],         wa:"6281234560011",ig:"m.rafli",         tt:"muhrafli"},
  {name:"Clarissa Putri", role:"Student",          num:"12",hobby:"Volunteering",dream:"Activist",        photo:"https://randomuser.me/api/portraits/women/17.jpg", tags:["Social","Caring"],      wa:"6281234560012",ig:"clarissa.putri",  tt:"clarissaputri"},
  {name:"Lani Prihastia", role:"Student",          num:"13",hobby:"Readding",      dream:"Pilot",       photo:"lani.jpg",  tags:["Outdoors","Science"],   wa:"6289510700753",  ig:"prhstiaaa_",  tt:"tiaaaaaaa"},
  {name:"Indah Permata",  role:"Student",          num:"14",hobby:"Yoga",        dream:"Psychologist",    photo:"https://randomuser.me/api/portraits/women/28.jpg", tags:["Wellness","Calm"],      wa:"6281234560014",ig:"indah.permata",   tt:"indahpermata"},
  {name:"M. Roif Al Kautsar",  role:"Student",          num:"15",hobby:"Bissnis",       dream:"Militer",      photo:"roif.jpg",  tags:["Logic","Thinker"],      wa:"6281398096184",ig:"boallll_",   tt:"slashhhh____"},
  {name:"Layla Nuraini",  role:"Student",          num:"16",hobby:"Astronomy",   dream:"Astronomer",      photo:"https://randomuser.me/api/portraits/women/39.jpg", tags:["Science","Dreamer"],    wa:"6281234560016",ig:"layla.nuraini",   tt:"laylanuraini"},
  {name:"Mochammad Ilham",role:"Student",          num:"17",hobby:"Skateboarding",dream:"Entrepreneur",   photo:"https://randomuser.me/api/portraits/men/18.jpg",  tags:["Active","Bold"],        wa:"6281234560017",ig:"m.ilham",         tt:"mocilham"},
  {name:"Nina Kartika",   role:"Student",          num:"18",hobby:"Gardening",   dream:"Botanist",        photo:"https://randomuser.me/api/portraits/women/47.jpg", tags:["Nature","Science"],     wa:"6281234560018",ig:"nina.kartika",    tt:"ninakartika"},
  {name:"Oscar Permana",  role:"Student",          num:"19",hobby:"Film Editing", dream:"Director",       photo:"https://randomuser.me/api/portraits/men/29.jpg",  tags:["Media","Creative"],     wa:"6281234560019",ig:"oscar.permana",   tt:"oscarpermana"},
  {name:"M. Nabhan Al Elokhi",  role:"Student",          num:"20",hobby:"Touring",      dream:"CEO",    photo:"nabhan.jpeg", tags:["BOS","Preman pasar"],    wa:"6283124746615",ig:"mhmdnabhan__",   tt:"Nbhan_06"},
  {name:"Qori Rahmawati", role:"Student",          num:"21",hobby:"Calligraphy", dream:"Designer",        photo:"https://randomuser.me/api/portraits/women/19.jpg", tags:["Arts","Detail"],        wa:"6281234560021",ig:"qori.rahma",      tt:"qorirahma"},
  {name:"Rafi Alamsyah",  role:"Student",          num:"22",hobby:"Robotics",    dream:"AI Researcher",   photo:"https://randomuser.me/api/portraits/men/36.jpg",  tags:["Tech","Future"],        wa:"6281234560022",ig:"rafi.alam",       tt:"rafialam"},
  {name:"Sabrina Hasanah",role:"Student",          num:"23",hobby:"Origami",     dream:"Architect",       photo:"https://randomuser.me/api/portraits/women/31.jpg", tags:["Arts","Design"],        wa:"6281234560023",ig:"sabrina.hasanah", tt:"sabrinahasanah"},
  {name:"Teguh Subroto",  role:"Student",          num:"24",hobby:"Swimming",    dream:"Marine Biologist",photo:"https://randomuser.me/api/portraits/men/48.jpg",  tags:["Sports","Nature"],      wa:"6281234560024",ig:"teguh.subroto",   tt:"teguhsubroto"},
  {name:"Reni Rosmawati", role:"Student",          num:"25",hobby:"Photo",       dream:"Music Teacher",   photo:"reni.jpg", tags:["Music","Teaching"],     wa:"6285951465612",ig:"ren_yrosmwt",  tt:"renii_rosma"},
  {name:"Vino Hartanto",  role:"Student",          num:"26",hobby:"Badminton",   dream:"Sports Coach",    photo:"https://randomuser.me/api/portraits/men/57.jpg",  tags:["Sports","Active"],      wa:"6281234560026",ig:"vino.hartanto",   tt:"vinohartanto"},
  {name:"Wulandari Sari", role:"Student",          num:"27",hobby:"Journaling",  dream:"Therapist",       photo:"https://randomuser.me/api/portraits/women/23.jpg", tags:["Reflective","Caring"],  wa:"6281234560027",ig:"wulan.sari",      tt:"wulansari"},
  {name:"Xavier Lie",     role:"Student",          num:"28",hobby:"Investing",   dream:"Economist",       photo:"https://randomuser.me/api/portraits/men/66.jpg",  tags:["Finance","Logic"],      wa:"6281234560028",ig:"xavier.lie",      tt:"xavierlie"},
  {name:"Yeni Kurniasih", role:"Student",          num:"29",hobby:"Theater",     dream:"Actress",         photo:"https://randomuser.me/api/portraits/women/82.jpg", tags:["Drama","Arts"],         wa:"6281234560029",ig:"yeni.kurnia",     tt:"yenikurnia"},
  {name:"Zahra Islamiyah",role:"Student",          num:"30",hobby:"Teaching",    dream:"Professor",       photo:"https://randomuser.me/api/portraits/women/36.jpg", tags:["Academic","Leader"],    wa:"6281234560030",ig:"zahra.islam",     tt:"zahraislam"},
  {name:"Ariel Saputra",  role:"Student",          num:"31",hobby:"Cycling",     dream:"Urban Planner",   photo:"https://randomuser.me/api/portraits/men/77.jpg",  tags:["Active","Design"],      wa:"6281234560031",ig:"ariel.saputra",   tt:"arielsaputra"},
  {name:"Bella Adriana",  role:"Student",          num:"32",hobby:"Fashion Design",dream:"Fashion Designer",photo:"https://randomuser.me/api/portraits/women/90.jpg",tags:["Arts","Style"],        wa:"6281234560032",ig:"bella.adriana",   tt:"belladriana"},
  {name:"Bella Adriana",  role:"Student",          num:"32",hobby:"Fashion Design",dream:"Fashion Designer",photo:"https://randomuser.me/api/portraits/women/90.jpg",tags:["Arts","Style"],        wa:"6281234560032",ig:"bella.adriana",   tt:"belladriana"},
  {name:"S. Khusuma Adhawati",  role:"Student",    num:"34",hobby:"Fashion Design",dream:"Fashion Designer",photo:"awa.png",tags:["Arts","Style"],wa:"6285286702997",ig:"stksmaadhwti",   tt:"wawaaaaaa09_"},
];

/* SVG icons */
const SVG_WA = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.17 1.541 5.943L.057 23.486a.5.5 0 0 0 .612.612l5.584-1.484A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.727 9.727 0 0 1-4.953-1.356l-.355-.211-3.673.975.99-3.585-.231-.368A9.721 9.721 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>`;

const SVG_IG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`;

const SVG_TT = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>`;

function socialLink(type, val){
  if(!val) return `<span class="social-btn ${type} disabled" title="Belum diisi">${type==='wa'?SVG_WA:type==='ig'?SVG_IG:SVG_TT}</span>`;
  let href='';
  if(type==='wa')  href=`https://wa.me/${val}`;
  if(type==='ig')  href=`https://instagram.com/${val}`;
  if(type==='tt')  href=`https://tiktok.com/@${val}`;
  return `<a class="social-btn ${type}" href="${href}" target="_blank" rel="noopener" title="${type==='wa'?'WhatsApp':type==='ig'?'Instagram':'TikTok'}: ${val}" onclick="event.stopPropagation()">${type==='wa'?SVG_WA:type==='ig'?SVG_IG:SVG_TT}</a>`;
}

function renderStudents(){
  const grid=document.getElementById('studentsGrid');
  const dl=['rd1','rd2','rd3','rd4'];
  students.forEach((s,i)=>{
    const c=document.createElement('div');
    c.className='student-card reveal '+dl[i%4];
    c.innerHTML=`
      <div class="student-num">${s.num}</div>
      <div class="student-photo-wrap">
        <img src="${s.photo}" alt="${s.name}" loading="lazy"
          onerror="this.style.display='none';this.parentNode.insertAdjacentHTML('beforeend','<div style=\\'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:32px;\\'>👤</div>')">
      </div>
      <div class="student-name">${s.name}</div>
      <div class="student-role">${s.role}</div>
      <div class="student-info">🎯 ${s.hobby}<br>✨ ${s.dream}</div>
      <div class="student-tags">${s.tags.map(t=>`<span class="stag">${t}</span>`).join('')}</div>
      <div class="student-socials">
        ${socialLink('wa', s.wa)}
        ${socialLink('ig', s.ig)}
        ${socialLink('tt', s.tt)}
      </div>
    `;
    grid.appendChild(c);
  });
}

/* ── HAMBURGER ─────────────────────────────────────── */
function toggleDrawer(){
  const h=document.getElementById('hamburger');
  const d=document.getElementById('navDrawer');
  h.classList.toggle('open');
  d.classList.toggle('open');
}
function closeDrawer(){
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('navDrawer').classList.remove('open');
}
document.addEventListener('click',e=>{
  const nav=document.getElementById('navbar');
  const drawer=document.getElementById('navDrawer');
  if(drawer.classList.contains('open')&&!nav.contains(e.target)&&!drawer.contains(e.target))closeDrawer();
});

/* ── THEME ─────────────────────────────────────────── */
let isDark=false;
function toggleTheme(){
  isDark=!isDark;
  document.documentElement.setAttribute('data-theme',isDark?'dark':'light');
  document.getElementById('themeBtn').classList.toggle('dark',isDark);
  document.getElementById('theme-icon').textContent=isDark?'🌙':'☀️';
}

/* ── MUSIC (Audio File) ────────────────────────────── */
const audio = document.getElementById('bgMusic');
audio.volume = 0.55;
let playing = false;

function toggleMusic(){
  const btn  = document.getElementById('music-btn');
  const bars = document.getElementById('mbars');
  if(!playing){
    audio.play().then(()=>{
      playing = true;
      btn.textContent = '⏸';
      bars.classList.remove('paused');
    }).catch(()=>{});
  } else {
    audio.pause();
    playing = false;
    btn.textContent = '▶';
    bars.classList.add('paused');
  }
}

/* Auto-play on first user interaction (browser policy) */
let autoStarted = false;
document.addEventListener('click', function tryAuto(){
  if(!autoStarted){
    autoStarted = true;
    audio.play().then(()=>{
      playing = true;
      document.getElementById('music-btn').textContent = '⏸';
      document.getElementById('mbars').classList.remove('paused');
    }).catch(()=>{});
  }
  document.removeEventListener('click', tryAuto);
}, {once: true});

/* ── SCROLL REVEAL ─────────────────────────────────── */
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});
},{threshold:0.08,rootMargin:'0px 0px -32px 0px'});

/* ── NAVBAR SCROLL ─────────────────────────────────── */
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>50);
  const secs=['home','structure','students','gallery'];
  let cur='';
  secs.forEach(id=>{const el=document.getElementById(id);if(el&&window.scrollY>=el.offsetTop-100)cur=id;});
  const sel='#'+cur;
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(a=>{
    a.classList.toggle('active',a.getAttribute('href')===sel);
  });
},{passive:true});

/* ── INIT ──────────────────────────────────────────── */
window.addEventListener('load',()=>{
  setTimeout(()=>document.getElementById('loader').classList.add('hidden'),2400);
  renderStudents();
  setTimeout(()=>document.querySelectorAll('.reveal').forEach(el=>obs.observe(el)),300);
});