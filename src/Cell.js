import React, {Component} from 'react'
import './Cell.css'

class Cell extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {

    }
    render() {
        const classes = 'Cell' + (this.props.isOn? ' Cell-on': '')
        return <td className={classes} ></td>
    }
}
export default Cell