## Prerequisites
- node 14+

## Instructions
1. Set up the server
2. Set up the website
3. Add styling through CSS (optional)
4. Wire up a JavaScript file

### Setting up the server
1. `mkdir server`
2. `cd server`
3. `npm init -y`
4. `npm install json-server`
5. Create a `db.json` file:
```json
{
  "todos": [
    {"id": 1,"title": "Task 1","priority": 1,"completed": false,"due": "2021-02-03"},
    {"id": 2,"title": "Task 2","priority": 1,"completed": false},
    {"id": 3,"title": "Task 3","priority": 2,"completed": true},
    {"id": 4,"title": "Task 4","priority": 3,"completed": false}
  ]
}
```
6. Add to package.json in the scripts array:
```json
scripts: {
  "server": "json-server db.json"
}
```
7. `npm run server`
Leave that running in a terminal at all times

### Setting up the website
1. Create server/public folder.
2. Add index.html to it
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>To dos</title>
</head>
<body>
  <h1>
    Things I have to do
  </h1>
  <section id="todos">
  </section>
</body>
</html>
```
3. Restart the server.
4. Navigate to http://localhost:3000 to see your page

### Adding styles with CSS
1. Create site.css
2. Add to the <head>
`<link rel="stylesheet" href="./site.css" />`
3. Put styles in there as you desire.

### Wiring up JavaScript
1. Create index.js
2. Read the script:
`<script type="module" src="index.js"></script>`
Note the `type="module"`. With this you can add all other 
scripts using the ES2015 modules via the import statement.




