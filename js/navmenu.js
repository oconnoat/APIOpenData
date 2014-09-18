var navList = document.querySelector("#navmenu ul");
var slides = document.querySelectorAll(".step");

console.log(slides);

for (var i=0; i < slides.length; i++){
    var link = document.createElement('a');
    link.href = '#/'+slides[i].id;
    link.appendChild(document.createTextNode(slides[i].id));
    item = document.createElement('li');
    item.appendChild(link);
    navList.appendChild(item);
}

var notebox = document.querySelector("#notebox");
notebox.addEventListener('change', function(){
    notes =  document.querySelectorAll('.notes');
    for(var i = 0; i < notes.length; i++){
        notes[i].style.display = this.checked ? 'block' : 'none';
    }    
});

