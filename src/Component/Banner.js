import React, { Component } from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Banner extends Component {
    render() {
        return (
            <Jumbotron className='banner text-center'>
                <Container>
                    <div>
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Link to={'./vr'}><Button variant="primary">Go Tour</Button>
                            </Link>
                        </p>
                    </div>
                </Container>
            </Jumbotron>
        )
    }
}
