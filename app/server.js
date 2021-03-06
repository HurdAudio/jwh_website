'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');
const nodemailer = require('nodemailer');
// const bcrypt = require('bcrypt');
// const request = require('request');
// const parseString = require('xml2js').parseString;
//const fileUpload = require('express-fileupload');

require('dotenv').config();

const app = express();
// const visitorfeedbacks = require('./routes/visitorfeedbacks.js');
// const users = require('./routes/users.js');
// const holidays = require('./routes/holidays.js');
// const holidaysbyuser = require('./routes/holidaysbyuser.js');
// const occasions = require('./routes/occasions.js');
// const occasionsbyuser = require('./routes/occasionsbyuser.js');
// const bills = require('./routes/bills.js');
// const billsbyuser = require('./routes/billsbyuser.js');
// const tasks = require('./routes/tasks.js');
// const tasksbyuser = require('./routes/tasksbyuser.js');
// const observances = require('./routes/observances.js');
// const observancesbyuser = require('./routes/observancesbyuser.js');
// const blocktypes = require('./routes/blocktypes.js');
// const blocktypesbyuser = require('./routes/blocktypesbyuser.js');
// const timeblocks = require('./routes/timeblocks.js');
// const timeblocksbyuser = require('./routes/timeblocksbyuser.js');
// const goals = require('./routes/goals.js');
// const goalsbyuser = require('./routes/goalsbyuser.js');
// const friday_musics = require('./routes/friday_musics.js');
// const friday_musicsbyuser = require('./routes/friday_musicsbyuser.js');
// const sunday_musics = require('./routes/sunday_musics.js');
// const sunday_musicsbyuser = require('./routes/sunday_musicsbyuser.js');
// const january_arts = require('./routes/january_arts.js');
// const january_artsbyuser = require('./routes/january_artsbyuser.js');
// const january_musics = require('./routes/january_musics.js');
// const january_musicsbyuser = require('./routes/january_musicsbyuser.js');
// const february_arts = require('./routes/february_arts.js');
// const february_artsbyuser = require('./routes/february_artsbyuser.js');
// const february_musics = require('./routes/february_musics.js');
// const february_musicsbyuser = require('./routes/february_musicsbyuser.js');
// const march_arts = require('./routes/march_arts.js');
// const march_artsbyuser = require('./routes/march_artsbyuser.js');
// const march_musics = require('./routes/march_musics.js');
// const march_musicsbyuser = require('./routes/march_musicsbyuser.js');
// const april_arts = require('./routes/april_arts.js');
// const april_artsbyuser = require('./routes/april_artsbyuser.js');
// const april_musics = require('./routes/april_musics.js');
// const april_musicsbyuser = require('./routes/april_musicsbyuser.js');
// const may_arts = require('./routes/may_arts.js');
// const may_artsbyuser = require('./routes/may_artsbyuser.js');
// const may_musics = require('./routes/may_musics.js');
// const may_musicsbyuser = require('./routes/may_musicsbyuser.js');
// const june_arts = require('./routes/june_arts.js');
// const june_artsbyuser = require('./routes/june_artsbyuser.js');
// const june_musics = require('./routes/june_musics.js');
// const june_musicsbyuser = require('./routes/june_musicsbyuser.js');
// const july_arts = require('./routes/july_arts.js');
// const july_artsbyuser = require('./routes/july_artsbyuser.js');
// const july_musics = require('./routes/july_musics.js');
// const july_musicsbyuser = require('./routes/july_musicsbyuser.js');
// const august_arts = require('./routes/august_arts.js');
// const august_artsbyuser = require('./routes/august_artsbyuser.js');
// const august_musics = require('./routes/august_musics.js');
// const august_musicsbyuser = require('./routes/august_musicsbyuser.js');
// const september_arts = require('./routes/september_arts.js');
// const september_artsbyuser = require('./routes/september_artsbyuser.js');
// const september_musics = require('./routes/september_musics.js');
// const september_musicsbyuser = require('./routes/september_musicsbyuser.js');
// const october_arts = require('./routes/october_arts.js');
// const october_artsbyuser = require('./routes/october_artsbyuser.js');
// const october_musics = require('./routes/october_musics.js');
// const october_musicsbyuser = require('./routes/october_musicsbyuser.js');
// const november_arts = require('./routes/november_arts.js');
// const november_artsbyuser = require('./routes/november_artsbyuser.js');
// const november_musics = require('./routes/november_musics.js');
// const november_musicsbyuser = require('./routes/november_musicsbyuser.js');
// const december_arts = require('./routes/december_arts.js');
// const december_artsbyuser = require('./routes/december_artsbyuser.js');
// const december_musics = require('./routes/december_musics.js');
// const december_musicsbyuser = require('./routes/december_musicsbyuser.js');
// const january_tiles = require('./routes/january_tiles.js');
// const january_tilesbyuser = require('./routes/january_tilesbyuser.js');
// const february_tiles = require('./routes/february_tiles.js');
// const february_tilesbyuser = require('./routes/february_tilesbyuser.js');
// const march_tiles = require('./routes/march_tiles.js');
// const march_tilesbyuser = require('./routes/march_tilesbyuser.js');
// const april_tiles = require('./routes/april_tiles.js');
// const april_tilesbyuser = require('./routes/april_tilesbyuser.js');
// const may_tiles = require('./routes/may_tiles.js');
// const may_tilesbyuser = require('./routes/may_tilesbyuser.js');
// const june_tiles = require('./routes/june_tiles.js');
// const june_tilesbyuser = require('./routes/june_tilesbyuser.js');
// const july_tiles = require('./routes/july_tiles.js');
// const july_tilesbyuser = require('./routes/july_tilesbyuser.js');
// const august_tiles = require('./routes/august_tiles.js');
// const august_tilesbyuser = require('./routes/august_tilesbyuser.js');
// const september_tiles = require('./routes/september_tiles.js');
// const september_tilesbyuser = require('./routes/september_tilesbyuser.js');
// const october_tiles = require('./routes/october_tiles.js');
// const october_tilesbyuser = require('./routes/october_tilesbyuser.js');
// const november_tiles = require('./routes/november_tiles.js');
// const november_tilesbyuser = require('./routes/november_tilesbyuser.js');
// const december_tiles = require('./routes/december_tiles.js');
// const december_tilesbyuser = require('./routes/december_tilesbyuser.js');
// const messages = require('./routes/messages.js');
// const messagesbyuser = require('./routes/messagesbyuser.js');
// const comments = require('./routes/comments.js');
// const commentsbyuser = require('./routes/commentsbyuser.js');
// const timeblock_shares = require('./routes/timeblock_shares.js');
// const timeblock_sharesbyuser = require('./routes/timeblock_sharesbyuser.js');
// const holiday_shares = require('./routes/holiday_shares.js');
// const holiday_sharesbyuser = require('./routes/holiday_sharesbyuser.js');
// const occasions_shares = require('./routes/occasions_shares.js');
// const occasions_sharesbyuser = require('./routes/occasions_sharesbyuser.js');
// const task_shares = require('./routes/task_shares.js');
// const task_sharesbyuser = require('./routes/task_sharesbyuser.js');
// const observance_shares = require('./routes/observance_shares.js');
// const observance_sharesbyuser = require('./routes/observance_sharesbyuser.js');
// const art_shares = require('./routes/art_shares.js');
// const art_sharesbyuser = require('./routes/art_sharesbyuser.js');
// const music_shares = require('./routes/music_shares.js');
// const music_sharesbyuser = require('./routes/music_sharesbyuser.js');

const port = process.env.PORT || 3007;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/../', 'node_modules')));
// app.use('/scripts', express.static(path.join(__dirname, '../node_modules/vexflow/releases/')));
// app.use('/moment', express.static(path.join(__dirname, '../node_modules/moment/min/')));
// app.use(fileUpload());



 // app.use('/users', users);
 // app.use('/holidays', holidays);
 // app.use('/holidaysbyuser', holidaysbyuser);
 // app.use('/occasions', occasions);
 // app.use('/occasionsbyuser', occasionsbyuser);
 // app.use('/bills', bills);
 // app.use('/billsbyuser', billsbyuser);
 // app.use('/tasks', tasks);
 // app.use('/tasksbyuser', tasksbyuser);
 // app.use('/observances', observances);
 // app.use('/observancesbyuser', observancesbyuser);
 // app.use('/blocktypes', blocktypes);
 // app.use('/blocktypesbyuser', blocktypesbyuser);
 // app.use('/timeblocks', timeblocks);
 // app.use('/timeblocksbyuser', timeblocksbyuser);
 // app.use('/goals', goals);
 // app.use('/goalsbyuser', goalsbyuser);
 // app.use('/friday_musics', friday_musics);
 // app.use('/friday_musicsbyuser', friday_musicsbyuser);
 // app.use('/sunday_musics', sunday_musics);
 // app.use('/sunday_musicsbyuser', sunday_musicsbyuser);
 // app.use('/january_arts', january_arts);
 // app.use('/january_artsbyuser', january_artsbyuser);
 // app.use('/january_musics', january_musics);
 // app.use('/january_musicsbyuser', january_musicsbyuser);
 // app.use('/february_arts', february_arts);
 // app.use('/february_artsbyuser', february_artsbyuser);
 // app.use('/february_musics', february_musics);
 // app.use('/february_musicsbyuser', february_musicsbyuser);
 // app.use('/march_arts', march_arts);
 // app.use('/march_artsbyuser', march_artsbyuser);
 // app.use('/march_musics', march_musics);
 // app.use('/march_musicsbyuser', march_musicsbyuser);
 // app.use('/april_arts', april_arts);
 // app.use('/april_artsbyuser', april_artsbyuser);
 // app.use('/april_musics', april_musics);
 // app.use('/april_musicsbyuser', april_musicsbyuser);
 // app.use('/may_arts', may_arts);
 // app.use('/may_artsbyuser', may_artsbyuser);
 // app.use('/may_musics', may_musics);
 // app.use('/may_musicsbyuser', may_musicsbyuser);
 // app.use('/june_arts', june_arts);
 // app.use('/june_artsbyuser', june_artsbyuser);
 // app.use('/june_musics', june_musics);
 // app.use('/june_musicsbyuser', june_musicsbyuser);
 // app.use('/july_arts', july_arts);
 // app.use('/july_artsbyuser', july_artsbyuser);
 // app.use('/july_musics', july_musics);
 // app.use('/july_musicsbyuser', july_musicsbyuser);
 // app.use('/august_arts', august_arts);
 // app.use('/august_artsbyuser', august_artsbyuser);
 // app.use('/august_musics', august_musics);
 // app.use('/august_musicsbyuser', august_musicsbyuser);
 // app.use('/september_arts', september_arts);
 // app.use('/september_artsbyuser', september_artsbyuser);
 // app.use('/september_musics', september_musics);
 // app.use('/september_musicsbyuser', september_musicsbyuser);
 // app.use('/october_arts', october_arts);
 // app.use('/october_artsbyuser', october_artsbyuser);
 // app.use('/october_musics', october_musics);
 // app.use('/october_musicsbyuser', october_musicsbyuser);
 // app.use('/november_arts', november_arts);
 // app.use('/november_artsbyuser', november_artsbyuser);
 // app.use('/november_musics', november_musics);
 // app.use('/november_musicsbyuser', november_musicsbyuser);
 // app.use('/december_arts', december_arts);
 // app.use('/december_artsbyuser', december_artsbyuser);
 // app.use('/december_musics', december_musics);
 // app.use('/december_musicsbyuser', december_musicsbyuser);
 // app.use('/january_tiles', january_tiles);
 // app.use('/january_tilesbyuser', january_tilesbyuser);
 // app.use('/february_tiles', february_tiles);
 // app.use('/february_tilesbyuser', february_tilesbyuser);
 // app.use('/march_tiles', march_tiles);
 // app.use('/march_tilesbyuser', march_tilesbyuser);
 // app.use('/april_tiles', april_tiles);
 // app.use('/april_tilesbyuser', april_tilesbyuser);
 // app.use('/may_tiles', may_tiles);
 // app.use('/may_tilesbyuser', may_tilesbyuser);
 // app.use('/june_tiles', june_tiles);
 // app.use('/june_tilesbyuser', june_tilesbyuser);
 // app.use('/july_tiles', july_tiles);
 // app.use('/july_tilesbyuser', july_tilesbyuser);
 // app.use('/august_tiles', august_tiles);
 // app.use('/august_tilesbyuser', august_tilesbyuser);
 // app.use('/september_tiles', september_tiles);
 // app.use('/september_tilesbyuser', september_tilesbyuser);
 // app.use('/october_tiles', october_tiles);
 // app.use('/october_tilesbyuser', october_tilesbyuser);
 // app.use('/november_tiles', november_tiles);
 // app.use('/november_tilesbyuser', november_tilesbyuser);
 // app.use('/december_tiles', december_tiles);
 // app.use('/december_tilesbyuser', december_tilesbyuser);
 // app.use('/messages', messages);
 // app.use('/messagesbyuser', messagesbyuser);
 // app.use('/comments', comments);
 // app.use('/commentsbyuser', commentsbyuser);
 // app.use('/timeblock_shares', timeblock_shares);
 // app.use('/timeblock_sharesbyuser', timeblock_sharesbyuser);
 // app.use('/holiday_shares', holiday_shares);
 // app.use('/holiday_sharesbyuser', holiday_sharesbyuser);
 // app.use('/occasions_shares', occasions_shares);
 // app.use('/occasions_sharesbyuser', occasions_sharesbyuser);
 // app.use('/task_shares', task_shares);
 // app.use('/task_sharesbyuser', task_sharesbyuser);
 // app.use('/observance_shares', observance_shares);
 // app.use('/observance_sharesbyuser', observance_sharesbyuser);
 // app.use('/art_shares', art_shares);
 // app.use('/art_sharesbyuser', art_sharesbyuser);
 // app.use('/music_shares', music_shares);
 // app.use('/music_sharesbyuser', music_sharesbyuser);

// app.get('/onthisdayinhistory/:date', (req, res, next) =>{
//   let newUrl = 'http://history.muffinlabs.com/date/';
//   let date = new Date(req.params.date);
//   let month = date.getMonth() + 1;
//   let day = date.getDate();
//   let queryString = newUrl + month + '/' + day;
//   return request(queryString).pipe(res);
// });
//
// app.get('/words/:word', (req, res, next)=>{
//   //returns synonyms
//   let newURL = 'https://api.datamuse.com/words?ml=' + req.params.word;
//   return request(newURL).pipe(res);
// });
//
// app.get('/wordassociation/:word', (req, res, next)=>{
//   //returns strongly associated words
//   let newURL = 'https://api.datamuse.com/words?rel_trg=' + req.params.word;
//   return request(newURL).pipe(res);
// });
//
// app.get('/dictionary/:word', (req, res, next)=>{
//   let queryString1 = 'http://www.dictionaryapi.com/api/v1/references/collegiate/xml/';
//   let queryString2 = '?key=';
//   request(queryString1 + req.params.word + queryString2 + process.env.DICTIONARY_KEY).pipe(res);
//
//
// });
//
// app.post('/xmlconverter/', (req, res, next)=>{
//   //console.log(req.body.data);
//    parseString(req.body.data, (err, result)=>{
//      res.send(result);
//    });
// });
//
// app.post('/photo_upload', (req, res, next)=>{
//   console.log(req);
//   if (!req.files) {
//     return res.status(400).send('No files were uploaded.');
//   }
//   let photo = req.files.userPhoto;
//   let link = './uploads/' + photo.name;
//   photo.mv(link, function(err) {
//     if (err) {
//       return res.status(500).send(err);
//     }
//
//     res.send(link);
//   });
//
// });

app.post('/contactemail', (req, res, next)=>{
  console.log('it\'s emailing time!');

  let smtp = {
    host: 'smtp.mail.com',
    port: 587,
    secure: false
  };
  let account = {
    smtp: smtp,
    user: process.env.EMAIL_ACCOUNT,
    pass: process.env.EMAIL_PASSWORD
  };


    //console.log(req.body.email);
    // nodemailer.createTestAccount((err)=>{
    //   if (err) {
    //     console.log('failed to create a testing account');
    //     return(err);
    //   }
    //   console.log('Credentials obtained, sending message...');
    // });

  let transporter = nodemailer.createTransport(
      {
          host: account.smtp.host,
          port: account.smtp.port,
          secure: account.smtp.secure,
          auth: {
              user: account.user,
              pass: account.pass
          },
          tls: {
            rejectUnauthorized: false
          },
          logger: true,
          debug: true // include SMTP traffic in the logs
      },
      {
          // default message fields

          // sender info
          from: process.env.EMAIL_ACCOUNT
      }
  );

  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take our messages');
    }
  });

  // Message object
  let message = {
      // Comma separated list of recipients
      from: process.env.EMAIL_ACCOUNT,
      to: 'jerrie@jerriehurd.com',

      // Subject of the message
      subject: 'Message from website',

      // plaintext body


      text: req.body.email + ' message: ' + req.body.message,



  };

  transporter.sendMail(message, (error, info) => {
      if (error) {
          console.log('Error occurred');
          console.log(error.message);
          res.send(error);
          return process.exit(1);
      }


      console.log('Message sent successfully!');
      console.log(nodemailer.getTestMessageUrl(info));

      res.send('Message Sent Successfully');

      // only needed when using pooled connections
      //transporter.close();
  });


});


app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



app.listen(port, () => {
  console.log('Listening on port', port);
  console.log('postgreSQL is lit.');
});

module.exports = app;
