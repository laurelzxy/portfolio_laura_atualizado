// Navegação entre as seções e páginas de detalhes dos projetos.

(function(){var vs=['inicio','sobre','projetos'],views=document.querySelectorAll('.view'),ds=document.querySelectorAll('.detail'),ct=document.getElementById('contato'),nav=document.querySelectorAll('[data-v]');
function route(){var id=location.hash.slice(1),det=null;ds.forEach(function(d){var on=d.id===id;d.classList.toggle('on',on);if(on)det=d});
var v=vs.indexOf(id)>-1?id:'inicio';if(det)v='projetos';
views.forEach(function(x){x.classList.toggle('on',!det&&x.id===v)});
nav.forEach(function(a){if(a.dataset.v===v)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
ct.style.display=det?'none':'';window.scrollTo(0,0)}
addEventListener('hashchange',route);route()})();
