import React from 'react';
import MyForm from './Components/MyForm'

var data = [
  'https://scontent-sea1-1.xx.fbcdn.net/t31.0-8/13131696_1316468051703260_667967433047815511_o.jpg',
  "Fusce dictum dignissim lobortis. Proin molestie sodales ultrices. Nunc lorem diam, sollicitudin vel tristique vitae, elementum tempus nulla. Nam elementum urna in purus dignissim mollis. Morbi semper nisl non orci aliquam, eu sodales augue sagittis. Duis sed leo ullamcorper, efficitur tortor nec, faucibus purus. Pellentesque consequat sit amet quam non bibendum. Fusce viverra ante at elit tincidunt ornare. Sed placerat felis in tellus tempus, eget mattis quam consectetur.",
  'Software Engineer'
];

class App extends React.Component {
  constructor(){
      super()
      this.state={
        chat: '',
        input: ''
      }
    }
  SubmitMe(event){
    event.preventDefault()
    this.setState({
      chat: this.state.chat + '\n' + data[2] + ': ' + this.state.input
    })
    event.target.value = ''
  }
  HandleMe(event){
    event.preventDefault()
    this.setState({
      input : event.target.value
    })

  }
  render(){
    var style = {
      margin: 'auto',
      textAlign: 'center',
      borderStyle: 'solid',
      width:' 50%'
    }
    return(
      <div style={style}>
        <MyForm 
          chatty={this.state.chat}
          handle={this.HandleMe.bind(this)}
          sub={this.SubmitMe.bind(this)}
          picture={data[0]}
          bio={data[1]}
           
        />
      </div>
    ) 
  }
}

export default App;
