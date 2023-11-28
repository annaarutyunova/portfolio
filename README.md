# Commands used

## Backend

npm init -y

npm install express pg typescript @types/node @types/express ts-node

npx ts-node src/app.ts (or add "start: ts-node src/app.ts" to scripts in package.json, and use npm start to start the server)

npm install pg-promise. Then create a database in pgAdmin and set up a database connection (src/database.ts)

npm install @types/cors

## Frontend
npx create-react-app my-react-app --template typescript (replace my-react-app withe app name)