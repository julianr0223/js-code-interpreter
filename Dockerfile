# Start from the official Node.js 16 base image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the Docker environment
COPY package*.json ./

# Install the dependencies in the Docker environment
RUN npm install

# Copy the rest of the code to the Docker environment
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that the app runs on
EXPOSE 3000

# Command to start the app
CMD [ "npm", "run", "start" ]
