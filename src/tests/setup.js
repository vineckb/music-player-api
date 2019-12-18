const db = require('./utils/database.js');

beforeAll(async () => await db.connect());
beforeEach(async () => await db.clearDatabase());
afterAll(async () => await db.closeDatabase());
