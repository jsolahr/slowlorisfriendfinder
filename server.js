var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8011;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Friend Finder (DATA)
// =============================================================
var friends = [
    {
        name: "Jess",
        photo: "https://www.corero.com/img/blog/thumb/574slowloris.png",
        scores: ["1", "2","3", "4", "3", "1", "2","3", "3","4"]
    },
    {   
        name: "Ryan",
        photo: "https://cdn.images.express.co.uk/img/dynamic/128/590x/Loris1-653787.jpg",
        scores: ["1", "2","3", "4", "3", "1", "2","3", "3","4"]
    
}]    


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
      
      });

 app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "app/public/survey.html"));
        
    });

app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });
    
  
app.post("/api/friends", function (req, res) {

  console.log(req.body.scores);

    var newFriends = req.body;  
    
    if (friends.length < 5) {
      
      console.log(newFriends);
  
      friends.push(newFriends);
  
      res.json(newFriends);
    } else {
      friends.push(newFriends);
    }
  
  });

   app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
  