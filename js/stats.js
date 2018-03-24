

setInterval(function() {


	$.post("php/getBalance.php", function(data){

		var balanceSatoshi = data.balanceSatoshi;
		$("#balanceSatoshi").html("Total satoshis : "+balanceSatoshi+" BTC");
		var pourcentObjectif = (balanceSatoshi/37711)*100;

		objectifActuel.style.width = pourcentObjectif + "%";
		$("#pourcent").html(pourcentObjectif.toFixed(2) + "%");
		pourcent.style.marginLeft = pourcentObjectif + "%";


	}, "json");

},1000);

