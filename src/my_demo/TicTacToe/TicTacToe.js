import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';

class SquarePre extends React.Component {

    constructor(props) {
        /* TODO: 在所有含有构造函数的的 React 组件中，构造函数必须以 super(props) 开头。 */
        super(props);
        /* TODO:
        在 React 组件的构造函数中设置 this.state 来初始化 state。
        this.state 应该被视为一个组件的私有属性（state 对于每个组件来说是私有的），我们在 this.state 中存储当前组件的数据。
        */
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            /* TODO: 在 JSX 中你可以任意使用 JavaScript 表达式，只需要用一个大括号{}把表达式括起来。 */
            /* <button className="square" onClick={function () { */
            /* TODO: 为了少输入代码，同时为了避免 this 造成的困扰，我们在这里使用箭头函数 来进行事件处理 */
            <button
                className="square"
                onClick={() => {
                    /* alert('click'); */
                    /* TODO: 每次在组件中调用 setState 时，React 都会自动更新其子组件。 */
                    // this.setState({ value: 'X' });
                    this.props.onClick();
                }}
            >
                {/* TODO: 
        在 React 应用中，数据通过 props 的传递，从父组件流向子组件。 
        renderSquare(i) {
            return <Square value={i} />;
        }
        */}
                {this.props.value}
                {/* {this.state.value} */}
            </button>
        );
    }
}

/* TODO:
函数组件
接下来我们把 Square 组件重写为一个函数组件。
如果你想写的组件只包含一个 render 方法，并且不包含 state，那么使用函数组件就会更简单。
我们不需要定义一个继承于 React.Component 的类，我们可以定义一个函数，这个函数接收 props 作为参数，然后返回需要渲染的元素。
函数组件写起来并不像 class 组件那么繁琐，很多组件都可以使用函数组件来写。
*/
/* 把两个 this.props 都替换成了 props。 */
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    /* 
      TODO:
      当你遇到需要同时获取多个子组件数据，或者两个组件之间需要相互通讯的情况时，需要把子组件的 state 数据提升至其共同的父组件当中保存。
      之后父组件可以通过 props 将状态数据传递到子组件当中。这样应用当中所有组件的状态数据就能够更方便地同步共享了。
      像这种将组件的 state 提升到父组件的情形在重构 React 组件时经常会遇到。
      */
    /* constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    } */

    renderSquare(i) {
        return (
            <Square
                // value={this.state.squares[i]} // TODO: this.props.value
                value={this.props.squares[i]}
                /* 从 Board 组件向 Square 组件传递一个函数，当 Square 被点击的时候，调用这个函数。 */
                // onClick={() => this.handleClick(i)}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    /* TODO:在 React 中，有一个命名规范，通常会将代表事件的监听 prop 命名为 on[Event]，将处理事件的监听方法命名为 handle[Event] 这样的格式。*/
    // handleClick(i) {
    /* TODO: 
    调用了 .slice() 方法创建了 squares 数组的一个副本，而不是直接在现有的数组上进行修改 
    不可变性在 React 中非常重要 !
    一般来说，有两种改变数据的方式。第一种方式是直接修改变量的值，第二种方式是使用新的一份数据替换旧数据。
    1、简化复杂的功能
    不可变性使得复杂的特性更容易实现。在后面的章节里，我们会实现一种叫做“时间旅行”的功能。“时间旅行”可以使我们回顾井字棋的历史步骤，并且可以“跳回”之前的步骤。这个功能并不是只有游戏才会用到——撤销和恢复功能在开发中是一个很常见的需求。不直接在数据上修改可以让我们追溯并复用游戏的历史记录。
    2、跟踪数据的改变
    如果直接修改数据，那么就很难跟踪到数据的改变。跟踪数据的改变需要可变对象可以与改变之前的版本进行对比，这样整个对象树都需要被遍历一次。跟踪不可变数据的变化相对来说就容易多了。如果发现对象变成了一个新对象，那么我们就可以说对象发生改变了。
    3、确定在 React 中何时重新渲染
    不可变性最主要的优势在于它可以帮助我们在 React 中创建 pure components。我们可以很轻松的确定不可变数据是否发生了改变，从而确定何时对组件进行重新渲染。
    */
    /* const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState(
      {
        squares: squares,
        xIsNext: !this.state.xIsNext,
      }
    );
  } */

    render() {
        /* const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        } */

        return (
            <div>
                {/* <div className="status">{status}</div> */}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

/* TODO:
把 history state 放在了 Game 组件中，这样就可以从它的子组件 Board 里面删除掉 square 中的 state。
正如我们把 Square 组件的状态提升到 Board 组件一样，现在我们来把 state 从 Board 组件提升到顶层的 Game 组件里。
这样，Game 组件就拥有了对 Board 组件数据的完全控制权，除此之外，还可以让 Game 组件控制 Board 组件，并根据 history 渲染历史步骤。
*/
class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null),
                }
            ],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick(i) {
        // const history = this.state.history;
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState(
            {
                /* concat() 方法可能与你比较熟悉的 push() 方法不太一样，它并不会改变原数组，所以我们推荐使用 concat()。 */
                history: history.concat([{
                    squares: squares,
                }]),
                // stepNumber: 0,
                stepNumber: history.length,
                xIsNext: !this.state.xIsNext,
            }
        );
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        // const current = history[history.length - 1];
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ? 'Go to move #' + move : 'Go to game start';
            return (
                /* TODO: 我们强烈推荐，每次只要你构建动态列表的时候，都要指定一个合适的 key。 
                虽然 key 看起来好像是 props 中的一个，但是你不能通过 this.props.key 来获取 key。React 会通过 key 来自动判断哪些组件需要更新。组件是不能访问到它的 key 的。
                如果你没有指定任何 key，React 会发出警告，并且会把数组的索引当作默认的 key。但是如果想要对列表进行重新排序、新增、删除操作时，把数组索引作为 key 是有问题的。显式地使用 key={i} 来指定 key 确实会消除警告，但是仍然和数组索引存在同样的问题，所以大多数情况下最好不要这么做。
                组件的 key 值并不需要在全局都保证唯一，只需要在当前的同一级元素之前保证唯一即可。
                */
                /* 因为历史步骤不需要重新排序、新增、删除，所以这里使用步骤的索引作为 key 是安全的。 */
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

// ========================================

/* ReactDOM.render(
    <Game />,
    document.getElementById('root')
); */

export default Game
