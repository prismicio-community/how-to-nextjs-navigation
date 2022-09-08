#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const cwd = process.cwd();
const command = process.argv.slice(2)[0];

(function () {
  const isInRoot = fs.existsSync(path.resolve(cwd, ".slicemachine"));

  if (!isInRoot) {
    console.log(
      "This command can only be used in the root of your Slice Machine project. Please try again in the correct location."
    );

    return;
  }

  switch (command) {
    case "clone-navigation": {
      const source = path.resolve(
        __dirname,
        "..",
        "customtypes",
        "navigation",
        "index.json"
      );
      const dest = path.resolve(cwd, "customtypes", "navigation", "index.json");

      if (fs.existsSync(dest)) {
        console.log(
          'A Custom Type named "Navigation" already exists. Delete it before trying again.'
        );

        return;
      }

      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(source, dest);

      console.log(
        `Cloned the Navigation Custom Type into ${path.relative(cwd, dest)}`
      );

      return;
    }

    case "clone-navigation-item": {
      const sourceModel = path.resolve(
        __dirname,
        "..",
        "slices",
        "NavigationItem",
        "model.json"
      );
      const sourceComponent = path.resolve(
        __dirname,
        "..",
        "slices",
        "NavigationItem",
        "index.js"
      );
      const destModel = path.resolve(
        cwd,
        "slices",
        "NavigationItem",
        "model.json"
      );
      const destComponent = path.resolve(
        cwd,
        "slices",
        "NavigationItem",
        "index.js"
      );

      if (fs.existsSync(destModel) || fs.existsSync(destComponent)) {
        console.log(
          'A Slice named "Navigation" already exists. Delete it before trying again.'
        );

        return;
      }

      fs.mkdirSync(path.dirname(destModel), { recursive: true });
      fs.copyFileSync(sourceModel, destModel);
      fs.copyFileSync(sourceComponent, destComponent);

      console.log(
        `Cloned the NavigationItem Slice into ${path.relative(
          cwd,
          path.dirname(destModel)
        )}`
      );

      return;
    }

    default: {
      console.log(`Invalid command: ${command}`);
    }
  }
})();
