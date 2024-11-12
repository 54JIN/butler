# Use Node.js base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the default Next.js port
EXPOSE 3000

# Run the Next.js development server
CMD ["npm", "run", "dev"]