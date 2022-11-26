#!/usr/bin/env node
"use strict";
/* eslint-disable prettier/prettier */
Object.defineProperty(exports, "__esModule", { value: true });
const driver_1 = require("./../driver");
try {
    const devices = (0, driver_1.findAllDevices)();
    if (devices) {
        (0, driver_1.turnOff)(devices);
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
