class Bench < ApplicationRecord
    validates :lat, :lng, presence: true

    has_many :reviews

    def self.in_bounds(params)
        self.where("lat < ?", params[:bounds][:northEast][:lat])
            .where("lat > ?", params[:bounds][:southWest][:lat])
            .where("lng > ?", params[:bounds][:southWest][:lng])
            .where("lng < ?", params[:bounds][:northEast][:lng])
    end

    def average_rating
        reviews.average(:rating)
    end
end