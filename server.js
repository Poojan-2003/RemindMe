// const express = require("express")
// const mysql = require('mysql')
// const cors = require('cors')

// const app = express()
// app.use(cors())

// const db = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:'crud'
// })

// app.get('/',(req,res)=>{
//     return res.json("From Backend");
// })

// app.get('/users',(req,res)=>{
//     const sql = "SELECT * FROM users";
//     db.query(sql,(err,data)=>{
//         if(err) return res.json(err);
//         return res.json(data);
//     })
// })

// app.listen(8081,()=>{
//     console.log("Listening");
// })





const express = require("express")
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'remindme'
})

app.post('/Users',(req,res) => {
    const sql = "INSERT INTO users (`UserName`,`Password`,`Remarks`)VALUES(?)";
    const values = [
        req.body.UserName,
        req.body.Password,
        req.body.Remarks
    ]
    db.query(sql,[values],(err,data) => {
        if(err) return res.json("Error")
        return res.json(data);
    })
})



app.get("/users", (req, res) => {
    const q = "SELECT * FROM users";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });


  app.post('/business',(req,res) => {
    const sql = "INSERT INTO businessdetails (`Name`,`Phone`,`Address`,`Remarks`)VALUES(?)";
    const values = [
        req.body.Name,
        req.body.Phone,
        req.body.Address,
        req.body.Remarks
    ]
    db.query(sql,[values],(err,data) => {
        if(err) return res.json("Error")
        return res.json(data);
    })
})


app.put('/updatedetails/:id',(req,res) => {

    const sql = "update users set `UserName` = ?, `Remarks` = ? where ID = ?";
    const values = [
        req.body.name,
        req.body.remarks
    ]
    const id = req.params.id;


    db.query(sql,[...values,id],(err,data) => {
        if(err) return res.json("Error")
        return res.json(data);
    })
})

app.delete('/deleteuser/:id',(req,res) => {

    const sql = "DELETE FROM users where ID = ?";
    const id = req.params.id;
    


    db.query(sql,[id],(err,data) => {
        if(err) return res.json("Error")
        return res.json(data);
    })
})

//Customer.js


app.post('/customer',(req,res) => {
    const sql = "INSERT INTO customer (`fname`,`mname`,`lname`,`email`,`phone`,`address`,`city`,`remarks`,`service`)VALUES(?)";
    const values = [
        req.body.Fname,
        req.body.Mname,
        req.body.Lname,
        req.body.Email,
        req.body.Phone,
        req.body.Address,
        req.body.City,
        req.body.Remarks,
        req.body.Toggle
    ]
    db.query(sql,[values],(err,data) => {
        if(err) return res.json("Error")
        return res.json(data);
    })
})


//Services.js

app.post('/services',(req,res) => {
    const sql = "INSERT INTO services (`name`,`Email`, `description`,`remainderdate`,`reminderduration`,`regdate`)VALUES(?)";
    const values = [
        req.body.UserName,
        req.body.Email,
        req.body.Description,
        req.body.Expirydate,
        req.body.Remainderduration,
        req.body.regdate,
        
    ]
    db.query(sql,[values],(err,data) => {
        if(err) return res.json("Error")
        return res.json(data);
    })
})



//Dashboard.js
app.get("/dashboard", (req, res) => {
    const q = "SELECT Name,Email,DATE_FORMAT(expirydate, '%d-%m-%y') as expirydate ,DATE_FORMAT(regdate, '%d-%m-%y') AS regdate,servicedetails,ID, custid, serid FROM servicedetail GROUP BY custid ORDER BY expirydate DESC";
    
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });

  app.get("/businessinfo",(req,res)=>{
    const q = "select * from businessdetails"
    db.query(q, (err, data) => {
        if (err) {
          console.log(err);
          return res.json(err);
        }
        return res.json(data);
      });
  });


  app.put('/updatedashboard/:id',(req,res) => {

    const sql = "update servicedetail set `Name` = ?, `Email` = ? ,`expirydate` = ? where ID = ?";

    const values = [
        req.body.name,
        req.body.email,
        req.body.date
    ]
    const id = req.params.id;


    db.query(sql,[...values,id],(err,data) => {
        if(err) return res.json("Error")
        return res.json(data);
    })

})
app.delete('/deletedashboarduser/:id',(req,res) => {

    const sql = "DELETE FROM servicedetail where ID = ?";
    const id = req.params.id;
    


    db.query(sql,[id],(err,data) => {
        if(err) return res.json("Error")
        return res.json(data);
    })
})




 
app.listen(8081,() => {
    console.log("Listening");
})






