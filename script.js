const Gameboard = (() => {

     const board = document.getElementById("board");
     const boardTable = document.getElementById("board-table");     
     const sides = document.querySelectorAll('.choice span');
     const gamearray = [["","",""],["","",""],["","",""]];
     let  player1, player2, current_player; 

     sides.forEach(function(side){
         side.addEventListener('click', function(event){
                    let player1_side = event.target.textContent
                    console.log(player1_side)
                    player1 = new Player(player1_side);
                    console.log(player1)
                    player1_side === 'X'? player2_side = 'O': player2_side = 'X'
                    player2 = new Player(player2_side);
                    current_player = player1
                     startGame();

         } )
     })

    
     function startGame(){
        render(); 
     }


     function updateBoard(subarr, el){     
         
        if(current_player){
    

        if(gamearray[subarr][el] === ""){
        gamearray[subarray_index][el] = current_player.side;
        changeCurrentPlayer();
        render();
        } else {
            alert("NOT A VALID MOVE")
        }

        checkWinner()

    
 } else {
     alert("PLEASE CHOOSE A SIDE")
 }
}




    function render(){
            let row_index = 0 
            boardTable.innerHTML = "";
            console.log(`rendering with array ${gamearray}`)
        for (moves of gamearray){
            let td_index = 0;
            let tablerow = `<tr> `
            for(move of moves ){
             movedata =  `<td class='${row_index}${td_index} move'> ${move}</td>`

             tablerow +=  movedata;
             td_index ++;
            
            
            }
            row_index ++;

            tablerow += `</tr>`
            boardTable.innerHTML += tablerow
           
        }
        const moves_td = document.querySelectorAll('.move');  
        
        for(td of moves_td){
               td.addEventListener("click", function(e){
                subarray_index = Number(e.target.className[0])
                element_index = Number(e.target.className[1])
                updateBoard(subarray_index, element_index)
            }) 
        }

    }


    function changeCurrentPlayer(){

        current_player == player1 ? current_player = player2 : current_player = player1 ;
    }

    function checkWinner(){

    }


    return {
    render
    };
  })();



  const Player = function(side){
      return {side}
  }

  


Gameboard.render()