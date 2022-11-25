#!/usr/bin/env node
/* eslint-disable prettier/prettier */

import { findAllDevices, turnOff } from './../driver';

try {
  const devices = findAllDevices();

  if (devices) {
    turnOff(devices);
  } else {
    throw 'Device not found';
  }

  process.exit(0);
} catch (e) {
  console.log(e);
  process.exit(1);
}
