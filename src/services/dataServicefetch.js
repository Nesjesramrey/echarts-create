// Remove the axios import if it's not being used
// import axios from 'axios';

// Mock data service for development
// Remove BASE_URL if not used
// const BASE_URL = 'https://api.example.com';

// Update the function signature to remove unused parameters
export const fetchData = async (endpoint) => {
  // Simulate API call delay
  console, log("fetching data", endpoint);
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Rest of your function implementation
};
