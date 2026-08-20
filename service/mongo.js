import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_CONNECTION_STRING || process.env.MONGO_CONNECTION_STRING;

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
    if (!MONGO_URI) {
        throw new Error("Please define the MONGODB_CONNECTION_STRING environment variable inside .env");
    }

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: true,
        };

        cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}