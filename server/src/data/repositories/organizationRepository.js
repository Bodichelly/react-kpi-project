import { OrganizationModel, ContactsModel, AreaModel, RegionModel, LocalityModel, PhoneNumberModel } from '../models';
import BaseRepository from './baseRepository';

class OrganizationRepository extends BaseRepository {
  getOrganizationById(id) {
    return this.model.findOne({
      where: { id },
      attributes: {
        exclude: ['contactId']
      },
      include: [{
        model: ContactsModel,
        attributes: {
          exclude: ['areaId', 'regionId', 'localityId']
        },
        include: [RegionModel, AreaModel, LocalityModel, PhoneNumberModel]
      }]
    });
  }
}

export default new OrganizationRepository(OrganizationModel);
