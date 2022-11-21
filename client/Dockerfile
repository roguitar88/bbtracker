FROM node:16 AS Production

ENV NODE_ENV=production

WORKDIR /var/www/html/bbtracker/client

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["sh", "-c", "npm run watch"]