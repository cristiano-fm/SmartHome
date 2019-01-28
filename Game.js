"use strict";

function loadingScreen() {
  var elem = document.getElementById("bar");
  var width = 1;
  var id = setInterval(frame, 0);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      $("#loading-screen").fadeOut();
    } else {
      width++;
      elem.style.width = width + '%';
    };
  };
};

window.onload = loadingScreen;

function bombs(){
  var size;

  var oneGameBoard=document.getElementById('game-board');
  var controlPanel=document.getElementById('panel');
  var welcomeText=document.getElementById('welcome-text');
  var singleplayerButton=document.getElementById('singleplayer');
  var multiplayerButton=document.getElementById('multiplayer');

  singleplayerButton.onclick = function(){sizeMenu('developed')};
  multiplayerButton.onclick = function(){sizeMenu('toDevelop')};

  function sizeMenu(state){
    $("#singleplayer").fadeOut(200, function() {$(this).remove()});
    $("#multiplayer").fadeOut(200, function() {$(this).remove()});
    $("#welcome-text").fadeOut(200);

    setTimeout(function() {

      var returnButton = document.createElement("a");
      returnButton.innerHTML = "Voltar atrás";
      returnButton.setAttribute("class", "button one color3 zoom");
      returnButton.setAttribute("id", "return-button");
      controlPanel.appendChild(returnButton);
      $("#return-button").hide();

      if (state == 'toDevelop'){
        welcomeText.childNodes[1].innerHTML = 'multiplayer brevemente disponível';
        welcomeText.childNodes[3].innerHTML = 'Ainda estamos a desenvolver este modo para ti';
        $("#welcome-text").hide();

      }else{
        var size10Button = document.createElement("a");
        size10Button.innerHTML = "10x10";
        size10Button.setAttribute("class", "button two color1 zoom");
        size10Button.setAttribute("id", "size10");
        controlPanel.appendChild(size10Button);
        $("#size10").hide();

        var customSizeButton = document.createElement("a");
        customSizeButton.innerHTML = "personaliza!";
        customSizeButton.setAttribute("class", "button right color2 zoom");
        customSizeButton.setAttribute("id", "custom-size");
        controlPanel.appendChild(customSizeButton);
        $("#custom-size").hide();

        welcomeText.childNodes[1].innerHTML = "Ótimo!";
        welcomeText.childNodes[3].innerHTML = "Escolhe o tamanho do teu tabuleiro";
        $("#welcome-text").hide();

        $("#size10").fadeIn(200);
        $("#custom-size").fadeIn(200);

        var size=0;
        var size10Button=document.getElementById('size10');
        var customSizeButton=document.getElementById('custom-size');

        size10Button.onclick = function(){
          var size=10;
          cleanPage();
          gamePlay(size);
        };

        customSizeButton.onclick = function(){
          welcomeText.childNodes[1].innerHTML = "atenção, maior é mais dificil!"
          welcomeText.childNodes[3].innerHTML = "Arrasta a barra e escolhe o tamanho do teu tabuleiro"
          customSizeButton.remove()

          var section = document.createElement("section");
          section.setAttribute("class", "three");
          var slider=document.createElement("input");
          slider.setAttribute("type","range");
          slider.setAttribute("min","10");
          slider.setAttribute("max","20");
          slider.setAttribute("value","15");
          slider.setAttribute("id","slider");
          var goButton=document.createElement("a");
          goButton.setAttribute("class","button right color2 zoom");
          goButton.setAttribute("id","go-button");
          goButton.innerHTML="15x15";
          $(document).on('change', '#slider', function() {
            $('#go-button').html($(this).val() + "x" + $(this).val());
          });
          $("#custom-size").fadeOut(200);
          $("#custom-size").remove();
          section.appendChild(goButton);
          $("#go-button").hide();
          $("#g0-button").fadeIn(200);
          section.appendChild(slider);
          $("#slider").hide();
          $("#slider").fadeIn(200);
          controlPanel.appendChild(section);

          goButton.onclick = function(){
            size = $('#slider').val();
            cleanPage();
            gamePlay(size);
          };
        };
      }
      $("#return-button").fadeIn(200);
      $("#welcome-text").fadeIn(200);

      var returnButton=document.getElementById('return-button');
      returnButton.onclick = function(){
        var size=15;
        cleanPage();
        reloadModeMenu();
      };

      function cleanPage() {
        $("#out").fadeOut(2800);
        $("#welcome-text").fadeOut(600);
        $("#return-button").fadeOut(600);
        $("#size10").fadeOut(600);
        $("#custom-size").fadeOut(600);
        $("#go-button").fadeOut(600);
        $("#slider").fadeOut(450);
      };
    }, 250);
  };

  function reloadModeMenu(){
    setTimeout(function(){
      var singleplayer = document.createElement("a");
      singleplayer.innerHTML = "Singleplayer";
      singleplayer.setAttribute("class", "button one color1 zoom");
      singleplayer.setAttribute("id", "singleplayer");
      controlPanel.appendChild(singleplayer);
      $("#singleplayer").hide();

      var multiplayer = document.createElement("a");
      multiplayer.innerHTML = "Multiplayer";
      multiplayer.setAttribute("class", "button three color3 zoo");
      multiplayer.setAttribute("id", "multiplayer");
      controlPanel.appendChild(multiplayer);
      $("#multiplayer").hide();

      $("#singleplayer").fadeIn(200);
      $("#multiplayer").fadeIn(200);
    },500)
  }

  function gamePlay(size){

    //ships have numbers between 1 and 9
    var ship1=1;
    var ship2=2;
    var ship3=3;
    //power ups have numbers bigger than 9
    var chest=10;
    var key=11;
    var coin1=12;
    var coin2=13;

    var oneBoardMatrix = [];
    var secondBoardMatrix = [];

    setTimeout(function() {
      $(".panel").animate({
        height: '+=14%',
        "margin-top": '+=7%'
      });
      $('.game').addClass('animate');
    }, 1000);

    setTimeout(function() {
      $("#out").remove();
      $("#welcome-text").remove();
      $("#size10").remove();
      $("#size15").remove();
      $("#custom-size").remove();
      $("#section").remove();

      $("#game-board").hide();
      gameBoardMaker(size);
      placeRandom(size)
      $("#game-board").fadeIn(1000);
      $(".panel").fadeOut(400);
      console.log(oneBoardMatrix)
    }, 2000);

    setTimeout(function() {
      GameControlPanelMaker();
      $(".panel").fadeIn(400);
    }, 2500);

    oneGameBoard.addEventListener("click", shot, false);

    function shot(e){
    	if (e.target !== e.currentTarget) {
        var getPosition = e.target.id.split("-");
    		var row = getPosition[0];
    		var cell = getPosition[1];

        if (oneBoardMatrix[row][cell] != 'A' || oneBoardMatrix[row][cell] != 'N'){

          updatePanel(oneBoardMatrix[row][cell], size);

      		if (oneBoardMatrix[row][cell] == 0) {shotReaction(0, './media/nada.png')}
          else if (oneBoardMatrix[row][cell] == 1) {shotReaction(1, './media/barco1.png')}
          else if (oneBoardMatrix[row][cell] == '2_1') {shotReaction('2_1', './media/barco2_1.png')}
          else if (oneBoardMatrix[row][cell] == '2_2') {shotReaction('2_2', './media/barco2_2.png')}
          else if (oneBoardMatrix[row][cell] == '3_1') {shotReaction('3_1', './media/barco3_1.png')}
          else if (oneBoardMatrix[row][cell] == '3_2') {shotReaction('3_2', './media/barco3_2.png')}
          else if (oneBoardMatrix[row][cell] == '3_3') {shotReaction('3_3', './media/barco3_3.png')}
          else if (oneBoardMatrix[row][cell] == '1_h') {shotReaction('1_h', './media/barco1_h.png')}
          else if (oneBoardMatrix[row][cell] == '2_1_h') {shotReaction('2_1_h','./media/barco2_1_h.png')}
          else if (oneBoardMatrix[row][cell] == '2_2_h') {shotReaction('2_2_h','./media/barco2_2_h.png')}
          else if (oneBoardMatrix[row][cell] == '3_1_h') {shotReaction('3_1_h','./media/barco3_1_h.png')}
          else if (oneBoardMatrix[row][cell] == '3_2_h') {shotReaction('3_2_h','./media/barco3_2_h.png')}
          else if (oneBoardMatrix[row][cell] == '3_3_h') {shotReaction('3_3_h','./media/barco3_3_h.png')}
          else if (oneBoardMatrix[row][cell] == '10') {shotReaction('10', './media/bau_fechado.png')}
          else if (oneBoardMatrix[row][cell] == '11') {shotReaction('11', './media/chave.png')}
          else if (oneBoardMatrix[row][cell] == '12') {shotReaction('12', './media/moeda_1.png')}
          else if (oneBoardMatrix[row][cell] == '13') {shotReaction('13', './media/moeda_2.png')}
        }
      }
      e.stopPropagation();

      function shotReaction(hitObject, show){
        function logMessage(text){
          $('#alert-box').html('<p>' + text + '</p>')
        }
        function add(text){
          $('#alert-box').html('<p>' + text + '</p>')
        }
        if (oneBoardMatrix[row][cell] == hitObject) {
          var tile = document.createElement("img");
          var effect = document.createElement("img");
          tile.setAttribute('class', 'tile');
          tile.setAttribute('src', show);
          effect.setAttribute('class', 'tile');
          if (hitObject == 0){
            effect.setAttribute('src', './media/splash.gif');
          }else if (hitObject > 9){
            effect.setAttribute('src', './media/power_up.gif');
          }else{
            effect.setAttribute('src', './media/explosao.gif');
          }
          e.target.appendChild(effect);

          setTimeout(function() {
            $(effect).remove();
            e.target.appendChild(tile);
            $(tile).hide();
            $(tile).show(250);
          }, 300);

          if (hitObject != 0){
            oneBoardMatrix[row][cell] = 'N';
          }else{
            oneBoardMatrix[row][cell] = 'A';
          }
        }
      }

      if(!continueGame() || !continueTime()){
        oneGameBoard.removeEventListener("click", shot);
        if (!continueTime()){
          endScreenLoad('lost');
        } else {
          endScreenLoad('won');
        }
      }

      function continueTime(){
        var timer = document.getElementById('duration').innerHTML
        if ( timer != '00:00'){
          return true;
        } else {
          return false;
        }
      }
      function continueGame(){
        for (var row=0; row < size; row++){
          var tile = oneBoardMatrix[row];
          if ( tile.includes('1')
            || tile.includes('2_1')
            || tile.includes('2_2')
            || tile.includes('3_1')
            || tile.includes('3_2')
            || tile.includes('3_3')
            || tile.includes('1_h')
            || tile.includes('2_1_h')
            || tile.includes('2_2_h')
            || tile.includes('3_1_h')
            || tile.includes('3_2_h')
            || tile.includes('3_3_h')
          ){
            return true;
          }
        }
        return false;
      }
    }

    function gameBoardMaker(size){

      for (var rowCount=0; rowCount < size; rowCount++){          //creates the rows
        oneBoardMatrix[rowCount] = [];
        var row = document.createElement("tr");
        oneGameBoard.appendChild(row);
        for (var cellCount=0; cellCount < size; cellCount++){     //creates the cells in the rows
          oneBoardMatrix[rowCount][cellCount] = '0';
          var cell = document.createElement("td");
          cell.setAttribute('class', 'tile-size-' + size);
          cell.setAttribute('id', rowCount + "-" + cellCount);
          row.appendChild(cell);
        };
      };
    };

    function numShips(ship, size) {return size / Math.ceil(ship * 2)};

    function placeRandom(size){

      var row;
      var cell;
      function randomAxis(){return Math.round(Math.random() * 2)}

      //------------PLACING-SHIPS_1-IN-BOARD-MATRIX-----------//
      for (var ship=1; ship <= numShips(ship1, size); ship++){
        row=chooseRandom(size, ship1);
        cell=chooseRandom(size, ship1);

        if (randomAxis()==1){ //horizontal
          if (oneBoardMatrix[row][cell]==0) {
            oneBoardMatrix[row][cell]='1';
          }else{ship--;};
        }else{
          if (oneBoardMatrix[row][cell]==0) {
            oneBoardMatrix[row][cell]='1_h';
          }else{ship--;};
        }
      };
      //------------PLACING-SHIPS_2-IN-BOARD-MATRIX-----------//
      for (var ship=1; ship <= numShips(ship2, size); ship++){
        row=chooseRandom(size, ship2);
        cell=chooseRandom(size, ship2);
        if (randomAxis()==1){
          if (oneBoardMatrix[row][cell]==0 && oneBoardMatrix[row+1][cell]==0){
            oneBoardMatrix[row][cell]='2_2';
            oneBoardMatrix[row+1][cell]='2_1';
          }else{ship--;}
        }else{
          if (oneBoardMatrix[row][cell]==0 && oneBoardMatrix[row][cell+1]==0){
            oneBoardMatrix[row][cell]='2_1_h';
            oneBoardMatrix[row][cell+1]='2_2_h';
          }else{ship--;}
        }
      }
      //------------PLACING-SHIPS_3-IN-BOARD-MATRIX-----------//
      for (var ship=1; ship <= numShips(ship3, size); ship++){
        row=chooseRandom(size, ship3);
        cell=chooseRandom(size, ship3);
        if (randomAxis()==1){
          if (oneBoardMatrix[row][cell]==0 && oneBoardMatrix[row+1][cell]==0 && oneBoardMatrix[row+2][cell]==0){
            oneBoardMatrix[row][cell]='3_3';
            oneBoardMatrix[row+1][cell]='3_2';
            oneBoardMatrix[row+2][cell]='3_1';
          }else{ship--;}
        }else{
          if (oneBoardMatrix[row][cell]==0 && oneBoardMatrix[row][cell+1]==0 && oneBoardMatrix[row][cell+2]==0){
            oneBoardMatrix[row][cell]='3_1_h';
            oneBoardMatrix[row][cell+1]='3_2_h';
            oneBoardMatrix[row][cell+2]='3_3_h';
          }else{ship--;}
        }

      }
      //-------------------PLACING-POWER-UPS-------------------//
      function placePowerUp(number){
        for (var powerUp=1; powerUp <= numShips(1, size); powerUp++){
          row=chooseRandom(size, 1);
          cell=chooseRandom(size, 1);
          if (oneBoardMatrix[row][cell]==0) {
            oneBoardMatrix[row][cell]=number;
          }else{powerUp--;}
        }
      }
      placePowerUp(chest)
      placePowerUp(key)
      placePowerUp(coin1)
      placePowerUp(coin2)
    }
    function chooseRandom(size,shipsize){
      return Math.floor(Math.random() * (size-shipsize));
    }

    function GameControlPanelMaker(){
      var alertBox = document.createElement("section");
      alertBox.innerHTML = "Vamos começar! <br> Escolhe um alvo e atira";
      alertBox.setAttribute("class", "grid-board one");
      alertBox.setAttribute("id", "alert-box");
      controlPanel.appendChild(alertBox);
      var powerUps = document.createElement("section");
      powerUps.setAttribute("class", "grid-board two");
      powerUps.setAttribute("id", "power-ups");
      var chests = document.createElement("img");
      chests.setAttribute("id", "chests");
      chests.setAttribute('src', './media/bau_painel.png');
      var chestsNumb = document.createElement("p");
      chestsNumb.setAttribute('id', 'chests-count')
      chestsNumb.innerHTML = "0";
      var score = document.createElement("p");
      score.setAttribute("class", "jump");
      score.setAttribute("id", "score");
      score.innerHTML = "Pontos: 0";
      var duration = document.createElement("p");
      duration.setAttribute("id", "duration");
      duration.setAttribute("class", "right");
      duration.innerHTML = "0" + size * (1/2.5) + ":00";
      powerUps.appendChild(chests);
      powerUps.appendChild(chestsNumb);
      powerUps.appendChild(score);
      powerUps.appendChild(duration);
      controlPanel.appendChild(powerUps);
      var durationTime = size * (1/2.5) * 60;
      startTimer(durationTime);

      var shipsBox = document.createElement("section");
      shipsBox.setAttribute("class", "grid-board three");
      shipsBox.setAttribute("id", "ships-box");

      function ShipsIcons(shipType, icone){
        for (var ship=1; ship <= numShips(shipType, size); ship++){
          var shipIcon = document.createElement("img");
          shipIcon.setAttribute('src', icone);
          shipsBox.appendChild(shipIcon);
        }
        controlPanel.appendChild(shipsBox);
      }
      ShipsIcons(3, './media/barco3_icone.png');
      ShipsIcons(2, './media/barco2_icone.png');
      ShipsIcons(1, './media/barco1_icone.png');
    }
  };
};

function startTimer(duration, display) {
  var timer = duration;
  var minutes;
  var seconds;
  var getDurationBox = document.getElementById('duration');
  setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);
    if(minutes < 10){minutes="0" + minutes};
    if(seconds < 10){seconds="0" + seconds};
    getDurationBox.textContent = minutes + ":" + seconds;
    if(minutes=='01' && seconds=='00'){
      $('#duration').css('color','red');
      updateAlertBox('CUIDADO! <br> estás a ficar sem tempo!');
      $('#alert-box').css('color','red');
      setTimeout( function(){$('#alert-box').css('color','white')}, 1000);
    }
    if (timer > 0){timer--};
  }, 1000);
}

var score = 0;
var chests = 0;

function updatePanel(hitObject, size) {
  if (hitObject == '0'){
    updateAlertBox('Água! tenta outro');
    sound('./sons/agua.wav');
  } else if (hitObject == '1' || hitObject == '1_h'){
    score+= 5;
    updateScore();
    updateShipsBox(hitObject);
    updateAlertBox('Navio pequeno! <br> +5p');
    sound('./sons/navio.wav');
  } else if (hitObject == '2_1'
    || hitObject == '2_2'
    || hitObject == '2_1_h'
    || hitObject == '2_2_h' ){
    score+= 8;
    updateScore();
    updateShipsBox(hitObject);
    updateAlertBox('Navio médio! <br> +8p');
    sound('./sons/navio.wav');
  } else if (hitObject == '3_1'
    || hitObject == '3_2'
    || hitObject == '3_3'
    || hitObject == '3_1_h'
    || hitObject == '3_2_h'
    || hitObject == '3_3_h'){
    score+= 10;
    updateScore();
    updateShipsBox(hitObject);
    updateAlertBox('Navio grande! <br> +10p');
    sound('./sons/navio.wav');
  } else if (hitObject == '12'){
    score+= 8;
    updateScore();
    updateAlertBox('Uma moeda rara! <br> +8p');
    sound('./sons/power_up.wav');
  } else if (hitObject == '13'){
    score+= 2;
    updateScore();
    updateAlertBox('Uma Moeda! <br> +2p');
    sound('./sons/power_up.wav');
  } else if (hitObject == '10'){
    chestManage('chest', size);
    updateAlertBox('Encontraste um baú! <br> encontra uma chave para o abrires');
    sound('./sons/bau.wav');
  } else if (hitObject == '11'){
    if (chests<1){
      updateAlertBox('Encontraste uma chave! <br> nenhum baú para abrir');
    }else{
      updateAlertBox('Encontraste uma chave! <br> baú aberto');
    }
    chestManage('key', size);
    sound('./sons/power_up.wav');
  }
}

function updateAlertBox(message){
  alert = document.getElementById('alert-box');
  alert.innerHTML = message;
}

function updateScore(){
  $('#score').css('text-shadow','0px 0px 20px #ffffff');
  $('#score').css('font-weight','900');
  $('.jump').addClass('animate');
  var getScoreBox = document.getElementById('score');
  getScoreBox.textContent = "Pontos: " + score;
  setTimeout(function(){
      $('.jump').removeClass('animate');
      $('#score').css('text-shadow','');
      $('#score').css('font-weight','500');
  }, 1000);
}

function updateShipsBox(ship){
  var shipsBox = document.getElementById('ships-box').children;
  var child = 0;
  var deleted = false;

  function changeOpacity(src, shipNumb){
    var change = shipsBox[child]
    if (sorce == src && ship == shipNumb && !deleted && change.style.opacity != 0.2){
      change.setAttribute('style', 'opacity: 0.2');
      deleted=true;
    };
  };

  while ( child < shipsBox.length){
    var sorce = shipsBox[child].getAttribute('src');
    changeOpacity('./media/barco1_icone.png', '1');
    changeOpacity('./media/barco2_icone.png', '2_1');
    changeOpacity('./media/barco3_icone.png', '3_1');
    changeOpacity('./media/barco1_icone.png', '1_h');
    changeOpacity('./media/barco2_icone.png', '2_1_h');
    changeOpacity('./media/barco3_icone.png', '3_1_h');
    child++;
  }
}


function chestManage(hitObject, size){
  var getChestsCounter = document.getElementById('chests-count');
  if (hitObject == 'chest'){
    chests++;
    getChestsCounter.innerHTML = chests;
  } else if (hitObject == 'key' && chests > 0){
    chests--;
    getChestsCounter.innerHTML = chests;
    function random(){return Math.floor(Math.random() * 3)}
    function animateChest(image, incr){
      sound('./sons/bau_abrir.wav');
      $('.two').addClass('animate');
      $('#chests').prop('src','./media/bau_aberto_painel.png');
      $('#chests-count').css('text-shadow','0px 0px 20px #ffffff');
      $('#chests-count').css('font-weight','900');
      setTimeout(function(){
        $('#chests').prop('src', image);
        $('.jump').addClass('animate');
        score+=parseInt(incr);
        getScoreBox.textContent = "Pontos: " + score;
      }, 1000);
      setTimeout(function(){
        $('#chests').prop('src','./media/bau_painel.png');
        $('#chests-count').css('text-shadow','');
        $('#chests-count').css('font-weight','500');
        $('.jump').removeClass('animate');
        $('.two').removeClass('animate');
      }, 2200);
    }
    var getScoreBox = document.getElementById('score');
    var getTimer = document.getElementById('duration');
    if (random()==1){
      animateChest('./media/bau_aberto_joia_painel.png', 50);
      setTimeout(function(){
        updateAlertBox('WOW, o bau tinha um diamante! <br> +50p');
        sound('./sons/bau_power_ups.wav');
      }, 1500);
    }else if(random()==2){
      animateChest('./media/bau_aberto_moeda_painel.png', 8);
      setTimeout(function(){
        updateAlertBox('O bau tinha uma moeda rara! <br> +8p');
        sound('./sons/bau_power_ups.wav');
      }, 1500);
    }else{
      animateChest('./media/bau_aberto_veneno_painel.png', '-20');
      setTimeout(function(){
        updateAlertBox('Ops! O bau tinha veneno! <br> -20p')
        sound('./sons/veneno.wav');
      }, 1500);
    }
  }
}

function sound(src) {
  var sound = document.createElement("audio");
  sound.src = src;
  sound.setAttribute("preload", "auto");
  sound.setAttribute("controls", "none");
  sound.style.display = "none";
  document.body.appendChild(sound);
  sound.play();
  setInterval(function(){
    sound.remove();
  }, 3000);
}

function endScreenLoad(status){
  $('#panel').fadeOut(2000, function() {$(this).remove()})
  $('#game-board').fadeOut(2000, function() {$(this).remove()})
  setTimeout(function(){$('.game').removeClass('animate');}, 1500)
  var endTitle = document.createElement('h1');
  endTitle.setAttribute('id', 'end-title')
  endTitle.style.display = 'none';
  var endMesssage = document.createElement('h3');
  endMesssage.setAttribute('id', 'end-message')
  endMesssage.style.display = 'none';
  if (status=="lost"){
    endTitle.innerHTML = 'Game Over';
    endMesssage.innerHTML = 'O tempo acabou! <br> mais sorte para a próxima';
  }else{
    endTitle.innerHTML = 'Parabéns!';
    endMesssage.innerHTML = 'Afundaste todos os navios! <br> Conseguiste ' + score + ' pontos';
  };
  var homeButton = document.createElement('a');
  homeButton.setAttribute('id', 'home-button');
  homeButton.setAttribute('class', 'button color2 zoom');
  homeButton.setAttribute('href', 'Home.html');
  homeButton.style.display = 'none';
  homeButton.innerHTML = 'Página principal';
  var replayButton = document.createElement('a');
  replayButton.setAttribute('id', 'replay-button');
  replayButton.setAttribute('class', 'button color3 zoom');
  replayButton.setAttribute('href', 'BOMBS.html');
  replayButton.style.display = 'none';
  replayButton.innerHTML = 'Jogar novamente';
  setTimeout(function(){
    var board = document.getElementById('game');
    board.appendChild(endTitle);
    board.appendChild(endMesssage);
    board.appendChild(replayButton);
    board.appendChild(homeButton);
  }, 1300)
  setTimeout(function(){
    $('#end-title').fadeIn(2000);
    $('#end-message').fadeIn(2000);
    $('#home-button').fadeIn(2200);
    $('#replay-button').fadeIn(2200);
  },1800)
}



document.addEventListener("DOMContentLoaded", function(event) {bombs()});
