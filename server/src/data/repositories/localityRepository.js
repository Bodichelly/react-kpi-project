import { LocalityModel } from '../models/index';
import BaseRepository from './baseRepository';

class AreaRepository extends BaseRepository {}

export default new AreaRepository(LocalityModel);
