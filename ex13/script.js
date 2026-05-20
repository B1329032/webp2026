class Square extends React.Component {

  render() {

    return /*#__PURE__*/(

      React.createElement("button", { className: "square", onClick: this.props.onClick }, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",

      this.props.value, "\xA0\xA0\xA0\xA0\xA0\xA0"));





  }}





// ✅ Board 元件

class Board extends React.Component {

  renderSquare(i) {

    return /*#__PURE__*/(

      React.createElement(Square, {

        value: this.props.squares[i],

        onClick: () => this.props.onClick(i) }));





  }



  render() {

    return /*#__PURE__*/(

      React.createElement("div", null, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", /*#__PURE__*/

      React.createElement("div", { className: "board-row" }, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",

      this.renderSquare(0), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",

      this.renderSquare(1), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",

      this.renderSquare(2), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", /*#__PURE__*/



      React.createElement("div", { className: "board-row" }, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",

      this.renderSquare(3), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",

      this.renderSquare(4), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",

      this.renderSquare(5), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", /*#__PURE__*/



      React.createElement("div", { className: "board-row" }, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",

      this.renderSquare(6), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",

      this.renderSquare(7), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",

      this.renderSquare(8), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"), "\xA0\xA0\xA0\xA0\xA0\xA0"));







  }}





// ✅ Game 元件（老師重點）

class Game extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      history: [

      { squares: Array(9).fill(null) }],



      stepNumber: 0,

      xIsNext: true };



  }



  handleClick(i) {

    const history = this.state.history.slice(0, this.state.stepNumber + 1);

    const current = history[history.length - 1];

    const squares = current.squares.slice();



    if (calculateWinner(squares) || squares[i]) {

      return;

    }



    squares[i] = this.state.xIsNext ? "X" : "O";



    this.setState({

      history: history.concat([{ squares: squares }]),

      stepNumber: history.length,

      xIsNext: !this.state.xIsNext });



  }



  jumpTo(step) {

    this.setState({

      stepNumber: step,

      xIsNext: step % 2 === 0 });



  }



  render() {

    const history = this.state.history;

    const current = history[this.state.stepNumber];

    const winner = calculateWinner(current.squares);



    const moves = history.map((step, move) => {

      const desc = move ?

      "回到 #" + move + " 步" :

      "遊戲開始";

      return /*#__PURE__*/(

        React.createElement("li", { key: move }, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", /*#__PURE__*/

        React.createElement("button", { onClick: () => this.jumpTo(move) }, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",

        desc, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"));







    });



    let status;

    if (winner) {

      status = "贏家是: " + winner;

    } else {

      status = "下一位: " + (this.state.xIsNext ? "X" : "O");

    }



    return /*#__PURE__*/(

      React.createElement("div", { className: "game" }, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", /*#__PURE__*/

      React.createElement("div", { className: "game-board" }, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", /*#__PURE__*/



      React.createElement(Board, {

        squares: current.squares,

        onClick: i => this.handleClick(i) }), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"), "\xA0 \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", /*#__PURE__*/







      React.createElement("div", { className: "game-info" }, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", /*#__PURE__*/

      React.createElement("div", null, status), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", /*#__PURE__*/

      React.createElement("ol", null, moves), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"), "\xA0\xA0\xA0\xA0\xA0\xA0"));







  }}





// 判斷勝利

function calculateWinner(squares) {

  const lines = [

  [0, 1, 2], [3, 4, 5], [6, 7, 8],

  [0, 3, 6], [1, 4, 7], [2, 5, 8],

  [0, 4, 8], [2, 4, 6]];





  for (let i = 0; i < lines.length; i++) {

    const [a, b, c] = lines[i];

    if (squares[a] &&

    squares[a] === squares[b] &&

    squares[a] === squares[c]) {

      return squares[a];

    }

  }

  return null;

}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( /*#__PURE__*/React.createElement(Game, null));