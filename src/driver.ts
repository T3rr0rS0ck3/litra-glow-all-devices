import HID from 'node-hid';
import { DeviceConstants } from './DeviceConstants';
import { IDevice } from './models/IDevice';
import { percentageWithinRange } from './utils';

/**
 * Finds all your Logitech Litra Glow device and returns it. Returns `null`
 * if a matching device cannot be found connected to your computer.
 *
 * @returns {IDevice[], null} An object representing your Logitech Litra
 * Glow device, passed into other functions like `turnOn` and
 * `setTemperatureInKelvin` - or `null` if a matching device cannot be
 * found connected to your computer.
 */
export const findAllDevices = (): IDevice[] | null => {
  const devices = HID.devices();

  const matchingDevices = devices.filter((device) =>
    device.vendorId === DeviceConstants.VENDOR_ID &&
    device.productId === DeviceConstants.PRODUCT_ID &&
    device.usagePage === DeviceConstants.USAGE_PAGE,
  );

  if (matchingDevices) {
    return matchingDevices.map((device) => new HID.HID(device.path as string));
  }
  else {
    return null;
  }
};

/**
 * Turns your Logitech Litra Glow device on.
 *
 * @param {IDevice[]} devices The devices to turn on
 */
export const turnOn = (devices: IDevice[]): void => {
  devices.forEach(device => {
    device.write(DeviceConstants.TURN_ON);
  });
};

/**
 * Turns your Logitech Litra Glow device off.
 *
 * @param {IDevice[]} devices The devices to turn off
 */
export const turnOff = (devices: IDevice[]): void => {
  devices.forEach(device => {
    device.write(DeviceConstants.TURN_OFF);
  });
};

/**
 * Sets the temperature of your Logitech Litra Glow device
 *
 * @param {IDevice[]} devices The devices to set the temperature of
 * @param {number} temperatureInKelvin The temperature to set in Kelvin, which
 * must be an integer between 2700 and 6500
 */
export const setTemperatureInKelvin = (devices: IDevice[], temperatureInKelvin: number): void => {
  if (!Number.isInteger(temperatureInKelvin)) {
    throw 'Provided temperature must be an integer';
  }

  if (temperatureInKelvin < DeviceConstants.MINIMUM_TEMPERATURE_IN_KELVIN || temperatureInKelvin > DeviceConstants.MAXIMUM_TEMPERATURE_IN_KELVIN) {
    throw `Provided temperature must be between ${DeviceConstants.MINIMUM_TEMPERATURE_IN_KELVIN} and ${DeviceConstants.MAXIMUM_TEMPERATURE_IN_KELVIN}`;
  }

  devices.forEach(device => {
    device.write(DeviceConstants.TEMPERATURE(temperatureInKelvin));
  });
};

/**
 * Set the temperature of your Logitech Litra Glow device to a percentage
 * of the device's maximum temperature
 *
 * @param {IDevice[]} devices The devices to set the temperature of
 * @param {number} temperaturePercentage The percentage to set the temperature to
 */
export const setTemperaturePercentage = (
  devices: IDevice[],
  temperaturePercentage: number,
): void => {
  if (temperaturePercentage < 0 || temperaturePercentage > 100) {
    throw 'Percentage must be between 0 and 100';
  }

  let temperatureToSet: number = 0;
  if (temperaturePercentage === 0) {
    temperatureToSet = DeviceConstants.MINIMUM_TEMPERATURE_IN_KELVIN
  }
  else {
    temperatureToSet = percentageWithinRange(temperaturePercentage, DeviceConstants.MINIMUM_TEMPERATURE_IN_KELVIN, DeviceConstants.MAXIMUM_TEMPERATURE_IN_KELVIN)
  }

  return setTemperatureInKelvin(devices, temperatureToSet);
};

/**
 * Sets the brightness of your Logitech Litra Glow device, measured in Lumen
 *
 * @param {IDevice[]} devices The devices to set the temperature of
 * @param {number} brightnessInLumens The brightness to set in Lumen, which
 * must be an integer between 20 and 250
 */
export const setBrightnessInLumen = (devices: IDevice[], brightnessInLumen: number): void => {
  if (!Number.isInteger(brightnessInLumen)) {
    throw 'Provided brightness must be an integer';
  }

  if (brightnessInLumen < DeviceConstants.MINIMUM_BRIGHTNESS_IN_LUMEN || brightnessInLumen > DeviceConstants.MAXIMUM_BRIGHTNESS_IN_LUMEN) {
    throw `Provided brightness must be between ${DeviceConstants.MINIMUM_BRIGHTNESS_IN_LUMEN} and ${DeviceConstants.MAXIMUM_BRIGHTNESS_IN_LUMEN}`;
  }

  devices.forEach(device => {
    device.write(DeviceConstants.BRIGHTNESS(brightnessInLumen));
  });
};

/**
 * Set the brightness of your Logitech Litra Glow device to a percentage
 * of the device's maximum brightness
 *
 * @param {IDevice[]} devices The devices to set the brightness of
 * @param {number} brightnessPercentage The percentage to set the brightness to
 */
export const setBrightnessPercentage = (devices: IDevice[], brightnessPercentage: number): void => {
  if (brightnessPercentage < 0 || brightnessPercentage > 100) {
    throw 'Percentage must be between 0 and 100';
  }

  let brightnessToSet: number = 0;
  if (brightnessPercentage === 0) {
    brightnessToSet = DeviceConstants.MINIMUM_BRIGHTNESS_IN_LUMEN
  }
  else {
    brightnessToSet = percentageWithinRange(brightnessPercentage, DeviceConstants.MINIMUM_BRIGHTNESS_IN_LUMEN, DeviceConstants.MAXIMUM_BRIGHTNESS_IN_LUMEN);
  }

  return setBrightnessInLumen(devices, brightnessToSet);
};
