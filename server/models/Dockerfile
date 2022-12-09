FROM postgres:latest

# ADD ../../.postgres/db/bbtracker.pgsql /docker-entrypoint-initdb.d
ADD ./bbtracker.pgsql /docker-entrypoint-initdb.d

RUN psql -U postgres bbtracker < /docker-entrypoint-initdb.d/bbtracker.pgsql
# RUN psql -h postgres -U postgres bbtracker < /docker-entrypoint-initdb.d/bbtracker.pgsql
# CMD ["psql", "-U", "postgres", "bbtracker", "<", "/docker-entrypoint-initdb.d/bbtracker.pgsql"]
# CMD psql -U postgres bbtracker < /docker-entrypoint-initdb.d/bbtracker.pgsql