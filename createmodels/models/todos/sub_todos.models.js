import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: String, //this the simple approch 
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        }, //this the proffesional approch
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password:{
            type: String,
            required: [true, 'Password is required'],
        }
    },
    {timestamps: true} //this will add the created_at and updated_at fields automatically
)


// NOTE: when the "User" will store in the database, it will be stored as "users" in the database
export const User = mongoose.model('User', userSchema);