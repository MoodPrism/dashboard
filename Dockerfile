# build environment
FROM node:12.13.1-alpine as build

# set working directory
WORKDIR /usr/local/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/local/app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /usr/local/app/package.json
RUN npm i typescript
RUN npm i yargs-parser@18.1.2
RUN npm install
RUN npm install react-scripts@3.4.1 -g 

# add app
COPY . /usr/local/app

#run
RUN npm run build

# production environment
#FROM nginx:alpine

#COPY --from=build /usr/local/app/build /usr/share/nginx/html

#RUN rm /etc/nginx/conf.d/default.conf

#COPY nginx/nginx.conf /etc/nginx/conf.d

#EXPOSE 80

#CMD ["nginx", "-g", "daemon off;"]

