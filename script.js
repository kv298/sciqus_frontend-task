// ---------- Generic dot builder ----------
  function buildDots(container, count, onClick, activeClass){
    container.innerHTML = '';
    for(let i=0;i<count;i++){
      const d = document.createElement(container.id.includes('c1') ? 'button' : 'span');
      if(i===0) d.classList.add('active');
      d.addEventListener('click', () => onClick(i));
      container.appendChild(d);
    }
  }

  // ---------- Container 1: autoplay fade carousel ----------
  (function(){
    const slides = document.querySelectorAll('#c1-stage .c1-slide');
    const dotsWrap = document.getElementById('c1-dots');
    let idx = 0;
    buildDots(dotsWrap, slides.length, go);
    function render(){
      slides.forEach((s,i)=> s.classList.toggle('active', i===idx));
      [...dotsWrap.children].forEach((d,i)=> d.classList.toggle('active', i===idx));
    }
    function go(i){ idx = i; render(); }
    setInterval(()=>{ idx = (idx+1) % slides.length; render(); }, 4200);
  })();

  // ---------- Container 3 & 6: arrow sliders ----------
  function initArrowSlider(prefix){
    const track = document.getElementById(prefix+'-track');
    const slides = track.querySelectorAll('.slide');
    const dotsWrap = document.getElementById(prefix+'-dots');
    const prevBtn = document.getElementById(prefix+'-prev');
    const nextBtn = document.getElementById(prefix+'-next');
    let idx = 0;
    buildDots(dotsWrap, slides.length, go);
    function render(){
      slides.forEach((s,i)=> s.classList.toggle('active', i===idx));
      [...dotsWrap.children].forEach((d,i)=> d.classList.toggle('active', i===idx));
    }
    function go(i){ idx = (i+slides.length) % slides.length; render(); }
    prevBtn.addEventListener('click', ()=> go(idx-1));
    nextBtn.addEventListener('click', ()=> go(idx+1));
  }
  initArrowSlider('c3');
  initArrowSlider('c6');

  // ---------- Container 5 buttons: simple interaction feedback ----------
  document.querySelectorAll('.c5-btns .btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      btn.style.transform = 'scale(0.97)';
      setTimeout(()=> btn.style.transform = '', 120);
    });
  });