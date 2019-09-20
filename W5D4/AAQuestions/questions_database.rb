require 'sqlite3'
require 'singleton'

class QuestionsDatabase < SQLite3::Database
  include Singleton

  def initialize
    super('questions.db')
    self.type_translation = true
    self.results_as_hash = true
  end

end


class User

  attr_accessor :id, :fname, :lname

  def self.find_by_name(fname,lname)
    user_by_name = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
      SELECT * 
      FROM users 
      WHERE fname = ?
      AND lname =?
    SQL

    user_by_name.map{|user|User.new(user)}
  end

  def self.find_by_id(id)
    user_by_id = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT * 
      FROM users 
      WHERE id = ?
    SQL

    user_by_id.map{|user|User.new(user)}
  end

  def self.all
    data = QuestionsDatabase.instance.execute("SELECT * FROM users")
    data.map { |datum| User.new(datum) }
  end

  def self.find_by_name(fname, lname)
    user_by_name = QuestionsDatabase.instance.execute("SELECT * FROM users WHERE fname = ? AND lname = ?")
    user_by_name.map{|user|User.new(user)}
  end

  def initialize(options)
    @id = options['id']
    @fname = options['fname']
    @lname = options['lname']
  end

  def authored_questions
    Question.find_by_author_id(id)
  end

  def authored_replies
    Reply.find_by_user_id(id)
  end

  def followed_questions
    QuestionFollow.followed_questions_for_user_id(id)
  end

end


class Question 

  attr_accessor :id, :title, :body, :author_id

  def self.find_by_author_id(author_id)
    question_by_aid = QuestionsDatabase.instance.execute(<<-SQL, author_id)
      SELECT * 
      FROM questions 
      WHERE author_id = ?
    SQL

    question_by_aid.map{|question|Question.new(question)}
  end

  def self.find_by_id(id)
    question_by_id = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT * 
      FROM questions 
      WHERE id = ?
    SQL

    question_by_id.map{|question|Question.new(question)}
  end

  def self.all
    data = QuestionsDatabase.instance.execute("SELECT * FROM questions")
    data.map { |datum| Question.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @author_id = options['author_id']
  end

  def author
    User.find_by_id(author_id)
  end

  def replies
    Reply.find_by_question_id(id)
  end

  def followers
    QuestionFollow.followers_for_question_id(id)
  end

end


class QuestionFollow

  attr_accessor :id, :question_id, :user_id

  def self.most_followed_questions(n)
    questions = QuestionsDatabase.instance.execute(<<-SQL, n)
      SELECT 
        COUNT(*) AS num_follows
      FROM
        question_follows
      JOIN
        users
      ON
        users.id = question_follows.user_id

        
      WHERE
        question_id = ?
    SQL
    questions.map{|question|Question.new(question)}
  end

  def self.followers_for_question_id(question_id)
   followers = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT 
        *
      FROM
        question_follows
      JOIN
        users
      ON
        users.id = question_follows.user_id
      WHERE
        question_id = ?
    SQL

    followers.map{|follower|User.new(follower)}
  end

   def self.followed_questions_for_user_id(user_id)
    questions = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT 
        *
      FROM
        question_follows
      JOIN
        questions
      ON
        questions.id = question_follows.question_id
      WHERE
        user_id = ?
    SQL

    questions.map{|question|Question.new(question)}
  end

  def self.find_by_id(id)
    question_follow_by_id = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT * 
      FROM question_follows 
      WHERE id = ?
    SQL

    question_follow_by_id.map{|question_follow|QuestionFollow.new(question_follow)}
  end

  def self.all
    data = QuestionsDatabase.instance.execute("SELECT * FROM question_follows")
    data.map { |datum| QuestionFollow.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @user_id = options['user_id']
  end

end


class Reply

  attr_accessor :id, :question_id, :parent_reply_id, :user_id, :body

   def self.find_by_user_id(user_id)
    reply_by_uid = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT * 
      FROM replies
      WHERE user_id = ?
    SQL

    reply_by_uid.map{|reply|Reply.new(reply)}
  end

  def self.find_by_question_id(question_id)
    reply_by_qid = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT * 
      FROM replies
      WHERE question_id = ?
    SQL

    reply_by_qid.map{|reply|Reply.new(reply)}
  end

  def self.find_by_id(id)
    reply_by_id = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT * 
      FROM replies 
      WHERE id = ?
    SQL

    reply_by_id.map{|reply|Reply.new(reply)}
  end

  def self.all
    data = QuestionsDatabase.instance.execute("SELECT * FROM replies")
    data.map { |datum| Reply.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @parent_reply_id = options['parent_reply_id']
    @user_id = options['user_id']
    @body = options['body']
  end

  def author
    User.find_by_id(user_id)
  end

  def question 
    Question.find_by_id(question_id)
  end

  def parent_reply 
    Reply.find_by_id(parent_reply_id)
  end

  def child_replies
    childs = QuestionsDatabase.instance.execute(<<-SQL, self.id)
      SELECT
        *
      FROM
        replies
      WHERE
        parent_reply_id = ?
    SQL

    childs.map{|reply|Reply.new(reply)}
  end

end


class Like

  attr_accessor :id, :question_id, :user_id

  def self.find_by_id(id)
    like_by_id = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT * 
      FROM likes 
      WHERE id = ?
    SQL

    like_by_id.map{|like|Like.new(like)}
  end

  def self.all
    data = QuestionsDatabase.instance.execute("SELECT * FROM likes")
    data.map { |datum| Like.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @user_id = options['user_id']
  end

end

