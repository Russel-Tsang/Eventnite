json.extract! @event, :id, :title, :description, :event_type, :category, :organizer, :online_event, :venue_name, :street, :city, :state, :zip_code, :begin_day, :begin_month, :begin_year, :end_day, :end_month, :end_year, :begin_time, :end_time, :price
json.tags do
    @event.tags.each do |tag|
        json.set! tag.id do
            json.extract! tag, :tag_name
        end
    end
end
# make more efficient later
json.registrationId Registration.find_by(user_id: current_user.id, event_id: @event.id).id if @event.attendees.include?(current_user)
json.creatorId current_user.id if @event.creator == current_user
json.pictureUrl url_for(@event.picture) if @event.picture.attached?