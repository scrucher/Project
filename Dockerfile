FROM node:lts-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN cd ./ma-app && npm ci  && npm run build && cd ..

RUN cd ./backend && npm ci  && cd ..

RUN mkdir -p /usr/src/app/backend/public

RUN cp -r ./ma-app/dist/* ./backend/public/

WORKDIR  /usr/src/app/backend

RUN npm run prebuild

RUN npm run build

EXPOSE 5000

CMD [ "npm", "run", "start:dev" ]