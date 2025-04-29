import { cloudflare as socialAdapter } from "@redraft/adapter-cloudflare";
import { defineSite } from "@redraft/site";
import { cloudflare as siteAdapter } from "@torpor/adapter-cloudflare";
import { Site } from "@torpor/build";
import "dotenv/config";

const site: Site = new Site();
site.adapter = siteAdapter;

await defineSite(site, socialAdapter);

export default site;
