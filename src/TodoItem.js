import React, { Component } from "react";
import PropTypes from 'prop-types';
class TodoItem extends Component {
    constructor(props) {
        super(props)
    }
    // 组件被更新之前,他会自动执行
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.item !== this.props.item) {
            return true
        } else {
            return false
        }

    }
    onDeltel() {
        const { index, onDeltel } = this.props

        onDeltel(index)
    }
    render() {
        console.log('child render');
        return <div onClick={this.onDeltel.bind(this)}>
            {this.props.item}
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

}
TodoItem.defaultProps = {
    test: 'hello word'
}
export default TodoItem 