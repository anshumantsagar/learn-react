import React from 'react'

const Hello1 = () => {
  // return (
  //   <div>
  //     <h1>Hello by Hello Class</h1>
  //   </div>
  // )
  return React.createElement(
    'div',
    {id:'hello' , className:'dummyHello'},
    React.createElement('h1',null,'Hello by hello Class'))
}

export default Hello1