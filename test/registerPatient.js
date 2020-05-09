process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const db = require('../config/testConfig');

const server = require('../index');
const Patient = require('../models/patient');

//Assertion style 
chai.should();

chai.use(chaiHttp);

/* **************
*   GENERATE A NEW TOKEN FROM THE DOCTOR LOGIN ROUTE IN THE API
*/
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTgyMmJhNDVjZGYyNzY5MDhmYmJmMGEiLCJ1c2VybmFtZSI6ImFiaGkiLCJwYXNzd29yZCI6IjEyIiwiY3JlYXRlZEF0IjoiMjAyMC0wMy0zMFQxNzoyNTo1Ni44NzNaIiwidXBkYXRlZEF0IjoiMjAyMC0wMy0zMFQxNzoyNTo1Ni44NzNaIiwiX192IjowLCJpYXQiOjE1ODkwNTYwNjIsImV4cCI6MTU4OTA1NjA3Mn0.qFWqEpzmPRa4jaPO5No4OPH7PBQOAhuHzP-V-mywo64';

let authBearerToken = 'bearer ' + token;

describe('SARS-COV-2 tests', () => {

    before((done) => {
        Patient.remove({}, (err) => {
            done();
        });
    })

    describe("POST /register-patients", () => {
        it("check if it stores the newly create patient", done => {
            const patient = {
                name: 'kam',
                phone: 1111111112
            }
            chai.request(server)
                .post("/register-patients")
                .set('content-type', 'application/x-www-form-urlencoded')
                .set('Authorization', authBearerToken)
                .send(patient)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.patient.should.have.property('name');
                    res.body.patient.should.have.property('phone');
                    res.body.patient.phone.should.have.least(999999999);
                    res.body.patient.phone.should.have.most(10000000000);
                    done();
                })
        })
    })

    describe("POST /patients/:id/create_report", () => {
        it("check if it stores the newly created patient report", done => {
            const report = {
                status: "positive",
                doc_name: "abhishe",
                patient: "5eb6a7114f0b98f61c652a28"
            }
            chai.request(server)
                .post(`/patients/${report.patient}/create_report`)
                .set('content-type', 'application/x-www-form-urlencoded')
                .set('Authorization', authBearerToken)
                .send(report)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.report.should.have.property('status');
                    res.body.report.should.have.property('doc_name');
                    res.body.report.should.have.property('patient');
                    done();
                })
        })
    })

    describe("GET /patients/:id/all_reports", () => {
        it("check if it gets the patient report", done => {
            const id = "5e82f09c18e3686e10f29dfa";
            chai.request(server)
                .post(`/patients/${id}/all_reports`)
                .set('Authorization', authBearerToken)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.reports.should.be.a('array');

                    done();
                })
        })
    })

})

process.env.NODE_ENV = 'development';