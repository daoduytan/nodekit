const userRouter = app => {
  app.get('/user', async (req, res) => {
    send('user');
  });
};

export default userRouter;
