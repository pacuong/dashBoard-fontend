# Stage 1: Build React (Vite)
FROM node:20-alpine AS build
WORKDIR /app

# Copy package.json và cài deps
COPY package*.json ./
RUN npm install

# Copy toàn bộ source và build
COPY . .
RUN npm run build


# Xóa file mặc định
RUN rm -rf ./*

# Copy build từ stage build
COPY --from=build /app/dist .


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]