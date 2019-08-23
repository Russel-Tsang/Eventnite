class Api::LikesController < ApplicationController
    def create 
        @event = Event.find(params[:event_id])
        # if user has already followed the event
        if @event.likers.include?(current_user)
            # render error status -> 422
            render 'api/events/show', status: 422
        else
            @like = Like.create(user: current_user, event: @event)
            render 'api/events/show'
        end
    end

    def destroy 
        @like = Like.find(params[:id])
        @event = Event.find(params[:event_id])
        if @like.destroy
            render 'api/events/show'
        else
            render 'api/events/show', status: 422
        end
    end
end