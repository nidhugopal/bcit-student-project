const btn = document.getElementById('nav-button');

btn.addEventListener('click', _ => document.body.classList.toggle('show'));
btn.addEventListener('mousedown', (e) => {e.preventDefault()});