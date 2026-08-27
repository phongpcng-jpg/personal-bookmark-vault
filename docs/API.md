# API — V1

Auth: `POST /api/auth/register`, `POST /api/auth/login`, `POST /api/auth/logout`, `GET /api/auth/me`.

Bookmarks: `GET /api/bookmarks`, `GET /api/bookmarks/:id`, `POST /api/bookmarks`, `PUT /api/bookmarks/:id`, `DELETE /api/bookmarks/:id`.

Bookmark create/update body: `{ title, url, description?, tags? }`. Protected endpoints require the session cookie. Every bookmark query is ownership-scoped.
