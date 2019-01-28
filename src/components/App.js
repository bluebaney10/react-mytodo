import React from 'react'

class App extends React.Component{
  state={
    inputText:'',
    listItem:[]
  }
  
  deleteListAtIndex=(index)=>{
    const result=this.state.listItem
    result.splice(index,1)
    this.setState({
      listItem:result
    })
  }


  submitList=()=>{
    this.setState({
      listItem:this.state.listItem.concat([this.state.inputText]),
      inputText:''
    })
  }

  handleChangeText=(event)=>{
    this.setState({inputText:event.target.value})
  }

  handleKeyPress=(event)=>{
   if(event.key=='enter'){
     this.submitList()
   }
  }

  render(){
    return(
      <div>
      <h1>My To-Do-List</h1>
      <input type="text" onChange={this.handleChangeText}
      value={this.state.inputText} 
      placeholder="what do you do?"
      onKeyPress={this.handleKeyPress}/>
      <button onClick={this.submitList}>Add</button>
      
      <div className="list-box">
      {
        this.state.listItem.map((value,index)=>{
          return(
            <div key={index}>
              <div>{value}</div>
              <div onClick={this.deleteListAtIndex.bind(this,index)}>x</div>
            </div>
          )

        })
      }
      </div>

      </div>

    )

  }
}




export default App