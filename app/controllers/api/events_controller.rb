class Api::EventsController < ApplicationController
    def index
        @events = Event.all
        render :index
    end

    def create
        @event = Event.new(event_params)
        if @event.save
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def show
        @event = Event.find(params[:event][:id])
        if @event 
            render :show
        else
            render json: @event.errors.full_messages, status: 404
        end
    end

    private

    def event_params
        params.require(:event).permit(:title, :description, :event_type, :category, :tags, :organizer, :online_event, :street, :city, :state, :zip_code, :user_id, :begin_day, :begin_month, :begin_year, :end_day, :end_month, :end_year, :begin_time, :end_time, :tags => [])
    end
end