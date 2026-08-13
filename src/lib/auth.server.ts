import { createHmac, timingSafeEqual } from "node:crypto";

const TOKEN_TTL_MS = 24 * 60 * 60 * 1000;

function getSecret() {
  return process.env.ADMIN_TOKEN_SECRET ?? "edges-dev-secret-change-me";
}

function getAdminCredentials() {
  return {
    username: process.env.ADMIN_USERNAME ?? "admin",
    password: process.env.ADMIN_PASSWORD ?? "admin123",
  };
}

function sign(payload: string) {
  return createHmac("sha256", getSecret()).update(payload).digest("hex");
}

export function verifyAdminCredentials(username: string, password: string) {
  const creds = getAdminCredentials();
  return username === creds.username && password === creds.password;
}

export function createAdminToken() {
  const expiresAt = Date.now() + TOKEN_TTL_MS;
  const payload = String(expiresAt);
  return { token: `${payload}.${sign(payload)}`, expiresAt };
}

export function verifyAdminToken(token: string | undefined | null) {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = sign(payload);
  const sigBuf = Buffer.from(signature);
  const expBuf = Buffer.from(expected);
  if (sigBuf.length !== expBuf.length || !timingSafeEqual(sigBuf, expBuf)) {
    return false;
  }

  const expiresAt = Number(payload);
  return Number.isFinite(expiresAt) && Date.now() < expiresAt;
}

export function assertAdminToken(token: string | undefined | null) {
  if (!verifyAdminToken(token)) {
    throw new Error("Unauthorized");
  }
}
