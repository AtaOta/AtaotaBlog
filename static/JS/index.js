var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('#Base_Nav').style.top = "0px";
  } else {
    document.querySelector('#Base_Nav').style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


let Show_Aside_Container = document.getElementById("Base_Show_Aside");
let Aside_Container = document.getElementById("Base_Aside");

Show_Aside_Container.addEventListener('click', function(e){
    Aside_Container.classList.remove('Base_AsideHide');

})
document.querySelectorAll('.Base_Hide_Aside').forEach(Hide_Aside_Container => {
    Hide_Aside_Container.addEventListener('click', function(e){
        Aside_Container.classList.add('Base_AsideHide');

    })
})