# https-node-server
Express server that uses https with basic http redirection.

## set up your cert
Useful for getting this running from your machine. From the project root.. (when asked set common name to localhost)
```
cd cert/
openssl genrsa -des3 -out server.enc.key 2048
openssl req -new -key server.enc.key -out server.csr
openssl rsa -in server.enc.key -out server.key
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
```
