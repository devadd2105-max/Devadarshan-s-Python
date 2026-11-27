# Python for NOAI 2027

A Duolingo-style course for learning Python, made by the Infocomm Club at St. Andrew's Junior College to help members prepare for the National Olympiad in AI (NOAI) 2027.

- 5 units and 10 lessons, with 5 questions in each lesson (50 in total)
- XP, levels, hearts, stars and a daily streak
- Progress is saved in the learner's own browser
- Question types: multiple choice, type the output, and put the lines in order
- A "Go deeper" section with free courses and practice sites

## Run it

Open `index.html` in a browser. To put it online, turn on GitHub Pages (Settings, Pages, deploy from the `main` branch, root folder).

## Add or change lessons

All lessons live in `lessons.js`. Copy a lesson object, change the title and its questions, and save. The page builds the path from that file, so nothing else needs editing.

Question types:

```js
{ t:'mc',    q:'Question', code:'optional code', opts:['A','B','C','D'], a:0, why:'Explanation' }
{ t:'type',  q:'Question', code:'optional code', a:['accepted answer'], why:'Explanation' }
{ t:'order', q:'Question', lines:['line 1','line 2','line 3'], why:'Explanation' }
```

For `mc`, `a` is the position of the right option, starting from 0. For `type`, spaces, quote marks and capital letters are ignored when answers are compared. For `order`, list the lines in the correct order and the page shuffles them.

Check every answer by running the code before you add a question.

## Notes

Links go to outside sites the club does not run. Always check the official [NOAI site](https://noai.aisingapore.org/) for dates, rules and syllabus.
