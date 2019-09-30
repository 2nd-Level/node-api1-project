import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import {axiosWithAuth} from '../src/utils/axiosWithRouter'


import './App.css';

class App extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    this.getUsers();
  }


    getUsers = () => {
      axiosWithAuth()
        .get('/api/users')
        .then(res => {
          console.log(res.data)
          this.setState({
            users: res.data 
          });
        })
        .catch(err => console.log(err));
    };

  
    //  addNewTree = tree => {
    //     const newTree = {
    //       id: Date.now(),
    //       name: tree.name,
    //       member: tree.member
    //     };
    //     this.setState([...this.state.trees, newTree]);
    //   }
  
      
  
    render () {
  
      return (
        <div>
          {this.state.users.map(function(user){
            return (
              
                <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Name: {user.name}</CardTitle>
                      <CardText>Bio: {user.bio}</CardText>
                      <Button>Delete</Button>
                    </Card>
                  </Col>
                </Row>
            )
          })}
          
          </div>
       
          
      );
      
    }
    
    }

export default App;
