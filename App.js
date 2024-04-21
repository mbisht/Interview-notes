//HOC example
// import React from 'react';

// const withLoadingIndicator = (WrappedComponent) => {
//   return class WithLoadingIndicator extends React.Component {
//     state = {
//       isLoading: true
//     };

//     componentDidMount() {
//       // Simulate a loading delay
//       setTimeout(() => {
//         this.setState({ isLoading: false });
//       }, 2000);
//     }

//     render() {
//       const { isLoading } = this.state;
//       if (isLoading) {
//         return <div>Loading...</div>;
//       }

//       return <WrappedComponent {...this.props} />;
//     }
//   };
// };

// const SampleComponent = (props) => {
//   return (
//     <div>
//       <h1>Sample Component</h1>
//       <p>Props value: {props.value}</p>
//     </div>
//   );
// };

// const App = withLoadingIndicator(SampleComponent);

// export default App;

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

// ************************************************
import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('https://api.example.com/data');
        const response = await fetch('https://run.mocky.io/v3/6380200c-4cdf-40d8-bc44-2c6d3de23e1c');
        // https://dummy.restapiexample.com/api/v1/employees
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        console.log('lbs', jsonData);
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      {/* Render your data here */}
    </div>
  );
};

export default App;

// ************************************************