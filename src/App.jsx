import './App.css';
import { Header } from "./components/Header/Header";
import { UserItem } from './components/UserItem/UserItem';

function App() {
  return (
    <div className="App">
      <Header/>
      <UserItem/>
    </div>
  );
}

export default App;
