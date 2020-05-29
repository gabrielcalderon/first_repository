var element_nav = document.getElementsByTagName('nav');
var btn = document.getElementById('btn_nav');

console.log(btn);

btn.addEventListener('click', () => {
  window.alert(element_nav);
  console.log(window.location.origin);
});
