# syntax=docker/dockerfile:1
FROM node:lts
COPY . .
RUN npm install
# CMD [ "npm", "start" ]
CMD ["npm", "run", "dev"]
