# Github Yearly Contributions
As Github's API does not provide a means to check the number of contributions for a given user within a year, this module works around that by scraping the information off a given users profile page.

## Installation
```
npm install --save github-yearly-contributions
```

## Usage
**function(username, [timeout], cb)**

```
const contributions = require('github-yearly-contributions');

contributions('username', function(amount){
  console.log('Contributions this year = ' + amount);  
});
```
