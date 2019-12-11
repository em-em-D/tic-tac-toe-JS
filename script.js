const Gameboard = (() => {
  const board = document.getElementById("board");
  const boardTable = document.getElementById("board-table");
  const sides = document.querySelectorAll(".choice span");
  let gamearray = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  let player1, player2, current_player;
  const turnsDiv = document.querySelector('.turns'); 



  sides.forEach(function(side) {
    side.addEventListener("click", chooseSide);
  });

  function chooseSide(event) {
    let player1_side = event.target.textContent;
    player1 = new Player(player1_side);
    player1_side === "X" ? (player2_side = "O") : (player2_side = "X");
    player2 = new Player(player2_side);
    current_player = player1;
    startGame();

  }

  function startGame() {
  
    showPlayerTurn()
    gamearray = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];

    render();
  }

  function updateBoard(subarr, el) {
    if (current_player) {
      if (gamearray[subarr][el] === "") {
        gamearray[subarray_index][el] = current_player.side;
        render();
        checkWinner(el);
      } else {
        alert("NOT A VALID MOVE");
      }
    } else {
      alert("PLEASE CHOOSE A SIDE");
    }
  }

  function render() {
    let row_index = 0;
    boardTable.innerHTML = "";
    for (moves of gamearray) {
      let td_index = 0;
      let tablerow = `<tr> `;
      for (move of moves) {
        movedata = `<td class='${row_index}${td_index} move'> ${move}</td>`;

        tablerow += movedata;
        td_index++;
      }
      row_index++;

      tablerow += `</tr>`;
      boardTable.innerHTML += tablerow;
    }
    let moves_td = document.querySelectorAll(".move");

    for (td of moves_td) {
      td.addEventListener("click", addEventToData);
    }

  }

  function addEventToData(e) {
    subarray_index = Number(e.target.className[0]);
    element_index = Number(e.target.className[1]);
    updateBoard(subarray_index, element_index);
  }

  function changeCurrentPlayer() {
    current_player == player1
      ? (current_player = player2)
      : (current_player = player1);
  }

  function checkWinner(position) {
    if (checkHorizontal() || checkVertical(position) || checkDiagonal()) {
      gameWinner();
    } else if (checkDraw()) {
        gameDraw()
    } else {
      changeCurrentPlayer();
      showPlayerTurn()


    }
  }

  function checkHorizontal(position) {
    for (let subarr of gamearray) {
      let set = new Set(subarr);

      if (set.size === 1 && !set.has("")) {
        return true;
      }
    }
  }

  function checkVertical(position) {
    verticalArray = [];
    for (let i = 0; i < gamearray.length; i++) {
      verticalArray.push(gamearray[i][position]);
    }
    let set = new Set(verticalArray);
    if (set.size == 1) {
      return true;
    }
  }

  function checkDiagonal(position) {
    let left_diagonal = new Set([
      gamearray[0][0],
      gamearray[1][1],
      gamearray[2][2]
    ]);
    let right_diagonal = new Set([
      gamearray[0][2],
      gamearray[1][1],
      gamearray[2][0]
    ]);

    if (
      (left_diagonal.size === 1 && !left_diagonal.has("")) ||
      (right_diagonal.size === 1 && !right_diagonal.has(""))
    ) {
      return true;
    }
  }

  function checkDraw() {
    let flat_array = gamearray.flat();
    const notEmpty = el => el != "";
    return flat_array.every(notEmpty);
  }


  return {
    render
  };

  function gameWinner() {
    hideSelectors();
    const newDiv = document.createElement("div");
    newDiv.className = 'result-div'
    newDiv.innerHTML = `<p class="result"> Game Over, the winner is ${current_player.side} 🎉🎉</p>
        <button class="btn btn-lg btn-success restart"> Restart </button>`;
    turnsDiv.appendChild(newDiv);
    let moves_td = document.querySelectorAll(".move");
    console.log(moves_td);
    for (td of moves_td) {
      td.removeEventListener("click", addEventToData);
    }
    const restart_button = document.querySelector(".restart"); 
    restart_button.addEventListener("click", restart);

  }

  function restart(){
    location.reload();
}

function gameDraw(){
  hideSelectors()
    const newDiv = document.createElement("div");
    newDiv.className = 'result-div'
    newDiv.innerHTML = `<p class="result"> It's a draw, no winner here!  </p>
        <button class="btn btn-lg btn-success restart"> Start Again </button>`;
        turnsDiv.appendChild(newDiv);
        let moves_td = document.querySelectorAll(".move");

        for (td of moves_td) {
            td.removeEventListener("click", addEventToData);
          }
          const restart_button = document.querySelector(".restart"); 
          restart_button.addEventListener("click", restart);
}


function showPlayerTurn(){
  if (current_player){
  turnsDiv.innerHTML = `<p class="showTurn bg-primary"> ${current_player.side}'s turn! </p>`

  }
}

function hideSelectors(){
  document.querySelector('h2').style.display = 'none';
  document.querySelector('.choice').style.display = 'none'
  document.querySelector('h1').style.display = 'none'
  document.querySelector('.showTurn').style.display = 'none'
}
})();



const Player = function(side, name) {
  return { side, name };

};



Gameboard.render();
