@events.each do |event|
  json.set! event.id do 
    json.extract! event, :id, :begin_month, :begin_day, :title, :city, :state, :price
  end 
end