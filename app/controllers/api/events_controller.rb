class Api::EventsController < ApplicationController
    def create
        debugger
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
        params.require(:event).permit(:title, :description, :event_type, :category, :tags, :organizer, :online_event, :street, :city, :state, :zip_code, :user_id)
    end
end