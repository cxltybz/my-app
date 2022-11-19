import React, { Component } from "react";
import PropTypes from 'prop-types';
class TodoItem extends Component {
    constructor(props) {
        super(props)
    }
    onDeltel() {
        const { index, onDeltel } = this.props
        console.log(typeof index);
        onDeltel(index)
    }
    render() {
        const { test } = this.props
        return <div onClick={this.onDeltel.bind(this)}>
            {test}-- {this.props.item}
        </div>
    }
}
// const TodoItem = (props) => {
//     const { item, index, onDeltel } = props;
//     return <div onClick={() => onDeltel(index)}>{item}</div>
// }
TodoItem.propTypes = {
    index: PropTypes.number,
    onDeltel: PropTypes.func,
    item: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    test: PropTypes.string.isRequired
}
TodoItem.defaultProps = {
    test: 'hello word'
}
export default TodoItem 