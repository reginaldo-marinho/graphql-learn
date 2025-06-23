docker volume create pgdata-curso-graphql

docker run --rm \
  --name postgres-gql-curso \
  -e POSTGRES_USER=reginaldo \
  -e POSTGRES_PASSWORD=12345 \
  -e POSTGRES_DB=curso_graphql \
  -v pgdata-curso-graphql:/var/lib/postgresql/data \
  -p 4022:5432 \
  postgres:alpine

# docker exec -it postgres-gql-curso /bin/bash
# psql -U reginaldo -d curso_graphql