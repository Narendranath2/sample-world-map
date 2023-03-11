import './App.css';
import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import WorldMap from './components/WorldMap';
import axios from 'axios';

function App() {
  const [selectedCities, setSelectedCities] = useState({
    cityOne: null,
    cityTwo: null,
    cityThree: null,
    cityFour: null
  });

  const [dropDownOptions, setDropdownOptions] = useState([]);

  useEffect(() => {
    async function initData() {
      try {
        const response = await axios.get("http://localhost:5000/cities");
        const cities = response.data;
        let options = [];
        Object.keys(cities).forEach((city) => {
          const option = {
            label: city,
            value: cities[city]["Position"]
          }
          options.push(option);
        })
        setDropdownOptions(options);
      } catch (error) {
        console.error(error);
      }
    }
    initData();
  }, []);

  return (
    <div className="App">
      <Dropdown onChange={(data) => setSelectedCities({ ...selectedCities, cityOne: data })} value={selectedCities.cityOne} options={dropDownOptions} />
      <Dropdown onChange={(data) => setSelectedCities({ ...selectedCities, cityTwo: data })} value={selectedCities.cityTwo} options={dropDownOptions} />
      <Dropdown onChange={(data) => setSelectedCities({ ...selectedCities, cityThree: data })} value={selectedCities.cityThree} options={dropDownOptions} />
      <Dropdown onChange={(data) => setSelectedCities({ ...selectedCities, cityFour: data })} value={selectedCities.cityFour} options={dropDownOptions} />
      <WorldMap selectedCities={selectedCities} />
    </div>
  );
}

export default App;
