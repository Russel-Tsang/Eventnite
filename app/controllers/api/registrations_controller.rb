class Api::RegistrationsController < ApplicationController
    def create 
        @registration = Registration.new(user_id: current_user.id, event_id: params[:event_id])
        if @registration.save
            @event = @registration.event
            render 'api/events/show'
        else
            render json: @registration.errors.full_messages, status: 422
        end
    end
end