## Hotel Reservation, Front-End Mobile App

    GraphQL + React Native + Redux + Axios + Flow or Typescript

#### RN Installation 
    git clone https://github.com/jahskee/react-native-hilton
    npm install
    npm start

#### GraphQL Server Installation
    git clone https://github.com/jahskee/graphql-hilton
    npm install
    npm start
   
#### GraphQL Server
    Live server for the project:
    http://kickstartapps.us:4000/graphql
       
#### REST Support Requirement    

    * Find all reservations
    [GET] http://kickstartapps.us:4000/api/reservations
    
    * Find reservation by Id
    [GET] http://kickstartapps.us:4000/api/reservation/5c4b837e4001a326f882b2b5
    [GET] http://kickstartapps.us:4000/api/reservation/5c4b98ee4001a326f882b2b8
    
    * Add and update reservation
    [POST] http://kickstartapps.us:4000/api/reservation
    
    - If _id is undefined record add; else, update
     samplePostData = {
            _id: 'any' . 
            name: 'jaizon',
            phone: '5432222',
            email: 'jay@y.com',
            hotel: 'hotel1',
            address: 'address',
            arrival: 'arrival',
            departure: 'departure',
            totalAmount: 1080
     }

      
#### Video about the project
   https://youtu.be/6pam9P3fpTc
   [![Alt text](https://i.imgur.com/pVByW80.png)](https://youtu.be/6pam9P3fpTc)

#### Screenshots

   ![alt text](https://i.imgur.com/Qsf1Mvy.png)
   ![alt text](https://i.imgur.com/nTmJ3ge.png)

#### GraphQL Screenshot

   ![alt text](https://i.imgur.com/XkRWZyx.png)

    Thank you!
    
    
    Sincerely yours,
    Jaizon Lubaton
