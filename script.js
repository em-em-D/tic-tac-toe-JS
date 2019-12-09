const Gameboard = (() => {

     const board = document.getElementById("board");
     const boardTable = document.getElementById("board-table");     
     const sides = document.querySelectorAll('.choice span');
     
     sides.forEach(function(side){
         side.addEventListener('click', function(event){
                    const player1_side = event.target.textContent
                    const player1 = new Player(player1_side);
                    if (player1_side === 'X'){
                        player2_side = 'O'
                    } else {
                        player2_side = 'X'
                    }
                    
                    const player2 = new Player(player2_side)
                    console.log(player1, player2)

         } )
     })

    const gamearray = [["1","2","3"],["4","5","6"],["7","8","9"]];
        function render(){
        for (moves of gamearray){
            let tablerow = `<tr> `
            for(move of moves ){
             tablerow +=  `<td> ${move}</td>`

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