/**
 * PLACEHOLDER DATA
 * ------------------------------------------------------------------
 * Every restaurant below is a made-up sample entry so the site has
 * something to display. Replace this array with real visits.
 *
 * Field guide:
 *   slug          - unique, URL-safe id (lowercase, hyphens). Used in
 *                    restaurant.html?slug=...
 *   name          - restaurant name
 *   cuisine       - short cuisine label, e.g. "Neapolitan Pizza"
 *   city          - "City, ST" or "City, Country"
 *   address       - full street address, shown on the detail page
 *   lat / lon     - coordinates for the embedded map (use Google Maps
 *                    or openstreetmap.org to look these up)
 *   dateVisited   - "YYYY-MM-DD", used for the "Recently Visited" sort
 *   website       - restaurant's own website (or Google Maps listing
 *                    if they don't have one)
 *   videoPlatform - "youtube" | "tiktok" | "instagram" | ""  (leave ""
 *                    if you don't have a video yet)
 *   videoId       - the id/shortcode for that platform's embed url:
 *                    youtube   -> the part after "v=" or after
 *                                 "youtu.be/"
 *                    tiktok    -> the numeric id at the end of the
 *                                 video URL
 *                    instagram -> the shortcode in the /p/<code>/ URL
 * ------------------------------------------------------------------
 */

const RESTAURANTS = [
  {
    slug: "golden-skillet-diner",
    name: "Golden Skillet Diner",
    cuisine: "American Comfort",
    city: "Austin, TX",
    address: "412 E 6th St, Austin, TX 78701",
    lat: 30.2669,
    lon: -97.7396,
    dateVisited: "2026-06-02",
    website: "https://example.com/golden-skillet-diner",
    videoPlatform: "",
    videoId: "",
  },
  {
    slug: "casa-del-mar-taqueria",
    name: "Casa del Mar Taqueria",
    cuisine: "Mexican / Seafood",
    city: "San Diego, CA",
    address: "1900 Harbor Dr, San Diego, CA 92101",
    lat: 32.7113,
    lon: -117.1719,
    dateVisited: "2026-05-18",
    website: "https://example.com/casa-del-mar-taqueria",
    videoPlatform: "",
    videoId: "",
  },
  {
    slug: "istanbul-grill-house",
    name: "Istanbul Grill House",
    cuisine: "Turkish / Kebab",
    city: "New York, NY",
    address: "231 9th Ave, New York, NY 10011",
    lat: 40.7452,
    lon: -74.0022,
    dateVisited: "2026-04-30",
    website: "https://example.com/istanbul-grill-house",
    videoPlatform: "",
    videoId: "",
  },
  {
    slug: "noodle-and-smoke",
    name: "Noodle & Smoke",
    cuisine: "Ramen / BBQ Fusion",
    city: "Chicago, IL",
    address: "1420 W Fulton St, Chicago, IL 60607",
    lat: 41.8865,
    lon: -87.6635,
    dateVisited: "2026-04-11",
    website: "https://example.com/noodle-and-smoke",
    videoPlatform: "",
    videoId: "",
  },
  {
    slug: "the-brass-oyster",
    name: "The Brass Oyster",
    cuisine: "Seafood / Raw Bar",
    city: "Boston, MA",
    address: "77 Long Wharf, Boston, MA 02110",
    lat: 42.3608,
    lon: -71.0507,
    dateVisited: "2026-03-22",
    website: "https://example.com/the-brass-oyster",
    videoPlatform: "",
    videoId: "",
  },
  {
    slug: "little-fig-trattoria",
    name: "Little Fig Trattoria",
    cuisine: "Italian",
    city: "Portland, OR",
    address: "908 SE Stark St, Portland, OR 97214",
    lat: 45.5187,
    lon: -122.6528,
    dateVisited: "2026-02-27",
    website: "https://example.com/little-fig-trattoria",
    videoPlatform: "",
    videoId: "",
  },
  {
    slug: "hana-izakaya",
    name: "Hana Izakaya",
    cuisine: "Japanese / Small Plates",
    city: "Seattle, WA",
    address: "515 Westlake Ave N, Seattle, WA 98109",
    lat: 47.6272,
    lon: -122.3396,
    dateVisited: "2026-02-09",
    website: "https://example.com/hana-izakaya",
    videoPlatform: "",
    videoId: "",
  },
  {
    slug: "the-cornerstone-bbq",
    name: "The Cornerstone BBQ",
    cuisine: "Barbecue",
    city: "Nashville, TN",
    address: "1200 Clinton St, Nashville, TN 37203",
    lat: 36.1663,
    lon: -86.8017,
    dateVisited: "2026-01-19",
    website: "https://example.com/the-cornerstone-bbq",
    videoPlatform: "",
    videoId: "",
  },
  {
    slug: "sunny-side-cafe",
    name: "Sunny Side Cafe",
    cuisine: "Breakfast / Brunch",
    city: "Denver, CO",
    address: "2001 Larimer St, Denver, CO 80205",
    lat: 39.7539,
    lon: -104.9963,
    dateVisited: "2025-12-30",
    website: "https://example.com/sunny-side-cafe",
    videoPlatform: "",
    videoId: "",
  },
  {
    slug: "the-copper-wok",
    name: "The Copper Wok",
    cuisine: "Sichuan",
    city: "Los Angeles, CA",
    address: "845 N Broadway, Los Angeles, CA 90012",
    lat: 34.0614,
    lon: -118.2385,
    dateVisited: "2025-12-05",
    website: "https://example.com/the-copper-wok",
    videoPlatform: "",
    videoId: "",
  },
];
