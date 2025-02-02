FROM node:18-alpine as build
WORKDIR /app

COPY package.json /app/
RUN yarn
COPY . /app

RUN yarn build-relative

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/bundles
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD mv /usr/share/bundles/relative/* /usr/share/nginx/html && nginx -g "daemon off;"
