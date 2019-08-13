class Api::FollowsController < ApplicationController
    def create 
        @event = Event.find(params[:event_id])
        # if user has already followed the event
        if @event.followers.include?(current_user)
            # render error status -> 422
            render 'api/events/show', status: 422
        else
            @follow = Follow.create(user: current_user, event: @event)
            render 'api/events/show'
        end
    end

    def destroy 
        @follow = Follow.find(params[:id])
        @event = Event.find(params[:event_id])
        if @follow.destroy
            render 'api/events/show'
        else
            render 'api/events/show', status: 422
        end
    end
end