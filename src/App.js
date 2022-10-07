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

   
      console.log("inside Effect url="+urlRequest.url);
      ////
      
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

      ///
    /*  let res =  fetch(urlRequest.url).then(res => res.json()).then(result =>setState({
                   
          list: result
      })).catch(console.log);
      return;*/
  },[urlRequest]);

  let divArea=<div></div>;
  
  console.log('action is  = '+urlRequest.action+" "+urlRequest.url);
  /*if(urlRequest.action==='details') {
    
      divArea = <div > <UserDetails  list={state.list}/></div>
      
  }else{
    divArea =   <div > <UsersList list={state.list} getUserDetail={getUserDetail}/></div>
  }*/
  ///
  divArea =   <div > <UsersList list={state.list}/></div>

  ///
if(state.UsersList)
  return (
    <div className="App">
      <header >
    {divArea}
      </header>
    </div>
  );
}

export default App;
