# OpenClaw God Mode - Full Automation Container
FROM node:20-slim

# Install system dependencies
RUN apt-get update && apt-get install -y \
    # Playwright dependencies
    libnss3 \
    libnspr4 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libxkbcommon0 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libxrandr2 \
    libgbm1 \
    libasound2 \
    # Git
    git \
    # Curl for HTTP requests
    curl \
    # Process management
    procps \
    && rm -rf /var/lib/apt/lists/*

# Install global tools
RUN npm install -g \
    playwright@1.42.0 \
    gh-cli \
    vercel

# Install Playwright browsers
RUN npx playwright install chromium

# Create app directory
WORKDIR /app

# Copy package files
COPY tools/browser/package*.json ./tools/browser/

# Install Node dependencies
RUN cd tools/browser && npm install

# Create necessary directories
RUN mkdir -p /app/workspace /app/snapshots /app/logs

# Set environment
ENV NODE_ENV=production
ENV PLAYWRIGHT_BROWSERS_PATH=/root/.cache/ms-playwright

# Default command
CMD ["/bin/bash"]
