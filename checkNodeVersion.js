const {
  engines: { node: requiredNodeVersion },
} = require("./package.json");
const currentVersion = process.versions.node;

if (requiredNodeVersion && currentVersion !== requiredNodeVersion) {
  console.error(
    `Required Node.js version is ${requiredNodeVersion}, but you are using ${currentVersion}. Please upgrade Node.js.`,
  );
  process.exit(1);
}
