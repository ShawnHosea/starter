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

@http
get /
get /about
get /contact

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
