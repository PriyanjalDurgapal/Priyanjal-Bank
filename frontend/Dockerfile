# -------- BUILD STAGE --------
FROM node:18 AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

# -------- PRODUCTION STAGE --------
FROM nginx:alpine

# Copy build files
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]