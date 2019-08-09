@events.each do |event|
  json.set! event.id do 
    json.extract! event, :id, :begin_month, :begin_day, :begin_time, :title, :city, :state, :price, :category, :venue_name
    if event.picture.attached?
      json.pictureUrl url_for(event.picture)
    end
  end 
end