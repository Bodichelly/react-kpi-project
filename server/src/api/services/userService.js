import userRepository from '../../data/repositories/userRepository';

export const getUserById = async userId => userRepository.getById(userId);
