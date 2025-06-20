// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: When using the Node.JS APIs, the config file doesn't apply. Instead, pass options directly to the APIs

import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);

Config.overrideWebpackConfig((config) => {
  return {
    ...config,
    optimization: {
      ...config.optimization,
      usedExports: false,
    },
  };
});

// Enable concurrent rendering with careful settings
Config.setConcurrency(1);

// Set higher timeout for font loading
Config.setTimeoutInMilliseconds(30000);

// Set browser args for consistent rendering
Config.setBrowserExecutable(null);
Config.setChromiumOpenGlRenderer("egl");

export {};
