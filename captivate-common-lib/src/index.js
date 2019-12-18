import React from 'react';
import ReactDOM from 'react-dom';
import ArticleHeader from './components/ArticleHeader/index.js';
import ImageComponent from './components/ImageComponent/index.js';
import PromotionalComponent from './components/PromotionalBlock/index.js';
import TextComponent from './components/Text/index.js';
import { Grid } from '@material-ui/core';

			
var xmlhttp = new XMLHttpRequest();
var url = "";
var path = url+window.location.pathname.replace(/html$/,"json")
console.log("The URL of this page is: " + path);

function render(result) {
  
  var json = JSON.parse(result);
	
  var dataImage={data:{}};	
  var dataPromotional={data:{}};
  var dataText1={data:{text:""}};
  var dataText2={data:{text:""}};
  var dataText3={data:{text:""}};


  var previous;
  for (var p in json.data) {

    if (json.data[p]=="Image")
    {
        console.log("Add Image");
        console.log(json.data[previous]);
    }

    if (json.data[p]=="Promotional")
    {
        console.log("Add Promotional");
        console.log(json.data[previous]);
     }

    previous=p;

  }


  dataImage.data=json.data.imageContentReferenceData;
  dataPromotional.data=json.data.contentFragmentContentReference2Data;
  dataText1.data.text=json.data.section1;
  dataText2.data.text=json.data.section2;
  dataText3.data.text=json.data.section3;

  ReactDOM.render(<div>
                    <Grid container>
                      <Grid item xs={12} lg={10} xl={1}>
                        <ImageComponent  {...dataImage} />
                        <TextComponent  {...dataText1} />
                        <TextComponent  {...dataText2} />
                        <TextComponent  {...dataText3} />
                      </Grid>
                    <Grid item xs={12} lg={2} xl={1}>
                        <PromotionalComponent  {...dataPromotional} />
                    </Grid>
                    </Grid>
				  </div>,
				  document.getElementById('root'));
}


xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {   
    render(this.responseText);
  }
};
xmlhttp.open("GET", path, true);
xmlhttp.send();



