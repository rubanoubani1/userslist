import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserDetails from './UserDetails';
import {useNavigate} from 'react-router-dom';
import {Routes,Route,Link} from 'react-router-dom';

const UsersList = (props) => {
	const navigate = useNavigate();
/*
	const [urlUserRequest,setUrlUserRequest] = useState({
		url:"",
    	action:""
	})

	const getUserDetail =(id)=>{

		  setUrlUserRequest({
			url:"https://jsonplaceholder.typicode.com/users/"+id,
			action:'details'
		  })
		  
		  return;
		}
*/	
const navigateToDetails = (userId)=>{
	console.log(userId);
	
	 navigate("/UserDetails/"+userId);
	
}



	console.log(props);
	let users = props.list.map((user) => {
		let firstLetter = user.name.charAt(0);
		
		return (
			
			<Row key={user.id}>
			<Col>
			<Card   border="primary" style={{ width: '18rem', margin:'2rem', padding:'2rem'}} >
				<Row>
					<Card.Header className="bg-light rounded-circle fs-1"  style={{ width: '50%', padding:'1rem', margin:'auto'}}>{firstLetter}</Card.Header>
				</Row>
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
		)

	})

	return(
		<Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
			
			{users}
			
		</Container>
		)
}

export default UsersList;