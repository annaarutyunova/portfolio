import React, { useState, useEffect  } from 'react';
import logo from './wsh_resized.png';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <a className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer">
//         <img src={logo} className="App-logo" alt="logo" />
//         </a>
//       </header>
//     </div>
//   );
// }

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [age, setAge] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/name');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run only once on component mount

  const handleImageClick = async () => {
    console.log('Image clicked');
    try {
      const getInfo = await fetch('http://localhost:8080/age');
      const ageData = await getInfo.json();
      console.log('Age data:', ageData); 
      setAge(ageData);
    } catch (error) {
      console.error('Error fetching age', error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      {data ? (
        <React.Fragment>
        <p>{data}</p>
        <p>Click on the image below to learn a fun fact</p>
      </React.Fragment>
      ) : (
        <p>Loading...</p>
      )}
        <img
         src={logo} 
         className="App-logo" 
         alt="logo" 
         onClick={handleImageClick} 
         />
      {age ? (
        <React.Fragment>
        <p>I am {age}</p>
      </React.Fragment>
      ) : (
        <p>Image hasn't been clicked</p>
      )}
      </header>
    </div>
  );
};
export default App;
