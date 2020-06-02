# build environment
FROM node:13.12.0-alpine as build

# set working directory
WORKDIR /usr/local/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH usr/local/app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /usr/local/app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . /usr/local/app

#run
RUN npm run build

# production environment
FROM nginx:1-16.0-alpine

COPY --from=build /usr/local/app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

