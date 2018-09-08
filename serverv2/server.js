const express = require('express')

const bodyParser= require('body-parser')
const bcrypt=require('bcrypt-nodejs')
const cors= require('cors')
const app=express()
const knex= require('knex')
const register=require('./controllers/register.js')
const signin=require('./controllers/signin')
const profile= require('./controllers/profile')
const image= require('./controllers/image.js')

const db=knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'Teagan8008!',
      database : 'smartbrain'
    }
  });
db.select('*').from('users').then(data=>{
    console.log(data.length)
})

const database={
    users:[
        {
            id:'123',
            name:'john',
            email:'john@gmail.com',
            password:'cookies',
            entries:0,
            joined: new Date()
        },
        {
            id:'124',
            name:'sally',
            email:'sally@gmail.com',
            password:'bananas',
            entries:0,
            joined: new Date()
        }

    ],
    login:{
        id:'987',
        hash:'',
        email:'john@gmail.com'
    }
}

app.use(bodyParser.json())

app.use(cors())
app.get('/',(req,res)=>{

    res.json('welcome').status(200)
})
app.get('/profile/:id',(req,res)=>{profile.handleProfile(req,res,db)})
   // let found = false
    //const {id} = req.params
    // databse.users.forEach(user=>{
    //     if (user.id===id){
    //         found=true
    //       return  res.json(user)
    //     }
    // })
    

app.post('/signin',(req,res)=>{signin.handleSignin(req,res,db,bcrypt)})

//     // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });





//     if(req.body.email===database.users[0].email && req.body.password===database.users[0].password){
//         res.json(database.users[0])
//     } else {
//         res.status(400).json('error logging in')
//     }
    
// })



app.post('/register', (req,res)=>{register.handleRegister(req,res,db,bcrypt)})

app.put('/image', (req,res)=>{image.handleImage(req,res,db)})
app.post('/imageurl', (req,res)=>{image.handleApliCall(req,res)})



   



    // let found = false
    // const {id} = req.body
    // database.users.forEach(user=>{
    //     if (user.id===id){
    //         found=true
    //         user.entries++
    //       return  res.json(user.entries)
    //     }
    // })
    // if(!found){
    //     res.status(400).json('not found')
    // }
//     const {id}=req.body
//     db('users').where('id', '=', id)
//     .increment('entries',1)
//     .returning('entries')
//     .then(entries=>{res.json(entries[0])})
//     .catch(err=>res.status(400).json('unable to get entries'))
// })

// app.post('/register',( req, res)=>{
// const hash = bcrypt.hashSync(password);
//     db.transaction(trx => {
//       trx.insert({
//         hash: hash,
//         email: email
//       })
//       .into('login')
//       .returning('email')
//       .then(loginEmail => {
//         return trx('users')
//           .returning('*')
//           .insert({
//             email: loginEmail[0],
//             name: name,
//             joined: new Date()
//           })
//           .then(user => {
//             res.json(user[0]);
//           })
//       })
//       .then(trx.commit)
//       .catch(trx.rollback)
//     })
//     .catch(err => res.status(400).json('unable to register'))
// }
//     const {email, name, password}=req.body
//     // bcrypt.hash(password, null, null, function(err, hash) {
//     //     // Store hash in your password DB.
//     //     console.log(hash)
//     // });
//     const hash = bcrypt.hashSync(password)

//     // database.users.push({
        
//     //         id:'124',
//     //         name:name,
//     //         email:email,
            
//     //         entries:0,
//     //         joined: new Date()
        
//     // })
//     db.transaction(trx=>{
//         trx.insert({
//             hash:hash,
//             email: email
//         }).into('login')
//         .returning('email')
//         .then (loginEmail=>{
//         return
//         trx('users')
//         .returning('*')
//         .insert({
//         email:loginEmail[0],
//         name:name,
//         joined:new Date()
//         })
//         .then(user=>{
//         res.json(user[0])
//        // res.json(database.users[database.users.length-1])
        
//     })

// })
//         .then(trx.commit)
//         .catch(trx.rollback)
        
//     })
//     // return
//     // db('users')
//     // .returning('*')
//     // .insert({
//     //     email:email,
//     //     name:name,
//     //     joined:new Date()
//     // }).then(user=>{
//     //     res.json(user[0])
//     //     //res.json(database.users[database.users.length-1])
//     // })
//     .catch(err=> res.status(400).json('unable to register'))
    
// })



// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });




app.listen(3001, ()=>{
    console.log('App is running')
})