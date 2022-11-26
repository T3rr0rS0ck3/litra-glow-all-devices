"use strict";
/* eslint-disable prettier/prettier */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceConstants = void 0;
const utils_1 = require("./utils");
class DeviceConstants {
    static TEMPERATURE(temperatureInKelvin) {
        return (0, utils_1.padRight)([0x11, 0xff, 0x04, 0x9c, ...(0, utils_1.integerToBytes)(temperatureInKelvin)], 20, 0x00);
    }
    static BRIGHTNESS(brightnessInLumen) {
        return (0, utils_1.padRight)([0x11, 0xff, 0x04, 0x4c, 0x00, brightnessInLumen], 20, 0x00);
    }
}
exports.DeviceConstants = DeviceConstants;
DeviceConstants.VENDOR_ID = 0x046d;
DeviceConstants.PRODUCT_ID = 0xc900;
DeviceConstants.USAGE_PAGE = 0xff43;
DeviceConstants.TURN_ON = (0, utils_1.padRight)([0x11, 0xff, 0x04, 0x1c, 0x01], 20, 0x00);
DeviceConstants.TURN_OFF = (0, utils_1.padRight)([0x11, 0xff, 0x04, 0x1c, 0x00], 20, 0x00);
DeviceConstants.MINIMUM_TEMPERATURE_IN_KELVIN = 2700;
DeviceConstants.MAXIMUM_TEMPERATURE_IN_KELVIN = 6500;
DeviceConstants.MINIMUM_BRIGHTNESS_IN_LUMEN = 20;
DeviceConstants.MAXIMUM_BRIGHTNESS_IN_LUMEN = 250;
