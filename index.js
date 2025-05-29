// api/index.js
import express from "express";
import { createServer } from "http";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

// Export a function for Vercel to use
export default function handler(req, res) {
  return app(req, res);
}
