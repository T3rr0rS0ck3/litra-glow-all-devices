"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBrightnessPercentage = exports.setBrightnessInLumen = exports.setTemperaturePercentage = exports.setTemperatureInKelvin = exports.turnOff = exports.turnOn = exports.findAllDevices = void 0;
/* eslint-disable prettier/prettier */
const node_hid_1 = __importDefault(require("node-hid"));
const DeviceConstants_1 = require("./DeviceConstants");
const utils_1 = require("./utils");
/**
 * Finds all your Logitech Litra Glow device and returns it. Returns `null`
 * if a matching device cannot be found connected to your computer.
 *
 * @returns {IDevice[], null} An object representing your Logitech Litra
 * Glow device, passed into other functions like `turnOn` and
 * `setTemperatureInKelvin` - or `null` if a matching device cannot be
 * found connected to your computer.
 */
const findAllDevices = () => {
    const devices = node_hid_1.default.devices();
    const matchingDevices = devices.filter((device) => device.vendorId === DeviceConstants_1.DeviceConstants.VENDOR_ID &&
        device.productId === DeviceConstants_1.DeviceConstants.PRODUCT_ID &&
        device.usagePage === DeviceConstants_1.DeviceConstants.USAGE_PAGE);
    if (matchingDevices) {
        return matchingDevices.map((device) => new node_hid_1.default.HID(device.path));
    }
    else {
        return null;
    }
};
exports.findAllDevices = findAllDevices;
/**
 * Turns your Logitech Litra Glow device on.
 *
 * @param {IDevice[]} devices The devices to turn on
 */
const turnOn = (devices) => {
    devices.forEach(device => {
        device.write(DeviceConstants_1.DeviceConstants.TURN_ON);
    });
};
exports.turnOn = turnOn;
/**
 * Turns your Logitech Litra Glow device off.
 *
 * @param {IDevice[]} devices The devices to turn off
 */
const turnOff = (devices) => {
    devices.forEach(device => {
        device.write(DeviceConstants_1.DeviceConstants.TURN_OFF);
    });
};
exports.turnOff = turnOff;
/**
 * Sets the temperature of your Logitech Litra Glow device
 *
 * @param {IDevice[]} devices The devices to set the temperature of
 * @param {number} temperatureInKelvin The temperature to set in Kelvin, which
 * must be an integer between 2700 and 6500
 */
const setTemperatureInKelvin = (devices, temperatureInKelvin) => {
    if (!Number.isInteger(temperatureInKelvin)) {
        throw 'Provided temperature must be an integer';
    }
    if (temperatureInKelvin < DeviceConstants_1.DeviceConstants.MINIMUM_TEMPERATURE_IN_KELVIN || temperatureInKelvin > DeviceConstants_1.DeviceConstants.MAXIMUM_TEMPERATURE_IN_KELVIN) {
        throw `Provided temperature must be between ${DeviceConstants_1.DeviceConstants.MINIMUM_TEMPERATURE_IN_KELVIN} and ${DeviceConstants_1.DeviceConstants.MAXIMUM_TEMPERATURE_IN_KELVIN}`;
    }
    devices.forEach(device => {
        device.write(DeviceConstants_1.DeviceConstants.TEMPERATURE(temperatureInKelvin));
    });
};
exports.setTemperatureInKelvin = setTemperatureInKelvin;
/**
 * Set the temperature of your Logitech Litra Glow device to a percentage
 * of the device's maximum temperature
 *
 * @param {IDevice[]} devices The devices to set the temperature of
 * @param {number} temperaturePercentage The percentage to set the temperature to
 */
const setTemperaturePercentage = (devices, temperaturePercentage) => {
    if (temperaturePercentage < 0 || temperaturePercentage > 100) {
        throw 'Percentage must be between 0 and 100';
    }
    let temperatureToSet = 0;
    if (temperaturePercentage === 0) {
        temperatureToSet = DeviceConstants_1.DeviceConstants.MINIMUM_TEMPERATURE_IN_KELVIN;
    }
    else {
        temperatureToSet = (0, utils_1.percentageWithinRange)(temperaturePercentage, DeviceConstants_1.DeviceConstants.MINIMUM_TEMPERATURE_IN_KELVIN, DeviceConstants_1.DeviceConstants.MAXIMUM_TEMPERATURE_IN_KELVIN);
    }
    return (0, exports.setTemperatureInKelvin)(devices, temperatureToSet);
};
exports.setTemperaturePercentage = setTemperaturePercentage;
/**
 * Sets the brightness of your Logitech Litra Glow device, measured in Lumen
 *
 * @param {IDevice[]} devices The devices to set the temperature of
 * @param {number} brightnessInLumens The brightness to set in Lumen, which
 * must be an integer between 20 and 250
 */
const setBrightnessInLumen = (devices, brightnessInLumen) => {
    if (!Number.isInteger(brightnessInLumen)) {
        throw 'Provided brightness must be an integer';
    }
    if (brightnessInLumen < DeviceConstants_1.DeviceConstants.MINIMUM_BRIGHTNESS_IN_LUMEN || brightnessInLumen > DeviceConstants_1.DeviceConstants.MAXIMUM_BRIGHTNESS_IN_LUMEN) {
        throw `Provided brightness must be between ${DeviceConstants_1.DeviceConstants.MINIMUM_BRIGHTNESS_IN_LUMEN} and ${DeviceConstants_1.DeviceConstants.MAXIMUM_BRIGHTNESS_IN_LUMEN}`;
    }
    devices.forEach(device => {
        device.write(DeviceConstants_1.DeviceConstants.BRIGHTNESS(brightnessInLumen));
    });
};
exports.setBrightnessInLumen = setBrightnessInLumen;
/**
 * Set the brightness of your Logitech Litra Glow device to a percentage
 * of the device's maximum brightness
 *
 * @param {IDevice[]} devices The devices to set the brightness of
 * @param {number} brightnessPercentage The percentage to set the brightness to
 */
const setBrightnessPercentage = (devices, brightnessPercentage) => {
    if (brightnessPercentage < 0 || brightnessPercentage > 100) {
        throw 'Percentage must be between 0 and 100';
    }
    let brightnessToSet = 0;
    if (brightnessPercentage === 0) {
        brightnessToSet = DeviceConstants_1.DeviceConstants.MINIMUM_BRIGHTNESS_IN_LUMEN;
    }
    else {
        brightnessToSet = (0, utils_1.percentageWithinRange)(brightnessPercentage, DeviceConstants_1.DeviceConstants.MINIMUM_BRIGHTNESS_IN_LUMEN, DeviceConstants_1.DeviceConstants.MAXIMUM_BRIGHTNESS_IN_LUMEN);
    }
    return (0, exports.setBrightnessInLumen)(devices, brightnessToSet);
};
exports.setBrightnessPercentage = setBrightnessPercentage;
