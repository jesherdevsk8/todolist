FROM node:18-alpine

RUN apk add --no-cache python3 g++ make

WORKDIR /app

COPY . .

RUN yarn install --production

ENTRYPOINT ["node"]

CMD ["src/index.js"]