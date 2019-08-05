class Api::RegistrationsController < ApplicationController
    def create 
        @event = Event.find(params[:event_id])
        # if user has already signed up for the event
        if @event.attendees.include?(current_user)
            render json: { event: "Already registered!" }
        else
            @registration = Registration.create(user_id: current_user.id, event_id: params[:event_id])
            render 'api/events/show'
        end
    end
end