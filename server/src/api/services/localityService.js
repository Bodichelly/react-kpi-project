import localityRepository from '../../data/repositories/localityRepository';

export const getByAreaId = areaId => localityRepository.getByAreaId(areaId);

export const create = body => localityRepository.create(body);
