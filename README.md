# Getting Started with Create React App

This project is simple react frontend and experss backend starter proejct.

1.  create react app in your directory ( on my case, I made folder named client).
    - change app.js with class component as like code in client directory.
2.  create express app nameed api in your root directory

    - npm install -g express-generator
    - cd api
    - npm install
    - set port url as like your mind ( in my case, I set 9000).

          for example   var port = normalizePort(process.env.PORT || '9000');
                        app.set('port', port);

            // this is that frontend and backend both can run on one browser

    - create testAPI.js in api/routes/testAPI.js
    - add to route in app.js in api directory this one's for new route testAPI.js
    - install package for cors and import this package in app.js

            var cors = require('cors');

            var testAPIRouter = require('./routes/testAPI')

            app.use(cors());

            app.use('/testAPI', testAPIRouter)

3.  If you have any question you can contac me on Skype.
    - skype address: live:.cid.b02c5b332bbbdcd6.
