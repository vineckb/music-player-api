import mongoose from 'mongoose';
import dbHandler from './utils/database.js';

import UserModel from '../src/models/User.js';

beforeAll(async () => await dbHandler.connect());
afterEach(async () => await dbHandler.clearDatabase());
afterAll(async () => await dbHandler.closeDatabase());

describe('create user test ', () => {
  it('can be created correctly', async () => {
    const userData = {
      name: 'test',
      email: 'test@test.com',
      password: 'test'
    };
    const user = await UserModel.create(userData);

    expect(user.name).toEqual(userData.name);
  });
});

export default {};
