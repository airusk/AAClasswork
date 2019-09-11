class Employee
  attr_reader :name, :title, :salary # :boss
  def initialize(name, title, salary) #boss)
    @name = name
    @title = title
    @salary = salary
    # @boss = boss
  end

  def total_salary
    return 0
  end

  def bonus(multiplier)
    @salary * multiplier
  end
end

class Manager < Employee
  attr_accessor :employees
  def initialize(name, title, salary) #boss)
    @employees = []
    super
  end

  def bonus(multiplier)
    self.total_salary * multiplier
  end

  def total_salary
    total = 0
    return 0 if employees.empty?
    
    employees.each do |employee|
      total += employee.salary
      total += employee.total_salary
    end
    total
  end
end

ned = Manager.new("Ned", "Founder", 100000)
darren = Manager.new("Darren", "TA Manager", 78000)
shawna = Employee.new("Shawna", "TA", 12000)
david = Employee.new("David", "TA", 10000)

ned.employees << darren
darren.employees << shawna << david

p ned.bonus(5) # => 500_000
p darren.bonus(4) # => 88_000
p david.bonus(3) # => 30_000