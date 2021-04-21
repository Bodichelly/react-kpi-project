import regionRepository from '../../data/repositories/regionRepository';

export const getAll = () => regionRepository.getAll();

export const create = body => regionRepository.create(body);
