class Api::EventsController < ApplicationController
    def index
        @events = Event.all
        render :index
    end

    def create
        debugger
        @event = current_user.events.new(event_params.except(:tags))
        # debugger
        if !@event.valid?
            render json: @event.errors.full_messages, status: 422
        else
            @event.save
            if event_params[:tags]
                event_params[:tags].each do |tag|
                    tag = Tag.find_by("tag_name": tag) || Tag.create(tag_name: tag)
                    Tagging.create(tag: tag, event: @event)
                end
            end
            render :show
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

    def update 
        debugger
        @event = Event.find(params[:event][:id])
        if @event.update(event_params.except(:id))
            render :show
        else
            render json @event.errors.full_messages, status: 422
        end
    end

    private

    def event_params
        params.require(:event).permit(:title, :description, :event_type, :category, :tags, :organizer, :online_event, :street, :city, :state, :zip_code, :user_id, :begin_day, :begin_month, :begin_year, :end_day, :end_month, :end_year, :begin_time, :end_time, :tags => [])
    end
end