# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Event.destroy_all
User.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('events')
ActiveRecord::Base.connection.reset_pk_sequence!('tags')
ActiveRecord::Base.connection.reset_pk_sequence!('taggings')
ActiveRecord::Base.connection.reset_pk_sequence!('registrations')

def event1 
    {
        title: 'Night Life', 
        description: 'this is absolutely the best event ever.', 
        event_type: 'Party or Social Gathering', 
        category: 'Family & Education', 
        organizer: 'Tiff', 
        online_event: false, 
        street: '23rd St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '11201', 
        creator: Tiffany, 
        begin_day: 1,
        begin_month: 12,
        begin_year: 2019,
        begin_time: 720,
        end_time: 780,
        price: 50
    }
end

def event2
    {
        title: 'New Years Eve', 
        description: 'this is absolutely the best New Years event ever.', 
        event_type: 'Party or Social Gathering', 
        category: 'Family & Education', 
        organizer: 'Alex', 
        online_event: false, 
        street: '23rd St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '11201', 
        creator: Alex, 
        begin_day: 31,
        begin_month: 12,
        begin_year: 2019,
        begin_time: 120,
        end_time: 180,
        price: 20
    }
end

def event3
    {
        title: 'Escape the Room', 
        description: 'this is absolutely the best Escape the room event ever.', 
        event_type: 'Party or Social Gathering', 
        category: 'Family & Education', 
        organizer: 'Lewis', 
        online_event: false, 
        street: '14th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '11001', 
        creator: Lewis, 
        begin_day: 4,
        begin_month: 3,
        begin_year: 2020,
        begin_time: 780,
        end_time: 810,
        price: 20
    }
end

Alex = User.create!(email: 'alex@gmail.com', fname: 'Alex', lname: 'Smith', password: 'password')
Tiffany = User.create!(email: 'tiff@gmail.com', fname: 'Tiffany', lname: 'Smith', password: 'password')
Lewis = User.create!(email: 'lewis@gmail.com', fname: 'Lewis', lname: 'Smith', password: 'password')

NightClub = Event.create!(event1()) 
GradParty = Event.create!(event2())