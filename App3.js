// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// class component***************************************************************************************************

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   componentDidMount() {
//     // Perform any initial setup here
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // Handle state or prop changes here
//   }

//   componentWillUnmount() {
//     // Clean up any resources here
//   }

//   handleClick = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Sample React Component</h1>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.handleClick}>Increment Count</button>
//       </div>
//     );
//   }
// }

// export default App;

//end class component********************************************************************************************** 

//function components, hooks, props, state, and conditional rendering in ReactJS******************************************************************
import React, { useState, useEffect } from 'react';

const App = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Perform any side effects or subscriptions here
    return () => {
      // Clean up any resources here
    };
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Sample React Function Component</h1>
      <p>Count: {count}</p>
      {count >= 5 && <p>Count is greater than or equal to 5</p>}
      <button onClick={handleClick}>Increment Count</button>
      <p>Props value: {props.value}</p>
    </div>
  );
};

export default App;

//function components, hooks, props, state, and conditional rendering in ReactJS******************************************************************


