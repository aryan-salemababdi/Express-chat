import './App.css';


// Components
import Login from './components/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import Chatroom from './components/chatroom/Chatroom';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chatroom" element={<Chatroom />} />
        <Route path="/*" element={<Navigate to="/login" />}/>
      </Routes>
    </div>
  );
}

export default App;
