import { Card } from 'react-bootstrap'
import React from 'react'
function PostsStyle(props) {

    console.log('style', props)
    return (
        <div>
            <div class="container">
                <div class="row" bg = "light">
                    {
                        props.id % 2 != 0 ?
                            <div class="col">
                                <Card bg="info"> 
                                    <Card.Header><h4>Title:</h4> {props.title}</Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <p><h6>Content:</h6>
                                                {' '}{props.body}
                                                {' '}
                                            </p>
                                            {/* <footer className="blockquote-footer">
                                                By <cite title="Source Title">{props.name}</cite>
                                            </footer> */}
                                        </blockquote>
                                    </Card.Body>
                                </Card>
                                <hr>
                                </hr>
                            </div> :
                            <div class="col">
                                <Card bg="warning">
                                    <Card.Header bg="info"><h4>Title:</h4> {props.title}</Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <p><h6>Content:</h6>
                                                {' '}{props.body}
                                                {' '}
                                            </p>
                                            {/* <footer className="blockquote-footer">
                                                By <cite title="Source Title">{props.name}</cite>
                                            </footer> */}
                                        </blockquote>
                                    </Card.Body>
                                </Card>
                                <hr>
                                </hr>
                            </div>
                    }



                </div>
            </div>
        </div>

    )
}

export default PostsStyle
