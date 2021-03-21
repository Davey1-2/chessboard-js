
window.onload = () =>{
    let  chessboard = document.createElement('table')
    chessboard.className = 'chessboardClass'

    for (let i = 0; i < 8; i++) {

        let chessRow = document.createElement('tr');
        chessRow.className ='chessRowClass'
        for (let j = 0; j < 8; j++) {
            let chessColor = document.createElement('td')
            if (i%2 === j%2){
                chessColor.className = 'white'
            }
            else {
                chessColor.className = 'black'
            }
            chessRow.appendChild(chessColor)
        }
        chessboard.appendChild(chessRow)
    }
    document.body.appendChild(chessboard)
}

document.write("<table id='Hello'>")
document.getElementById('Hello').className = "easy"






