import React, {Component} from 'react'

class EventBind extends Component {
  constructor(props){
    super(props)

    this.state = {
      message:'Hello'
    }
  }
  // clickHand(){
  //   this.setState({
  //     message : 'welcome'
  //     })
  //   console.log(this)
  // }
  
  clickHand = () => {
    this.setState({
      message : 'welcome'
      })
    console.log(this)
  }

  render(){
    return(
      <div>
        <div>{this.state.message}</div>
        {/*<button onClick={ () => this.clickHand()}>Click</button>*/}
        <button onClick={this.clickHand.bind(this)}>Click</button>
      </div>
    )
  }
}

export default EventBind