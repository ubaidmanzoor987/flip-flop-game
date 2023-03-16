'use strict';
var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 1200;
var value1=8;
var answer='';
var shuffle=0;
var random=0;
var cardsArray = [{
  'name': 'shell',
  'img': 'img/blueshell.png'
}, {
  'name': 'star',
  'img': 'img/star.png'
}, {
  'name': 'bobomb',
  'img': 'img/bobomb.png'
}, {
  'name': 'mario',
  'img': 'img/mario.png'
}, {
  'name': 'luigi',
  'img': 'img/luigi.png'
}, {
  'name': 'peach',
  'img': 'img/peach.png'
}, {
  'name': '1up',
  'img': 'img/1up.png'
}, {
  'name': 'mushroom',
  'img': 'img/mushroom.png'
}, {
  'name': 'thwomp',
  'img': 'img/thwomp.jpg'
}, {
  'name': 'bulletbill',
  'img': 'img/bulletbill.png'
}, {
  'name': 'coin',
  'img': 'img/coin.jpg'
}, {
  'name': 'goomba',
  'img': 'img/goomba.jpg'
}];

var gameGrid = cardsArray.concat(cardsArray).sort(
	function () 
	{
  return 0.5 - Math.random();
});
var game = document.getElementById('game');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(function (item) {
  var name = item.name,
      img = item.img;


  var card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  var front = document.createElement('div');
  front.classList.add('front');

  var back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = 'url(' + img + ')';

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

var match = function match() {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.add('match');
  });
	if(value1==8)
		{
			value1+=4;
		}
	if(random==0)
		{
			document.getElementById("name1").value="Nice Move";
			document.getElementById("name1").style.color="cyan";
			random+=1;
		}
	else if(random==1)
		{
			document.getElementById("name1").value="Great Work!";
			document.getElementById("name1").style.color="pink";
			random+=1;
		}
	else if(random==2)
		{
			document.getElementById("name1").value="Superb!";
			document.getElementById("name1").style.color="black";
			random+=1;
		}
	else if(random==3)
		{
			document.getElementById("name1").value="Fantastic!";
			document.getElementById("name1").style.color="blue";
			random+=1;
		}
	else if(random==4)
		{
			document.getElementById("name1").value="Carry On!";
			document.getElementById("name1").style.color="yellow";
			random=0;
		}
	 move(value1);
	
};

var resetGuesses = function resetGuesses() {
  if(firstGuess !== secondGuess)
	  {
		  if(shuffle==0)
		{
			document.getElementById("name1").value="Oops! Missed";
			document.getElementById("name1").style.color="cyan";
			shuffle+=1;
		}
		else if(shuffle==1)
		{
			document.getElementById("name1").value="OOh!";
			document.getElementById("name1").style.color="pink";
			shuffle+=1;
		}
		else if(shuffle==2)
		{
			document.getElementById("name1").value="try Different!";
			document.getElementById("name1").style.color="black";
			shuffle+=1;
		}
		else if(shuffle==3)
		{
			document.getElementById("name1").value="Missed!";
			document.getElementById("name1").style.color="blue";
			shuffle+=1;
		}
		else if(shuffle==4)
		{
			document.getElementById("name1").value="AAh! Lose it";
			document.getElementById("name1").style.color="yellow";
			shuffle=0;
		}
	  }
	firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.remove('selected');
  });
};
grid.addEventListener('click', function (event) {

  var clicked = event.target;

  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
		
      }
		
      setTimeout(resetGuesses, delay);	
    }
    previousTarget = clicked;
  
  }
});
function move(v) {
  var elem = document.getElementById("myBar");
    if (v==100) {
		elem.innerHTML = v + '%';
		document.getElementById("name1").value=" ";
		document.getElementById("name1").value="Game is Complete";
		//elem.innerHTML = v + '%';
	} 
	else 
	{
	  elem.style.width=v+'%'; 	
      elem.innerHTML = v + '%';
		value1+=8;
    }
}
window.onload = function()
{
	document.getElementById("name1").value="Let's Play Game";
}
function replay()
{
	answer=confirm("Do You want to play again");
	if(answer==true)
		{
		 window.open("index.html","_self");
		}
	else
		{
			alert("OK!");
		}
}