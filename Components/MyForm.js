import React from 'react'
import Input from './Input'
import Profile from './Profile'
import ChatBox from './ChatBox'

export default class MyForm extends React.Component{
  render(){
    return(
      <div>
        <h3>Chat App</h3>
          <ChatBox text={this.props.chatty}/>
          <Input text={this.props.chatty} sub={this.props.sub} handle={this.props.handle}/>
          <Profile bio={this.props.bio} picture={this.props.picture}/>
      </div>
    )
  }
}