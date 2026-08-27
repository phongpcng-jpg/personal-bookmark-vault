# Security — V1

Implemented: bcrypt password hashing (cost 12), HttpOnly cookie, Secure cookie in production, SameSite=Lax, session regeneration at login/register, session expiration, Helmet, CORS with credentials and configured origin, global rate limiting, Fastify JSON-schema validation, ownership-scoped queries, no plaintext passwords, no hard-coded production secrets.

CSRF: SameSite=Lax reduces cross-site cookie sending, but this lab should add an explicit CSRF token strategy before exposing state-changing endpoints to broader cross-site use.

XSS: React escapes rendered text; bookmark URLs are user-controlled and are opened as links with `rel=noreferrer`. URL allow-listing is not implemented in V1.

Session store limitation: default in-memory @fastify/session storage is not durable or horizontally scalable. This is a documented lab trade-off, not a claim of production security.

Security is not declared absolute; assumptions and limitations above remain.
