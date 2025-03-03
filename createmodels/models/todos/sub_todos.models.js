import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {}
)


// NOTE: when the "User" will store in the database, it will be stored as "users" in the database
export const User = mongoose.model('User', userSchema);