// connect.js
const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "cs_kelompok5",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// export versi promise supaya bisa await
module.exports = pool.promise();



// connect.js
// const mysql = require("mysql2");

// // Buat pool koneksi
// const pool = mysql.createPool({
//     host: "mysql.hostinger.co.id",  // ganti sesuai info server Hostinger
//     user: "u355073407_kelompok5",
//     password: "Kelompok5bijikopi.",
//     database: "u355073407_cs_kelompok5",
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// // Export pool pakai promise supaya bisa await di route
// module.exports = pool.promise();

  