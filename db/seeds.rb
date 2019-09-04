# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
# require 'faker'
# require 'open-uri'

# Event.destroy_all
# User.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('events')
ActiveRecord::Base.connection.reset_pk_sequence!('tags')
ActiveRecord::Base.connection.reset_pk_sequence!('taggings')
ActiveRecord::Base.connection.reset_pk_sequence!('likes')
ActiveRecord::Base.connection.reset_pk_sequence!('registrations')

today = Date.today.to_s
tomorrow = Date.today.tomorrow.to_s
sunday = Date.today.at_end_of_week.to_s
next_week = Date.today.next_week.to_s

date_today, month_today = today[5..6].to_i, today[8..10].to_i
date_tomorrow, month_tomorow = tomorrow[5..6].to_i, tomorrow[8..10].to_i
date_sunday, month_sunday = sunday[5..6].to_i, sunday[8..10].to_i
date_next_week, month_next_week = next_week[5..6].to_i, next_week[8..10].to_i

def today 
    today = Date.today.to_s
    month_today, date_today = today[5..6].to_i, today[8..10].to_i
    return {month: month_today, date: date_today}
end

def tomorrow 
    tomorrow = Date.today.tomorrow.to_s
    month_tomorow, date_tomorrow  = tomorrow[5..6].to_i, tomorrow[8..10].to_i
    return {month: month_tomorow, date: date_tomorrow}
end

def sunday
    sunday = Date.today.at_end_of_week.to_s
    month_sunday, date_sunday = sunday[5..6].to_i, sunday[8..10].to_i
    return {month: month_sunday, date: date_sunday}
end

def next_week
    next_week = Date.today.next_week.to_s
    month_next_week, date_next_week = next_week[5..6].to_i, next_week[8..10].to_i
    return {month: month_next_week, date: date_next_week}
end

def event1 
    {
        title: 'Night Life', 
        description: "We Invite All Of Our Dance Partners To Join Us For A Night Of Classic Dance Music Inspired By The Loft And Paradise Garage, Including Many Of Our Favorite Club Songs Of Today.

Program Performed From the Vinyl Collections Of Our Musical Host's: DJ Coney And Trevor Fox.

Satuday, October 5th, 2019

9:00PM x 3:00AM

347 West 34th Street,

New York, NY

Between 8th And 9th Avenues

Don’t Forget To Bring Your Party Refreshments/Supplies and Dance Partners.

No Coolers

Tables Are Limited, Be There Early.

Your Contribution: $19.99

Questions, Contact Us:
Email: party.guestinfo@gmail.com
Text: (646) 235-9563

See You On The Dance Floor!", 
        event_type: 'Party or Social Gathering', 
        category: 'Home & Lifestyle', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '229 W 28th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '10001', 
        creator: Demo, 
        begin_day: today()[:date],
        begin_month: today()[:month],
        begin_year: 2019,
        end_day: today()[:date],
        end_month: today()[:month],
        end_year: 2019,
        begin_time: 990,
        end_time: 1050,
        price: 0,
        venue_name: 'Flash Factory NY',
        lat: 40.7474869,
        lng: -73.9948118
    }
end

def event2
    {
        title: 'Grad Party', 
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with", 
        event_type: 'Party or Social Gathering', 
        category: 'Home & Lifestyle', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '330 W 40th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '10018', 
        creator: Zoe, 
        begin_day: tomorrow()[:date],
        begin_month: tomorrow()[:month],
        begin_year: 2019,
        end_day: tomorrow()[:date],
        end_month: tomorrow()[:month],
        end_year: 2019,
        begin_time: 120,
        end_time: 180,
        price: rand(30),
        venue_name: 'Sky Room',
        lat: 40.7571631,
        lng: -73.9935937
    }
end

def event3
    {
        title: 'Fireworks', 
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with", 
        event_type: 'Party or Social Gathering', 
        category: 'Family & Education', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '48 E 23rd St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '10010', 
        creator: Zoe, 
        begin_day: today()[:date],
        begin_month: today()[:month],
        begin_year: 2019,
        end_day: today()[:date],
        end_month: today()[:month],
        end_year: 2019,
        begin_time: 120,
        end_time: 180,
        price: rand(30),
        venue_name: "SPIN NYC",
        lat: 40.7402964,
        lng: -73.9891548
    }
end

def event4
    {
        title: 'Car Show', 
        description: "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.", 
        event_type: 'Conference', 
        category: 'Auto', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '429 11th Ave', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '10001', 
        creator: Demo, 
        begin_day: today()[:date],
        begin_month: today()[:month],
        begin_year: 2019,
        end_day: today()[:date],
        end_month: today()[:month],
        end_year: 2019,
        begin_time: 780,
        end_time: 990,
        price: rand(30),
        venue_name: 'Jacob K. Javits Convention Center',
        lat: 40.7459887,
        lng: -73.9977416
    }
end

def event5
    {
        title: 'Birthday Bash', 
        description: "It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries. And anyways, as Cecil Adams reasoned, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset.", 
        event_type: 'Party or Social Gathering', 
        category: 'Home & Lifestyle', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '267 5th Ave', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '10016', 
        creator: Demo, 
        begin_day: sunday()[:date],
        begin_month: sunday()[:month],
        begin_year: 2019,
        end_day: sunday()[:date],
        end_month: sunday()[:month],
        end_year: 2019,
        begin_time: 1110,
        end_time: 1170,
        price: rand(30),
        venue_name: "Midtown Loft & Terrace",
        lat: 40.7466414,
        lng: -73.9955423
    }
end

def event6
    {
        title: 'Baseball @ Nite', 
        description: "It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries. And anyways, as Cecil Adams reasoned, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset.", 
        event_type: 'Party or Social Gathering', 
        category: 'Tournament', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: 'West 27th Street &, 9th Ave', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '10001', 
        creator: Demo, 
        begin_day: today()[:date],
        begin_month: today()[:month],
        begin_year: 2019,
        end_day: today()[:date],
        end_month: today()[:month],
        end_year: 2019,
        begin_time: 1380,
        end_time: 1440,
        price: rand(30),
        venue_name: "Chelsea Park",
        lat: 40.7518938,
        lng: -74.0048808
    }
end

def event7
    {
        title: 'Beyond Meat Taste Testing', 
        description: "Spare ribs pork belly sirloin, burgdoggen landjaeger salami chuck cow ham shoulder leberkas doner jowl. Chicken ham short loin pork chop swine, picanha short ribs fatback buffalo. Tail chuck leberkas cupim beef ribs tenderloin. Prosciutto chicken cupim, boudin bresaola sirloin corned beef strip steak tail short ribs shoulder alcatra tongue capicola swine. Short ribs landjaeger chuck flank. Leberkas jerky beef, venison tri-tip chicken kielbasa corned beef short ribs kevin hamburger buffalo ham drumstick brisket. Cupim tri-tip tail ribeye meatloaf jowl chicken pancetta kevin porchetta swine beef ribs ham hock pastrami shankle.", 
        event_type: 'Atraction', 
        category: 'Health', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '287 10th Ave', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '10001', 
        creator: Connor, 
        begin_day: next_week()[:date],
        begin_month: next_week()[:month],
        begin_year: 2019,
        end_day: next_week()[:date],
        end_month: next_week()[:month],
        end_year: 2019,
        begin_time: 780,
        end_time: 810,
        price: rand(30),
        venue_name: "287 Gallery",
        lat: 40.7497647,
        lng: -74.0001041
    }
end

def event8
    {
        title: 'Hot Dog Eating Contest', 
        description: "Spare ribs pork belly sirloin, burgdoggen landjaeger salami chuck cow ham shoulder leberkas doner jowl. Chicken ham short loin pork chop swine, picanha short ribs fatback buffalo. Tail chuck leberkas cupim beef ribs tenderloin. Prosciutto chicken cupim, boudin bresaola sirloin corned beef strip steak tail short ribs shoulder alcatra tongue capicola swine. Short ribs landjaeger chuck flank. Leberkas jerky beef, venison tri-tip chicken kielbasa corned beef short ribs kevin hamburger buffalo ham drumstick brisket. Cupim tri-tip tail ribeye meatloaf jowl chicken pancetta kevin porchetta swine beef ribs ham hock pastrami shankle.", 
        event_type: 'Attraction', 
        category: 'Health', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '415 5th Ave', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '10016', 
        creator: Demo, 
        begin_day: tomorrow()[:date],
        begin_month: tomorrow()[:month],
        begin_year: 2019,
        end_day: tomorrow()[:date],
        end_month: tomorrow()[:month],
        end_year: 2019,
        begin_time: 1320,
        end_time: 1350,
        price: 0,
        venue_name: "AES NYC",
        lat: 40.7497305,
        lng: -73.9917574
    }
end

def event9
    {
        title: 'Astrophysical Anomalies', 
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
        event_type: 'Convention', 
        category: 'Science & Tech', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: 'Central Park West & 79th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '10024', 
        creator: Tiffany, 
        begin_day: next_week()[:date],
        begin_month: next_week()[:month],
        begin_year: 2019,
        end_day: next_week()[:date],
        end_month: next_week()[:month],
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "American Museum of Natural History",
        lat: 40.7813241,
        lng: -73.9761769
    }
end

def event10
    {
        title: 'Neural Science Showcase', 
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
        event_type: 'Convention', 
        category: 'Science & Tech', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '4 Washington Pl #809', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '10003', 
        creator: Demo, 
        begin_day: sunday()[:date],
        begin_month: sunday()[:month],
        begin_year: 2019,
        end_day: sunday()[:date],
        end_month: sunday()[:month],
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "Center for Neural Science New York University",
        lat: 40.7291908,
        lng: -73.9965267
    }
end

def event11
    {
        title: 'Taco Tuesday', 
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
        event_type: 'Attraction', 
        category: 'Health', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '166 West 4th Street', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '10014', 
        creator: Tiffany, 
        begin_day: next_week()[:date],
        begin_month: next_week()[:month],
        begin_year: 2019,
        end_day: next_week()[:date],
        end_month: next_week()[:month],
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: 0,
        venue_name: "The Taco Shop",
        lat: 40.7304919,
        lng: -74.0010621
    }
end

def event12
    {
        title: 'Cooking on a Budget', 
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
        event_type: 'Convention', 
        category: 'Home & Lifestyle', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '151 W 34th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '10001', 
        creator: Tiffany, 
        begin_day: next_week()[:date],
        begin_month: next_week()[:month],
        begin_year: 2019,
        end_day: next_week()[:date],
        end_month: next_week()[:month],
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "De Gustibus Cooking School",
        lat: 40.7296466,
        lng: -73.9896913
    }
end

def event13
    {
        title: 'Minimalist Furniture Auction', 
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
        event_type: 'Convention', 
        category: 'Home & Lifestyle', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '133 W 25th St #2E', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '10001', 
        creator: Demo, 
        begin_day: next_week()[:date],
        begin_month: next_week()[:month],
        begin_year: 2019,
        end_day: next_week()[:date],
        end_month: next_week()[:month],
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "Dmitriy & Co",
        lat: 40.7446691,
        lng: -73.9911428
    }
end

def event14
    {
        title: "Martha Cooks", 
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
        event_type: 'Convention', 
        category: 'Home & Lifestyle', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '109 W 17th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '10011', 
        creator: Tiffany, 
        begin_day: tomorrow()[:date],
        begin_month: tomorrow()[:month],
        begin_year: 2019,
        end_day: tomorrow()[:date],
        end_month: tomorrow()[:month],
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "Haven's Kitchen",
        lat: 40.7446689,
        lng: -73.9911428
    }
end

def event15
    {
        title: 'Popcorn and a Movie', 
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
        event_type: 'Screening', 
        category: 'Film & Media', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '260 W 23rd St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '10011', 
        creator: Demo, 
        begin_day: sunday()[:date],
        begin_month: sunday()[:month],
        begin_year: 2019,
        end_day: sunday()[:date],
        end_month: sunday()[:month],
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "Cinépolis Chelsea",
        lat: 40.7438261,
        lng: -73.9917288
    }
end

def event16
    {
        title: 'Community Potluck', 
        description: "There are many variations of yogurt available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
        event_type: 'Convention', 
        category: 'Community & Culture', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '11 Madison Ave', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '10010', 
        creator: Tiffany, 
        begin_day: sunday()[:date],
        begin_month: sunday()[:month],
        begin_year: 2019,
        end_day: sunday()[:date],
        end_month: sunday()[:month],
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: 0,
        venue_name: "Madison Square Park",
        lat: 40.7442645,
        lng: -73.9906244
    }
end

def event17
    {
        title: 'DIY Kombucha', 
        description: "There are many variations of kombucha available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
        event_type: 'Convention', 
        category: 'Community & Culture', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '849 6th Ave', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '10001', 
        creator: Tiffany, 
        begin_day: tomorrow()[:date],
        begin_month: tomorrow()[:month],
        begin_year: 2019,
        end_day: tomorrow()[:date],
        end_month: tomorrow()[:month],
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "SECOND floor nyc",
        lat: 40.7460187,
        lng: -73.9910783
    }
end

def event18
    {
        title: 'Dance Lessons', 
        description: "There are many variations of dancing ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
        event_type: 'Class, Training, or Workshop', 
        category: 'Community & Culture', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '25 W 31st St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '10001', 
        creator: Tiffany, 
        begin_day: tomorrow()[:date],
        begin_month: tomorrow()[:month],
        begin_year: 2019,
        end_day: tomorrow()[:date],
        end_month: tomorrow()[:month],
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: 0,
        venue_name: "Adelante Studios",
        lat: 40.7460181,
        lng: -73.9910783
    }
end

def event19
    {
        title: 'Book Club', 
        description: "There are many variations of dancing ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
        event_type: 'Class, Training, or Workshop', 
        category: 'Community & Culture', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '35 W 32nd St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '10001', 
        creator: Tiffany, 
        begin_day: sunday()[:date],
        begin_month: sunday()[:month],
        begin_year: 2019,
        end_day: sunday()[:date],
        end_month: sunday()[:month],
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "Koryo Books",
        lat: 40.7460175,
        lng: -73.9910783
    }
end

def event20
    {
        title: 'Bird Watching', 
        description: "There are many variations of dancing ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
        event_type: 'Class, Training, or Workshop', 
        category: 'Community & Culture', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '9th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '31811', 
        creator: Demo, 
        begin_day: tomorrow()[:date],
        begin_month: tomorrow()[:month],
        begin_year: 2019,
        end_day: tomorrow()[:date],
        end_month: tomorrow()[:month],
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "Grand Army Plaza",
        lat: 40.7645341,
        lng: -73.9758027
    }
end


Zoe = User.create!(email: 'zoe@gmail.com', fname: 'Zoe', lname: 'Wong', password: 'password', confirm_email: 'zoe@gmail.com')
Rolanda = User.create!(email: 'rolanda@gmail.com', fname: 'Rolanda', lname: 'Wills', password: 'password', confirm_email: 'rolanda@gmail.com')
Alex = User.create!(email: 'alex@gmail.com', fname: 'Alex', lname: 'Liao', password: 'password', confirm_email: 'alex@gmail.com')
Lillian = User.create!(email: 'lillian@gmail.com', fname: 'Lillian', lname: 'Wang', password: 'password', confirm_email: 'lillian@gmail.com')
Connor = User.create!(email: 'connor@gmail.com', fname: 'Connor', lname: 'Baker', password: 'password', confirm_email: 'connor@gmail.com')
Scarlet = User.create!(email: 'scarlet@gmail.com', fname: 'scarlet', lname: 'witch', password: 'password', confirm_email: 'scarlet@gmail.com')
Miles = User.create!(email: 'miles@gmail.com', fname: 'Miles', lname: 'Morales', password: 'password', confirm_email: 'miles@gmail.com')
Capy = User.create!(email: 'capy@gmail.com', fname: 'Capy', lname: 'Bara', password: 'password', confirm_email: 'capy@gmail.com')
Tiffany = User.create!(email: 'tiff@gmail.com', fname: 'Tiffany', lname: 'Liao', password: 'password', confirm_email: 'tiff@gmail.com')
Demo = User.create!(email: 'demo@gmail.com', fname: 'Demo', lname: 'User', password: 'password', confirm_email: 'demo@gmail.com')

night_club_file = open("https://aa-file-upload-dev.s3.amazonaws.com/night_life.png")
grad_party_file = open("https://aa-file-upload-dev.s3.amazonaws.com/grad_party.png")
fireworks_file = open("https://aa-file-upload-dev.s3.amazonaws.com/new_year.png")
car_show_file = open("https://aa-file-upload-dev.s3.amazonaws.com/red_car.png")
birthday_bash_file = open("https://aa-file-upload-dev.s3.amazonaws.com/bday.png")
baseball_file = open("https://aa-file-upload-dev.s3.amazonaws.com/baseball.png")
beyond_meat_file = open("https://aa-file-upload-dev.s3.amazonaws.com/burgers.png")
hot_dog_file = open("https://aa-file-upload-dev.s3.amazonaws.com/hot_dogs.png")
astrophysics_file = open("https://aa-file-upload-dev.s3.amazonaws.com/stars.png")
neurology_file = open("https://aa-file-upload-dev.s3.amazonaws.com/neurology.png")
subway_file = open("https://aa-file-upload-dev.s3.amazonaws.com/subway.png")
tacos = open("https://aa-file-upload-dev.s3.amazonaws.com/tacos.png")
cooking = open("https://aa-file-upload-dev.s3.amazonaws.com/cooking.png")
furniture = open("https://aa-file-upload-dev.s3.amazonaws.com/brown_furniture.png")
martha = open("https://aa-file-upload-dev.s3.amazonaws.com/cook.png")
movie = open("https://aa-file-upload-dev.s3.amazonaws.com/movies.png")
potluck = open("https://aa-file-upload-dev.s3.amazonaws.com/potluck.png")
kombucha = open("https://aa-file-upload-dev.s3.amazonaws.com/kombucha.png")
dance = open("https://aa-file-upload-dev.s3.amazonaws.com/dancer.png")
books = open("https://aa-file-upload-dev.s3.amazonaws.com/books.png")
bird = open("https://aa-file-upload-dev.s3.amazonaws.com/bird.png")

NightClub = Event.create!(event1()).picture.attach(io: night_club_file, filename: "night_life.jpg")
GradParty = Event.create!(event2()).picture.attach(io: grad_party_file, filename: "grad_party.jpg")
Fireworks = Event.create!(event3()).picture.attach(io: fireworks_file, filename: "new_years_eve.jpg")
CarShow = Event.create!(event4()).picture.attach(io: car_show_file, filename: "car_show.jpg")
BirthdayBash = Event.create!(event5()).picture.attach(io: birthday_bash_file, filename: "photo_balloons.jpg")
Baseball = Event.create!(event6()).picture.attach(io: baseball_file, filename: "baseball.jpg")
BeyondMeat = Event.create!(event7()).picture.attach(io: beyond_meat_file, filename: "beyond_meat.jpg")
HotDog = Event.create!(event8()).picture.attach(io: hot_dog_file, filename: "hot_dog.jpg")
Astrophysics = Event.create!(event9()).picture.attach(io: astrophysics_file, filename: "stars.png")
NeuralShowcase = Event.create!(event10()).picture.attach(io: neurology_file, filename: "neurology.png")
SubwayMuseum = Event.create!(event10()).picture.attach(io: subway_file, filename: "subway.jpg")
TacoTuesday = Event.create!(event11()).picture.attach(io: tacos, filename: "tacos.png")
Cooking = Event.create!(event12()).picture.attach(io: cooking, filename: "cooking.jpg")
Furniture = Event.create!(event13()).picture.attach(io: furniture, filename: "furniture.png")
Martha = Event.create!(event14()).picture.attach(io: martha, filename: "martha_cooks.png")
Movie = Event.create!(event15()).picture.attach(io: movie, filename: "movie.png")
Potluck = Event.create!(event16()).picture.attach(io: potluck, filename: "potluck.png")
Kombucha = Event.create!(event17()).picture.attach(io: kombucha, filename: "kombucha.png")
Dance = Event.create!(event18()).picture.attach(io: dance, filename: "dance.png")
Books = Event.create!(event19()).picture.attach(io: books, filename: "books.png")
Bird = Event.create!(event20()).picture.attach(io: bird, filename: "bird.png")


Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(1))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(2))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(3))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(4))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(5))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(6))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(7))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(8))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(9))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(10))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(11))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(12))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(12))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(13))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(14))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(15))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(16))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(17))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(18))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(19))
Tagging.create(tag: Tag.create(tag_name: Faker::Restaurant.name), event: Event.find(20))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(1))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(2))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(3))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(4))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(5))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(6))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(7))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(8))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(9))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(10))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(11))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(12))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(12))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(13))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(14))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(15))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(16))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(17))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(18))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(19))
Tagging.create(tag: Tag.create(tag_name: Faker::Verb.base), event: Event.find(20))