import React from 'react'
import {Card} from 'react-bootstrap'

function PostsStyle1(props){
    return(
<div >
<Card style={{ width: '18rem'}}>
  <Card.Body>
    <Card.Title>Author: {props.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Title: {props.title}</Card.Subtitle>
    <Card.Text>
      {props.body}
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
</div>


    )
}

export default PostsStyle1


