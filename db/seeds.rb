# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.destroy_all
User.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('events')

Alex = User.create!(email: 'alex@gmail.com', fname: 'Alex', lname: 'Smith', password: 'password')
Tiffany = User.create!(email: 'tiff@gmail.com', fname: 'Tiffany', lname: 'Smith', password: 'password')
Lewis = User.create!(email: 'lewis@gmail.com', fname: 'Lewis', lname: 'Smith', password: 'password')

GradParty = Event.create!(title: 'Graduation Party', description: 'The best graduation party, ever.', event_type: 'Party or Social Gathering', category: 'Family & Education', organizer: 'Tiff', online_event: false, street: '23rd St', city: 'New York', state: 'NY', zip_code: '11201', creator: Tiffany)