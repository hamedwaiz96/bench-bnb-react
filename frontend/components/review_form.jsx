import React from 'react';
import {withRouter} from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rating: "",
            body: "",
            bench_id: parseInt(this.props.match.params.benchId)
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.benchshow = this.benchshow.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createReview(this.state)
        this.benchshow();
    }

    benchshow(){
        this.props.history.push(`/benches/${this.props.match.params.benchId}`)
    }

    updatekey(key){
        return e => this.setState({[key]: e.target.value})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Rating:
                    <input type="number" min="1" max="5" value={this.state.rating} onChange={this.updatekey("rating")} />
                    </label>
                    <label>
                        Review:
                    <textarea name="body" cols="30" rows="10" value={this.state.body} onChange={this.updatekey("body")}></textarea>
                    </label>
                    <input type="submit" value="Create Review" />
                </form>
                <button onClick={this.benchshow}>Cancel</button>
            </div>
            
        )
    }
}

export default withRouter(ReviewForm);