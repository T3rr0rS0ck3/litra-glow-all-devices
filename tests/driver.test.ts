import {
  setBrightnessInLumen,
  setBrightnessPercentage,
  setTemperatureInKelvin,
  setTemperaturePercentage,
  turnOff,
  turnOn,
} from '../src/driver';

describe('turnOn', () => {
  it('sends the instruction to turn the device on', () => {
    const fakeDevices = [{ write: jest.fn() }];

    turnOn(fakeDevices);

    expect(fakeDevices[0].write).toBeCalledWith([
      17, 255, 4, 28, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
  });
});

describe('turnOff', () => {
  it('sends the instruction to turn the device off', () => {
    const fakeDevices = [{ write: jest.fn() }];

    turnOff(fakeDevices);

    expect(fakeDevices[0].write).toBeCalledWith([
      17, 255, 4, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
  });
});

describe('setTemperatureInKelvin', () => {
  it('sends the instruction to set the device temperature', () => {
    const fakeDevices = [{ write: jest.fn() }];

    setTemperatureInKelvin(fakeDevices, 6300);

    expect(fakeDevices[0].write).toBeCalledWith([
      17, 255, 4, 156, 24, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
  });

  it('throws an error if the temperature is below the minimum', () => {
    const fakeDevices = [{ write: jest.fn() }];

    expect(() => setTemperatureInKelvin(fakeDevices, 2699)).toThrowError(
      'Provided temperature must be between 2700 and 6500',
    );
  });

  it('throws an error if the temperature is above the maximum', () => {
    const fakeDevices = [{ write: jest.fn() }];

    expect(() => setTemperatureInKelvin(fakeDevices, 6501)).toThrowError(
      'Provided temperature must be between 2700 and 6500',
    );
  });

  it('throws an error if the temperature is not an integer', () => {
    const fakeDevices = [{ write: jest.fn() }];

    expect(() => setTemperatureInKelvin(fakeDevices, 1337.9)).toThrowError(
      'Provided temperature must be an integer',
    );
  });
});

describe('setTemperaturePercentage', () => {
  it('sends the instruction to set the device temperature based on a percentage', () => {
    const fakeDevices = [{ write: jest.fn() }];

    setTemperaturePercentage(fakeDevices, 100);

    expect(fakeDevices[0].write).toBeCalledWith([
      17, 255, 4, 156, 25, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
  });

  it('sends the instruction to set the device temperature to the minimum temperature when set to 0%', () => {
    const fakeDevices = [{ write: jest.fn() }];

    setTemperaturePercentage(fakeDevices, 0);

    expect(fakeDevices[0].write).toBeCalledWith([
      17, 255, 4, 156, 10, 140, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
  });

  it('throws an error if the provided percentage is less than 0', () => {
    const fakeDevices = [{ write: jest.fn() }];

    expect(() => setTemperaturePercentage(fakeDevices, -1)).toThrowError(
      'Percentage must be between 0 and 100',
    );
  });

  it('throws an error if the provided percentage is more than 100', () => {
    const fakeDevices = [{ write: jest.fn() }];

    expect(() => setTemperaturePercentage(fakeDevices, 101)).toThrowError(
      'Percentage must be between 0 and 100',
    );
  });
});

describe('setBrightnessInLumen', () => {
  it('sends the instruction to set the device temperature', () => {
    const fakeDevices = [{ write: jest.fn() }];
    setBrightnessInLumen(fakeDevices, 20);

    expect(fakeDevices[0].write).toBeCalledWith([
      17, 255, 4, 76, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
  });

  it('throws an error if the brightness is below the minimum', () => {
    const fakeDevices = [{ write: jest.fn() }];

    expect(() => setBrightnessInLumen(fakeDevices, 19)).toThrowError(
      'Provided brightness must be between 20 and 250',
    );
  });

  it('throws an error if the brightness is above the maximum', () => {
    const fakeDevices = [{ write: jest.fn() }];

    expect(() => setBrightnessInLumen(fakeDevices, 251)).toThrowError(
      'Provided brightness must be between 20 and 250',
    );
  });

  it('throws an error if the brightness is not an integer', () => {
    const fakeDevices = [{ write: jest.fn() }];

    expect(() => setBrightnessInLumen(fakeDevices, 1337.9)).toThrowError(
      'Provided brightness must be an integer',
    );
  });
});

describe('setBrightnessPercentage', () => {
  it('sends the instruction to set the device brightness based on a percentage', () => {
    const fakeDevices = [{ write: jest.fn() }];

    setBrightnessPercentage(fakeDevices, 100);

    expect(fakeDevices[0].write).toBeCalledWith([
      17, 255, 4, 76, 0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
  });

  it('sends the instruction to set the device brightness to the minimum brightness when set to 0%', () => {
    const fakeDevices = [{ write: jest.fn() }];;

    setBrightnessPercentage(fakeDevices, 0);

    expect(fakeDevices[0].write).toBeCalledWith([
      17, 255, 4, 76, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
  });

  it('throws an error if the provided percentage is less than 0', () => {
    const fakeDevices = [{ write: jest.fn() }];

    expect(() => setBrightnessPercentage(fakeDevices, -1)).toThrowError(
      'Percentage must be between 0 and 100',
    );
  });

  it('throws an error if the provided percentage is more than 100', () => {
    const fakeDevices = [{ write: jest.fn() }];

    expect(() => setBrightnessPercentage(fakeDevices, 101)).toThrowError(
      'Percentage must be between 0 and 100',
    );
  });
});
