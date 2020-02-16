FROM node:12.14.1

WORKDIR /usr/src/aakashhemadri.github.io

COPY . .

RUN npm audit fix
RUN npm install

EXPOSE 3000

CMD npm run start
