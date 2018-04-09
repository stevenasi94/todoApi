var env = process.env.NODE_ENV || "development";

if(env === "development") {
    process.env.PORT = 3000;
    MONGODB_URI = "mongodb://localhost:27017/TodoApp";
} else if (env === "test") {
    process.env.PORT = 3000;
    MONGODB_URI = "mongodb://localhost:27017/TodoAppTest";
}

module.exports.MONGODB_URI = {MONGODB_URI};
