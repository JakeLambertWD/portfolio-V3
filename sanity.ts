import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: "iytyjne0",
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

// setup the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// helper function to pull all our images from Sanity
export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);
