import Signup from './Signup';
import {auth, db} from './shared/firebase';
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore";
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import React from 'react';


const Home = ()=> {
  return (
    <div>
      <h1>환영합니다</h1>
      <button 
      onClick={()=> {
        signOut(auth);
      }}>로그아웃</button>
    </div>
  )
}


function App() {
  
const [is_login, setIsLogin]=React.useState(false);
console.log(auth.currentUser)
  const loginCheck = async(user) => {
    if(user) {
      setIsLogin(true);
    }else{
      setIsLogin(false);
    }
  }
  React.useEffect(()=> {
    onAuthStateChanged(auth, loginCheck)
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        {is_login? (
          <Route path='/' element={<Home/>}/>
        ): <Route path='/' element={<Login/>}/> }
       
      </Routes>

      
      
    </div>
  );
}

export default App;
