class Tagging < ApplicationRecord
    validates :event, :tag, presence: true

    belongs_to :event
    belongs_to :tag
end
