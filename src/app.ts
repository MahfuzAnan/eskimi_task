import express from "express";
import daysRoutes from "./routes/days.routes";
import numberRoutes from "./routes/number.routes";
import temperatureRoutes from "./routes/temperature.routes";

const app = express();

app.use(express.json());

app.use("/api", daysRoutes);
app.use("/api", numberRoutes);
app.use("/api", temperatureRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

export default app;
