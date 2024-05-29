# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Environment variables
ENV GITHUB_USERNAME=ucsb-seclab
ENV GITHUB_TOKEN=<INSERT PUBLIC ACCESS TOKEN> 
ENV PACKAGE_TYPE=container

EXPOSE 80

# Run the application
CMD ["node", "api.js"]