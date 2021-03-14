var fs=require('fs');
var data=fs.readFileSync('books.json');
var elements=JSON.parse(data);
const express = require("express");
const app = express();
const cors=require('cors');
Port=5000
app.use(express.static('public'));
app.use(cors());

function alldata(request,response)
{
    response.send(elements);
}
app.get('/elements/:element/',searchElement);
function searchElement(request,response)
{
	var word=request.params.element;
	word=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
	console.log(word);
	console.log(elements[word]);
	if(elements[word])
	{
		var reply=elements[word];
		
	}
	else
	{
		var reply={
			status:"Not Found"
		}
	}
    console.log(reply.boil);
	response.send(reply);


}
app.get('/elements',alldata);



app.listen(Port, () => console.log("Server Start at " + Port));