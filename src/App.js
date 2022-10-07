import logo from './logo.svg';
import './App.css';
import {useState,useEffect, useRef} from 'react';
import {Routes,Route, Navigate} from 'react-router-dom';
import UsersList from './components/UsersList';
import UserDetails from './components/UserDetails';



function App() {
  
    const [state,setState] = useState({
      list:[],
      user:[]
    })  

  const [urlRequest,setUrlRequest] = useState({
		url:"https://jsonplaceholder.typicode.com/users",
    action:"users"
	})

  
  
  useEffect(()=>{

      const fetchData = async () => {
        if(!urlRequest.url) {
          return;
        }
        
        let response = await fetch(urlRequest.url);
        if(response.ok) {
        
              let data = await response.json();
						setState((state) => {
							let tempState = {
								...state,
								list:data
							}
							
							return tempState;							
						})
          
        }
      }

      fetchData();

      
  },[urlRequest]);

  let divArea=<div></div>;
    
  divArea =   <div > <UsersList list={state.list}/></div>

  
  let tempRender = <Routes>
  <Route exact path="/" element={
    <UsersList   list={state}/>
    }/>
    <Route path="/UserDetails/:userId" element ={<UserDetails />}/>
    <Route path="*" element ={<Navigate to="/"/>}/>
  </Routes>

  return (
    <div className="App">
      <header >
    {tempRender}
      </header>
    </div>
  );
}

export default App;
