import contactsRepository from '../../data/repositories/contactsRepository';

export const create = async body => contactsRepository.create(body);
