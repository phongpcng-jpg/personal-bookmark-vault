# Authentication Flow — V1

Register/login validates input, compares or hashes passwords with bcrypt, regenerates the server-side session, and stores only the authenticated user id in the session. The browser receives the session identifier in an HttpOnly cookie.

Protected requests read the session and create `request.user`. Bookmark repository queries additionally require `user_id = request.user.id`.

Logout destroys the server-side session.

Stateful means authentication state is held server-side. The cookie is an opaque session identifier, not a self-contained credential.
