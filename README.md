# Logitech Litra Glow

This JavaScript driver allows you to control your [Logitech Litra Glow](https://www.logitech.com/en-gb/products/lighting/litra-glow.946-000002.html) light using a CLI and from your JavaScript code.
The Fork extends the Driver for compatibility for multiple Litra Glow and the behavior for the Brightness and Temperature for cli.

With this driver, you can:

* Turn your light on and off
* Set the brightness of your light
* Set the temperature of your light

## Compatibility

This library is tested on Windows. It's powered by [`node-hid`](https://github.com/node-hid/node-hid), which is compatible with other macOS versions, Windows and Linux, so it would be expected to work there too, but your milage may vary 🙏

## Using as a command line tool

Make sure you have Node.js available on your machine, and then install the package with `npm install -g litra-glow-all-devices`.

With the package installed, use the `litra-on` and `litra-off` commands to turn your light on and off.\
The `litra-temp <tempAsPercent>` for setting the temperature e.g. `litra-temp 75`.\
The `litra-bright <tempAsPercent>` for setting the temperature e.g. `litra-bright 75`.

## Using as a JavaScript library

### Installation

Simply add the `litra-glow-all-devices` Node.js package to your `package.json` and install it:

```sh
npm install --save litra-glow-all-devices
```

### Usage

#### Checking if a Litra Glow is plugged in

The `findAllDevices` function checks your computer to find whether a Logitech Litra Glow is plugged in.

If it is, it returns an object array representing all found devices, which you can pass into other function. If it isn't, it returns `null`.

```js
import { findAllDevices } from 'litra-glow-all-devices';

const devices = findAllDevices();

if (devices) {
  // Do something
} else {
  // Blow up
}
```

#### Turning your Litra Glow on or off

Find your devices with `findAllDevices`, and then use the simple `turnOn` and `turnOff` functions. They just take one parameter: the device.

```js
import { findAllDevices, turnOff, turnOn } from 'litra-glow-all-devices';

const devices = findAllDevices();

// Turn your light on, then turn it off again after 5 seconds
if (devices) {
  turnOn(devices);
  setTimeout(() => turnOff(devices), 5000));
}
```

#### Setting the brightness of your Litra Glow

You can set the brightness of your Litra Glow, measured in Lumen, using the `setBrightnessInLumen` function. The Litra Glow supports brightness between 20 and 250 Lumen:

```js
import { findAllDevices, setBrightnessInLumen } from 'litra-glow-all-devices';

const devices = findAllDevices();

if (devices) {
  setBrightnessInLumen(devices, 150);
}
```

You can also set brightness level to a percentage with `setBrightnessPercentage` if you don't want to think in Lumen:

```js
import { findAllDevices, setBrightnessPercentage } from 'litra-glow-all-devices';

const devices = findAllDevices();

if (devices) {
  setBrightnessPercentage(devices, 75);
}
```

#### Setting the temperature of your Litra Glow

You can set the temperature of your Litra Glow, measured in Kelvin, using the `setTemperatureInKelvin` function. The Litra Glow supports temperature between 2700 and 6500 Kelvin:

```js
import { findAllDevices, setTemperatureInKelvin } from 'litra-glow-all-devices';

const devices = findAllDevices();

if (devices) {
  setTemperatureInKelvin(devices, 4500);
}
```

You can also set brightness level to a percentage with `setTemperaturePercentage` if you don't want to think in Lumen:

```js
import { findAllDevices, setTemperaturePercentage } from 'litra-glow-all-devices';

const devices = findAllDevices();

if (devices) {
  setTemperaturePercentage(devices, 75);
}
```