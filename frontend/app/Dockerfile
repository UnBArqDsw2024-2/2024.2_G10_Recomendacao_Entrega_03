# Dev
FROM node:16-alpine AS dev

ENV NODE_ENV dev

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN chmod 777 /app/node_modules

RUN npm run build

# ------------------

# Prod
FROM node:16-alpine AS prod

ENV NODE_ENV prod

WORKDIR /app

COPY --from=dev /app/build ./build
COPY package.json package-lock.json ./

RUN npm install --production

EXPOSE 3000

CMD ["npx", "serve", "-s", "build", "-l", "3000"]
