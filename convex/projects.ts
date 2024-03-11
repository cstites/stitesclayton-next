import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const projects = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    url: v.string(),
    image: v.string(),
    tags: v.array(v.string()),
    inProgress: v.boolean(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("projects", args);
  },
});

export const getProjects = query({
  handler: async (ctx) => {
    return await ctx.db.query("projects").collect();
  },
});
