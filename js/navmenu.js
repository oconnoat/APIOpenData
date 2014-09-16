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
    console.log(document.querySelector('.notes').style);
    if (this.checked){
        
        document.querySelector('.notes').style.display = "block";
    }
    else {
        document.querySelector('.notes').style.display = "none";

    }
});

