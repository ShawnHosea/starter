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

@http
get /
get /about
get /contact
get /login
post /login
get /signup
post /signup
post /signup/delete


@views


@tables
data
  scopeID *String
  dataID **String
  ttl TTL

