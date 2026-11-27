/* Course content. To add a lesson, copy an object in `lessons` and edit it.
   Question types:
   { t:'mc',    q, code?, opts:[...], a:<index of the right option>, why }
   { t:'type',  q, code?, a:['accepted answer', ...], why }      (spaces, quotes and capitals are ignored)
   { t:'order', q, lines:[...lines in the correct order...], why }  (shown shuffled)
*/
window.COURSE = {
  units: [
    {
      id: 'u1', title: 'The basics', desc: 'Print, variables, types and numbers',
      lessons: [
        { title: 'Print and variables', qs: [
          { t:'mc', q:'Which line prints Hello on the screen?', opts:['print("Hello")','echo Hello','say("Hello")','Print Hello'], a:0, why:'print() is the built-in function that shows text. The text goes inside quotes.' },
          { t:'type', q:'What does this program print?', code:'x = 4\ny = 3\nprint(x + y)', a:['7'], why:'x + y is 4 + 3, so the output is 7.' },
          { t:'mc', q:'Which is a valid variable name?', opts:['2cats','my-cat','my_cat','class'], a:2, why:'Names cannot start with a digit, contain a hyphen or be a reserved word like class. Underscores are fine.' },
          { t:'mc', q:'What does this print?', code:'name = "Ada"\nprint("Hi " + name)', opts:['Hi Ada','Hi name','"Hi Ada"','Hi+Ada'], a:0, why:'name holds the text Ada, and + joins the two strings together.' },
          { t:'order', q:'Put the lines in order so the program prints a greeting.', lines:['name = "Sam"','greeting = "Hi " + name','print(greeting)'], why:'A variable has to exist before you use it, so name comes first and print comes last.' }
        ]},
        { title: 'Types and numbers', qs: [
          { t:'type', q:'What does this print?', code:'print(7 // 2)', a:['3'], why:'// is floor division. 7 divided by 2 is 3.5, and floor division drops the .5.' },
          { t:'type', q:'What does this print?', code:'print(7 % 2)', a:['1'], why:'% gives the remainder. 7 divided by 2 leaves 1.' },
          { t:'mc', q:'What is the type of 3.0 in Python?', opts:['int','float','str','bool'], a:1, why:'Any number written with a decimal point is a float, even when it is a whole number.' },
          { t:'type', q:'What does this print?', code:'print(2 ** 3)', a:['8'], why:'** means "to the power of", so 2 ** 3 is 2 x 2 x 2 = 8.' },
          { t:'mc', q:'What does this print?', code:'print("5" + "5")', opts:['10','55','5 5','An error'], a:1, why:'Quotes make these strings, and + joins strings. It does not add them as numbers.' }
        ]}
      ]
    },
    {
      id: 'u2', title: 'Decisions and loops', desc: 'if statements, for loops and while loops',
      lessons: [
        { title: 'If statements', qs: [
          { t:'type', q:'What does this print?', code:'x = 5\nif x > 3:\n    print("big")\nelse:\n    print("small")', a:['big'], why:'5 > 3 is True, so the if branch runs.' },
          { t:'mc', q:'Which operator checks whether two values are equal?', opts:['=','==','===',':='], a:1, why:'A single = assigns a value. A double == compares two values.' },
          { t:'type', q:'What does this print?', code:'print(3 > 5 or 2 < 4)', a:['True'], why:'3 > 5 is False, but 2 < 4 is True. With or, one True is enough.' },
          { t:'mc', q:'This line has a syntax error. What is missing?', code:'if x > 3\n    print("big")', opts:['A colon at the end of the if line','Brackets around x > 3','A semicolon','Curly braces'], a:0, why:'Python needs a colon at the end of if, for, while and def lines.' },
          { t:'type', q:'What does this print?', code:'x = 10\nif x > 5:\n    x = x - 5\nif x > 3:\n    x = x - 1\nprint(x)', a:['4'], why:'10 > 5, so x becomes 5. Then 5 > 3, so x becomes 4.' }
        ]},
        { title: 'Loops', qs: [
          { t:'type', q:'What is the last number this prints?', code:'for i in range(3):\n    print(i)', a:['2'], why:'range(3) gives 0, 1 and 2. It stops before 3.' },
          { t:'type', q:'What does this print?', code:'total = 0\nfor i in range(1, 4):\n    total += i\nprint(total)', a:['6'], why:'range(1, 4) gives 1, 2 and 3. The total is 1 + 2 + 3 = 6.' },
          { t:'mc', q:'How many times does the body of this loop run?', code:'for i in range(5):\n    print("hi")', opts:['4','5','6','Forever'], a:1, why:'range(5) produces five values: 0, 1, 2, 3 and 4.' },
          { t:'type', q:'What does this print?', code:'n = 3\nwhile n > 0:\n    n -= 1\nprint(n)', a:['0'], why:'The loop keeps subtracting 1 until n is no longer above 0, so it ends at 0.' },
          { t:'mc', q:'Which keyword leaves a loop immediately?', opts:['stop','exit','break','end'], a:2, why:'break ends the nearest loop straight away. continue skips to the next round instead.' }
        ]}
      ]
    },
    {
      id: 'u3', title: 'Data structures', desc: 'Lists, dictionaries, sets and tuples',
      lessons: [
        { title: 'Lists', qs: [
          { t:'type', q:'What does this print?', code:'nums = [4, 8, 15]\nprint(nums[1])', a:['8'], why:'Indexes start at 0, so index 1 is the second item.' },
          { t:'type', q:'What does this print?', code:'print(len([1, 2, 3, 4]))', a:['4'], why:'len() counts the items in the list.' },
          { t:'type', q:'What does this print?', code:'a = [1, 2]\na.append(3)\nprint(a)', a:['[1, 2, 3]'], why:'append adds one item to the end of the list.' },
          { t:'type', q:'What does this print?', code:'s = [10, 20, 30, 40]\nprint(s[1:3])', a:['[20, 30]'], why:'A slice s[1:3] starts at index 1 and stops before index 3.' },
          { t:'type', q:'What does this print?', code:'print([1, 2, 3][-1])', a:['3'], why:'Index -1 means the last item.' }
        ]},
        { title: 'Dictionaries and sets', qs: [
          { t:'type', q:'What does this print?', code:'d = {"a": 1, "b": 2}\nprint(d["b"])', a:['2'], why:'A dictionary looks up a value by its key. The key "b" maps to 2.' },
          { t:'mc', q:'Which of these is a dictionary?', opts:['[1, 2]','{"a": 1}','(1, 2)','{1, 2}'], a:1, why:'Curly braces with key: value pairs make a dictionary. {1, 2} is a set.' },
          { t:'type', q:'What does this print?', code:'print(len({1, 2, 2, 3}))', a:['3'], why:'A set keeps each value only once, so it holds 1, 2 and 3.' },
          { t:'type', q:'What does this print?', code:'d = {"x": 5}\nd["y"] = 7\nprint(len(d))', a:['2'], why:'Assigning to a new key adds it, so the dictionary now has two entries.' },
          { t:'mc', q:'Which of these cannot be changed after it is created?', opts:['list','dict','tuple','set'], a:2, why:'A tuple is immutable. Lists, dictionaries and sets can all be changed.' }
        ]}
      ]
    },
    {
      id: 'u4', title: 'Functions', desc: 'Reusable code, scope and recursion',
      lessons: [
        { title: 'Writing functions', qs: [
          { t:'mc', q:'Which keyword defines a function?', opts:['func','def','function','define'], a:1, why:'Functions start with def, then the name, brackets and a colon.' },
          { t:'type', q:'What does this print?', code:'def add(a, b):\n    return a + b\nprint(add(2, 5))', a:['7'], why:'add(2, 5) returns 2 + 5, and print shows the returned value.' },
          { t:'type', q:'What does this print?', code:'def f(x):\n    x = x * 2\n    return x\nprint(f(4))', a:['8'], why:'Inside f, x is doubled from 4 to 8 and then returned.' },
          { t:'mc', q:'What does a function return if it has no return statement?', opts:['0','An empty string','None','An error'], a:2, why:'Without return, a function gives back None, which means "no value".' },
          { t:'order', q:'Put the lines in order so the program prints 36.', lines:['def square(n):','    return n * n','print(square(6))'], why:'Define the function first, indent its body, and call it afterwards.' }
        ]},
        { title: 'Scope and recursion', qs: [
          { t:'type', q:'What does this print?', code:'def fact(n):\n    if n <= 1:\n        return 1\n    return n * fact(n - 1)\nprint(fact(4))', a:['24'], why:'fact(4) is 4 x 3 x 2 x 1 = 24. The function calls itself with a smaller number each time.' },
          { t:'mc', q:'Why does a recursive function need a base case?', opts:['To make it run faster','To stop it calling itself forever','To give it a name','To import a module'], a:1, why:'The base case is where the recursion stops. Without it the function would never finish.' },
          { t:'type', q:'What does this print?', code:'x = 1\ndef f():\n    x = 5\nf()\nprint(x)', a:['1'], why:'The x inside f is a separate local variable. The outer x is unchanged.' },
          { t:'type', q:'What does this print?', code:'def greet(name="friend"):\n    return "Hi " + name\nprint(greet())', a:['Hi friend'], why:'No argument was given, so the default value "friend" is used.' },
          { t:'type', q:'What does this print?', code:'print(sum([n * n for n in range(1, 4)]))', a:['14'], why:'The comprehension builds [1, 4, 9], and sum adds them to give 14.' }
        ]}
      ]
    },
    {
      id: 'u5', title: 'Files, errors and classes', desc: 'Handling errors, reading files and writing classes',
      lessons: [
        { title: 'Errors and files', qs: [
          { t:'mc', q:'Which statements let you handle an error without crashing?', opts:['if / else','try / except','for / while','def / return'], a:1, why:'Code that might fail goes in try. The except block says what to do if it does.' },
          { t:'type', q:'What does this print?', code:'try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print("oops")', a:['oops'], why:'Dividing by zero raises ZeroDivisionError, so the except block runs.' },
          { t:'mc', q:'What does open("data.txt", "w") do?', opts:['Reads the file','Adds to the end of the file','Opens it for writing and replaces what was there','Deletes the file'], a:2, why:'Mode "w" writes a fresh file. Use "a" to append and "r" to read.' },
          { t:'mc', q:'Why use "with open(...) as f:"?', opts:['It makes the file read-only','It closes the file for you when the block ends','It copies the file','It is faster to type'], a:1, why:'The with block closes the file automatically, even if an error happens inside it.' },
          { t:'type', q:'What does this print?', code:'import json\nprint(json.loads(\'{"a": 3}\')["a"])', a:['3'], why:'json.loads turns JSON text into a dictionary, and ["a"] looks up the value 3.' }
        ]},
        { title: 'Classes', qs: [
          { t:'mc', q:'Inside a class, what does self refer to?', opts:['The class itself','The current object','The parent class','The file'], a:1, why:'self is the particular object whose method is running.' },
          { t:'type', q:'What does this print?', code:'class Dog:\n    def __init__(self, name):\n        self.name = name\nd = Dog("Rex")\nprint(d.name)', a:['Rex'], why:'__init__ runs when the object is made and stores the name on the object.' },
          { t:'type', q:'What does this print?', code:'class Counter:\n    def __init__(self):\n        self.n = 0\n    def add(self):\n        self.n += 1\nc = Counter()\nc.add()\nc.add()\nprint(c.n)', a:['2'], why:'The counter starts at 0, and each call to add raises it by 1.' },
          { t:'mc', q:'Which method runs automatically when a new object is created?', opts:['__start__','__new_obj__','__init__','__run__'], a:2, why:'__init__ is the initialiser. Python calls it for you when you write Dog("Rex").' },
          { t:'order', q:'Put the lines in order so the program prints meow.', lines:['class Cat:','    def speak(self):','        return "meow"','print(Cat().speak())'], why:'Define the class, then its method inside it, and use it after the class is written.' }
        ]}
      ]
    }
  ]
};
