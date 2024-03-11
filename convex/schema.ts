import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
    description: v.string(),
    image: v.string(),
    inProgress: v.boolean(),
    tags: v.array(v.string()),
    title: v.string(),
    url: v.string(),
  }),
});