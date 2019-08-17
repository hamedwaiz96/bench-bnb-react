import React from 'react';

class FilterForm extends React.Component {
    constructor(props){
        super(props);
        this.updatekey = this.updatekey.bind(this);
    }

    updatekey(key){
        return e => this.props.updateBounds(key, parseInt(e.target.value))
    }

    render(){
        return(
            <form>
                <label>
                    Min Seating:
                    <input type="number" onChange={this.updatekey('minSeating')} />
                </label>
                <label>
                    Max Seating:
                    <input type="number" onChange={this.updatekey('maxSeating')} />
                </label>
            </form>
        )
    }
}

export default FilterForm;