import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveReview = ({review, author, average_rating}) => ({
    type: RECEIVE_REVIEW,
    review,
    author,
    average_rating
});

export const createReview = (review) => (
    APIUtil.createReview(review).then((review) => dispatch(receiveReview(review)))
);