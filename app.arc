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