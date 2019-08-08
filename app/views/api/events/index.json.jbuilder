@events.each do |event|
  json.set! event.id do 
    json.extract! event, :id, :begin_month, :begin_day, :title, :city, :state, :price, :category
    if event.picture.attached?
      json.pictureUrl url_for(event.picture)
    end
  end 
end