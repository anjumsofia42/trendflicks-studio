mkdir client
mkdir server

# Move frontend React files into client/
mv index.html client/
mv src/ client/
mv public/ client/
mv package.json client/
mv vite.config.js client/   # if using Vite

# Move server.js into server/
mv server.js server/

git add .
git commit -m "Moved frontend to client folder and backend to server folder"
git push

