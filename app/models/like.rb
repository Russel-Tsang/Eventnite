class Like < ApplicationRecord
    validates :user_id, :event_id, presence: true

    belongs_to :event
    belongs_to :user
end
