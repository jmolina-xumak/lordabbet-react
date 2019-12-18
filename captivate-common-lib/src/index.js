import React from 'react';
import ReactDOM from 'react-dom';
import ArticleHeader from './components/ArticleHeader/index.js';
import ImageComponent from './components/ImageComponent/index.js';
import PromotionalComponent from './components/PromotionalBlock/index.js';


			
var xmlhttp = new XMLHttpRequest();
var url = "https://author.dev.lordabbett.xms.systems/content/lordabbett/fr.react.json";


function render(json) {
  
  var obj = JSON.parse(json);
	
  var dataImage={data:{}};	
  var dataPromotional={data:{}};
	
  dataImage.data=obj.data.imageContentReferenceData;
  dataPromotional.data=obj.data.contentFragmentContentReference2Data;

  		alert("The URL of this page is: " + window.location.pathname);
  ReactDOM.render(<div>
				  	<ImageComponent  {...dataImage} />
				  	<PromotionalComponent  {...dataPromotional} />
				  	<p>HOLA</p>
				  </div>,				  
				  document.getElementById('root'));
}


xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {   
    render(this.responseText);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
	
