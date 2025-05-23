declare const _default: {
    readonly inventory: {
        readonly items: {
            readonly itemName: {
                readonly inputId: "PartNameRadTextBox";
                readonly maxLength: 40;
            };
            readonly binLocation: {
                readonly inputId: "BinLocationRadTextBox";
                readonly maxLength: 20;
            };
            readonly alternateLocation: {
                readonly inputId: "AlternateLocationRadTextBox";
                readonly maxLength: 20;
            };
        };
    };
    readonly other: {
        readonly eslint: {
            readonly cspellWords: readonly ["fasterwebcloud"];
        };
    };
    readonly vendors: {
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
        };
    };
};
export default _default;
