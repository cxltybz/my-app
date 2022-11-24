import React, { Component } from "react";
// import React, { useState } from "react";
import TodoItem from './TodoItem';
import axios from "axios";
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
                key={index}
                item={item}
                index={index}
                onDeltel={this.onDeltel} />)
        })
    }
    // 组件被挂载到页面之后,自动被执行
    componentDidMount() {
        // console.log('componentDidMount');
        axios.get('/api/todolist').then((res) => {
            console.log(res.data);
            this.setState(() => {
                return {
                    list: res.data
                }
            })
        }).catch(() => {

        });
    }
    // 组件被更新之前,他会自动执行
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true
    }
    // 组件被更新之前,它会自动执行,但是他在shouldComponentUpdate之后
    // 如果shouldComponentUpdate返回true它才执行
    // 如果返回false,这个函数就不会被执行了
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    render() {
        console.log('child render');
        return <>
            <div>
                <label htmlFor="input">输入内容</label>
                <input id="input" value={this.state.inputValue} onChange={this.handInputonChange}
                />
                <button onClick={this.onhandClick}>提交</button>
            </div>
            <ul >
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