const app = require("../app");
const supertest = require("supertest");
const expect = require("chai").expect;
const request = supertest(app);


// function that makes the request to the server
//will be used in tests below
const makeRequest = () => {
    return request
        .post('/api/signup')
        .send({
            first_name: "myfirstname",
            last_name: "mylastname",
            email: "myemail",
            password: "mypassword"
        })
        .set("Accept", "application/json");
};

//we test 3 cases
//first case: If we successfully registerd a user
//second case: If the user is already existed we should return 409
//third case: If there is no internal errors
describe("Testing POST /api/signup", () => {
    it('is successful', async () => {
        try {
            const response = await makeRequest();
            expect(response.status)
                .to
                .equal(200);
            expect(response.body.success)
                .to
                .equal("Registeration Successfully");
        } catch (err) {
            expect.fail(err);
        }
    }).timeout(5000);
    it('is not conflicted', async () => {
        try {
            //this user is already existed
            //no need to create it first
            const response = await makeRequest();
            expect(response.status)
                .to
                .equal(409);
            expect(response.body.error)
                .to
                .equal("This email is used by another user");
        } catch (err) {
            expect.fail(err);
        }
    }).timeout(5000);
    it('no internal error', async () => {
        try {
            const response = await makeRequest();
            expect(response.status)
                .not
                .equal(500);
            expect(response.body.error)
                .not
                .equal("Internal Server Error");
        } catch (err) {
            expect.fail(err);
        }
    }).timeout(5000);
});