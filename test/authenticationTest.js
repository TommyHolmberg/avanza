import dotenv from 'dotenv';
dotenv.config()

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import Avanza from '../dist/Avanza';

chai.use(chaiAsPromised);

describe('authentication', () => {

    let client;

    beforeEach(() => {
        client = new Avanza();
    });

    it('should return a security token and an authentication session when given correct credentials', () => {

        chai.should()

        const authentication = client.authenticate({
            username: process.env.USERNAME,
            password: process.env.PASSWORD
        })

        authentication.should.eventually.have.property('securityToken')
        authentication.should.eventually.have.property('authenticationSession')

    });

});