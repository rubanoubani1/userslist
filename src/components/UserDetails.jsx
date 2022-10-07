import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState,useEffect, useRef} from 'react';

import { Routes, Route, useParams } from 'react-router-dom';


const UserDetails = () => {
    const params = useParams();
    const [state,setState] = useState({
        userId:params.userId,
        user:''
      })

    let userId=params.userId;
    
    useEffect(() => {

		const fetchData = async () => {
			if(!userId) {
				return;
			}
			let response = await fetch("https://jsonplaceholder.typicode.com/users/"+userId);
						if(response.ok) {
               let  data = await response.json();
						
                        setState((state) => {
							let tempState = {
								...state,
								user:data
							}
                        
							return tempState;
                        });	
            }
        }
        fetchData();
    },[state.userId]);
           
      if(state.user!=="") {
        return (
            <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <Row key={state.user.id}>
			<Col>
			<Card   border="primary" style={{ width: '18rem', margin:'2rem', padding:'2rem'}} >
				
			<Row>
				 <Card.Body>
				
					<Card.Title>name: {state.user.name}</Card.Title>
					<Card.Text>Username: {state.user.username}</Card.Text>
					<Card.Text>Website: {state.user.website}</Card.Text>
					<Card.Text>Email: {state.user.email}</Card.Text>
                    <Card.Text>Phone: {state.user.phone}</Card.Text>
                    <Card.Text>Company: {state.user.company.name}</Card.Text>
                    <Card.Text>Address:</Card.Text>
                    <Card.Text>{state.user.address.street}</Card.Text>
                    <Card.Text>{state.user.address.city}</Card.Text>
                    <Card.Text>{state.user.address.suit}</Card.Text>
                    <Card.Text>{state.user.address.zipcode}</Card.Text>


				</Card.Body>

               				
				</Row> 
			</Card>
			</Col>
			</Row>
              
            
            </Container>
          );
        
        } else{
            return;
        }
      
    
}

export default UserDetails;