/* eslint-disable prettier/prettier */

import { integerToBytes, padRight } from "./utils";

export class DeviceConstants {
    public static readonly VENDOR_ID = 0x046d;
    public static readonly PRODUCT_ID = 0xc900;
    public static readonly USAGE_PAGE = 0xff43;
    public static readonly TURN_ON = padRight([0x11, 0xff, 0x04, 0x1c, 0x01], 20, 0x00);
    public static readonly TURN_OFF = padRight([0x11, 0xff, 0x04, 0x1c, 0x00], 20, 0x00);
    public static readonly MINIMUM_TEMPERATURE_IN_KELVIN = 2700;
    public static readonly MAXIMUM_TEMPERATURE_IN_KELVIN = 6500;
    public static readonly MINIMUM_BRIGHTNESS_IN_LUMEN = 20;
    public static readonly MAXIMUM_BRIGHTNESS_IN_LUMEN = 250;

    public static TEMPERATURE(temperatureInKelvin: number) {
        return padRight([0x11, 0xff, 0x04, 0x9c, ...integerToBytes(temperatureInKelvin)], 20, 0x00);
    }

    public static BRIGHTNESS(brightnessInLumen: number) {
        return padRight([0x11, 0xff, 0x04, 0x4c, 0x00, brightnessInLumen], 20, 0x00);
    }
}