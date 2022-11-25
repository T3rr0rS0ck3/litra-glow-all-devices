#!/usr/bin/env node
/* eslint-disable prettier/prettier */

import { findAllDevice, turnOn } from './../driver';

try {
  const devices = findAllDevice();

  if (devices) {
    turnOn(devices);
  } else {
    throw 'Devices not found';
  }

  process.exit(0);
} catch (e) {
  console.log(e);
  process.exit(1);
}
