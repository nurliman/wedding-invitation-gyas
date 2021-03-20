
FROM node:14.16-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install

COPY . /app
RUN yarn next-img

CMD [ "yarn", "start" ]