import areaRepository from '../../data/repositories/areaRepository';

export const getByRegionId = regionId => areaRepository.getByRegionId(regionId);

export const create = body => areaRepository.create(body);
