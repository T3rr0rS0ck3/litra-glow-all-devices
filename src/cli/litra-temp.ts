#!/usr/bin/env node

import { findAllDevices, setTemperaturePercentage } from './../driver';

try {
  const devices = findAllDevices();

  const args = process.argv.slice(2);

  if (devices) {
    if (args.length) {
      const value = parseInt(args[0]);
      if (value) {
        setTemperaturePercentage(devices, value);
      }
    }
    else {
      throw "No Parameter passed";
    }
  }
  else {
    throw 'Device not found';
  }

  process.exit(0);
}
catch (e) {
  console.log(e);
  process.exit(1);
}
