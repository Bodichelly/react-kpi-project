import authRoutes from './authRoutes';
import userRoutes from './userRoutes';
import searchRoutes from './searchRoutes';
import regionRoutes from './regionRoutes';
import areaRoutes from './areaRoutes';
import localitiesRoutes from './localitiesRoutes';

export default app => {
  app.use('/api/auth', authRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/search', searchRoutes);
  app.use('/api/regions', regionRoutes);
  app.use('/api/areas', areaRoutes);
  app.use('/api/localities', localitiesRoutes);
};
