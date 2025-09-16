# Stage 1: Build React (Vite)
FROM node:20-alpine AS build
WORKDIR /app

# Copy package.json và cài deps
COPY package*.json ./
RUN npm install

# Copy toàn bộ source và build
COPY . .
RUN npm run build

# Stage 2: Serve với Nginx
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html

# Xóa file mặc định
RUN rm -rf ./*

# Copy build từ stage build
COPY --from=build /app/dist .

# Copy nginx.conf để hỗ trợ React Router SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]