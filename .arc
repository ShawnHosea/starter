@app
begin-app

@static
fingerprint true
folder public
ignore
  .js.map
  tiff
prune true
spa true

@http
get /
get /about
get /contact