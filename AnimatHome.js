"use strict";

$(document).ready(function(){
	var menu = 0;
	var var1=0;
	var var2=0;
	var var3=0;
	var var4=0;
	var var5=0;
	var var6=0;
	var var7=0;
	var storedVar1=0;
	var storedVar2=0;
	var storedVar3=0;
	var storedVar4=0;
	var storedVar5=0;
	var storedVar6=0;
	var storedVar7=0;

	$(".datepicker").dateDropper();
	$(".timepicker").timeDropper({
		primaryColor:"#E08529",
		borderColor:"#E08529",
		textColor:"#E08529",
		format:"HH:mm"
	});
	$("#why").animate({height:0},440);
	$(".expander").animate({height:0},400);
	setTimeout( function(){
		$("#eletro").fadeIn(300);
		$("#agua").fadeIn(300);
		$("#agenda").fadeIn(300);
		$("#luz").fadeIn(300);
		$("#limpeza").fadeIn(300);
	}, 200);

/*-----------------------------------HELP-------------------------------------*/
	$('#HELP').click(function(){
		if ( menu==0){
			$("#help-background").fadeIn(200);
			$("#main-help-box").fadeIn(200);
		} else if (menu==1) {
			$("#help-background").fadeIn(200);
			$("#luzes-help-box").fadeIn(200);
		}else if (menu==2) {
			$("#help-background").fadeIn(200);
			$("#agenda-help-box").fadeIn(200);
		}else if (menu==3) {
			$("#help-background").fadeIn(200);
			$("#frig-help-box").fadeIn(200);
		}else if (menu==4) {
			$("#help-background").fadeIn(200);
			$("#enc-help-box").fadeIn(200);
		}
	});

	$('.close').click(function(){
		$("#help-background").fadeOut(200);
		$("#main-help-box").fadeOut(200);
		$("#luzes-help-box").fadeOut(200);
		$("#agenda-help-box").fadeOut(200);
		$("#frig-help-box").fadeOut(200);
		$("#enc-help-box").fadeOut(200);
		$("#cancelar-cesto").fadeOut(200);
		$("#finalizar-cesto").fadeOut(200);
		$("#devel-box").fadeOut(200);
	});

	$('#trigger').click(function(){
		$("#help-background").fadeOut(200);
		$("#main-help-box").fadeOut(200);
		$("#luzes-help-box").fadeOut(200);
		$("#agenda-help-box").fadeOut(200);
		$("#frig-help-box").fadeOut(200);
		$("#enc-help-box").fadeOut(200);
		$("#cancelar-cesto").fadeOut(200);
		$("#finalizar-cesto").fadeOut(200);
		$("#devel-box").fadeOut(200);
	});
/*-----------------------------------MAIN-------------------------------------*/
	$('#HOME').click(function(){
		if (menu!=0){
			menu=0;
			$("#menu-info").fadeOut(200, function(){
				$("#menu-info").text("Home");
				$("#menu-info").fadeIn(200);
			});
			$("h3").fadeOut(300);
			$("#main-icon").addClass("animate");
			setTimeout( function(){
				$("#main-icon").attr("src", "./media/man.png");
				$(".expander").animate({height:235},400);
				$("#buttons").fadeOut(300);
				$("#prog-window").fadeOut(300);
				$("#addto-prog-window").fadeOut(300);
				$("#frig-window-top").fadeOut(300);
				$("#frigWindow").fadeOut(300);
				$("#encomendados-window").fadeOut(300);
				$("#blueprint").fadeIn(300);
				$("#encomendarWindow").fadeOut(300);
				$(".section-window-top").fadeOut(300);
				$("#lat-top").fadeOut(300);
				$("#cereais-top").fadeOut(300);
				$("#beb-top").fadeOut(300);
				$("#frescos-top").fadeOut(300);
				$("#outros-top").fadeOut(300);
				$("#laticineosWindow").fadeOut(300);
				$("#cereaisWindow").fadeOut(300);
				$("#bebidasWindow").fadeOut(300);
				$("#frescosWindow").fadeOut(300);
				$("#outrosWindow").fadeOut(300);
				$("#main-icon").removeClass("animate");
				$("#blueprint").removeClass("topview");
				$(".expander").animate({height:0},400);
				setTimeout( function(){
					$("#bar1").show();
					$("#bar2").show();
					$("#bar3").show();
					$("#bar4").show();
					$("#bar5").show();
					$("#eletro").text("Frigorífico");
					$("#agua").text("Estores");
					$("#agenda").text("Agenda");
					$("#agenda").css("left","400px");
					$("#luz").text("Luzes");
					$("#limpeza").text("Limpeza");
					$("#contas").text("Contas");
					$("#icon1").attr("src", "./media/eletroIcon.png");
					$("#icon2").attr("src", "./media/estoresIcon.png");
					$("#icon3").attr("src", "./media/agendaIcon.png");
					$("#icon4").attr("src", "./media/lightIcon.png");
					$("#icon5").attr("src", "./media/cleanerIcon.png");
					$("#bg1").css("background-color", "#8fcdcd");
					$("#bg2").css("background-color", "#74c1c1");
					$("#bg3").css("background-color", "#66bbbb");
					$("#bg4").css("background-color", "#74c1c1");
					$("#bg5").css("background-color", "#8fcdcd");
				}, 450);
				setTimeout( function(){
					$("#eletro").fadeIn(300);
					$("#agua").fadeIn(300);
					$("#agenda").fadeIn(300);
					$("#luz").fadeIn(300);
					$("#limpeza").fadeIn(300);
					$("#random-message-box").fadeIn(500);
				}, 700);
			}, 200);
		};
	});

	$('#main-icon').click(function(){
		if ( menu==1 || menu==2 || menu==3){
			menu=0;
			$("#menu-info").fadeOut(200, function(){
				$("#menu-info").text("Home");
				$("#menu-info").fadeIn(200);
			})
			$("h3").fadeOut(200);
			$("#main-icon").addClass("animate");
			$("#buttons").fadeOut(300);
			setTimeout( function(){
				$("#main-icon").attr("src", "./media/man.png");
				$(".expander").animate({height:235},400);
				$("#prog-window").fadeOut(300);
				$("#addto-prog-window").fadeOut(300);
				$("#frig-window-top").fadeOut(300);
				$("#frigWindow").fadeOut(300);
				$("#blueprint").fadeIn(300);
				$(".section-window-top").fadeOut(300);
				$("#encomendarWindow").fadeOut(300);
				$("#encomendados-window").fadeOut(300);
				$("#lat-top").fadeOut(300);
				$("#cereais-top").fadeOut(300);
				$("#beb-top").fadeOut(300);
				$("#frescos-top").fadeOut(300);
				$("#outros-top").fadeOut(300);
				$("#laticineosWindow").fadeOut(300);
				$("#cereaisWindow").fadeOut(300);
				$("#bebidasWindow").fadeOut(300);
				$("#frescosWindow").fadeOut(300);
				$("#outrosWindow").fadeOut(300);
				$("#main-icon").removeClass("animate");
				$("#blueprint").removeClass("topview");
				$(".expander").animate({height:0},400);
				setTimeout( function(){
					$("#bar1").show();
					$("#bar2").show();
					$("#bar3").show();
					$("#bar4").show();
					$("#bar5").show();
					$("#eletro").text("Frigorífico");
					$("#agua").text("Estores");
					$("#agenda").text("Agenda");
					$("#agenda").css("left","400px");
					$("#luz").text("Luzes");
					$("#limpeza").text("Limpeza");
					$("#contas").text("Contas");
					$("#icon1").attr("src", "./media/eletroIcon.png");
					$("#icon2").attr("src", "./media/estoresIcon.png");
					$("#icon3").attr("src", "./media/agendaIcon.png");
					$("#icon4").attr("src", "./media/lightIcon.png");
					$("#icon5").attr("src", "./media/cleanerIcon.png");
					$("#bg1").css("background-color", "#8fcdcd");
					$("#bg2").css("background-color", "#74c1c1");
					$("#bg3").css("background-color", "#66bbbb");
					$("#bg4").css("background-color", "#74c1c1");
					$("#bg5").css("background-color", "#8fcdcd");
				}, 450);
				setTimeout( function(){
					$("#eletro").fadeIn(300);
					$("#agua").fadeIn(300);
					$("#agenda").fadeIn(300);
					$("#luz").fadeIn(300);
					$("#limpeza").fadeIn(300);
					$("#random-message-box").fadeIn(500);
				}, 700);
			}, 200);

		} else if (menu==4) {
			menu=3;
			$("#menu-info").fadeOut(200, function(){
				$("#menu-info").text("Home > Frigorifico");
				$("#menu-info").fadeIn(200);
			});
			$("#encomendarWindow").fadeOut(300);
			$("#encomendados-window").fadeOut(300);
			$("h3").fadeOut(200);
			$(".expander").animate({height:235}, 400)
			$("#main-icon").addClass("animate");
			setTimeout(function(){
				$(".section-window-top").fadeOut(300);
				$("#encomendarWindow").fadeOut(300);
				$("#encomendados-window").fadeOut(300);
				$("#lat-top").fadeOut(300);
				$("#cereais-top").fadeOut(300);
				$("#beb-top").fadeOut(300);
				$("#frescos-top").fadeOut(300);
				$("#outros-top").fadeOut(300);
				$("#laticineosWindow").fadeOut(300);
				$("#cereaisWindow").fadeOut(300);
				$("#bebidasWindow").fadeOut(300);
				$("#frescosWindow").fadeOut(300);
				$("#outrosWindow").fadeOut(300);
				$("#main-icon").attr("src", "./media/return.png");
				$("#main-icon").removeClass("animate");
				setTimeout(function(){
					expandEncomendadosWindow(false);
					removeEncomendarIntro();
					$("#bar1").hide();
					$("#bar2").hide();
					$("#bar4").hide();
					$("#bar5").hide();
					$("#agenda").css("left","320px");
					$("#frigWindow").fadeIn(300);
					$("#frig-window-top").fadeIn(300);
					$("#agenda").text("Encomendar");
					$("#icon3").attr("src", "./media/shoppingIcon.png");
					$("#blueprint").fadeOut(100);
				}, 450);
				$(".expander").animate({ height: 80}, 400);
				setTimeout( function(){
					$("#agenda").fadeIn(300);
				}, 700);
			}, 0);
		}
	});

/*1111111111111111111111111111111111111111111111111111111111111111111111111111*/
	$('#icon1').click(function(){
		if (menu==0){
			menu=3;
			$("#menu-info").fadeOut(200, function(){
				$("#menu-info").text("Home > Frigorífico");
				$("#menu-info").fadeIn(200);
			})
			$("h3").fadeOut(200);
			$(".expander").animate({height:235}, 400)
			$("#main-icon").addClass("animate");
			$("#blueprint").fadeOut(300);
			$("#random-message-box").fadeOut(200);
			setTimeout(function(){
				$("#main-icon").attr("src", "./media/return.png");
				$("#main-icon").removeClass("animate");
				setTimeout(function(){
					$("#bar1").hide();
					$("#bar2").hide();
					$("#bar4").hide();
					$("#bar5").hide();
					$("#frig-window-top").fadeIn(300);
					$("#frigWindow").fadeIn(300);
					$("#agenda").css("left","320px");
					$("#agenda").text("Encomendar");
					$("#icon3").attr("src", "./media/shoppingIcon.png");
				}, 300);
				$(".expander").animate({ height: 80}, 400);
				setTimeout( function(){
					$("#agenda").fadeIn(300);
				}, 500);
			}, 100);

		}else if (menu==2){
			document.getElementById("temperatura").addEventListener("input", function(){
				var tempAtual = document.getElementById("temperatura").value;
				document.getElementById("temperaturaValor").innerHTML = tempAtual + "ºC";
			});
			retractProgWindow();
			setTimeout(function(){
				$("#add-banho").fadeIn(300, removeAgendaIntro());
			}, 200);
			$("#add-cafe").fadeOut(300);
			$("#add-estores").fadeOut(300);
			$("#add-musica").fadeOut(300);
			$("#add-alarme").fadeOut(300);
		} if (menu==4){
			retractEncomendadosWindow();
			setTimeout(function(){
				$("#lat-top").fadeIn(300);
				$("#laticineosWindow").fadeIn(300, removeEncomendarIntro());
			}, 200);
			$("#cereaisWindow").fadeOut(200);
			$("#bebidasWindow").fadeOut(200);
			$("#frescosWindow").fadeOut(200);
			$("#outrosWindow").fadeOut(200);
			//
			$("#cereais-top").fadeOut(200);
			$("#beb-top").fadeOut(200);
			$("#frescos-top").fadeOut(200);
			$("#outros-top").fadeOut(200);
			$("#help-mess").fadeOut(100);
		};
	});

/*2222222222222222222222222222222222222222222222222222222222222222222222222222*/

	$('#icon2').click(function(){
		if (menu==0){
			$("#help-background").fadeIn(200);
			$("#devel-box").fadeIn(200);

		} else if (menu==1){
			$('#agua').toggle(function(){
				$(this).fadeOut(200, function(){
					$(this).text('fechar');
					$(this).fadeIn(200);
				});
			},function(){
				$(this).fadeOut(200, function(){
					$(this).text('Gastos');
					$(this).fadeIn(200);
				});
			});
		} else if (menu==2) {
			retractProgWindow();
			setTimeout(function(){
				$("#add-cafe").fadeIn(300, removeAgendaIntro());
			}, 200);
			$("#add-banho").fadeOut(300);
			$("#add-estores").fadeOut(300);
			$("#add-musica").fadeOut(300);
			$("#add-alarme").fadeOut(300);
		} if (menu==4){
			retractEncomendadosWindow();
			setTimeout(function(){
				$("#cereais-top").fadeIn(300);
				$("#cereaisWindow").fadeIn(300, removeEncomendarIntro());
			}, 200);
			$("#laticineosWindow").fadeOut(200);
			$("#bebidasWindow").fadeOut(200);
			$("#frescosWindow").fadeOut(200);
			$("#outrosWindow").fadeOut(200);
			//
			$("#lat-top").fadeOut(200);
			$("#beb-top").fadeOut(200);
			$("#frescos-top").fadeOut(200);
			$("#outros-top").fadeOut(200);
			$("#help-mess").fadeOut(100);
		};
	});

/*33333333333333333333333333333333333333333333333333333333333333333333333333*/
	$('#icon3').click(function(){
		if (menu==0){
			menu=2;
			$("#random-message-box").fadeOut(200);
			$("#menu-info").fadeOut(200, function(){
				$("#menu-info").text("Home > Agenda");
				$("#menu-info").fadeIn(200);
			});
			$("h3").fadeOut(300);
			$(".expander").animate({height:235}, 400)
			$("#main-icon").addClass("animate");
			$("#blueprint").fadeOut(300);
			setTimeout(function(){
				$("#main-icon").attr("src", "./media/return.png");
				$("#main-icon").removeClass("animate");
				$("#prog-window").fadeIn(300);
				var h = $("#prog-window").height();
				if (h == 400){
					$("#addto-prog-window").fadeIn(300);
				};
				setTimeout(function(){
					$("#eletro").text("Banho")
					$("#agua").text("Café");
					$("#agenda").text("Estores");
					$("#luz").text("Música");
					$("#limpeza").text("Alarme");
					$("#icon1").attr("src", "./media/waterIcon.png");
					$("#icon2").attr("src", "./media/drinksIcon.png");
					$("#icon3").attr("src", "./media/estoresIcon.png");
					$("#icon4").attr("src", "./media/musicIcon.png");
					$("#icon5").attr("src", "./media/alarmIcon.png");
					$("#bg1").css("background-color", "#f5a555");
					$("#bg2").css("background-color", "#de8f40");
					$("#bg3").css("background-color", "#e08529");
					$("#bg4").css("background-color", "#de8f40");
					$("#bg5").css("background-color", "#f5a555");
				}, 300);
	      $(".expander").animate({ height:0}, 400);
				setTimeout( function(){
					$("#eletro").fadeIn(300);
					$("#agua").fadeIn(300);
					$("#agenda").fadeIn(300);
					$("#luz").fadeIn(300);
					$("#limpeza").fadeIn(300);
				}, 500);
			}, 100);

		} else if (menu==1){
			var1=0;
			var2=0;
			var3=0;
			var4=0;
			var5=0;
			var6=0;
			var7=0;
			mudarLuz(var1, "#percent1", "slider1", "#wc-luz", "#wc-butt", false);
			mudarLuz(var2, "#percent3", "slider3", "#quartoP-luz", "#quartoP-butt", false);
			mudarLuz(var3, "#percent2", "slider2", "#corredor-luz", "#corredor-butt", false);
			mudarLuz(var4, "#percent4", "slider4", "#quartoG-luz", "#quartoG-butt", false);
			mudarLuz(var5, "#percent5", "slider5", "#cozinha-luz", "#cozinha-butt", false);
			mudarLuz(var6, "#percent6", "slider6", "#hall-luz", "#hall-butt", false);
			mudarLuz(var7, "#percent7", "slider7", "#sala-luz", "#sala-butt", false);

		} else if (menu==2){
			retractProgWindow();
			setTimeout(function(){
				$("#add-estores").fadeIn(300, removeAgendaIntro());
			}, 200);
			$("#add-banho").fadeOut(300);
			$("#add-cafe").fadeOut(300);
			$("#add-musica").fadeOut(300);
			$("#add-alarme").fadeOut(300);
		} else if (menu==3){
			menu=4;
			$("#menu-info").fadeOut(200, function(){
				$("#menu-info").text("Home > Frigorifico > Encomendar");
				$("#menu-info").fadeIn(200);
			});
			$("h3").fadeOut(200);
			$("#main-icon").addClass("animate");
			setTimeout(function(){
				$("#frigWindow").fadeOut(200);
				$("#frig-window-top").fadeOut(200);
				$(".expander").animate({height:235},400);
				$("#main-icon").removeClass("animate");
				setTimeout(function(){;
					$("#encomendarWindow").fadeIn(300);
					$("#encomendados-window").fadeIn(300);
					$("#cesto-top").fadeIn(300);
					$("#bar1").show();
					$("#bar2").show();
					$("#bar3").show();
					$("#bar4").show();
					$("#bar5").show();
					$("#eletro").text("Laticíneos");
					$("#agua").text("Cereais");
					$("#agenda").text("Bebidas");
					$("#luz").text("Frescos");
					$("#limpeza").text("Outros");
					$("#agenda").css("left","400px");
					$("#icon1").attr("src", "./media/milk.png");
					$("#icon2").attr("src", "./media/cereal.png");
					$("#icon3").attr("src", "./media/cola.png");
					$("#icon4").attr("src", "./media/diet.png");
					$("#icon5").attr("src", "./media/outros.png");
				}, 450);
				$(".expander").animate({height:0},400);
				setTimeout( function(){
					$("h3").fadeIn(300);
				}, 700);
			}, 200);
		} else if (menu==4){
			retractEncomendadosWindow();
			setTimeout(function(){
				$("#beb-top").fadeIn(300);
				$("#bebidasWindow").fadeIn(300, removeEncomendarIntro());
			}, 200);
			$("#cereaisWindow").fadeOut(200);
			$("#laticineosWindow").fadeOut(200);
			$("#frescosWindow").fadeOut(200);
			$("#outrosWindow").fadeOut(200);
			//
			$("#lat-top").fadeOut(200);
			$("#cereais-top").fadeOut(200);
			$("#frescos-top").fadeOut(200);
			$("#outros-top").fadeOut(200);
			$("#help-mess").fadeOut(100);
		};
	});


/*4444444444444444444444444444444444444444444444444444444444444444444444444444*/
	$('#icon4').click(function(){
		if (menu==0){

			menu=1;
			$("#menu-info").fadeOut(200, function(){
				$("#menu-info").text("Home > Luzes");
				$("#menu-info").fadeIn(200);
			});
			$("#blueprint").addClass("topview");
			$("h3").fadeOut(300);
			$(".expander").animate({height:235}, 400)
			$("#main-icon").addClass("animate");
			$("#random-message-box").fadeOut(200);
			setTimeout(function(){
				$("#main-icon").attr("src", "./media/return.png");
				$("#main-icon").removeClass("animate");
				setTimeout(function(){
					$("#bar1").hide();
					$("#bar2").hide();
					$("#bar4").hide();
					$("#bar5").hide();
					$("#agenda").css("left","320px");
					$("#agenda").text("Desligar Tudo");
					$("#icon3").attr("src", "./media/allOff.png");
				}, 300);
				$(".expander").animate({ height: 80}, 400);
				setTimeout( function(){
					$("#agenda").fadeIn(300);
				}, 500);
			}, 100);
			setTimeout(function(){
				$("#buttons").fadeIn(700);
			}, 400);

			$(".close-luzes-help").click(function(){
				$("#help-luzes-box").addClass("del");
				setTimeout(function(){
					$("#help-luzes-box").remove();
				}, 600);
			});

		} else if (menu==2) {
			retractProgWindow();
			setTimeout(function(){
				$("#add-musica").fadeIn(300, removeAgendaIntro());
			}, 200);
			$("#add-banho").fadeOut(300);
			$("#add-cafe").fadeOut(300);
			$("#add-estores").fadeOut(300);
			$("#add-alarme").fadeOut(300);

		} else if (menu==4){
			retractEncomendadosWindow();
			setTimeout(function(){
				$("#frescos-top").fadeIn(300);
				$("#frescosWindow").fadeIn(300, removeEncomendarIntro());
			}, 200);
			$("#cereaisWindow").fadeOut(200);
			$("#laticineosWindow").fadeOut(200);
			$("#bebidasWindow").fadeOut(200);
			$("#outrosWindow").fadeOut(200);
			//
			$("#lat-top").fadeOut(200);
			$("#cereais-top").fadeOut(200);
			$("#beb-top").fadeOut(200);
			$("#outros-top").fadeOut(200);
			$("#help-mess").fadeOut(100);
		};
	});


/*5555555555555555555555555555555555555555555555555555555555555555555555555555*/

	$('#icon5').click(function(){
		if (menu==0){
			$("#help-background").fadeIn(200);
			$("#devel-box").fadeIn(200);

		} else if (menu==2){
			retractProgWindow();
			setTimeout(function(){
				$("#add-alarme").fadeIn(300, removeAgendaIntro());
			}, 200);
			$("#add-banho").fadeOut(300);
			$("#add-cafe").fadeOut(300);
			$("#add-estores").fadeOut(300);
			$("#add-musica").fadeOut(300);

		} else if (menu==4){
			retractEncomendadosWindow();
			setTimeout(function(){
				$("#outros-top").fadeIn(300);
				$("#outrosWindow").fadeIn(300, removeEncomendarIntro());
			}, 200);
			$("#cereaisWindow").fadeOut(200);
			$("#laticineosWindow").fadeOut(200);
			$("#bebidasWindow").fadeOut(200);
			$("#frescosWindow").fadeOut(200);
			//
			$("#lat-top").fadeOut(200);
			$("#cereais-top").fadeOut(200);
			$("#beb-top").fadeOut(200);
			$("#frescos-top").fadeOut(200);
			$("#help-mess").fadeOut(100);
		}
	});

/*-------------------------------OUTRAS---------------------------------------*/
	function mudarLuz(varN, percentN, sliderN, roomLuz, roomButt, fadeIN) {
		$(roomLuz).css('background-color', 'rgba(226,160,54,'+ String(varN/100) +')');
		if (fadeIN) {
			$(roomButt).fadeIn(100);
			document.getElementById(sliderN).value = varN;
			$(percentN).text(varN + "%");
		} else{
			$(roomButt).fadeOut(100, function(){
				document.getElementById(sliderN).value = varN;
				$(percentN).text(varN + "%");
			});
		};
	};

	$('#wc').click(function(){
		if( menu==1){
			if (var1==0){
				if (storedVar1==0) {
					var1=100;
				} else {
					var1=storedVar1;
				};
				mudarLuz(var1, "#percent1", "slider1", "#wc-luz", "#wc-butt", true);
			} else {
				storedVar1=var1;
				var1=0;
				mudarLuz(var1, "#percent1", "slider1", "#wc-luz", "#wc-butt", false);
			};
		};
	});

	$('#quartoP').click(function(){
		if( menu==1){
			if (var2==0){
				if (storedVar2==0) {
					var2=100;
				} else {
					var2=storedVar2;
				};
				mudarLuz(var2, "#percent2", "slider2", "#quartoP-luz", "#quartoP-butt", true);
			} else {
				storedVar2=var2;
				var2=0;
				mudarLuz(var2, "#percent2", "slider2", "#quartoP-luz", "#quartoP-butt", false);
			};
		};
	});

	$('#corredor').click(function(){
		if( menu==1){
			if (var3==0){
				if (storedVar3==0) {
					var3=100;
				} else {
					var3=storedVar3;
				};
				mudarLuz(var3, "#percent3", "slider3", "#corredor-luz", "#corredor-butt", true);
			} else {
				storedVar3=var3;
				var3=0;
				mudarLuz(var3, "#percent3", "slider3", "#corredor-luz", "#corredor-butt", false);
			};
		};
	});

	$('#quartoG').click(function(){
		if( menu==1){
			if (var4==0){
				if (storedVar4==0) {
					var4=100;
				} else {
					var4=storedVar4;
				};
				mudarLuz(var4, "#percent4", "slider4", "#quartoG-luz", "#quartoG-butt", true);
			} else {
				storedVar4=var4;
				var4=0;
				mudarLuz(var4, "#percent4", "slider4", "#quartoG-luz", "#quartoG-butt", false);
			};
		};
	});

	$('#cozinha').click(function(){
		if( menu==1){
			if (var5==0){
				if (storedVar5==0) {
					var5=100;
				} else {
					var5=storedVar5;
				};
				mudarLuz(var5, "#percent5", "slider5", "#cozinha-luz", "#cozinha-butt", true);
			} else {
				storedVar5=var5;
				var5=0;
				mudarLuz(var5, "#percent5", "slider5", "#cozinha-luz", "#cozinha-butt", false);
			};
		};
	});

	$('#hall').click(function(){
		if( menu==1){
			if (var6==0){
				if (storedVar6==0) {
					var6=100;
				} else {
					var6=storedVar6;
				};
				mudarLuz(var6, "#percent6", "slider6", "#hall-luz", "#hall-butt", true);
			} else {
				storedVar6=var6;
				var6=0;
				mudarLuz(var6, "#percent6", "slider6", "#hall-luz", "#hall-butt", false);
			};
		};
	});

	$('#sala').click(function(){
		if( menu==1){
			if (var7==0){
				if (storedVar7==0) {
					var7=100;
				} else {
					var7=storedVar7;
				};
				mudarLuz(var7, "#percent7", "slider7", "#sala-luz", "#sala-butt", true);
			} else {
				storedVar7=var7;
				var7=0;
				mudarLuz(var7, "#percent7", "slider7", "#sala-luz", "#sala-butt", false);
			};
		};
	});

	$('#slider1').on('input', function(){
		var1 = document.getElementById("slider1").value;
		$("#percent1").text(var1 + "%");
		$("#wc-luz").css('background-color', 'rgba(226,160,54,'+ String(var1/100) +')');
		if (var1==0){
			$("#wc-butt").fadeOut(100);
			$("#slider1").val(10);
		} else {
			storedVar1 = var1;
		};
	});

	$('#slider2').on('input', function(){
		var2 = document.getElementById("slider2").value;
		$("#percent2").text(var2 + "%");
		$("#quartoP-luz").css('background-color', 'rgba(226,160,54,'+ String(var2/100) +')');
		if (var2==0){
			$("#quartoP-butt").fadeOut(100);
			$("#slider2").val(10);
		} else {
			storedVar2 = var2;
		};
	});

	$('#slider3').on('input', function(){
		var3 = document.getElementById("slider3").value;
		$("#percent3").text(var3 + "%");
		$("#corredor-luz").css('background-color', 'rgba(226,160,54,'+ String(var3/100) +')');
		if (var3==0){
			$("#corredor-butt").fadeOut(100);
			$("#slider3").val(10);
		} else {
			storedVar3 = var3;
		};
	});

	$('#slider4').on('input', function(){
		var4 = document.getElementById("slider4").value;
		$("#percent4").text(var4 + "%");
		$("#quartoG-luz").css('background-color', 'rgba(226,160,54,'+ String(var4/100) +')');
		if (var4==0){
			$("#quartoG-butt").fadeOut(100);
			$("#slider4").val(10);
		} else {
			storedVar4 = var4;
		};
	});

	$('#slider5').on('input', function(){
		var5 = document.getElementById("slider5").value;
		$("#percent5").text(var5 + "%");
		$("#cozinha-luz").css('background-color', 'rgba(226,160,54,'+ String(var5/100) +')');
		if (var5==0){
			$("#cozinha-butt").fadeOut(100);
			$("#slider5").val(10);
		} else {
			storedVar5 = var5;
		};
	});

	$('#slider6').on('input', function(){
		var6 = document.getElementById("slider6").value;
		$("#percent6").text(var6 + "%");
		$("#hall-luz").css('background-color', 'rgba(226,160,54,'+ String(var6/100) +')');
		if (var6==0){
			$("#hall-butt").fadeOut(100);
			$("#slider6").val(10);
		} else {
			storedVar6 = var6;
		};
	});

	$('#slider7').on('input', function(){
		var7 = document.getElementById("slider7").value;
		$("#percent7").text(var7 + "%");
		$("#sala-luz").css('background-color', 'rgba(226,160,54,'+ String(var7/100) +')');
		if (var7==0){
			$("#sala-butt").fadeOut(100);
			$("#slider7").val(10);
		} else {
			storedVar7 = var7;
		};
	});

	var nomeB = document.getElementById("nome-bebida");
	$('#expresso').click(function(){
		nomeB.innerHTML = "Expresso";
		setTimeout(function(){
			$('#expresso').addClass('hide');
			$('#descafeinado').removeClass('hide');
			$('#capuccino').removeClass('hide');
			$('#cha').removeClass('hide');
		}, 500);
	});
	$('#descafeinado').click(function(){
		nomeB.innerHTML = "Decaf";
		setTimeout(function(){
			$('#descafeinado').addClass('hide');
			$('#expresso').removeClass('hide');
			$('#capuccino').removeClass('hide');
			$('#cha').removeClass('hide');
		}, 500);
	});
	$('#capuccino').click(function(){
		nomeB.innerHTML = "Capuccino";
		setTimeout(function(){
			$('#capuccino').addClass('hide');
			$('#descafeinado').removeClass('hide');
			$('#expresso').removeClass('hide');
			$('#cha').removeClass('hide');
		}, 500);
	});
	$('#cha').click(function(){
		nomeB.innerHTML = "Chá";
		setTimeout(function(){
			$('#cha').addClass('hide');
			$('#descafeinado').removeClass('hide');
			$('#capuccino').removeClass('hide');
			$('#expresso').removeClass('hide');
		}, 500);
	});

	$('#abrir').click(function(){
		$(this).addClass('selected-e');
		$('#fechar').removeClass('selected-e');
	});
	$('#fechar').click(function(){
		$(this).addClass('selected-e');
		$('#abrir').removeClass('selected-e');
	});

	var nomeM = document.getElementById("nome-musica");
	$('#pop').click(function(){
		nomeM.innerHTML = "Pop";
		setTimeout(function(){
			$('#pop').addClass('hide');
			$('#hiphop').removeClass('hide');
			$('#lofi').removeClass('hide');
			$('#rock').removeClass('hide');
		}, 500);
	});
	$('#hiphop').click(function(){
		nomeM.innerHTML = "Hip Hop";
		setTimeout(function(){
			$('#hiphop').addClass('hide');
			$('#pop').removeClass('hide');
			$('#lofi').removeClass('hide');
			$('#rock').removeClass('hide');
		}, 500);
	});
	$('#lofi').click(function(){
		nomeM.innerHTML = "Lo-fi";
		setTimeout(function(){
			$('#lofi').addClass('hide');
			$('#hiphop').removeClass('hide');
			$('#pop').removeClass('hide');
			$('#rock').removeClass('hide');
		}, 500);
	});
	$('#rock').click(function(){
		nomeM.innerHTML = "Rock";
		setTimeout(function(){
			$('#rock').addClass('hide');
			$('#hiphop').removeClass('hide');
			$('#lofi').removeClass('hide');
			$('#pop').removeClass('hide');
		}, 500);
	});

	$('#message-input').on('input',function(e){
		var message = $('#message-input').val();
    if (message==""){
			$('#ok5').hide();
		} else{
			$('#ok5').show();
		}
		if (message.length>10){
			$('#message-input').addClass("big");
		} else{
			$('#message-input').removeClass("big");
		}
	});

	//agendar atividades:

	$("#dropdown-bebida").click(function(){
		$("#dropdown-bebida").toggleClass("opened");
	});

	$("#dropdown-musica").click(function(){
		$("#dropdown-musica").toggleClass("opened");
	});

	$("#nome-acao").click(function(){
		var acao = $(this).text();
		if (acao=="Abrir"){
			$("#nome-acao").text("Fechar");
		} else {
			$("#nome-acao").text("Abrir");
		};
	});

	var progWindow=document.getElementById('prog-window');

	function expandProgWindow(novaAtiv){
		$("#addto-prog-window").fadeOut(200);
		setTimeout(function(){
			 $("#prog-window").animate({top:110, height:555},400);
	 	}, 100);
		if (progWindow.childElementCount > 1 || novaAtiv){
 			$("#help-agenda2").fadeOut(300);
 		} else {
 			$("#help-agenda2").fadeIn(300);
 		};
 	};

	function retractProgWindow(){
		$("#prog-window").animate({top:265, height:400},400);
		$("#addto-prog-window").fadeIn(200);
 	};

	function removeAgendaIntro(){
		$("#help-agenda1").fadeOut(10);
		$("#start-top").fadeOut(10);
		$("#addto-prog-window").css("background", "none");
	};

	$(".cancel").click(function(){
		$("#add-banho").fadeOut(300);
		$("#add-cafe").fadeOut(300);
		$("#add-estores").fadeOut(300);
		$("#add-musica").fadeOut(300);
		$("#add-alarme").fadeOut(300);
		expandProgWindow(false);
	});

	function appendNewAtiv(newAtiv, ativID){
		var children = $("#prog-window").children();
		var appended = false;
    for ( var i = 0; i < children.length; i++){
			var childID = children[i].id;
			if (ativID < childID && !(appended)){
				$("#" + childID).before(newAtiv);
				$(".new").fadeIn(300);
				appended=true;
			};
    };
		if (!(appended)){
			progWindow.appendChild(newAtiv);
			$(".new").fadeIn(300);
		};
	};

	function ativBoxConstruct(ativID, ativTime, ativDate, ativOther, boxType){
		var today = new Date();
		var dd = today.getDate();
		var tomorrowDay = parseInt(dd) + 1;
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();
		if(dd<10) {
		    dd = '0'+dd;
		}
		if(tomorrowDay<10) {
		    tomorrowDay = '0'+ String(tomorrowDay);
		}
		if(mm<10) {
		    mm = '0'+mm;
		}
		today = dd + '-' + mm + '-' + yyyy;
		var tomorrow = tomorrowDay + '-' + mm + '-' + yyyy;

		var newAtiv = document.createElement("div");
		newAtiv.setAttribute("class", "agenda-box new");
		newAtiv.setAttribute("id", ativID);
		var img = document.createElement("img");
		var data = document.createElement("p");
		var hora = document.createElement("p");
		var outro = document.createElement("p");
		var deleteButt = document.createElement("div");
		var deleteIcon = document.createElement("img");
		img.setAttribute("class", "agenda-img");
		deleteButt.setAttribute("class", "delete-butt");
		deleteIcon.setAttribute("src", "./media/delete.png");
		deleteIcon.setAttribute("class", "delete-icon");
		hora.setAttribute("class", "box-hora");
		data.setAttribute("class", "box-hora");

		if (ativDate == today){
			data.innerHTML = "Hoje";
		} else if (ativDate == tomorrow){
			data.innerHTML = "Amanhã";
		} else {
			data.innerHTML = ativDate;
		}
		hora.innerHTML = ativTime;
		if (boxType =="banho"){
			outro.innerHTML = "Preparar um banho a " + ativOther + "ºC";
			img.setAttribute("src", "./media/bat.png");
		} else if (boxType =="bebida"){
			outro.innerHTML = "Preparar um " + ativOther;
			img.setAttribute("src", "./media/beb.png");
		} else if (boxType =="estores"){
			outro.innerHTML = ativOther + " os estores";
			img.setAttribute("src", "./media/est.png");
		} else if (boxType =="musica"){
			outro.innerHTML = "Tocar playlist de " + ativOther;
			img.setAttribute("src", "./media/mus.png");
		} else if (boxType =="alarme"){
			outro.innerHTML = "Alarmar '" + ativOther + "'";
			img.setAttribute("src", "./media/alr.png");
		}
		deleteButt.appendChild(deleteIcon);
		newAtiv.appendChild(deleteButt);
		newAtiv.appendChild(img);
		newAtiv.appendChild(hora);
		newAtiv.appendChild(data);
		newAtiv.appendChild(outro);
		appendNewAtiv(newAtiv, ativID);
		expandProgWindow(true);
	}

	$("#ok1").click(function(){
		console.log("WTF");
		$("#add-banho").fadeOut(300);
		var temp = $("#temperatura").val();
		var ativTime = $("#timepicker-b").val();
		var ativDate = $("#datepicker-b").val();
		var ativID = Date.parse(ativDate + " " + ativTime);
		ativBoxConstruct(ativID, ativTime, ativDate, temp, "banho")
	});

	$("#ok2").click(function(){
		$("#add-cafe").fadeOut(300);
		var ativDrink = $("#nome-bebida").text();
		var ativTime = $("#timepicker-c").val();
		var ativDate = $("#datepicker-c").val();
		var ativID = Date.parse(ativDate + " " + ativTime);
		ativBoxConstruct(ativID, ativTime, ativDate, ativDrink, "bebida")
	});

	$("#ok3").click(function(){
		$("#add-estores").fadeOut(300);
		var ativAcao = $("#nome-acao").text();
		var ativTime = $("#timepicker-e").val();
		var ativDate = $("#datepicker-e").val();
		var ativID = Date.parse(ativDate + " " + ativTime);
		ativBoxConstruct(ativID, ativTime, ativDate, ativAcao, "estores")
	});

	$("#ok4").click(function(){
		$("#add-musica").fadeOut(300);
		var ativPlay = $("#nome-musica").text();
		var ativTime = $("#timepicker-m").val();
		var ativDate = $("#datepicker-m").val();
		var ativID = Date.parse(ativDate + " " + ativTime);
		ativBoxConstruct(ativID, ativTime, ativDate, ativPlay, "musica")
	});

	$("#ok5").click(function(){
		$("#add-alarme").fadeOut(300);
		var ativMens = $("#message-input").val();
		var ativTime = $("#timepicker-a").val();
		var ativDate = $("#datepicker-a").val();
		var ativID = Date.parse(ativDate + " " + ativTime);
		ativBoxConstruct(ativID, ativTime, ativDate, ativMens, "alarme")
	});

	/*--------------------Figorifico-----------------------*/

	var encomendarWindow=document.getElementById('encomendarWindow');
	var encomendadosWindow=document.getElementById('encomendados-window');

	function expandEncomendadosWindow(novoProd){
		$("#encomendarWindow").fadeOut(200);
		$("#laticineosWindow").fadeOut(200);
		$("#cereaisWindow").fadeOut(200);
		$("#bebidasWindow").fadeOut(200);
		$("#frescosWindow").fadeOut(200);
		$("#outrosWindow").fadeOut(200);
		$("#lat-top").fadeOut(200);
		$("#cereais-top").fadeOut(200);
		$("#beb-top").fadeOut(200);
		$("#frescos-top").fadeOut(200);
		$("#outros-top").fadeOut(200);

		setTimeout(function(){
			$("#encomendados-window").animate({top:150, height:530},400);
			$("#cesto-top").animate({top:100},400);
		}, 100);
		if (encomendadosWindow.childElementCount > 1 || novoProd){
			$("#encomendados-mess").fadeOut(300);
		} else {
			$("#encomendados-mess").fadeIn(300);
		};
	};

	function retractEncomendadosWindow(){
		$("#encomendados-window").animate({top:450, height:230},400);
		$("#cesto-top").animate({top:400},400);
		$("#encomendarWindow").fadeIn(200);
	};

	function removeEncomendarIntro(){
		$("#help-mess").fadeOut(10);
		$("#encomendar-window-top").fadeOut(10);
		$("#encomendarWindow").css("background", "none");
	};

	$(".frig-cancel").click(function(){
		$("#laticineosWindow").fadeOut(200);
		$("#cereaisWindow").fadeOut(200);
		$("#bebidasWindow").fadeOut(200);
		$("#frescosWindow").fadeOut(200);
		$("#outrosWindow").fadeOut(200);
		expandEncomendadosWindow(false);
	});

	$("#finalizar-enc").click(function(){
		$("#help-background").fadeIn(200);
		$("#finalizar-cesto").fadeIn(200);
	});

	$("#cancelar-enc").click(function(){
		$("#help-background").fadeIn(200);
		$("#cancelar-cesto").fadeIn(200);
	});

	$("#finalizar-enc").click(function(){
		$("#help-background").fadeIn(200);
		$("#finalizar-cesto").fadeIn(200);
	});

	/*------FUNCOES------*/

	$(document).on('click', '.remover', function() {
		$(this).parent().fadeOut(200, function(){
			$(this).remove();
		});
		if (document.getElementById('encomendados-window').childElementCount == 2){
			$("#encomendados-mess").fadeIn(300);
			$("#finalizar-enc").fadeOut(100);
			$("#cancelar-enc").fadeOut(100);
		};
	});

	function clickEncomendarButt(s,n){
		$("#enc-"+s+"-"+n).click(function(){
			squize($("#img-"+s+"-"+n), false);
			$(this).hide();
			setTimeout(function(){
				$("#qbox-"+s+"-"+n).fadeIn(150);
			}, 150);
		});
	};

	function clickMinus(s,n, p){
		$("#minus-"+s+"-"+n).click(function(){
			var prodq = parseInt($("#quant-"+s+"-"+n).text());
			if (prodq > 1){
				prodq-=1;
				$("#quant-"+s+"-"+n).html(prodq);
				$("#plus-"+s+"-"+n).css("opacity", "1");
				var preco = prodq * p;
				preco =  Math.round(preco * 100) / 100;
				$("#prec-"+s+"-"+n).html(preco + "€");
			}
			if (prodq == 1){
				$("#minus-"+s+"-"+n).css("opacity", "0.5");
			};
		});
	};

	function clickPlus(s,n, p){
		$("#plus-"+s+"-"+n).click(function(){
			var prodq = parseInt($("#quant-"+s+"-"+n).text());
			if (prodq < 50){
				prodq+=1;
				$("#quant-"+s+"-"+n).html(prodq);
				$("#minus-"+s+"-"+n).css("opacity", "1");
				var preco = prodq * p;
				preco =  Math.round(preco * 100) / 100;
				$("#prec-"+s+"-"+n).html(preco + "€");
			};
			if (prodq == 50){
				$("#plus-"+s+"-"+n).css("opacity", "0.5");
			};
		});
	};

	function clickCancel(s,n, p){
		$("#cancel-"+s+"-"+n).click(function(){
			$("#prec-"+s+"-"+n).html(p + "€");
			$("#quant-"+s+"-"+n).html("1");
			$("#qbox-"+s+"-"+n).fadeOut(150, function(){
				squize($("#img-"+s+"-"+n), true);
				$("#enc-"+s+"-"+n).show();
			});
		});
	};

	function clickConfirm(s,n,p){
		$("#confirm-"+s+"-"+n).click(function(){
			var quantidade = parseInt($("#quant-"+s+"-"+n).text());
			var preco = $("#prec-"+s+"-"+n).text();

			$("#prec-"+s+"-"+n).html(p + "€");
			$("#quant-"+s+"-"+n).html("1");
			$("#qbox-"+s+"-"+n).fadeOut(150, function(){
				squize($("#img-"+s+"-"+n), true);
				$("#enc-"+s+"-"+n).show();
			});
			if(document.getElementById("out-"+s+"-"+n)==null){
				var div = document.createElement("div");
				div.setAttribute("class", "produto margin-right");
				div.setAttribute("id", "out-"+s+"-"+n);
				var img = document.createElement("img");
				img.setAttribute("class", "img-produto");
				img.setAttribute("src", $("#img-"+s+"-"+n).attr('src'));
				var quantidadeTotal = document.createElement("p");
				quantidadeTotal.setAttribute("class", "nome-p");
				quantidadeTotal.setAttribute("id", "outQ-"+s+"-"+n);
				quantidadeTotal.innerHTML = quantidade + " uni";
				var precoTotal = document.createElement("p");
				precoTotal.setAttribute("class", "preco");
				precoTotal.setAttribute("id", "outP-"+s+"-"+n);
				precoTotal.innerHTML= preco;
				var remover = document.createElement("p");
				remover.setAttribute("class", "remover");
				remover.innerHTML= "Apagar";
				div.appendChild(img);
				div.appendChild(quantidadeTotal);
				div.appendChild(precoTotal);
				div.appendChild(remover);
				document.getElementById("encomendados-window").appendChild(div)
				$("#encomendados-mess").fadeOut(300);
				$("#finalizar-enc").fadeIn(100);
				$("#cancelar-enc").fadeIn(100);
			} else {
				var newQuantidade = quantidade + parseInt($("#outQ-"+s+"-"+n).text().replace('/uni','/'));
				$("#outQ-"+s+"-"+n).html(newQuantidade + " uni");
				var newPreco = newQuantidade * p;
				newPreco = Math.round(newPreco * 100) / 100;
				$("#outP-"+s+"-"+n).html(newPreco + "€");
			};
		});
	};


	/* Laticineos */

	clickEncomendarButt("l","1");
	clickMinus("l","1", 1.99);
	clickPlus("l","1", 1.99);
	clickCancel("l","1", 1.99);
	clickConfirm("l","1", 1.99);

	clickEncomendarButt("l","2");
	clickMinus("l","2", 0.56);
	clickPlus("l","2", 0.56);
	clickCancel("l","2", 0.56);
	clickConfirm("l","2", 0.56);

	clickEncomendarButt("l","3");
	clickMinus("l","3", 2);
	clickPlus("l","3", 2);
	clickCancel("l","3", 2);
	clickConfirm("l","3", 2);

	clickEncomendarButt("l","4");
	clickMinus("l","4", 0.45);
	clickPlus("l","4", 0.45);
	clickCancel("l","4", 0.45);
	clickConfirm("l","4", 0.45);

	clickEncomendarButt("l","5");
	clickMinus("l","5", 1);
	clickPlus("l","5", 1);
	clickCancel("l","5", 1);
	clickConfirm("l","5", 1);

	clickEncomendarButt("l","6");
	clickMinus("l","6", 0.95);
	clickPlus("l","6", 0.95);
	clickCancel("l","6", 0.95);
	clickConfirm("l","6", 0.95);

	/* Cereais */

	clickEncomendarButt("c","1");
	clickMinus("c","1", 2.30);
	clickPlus("c","1", 2.30);
	clickCancel("c","1", 2.30);
	clickConfirm("c","1", 2.30);

	clickEncomendarButt("c","2");
	clickMinus("c","2", 0.36);
	clickPlus("c","2", 0.36);
	clickCancel("c","2", 0.36);
	clickConfirm("c","2", 0.36);

	clickEncomendarButt("c","3");
	clickMinus("c","3", 0.63);
	clickPlus("c","3",  0.63);
	clickCancel("c","3",  0.63);
	clickConfirm("c","3",  0.63);

	/* Bebidas */

	clickEncomendarButt("b","1");
	clickMinus("b","1", 1);
	clickPlus("b","1", 1);
	clickCancel("b","1", 1);
	clickConfirm("b","1", 1);

	clickEncomendarButt("b","2");
	clickMinus("b","2", 0.21);
	clickPlus("b","2", 0.21);
	clickCancel("b","2", 0.21);
	clickConfirm("b","2", 0.21);

	clickEncomendarButt("b","3");
	clickMinus("b","3", 0.86);
	clickPlus("b","3",  0.86);
	clickCancel("b","3",  0.86);
	clickConfirm("b","3",  0.86);

	/* Frescos */

	clickEncomendarButt("f","1");
	clickMinus("f","1", 2.32);
	clickPlus("f","1", 2.32);
	clickCancel("f","1", 2.32);
	clickConfirm("f","1", 2.32);

	clickEncomendarButt("f","2");
	clickMinus("f","2", 0.74);
	clickPlus("f","2", 0.74);
	clickCancel("f","2", 0.74);
	clickConfirm("f","2", 0.74);

	clickEncomendarButt("f","3");
	clickMinus("f","3", 3.29);
	clickPlus("f","3",  3.29);
	clickCancel("f","3",  3.29);
	clickConfirm("f","3",  3.29);

	/* Outros */

	clickEncomendarButt("o","1");
	clickMinus("o","1", 2);
	clickPlus("o","1", 2);
	clickCancel("o","1", 2);
	clickConfirm("o","1", 2);

	clickEncomendarButt("o","2");
	clickMinus("o","2", 1);
	clickPlus("o","2", 1);
	clickCancel("o","2", 1);
	clickConfirm("o","2", 1);

	clickEncomendarButt("o","3");
	clickMinus("o","3", 0.86);
	clickPlus("o","3",  0.86);
	clickCancel("o","3",  0.86);
	clickConfirm("o","3",  0.86);



	/*-------Cesto-------- */

	$("#delete-cesto").click(function(){
		$("#cancelar-cesto").fadeOut(200);
		$("#finalizar-cesto").fadeOut(200);
		$("#help-background").fadeOut(200);
		$("#main-help-box").fadeOut(200);
		var cesto = document.getElementById("encomendados-window");
		while (cesto.firstChild) {
		  cesto.removeChild(cesto.firstChild);
		};
		var h = document.createElement("h2");
		h.setAttribute("id", "encomendados-mess");
		h.innerHTML = "Não tem produtos no cesto"
		cesto.appendChild(h);
		$("#encomendados-mess").fadeIn(300);
		$("#finalizar-enc").fadeOut(100);
		$("#cancelar-enc").fadeOut(100);
	});

	$("#cancel-delete-cesto").click(function(){
		$("#finalizar-cesto").fadeOut(200);
		$("#cancelar-cesto").fadeOut(200);
		$("#help-background").fadeOut(200);
	});

	$("#cancel-enc-cesto").click(function(){
		$("#cancelar-cesto").fadeOut(200);
		$("#finalizar-cesto").fadeOut(200);
		$("#help-background").fadeOut(200);
	});

	$("#enc-cesto").click(function(){
		$(".help-box-text").fadeOut(200, function(){
			$("#enc-message").fadeIn(200, function(){
				setTimeout(function(){
					$("#cancelar-cesto").fadeOut(200);
					$("#finalizar-cesto").fadeOut(200);
					$("#help-background").fadeOut(200);
					$("#main-help-box").fadeOut(200);
					var cesto = document.getElementById("encomendados-window");
					while (cesto.firstChild) {
						cesto.removeChild(cesto.firstChild);
					};
					var h = document.createElement("h2");
					h.setAttribute("id", "encomendados-mess");
					h.innerHTML = "Não tem produtos no cesto"
					cesto.appendChild(h);
					$("#encomendados-mess").fadeIn(300);
					$("#finalizar-enc").fadeOut(100);
					$("#cancelar-enc").fadeOut(100);
				}, 800);
				setTimeout(function(){
					$(".help-box-text").fadeIn(200)
					$("#enc-message").fadeOut(200)
				}, 1000);
			});
		});
	});
	/*-------Message-------- */
	var num = 1;
	setInterval(function(){
		var change = true;
		if (num == 1 && change){
			$("#random-message").fadeOut(800, function(){
				$(this).html("Temperatura no interior 34ºC");
				$(this).fadeIn(800);
			});
			num=2;
			change = false;
		} else if (num == 2 && change){
			$("#random-message").fadeOut(800, function(){
				$(this).html("É tão bom estar em casa!");
				$(this).fadeIn(800);
			});
			num=3;
			change = false;
		} else if (num == 3 && change){
			$("#random-message").fadeOut(800, function(){
				$(this).html("Temperatura no exterior 11ºC");
				$(this).fadeIn(800);
			});
			num=4;
			change = false;
		} else if (num == 4 && change){
			$("#random-message").fadeOut(800, function(){
				$(this).html("Lar doce lar.");
				$(this).fadeIn(800);
			});
			num=1;
			change = false;
		};
	}, 4000);

});

$(document).on('click', '.delete-butt', function() {
	$(this).parent().fadeOut(200, function(){
		$(this).remove();
	});
	var progWindow=document.getElementById('prog-window');
	if (progWindow.childElementCount == 2){
		$("#help-agenda2").fadeIn(300);
	};
});

function squize(elem, is){
	if (is){
		elem.css('height','70');
	} else {
		elem.css('height','0');
	}
}
