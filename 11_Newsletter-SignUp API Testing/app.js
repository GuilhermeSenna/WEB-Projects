// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { uptime } = require("process");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Carregar página estática (FrontEnd) e seus arquivos.
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    console.log(firstName, lastName, email);

    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName,
            },
        }, ],
    };

    const jsonData = JSON.stringify(data);

    const url = "https://usX.api.mailchimp.com/3.0/lists/$YOUR_LIST_ID"; // Insert your List ID here

    const options = {
        method: "POST",
        auth: "ANY_STRING:$YOUR_API_KEY", // Insert your API KEY here
    };

    const request = https.request(url, options, (response) => {
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/sucess.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", (data) => {
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();
});

app.post("/failure", (req, res) => {
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000.");
});

// --data @- \
// <<EOF | jq '.id'
// {
//   "name": "$event_name",
//   "contact": $footer_contact_info,
//   "permission_reminder": "permission_reminder",
//   "email_type_option": true,
//   "campaign_defaults": $campaign_defaults
// }