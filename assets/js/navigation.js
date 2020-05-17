function menuToggle(x) {
  x.classList.toggle("change");
  var classList = document.getElementById('toggleMenu').className.split(/\s+/);
  let menuH = document.getElementById("page-header-id");
  let style = menuH.currentStyle || window.getComputedStyle(menuH);
  let menuHeight = menuH.offsetHeight + parseInt(style.marginTop.replace("px",'')) + 10;
  console.log(menuHeight);
  console.log(menuHeight+"px");

	for (var i = 0; i < classList.length; i++) {
	    if (classList[i] === 'change') {
	    	console.log('change')
	        document.getElementById("myNav").style.width = "100%";
	        document.getElementById("myNav").style.marginTop = menuHeight+"px";
	    } else {
	    	document.getElementById("myNav").style.width = "0%";
	    }
	}
}

/*
var classList = document.getElementById('toggleMenu').className.split(/\s+/);
console.log(classList);
for (var i = 0; i < classList.length; i++) {
    if (classList[i] === 'change') {
    	console.log('change')
        document.getElementById("myNav").style.width = "100%";
    }
};

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
*/

