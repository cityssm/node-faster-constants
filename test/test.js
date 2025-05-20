// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import assert from 'node:assert';
import { describe, it } from 'node:test';
import constants from '../index.js';
import inventoryConstants from '../inventory/index.js';
import inventoryItemConstants from '../inventory/items.js';
import otherEslintConstants from '../other/eslint.js';
import otherConstants from '../other/index.js';
import vendorConstants from '../vendors/index.js';
import vendorVendorConstants from '../vendors/vendors.js';
await describe('faster-constants', async () => {
    await it('should import "inventory" constants in multiple ways', () => {
        assert.ok(constants);
        assert.ok(constants.inventory);
        assert.ok(constants.inventory.items);
        assert.ok(constants.inventory.items.itemName);
        assert.ok(constants.inventory.items.itemName.inputId);
        assert.ok(inventoryConstants);
        assert.ok(inventoryConstants.items);
        assert.ok(inventoryConstants.items.itemName);
        assert.ok(inventoryConstants.items.itemName.inputId);
        assert.ok(inventoryItemConstants);
        assert.ok(inventoryItemConstants.itemName);
        assert.ok(inventoryItemConstants.itemName.inputId);
        assert.strictEqual(constants.inventory.items.itemName.inputId, inventoryConstants.items.itemName.inputId);
        assert.strictEqual(constants.inventory.items.itemName.inputId, inventoryItemConstants.itemName.inputId);
    });
    await it('should import "other" constants in multiple ways', () => {
        assert.ok(constants);
        assert.ok(constants.other);
        assert.ok(constants.other.eslint);
        assert.ok(constants.other.eslint.cspellWords);
        assert.strictEqual(constants.other.eslint.cspellWords[0], otherConstants.eslint.cspellWords[0]);
        assert.strictEqual(constants.other.eslint.cspellWords[0], otherEslintConstants.cspellWords[0]);
    });
    await it('should import "vendors" constants in multiple ways', () => {
        assert.ok(constants);
        assert.ok(constants.vendors);
        assert.strictEqual(constants.vendors.vendors.vendorName.maxLength, vendorConstants.vendors.vendorName.maxLength);
        assert.strictEqual(constants.vendors.vendors.vendorName.maxLength, vendorVendorConstants.vendorName.maxLength);
    });
});
