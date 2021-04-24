import {
  NotaryModel,
  ContactsModel,
  RegionModel,
  AreaModel,
  LocalityModel,
  PhoneNumberModel,
  EmploymentModel,
  OrganizationModel
} from '../models/index';
import BaseRepository from './baseRepository';

class NotaryRepository extends BaseRepository {
  getById(id) {
    return this.model.findOne({
      where: { id },
      attributes: {
        exclude: ['contactId', 'employmentId']
      },
      include: [{
        model: ContactsModel,
        attributes: {
          exclude: ['areaId', 'regionId', 'localityId']
        },
        include: [RegionModel, AreaModel, LocalityModel, PhoneNumberModel]
      }, {
        model: EmploymentModel,
        attributes: {
          exclude: ['organizationId']
        },
        include: [{
          model: OrganizationModel,
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
        }]
      }]
    });
  }
}

export default new NotaryRepository(NotaryModel);
