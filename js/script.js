function fillCircles(){
	var scrollTop = Number(document.body.scrollTop);
	let fill = document.getElementsByClassName('fill');

	if ((scrollTop) > 600){
		for (var i = 0; i<fill.length; i++){
			fill[i].removeClass("fa-circle-thin").addClass("fa-circle");
		}
	}
}

window.addEventListener('scroll', fillCircles);