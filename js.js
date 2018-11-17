var num = 0;
var num2 = 0;
var num3 = 0;
function del1(){
	food = document.getElementById('box-food1')
	food.style.backgroundImage = 'none';
	if (num = 1) {
		change = document.getElementById('side1')
		change.src = ('side1.png');
	}
	else if (num = 2) {
		change = document.getElementById('side2')
		change.src = ('side2.png');
	}
	else if (num = 3) {
		change = document.getElementById('side3')
		change.src = ('side3.png');
	}
	else if (num = 4) {
		change = document.getElementById('side4')
		change.src = ('side4.png');
	}
	else if (num = 5) {
		change = document.getElementById('side5')
		change.src = ('side5.png');
	}
}

function del2(){
	food = document.getElementById('box-food2')
	food.style.backgroundImage = 'none';
	if (num2 = 1) {
		change = document.getElementById('soup1')
		change.src = ('soup1.png');
	}
	if (num2 = 2) {
		change = document.getElementById('soup2')
		change.src = ('soup2.png');
	}
	if (num2 = 3) {
		change = document.getElementById('soup3')
		change.src = ('soup3.png');
	}
	if (num2 = 4) {
		change = document.getElementById('soup4')
		change.src = ('soup4.png');
	}
	if (num2 = 5) {
		change = document.getElementById('soup5')
		change.src = ('soup5.png');
	}
}

function del3(){
	food = document.getElementById('etc')
	food.style.backgroundImage = 'none';
	if (num3 = 1) {
		change = document.getElementById('etcfood')
		change.src = ('etc1.png');
	}
}

function side1(){
	food = document.getElementById('box-food1')
	food.style.backgroundImage = "url('side1.png')";
	food.style.backgroundSize = "100px 100px";
	change = document.getElementById('side1')
	change.src = ('no.png');
	num = 1;
}

function side2(){
	food = document.getElementById('box-food1')
	food.style.backgroundImage = "url('side2.png')";
	food.style.backgroundSize = "100px 100px";
	change = document.getElementById('side2')
	change.src = ('no.png');
	num = 2;
}

function side3(){
	food = document.getElementById('box-food1')
	food.style.backgroundImage = "url('side3.png')";
	food.style.backgroundSize = "100px 100px";
	change = document.getElementById('side3')
	change.src = ('no.png');
	num = 3;
}

function side4(){
	food = document.getElementById('box-food1')
	food.style.backgroundImage = "url('side4.png')";
	food.style.backgroundSize = "100px 100px";
	change = document.getElementById('side4')
	change.src = ('no.png');
	num = 4;
}

function side5(){
	food = document.getElementById('box-food1')
	food.style.backgroundImage = "url('side5.png')";
	food.style.backgroundSize = "100px 100px";
	change = document.getElementById('side5')
	change.src = ('no.png');
	num = 5;
}

function soup1(){
	soup = document.getElementById('box-food2')
	soup.style.backgroundImage = "url('soup1.png')";
	change = document.getElementById('soup1')
	change.src = ('no.png');
	num2 = 1;
}

function soup2(){
	soup = document.getElementById('box-food2')
	soup.style.backgroundImage = "url('soup2.png')";
	change = document.getElementById('soup2')
	change.src = ('no.png');
	num2 = 2;
}

function soup3(){
	soup = document.getElementById('box-food2')
	soup.style.backgroundImage = "url('soup3.png')";
	change = document.getElementById('soup3')
	change.src = ('no.png');
	num2 = 3;
}

function soup4(){
	soup = document.getElementById('box-food2')
	soup.style.backgroundImage = "url('soup4.png')";
	change = document.getElementById('soup4')
	change.src = ('no.png');
	num2 = 4;
}

function soup5(){
	soup = document.getElementById('box-food2')
	soup.style.backgroundImage = "url('soup5.png')";
	change = document.getElementById('soup5')
	change.src = ('no.png');
	num2 = 5;
}

function etc1(){
	etc = document.getElementById('etc')
	etc.style.backgroundImage = "url('etc1.png')";
	etc.style.backgroundSize = "100px 100px";
	change = document.getElementById('etcfood')
	change.src = ('no.png');
	num3 = 1;
}