# Use Node.js base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Command to run the app using nodemon
CMD ["npm", "run", "start"]