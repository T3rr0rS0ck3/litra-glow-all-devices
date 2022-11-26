/**
 * Conforms to the interface of `node-hid`'s `HID.HID`. Useful for mocking.
 */
export interface IDevice {
    write: (values: number[] | Buffer) => number;
}
