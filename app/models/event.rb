class Event < ApplicationRecord
    validates :title, :event_type, :category, :organizer, :user_id, presence: true
    
    belongs_to :creator,
        foreign_key: :user_id,
        class_name: :User

    has_many :follows 
    has_many :followers,
        through: :follows,
        source: :user
        
    has_many :registrations
    has_many :attendees,
        through: :registrations,
        source: :user
    
    has_many :taggings
    has_many :tags,
        through: :taggings,
        source: :tag

    has_one_attached :picture
end
