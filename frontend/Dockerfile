FROM node:lts-alpine

WORKDIR /workspace
COPY package.json ./
RUN corepack enable
RUN pnpm install
