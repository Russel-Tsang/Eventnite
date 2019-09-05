class Api::EventsController < ApplicationController
    def index
        @events = Event.all.with_attached_picture
        render :index
    end

    def create
        @event = current_user.events.new(event_params.except(:tags))
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
        @event = Event.find(params[:id])
        if @event 
            render :show
        else
            render json: @event.errors.full_messages, status: 404
        end
    end

    def update 
        @event = Event.find(params[:id])
        if @event.update(event_params.except(:tags, :id))
            # keep only the tags defined in event_params[:tags]
            if event_params[:tags]
                @event.tag_ids = event_params[:tags].map { |tag| Tag.create(tag_name: tag).id }
            else
                @event.tags.destroy_all
            end
            render :show
        elsif !@event.valid?
            render json @event.errors.full_messages, status: 422
        end
    end

    def destroy
        event = Event.find(params[:id])
        if event.destroy
            @events = current_user.events
            render :index
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def created_events_index
        @events = User.find(params[:userId]).events
        if @events 
            render :index
        else
            render json: @event.errors.full_messages, status: 404
        end
    end

    def liked_events_index
        @events = User.find(params[:userId]).liked_events
        if @events 
            render :index
        else
            render json: @event.errors.full_messages, status: 404
        end
    end

    private

    def event_params
        params.require(:event).permit(
            :title, 
            :description, 
            :event_type, 
            :category, 
            :tags, 
            :organizer, 
            :online_event, 
            :venue_name,
            :street, 
            :city, 
            :state, 
            :zip_code, 
            :user_id, 
            :begin_day, 
            :begin_month, 
            :begin_year, 
            :end_day, 
            :end_month, 
            :end_year, 
            :begin_time, 
            :end_time, 
            :picture,
            :price,
            :lat,
            :lng,
            :tags => []
        )
    end
end