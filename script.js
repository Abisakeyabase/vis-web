var banners=document.querySelectorAll('.banners');
var currentindex=0;
function updatebanner(index){
    banners[currentindex].classList.remove('active');
    currentindex=(index+banners.length)%banners.length;
    banners[currentindex].classList.add('active');
}
var nextbuton=document.getElementById('nxtbtn')
var previewbuton=document.getElementById('prebtn')
nextbuton.addEventListener('click', function(){
    updatebanner(currentindex+1)
})
previewbuton.addEventListener('click', function(){
    updatebanner(currentindex-1)
})
setInterval(function(){
    updatebanner(currentindex + 1)
},4000)
// const dropdownButton = document.querySelector('.dropdown-button');
// const dropdownMenu = document.querySelector('.dropdown-menu');

// // Toggle dropdown menu visibility
// dropdownButton.addEventListener('click', function() {
//   const isVisible = dropdownMenu.style.display === 'block';
//   dropdownMenu.style.display = isVisible ? 'none' : 'block';
// });

// // Close dropdown menu if clicked outside
// document.addEventListener('click', (event) => {
//   if (!event.target.closest('.dropdown')) {
//     dropdownMenu.style.display = 'none';
//   }
// });




