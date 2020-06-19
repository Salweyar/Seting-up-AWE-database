// var express = require("express");
// var app = express();
// var port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.listen(port, () => {
//   console.log("Server listening on port " + port);
// });
require("dotenv").config();
const fetch = require("node-fetch");

var MongoClient = require("mongodb").MongoClient;
const uri = process.env.URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  if (err) throw err;
  const collection = client
    .db("AWE")
    .collection("profiles")
    .find({}, { _id: 1 })
    .toArray(function (err, result) {
      if (err) throw err;

      let current = 1;
      let index = 1;

      var data = async function () {
        current--;
        while (current <= index) {
          current++;
          var i = 0;
          while (i < result.length) {
            var url =
              "https://coachandrewmoss.jobboard.io/api/v1/profiles/" +
              result[i].id;
            var headers = {
              "Content-Type": "application/json",
              "X-Api-Key": process.env.X_API_KEY,
              Accept: "*/*",
            };

            await fetch(url, { method: "GET", headers: headers })
              .then((res) => {
                return res.json();
                // client.db("AWE").collection("Test").remove({});
                // client.db("AWE").collection("Test").insertOne({ d });
              })
              .then((json) => {
                console.log(json);
              })
              .catch((err) => {
                console.log(err);
              });
            i++;
          }
        }
      };

      data();
      client.close();

      // for (i = 0; i < result.length; i++) {
      //   // console.log(result[i].id);
      //   var url =
      //     "https://coachandrewmoss.jobboard.io/api/v1/profiles/" + result[i].id;
      //   var headers = {
      //     "Content-Type": "application/json",
      //     "X-Api-Key": process.env.X_API_KEY,
      //     Accept: "*/*",
      //   };

      //   // fetch(url, { method: "GET", headers: headers })
      //   //   .then((res) => {
      //   //     // if (res.ok) {
      //   //     // client
      //   //     //   .db("AWE")
      //   //     //   .collection("Test")
      //   //     //   .insertOne(res.json(), function (err, res) {
      //   //     //     if (err) throw err;
      //   //     //     console.log(
      //   //     //       "Number of documents inserted: " + res.insertedCount
      //   //     //     );
      //   //     //   });

      //   //     return res.status;
      //   //     // }
      //   //   })
      //   //   .then((json) => {
      //   //     console.log(json);
      //   //   })
      //   //   .catch((err) => {
      //   //     console.log(err);
      //   //   });
      // }
    });
});
