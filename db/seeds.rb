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
        description: 
        "We Invite All Of Our Dance Partners To Join Us For A Night Of Classic Dance Music Inspired By The Loft And Paradise Garage, Including Many Of Our Favorite Club Songs Of Today.

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
        description: 
        "You’re Invited to a History Party

        In Honor of Rick Peterson’s College Graduation

        Help Rick Celebrate His New History Degree

        Come Dressed As Your Favorite Historical Figure", 

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
        description: 
        "Fireworks are a class of low explosive pyrotechnic devices used for aesthetic and entertainment purposes. The most common use of a firework is as part of a fireworks display (also called a fireworks show or pyrotechnics), a display of the effects produced by firework devices.
        
        Fireworks take many forms to produce the four primary effects: noise, light, smoke, and floating materials (confetti for example). They may be designed to burn with colored flames and sparks including red, orange, yellow, green, blue, purple, and silver. Displays are common throughout the world and are the focal point of many cultural and religious celebrations.

        Fireworks are generally classified as to where they perform, either as a ground or aerial firework. In the latter case they may provide their own propulsion (skyrocket) or be shot into the air by a mortar (aerial shell).", 
        
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
        description: 
        "AGENDA
        
        10am a private 60 min professional tour of the award winning English Gardens in full bloom we will see the best of the 216 acres of gardens, rolling fields and woodlands.
        
        Old Westbury Gardens is a New York State Historic Site, listed on the National Register of Historic Places. Former Gold Coast home of John S. Phipps, his wife, Margarita Grace Phipps and their four children.

        SELF GUIDED TOUR of House after Gardens *Due to the restoration of its roof and other conservation projects there is limited access to Westbury House. Grab a new friend and see what is available to see to the public in the house

        CAR SHOW 11am-1pm Your admission includes entrance into the CAR SHOW being held that day on the grounds Porsche, Mercedes, BMW available to view - chat with the owners

        FOOD AVAILABLE *at your own expense the CAFE in the WOODS to relax with new single friends after tour and show", 

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
        description: 
        "Crazy Science Show is a new and surprising format of a kids’ party! On-site science laboratory, where science fiction becomes a reality!

        1. Dry Ice Discovery party (100% interactive show. 45 min show. 10-25 group of kids)
        
        2.Slime Party (making slime with your kids. 45 min. 10-25 group of kids)
        
        3.Liquid nitrogen party (party with Ice Cream in the end. 45 min. 10-25 group of kids)",

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
        description: 
        "The Rockland Boulders are back in the playoffs and this year's ticket deal is better than ever! You can get 4 ticket vouchers for a 2019 playoff home game plus 4 ticket vouchers for Opening Day 2020 for only $29!", 
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
        description: 
        "Beyond Meat is a Los Angeles-based producer of plant-based meat substitutes founded in 2009 by Ethan Brown. The company's products became available across the United States in 2013.[2][3][4] In May 2016, it released the first plant-based burger to be sold in the meat section of grocery stores, on an international basis.[5] The company has products designed to replace beef and pork sausage.
            
        The company was founded as a California-based startup by Ethan Brown in 2009.[6] The company has received venture funding from Kleiner Perkins, Obvious Corporation, Bill Gates, Biz Stone, the Humane Society[7][8] and Tyson Foods.[9] The company began selling its chicken-free mock chicken products in Whole Foods supermarkets across the US in April 2013.[10][11] In 2014, it developed a beef product.

        The People for the Ethical Treatment of Animals named Beyond Meat as its company of the year for 2013.[12][13]

        Tyson Foods purchased a 5% stake in Beyond Meat in October 2016.[14] It sold its 6.5% stake and exited the investment in April 2019, ahead of the company's initial public offering",

        event_type: 'Atraction', 
        category: 'Health', 
        organizer: Faker::Name.name, 
        online_event: false, 
        street: '287 10th Ave', 
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
        description: 
        "The Nathan's Hot Dog Eating Contest is an annual American hot dog competitive eating competition. It is held each year on Independence Day at Nathan's Famous Corporation's original, and best-known restaurant at the corner of Surf and Stillwell Avenues in Coney Island, a neighborhood of Brooklyn, New York City.

        The contest has gained public attention in recent years due to the stardom of Takeru Kobayashi and Joey Chestnut. The defending men's champion is Joey Chestnut, who ate 71 hot dogs in the 2019 contest. The defending women's champion is Miki Sudo, who ate 31 hot dogs in the 2019 contest.", 

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
        description: 
        "While astronomy is one of the oldest sciences, theoretical astrophysics began with Isaac Newton. Prior to Newton, astronomers described the motions of heavenly bodies using complex mathematical models without a physical basis. Newton showed that a single theory simultaneously explains the orbits of moons and planets in space and the trajectory of a cannonball on Earth. This added to the body of evidence for the (then) startling conclusion that the heavens and Earth are subject to the same physical laws.", 
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
        description: 
        "Natural science is a branch of science concerned with the description, prediction, and understanding of natural phenomena, based on empirical evidence from observation and experimentation. Mechanisms such as peer review and repeatability of findings are used to try to ensure the validity of scientific advances.

        Natural science can be divided into two main branches: life science (or biological science) and physical science. Physical science is subdivided into branches, including physics, chemistry, astronomy and earth science. These branches of natural science may be further divided into more specialized branches (also known as fields). As empirical sciences, natural sciences use tools from the formal sciences, such as mathematics and logic, converting information about nature into measurements which can be explained as clear statements of the laws of nature", 

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
        description: 
        "Each and Every Thursday Until The End Of Summer We Will Be Taking Over The Suede Garden (outdoors)

        For #TBT TACO BOUT THURSDAYS

        Doors Open 4:00 pm AfterWorkVibes!!!

        With All The Top DJ's Roating On A Weekly Basis!", 

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
        description: 
        "Learn the basics of vegan cooking and how Yondu, our plant-based umami seasoning sauce, can make vegan cooking easy and delicious!

        To start, our chefs will demonstrate the various ways Yondu can elevate your everyday cooking with three simple vegan recipes. Then, you will replicate the recipes in the hands-on portion of the class using seasonal produce from the Union Square farmer's market.

        The workshop will conclude with a vibrant family-style dinner (prepared by you!) paired with local beer, wine and non-alcoholic refreshments.

        *Please note, we do not allow outside alcoholic beverages.", 

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
        description: 
        "People have been using natural objects, such as tree stumps, rocks and moss, as furniture since the beginning of human civilisation. Archaeological research shows that from around 30,000 years ago, people began constructing and carving their own furniture, using wood, stone, and animal bones. Early furniture from this period is known from artwork such as a Venus figurine found in Russia, depicting the goddess on a throne. 
        
        The first surviving extant furniture is in the homes of Skara Brae in Scotland, and includes cupboards, dressers and beds all constructed from stone. Complex construction techniques such as joinery began in the early dynastic period of ancient Egypt. This era saw constructed wooden pieces, including stools and tables, sometimes decorated with valuable metals or ivory.", 
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
        description: "Kick off at 6:00 with a quick round of introductions then get hands-on in the Coltivare culinary lab in a fun and interactive class complete with tastings, takeaways and an adult beverage pairing. An ideal class for couples, friends, and the outgoing solo cook looking to meet new people. No experience or expertise necessary.

        **Please note this class takes place on the second FRIDAY of the month instead of the traditional Saturday**

        $50 price per person is all inclusive (food/adult beverage/take-home recipe). Expect to leave full, happy, and likely with leftovers!", 

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
        description: 
        "Join New York- Presbyterian Westchester Division and NAMI Westchester for a free movie screening of 'The Soloist', a film about friendship, support and mental illness.
        
        Wednesday, October 2, 2019
        Movie starts at 6:00PM
        Panel discussion to follow, 

        Admission is free, registration is required.",

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
        description: 
        "Please join us for our annual Picnic in the Park to celebrate our SIV community and generous volunteers.

        We request you bring a favorite dish to share. Beverages will be provided.



        Registration for this event is free, but if you would like to help offset the cost of the picnic, you can feel free to bring a donation the day of the event.", 

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
        description: 
        "Fermentation has been used for centuries to help preserve food and make some foods easier to digest. Most commercial offerings are loaded with unwanted chemicals and corn syrup. In this workshop you will learn some of the history behind fermented foods as well as the numerous health benefits of introducing more probiotic foods into your diet. After getting excited about eating all these delicious ferments, participants will get learn via an interactive kombucha and kraut making demo and leave with a starter kombucha kit w/ kraut on the side.

        Details
        ---> $25/ person
        ---> Walkins welcome but limited
        ---> No previous experience in anything is necessary.
        ---> Al materials and supplies will be provided
        ---> ASL interpreting provided with 10 days notice
        ---> Once registered course fees are non-refundable and cannot be applied to a future class.", 

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
        description: 
        "Dance as if UCARE! (Understanding Consciously and Releasing Emotions). Join us every Saturday at 4:30PM for a dance class that will help you develop mindfulness, improve self-expression and emotional stability.

        Prior dance experience is not required. Each week you will learn a new routine that layers in the basics of hip hop!

        These classes are a partnership between Brooklyn Community Pride Center and Bot n Sole, Inc. and facilitated by choreographer and owner", 

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
        description: 
        "The BBBC is a group where business owners can go to learn about best practices by hearing and participating in conversations through reading selected texts. The BBBC is a member-run group for business owners who want to benefit from their fellow members’ knowledge and expertise.

        The book for the next meeting is Atomic Habits by James Clear. There are copies available from the Brooklyn Publc Librabry in print and ebook format.", 

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
        description: 
        "Before our gates open to the general public, birding expert Rob Jett leads these peaceful Sunday morning walking tours to discover the birds that make Green-Wood their home – at least temporarily. By September, offspring of these nesting birds will be on their own. Returning warblers will be in their less flamboyant fall plumage. Large numbers of blackbirds, flycatchers, sparrows, vireos, and swallows will also be passing through. By October, waterfowl are returning, and we’ll look for raptors heading south. November will bring back our overwintering feathered denizens from the north.
 
        All walks are at a slow pace on easy to moderate terrain, but proper, close toed footwear is suggested.", 
        
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