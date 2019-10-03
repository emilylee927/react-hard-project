import React,{Component} from "react";
import './Bottom.css';
import idelete from '../idelete-bin.png';
import iplus from '../iplus.png';
import iedit from '../iedit.png';

class Bottom extends Component{
    render(){
        return(
            <div>
                <div className='buttons'>
                <button onClick={this.props.previous}>{'<'} Previous</button>
                <nav>
                  <button className='blueButton'><img src={iedit} alt="edit"/>     Edit</button>
                  <button className='blueButton' onClick={this.props.delete}><img src={idelete} alt="delete"/>     Delete</button>
                  <button className='blueButton'><img src={iplus} alt="plus"/>      New</button>
                </nav>
                <button onClick={this.props.next}>Next {'>'}</button>
                </div>
            </div>
        )
    }
}

export default Bottom;