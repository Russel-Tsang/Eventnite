json.event do
    json.extract! @event, :id, :title, :description, :category, :organizer, :street, :city, :state, :price
    json.set! :eventId, @event.id
    json.set! :eventType, @event.event_type
    json.set! :onlineEvent, @event.online_event
    json.set! :venueName, @event.venue_name
    json.set! :zipCode, @event.zip_code
    json.set! :beginDay, @event.begin_day
    json.set! :beginMonth, @event.begin_month
    json.set! :beginYear, @event.begin_year
    json.set! :endDay, @event.end_day
    json.set! :endMonth, @event.end_month
    json.set! :endYear, @event.end_year
    json.set! :beginTime, @event.begin_time
    json.set! :endTime, @event.end_time

    tag_ids = []
    @event.tags.each { |tag| tag_ids << tag.id }
    json.tagIds tag_ids

    follower_ids = []
    @event.followers.each { |follower| follower_ids << follower.id }
    json.followerIds follower_ids
    json.set! :registrationId, Registration.find_by(user_id: current_user.id, event_id: @event.id).id if @event.attendees.include?(current_user)
    json.set! :followId, Follow.find_by(user: current_user, event: @event).id if @event.followers.include?(current_user)
    json.set! :creatorId, current_user.id if @event.creator == current_user
    json.set! :pictureUrl, url_for(@event.picture) if @event.picture.attached?
end

json.tags do
    @event.tags.each do |tag|
        json.set! tag.id do
            json.extract! tag, :id
            json.set! :tagName, tag.tag_name
        end
    end
end
json.likes do
  if current_user && !current_user.liked_events.empty?
    current_user.likes.each do |like|
      json.set! like.event_id do
          json.set! :eventId, like.event_id
          json.set! :likeId, like.id
      end
    end
  else
    json.set! :noLikedEvents, 'false'
  end
end