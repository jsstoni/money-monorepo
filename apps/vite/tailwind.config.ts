import sharedConfig from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./index.html", "./src/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
