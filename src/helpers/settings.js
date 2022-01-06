export const AUTH_URL =
  process.env.NODE_ENV === "production"
    ? "https://auth.ikodi.eu"
    : "http://localhost:5050";

export const AUTH_URL_FRONT =
  process.env.NODE_ENV === "production"
    ? "https://auth.ikodi.eu"
    : "http://localhost:8080";
