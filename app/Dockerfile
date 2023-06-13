FROM public.ecr.aws/docker/library/node:18.16.0-alpine3.18 AS base
RUN apk add dumb-init
WORKDIR /app
ADD package.json /app/
ADD . /app/
RUN npm i -g @nestjs/cli
RUN npm i -g pnpm && pnpm install
EXPOSE 3000

FROM base AS build
RUN npm run build

FROM base AS development
ENV NODE_ENV development
CMD ["dumb-init", "npm", "run", "start:dev"]

FROM build AS production
ENV NODE_ENV production
CMD ["dumb-init", "node", "dist/main.js"]
