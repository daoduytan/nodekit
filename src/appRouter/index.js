const appRouter = app => {
  app.get('/', (req, res) => res.send('This is api not client'));
};

export default appRouter;
