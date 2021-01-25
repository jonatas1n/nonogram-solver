class Cell{
    contructor(row, column){
        this.row = row
        this.column = column
        this.value = null
    }
}

class Line{
    constructor(values, pos){
        this.values = values
        this.pos = pos
    }
}

nonoSolver = {
    rows = [],
    columns = [],
    cells = [],

    start = function(){
        for(let rowIndex = 0; rowIndex < 9; rowIndex++){
            for(let colIndex = 0; colIndex < 9; colIndex++){
                let cell = Cell(rowIndex, colIndex)
                cells.push(cell)
            }
        }
    },

    fillRows = function(values){
        if(cells.length) console.log("Run start() before start the game!")
        values.forEach((el) => {
            rows.push(el)
        })
    },
    
    fillColumns = function(values){
        if(cells.length) console.log("Run start() before start the game!")
        values.forEach((el) => {
            columns.push(el)
        })
    },

    solveLine = function(lineIndex){

    }
}