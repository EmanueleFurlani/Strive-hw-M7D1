import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'

const SingleSearch = ({data}) => {

    return ( 
        <Col sm={6}>         
            <Card className="m-2">
                <Row>
                    <Col>
                        <Card.Header>{data.title}</Card.Header>                
                        <Card.Body>
                        <Card.Title><Link to={`/${data.company_name}`}>{data.company_name}</Link></Card.Title>
                            <Button variant="outline-success" className={"rounded-circle border border-primary"}><a className="text-dark" href={data.url}>Open</a></Button>
                        </Card.Body>
                    </Col> 
                </Row>
            </Card>
        </Col>       
    );   
} 

export default SingleSearch;