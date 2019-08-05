class Tag < ApplicationRecord
    validates :tag_name, presence: true

    has_many :taggings

    has_many :tagged_events,
        through: :taggings,
        source: :event
end
