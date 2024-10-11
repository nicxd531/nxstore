import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  number: {
    type: String,
    trim: true,
  },
  surName: {
    type: String,
    trim: true,
  
  },
  firstName: {
    type: String,
    trim: true,
   
  },
  userName: {
    type: String,
    trim: true,
 
  },
  email: {
    type: String,
    trim: true,
    
  },
  Address1: {
    type: String,
    trim: true,
 
  },
  Address2: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
    
  },
}
,{
    timestamps:true
}
);


const User = mongoose.models.User || mongoose.model.('User', userSchema);

export default User;