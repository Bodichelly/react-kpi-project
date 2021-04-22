import { OrganizationModel } from '../models/index';
import BaseRepository from './baseRepository';

class OrganizationRepository extends BaseRepository {}

export default new OrganizationRepository(OrganizationModel);
