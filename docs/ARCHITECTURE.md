# Architecture — V1

Modular monolith. HTTP Route → Controller/route handler → Service → Repository → PostgreSQL.

Authentication is isolated under `auth/`; authorization is represented by the authenticated user context and repository ownership predicates. Bookmark access always scopes queries by `user_id`.

V1 uses Fastify plugins for security, session and API infrastructure. Knex is the JavaScript-native PostgreSQL query builder selected after the Phase 0 compatibility evaluation.

The @fastify/session default in-memory store is a deliberate V1 lab constraint; production multi-instance deployment requires a shared session store.
