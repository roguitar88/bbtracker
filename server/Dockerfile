# FROM node:16 AS Production
# FROM node:16
# FROM node:16.7.0-slim
FROM node:16.10.0

# ENV NODE_ENV=production
# Install system dependencies
# RUN apt-get update && apt-get install -y \
    # curl \
    # zip \
    # unzip \
    # vim nano \
    # cron

# Clear cache
# RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# WORKDIR /var/www/server
WORKDIR /server

# COPY package.json ./
# COPY package-lock.json ./

# COPY ./ ./

RUN useradd -u 1001 ubuntu
USER ubuntu

# RUN npm install
# RUN npm run build
# RUN node index.js

# CMD ["sh", "-c", "npm run start"]
# CMD ["npm", "run", "start"]
# npm devStart