// CHANGE THIS: country code + number, no + or spaces (e.g. 919876543210)
const WHATSAPP_NUMBER = "918073061377";

const wa = t => "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(t);

document.querySelectorAll('.wa-link').forEach(a=>{
  a.href=wa("Hello Jayasheel Upahaar, I would like to know more.");
  a.target="_blank";
  a.rel="noopener";
});

document.querySelectorAll('.wa-order').forEach(a=>{
  a.href=wa("Hello, I would like to order: "+a.dataset.item);
  a.target="_blank";
  a.rel="noopener";
});

document.getElementById('y').textContent=new Date().getFullYear();

document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.tabs button').forEach(x=>x.classList.remove('on'));
  b.classList.add('on');

  document.querySelectorAll('#grid .card').forEach(c=>
    c.classList.toggle(
      'hide',
      b.dataset.c!=='all'&&c.dataset.c!==b.dataset.c
    )
  );
});