# Github Yearly Contributions
As Github's API does not provide a means to check the number of contributions within a year for a given user, this module works around that by scraping the information off said users profile page.

## Installation
```
npm install --save github-yearly-contributions
```

## Usage
**function(username, [timeout], cb)**

```
const contributions = require('github-yearly-contributions');

contributions('username', function(err, amount){
  console.log('Contributions this year = ' + amount);  
});
```
