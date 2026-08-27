# Authentication Comparison — V1 baseline

| Mechanism | Stateful? | Server state | Credential storage | Revocation | Logout | Scalability | Complexity | Best use |
|---|---|---|---|---|---|---|---|---|
| V1 Session | Yes | Session store | bcrypt password hash + session | Immediate by session destruction | Destroy session | Requires shared session store for multiple instances | Low–Medium | Browser applications needing straightforward server-controlled sessions |

V2 will add the stateless JWT comparison without replacing this branch.
