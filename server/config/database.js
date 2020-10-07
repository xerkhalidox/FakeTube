const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_CONNECTION_STRING,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            }, () => {
                console.log("MongoDB connected Successfully");
            });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};
module.exports = dbConnection;