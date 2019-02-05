
*********************
    ** Read me   **                                                           ** created by SJ**
*********************

This app is a platfrom or service providing a user to broadcast their ads or email messages throughout muliple clients.

    ## Technical Support
    1. Google OAuth 2. credits via stripe 3. survey request 4.taulation of feedback

 1. Sign up via Google OAuth added 

          (1) User clicks Login => Direct to localhost:PORT/auth/Google
          (2) Forward users's request to Google => google.com/auth?appid=123
          (3) Ask user if they grant permission
          (4) User grants permission => Direct to localhost:PORT/auth/google/callback?code=456
          (5) Put user on hold, take the 'code' from the URL
          (6) Send request to google with 'code' included => Google sees 'code' in URL, replies with 
          details about this user
          (7) Get user details, create new record in database => Set user ID in cookie for this user
          (8) if API resources needed. Cookie automatically included and request has a cookie with user id equal to 123


2. Passport JS handles the auth of the application

          (1) Passport entirely automates OAuth flow, but not the entire project
          (2) inherent confusion and sort of hard to grabs of library structure needs to be resolved
          (3) passport library && paassport strategy libarary(authenticating with one very specific method(email/password, Google, Facebook))

3. MongoDB with Mongoose 
   
        (1) each document hold the data of user
        (2) mongoose wraps the json of mongodb to handle the data 
        (3) mongodb setup remotely via http://www.mLab.com (version 3.6.9 (MMAPv1))
        (4) all request handled with async and await as heavily as possible
        (5) request => coockie sesssion extracts => passport(pulling info) =>
        deserialize id => add info to req.user

