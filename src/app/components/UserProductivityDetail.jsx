import React from 'react';
import ReactTable from "react-table";
import { Segment, Modal, Button, Icon, Select, Grid, Input } from 'semantic-ui-react';
import FileUploader from './FileUploader.jsx';

class UserProductivityDetail extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
         
        }
    }
    
    render() {
        

        const data = [{
            name: 'Tanner Linsley',
            age: 26,
            friend: {
              name: 'Jason Maurer',
              age: 23,
            }
          }]
        
          const columns = [{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
          }, {
            Header: 'Age',
            accessor: 'age',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
          }, {
            id: 'friendName', // Required because our accessor is not a string
            Header: 'Friend Name',
            accessor: d => d.friend.name // Custom value accessors!
          }, {
            Header: props => <span>Friend Age</span>, // Custom header components!
            accessor: 'friend.age'
          }]

        return (
            <div style={{ width: '100%' }}>
              <Segment basic>
                <Modal trigger={
                  <Button floated='right' icon="cloud upload" content="Upload" style={{ marginRight: 50, marginBottom: 10 }} />
                }>
                <Modal.Header>Upload Excel</Modal.Header>
                  <Modal.Content>
                    <Grid divided='vertically'>
                      <Grid.Row columns={2}>
                        <Grid.Column>
                            Select Month <Select  />
                        </Grid.Column>
                        <Grid.Column>
                            Select Year <Input placeholder="YYYY"/>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row columns={1}>
                          <FileUploader />
                      </Grid.Row>
                    </Grid>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button floated="right" color="blue" content="Upload" style={{ marginBottom: 5 }} />
                  </Modal.Actions>
                </Modal>
              </Segment>

              <ReactTable style={{ height: '90%', width: '95%', marginLeft: 30 }}
                  data={data}
                  columns={columns}
              />
            </div>
        )
    }
}

export default UserProductivityDetail;