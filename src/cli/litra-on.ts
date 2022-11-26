#!/usr/bin/env node

import { findAllDevices, turnOn } from './../driver';

try {
  const devices = findAllDevices();

  if (devices) {
    turnOn(devices);
  } else {
    throw 'No Device';
  }

  process.exit(0);
} catch (e) {
  console.log(e);
  process.exit(1);
}
