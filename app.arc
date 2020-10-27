@app
begin-app

@static
fingerprint true
folder public
ignore
  .js.map
  tiff
prune true
spa false

# --------------- HTTP -----------------

@events
registered

@http
get /
get /admin
get /accounts
get /about
get /contact
get /login
get /logout
get /signup
get /verify/:token

post /signup
post /login
post /signup/delete

@views


@tables
data
  scopeID *String
  dataID **String
  ttl TTL

