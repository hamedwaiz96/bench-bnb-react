import React from 'react';

class ReviewIndex extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ul>
                {this.props.reviews.map((review) => {
                    return(
                        <li>
                            Rating: {review.rating}
                            Comment: {review.body}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ReviewIndex;