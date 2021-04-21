import authRoutes from './authRoutes';
import searchRoutes from './searchRoutes';
import regionRoutes from './regionRoutes';
import areaRoutes from './areaRoutes';
import localitiesRoutes from './localitiesRoutes';

export default app => {
  app.use('/api/auth', authRoutes);
  app.use('/api/search', searchRoutes);
  app.use('/api/region', regionRoutes);
  app.use('/api/area', areaRoutes);
  app.use('/api/locality', localitiesRoutes);
};
