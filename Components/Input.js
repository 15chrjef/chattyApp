import React from 'react'

export default class Input extends React.Component{
  render(){
    var style={
      width:'75%',
      height:'200px', 
      margin: 'auto',
      resize: 'none',
      textAlign: 'center',
      fontSize: '20px'
    }
    var style1={
      width:'25%',
      margin: 'auto'
    }
    
    return(
      <form onSubmit={this.props.sub}> 

        <textarea placeholder='ChatApp Messages'style={style} readOnly value={this.props.text}></textarea>
        <div>Messager</div>
        <input onChange={this.props.handle} type = 'text'></input>
        <input  type= 'submit'></input>
      </form>
    )
  }
}