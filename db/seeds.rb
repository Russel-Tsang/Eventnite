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
        description: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
        The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs.", 
        event_type: 'Party or Social Gathering', 
        category: 'Family & Education', 
        organizer: 'Rolanda', 
        online_event: false, 
        street: '23rd St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '11201', 
        creator: Rolanda, 
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
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with", 
        event_type: 'Party or Social Gathering', 
        category: 'Family & Education', 
        organizer: 'Zoe', 
        online_event: false, 
        street: '23rd St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '11201', 
        creator: Zoe, 
        begin_day: 31,
        begin_month: 12,
        begin_year: 2019,
        begin_time: 120,
        end_time: 180,
        price: 10
    }
end

def event3
    {
        title: 'Escape the Room', 
        description: "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.", 
        event_type: 'Conference', 
        category: 'Family & Education', 
        organizer: 'Alex', 
        online_event: false, 
        street: '14th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '11001', 
        creator: Alex, 
        begin_day: 4,
        begin_month: 3,
        begin_year: 2020,
        begin_time: 780,
        end_time: 810,
        price: 20
    }
end

def event4
    {
        title: 'Birthday Bash', 
        description: 'this is absolutely the best Escape the room event ever.', 
        event_type: 'Party or Social Gathering', 
        category: 'Family & Education', 
        organizer: 'Lillian', 
        online_event: false, 
        street: '14th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '11001', 
        creator: Lillian, 
        begin_day: 4,
        begin_month: 3,
        begin_year: 2020,
        begin_time: 780,
        end_time: 810,
        price: 20
    }
end

Zoe = User.create!(email: 'alex@gmail.com', fname: 'Zoe', lname: 'Smith', password: 'password')
Rolanda = User.create!(email: 'tiff@gmail.com', fname: 'Rolanda', lname: 'Smith', password: 'password')
Alex = User.create!(email: 'lewis@gmail.com', fname: 'Alex', lname: 'Smith', password: 'password')
Lillian = User.create!(email: 'lillian@gmail.com', fname: 'Lillian', lname: 'Wang', password: 'password')

NightClub = Event.create!(event1()) 
GradParty = Event.create!(event2())
EscapeRoom = Event.create!(event3())
BirthdayBash = Event.create!(event4())
