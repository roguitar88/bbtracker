# FROM node:16 AS Production
# FROM node:16
# FROM node:16.7.0-slim
FROM node:16.10.0

# Arguments
# ARG user=ubuntu
# ARG uid=1001

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
RUN useradd -u 1001 ubuntu

# WORKDIR /var/www/server
WORKDIR /server

# COPY --chown=ubuntu:ubuntu package.json ./
# COPY package.json ./
# COPY package-lock.json ./

COPY ./ ./

RUN npm config set unsafe-perm true

RUN npm install -g npm@9.2.0

RUN npm install

# COPY --chown=ubuntu:ubuntu ./ ./

# RUN useradd -u 1001 ubuntu

# USER ubuntu

# RUN chown -Rf ubuntu:ubuntu /server
RUN chown -R ubuntu /server/node_modules

# USER root

# RUN useradd -u 1001 ubuntu
# RUN chmod a+w ./ -R
# RUN chown -Rf 1001:1001 ./

# RUN adduser ubuntu \
    # usermod -aG ubuntu \
    # su - ubuntu

USER ubuntu

# RUN npm install
# RUN npm run build
# RUN node index.js

# CMD ["sh", "-c", "npm run start"]
CMD ["npm", "run", "start"]
# npm devStart