class Api::BenchesController < ApplicationController
    def index
        @benches = params[:bounds] ? Bench.in_bounds(params[:bounds]) : Bench.all
        render "api/benches/index.json.jbuilder"
    end

    def create
        @bench = Bench.new(bench_params)
        if @bench.save
            render 'api/benches/show.json.jbuilder'
        else
            render json: @bench.errors.full_messages, status: 422
        end
    end

    def show
        @bench = Bench.find(params[:id])
        if @bench
            render 'api/benches/show.json.jbuilder'
        else
            render json: @bench.errors.full_messages, status: 422
        end
    end

    def bench_params
        params.require(:bench).permit(:description, :lat, :lng)
    end
end
