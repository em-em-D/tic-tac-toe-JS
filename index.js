
const Gameboard = (()  => {
    const board = document.getElementById("board")
    const boardTable = document.getElementById("board-table")
    
    const gamearray = [["X","O","O"],["O","X","X"],["X","O","X"]]

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

    return
    {
        render
    }


})();

Gameboard.render()
