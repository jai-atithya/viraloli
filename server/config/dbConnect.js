const mongoose = require('mongoose')

const ConnectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error Connecting to the Database: ",error.message);
        throw error;
    }
}

const DisconnectFromMongoDB = async () => {
    try {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    } catch (error) {
        console.log("Error Disconnecting from the Database: ",error.message);
        throw error;
    }
}

module.exports={ConnectToMongoDB,DisconnectFromMongoDB}