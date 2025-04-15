FROM node:23-alpine

WORKDIR '/app'

COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm && pnpm install
COPY . .

RUN pnpm build

EXPOSE 3000

CMD [ "pnpm", "start" ]