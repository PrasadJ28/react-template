FROM node:20.15

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Set the NODE_OPTIONS environment variable
ENV NODE_OPTIONS=--openssl-legacy-provider

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
