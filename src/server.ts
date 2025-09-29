import app from "./application.js";

const PORT = process.env.PORT || 4000;

export const server = app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});

export default app;
