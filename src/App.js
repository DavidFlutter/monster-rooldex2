import './App.css';
// import robots  from "./robots"
import CardsList from './components/CardsList';
import Search from './components/Search';
import Scroll from './components/Scroll';
import { useEffect, useState } from 'react';

function App() {
  const [robotsList, setRobotsList] = useState(null);
  const [filteredRobots, setFilteredRobots] = useState([]);
  const handleSearch = (e) => {
    let newList = robotsList.filter(robot => robot.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredRobots(newList);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setRobotsList(data);
        setFilteredRobots(data);
      })
  }, []);

  if(!robotsList){
    return <p className='loading'>Loading...</p>
  }
  return (
    <div className="App">
      <h1>Friends</h1>
      <Search handleSearch={handleSearch}></Search>
      <Scroll>
        <CardsList filteredRobots={filteredRobots}></CardsList>
      </Scroll>
    </div>
  );
}

export default App;
