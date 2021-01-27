//FuncionamientoTabs
function click(event) {
  event.preventDefault();
  const id = event.currentTarget.getAttribute('href').substring(1);
  updateVisibleContent(id);
}
function updateVisibleContent(id) {
  for (let i = 0; i < content.length; i++) {
    content[i].classList.add('js-content-hidden');
    if (content[i].getAttribute('id') === id) {
      content[i].classList.remove('js-content-hidden');
    }
  }
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('js-active');
    if (links[i].getAttribute('href').substring(1) === id) {
      links[i].classList.add('js-active');
    }
  }
}
const links = document.querySelectorAll('.tabs-tablist-item');
const content = document.querySelectorAll('.tabs-content-item');
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', click);
}
updateVisibleContent(links[0].getAttribute('href').substring(1));
//Funcionamiento Modal 1
const title = document.getElementById('room-indiv');
title.addEventListener('click', (event)=>{
  event.preventDefault();
  const modal = document.getElementById('modal-container').classList.add('js-block');
  const modal2 = document.getElementById('modal-content').classList.add('js-block');
});
const close = document.getElementById('close');
close.addEventListener('click', (event)=>{
  event.preventDefault();
  const modal = document.getElementById('modal-container').classList.remove('js-block');
  const modal2 = document.getElementById('modal-content').classList.remove('js-block');
});
//Funcionamiento Modal 2
const suiteModal = document.getElementById('suite-modal');
suiteModal.addEventListener('click',(event)=>{
  event.preventDefault();
  const firstContenet = document.getElementById('modal-container-suite').classList.add('js-block');
  const secondModal = document.getElementById('modal-content-suite').classList.add('js-block');
});
const closeSecond = document.getElementById('close-suite');
closeSecond.addEventListener('click', (event)=>{
  event.preventDefault();
  const firstClose = document.getElementById('modal-container-suite').classList.remove('js-block');
  const secondClose = document.getElementById('modal-content-suite').classList.remove('js-block');
});