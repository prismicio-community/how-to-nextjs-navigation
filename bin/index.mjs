#!/usr/bin/env node

const command = process.argv.slice(2)[0];

switch (command) {
  case "clone-navigation": {
    console.log("clone-navigation cmd");
    break;
  }

  case "clone-navigation-item": {
    console.log("clone-navigation-item cmd");
    break;
  }

  default: {
    console.log(`Invalid command: ${command}`);
  }
}
