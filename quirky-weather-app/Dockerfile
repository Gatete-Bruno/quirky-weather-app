# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:16

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Build the app.
RUN npm run build

# Install serve to serve the build
RUN npm install -g serve

# Run serve on container startup.
CMD ["serve", "-s", "build"]

# Document that the service listens on port 3000.
EXPOSE 3000