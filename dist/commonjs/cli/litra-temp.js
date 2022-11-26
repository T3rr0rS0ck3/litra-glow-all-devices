#!/usr/bin/env node
"use strict";
/* eslint-disable prettier/prettier */
Object.defineProperty(exports, "__esModule", { value: true });
const driver_1 = require("./../driver");
try {
    const devices = (0, driver_1.findAllDevices)();
    const args = process.argv.slice(2);
    if (devices) {
        if (args.length) {
            const value = parseInt(args[0]);
            if (value) {
                (0, driver_1.setTemperaturePercentage)(devices, value);
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
