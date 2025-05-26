declare const _default: {
    readonly vendors: {
        readonly vendorCode: {
            maxLength: number;
        };
        readonly vendorName: {
            maxLength: number;
        };
        readonly vendorBusinessName: {
            maxLength: number;
        };
        readonly vendorAddress: {
            maxLength: number;
        };
        readonly vendorCity: {
            maxLength: number;
        };
        readonly vendorState: {
            minLength: number;
            maxLength: number;
        };
        readonly vendorCategories: readonly ["Asset", "Fuel", "Inventory", "Sublet"];
    };
};
export default _default;
