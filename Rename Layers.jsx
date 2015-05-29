// Generated by CoffeeScript 1.7.1
#target "illustrator-18";
var LayerRenamer, layerRenamer;

LayerRenamer = (function () {
	function LayerRenamer() {
		if (app.activeDocument.selection.length > 0) {
			this.replacements = [new RegExp(prompt("Where would you like to replace via RegExp?", "Eg: source S12 (S\\d\\d)")), prompt("What would you like to replace it with?", "Eg: replacement $1")];
			this.renameLayers(app.activeDocument.selection);
		} else {
			alert("Select the layers you would like to be renamed.");
		}
	}

	LayerRenamer.prototype.renameLayers = function (layers) {
		var layer, name, _i, _len, _results, symbolName;
		_results = [];
		symbolName = "";
		for (_i = 0, _len = layers.length; _i < _len; _i++) {
			layer = layers[_i];
			layer = layer.parent;

			if (layer.pageItems.length == 1) {
				symbolName = layer.pageItems[0].symbol.name;
			}
			name = layer.name;
			_results.push(layer.name = name.replace(this.replacements[0], (this.replacements[1] + "-" + symbolName)));
		}
		return _results;
	};
	return LayerRenamer;
})();

layerRenamer = new LayerRenamer();
