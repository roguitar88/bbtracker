# FROM node:16 AS Production
# FROM node:16
# FROM node:16.7.0-slim
FROM node:16.10.0

# Arguments
# ARG user=ubuntu
# ARG uid=1001

# ENV NODE_ENV=production

# WORKDIR /var/www/wsapi
WORKDIR /wsapi

# COPY package.json ./
# COPY package-lock.json ./

# COPY ./ ./

# RUN useradd -u 1001 ubuntu

# USER ubuntu

# RUN chown -Rf ubuntu:ubuntu /wsapi

USER root

RUN chmod a+w ./ -R

RUN adduser ubuntu \
    usermod -aG ubuntu \
    su - ubuntu

USER ubuntu

# RUN npm install
# RUN npm run start

# CMD ["sh", "-c", "npm run start"]
# CMD ["npm", "run", "start"]