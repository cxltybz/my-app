import React, { Component } from "react";

class TodoItem extends Component {
    constructor(props) {
        super(props)
    }
    onDeltel() {
        this.props.onDeltel(this.props.index)
    }
    render() {
        return <div onClick={this.onDeltel.bind(this)}>
            {this.props.item}
        </div>
    }
}
// const TodoItem = (props) => {
//     const { item, index, onDeltel } = props;
//     return <div onClick={() => onDeltel(index)}>{item}</div>
// }
export default TodoItem