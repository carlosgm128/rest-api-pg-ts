export default {
    port: 3000,
    host: "localhost",
    DB: "oshin",
    user: "postgres",
    password: "password",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}