import React from 'react'


export default function Alert(props) {
    return (
          <div style={{height: '50px'}}>
          {
            props.alert && <div class="alert alert-success" role="alert">
              {props.alert.type} , {props.alert.message}
            
            </div>
          }
          </div>
   
    )
}