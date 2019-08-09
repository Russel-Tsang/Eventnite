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
ActiveRecord::Base.connection.reset_pk_sequence!('registrations')

def event1 
    {
        title: 'Night Life', 
        description: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
        The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs.", 
        event_type: 'Party or Social Gathering', 
        category: 'Home & Lifestyle', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '23rd St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '11375', 
        creator: Rolanda, 
        begin_day: rand(1..28),
        begin_month: rand(1..12),
        begin_year: 2019,
        begin_time: 990,
        end_time: 1050,
        price: rand(30),
        venue_name: 'Blue Casino'
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
        street: '23rd St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '11001', 
        creator: Zoe, 
        begin_day: rand(1..28),
        begin_month: rand(1..12),
        begin_year: 2019,
        end_day: 31,
        end_month: 12,
        end_year: 2019,
        begin_time: 120,
        end_time: 180,
        price: rand(30),
        venue_name: 'Liquid Lounge'
    }
end

def event3
    {
        title: 'New Years Eve Party', 
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with", 
        event_type: 'Party or Social Gathering', 
        category: 'Family & Education', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '23rd St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '11001', 
        creator: Zoe, 
        begin_day: rand(1..28),
        begin_month: rand(1..12),
        begin_year: 2019,
        end_day: 31,
        end_month: 12,
        end_year: 2019,
        begin_time: 120,
        end_time: 180,
        price: rand(30),
        venue_name: "George's Bisco Pop"
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
        street: '52nd St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '11201', 
        creator: Alex, 
        begin_day: rand(1..28),
        begin_month: rand(1..12),
        begin_year: 2020,
        end_day: 4,
        end_month: 3,
        end_year: 2020,
        begin_time: 780,
        end_time: 990,
        price: rand(30),
        venue_name: 'Awesome Bagels'
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
        street: '14th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '11001', 
        creator: Lillian, 
        begin_day: rand(1..28),
        begin_month: rand(1..12),
        begin_year: 2020,
        end_day: 4,
        end_month: 3,
        end_year: 2020,
        begin_time: 1110,
        end_time: 1170,
        price: rand(30),
        venue_name: "Banh Mi Memorial Smash"
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
        street: '14th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '31811', 
        creator: Connor, 
        begin_day: rand(1..28),
        begin_month: rand(1..12),
        begin_year: 2020,
        end_day: 4,
        end_month: 3,
        end_year: 2020,
        begin_time: 1380,
        end_time: 1440,
        price: rand(30),
        venue_name: "Stanford Hometown"
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
        street: '14th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '31811', 
        creator: Connor, 
        begin_day: rand(1..28),
        begin_month: rand(1..12),
        begin_year: 2020,
        end_day: 4,
        end_month: 3,
        end_year: 2020,
        begin_time: 780,
        end_time: 810,
        price: rand(30),
        venue_name: "Lildocs Stadium"
    }
end

def event8
    {
        title: 'Hot Dog Eating Contest', 
        description: "Spare ribs pork belly sirloin, burgdoggen landjaeger salami chuck cow ham shoulder leberkas doner jowl. Chicken ham short loin pork chop swine, picanha short ribs fatback buffalo. Tail chuck leberkas cupim beef ribs tenderloin. Prosciutto chicken cupim, boudin bresaola sirloin corned beef strip steak tail short ribs shoulder alcatra tongue capicola swine. Short ribs landjaeger chuck flank. Leberkas jerky beef, venison tri-tip chicken kielbasa corned beef short ribs kevin hamburger buffalo ham drumstick brisket. Cupim tri-tip tail ribeye meatloaf jowl chicken pancetta kevin porchetta swine beef ribs ham hock pastrami shankle.", 
        event_type: 'Race or Endurance Event', 
        category: 'Health', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '14th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '31811', 
        creator: Capy, 
        begin_day: rand(1..28),
        begin_month: rand(1..12),
        begin_year: 2020,
        end_day: 4,
        end_month: 3,
        end_year: 2020,
        begin_time: 1320,
        end_time: 1350,
        price: rand(30),
        venue_name: "Henry's Hens"
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
        street: '14th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '31811', 
        creator: Tiffany, 
        begin_day: rand(1..28),
        begin_month: rand(1..12),
        begin_year: 2019,
        end_day: 4,
        end_month: 9,
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "Mr Ram's Rodeo"
    }
end

def event10
    {
        title: 'Subway Musuem', 
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
        event_type: 'Convention', 
        category: 'Science & Tech', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '14th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '31811', 
        creator: Zoe, 
        begin_day: rand(1..28),
        begin_month: rand(1..12),
        begin_year: 2019,
        end_day: 4,
        end_month: 9,
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "Mr Ram's Rodeo"
    }
end

def event11
    {
        title: 'Pimp my Ride', 
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
        event_type: 'Convention', 
        category: 'Auto', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '14th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '31811', 
        creator: Tiffany, 
        begin_day: rand(1..28),
        begin_month: rand(1..12),
        begin_year: 2019,
        end_day: 4,
        end_month: 9,
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "Mr Ram's Rodeo"
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
        street: '11th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '11911', 
        creator: Tiffany, 
        begin_day: rand(1..28),
        begin_month: rand(1..12),
        begin_year: 2019,
        end_day: 4,
        end_month: 9,
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "Blue Casino"
    }
end

def event13
    {
        title: 'Minimilist Furniture Auction', 
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
        event_type: 'Convention', 
        category: 'Home & Lifestyle', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '14th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '31811', 
        creator: Tiffany, 
        begin_day: rand(1..28),
        begin_month: rand(1..12),
        begin_year: 2019,
        end_day: 4,
        end_month: 9,
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "Blue Casino"
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
        street: '12th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '11911', 
        creator: Tiffany, 
        begin_day: rand(1..28),
        begin_month: rand(1..12),
        begin_year: 2019,
        end_day: 4,
        end_month: 9,
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "Blue Casino"
    }
end

def event15
    {
        title: 'Popcorn and a Movie', 
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
        event_type: 'Convention', 
        category: 'Home & Lifestyle', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '14th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '31811', 
        creator: Tiffany, 
        begin_day: rand(1..28),
        begin_month: rand(1..12),
        begin_year: 2019,
        end_day: 4,
        end_month: 9,
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "Blue Casino"
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
        street: '54th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '31811', 
        creator: Tiffany, 
        begin_day: rand(1..28),
        begin_month: rand(1..12),
        begin_year: 2019,
        end_day: 4,
        end_month: 9,
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "Blue Casino"
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
        street: '5th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '31811', 
        creator: Tiffany, 
        begin_day: rand(1..28),
        begin_month: rand(1..12),
        begin_year: 2019,
        end_day: 4,
        end_month: 9,
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "Blue Casino"
    }
end

def event18
    {
        title: 'Prancing and Dancing', 
        description: "There are many variations of dancing ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
        event_type: 'Class, Training, or Workshop', 
        category: 'Community & Culture', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '9th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '31811', 
        creator: Tiffany, 
        begin_day: rand(1..28),
        begin_month: rand(1..12),
        begin_year: 2019,
        end_day: 4,
        end_month: 9,
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "Blue Casino"
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
        street: '9th St', 
        city: 'New York', 
        state: 'NY', 
        zip_code: '31811', 
        creator: Tiffany, 
        begin_day: rand(1..28),
        begin_month: rand(1..12),
        begin_year: 2019,
        end_day: 1,
        end_month: 4,
        end_year: 2019,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "Lax Lounge"
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
        creator: Zoe, 
        begin_day: rand(1..28),
        begin_month: 10,
        begin_year: 2020,
        end_day: 4,
        end_month: 9,
        end_year: 2020,
        begin_time: 1380,
        end_time: 1410,
        price: rand(30),
        venue_name: "Blue Casino"
    }
end


Zoe = User.create!(email: 'zoe@gmail.com', fname: 'Zoe', lname: 'Wong', password: 'password')
Rolanda = User.create!(email: 'rolanda@gmail.com', fname: 'Rolanda', lname: 'Wills', password: 'password')
Alex = User.create!(email: 'alex@gmail.com', fname: 'Alex', lname: 'Liao', password: 'password')
Lillian = User.create!(email: 'lillian@gmail.com', fname: 'Lillian', lname: 'Wang', password: 'password')
Connor = User.create!(email: 'connor@gmail.com', fname: 'Connor', lname: 'Baker', password: 'password')
Scarlet = User.create!(email: 'scarlet@gmail.com', fname: 'scarlet', lname: 'witch', password: 'password')
Miles = User.create!(email: 'miles@gmail.com', fname: 'Miles', lname: 'Morales', password: 'password')
Capy = User.create!(email: 'capy@gmail.com', fname: 'Capy', lname: 'Bara', password: 'password')
Tiffany = User.create!(email: 'tiff@gmail.com', fname: 'Tiffany', lname: 'Liao', password: 'password')


night_club_file = open("https://aa-file-upload-dev.s3.amazonaws.com/night_life.png")
grad_party_file = open("https://aa-file-upload-dev.s3.amazonaws.com/grad_party.png")
new_years_file = open("https://aa-file-upload-dev.s3.amazonaws.com/new_years_eve.png")
car_show_file = open("https://aa-file-upload-dev.s3.amazonaws.com/car_show.png")
birthday_bash_file = open("https://aa-file-upload-dev.s3.amazonaws.com/bday_party.png")
baseball_file = open("https://aa-file-upload-dev.s3.amazonaws.com/baseball.png")
beyond_meat_file = open("https://aa-file-upload-dev.s3.amazonaws.com/beyond_meat.png")
hot_dog_file = open("https://aa-file-upload-dev.s3.amazonaws.com/hot_dog.png")
astrophysics_file = open("https://aa-file-upload-dev.s3.amazonaws.com/stars.png")
subway_file = open("https://aa-file-upload-dev.s3.amazonaws.com/subway.png")
blue_car = open("https://aa-file-upload-dev.s3.amazonaws.com/blue_car.png")
cooking = open("https://aa-file-upload-dev.s3.amazonaws.com/cooking.png")
furniture = open("https://aa-file-upload-dev.s3.amazonaws.com/furniture.png")
martha = open("https://aa-file-upload-dev.s3.amazonaws.com/martha_cooks.png")
movie = open("https://aa-file-upload-dev.s3.amazonaws.com/movie.png")
potluck = open("https://aa-file-upload-dev.s3.amazonaws.com/potluck.png")
kombucha = open("https://aa-file-upload-dev.s3.amazonaws.com/kombucha.png")
dance = open("https://aa-file-upload-dev.s3.amazonaws.com/dance.png")
books = open("https://aa-file-upload-dev.s3.amazonaws.com/books.png")
bird = open("https://aa-file-upload-dev.s3.amazonaws.com/bird.png")

NightClub = Event.create!(event1()).picture.attach(io: night_club_file, filename: "night_life.jpg")
GradParty = Event.create!(event2()).picture.attach(io: grad_party_file, filename: "grad_party.jpg")
NewYears = Event.create!(event3()).picture.attach(io: new_years_file, filename: "new_years_eve.jpg")
CarShow = Event.create!(event4()).picture.attach(io: car_show_file, filename: "car_show.jpg")
BirthdayBash = Event.create!(event5()).picture.attach(io: birthday_bash_file, filename: "photo_balloons.jpg")
Baseball = Event.create!(event6()).picture.attach(io: baseball_file, filename: "baseball.jpg")
BeyondMeat = Event.create!(event7()).picture.attach(io: beyond_meat_file, filename: "beyond_meat.jpg")
HotDog = Event.create!(event8()).picture.attach(io: hot_dog_file, filename: "hot_dog.jpg")
Astrophysics = Event.create!(event9()).picture.attach(io: astrophysics_file, filename: "stars.jpg")
SubwayMuseum = Event.create!(event10()).picture.attach(io: subway_file, filename: "subway.jpg")
PimpMyRide = Event.create!(event11()).picture.attach(io: blue_car, filename: "blue_car.jpg")
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