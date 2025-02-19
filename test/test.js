// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-unnecessary-condition, @typescript-eslint/no-unsafe-call */
import assert from 'node:assert';
import { describe, it } from 'node:test';
import constants from '../index.js';
import inventoryConstants from '../inventory/index.js';
import inventoryItemConstants from '../inventory/items.js';
describe('faster-constants', () => {
    it('should import inventory constants in multiple ways', () => {
        assert(constants);
        assert(constants.inventory);
        assert(constants.inventory.items);
        assert(constants.inventory.items.itemName);
        assert(constants.inventory.items.itemName.inputId);
        assert(inventoryConstants);
        assert(inventoryConstants.items);
        assert(inventoryConstants.items.itemName);
        assert(inventoryConstants.items.itemName.inputId);
        assert(inventoryItemConstants);
        assert(inventoryItemConstants.itemName);
        assert(inventoryItemConstants.itemName.inputId);
        assert(constants.inventory.items.itemName.inputId ===
            inventoryConstants.items.itemName.inputId);
        assert(constants.inventory.items.itemName.inputId ===
            inventoryItemConstants.itemName.inputId);
    });
});
