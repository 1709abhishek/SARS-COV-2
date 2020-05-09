# SARS-COV-2
an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of  COVID-19 patients.

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
3. /register_patient 
4. /patients/:id/create_report
5. /patients/:id/all_reports → List all the reports of a patient oldest to latest

# setup
1. clone https://github.com/1709abhishek/SARS-COV-2
2. cd SARS-COV-2
3. run nodemon index.js
4. open postman and visit above routes
5. data models are:
--doctors: username,password
--patients: phone,name
--reports: doctor_name,status

# testing
---- used mocha as a server and chai for assertion library
