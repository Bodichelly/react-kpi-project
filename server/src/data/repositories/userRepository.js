import { UserModel } from '../models/index';
import BaseRepository from './baseRepository';

class UserRepository extends BaseRepository {}

export default new UserRepository(UserModel);
