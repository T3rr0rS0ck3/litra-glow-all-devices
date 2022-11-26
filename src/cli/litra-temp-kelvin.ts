#!/usr/bin/env node
/* eslint-disable prettier/prettier */

import { findAllDevices, setTemperatureInKelvin } from './../driver';

try {
  const devices = findAllDevices();

  const args = process.argv.slice(2);

  if (devices) {
    if (args.length) {
      const value = parseInt(args[0]);
      if (value) {
        setTemperatureInKelvin(devices, value);
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
