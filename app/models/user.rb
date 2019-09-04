class User < ApplicationRecord
  validates :fname, :lname, :password_digest, :session_token, :email, presence: true
  validates :email, uniqueness: true
  validates :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validate :emails_match, :on => :create

  attr_reader :password
  attr_reader :confirm_email
  after_initialize :ensure_session_token

  has_many :events

  has_many :registrations
  has_many :registered_events, 
    through: :registrations,
    source: :event

  has_many :follows
  has_many :followed_events,
    through: :follows,
    source: :event

  has_many :likes
  has_many :liked_events,
    through: :likes,
    source: :event

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)    
  end

  def confirm_email=(confirm_email)
    @confirm_email = confirm_email
  end

  def emails_match 
    errors.add(:Emails, "must match") if self.email != @confirm_email
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def reset_session_token!
    self.update!(session_token: User.generate_session_token)
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
