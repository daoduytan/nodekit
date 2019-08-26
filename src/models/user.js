export default ({ model, Schema }) => {
  const User = new Schema(
    {
      username: { type: String, trim: true, lowercase: true },
      fullname: { type: String },
      avatar: { type: String },
      email: { type: String, lowercase: true },
      password_hash: { type: String },
      type: {
        type: String,
        required: true,
        enum: ['admin', 'brand', 'influencer']
      },
      role: { type: String, enum: ['admin', 'member'] }
    },
    {
      timestamps: true
    }
  );

  return User;
};
