
*********************
    ** Read me   **                                                           ** created by SJ**
*********************

This app is a platfrom or service providing a user to broadcast their ads or email messages throughout muliple clients.

    ## Technical Support
    1. Google OAuth 2. credits via stripe 3. survey request 4.tabulation of feedback

 1. Sign up via Google OAuth added 

       (1) User clicks Login => Direct to localhost:PORT/auth/Google
       (2) Forward users's request to Google => google.com/auth?appid=123
       (3) Ask user if they grant permission
       (4) User grants permission => Direct to localhost:PORT/auth/google/callback?code=456, and put user on hold, take the 'code' from the URL
       (5) Send request to google with 'code' included => Google sees 'code' in URL, replies with 
       details about this user
       (6) Get user details, create new record in database => Set user ID in cookie for this user,if API resources needed. Cookie automatically included and request has a cookie with user id equal to 123


1. Passport JS handles the auth of the application

       (1) Passport entirely automates OAuth flow, but not the entire project
       (2) inherent confusion and sort of hard to grabs of library structure needs to be resolved
       (3) passport library && paassport strategy libarary(authenticating with one very specific method(email/password, Google, Facebook))

2. MongoDB with Mongoose 
   
        (1) each document hold the data of user
        (2) mongoose wraps the json of mongodb to handle the data 
        (3) mongodb setup remotely via http://www.mLab.com (version 3.6.9 (MMAPv1))
        (4) all request handled with async and await as heavily as possible
        (5) request => coockie sesssion extracts => passport(pulling info) =>
        deserialize id => add info to req.user

3. Deploy app on both local and heroku variables 
   
        (1) local variables with set of google auth keys and db keys
        (2) heroku environment with set of google auth keys and db keys 
        (3) commited with gitignoring with very important key values 

4. Combine react and express server to work concunrrently
   
        (1) Install react within express server
        (2) npm module concurrently will deply both servers working concurrently
        (3) declare both running command in the package.json calling "npm run client"
        (4) http-proxy-middleware npm moduel works as helper to direct the proxy of client in sync with express
        
      
   

