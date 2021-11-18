
import React, { Component } from 'react';
import { MDBRow, MDBCard, MDBCardBody, MDBCardFooter,
    MDBCardTitle, MDBCardImage, MDBRipple, MDBCol } from 'mdb-react-ui-kit';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class UserPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        };
      }
      
      componentDidMount() {
        let username = window.location.pathname.replace('/','');
        fetch(`http://127.0.0.1:5000/${username}`)
          .then(response => response.json())
          .then(data => this.setState({ data }));
      }

      renderHelper = () => {
        return this.state.data.map((item, index) => (
            <MDBCol sm='6'>
            <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <div style={{ height: 200 }}>
                <MDBCardImage src={`${item.logo}`} fluid alt='...' />
                <a href={`${item.url}`}><div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div></a>
            </div>  
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>{item.name}</MDBCardTitle>
            </MDBCardBody>
            <MDBCardFooter>
            <div className="display-linebreak" style={{ width: 200, height: 200 }}>
            <CircularProgressbarWithChildren value={item.length - item.remaining} maxValue={item.length}>
                <div style={{ fontSize: 20, marginTop: -5, textAlign: 'center' }}>
                    REMAINING <br/> 
                    <strong>{item.remaining}</strong>  <br/>
                    <strong>DAYS</strong>
                </div>
            </CircularProgressbarWithChildren>
            </div>
            </MDBCardFooter>
            </MDBCard>
            </MDBCol>
        ))
      }

    render() {
      return(
          <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <MDBRow>
                {this.renderHelper()}
            </MDBRow>
          </div>
      )
    }
}
