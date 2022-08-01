FROM node:18-alpine AS BUILD_IMAGE
WORKDIR /use/src/trapbox
COPY app.js .
COPY package.json .
RUN npm install
CMD [ "node", "app.js" ]
