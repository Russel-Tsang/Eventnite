class Api::LikesController < ApplicationController
    def create 
        @event = Event.find(params[:event_id])
        @events = Event.all
        # if user has already followed the event
        if @event.likers.include?(current_user)
            # render error status -> 422
            # render 'api/events/index', status: 422
            if (params[:request_page] === "favorites")
                render 'api/events/favorites_index', status: 422
            elsif (params[:request_page] === "index")
                render 'api/events/index', status: 422
            elsif (params[:request_page] === "show")
                render 'api/events/show', status: 422
            end
        else
            @like = Like.create(user: current_user, event: @event)
            if (params[:request_page] === "favorites")
                render 'api/events/favorites_index'
            elsif (params[:request_page] === "index")
                render 'api/events/index'
            elsif (params[:request_page] === "show")
                render 'api/events/show'
            end
        end
    end

    def destroy 
        @like = Like.find(params[:id])
        @event = Event.find(params[:event_id])
        @events = Event.all
        if @like.destroy
            if (params[:request_page] === "favorites")
                render 'api/events/favorites_index'
            elsif (params[:request_page] === "index")
                render 'api/events/index'
            elsif (params[:request_page] === "show")
                render 'api/events/show'
            end
        else
            render 'api/events/index', status: 422
        end
    end
end