import React,{Component} from "react";
import './Info.css';
import '../App.css';
import giphy from '../giphy-1.gif';

class Info extends Component{
    render(){
        return(
         <div className='infoStuff'>
          <div className='fraction'>
            <h2>{this.props.employee.id}/{this.props.employeesLength}</h2>
          </div>
          <div className='surprise'>
            <div>
              <h1 className='bigname'><u>{this.props.employee.name.first} {this.props.employee.name.last}</u></h1>
              <p><b>From:</b> {this.props.employee.city}, {this.props.employee.country}</p>
              <p><b>Job Title:</b> {this.props.employee.title}</p>
              <p><b>Employer:</b> {this.props.employee.employer}</p>
              <p><b>Favorite Movies:</b></p>
              <ol>
              {this.props.employee.favoriteMovies.map((value, index) => <li key={index}>{value}</li>)}
              </ol>
            </div>
            <img src={giphy} alt='giphy'/>
          </div>
         </div>
        );
    }
}

export default Info;