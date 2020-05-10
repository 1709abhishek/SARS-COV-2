# SARS-COV-2
an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of  COVID-19 patients applied with unit testings

# unit testing

1. /register-patients
2. /patients/:id/create-report
3. /patients/:id/all-reports

# dependencies used

1. express
2. passport
3. body-parser
4. passport-jwt
5. passport-local
6. nodemon
7. jsonwebtoken
8. Mongoose
9. Mocha
10. Chai

# Routes
1. /doctors/register → with username and password
2. /doctors/login → returns the JWT to be used
3. /register_patient ***** authenticated with JWT
4. /patients/:id/create_report ***** authenticated with JWT
5. /patients/:id/all_reports → List all the reports of a patient oldest to latest ***** authenticated with JWT
6. /reports/:status

# setup
1. clone https://github.com/1709abhishek/SARS-COV-2
2. cd SARS-COV-2
3. run nodemon index.js
4. open postman and visit above routes
5. data models are:
--doctors: username,password
--patients: phone,name
--reports: doctor_name,status
6. testing database is seperate
7. development database is seperate
8. run test by npm test

# Project structure
.

    ├── index.js
    ├── package.json
    ├── config
        ├── mongoose.js
        ├── config.js   
        ├── testConfig.js   
        ├── passport-local-strategy.js    
    ├── controllers
    |    ├── api
    |        ├── v1
    |            ├── doctor_controller.js  
    |            ├── home_controller.js  
    |             ├── patient_controller.js     
    |             ├── report_controller.js             
    ├── models
    │   ├── doctor.js
        ├── patient.js
        ├── report.js
    ├── routes
    |    ├── api
    |        ├── v1
    |            ├── index.js  
    |            ├── doctors.js
                 ├── patients.js
                 ├── reports.js
    ├── test
    │   ├── registerPatient.js
    ├── .gitignore

# testing
---- used mocha as a server and chai for assertion library
3 tests :- 
1. to check for /register-patients
2. to check for /patients/:id/create-report
3. to check for /patients/:id/all-reports
all three are authenticated use token to authorise.
obtain the token by registering the doctor in test DB itself and then login and get the token
paste it in registerPatient.js file
------ clearing the test database beforehand everytime tests are ran-------