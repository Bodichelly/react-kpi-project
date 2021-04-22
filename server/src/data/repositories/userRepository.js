import { UserModel } from '../models/index';
import BaseRepository from './baseRepository';

class UserRepository extends BaseRepository {
  addUser(user) {
    return this.create(user);
  }

  getByEmail(login) {
    return this.model.findOne({ where: { login } });
  }
}

export default new UserRepository(UserModel);
