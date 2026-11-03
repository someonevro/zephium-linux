// Linux builds without the macOS/Windows-only Work feature, so they use their
// own scripts that pass --no-default-features.
if (process.platform === "linux") {
  console.error("On Linux, run `pnpm dev:linux` or `pnpm build:linux` instead.");
  process.exit(1);
}
