const Gameboard = (() => {

     const board = document.getElementById("board");
     const boardTable = document.getElementById("board-table");     
     const sides = document.querySelectorAll('.choice span');
     const gamearray = [["1","2","3"],["4","5","6"],["7","8","9"]];

     sides.forEach(function(side){
         side.addEventListener('click', function(event){
                    const player1_side = event.target.textContent
                    const player1 = new Player(player1_side);
                    player1_side === 'X'? player2_side = 'O': player1_side = 'X'
                    const player2 = new Player(player2_side)
                    console.log(player1, player2);
        startGame();

         } )
     })


     function taketurns(){
        // to allocate free positions to the other player
     }

     function updateBoard(side){
        
     }

     
     function startGame(){
        boardTable.innerHTML = ""
        render()

     }

        function render(){
        for (moves of gamearray){
            
            let tablerow = `<tr> `
            for(move of moves ){
             movedata =  `<td> ${move}</td>`
             tablerow +=  movedata
            
            }
            tablerow += `</tr>`

            boardTable.innerHTML += tablerow
           
        }

    }


    


    return {
    render
    };
  })();



  const Player = function(side){
      return {side}
  }

  


Gameboard.render()