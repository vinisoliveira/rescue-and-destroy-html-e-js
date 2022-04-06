function start() { // Inicio da função start()

	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");

	//Principais variáveis do jogo
		
	var jogo = {}

	var velocidade=5;
	var posicaoY = parseInt(Math.random() * 320);

	var TECLA = {
		W: 87,
		S: 83,
		ENTER: 13
		}
	
		jogo.pressionou = [];

		//Verifica se o usuário pressionou alguma tecla	
	
		$(document).keydown(function(e){
		jogo.pressionou[e.which] = true;
		});
	
	
		$(document).keyup(function(e){
		jogo.pressionou[e.which] = false;
		});
		
	//Game Loop

	jogo.timer = setInterval(loop,30);

	function loop() {

	moverfundo();
	moverjogador();
	moverinimigo1();

	} // Fim da função loop()

	//Função que movimenta o fundo do jogo
	
	function moverfundo() {
	
		esquerda = parseInt($("#fundoGame").css("background-position"));
		$("#fundoGame").css("background-position",esquerda-1);
		
		} // fim da função movefundo()

		function moverjogador() {
	
			if (jogo.pressionou[TECLA.W]) {
				var topo = parseInt($("#jogador").css("top"));
				$("#jogador").css("top",topo-10);

				if (topo<=0) {
		
					$("#jogador").css("top",topo+10);
				}
			
			}
			
			if (jogo.pressionou[TECLA.S]) {
				
				var topo = parseInt($("#jogador").css("top"));
				$("#jogador").css("top",topo+10);
				
				if (topo>=420) {	
					$("#jogador").css("top",topo-10);
						
				}
			}
			
			if (jogo.pressionou[TECLA.ENTER]) {
				
				//Chama função Disparo	
			}
		
			} // fim da função moverjogador()

			function moverinimigo1() {

				posicaoX = parseInt($("#inimigo1").css("left"));
				$("#inimigo1").css("left",posicaoX-velocidade);
				$("#inimigo1").css("top",posicaoY);
					
					if (posicaoX<=0) {
					posicaoY = parseInt(Math.random() * 334);
					$("#inimigo1").css("left",694);
					$("#inimigo1").css("top",posicaoY);
						
					}
			} //Fim da função moveinimigo1()

} // Fim da função start