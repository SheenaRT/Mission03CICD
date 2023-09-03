const express = require("express");
const CarRoutes = require("./components/CarRoutes");

const app = express();

app.use(express.json());
app.use("/", CarRoutes);

const port = process.env.PORT || 8080;

const server = app.listen("test" ? 0 : port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

server.on("error", (error) => {
  console.error("Error occurred:", error);
});

//suggested input of car

// let cars = [
//   {
//     make: "Civic",
//     year: 2014,
//   },
//   {
//     make: "SSV8Ute",
//     year: 2005,
//   },
//   {
//     make: "Demio",
//     year: 2007,
//   },
//   {
//     make: "Alphard",
//     year: 2017,
//   },
//   {
//     make: "Land Rover Range Rover Evoque 2.0 TD4 E-Capability 4x4 HSE Dynamic",
//     year: 2007,
//   },
//   {
//     make: "Task-Force",
//     year: -987,
//   },
//   {
//     make: "C200",
//     year: "Twenty twenty",
//   },
// ];

// function EstCarValue(make, year) {
//   // use for-loop to Calculate the number of the positions of the alphabets in the make name model
//   const alphaNumValue = [...make.toUpperCase()]
//     .filter((alphabets) => alphabets >= "A" && alphabets <= "Z")
//     .reduce(
//       (sum, alphabets) => sum + alphabets.charCodeAt(0) - "A".charCodeAt(0) + 1,
//       0
//     );
//   if (typeof year !== "number") {
//     return { error: "Wrong data type" };
//   }
//   if (year < 0) {
//     return { error: "Negative year" };
//   }
//   // Calculate the car value according to the given rules
//   const carValue = alphaNumValue * 100 + year;

//   return { "Car Value": `$${carValue}` };
// }

// app.get("/", (req, res) => {
//   const result = cars.map((car) => EstCarValue(car.make, car.year));
//   res.send(result);

//   const server = app.listen("test" ? 0 : port, () => {
//     console.log(`Server running on port http://localhost:${port}`);
//   });

//   server.on("error", (error) => {
//     console.error("Error occurred:", error);
//   });
// });

module.exports = { app, server, port };
