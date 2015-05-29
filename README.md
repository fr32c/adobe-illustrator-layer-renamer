# Adobe Illustrator Layer Renamer + Regexp + Symbols

This script allows you to batch rename layers in Illustrator. 

![](https://s3-us-west-2.amazonaws.com/sebastienlavoie.personal/adobe-illustrator-layer-renamer.png)

The script used to only works with string replacement. Regular expressions was eventually added.

Plus, for my needs, I added the name of the single symbol from each layer.

I had this Ai structure:
Layer1
----SymbolA
Layer2
----SymbolA
Layer3
----SymbolB

and I wanted to have:
Layer1-SymbolA
----SymbolA
Layer2-SymbolA
----SymbolA
Layer3-SymbolB
----SymbolB
 
So i tweaked te script to use regex AND to insert the symbol's name at the right place.

## Installation

### Option 1

Save `ai-layer-renamer.jsx` in your scripts folder.

- Windows: `Program Files\Adobe\Adobe Illustrator <version>\Presets\<language>/Scripts`
- OS X: `/Applications/Adobe Illustrator <version>/Presets/<language>/Scripts`

### Option 2

Run it from ExtendScript Toolkit.

## Development

1. Make sure you have [coffeescript](http://coffeescript.org) installed.
2. Run `cake watch` from the root of folder.
3. Run `cake build` to output .jsx file.
 
## Troubleshooting

If you experience issues with the script as some people have, check out [this issue](https://github.com/seblavoie/adobe-illustrator-layer-renamer/issues/1#issuecomment-102243191) for an alternative solution by [SheepDomination](https://github.com/SheepDomination).
