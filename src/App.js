import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './Component/Info';
import Data from './Component/Data';
import Bottom from './Component/Bottom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: Data,
      employeeIndex: 0
    };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.delete = this.delete.bind(this);
  }

  previous(){
    if (this.state.employeeIndex > 0) {
      this.setState({
        employeeIndex: this.state.employeeIndex-1
    })
    }
    
  }

  next(){
    if (this.state.employeeIndex < this.state.employees.length - 1) {
      this.setState({
        employeeIndex: this.state.employeeIndex+1
    })
    }
    
  }

  delete(){
    var array = [...this.state.employees];
    array.splice(this.state.employeeIndex, 1);
    this.setState({employees: array});
    
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h2>Home</h2>
      </header>
      <div className='body'>
         <div className="info-box">
          <Info employee={this.state.employees[this.state.employeeIndex]} 
                employeesLength={this.state.employees.length}/>
         </div>
         <Bottom className="bottom" previous={this.previous} next={this.next} delete={this.delete}/>
      </div>
         
    </div>
  );
}
}
export default App;
