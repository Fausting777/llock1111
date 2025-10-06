// Год в футере
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Список городов/посёлков до ~30 км от Берлина
const umland = [
  'Potsdam','Teltow','Kleinmachnow','Stahnsdorf','Falkensee','Dallgow-Döberitz',
  'Hennigsdorf','Hohen Neuendorf','Velten','Bergfelde','Panketal','Bernau bei Berlin',
  'Ahrensfelde','Hoppegarten','Neuenhagen','Schönefeld','Königs Wusterhausen','Wildau',
  'Zeuthen','Eichwalde','Schulzendorf','Erkner','Gosen-Neu Zittau','Grünheide (Mark)',
  'Fredersdorf-Vogelsdorf','Petershagen/Eggersdorf','Wandlitz','Mühlenbecker Land','Oranienburg'
];
const list = document.getElementById('umland-list');
if (list) {
  umland.sort((a,b)=>a.localeCompare(b,'de')).forEach(t => {
    const li=document.createElement('li'); li.textContent=t; list.appendChild(li);
  });
}

// Заглушка формы
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Danke! Wir melden uns in Kürze.');
    form.reset();
  });
}
