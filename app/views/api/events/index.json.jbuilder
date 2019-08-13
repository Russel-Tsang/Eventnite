@events.each do |event|
  json.set! event.id do 
    json.extract! event, :id, :title, :city, :state, :price, :category
    json.set! :beginMonth, event.begin_month 
    json.set! :beginDay, event.begin_day 
    json.set! :beginTime, event.begin_time
    json.set! :venueName, event.venue_name
    if event.picture.attached?
      json.set! :pictureUrl, url_for(event.picture)
    end
  end 
end