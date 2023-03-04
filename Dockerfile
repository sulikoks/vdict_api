FROM node:16.13-buster-slim as development

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production

FROM node:16.13-buster-slim as production

# ENVs
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

# Prepare application
COPY package*.json ./

COPY --from=development /usr/src/app/dist ./dist
COPY --from=development /usr/src/app/node_modules ./node_modules

# Exposing appropriate ports
EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
