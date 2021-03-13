var fs=require('fs');
var data=fs.readFileSync('books.json');
var books=JSON.parse(data);
const express = require("express");
const app = express();
const cors=require('cors');

app.listen(process.env.PORT, () => console.log("Server Start at 5000 Port"));

app.use(express.static('public'));
app.use(cors());
app.get('/books',alldata);
function alldata(request,response)
{
    response.send(books);
}
app.get('/books/:book/',searchBook);
function searchBook(request,response)
{
	var word=request.params.book;
	word=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
	console.log(word);
	//console.log(books[word]);
	if(books[word])
	{
		var reply=books[word];
		
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