console.log("yo")
var input_playing_to = document.querySelector("#playing_to_input")
var playing_to_value = document.querySelector('#playing_to')
var player_1_score = document.querySelector('#player_1_score')
var player_2_score = document.querySelector('#player_2_score')
var player_1_button = document.querySelector('button[name="player_1"]')
var player_2_button = document.querySelector('button[name="player_2"]')
var reset_button = document.querySelector('button[name="reset"]')
var player_1_score_count = 0;
var player_2_score_count = 0;
var target_score = 5;
var game_over = false;

input_playing_to.addEventListener("input", function(provided_number){
  console.dir(provided_number);
  if (provided_number.inputType == "insertText"){
    playing_to_value.innerHTML = provided_number.target.valueAsNumber;
    target_score = provided_number.target.valueAsNumber;
  }
  else if (provided_number.inputType == "deleteContentBackward") {
    playing_to_value.innerHTML = 5;
    target_score = 5;
  }

})

player_1_button.addEventListener("click", function(){
  if (!game_over){
    player_1_score_count++;
    player_1_score.innerHTML = player_1_score_count;
    winner = checkWinner(player_1_score_count);
    console.log(winner)
    if (winner){
      player_1_score.classList.add('winner')
      game_over = true
    }
  }
})
player_2_button.addEventListener("click", function(){
  if (!game_over){
    player_2_score_count++;
    player_2_score.innerHTML = player_2_score_count;
    winner = checkWinner(player_2_score_count);
    if (winner){
      player_2_score.classList.add('winner')
      game_over = true
    }
  }
})

function checkWinner(player_score){
  if (player_score == target_score) {
    return true
  }
  return false
}

reset_button.addEventListener('click', function(){
  player_1_score.innerHTML = 0;
  player_2_score.innerHTML = 0;
  player_1_score_count = 0;
  player_2_score_count = 0;
  player_1_score.classList.remove("winner");
  player_2_score.classList.remove("winner");
  target_score = 5;
  playing_to_value.innerHTML = 5;
  input_playing_to.textContent = "";
  game_over = false;
})
