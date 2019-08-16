import React from 'react';

class BenchForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: "",
            seating: "",
            lat: "",
            lng: "" 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updatekey = this.updatekey.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        
    }

    updatekey(key){
        return e => {
            this.setState({[key]: e.target.value})
        }
    }

    render(){
        <form onSubmit={this.handleSubmit}>
            <label>
                Description:
                <textarea onChange={this.updatekey('description')} value={this.state.description} name="description" id="" cols="30" rows="10"></textarea>
                </label>
            <label>
                Number of seats:
                <input type="number" onChange={this.updatekey('seating')} value={this.state.seating}/>
            </label>
            <label>
                Latitude: 
                <input type="number" onChange={this.updatekey('lat')} value={this.state.lat}/>
            </label>
            <label>
                Longitude: 
                <input type="number" onChange={this.updatekey('lng')} value={this.state.lng}/>
            </label>
            <input type="submit" value="Add Bench"/>
        </form>
    }
}

export default BenchForm;