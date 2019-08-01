class Event < ApplicationRecord
    validates :title, :description, :event_type, :category, :organizer, :user_id, presence: true
    
    belongs_to :creator,
        foreign_key: :user_id,
        class_name: :User

    has_one_attached :picture
end
