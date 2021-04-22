import { NotaryModel } from '../models/index';
import BaseRepository from './baseRepository';

class NotaryRepository extends BaseRepository {}

export default new NotaryRepository(NotaryModel);
