class Api::ReviewsController < ApplicationController
    before_action :require_logged_in

    def create
        @review = current_user.reviews.new(review_params)
        if @review.save
            render "api/reviews/show.json.jbuilder"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def review_params
        params.require(:review).permit(:bench_id, :rating, :body)
    end
end
