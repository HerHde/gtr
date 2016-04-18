
$(document).ready(function(){
	$("#wSplash .bNext").click(function(){
		$("#headcenter").fadeOut(1000);
		$("#wSplash").fadeOut(2000, function(){
			$("#wIntro").fadeIn(2000);
		});
	});

	$("#wIntro .bNext").click(function(){
		$("#wIntro").fadeOut(2000, function(){
			$("#wGame").fadeIn(2000);
		});
	});

	$("#maid1 .bNext").click(function(){
		$.fancybox.close();
		$("#wGameMaid").fadeOut();
		$("#wGameMaid").attr('title', 'Da is die Alte wieder.');
		$("#wGameMaid").attr('href', '#maid2');
		$("#wGameSau").fadeIn(2000);
	});

	$("#sau .bNext").click(function(){
		$.fancybox.close();
		$("#wGameSau").fadeOut();
		$("#wGameMaid").fadeIn(2000);
	});

	$("#maid2 .bNext").click(function(){
		$.fancybox.close();
		$("#wGame").fadeOut(function(){
			$("#wOutro").fadeIn(2000);
		});
	});

	$("#wOutro .bNext").click(function(){
		$("#wOutro").fadeOut(2000, function(){
			$("#wGameMaid").attr('title', 'Verfolgt die mich?');
			$("#wGameMaid").attr('href', '#maid3');
			$("#wGame").fadeIn(2000);
		});
	});

	$("#maid3 .bNext").click(function(){
		$.fancybox.close();
		$("#wGameMaid").fadeOut();
		$("#wGameMaid").attr('href', '#maid4');
		$("#wGameTrecker").fadeIn(2000);
	});

	$("#trecker1 .bNext").click(function(){
		$.fancybox.close();
		$("#wGameTrecker").attr('href', '#trecker2');
	});

	$("#opt11").click(function(){
		$("#opt1").html('Godlike! So einen Stealth-Kill hat Rodgau selten gesehen. Du murckst ihn ohne jeden Ton ab, steckst die Heugabel wieder in deine sehr ger�umige GTA-Tasche und bekommst <b>666 Erfahrungspunkte</b>. Aber was ist mit dem Trecker?');
		$("#opt2").fadeIn();
	});

	$("#opt12").click(function(){
		$("#opt1").html('Du knallst ihm den Matsch volle Latte an die Birne und siehe da, er explodiert nat�rlich. Wieder einmal f�r Gerechtigkeit gesorgt. Um den Trecker musst du dich allerdings noch k�mmern...');
		$("#opt2").fadeIn();
	});

	$("#opt21").click(function(){
		$("#opt2").html('Das Spektakel erinnert ein wenig an Cobra 11. Jeder in Rodgau City kriegt die Explosion mit, aber keine Sorge: Deine Nachbarn wissen die restlose Vernichtung des Eindringlings zu sch�tzen. <b>Dein Ruf in Rodgau hat sich um 100 Punkte verbessert</b> Au�erdem feiert die Gemeinde ein Osterfeuer.');
		$("#trecker2 .bNext").fadeIn();
	});

	$("#opt22").click(function(){
		$("#opt2").html('Der Trecker gleitet sanft in die Tasche, ohne sie auch nur ann�hernd auszubeulen, doch als du weitergehen willst trifft es dich wie ein Lag: <b>Ihr seid zu schwer belastet.</b> Verdammte Oblivion-Engine. Aber wenn schon Oblivion, dann richtig: Du z�ndest den entpackten Trecker per Feuerball an und durchsuchst das Wrack, doch leider findest du nichts au�er ein paar L�ffeln, Gabeln und anderen Dingen, die die Spielatmosph�re verbessern sollen aber keinen besonderen Nutzen haben.');
		$("#trecker2 .bNext").fadeIn();
	});

	$("#trecker2 .bNext").click(function(){
		$.fancybox.close();
		$("#wGameTrecker").fadeOut();
		$("#wGameMaid").fadeIn(2000);
	});

	$("#maid4 .bNext").click(function(){
		$.fancybox.close();
		$("#wGame").fadeOut(function(){
			$("#wOutro2").fadeIn(2000);
		});
	});




	$(".box").fancybox({
		'scrolling'		: 'no',
		'titleShow'		: false,
		'showCloseButton'	: false,
		'hideOnOverlayClick'	: false
	});
});
