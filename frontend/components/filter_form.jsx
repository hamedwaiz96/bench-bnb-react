import React from 'react';

class FilterForm extends React.Component {
    constructor(props){
        super(props);
        this.updatekey = this.updatekey.bind(this);
        this.state = {
            "minSeating": 1,
            "maxSeating": 10
        }

    }

    updatekey(key){
        return e => {
            this.props.updateBounds(key, e.target.value)
            this.setState({[key]: e.target.value})
        }
    }

    render(){
        return(
            <form>
                <label>
                    Min Seating:
                    <input type="number" onChange={this.updatekey('minSeating')} value={this.state.minSeating} />
                </label>
                <label>
                    Max Seating:
                    <input type="number" onChange={this.updatekey('maxSeating')} value={this.state.maxSeating} />
                </label>
            </form>
        )
    }
}

export default FilterForm;