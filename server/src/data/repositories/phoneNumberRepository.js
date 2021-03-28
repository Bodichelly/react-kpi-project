import { PhoneNumberModel } from '../models/index';
import BaseRepository from './baseRepository';

class PhoneNumberRepository extends BaseRepository {}

export default new PhoneNumberRepository(PhoneNumberModel);
