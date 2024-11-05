# --- Base Node ---
# Base setup
FROM node:20-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm ci

COPY . .
COPY .env .env.production

RUN npm run build

# --- Production Setup ---
# Dependences and Build
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE ${VITE_APP_PORT}

CMD ["nginx", "-g", "daemon off;"]
