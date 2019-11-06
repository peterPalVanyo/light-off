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
        for(let x= 0; x<this.props.nrows; x++) {
            let row =[] 
            for (let y = 0; y<this.props.ncols; y++) {
                let coord=`${y}-${x}`
                row.push(<Cell key={coord} isOn={this.state.board[y][x]} />)
            }
            tblBoard.push(<tr key={x} >{row}</tr>)
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