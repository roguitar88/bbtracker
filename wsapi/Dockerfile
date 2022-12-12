# FROM node:16 AS Production
# FROM node:16
# FROM node:16.7.0-slim
FROM node:16.10.0

# Arguments
# ARG user=ubuntu
# ARG uid=1001

# ENV NODE_ENV=production
RUN useradd -u 1001 ubuntu

# WORKDIR /var/www/wsapi
WORKDIR /wsapi

# COPY --chown=ubuntu:ubuntu package.json ./
COPY package.json ./
# COPY package-lock.json ./

RUN npm config set unsafe-perm true

RUN npm install --force

# COPY --chown=ubuntu:ubuntu ./ ./
# COPY ./ ./

# RUN useradd -u 1001 ubuntu

# USER ubuntu

# RUN chown -Rf ubuntu:ubuntu /wsapi
RUN chown -R ubuntu /wsapi/node_modules

# USER root

# RUN useradd -u 1001 ubuntu
# RUN chmod a+w ./ -R
# RUN chown -Rf 1001:1001 ./

# RUN adduser ubuntu \
    # usermod -aG ubuntu \
    # su - ubuntu

USER ubuntu

# RUN npm install
# RUN npm run start

# CMD ["sh", "-c", "npm run start"]
CMD ["npm", "run", "start"]