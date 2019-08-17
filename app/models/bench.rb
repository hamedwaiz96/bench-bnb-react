class Bench < ApplicationRecord
    validates :lat, :lng, presence: true

    def self.in_bounds(params)
        self.where("lat < ?", params[:bounds][:northEast][:lat])
            .where("lat > ?", params[:bounds][:southWest][:lat])
            .where("lng > ?", params[:bounds][:southWest][:lng])
            .where("lng < ?", params[:bounds][:northEast][:lng])
    end
end