import React, { Component, useState } from "react";
// import React, { useState } from "react";
import TodoItem from './TodoItem'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            list: []
        }
        this.handInputonChange = this.handInputonChange.bind(this)
        this.onhandClick = this.onhandClick.bind(this)
        this.onDeltel = this.onDeltel.bind(this)
    }
    onhandClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue]
        }))
    }

    handInputonChange(e) {
        const value = e.target.value
        this.setState(() => ({

            inputValue: value

        }))
    }
    onDeltel(index) {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return { list }
        })
    }
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (<TodoItem
                item={item}
                index={index}
                onDeltel={this.onDeltel} />)
        })
    }
    render() {
        return <>
            <div>
                <label htmlFor="input">输入内容</label>
                <input id="input" value={this.state.inputValue} onChange={this.handInputonChange} />
                <button onClick={this.onhandClick}>提交</button>
            </div>
            <ul>
                {
                    this.getTodoItem()
                }
            </ul>
        </>
    }

}
// const TodoList = () => {
//     const [input, setInput] = useState('');
//     const [list, setList] = useState([])
//     const onhandChange = (e) => {
//         setInput(e.target.value)
//     }
//     const onhandClick = () => {
//         setList([...list, input])
//     }
//     const onDeltel = (index) => {
//         const lists = [...list]
//         lists.splice(index, 1)
//         setList(lists)
//     }
//     return <>
//         <div>
//             <label htmlFor='input'>输入内容</label>
//             <input id="input" value={input} onChange={(e) => onhandChange(e)} />
//             <button onClick={() => onhandClick()}>提交</button>
//         </div>
//         <ul>
//             {
//                 list.map((item, index) =>
//                     <TodoItem item={item} index={index} onDeltel={onDeltel} key={index} />
//                 )
//             }
//         </ul>
//     </>
// }

export default TodoList