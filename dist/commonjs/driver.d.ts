import { IDevice } from './models/IDevice';
/**
 * Finds all your Logitech Litra Glow device and returns it. Returns `null`
 * if a matching device cannot be found connected to your computer.
 *
 * @returns {IDevice[], null} An object representing your Logitech Litra
 * Glow device, passed into other functions like `turnOn` and
 * `setTemperatureInKelvin` - or `null` if a matching device cannot be
 * found connected to your computer.
 */
export declare const findAllDevices: () => IDevice[] | null;
/**
 * Turns your Logitech Litra Glow device on.
 *
 * @param {IDevice[]} devices The devices to turn on
 */
export declare const turnOn: (devices: IDevice[]) => void;
/**
 * Turns your Logitech Litra Glow device off.
 *
 * @param {IDevice[]} devices The devices to turn off
 */
export declare const turnOff: (devices: IDevice[]) => void;
/**
 * Sets the temperature of your Logitech Litra Glow device
 *
 * @param {IDevice[]} devices The devices to set the temperature of
 * @param {number} temperatureInKelvin The temperature to set in Kelvin, which
 * must be an integer between 2700 and 6500
 */
export declare const setTemperatureInKelvin: (devices: IDevice[], temperatureInKelvin: number) => void;
/**
 * Set the temperature of your Logitech Litra Glow device to a percentage
 * of the device's maximum temperature
 *
 * @param {IDevice[]} devices The devices to set the temperature of
 * @param {number} temperaturePercentage The percentage to set the temperature to
 */
export declare const setTemperaturePercentage: (devices: IDevice[], temperaturePercentage: number) => void;
/**
 * Sets the brightness of your Logitech Litra Glow device, measured in Lumen
 *
 * @param {IDevice[]} devices The devices to set the temperature of
 * @param {number} brightnessInLumens The brightness to set in Lumen, which
 * must be an integer between 20 and 250
 */
export declare const setBrightnessInLumen: (devices: IDevice[], brightnessInLumen: number) => void;
/**
 * Set the brightness of your Logitech Litra Glow device to a percentage
 * of the device's maximum brightness
 *
 * @param {IDevice[]} devices The devices to set the brightness of
 * @param {number} brightnessPercentage The percentage to set the brightness to
 */
export declare const setBrightnessPercentage: (devices: IDevice[], brightnessPercentage: number) => void;
