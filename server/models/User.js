import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  avatar: {
    url: String,
    public_id: String,
  },
});

userSchema.methods.encryptPassword = async (password) => {
  // cuantas veces queremos aplicar el algoritmo
  const salt = await bcrypt.genSalt(10);
  // aplicación del algoritmo
  const hash = await bcrypt.hash(password, salt);
  return hash;
};
userSchema.methods.comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};
export default model("User", userSchema);
