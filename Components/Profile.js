import React from 'react'

export default class Profile extends React.Component{
  render(){
    var style={
      height: '30%',
      width: '30%',
      marginTop: '20px',
      postion: 'absolute'

    }
    var style2= {
      marginTop: '200px'
    }
    return(
      <div>
        <img style={style} src={this.props.picture} alt='src'></img>
        <p > {this.props.bio}</p>
      </div>
    )
  }
}