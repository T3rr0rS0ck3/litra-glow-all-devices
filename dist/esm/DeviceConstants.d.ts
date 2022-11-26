export declare class DeviceConstants {
    static readonly VENDOR_ID = 1133;
    static readonly PRODUCT_ID = 51456;
    static readonly USAGE_PAGE = 65347;
    static readonly TURN_ON: any[];
    static readonly TURN_OFF: any[];
    static readonly MINIMUM_TEMPERATURE_IN_KELVIN = 2700;
    static readonly MAXIMUM_TEMPERATURE_IN_KELVIN = 6500;
    static readonly MINIMUM_BRIGHTNESS_IN_LUMEN = 20;
    static readonly MAXIMUM_BRIGHTNESS_IN_LUMEN = 250;
    static TEMPERATURE(temperatureInKelvin: number): any[];
    static BRIGHTNESS(brightnessInLumen: number): any[];
}
