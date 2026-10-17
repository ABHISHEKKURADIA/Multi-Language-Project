FROM node:alpine

WORKDIR /app

COPY ./NodeProject .

ENV PORT=1998

EXPOSE 1998

CMD [ "node", "app.js" ]