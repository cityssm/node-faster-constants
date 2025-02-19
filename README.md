# FASTER Web Constants

[![DeepSource](https://app.deepsource.com/gh/cityssm/node-faster-constants.svg/?label=active+issues&show_trend=true&token=HHrRXKZqVYqHOKAFRFTbcr8_)](https://app.deepsource.com/gh/cityssm/node-faster-constants/)

Constants used by multiple Node packages that work with the
[FASTER Web Fleet Management System](https://fasterasset.com/products/fleet-management-software/).

This is not meant to be a complete list of every constant used in FASTER Web.

_This package is in no way affiliated with or endorsed by FASTER Asset Solutions or Transit Technologies._

## Installation

```sh
npm install @cityssm/faster-constants
```

## Usage

```javascript
import fasterConstants from '@cityssm/faster-constants'

const newItemName =
  'This is a very long item name, exceeding the allowable length'

if (newItemName.length > fasterConstants.inventory.items.itemName.maxLength) {
  console.log('The item name will be truncated.')
}
```

## Related Projects

_Building an intergration with FASTER Web?_

[Have a look at the City's open source projects related to FASTER Web](https://github.com/cityssm/faster-web-projects).
