from node:21-alpine
WORKDIR /usr/app
copy ./dist /usr/app
RUN npm install -g @angular/cli
RUN npm run build
EXPOSE 4200
CMD ["node","index.js"]
