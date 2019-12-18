##### Design Links :

- [Article Header Design](https://zpl.io/a7eeGvv 'Zeplin Design link')

<br/>

```jsx

import ReactDOM from 'react-dom';

var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:4502/content/lordabbett/data.json";


function myFunction(json) {
  
  var obj = JSON.parse(json);
						   
  articleHeader=obj;

  ReactDOM.render(React.createElement(ArticleHeader, {...articleHeader} ), document.getElementById('rsg-root'));
}


xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {   
    myFunction(this.responseText);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
	




//React.createElement(ArticleHeader, {...articleHeader} );

```


