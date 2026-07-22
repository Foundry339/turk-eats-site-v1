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
    slug: "prung",
    name: "Prung",
    cuisine: "Thai",
    city: "Woodside, NY",
    address: "51-20 Skillman Ave, Woodside, NY 11377, USA",
    dateVisited: "2026-07-09",
    website: "https://prungasiancuisine.com/",
    videoPlatform: "youtube",
    videoId: "YdAk8MBF2IU",
  },
  {
    slug: "shanghai-dumpling-fusion",
    name: "Shanghai Dumpling Fusion",
    cuisine: "Asian - Dumplings",
    city: "New York, NY",
    address: "158 W 72nd St, New York, NY 10023",
    dateVisited: "2026-06-25",
    website: "https://www.shanghaidumplingsfusion.com/",
    videoPlatform: "youtube",
    videoId: "pBWWTE0mCtQ",
  },
  {
    slug: "yugin",
    name: "YUGIN",
    cuisine: "Omakase",
    city: "New York, NY",
    address: "767 5th Ave 37th Floor, New York, NY 10153",
    dateVisited: "2026-06-19",
    website: "https://yugin.nyc/",
    videoPlatform: "youtube",
    videoId: "weQEqSPDXfQ",
  },
  {
    slug: "tienda-vieja",
    name: "Tienda Vieja",
    cuisine: "Colombian",
    city: "Fresh Meadows, NY",
    address: "65-62 Fresh Meadow Ln, Fresh Meadows, NY 11365",
    dateVisited: "2026-05-28",
    website: "https://tienda-vieja.locallya.com/",
    videoPlatform: "youtube",
    videoId: "3Va3OYIRPW4",
  },
  {
    slug: "kestane-kebab",
    name: "Kestane Kebab",
    cuisine: "Mediterranean",
    city: "Brooklyn, NY",
    address: "208 Franklin St, Brooklyn, NY 11222",
    dateVisited: "2026-05-21",
    website: "https://kestanekebabusa.com/",
    videoPlatform: "youtube",
    videoId: "QBYkBckwc8U",
  },
  {
    slug: "cote",
    name: "Cote",
    cuisine: "Steakhouse",
    city: "New York, NY",
    address: "16 W 22nd St, New York, NY 10010",
    dateVisited: "2026-05-19",
    website: "https://www.cotekoreansteakhouse.com/",
    videoPlatform: "youtube",
    videoId: "4oCSW9GxnAg",
  },
  {
    slug: "la-cachette-du-coin",
    name: "La Cachette du Coin",
    cuisine: "Haitian Cuisine",
    city: "Brooklyn, NY",
    address: "625 Rogers Ave, Brooklyn, NY 11225",
    dateVisited: "2026-05-07",
    website: "https://lacachetteducoin.restaurant/",
    videoPlatform: "youtube",
    videoId: "D4apFSpOP9E",
  },
  {
    slug: "zaffron-bloom",
    name: "Zaffron Bloom",
    cuisine: "Persian",
    city: "Hasbrouck Heights, NJ",
    address: "194 Boulevard, Hasbrouck Heights, NJ 07604",
    dateVisited: "2026-04-28",
    website: "https://www.zaffronbloom.com/",
    videoPlatform: "youtube",
    videoId: "npmAVysDGSg",
  },
  {
    slug: "yamada",
    name: "Yamada",
    cuisine: "Japanese Dining/Kaiseki",
    city: "New York, NY",
    address: "16 Elizabeth St, New York, NY 10013",
    dateVisited: "2026-04-24",
    website: "https://www.yamadanewyork.com/",
    videoPlatform: "youtube",
    videoId: "8aDOkpPnouo",
  },
  {
    slug: "arberia",
    name: "Arberia",
    cuisine: "Albanian",
    city: "Brooklyn, NY",
    address: "2325 65th St, Brooklyn, NY 11204",
    dateVisited: "2026-04-22",
    website: "https://arberiagrill.com/",
    videoPlatform: "youtube",
    videoId: "04A6spEL9HU",
  },
];
