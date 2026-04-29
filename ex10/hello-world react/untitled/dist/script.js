const { useState } = React;

function App() {
  const [text, setText] = useState("hello CGU!!");

  const changeText = () => {
    setText(text + "被點了");
  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h1", { onClick: changeText },
    text)));



}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));