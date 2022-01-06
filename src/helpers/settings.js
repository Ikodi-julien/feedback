export const AUTH_URL =
  process.env.NODE_ENV === "production"
    ? "https://auth.ikodi.eu"
    : "http://localhost:5050";
