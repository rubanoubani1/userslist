import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState,useEffect, useRef} from 'react';

import { Routes, Route, useParams } from 'react-router-dom';


const UserDetails = (userId) => {
     
    
    let user = []; 
      let url =  "https://jsonplaceholder.typicode.com/users/"+userId

      
    const fetchData = async () => {
        if(!url) {
          return;
        }
        
        let response = await fetch(url);
        if(response.ok) {
        
              user = await response.json();
			
          
        }
      }

      fetchData();
      
        return (
            <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <Row key={user.id}>
			<Col>
			<Card   border="primary" style={{ width: '18rem', margin:'2rem', padding:'2rem'}} >
				
			<Row>
				 <Card.Body>
				
					<Card.Title>{user.name}</Card.Title>
					<Card.Text>{user.username}</Card.Text>
					<Card.Text>{user.website}</Card.Text>
					
				</Card.Body>

				<Button variant="primary" onClick={()=>UserDetails(user.id)}>More Details</Button>
				
				</Row> 
			</Card>
			</Col>
			</Row>
              
            
            </Container>
          );
        
      
      
    
}

export default UserDetails;