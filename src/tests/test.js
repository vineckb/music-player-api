import mongoose from 'mongoose';
import db from './utils/database.js';

import UserModel from '../models/User.js';

beforeAll(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
afterAll(async () => await db.closeDatabase());

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
