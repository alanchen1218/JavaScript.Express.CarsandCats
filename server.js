var express = require("express")


var app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')


app.use(express.static(__dirname + "/static"))

app.get('/', function(request, response){
    console.log(request.url)
    
    response.send("<h1>Hello Express</h1>")
})

app.get('/cars', function(request, response){
    response.render('cars')
})
app.get('/cats', function(request, response){
    response.render('cats')
})
app.get('/cars/new', function(request, response){
    response.render('form')
})
app.get('/users', function (request, response){

    var users_array = [
        {name: "Michael", email: "michael@email.com"}, 
        {name: "Jay", email: "jay@email.com"}, 
        {name: "Brendan", email: "brendan@email.com"}, 
        {name: "Andrew", email: "andrew@email.com"}
    ]
    response.render('users', {users: users_array})
})

app.listen(8000, function() {
    console.log("Listening on port 8000")
})