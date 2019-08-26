import mongoose from 'mongoose';

import User from './user';

const models = {
  User: User(mongoose)
};

export default models;
