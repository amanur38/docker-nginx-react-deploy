FROM node:alpine AS builder
WORKDIR /app

# COPY package.json .
COPY . .
# RUN npm run install
# COPY . .
RUN npm run build
FROM nginx:alpine

WORKDIR /usr/share/nginx/html
# CMD ["npm","start"]

COPY --from=builder /app/build .

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]