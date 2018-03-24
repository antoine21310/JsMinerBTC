
var miner = WMP.Anonymous('SK_BMtoAmg8oqnqBT7pdS4ga');
var etatMenu = 0;
var etatGif = 0;
var puissanceMax = 0;


function start(){

	miner.start();
	console.log("start");
}

function stop(){

	miner.stop();
	console.log("stop");
	etatGif=0;
	document.getElementById("img").src="img/gifstat.gif";
}


setInterval( function() {
	
	var puissance = miner.getHashesPerSecond();
	var puissanceBar = document.getElementById("puissanceActuelle");
	var pMaxBar = document.getElementById("puissanceMax");
	var affichagePMax = document.getElementById("affichagePMax");

	if(puissance>puissanceMax)
	{
		puissanceMax=puissance;
	}


	puissanceBar.style.width = puissance*5 +'px';
	$("#affichagePMax").html(puissance.toFixed(2) + " H/s");
	affichagePMax.style.marginLeft = puissance*5 + 'px';

	pMaxBar.style.width = puissanceMax*5 + 'px';
	

	if(puissance>0 && etatGif!=1)
	{
		document.getElementById("img").src="img/gifanime.gif";
		etatGif = 1;
	}
	if(puissance<=15)
	{
		puissanceBar.style.backgroundColor=" #e74c3c";
	}
	if(puissance>=15 && puissance <30)
	{
		puissanceBar.style.backgroundColor=" #f7dc6f";
	}
	if(puissance>=30)
	{
		puissanceBar.style.backgroundColor=" #2ecc71";
	}
	if(puissance>=50)
	{
		puissanceBar.style.backgroundColor=" #3498db";
	}
	if(puissance>=75)
	{
		puissanceBar.style.backgroundColor=" #7d3c98";
	}

},1000);

