import axios from "axios";

// Base URL would be your actual API endpoint
const BASE_URL = "https://api.example.com";

export const fetchInfluencerRevenue = async (influencerId, timeRange) => {
  try {
    // In a real app, this would be a real API call
    // const response = await axios.get(`${BASE_URL}/influencers/${influencerId}/revenue?timeRange=${timeRange}`);
    // return response.data;

    // For now, return mock data
    return {
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      revenue: [
        12000, 19000, 15000, 22000, 24000, 30000, 28000, 32000, 34000, 36000,
        40000, 45000,
      ],
    };
  } catch (error) {
    console.error("Error fetching revenue data:", error);
    throw error;
  }
};

export const fetchCampaignPerformance = async () => {
  try {
    // In a real app, this would be a real API call
    // const response = await axios.get(`${BASE_URL}/campaigns/performance`);
    // return response.data;

    // For now, return mock data
    return {
      campaigns: [
        "Instagram Story",
        "YouTube Video",
        "TikTok Challenge",
        "Instagram Post",
        "YouTube Short",
      ],
      engagement: [85, 63, 92, 78, 56],
      conversion: [23, 42, 35, 27, 15],
    };
  } catch (error) {
    console.error("Error fetching campaign data:", error);
    throw error;
  }
};

export const fetchInfluencerComparison = async () => {
  try {
    // In a real app, this would be a real API call
    // const response = await axios.get(`${BASE_URL}/influencers/comparison`);
    // return response.data;

    // For now, return mock data
    return {
      influencers: [
        "@fashionista",
        "@techguru",
        "@foodlover",
        "@travelbug",
        "@fitnessguru",
      ],
      followers: [1200000, 850000, 920000, 1500000, 750000],
      engagement: [3.2, 4.5, 5.1, 2.8, 6.7],
      revenue: [45000, 38000, 42000, 55000, 36000],
    };
  } catch (error) {
    console.error("Error fetching influencer comparison data:", error);
    throw error;
  }
};
