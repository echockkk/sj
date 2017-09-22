window.onload = function(){
	var html = document.documentElement;
	var width = html.getBoundingClientRect().width;
	html.style.fontSize = width/12 + 'px';
	var a = document.querySelector('#ch-photo');
	var mb = document.querySelector('.ch-mb');
	var cancle = document.querySelector('.cancle');
	a.onclick = function(){
		mb.style.display = 'block';
	};
	cancle.onclick = function(){
		mb.style.display = 'none';
	}
}