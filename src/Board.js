import React, {Component} from 'react'
import Cell from './Cell'
import './Board.css'


class Board extends Component {
    static defaultProps = {
        nrows: 5,
        ncols: 5,
        chanceToLightOn: 0.4
    }

    constructor(props) {
        super(props)
        this.state={
            isOver: false,
            board:this.createBoard()
        }
    }
    flipGroupedCells(coord) {
        let isOver = false
        let {ncols, nrows} = this.props
        let board = this.state.board
        let [y, x] = coord.split("-").map(Number)
        function flipCell(y, x) {
            if(x>=0 && x<ncols && y>=0 && y<nrows) {
                board[y][x] = !board[y][x]
            }
        }
        flipCell(y, x)
        flipCell(y+1, x)
        flipCell(y-1, x)
        flipCell(y, x+1)
        flipCell(y, x-1)
        this.setState({board, isOver})
    }
    createBoard(){
        let board = []
        for(let i=0; i<this.props.nrows; i++) {
            let row = []
            for(let i=0; i<this.props.ncols; i++){
                 row.push(Math.random() < this.props.chanceToLightOn)
            }
            board.push(row)
        }

        return board
    }
    render() {
        let tblBoard = []
        for(let y= 0; y<this.props.nrows; y++) {
            let row =[] 
            for (let x = 0; x<this.props.ncols; x++) {
                let coord=`${y}-${x}`
                row.push(<Cell key={coord} 
                isOn={this.state.board[y][x]} 
                flipGroupedCells={() => this.flipGroupedCells(coord)} />)
            }
            tblBoard.push(<tr key={y} >{row}</tr>)
        }
        return (
            <table className='Board'>
                <tbody>
                        {tblBoard}
                </tbody>
            </table>
        )
    }
}
export default Board