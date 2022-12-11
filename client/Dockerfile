# FROM node:16 AS Production
# FROM node:16
# FROM node:16.7.0-slim
FROM node:16.10.0

# Arguments
ARG user=ubuntu
ARG uid=1001

# ENV NODE_ENV=production

# WORKDIR /var/www/client
WORKDIR /client

# COPY package.json ./
# COPY package-lock.json ./

# COPY ./ ./

RUN useradd -u $uid $user

USER $user

RUN usermod -G www-data, root $user \
    chown -Rf $user:$user /client

# RUN npm install
# RUN npm run build

# CMD ["sh", "-c", "npm run build"]
# CMD ["npm", "run", "build"]
# yarn build