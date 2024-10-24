# Use the official Node.js image
FROM node:20

# Set the working directory inside the container
WORKDIR /workspace

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the port SvelteKit runs on
EXPOSE 3000