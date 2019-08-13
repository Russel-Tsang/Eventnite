class Api::RegistrationsController < ApplicationController
    def create 
        @event = Event.find(params[:event_id])
        # if user has already signed up for the event
        if @event.attendees.include?(current_user)
            # render error status -> 422
            render 'api/events/show', status: 422
        else
            @registration = Registration.create(user: current_user, event: @event)
            render 'api/events/show'
        end
    end

    def destroy 
        @registration = Registration.find(params[:id])
        @event = Event.find(params[:event_id])
        if @registration.destroy
            render 'api/events/show'
        else
            render 'api/events/show', status: 422
        end
    end
end