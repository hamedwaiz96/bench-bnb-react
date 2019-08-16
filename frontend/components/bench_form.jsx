import React from 'react';
import {withRouter} from 'react-router-dom';

class BenchForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: "",
            seating: "",
            lat: this.props.lat,
            lng: this.props.lng 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updatekey = this.updatekey.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createBench(this.state);
        this.props.history.push('/');
    }

    updatekey(key){
        return e => {
            this.setState({[key]: e.target.value})
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Description:
                <textarea onChange={this.updatekey('description')} value={this.state.description} name="description" id="" cols="30" rows="10"></textarea>
                </label>
                <label>
                    Number of seats:
                <input type="number" onChange={this.updatekey('seating')} value={this.state.seating} />
                </label>
                <label>
                    Latitude:
                <input type="number" disabled value={this.props.lat} />
                </label>
                <label>
                    Longitude:
                <input type="number" disabled value={this.props.lng} />
                </label>
                <input type="submit" value="Add Bench" />
            </form>
        )
        
    }
}

export default withRouter(BenchForm);