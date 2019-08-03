class Tag < ApplicationRecord
    validates :tag_name, :user_id, :tag_id, presence: true

    belongs_to :user
    belongs_to :event
end
