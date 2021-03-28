import authRoutes from './authRoutes';

export default app => {
  app.use('/api/auth', authRoutes);
};
