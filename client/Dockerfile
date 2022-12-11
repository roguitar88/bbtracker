# FROM node:16 AS Production
# FROM node:16
# FROM node:16.7.0-slim
FROM node:16.10.0

# Arguments
# ARG user=ubuntu
# ARG uid=1001

# ENV NODE_ENV=production
RUN useradd -u 1001 ubuntu

USER ubuntu

# WORKDIR /var/www/client
WORKDIR /client

COPY --chown=ubuntu:ubuntu --from=build-image package.json ./
# COPY package-lock.json ./

COPY --chown=ubuntu:ubuntu --from=build-image ./ ./

# RUN useradd -u 1001 ubuntu

# USER ubuntu

# RUN chown -Rf ubuntu:ubuntu /client

# USER root

# RUN useradd -u 1001 ubuntu
# RUN chmod a+w ./ -R
# RUN chown -Rf 1001:1001 ./

# RUN adduser ubuntu \
    # usermod -aG ubuntu \
    # su - ubuntu

# USER ubuntu

RUN npm install
# RUN npm run build

# CMD ["sh", "-c", "npm run build"]
CMD ["npm", "run", "build"]
# yarn build