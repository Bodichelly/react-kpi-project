import phoneNumberRepository from '../../data/repositories/phoneNumberRepository';

export const create = async body => phoneNumberRepository.create(body);
