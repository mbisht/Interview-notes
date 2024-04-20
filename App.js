//HOC example
import React from 'react';

const withLoadingIndicator = (WrappedComponent) => {
  return class WithLoadingIndicator extends React.Component {
    state = {
      isLoading: true
    };

    componentDidMount() {
      // Simulate a loading delay
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 2000);
    }

    render() {
      const { isLoading } = this.state;
      if (isLoading) {
        return <div>Loading...</div>;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

const SampleComponent = (props) => {
  return (
    <div>
      <h1>Sample Component</h1>
      <p>Props value: {props.value}</p>
    </div>
  );
};

const App = withLoadingIndicator(SampleComponent);

export default App;

// *************data fetch code*******************
// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // const response = await fetch('https://api.example.com/data');
//         const response = await fetch('https://dummyjson.com/products');
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array to run the effect only once

//   return (
//     <div>
//       {/* Render your data here */}
//     </div>
//   );
// };

// export default App;

// *************date fetch code*******************
