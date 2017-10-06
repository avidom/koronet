(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 640,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/board.jpg", id:"board"},
		{src:"images/brit.png", id:"brit"},
		{src:"images/dart.png", id:"dart"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/pBottle.png", id:"pBottle"},
		{src:"images/pDart.png", id:"pDart"},
		{src:"images/pWineglass.png", id:"pWineglass"},
		{src:"images/shadow.png", id:"shadow"},
		{src:"images/table.png", id:"table"},
		{src:"images/target.png", id:"target"},
		{src:"images/targetPackshot.png", id:"targetPackshot"},
		{src:"images/targetShadow.png", id:"targetShadow"},
		{src:"images/warn.png", id:"warn"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,400);


(lib.board = function() {
	this.initialize(img.board);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,325,339);


(lib.brit = function() {
	this.initialize(img.brit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,8);


(lib.dart = function() {
	this.initialize(img.dart);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,126);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,45);


(lib.pBottle = function() {
	this.initialize(img.pBottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,345);


(lib.pDart = function() {
	this.initialize(img.pDart);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,48);


(lib.pWineglass = function() {
	this.initialize(img.pWineglass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,247);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,236);


(lib.table = function() {
	this.initialize(img.table);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,120);


(lib.target = function() {
	this.initialize(img.target);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,279);


(lib.targetPackshot = function() {
	this.initialize(img.targetPackshot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,197);


(lib.targetShadow = function() {
	this.initialize(img.targetShadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,313,319);


(lib.warn = function() {
	this.initialize(img.warn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,633,40);


(lib.zzzzz = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.494,1],-1,0,1,0).s().p("AgIBgIAIi/IAJC/g");
	this.shape.setTransform(0,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#7B7B7B","#000000"],[0,0.494,1],-2.5,0,2.5,0).s().p("AAJBgIgJi/IAZC/gAgYBgIAYi/IgIC/g");
	this.shape_1.setTransform(0,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,0,5,19.3);


(lib.warn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.warn();
	this.instance.setTransform(-316,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316,-20,633,40);


(lib.Symbol72copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVAtIgDgBIgCgCIgQgXIgPAXIgCACIgEABIgTAAIgCgBIgBgCIAAAAIAAgCIAegoIgdgoIAAgBIABgCIACgBIATAAIAEABIACACIAOAWIAPgWIACgCIADgBIAUAAIACABIABACIAAABIgdAoIAeAoIAAACIAAAAIgBACIgCABg");
	this.shape.setTransform(0,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVAtIgDgBIgCgCIgQgXIgPAXIgCACIgEABIgTAAIgCgBIgBgCIAAAAIAAgCIAegoIgdgoIAAgBIABgCIACgBIATAAIAEABIACACIAOAWIAPgWIACgCIADgBIAUAAIACABIABACIAAABIgdAoIAeAoIAAACIAAAAIgBACIgCABg");
	this.shape_1.setTransform(0,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVAtIgDgBIgCgCIgQgXIgPAXIgCACIgEABIgTAAIgCgBIgBgCIAAgBIAAgBIAegoIgdgoIAAgBIABgCIACgBIATAAIAEABIACACIAOAWIAPgWIACgCIADgBIAUAAIACABIABACIAAABIgdAoIAeAoIAAABIAAABIgBACIgCABg");
	this.shape_2.setTransform(0,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(2));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CB0909").s().p("AhOBkQgVAAABgVIAAidQgBgVAVAAICeAAQATAAABAVIAACdQgBAVgTAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhOBkQgVAAABgVIAAidQgBgVAVAAICeAAQATAAABAVIAACdQgBAVgTAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4,p:{y:0}}]},1).to({state:[{t:this.shape_4,p:{y:1.3}}]},1).wait(2));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#005DFF").s().p("AipCqIAAlTIFTAAIAAFTg");
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20.2);


(lib.Symbol72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF00").s().p("AyufPMAAAg+dMAgKAAAIAAFUIFTAAMAAAA5Jg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMAuIgDgPIgRAAIgDAPIgRAAIAWhbIANAAIAWBbgAAGARIgFgVIgBgKIgBAKIAAACIgBAEIgCAHIgBAFIAAADIALAAg");
	this.shape.setTransform(12.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAuIAAhLIgQAAIAAgQIAvAAIAAAQIgQAAIAABLg");
	this.shape_1.setTransform(6.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAHAuIAAgnIgNAAIAAAnIgRAAIAAhbIARAAIAAAmIANAAIAAgmIARAAIAABbg");
	this.shape_2.setTransform(0.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAIAuIAAgrIAAgDIAAgEIABgDIgBAAIgRA1IgPAAIAAhbIARAAIAAAqIAAADIgBAEIAAAEIATg1IAOAAIAABbg");
	this.shape_3.setTransform(-6.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAHAuIAAhLIgNAAIAABLIgRAAIAAhbIAvAAIAABbg");
	this.shape_4.setTransform(-13.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-9.2,36.6,18.5);


(lib.Symbol68 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.setTransform(-320,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-200,640,400);


(lib.Symbol67copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJATQgEgBgCgCQgDgCAAgEIgBgKIABgJQAAgEADgCQACgCAEgBIAJgBIAKABQAEABADACQACACAAAEIABAJIgBAKQAAAEgCACQgDACgEABIgKABIgJgBg");
	this.shape.setTransform(41.1,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhCBWIAAggIAJAAIAAhoIgJAAIAAgjIBEAAQAgAAAOALQAPAMAAAaQAAAOgFAIQgGAIgKAFQAaAKgBAbQAAAagPANQgPALgfAAgAgOA2IAQAAQAMAAAGgFQAEgGAAgKQABgKgGgFQgFgGgNABIgPAAgAgOgPIAOAAQALAAAFgFQAGgEAAgIQAAgKgGgFQgFgDgLAAIgOAAg");
	this.shape_1.setTransform(28.8,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABZQgSABgMgEQgMgDgHgIQgHgIgDgLQgDgMAAgRIAAg2QAAgPADgNQADgLAHgIQAHgHAMgDQAMgFASAAIABAAQASAAAMAFQAMADAHAHQAHAIADALQADANAAAPIAAA2QAAARgDAMQgDALgHAIQgHAIgMADQgMAEgSgBgAgPgwQgFAEAAAQIAAA6QAAAPAFAFQAEAEALAAIABAAQALAAAEgEQAFgFAAgPIAAg6QAAgQgFgEQgEgFgLAAIgBAAQgLAAgEAFg");
	this.shape_2.setTransform(12.2,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBBWIAAggIAJAAIAAhrIgJAAIAAggIB9AAIAAA9IgiAAIAAgMQAAgKgEgDQgEgEgLAAIgUAAIAAAiIATAAQAdAAAQANQAPALAAAbQAAAbgPAOQgQANgdAAgAgNA2IALAAQAOAAAGgFQAFgFABgMQAAgLgHgGQgFgEgOAAIgLAAg");
	this.shape_3.setTransform(-3.9,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANBWIAAggIAKAAIgGgYIgnAAIgGAYIAKAAIAAAgIg3AAIAAggIAIAAIAahrIgIAAIAAggIBeAAIAAAgIgGAAIAaBrIAHAAIAAAggAgQAAIAbAAIgLg1IgEAAg");
	this.shape_4.setTransform(-20.4,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAKBWIAAggIAKAAIAAhrIgnAAIAABrIAJAAIAAAgIg9AAIAAggIAJAAIAAhrIgJAAIAAggICPAAIAAAgIgKAAIAABrIAKAAIAAAgg");
	this.shape_5.setTransform(-37.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-15.5,95.5,31);


(lib.Symbol66copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEAnIAAgPIAEAAIgIgMIgJAMIACAAIAAAPIgZAAIAAgPIAEAAIATgYIgRgXIgEAAIAAgPIAcAAIAAAPIgDAAIAGAKIAIgKIgDAAIAAgPIAZAAIAAAPIgEAAIgRAXIATAYIAEAAIAAAPg");
	this.shape.setTransform(36.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGAnIAAgPIAEAAIAAgYIgTAWIAAACIAEAAIAAAPIgcAAIAAgPIAFAAIAAgvIgFAAIAAgPIAcAAIAAAPIgEAAIAAAYIATgWIAAgCIgEAAIAAgPIAcAAIAAAPIgFAAIAAAvIAFAAIAAAPg");
	this.shape_1.setTransform(27.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADAnIAAgPIADAAIgOgWIAAAWIAEAAIAAAPIgcAAIAAgPIAEAAIAAgvIgEAAIAAgPIAcAAIAAAPIgEAAIAAASIANgSIgCAAIAAgPIAcAAIAAAPIgEAAIgUAUIAWAbIAEAAIAAAPg");
	this.shape_2.setTransform(19.6,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAnQgGgBgDgEQgDgDgBgGQgCgFAAgIIAAgXQAAgPAGgHQAGgHANAAIAFABIAHADIAAgEIASAAIAAAeIgSAAIAAgEQgBgFgCgCQgCgCgFAAQgIAAABAJIAAAbQAAAHACACQABADAEAAQAGAAACgCQACgCAAgGIAAgFIASAAIAAATQgEAFgIAEQgHADgJAAQgGAAgGgCg");
	this.shape_3.setTransform(11.5,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAFAnIAAgPIAEAAIAAgTIgRAAIAAATIAEAAIAAAPIgcAAIAAgPIAFAAIAAgvIgFAAIAAgPIAcAAIAAAPIgEAAIAAARIARAAIAAgRIgEAAIAAgPIAcAAIAAAPIgFAAIAAAvIAFAAIAAAPg");
	this.shape_4.setTransform(3.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAFAnIAAgPIAFAAIgCgKIgSAAIgCAKIAFAAIAAAPIgaAAIAAgPIAEAAIAMgvIgEAAIAAgPIAqAAIAAAPIgDAAIAMAvIAEAAIAAAPgAgHAAIAMAAIgFgXIgBAAg");
	this.shape_5.setTransform(-4.9,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAnIAAgPIAGAAIAAgvIgEAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABIgBADIAAAIIgPAAIAAgbIBDAAIAAAbIgPAAIAAgIIgBgDQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAIgEAAIAAAvIAGAAIAAAPg");
	this.shape_6.setTransform(-12.7,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAGAnIAAgPIAEAAIAAgYIgTAWIAAACIAEAAIAAAPIgcAAIAAgPIAFAAIAAgvIgFAAIAAgPIAcAAIAAAPIgEAAIAAAYIATgWIAAgCIgEAAIAAgPIAcAAIAAAPIgFAAIAAAvIAFAAIAAAPg");
	this.shape_7.setTransform(-21.1,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAnIAAgPIAFAAIAAgvIgFAAIAAgPIAgAAQAOAAAGAGQAHAFAAAPQAAAGgBAFQgCADgEADQgDADgFACQgFABgHAAIgIAAIAAANIAFAAIAAAPgAgFgCIAFAAQAFAAADgCQACgCABgGQgBgIgCgBQgDgCgFAAIgFAAg");
	this.shape_8.setTransform(-29.2,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAnIAAgPIAEAAIAAgvIgEAAIAAgPIA4AAIAAAbIgPAAIAAgEQAAgGgCgBQgBgBgGAAIgIAAIAAAPIAIAAQANAAAHAGQAHAEAAAMQAAANgHAGQgHAGgNAAgAgFAYIAFAAQAFABADgDQACgDAAgFQAAgFgCgDQgDgCgFAAIgFAAg");
	this.shape_9.setTransform(-37.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.8,-8.2,85.7,16.4);


(lib.Symbol65copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAxBkIAAglIAMAAIAAh9IgMAAIAAglIBHAAIAAAlIgKAAIAAB9IAKAAIAAAlgAh4BkIAAglIAMAAIAAh9IgMAAIAAglIBKAAIAAAlIgNAAIAAAjIAZAAQASAAANADQAMADAIAIQAIAIAEAKQAEAMAAASQAAAkgQAPQgQAOgjAAgAg7A/IAKAAQATAAAHgGQAHgGAAgQQAAgPgHgGQgHgGgTAAIgKAAg");
	this.shape.setTransform(28.3,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhMBkIAAglIALAAIAAh9IgLAAIAAglIBTAAQAlAAARAOQAQAPAAAkQAAASgEAMQgDAKgJAIQgIAIgOADQgOAEgSAAIgXAAIAAAiIAOAAIAAAlgAgQgHIANAAQARAAAHgFQAGgFAAgRQAAgRgGgGQgHgFgRAAIgNAAg");
	this.shape_1.setTransform(5.1,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhGBkIAAglIAKAAIAAh9IgKAAIAAglICNAAIAABGIgoAAIAAgNQAAgMgFgEQgEgEgOAAIgSAAIAAB9IAPAAIAAAlg");
	this.shape_2.setTransform(-13,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPBkIAAglIALAAIAAhCIgzA7IAAAHIALAAIAAAlIhHAAIAAglIAKAAIAAh9IgKAAIAAglIBHAAIAAAlIgLAAIAABCIAzg8IAAgGIgLAAIAAglIBHAAIAAAlIgLAAIAAB9IALAAIAAAlg");
	this.shape_3.setTransform(-32.9,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.1,-17.7,90.2,35.5);


(lib.Symbol64 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjAuIAAgRIAEAAIAAg4IgEAAIAAgSIAkAAQARAAAIAGQAIAGAAAOQAAAHgDAFQgDAEgFADQAOAFgBAOQAAAPgIAGQgIAGgRAAgAgHAdIAIAAQAGAAADgDQADgDAAgFQAAgGgDgDQgDgDgHAAIgHAAgAgHgIIAHAAQAFAAAEgCQACgDAAgEQAAgFgCgDQgDgCgGAAIgHAAg");
	this.shape.setTransform(80.1,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAwQgJAAgHgCQgGgCgEgEQgEgEgBgGQgCgHAAgIIAAgdQAAgIACgHQABgGAEgEQAEgEAGgCQAHgCAJAAIAAAAQAKAAAGACQAHACAEAEQAEAEABAGQACAHAAAIIAAAdQAAAIgCAHQgBAGgEAEQgEAEgHACQgGACgKAAgAgIgaQgCADAAAIIAAAfQAAAIACACQADADAFAAIAAAAQAGAAACgDQADgCAAgIIAAgfQAAgIgDgDQgCgCgGAAIAAAAQgFAAgDACg");
	this.shape_1.setTransform(71.4,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADAuIAAgRIAEAAIgRgaIAAAaIAFAAIAAARIghAAIAAgRIAFAAIAAg5IgFAAIAAgRIAhAAIAAARIgFAAIAAAWIARgWIgEAAIAAgRIAiAAIAAARIgFAAIgXAZIAaAgIAEAAIAAARg");
	this.shape_2.setTransform(62.9,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AADAuIAAgRIAGAAIAAgQIgJAAQgSAAgHgHQgIgGAAgQIAAgMIgDAAIAAgRIAfAAIAAARIgEAAIAAAMQAAAIACADQADADAIAAIAFAAIAAgaIgFAAIAAgRIAhAAIAAARIgEAAIAAA5IAEAAIAAARg");
	this.shape_3.setTransform(53.7,8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAAwQgJAAgHgCQgGgCgEgEQgEgEgCgGQgBgHAAgIIAAgdQAAgIABgHQACgGAEgEQAEgEAGgCQAHgCAJAAIAAAAQAKAAAHACQAGACAEAEQAEAEACAGQABAHAAAIIAAAdQAAAIgBAHQgCAGgEAEQgEAEgGACQgHACgKAAgAgIgaQgCADAAAIIAAAfQAAAIACACQADADAFAAIAAAAQAGAAACgDQADgCAAgIIAAgfQAAgIgDgDQgCgCgGAAIAAAAQgFAAgDACg");
	this.shape_4.setTransform(45.5,8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAuQgGgCgEgEQgDgEgCgGQgCgHAAgIIAAgdQAAgJACgGQACgGADgEQAEgEAGgCQAHgCAIAAQAJAAAHACQAGACAEAEQAEAEACAGQABAHAAAIIAAAdQAAAIgBAHQgDAGgEAEQgDAEgHACQgGACgJAAQgIAAgHgCgAgHgZQgCADAAAGIAAAhQAAAGACADQACADAFAAQAFAAADgDQACgDAAgGIAAghQAAgGgCgDQgDgDgFAAQgFAAgCADg");
	this.shape_5.setTransform(33.5,8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZApQgJgHAAgOQAAgQAMgEQgEgDgDgFQgDgFAAgHQAAgOAIgGQAJgHAPAAQAQAAAJAHQAJAGAAAOQAAAHgEAFQgCAFgFADQAMAEAAAQQAAAOgJAHQgJAHgRAAQgQAAgJgHgAgIAJQgCADAAAFQAAAGACADQAEADAEAAQAFAAAEgDQADgDAAgGQAAgFgDgDQgEgDgFAAQgEAAgEADgAgHgaQgDADAAAEQAAAFADADQAEADADAAQAEAAAEgDQADgDAAgFQAAgEgDgDQgDgCgFAAIAAAAQgEAAgDACg");
	this.shape_6.setTransform(25.2,8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAuIAAgRIALAAIAAg0IgBgEIgEgBIAAgRIAaAAIAABKIAKAAIAAARg");
	this.shape_7.setTransform(16.9,8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhBAGIAAgLICDAAIAAALg");
	this.shape_8.setTransform(2.5,9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAuIAAgRIAHAAIAAg5IgFAAIgFABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAABIAAAKIgSAAIAAghIBPAAIAAAhIgRAAIAAgKQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgFgBIgFAAIAAA5IAHAAIAAARg");
	this.shape_9.setTransform(-12.2,8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAGAuIAAgRIAGAAIgDgNIgVAAIgDANIAGAAIAAARIgeAAIAAgRIAEAAIAOg5IgEAAIAAgRIAyAAIAAARIgDAAIAOA5IAEAAIAAARgAgIAAIANAAIgFgcIgCAAg");
	this.shape_10.setTransform(-20.8,8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAuIAAgRIAHAAIAAg5IgFAAIgFABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAABIAAAKIgSAAIAAghIBPAAIAAAhIgRAAIAAgKQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgFgBIgFAAIAAA5IAHAAIAAARg");
	this.shape_11.setTransform(-29.3,8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiAuIAAgRIAFAAIAAg5IgFAAIAAgRIAiAAIAAARIgGAAIAAAQIAJAAQAJAAAGACQAGABAEAEQAEADACAEQABAGAAAIQAAARgHAGQgIAHgRAAgAgGAdIAFAAQAGAAAEgDQADgDAAgHQAAgHgDgDQgEgDgGAAIgFAAg");
	this.shape_12.setTransform(-37.7,8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfAvIgIgCIAAgSIADABIADAAQAEAAABgCQACgBAAgGIAAgwIgIAAIAAgRIBKAAIAAARIgFAAIAAA5IAFAAIAAARIghAAIAAgRIAFAAIAAg5IgSAAIAAAwQAAAIgCAGIgDAIQgDADgDACQgDABgEAAIgHAAg");
	this.shape_13.setTransform(-46.8,8.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAvIgFgCIAAgTIAEABIAEABQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBIAEgHIgZgwIgFAAIAAgRIAjAAIAAARIgFAAIAKAcIALgcIgFAAIAAgRIAfAAIAAARIgGAAIgZA5QgEALgFAEQgGAEgIAAIgFAAg");
	this.shape_14.setTransform(-55.1,8.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAtQgJgCgGgHIAAgYIAWAAIAAAGQAAAFADADQACADAGAAQAFAAADgDQADgCAAgGIgBgFIgCgEIgFgCIgGgBIgFAAIAAgOIAFAAQAGAAADgCQADgDAAgEQAAgGgCgCQgCgDgFAAIgFABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQAAABAAAAIgBAHIgUAAIAAghIAUAAIAAAEIAIgDIAIgBQANAAAHAGQAHAHAAANQAAAIgDAFQgCAFgGADQAIACACAFQADAFAAAKQAAANgJAGQgJAHgQAAQgKAAgIgDg");
	this.shape_15.setTransform(-63.4,8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjAuIAAgRIAFAAIAAg5IgFAAIAAgRIBHAAIAAAfIgWAAIAAgFQAAgFgCgCQgCgCgHAAIgJAAIAAAUIAUAAIAAAOIgUAAIAAAXIAJAAQAHAAACgCQACgCAAgFIAAgIIAWAAIAAAig");
	this.shape_16.setTransform(-71.9,8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgjAuIAAgRIAFAAIAAg5IgFAAIAAgRIAmAAQARAAAIAGQAIAHAAARQAAAIgCAGQgCAEgEADQgEAEgGABQgGACgJAAIgJAAIAAAQIAGAAIAAARgAgGgCIAFAAQAHAAADgDQADgCAAgIQAAgIgDgDQgDgCgHAAIgFAAg");
	this.shape_17.setTransform(-80.3,8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAHA6IAAgSIAFAAIAAgfIgWAcIAAADIAEAAIAAASIghAAIAAgSIAFAAIAAg4IgFAAIAAgSIAhAAIAAASIgEAAIAAAdIAWgbIAAgCIgFAAIAAgSIAhAAIAAASIgFAAIAAA4IAFAAIAAASgAgNgnQgGgEAAgHIAAgHIAMAAIAAAEQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAABQACABAEAAQAFAAACgBQAAgBABAAQAAAAAAgBQAAAAAAAAQABgBAAAAIAAgEIALAAIAAAHQAAAHgFAEQgGADgJAAQgIAAgFgDg");
	this.shape_18.setTransform(93.1,-9.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAXAuIAAgRIAFAAIAAg5IgFAAIAAgRIAhAAIAAARIgFAAIAAA5IAFAAIAAARgAg3AuIAAgRIAFAAIAAg5IgFAAIAAgRIAiAAIAAARIgFAAIAAAQIALAAQAJAAAGACQAEABAEAEQADADACAEQACAGAAAIQAAARgIAGQgHAHgPAAgAgaAdIAEAAQAJAAADgDQAEgDAAgHQAAgHgEgDQgDgDgJAAIgEAAg");
	this.shape_19.setTransform(81.9,-8.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAGAuIAAgRIAFAAIAAgXIgUAAIAAAXIAEAAIAAARIghAAIAAgRIAFAAIAAg5IgFAAIAAgRIAhAAIAAARIgEAAIAAAUIAUAAIAAgUIgFAAIAAgRIAhAAIAAARIgFAAIAAA5IAFAAIAAARg");
	this.shape_20.setTransform(70.8,-8.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAaAuIAAgRIADAAIgSgaIAAAaIAEAAIAAARIgdAAIAAgRIAEAAIAAgaIgSAaIADAAIAAARIgkAAIAAgRIAFAAIAaggIgXgZIgFAAIAAgRIAhAAIAAARIgDAAIASAWIAAgWIgEAAIAAgRIAdAAIAAARIgEAAIAAAWIASgWIgDAAIAAgRIAhAAIAAARIgFAAIgXAZIAaAgIAFAAIAAARg");
	this.shape_21.setTransform(59.7,-8.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAAwQgJAAgHgCQgGgCgEgEQgEgEgCgGQgBgHAAgIIAAgdQAAgIABgHQACgGAEgEQAEgEAGgCQAHgCAJAAIAAAAQAKAAAHACQAGACAEAEQAEAEACAGQABAHAAAIIAAAdQAAAIgBAHQgCAGgEAEQgEAEgGACQgHACgKAAgAgHgaQgDADAAAIIAAAfQAAAIADACQACADAFAAIAAAAQAGAAADgDQACgCAAgIIAAgfQAAgIgCgDQgDgCgGAAIAAAAQgFAAgCACg");
	this.shape_22.setTransform(49,-8.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AARAuIAAgRIAFAAIAAgrIgBAAIgOAtIgMAAIgQgtIAAAAIAAArIAGAAIAAARIgiAAIAAgRIAGAAIAAg5IgGAAIAAgRIAkAAIANAtIAAAAIANgtIAkAAIAAARIgEAAIAAA5IAEAAIAAARg");
	this.shape_23.setTransform(39,-8.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgSAtQgJgCgGgHIAAgYIAWAAIAAAGQAAAFADADQACADAGAAQAFAAADgDQADgCAAgGIgBgFIgCgEIgFgCIgGgBIgFAAIAAgOIAFAAQAGAAADgCQADgDAAgEQAAgGgCgCQgCgDgFAAIgFABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAIgBAHIgUAAIAAghIAUAAIAAAEIAIgDIAIgBQANAAAHAGQAHAHAAANQAAAIgDAFQgCAFgGADQAIACACAFQADAFAAAKQAAANgJAGQgJAHgQAAQgKAAgIgDg");
	this.shape_24.setTransform(29.1,-8.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAAAwQgJAAgGgCQgHgCgEgEQgEgEgBgGQgCgHAAgIIAAgdQAAgIACgHQABgGAEgEQAEgEAHgCQAGgCAJAAIAAAAQAKAAAGACQAHACAEAEQAEAEABAGQACAHAAAIIAAAdQAAAIgCAHQgBAGgEAEQgEAEgHACQgGACgKAAgAgIgaQgCADAAAIIAAAfQAAAIACACQADADAFAAIAAAAQAGAAACgDQADgCAAgIIAAgfQAAgIgDgDQgCgCgGAAIAAAAQgFAAgDACg");
	this.shape_25.setTransform(20.7,-8.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgjAuIAAgRIAEAAIAAg4IgEAAIAAgSIAkAAQARAAAIAGQAIAGAAAOQAAAHgDAFQgDAEgGADQAOAFAAAOQAAAPgIAGQgIAGgRAAgAgHAdIAIAAQAGAAADgDQADgDAAgFQAAgGgDgDQgDgDgHAAIgHAAgAgHgIIAHAAQAFAAAEgCQACgDAAgEQABgFgDgDQgDgCgGAAIgHAAg");
	this.shape_26.setTransform(12.1,-8.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAAAwQgJAAgGgCQgHgCgEgEQgEgEgCgGQgBgHAAgIIAAgdQAAgIABgHQACgGAEgEQAEgEAHgCQAGgCAJAAIAAAAQAKAAAHACQAGACAEAEQAEAEABAGQACAHAAAIIAAAdQAAAIgCAHQgBAGgEAEQgEAEgGACQgHACgKAAgAgHgaQgDADAAAIIAAAfQAAAIADACQACADAFAAIAAAAQAGAAADgDQACgCAAgIIAAgfQAAgIgCgDQgDgCgGAAIAAAAQgFAAgCACg");
	this.shape_27.setTransform(-0.2,-8.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAGAuIAAgRIAFAAIAAgXIgUAAIAAAXIAEAAIAAARIghAAIAAgRIAFAAIAAg5IgFAAIAAgRIAhAAIAAARIgEAAIAAAUIAUAAIAAgUIgFAAIAAgRIAhAAIAAARIgFAAIAAA5IAFAAIAAARg");
	this.shape_28.setTransform(-9.1,-8.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgiAuIAAgRIAFAAIAAg5IgFAAIAAgRIAiAAIAAARIgGAAIAAAQIAJAAQAJAAAGACQAGABAEAEQAEADACAEQABAGAAAIQAAARgHAGQgIAHgRAAgAgGAdIAFAAQAGAAAEgDQADgDAAgHQAAgHgDgDQgEgDgGAAIgFAAg");
	this.shape_29.setTransform(-17.8,-8.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgfAvIgIgCIAAgSIADABIADAAQAEAAABgCQACgBAAgGIAAgwIgIAAIAAgRIBKAAIAAARIgFAAIAAA5IAFAAIAAARIghAAIAAgRIAFAAIAAg5IgSAAIAAAwQAAAIgCAGIgDAIQgDADgDACQgDABgEAAIgHAAg");
	this.shape_30.setTransform(-26.9,-8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAGAuIAAgRIAGAAIgDgNIgVAAIgDANIAGAAIAAARIgeAAIAAgRIAEAAIAOg5IgEAAIAAgRIAyAAIAAARIgDAAIAOA5IAEAAIAAARgAgIAAIANAAIgFgcIgCAAg");
	this.shape_31.setTransform(-35.6,-8.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AARAuIAAgRIAFAAIAAgrIgBAAIgOAtIgMAAIgQgtIAAAAIAAArIAFAAIAAARIghAAIAAgRIAGAAIAAg5IgGAAIAAgRIAkAAIANAtIAAAAIANgtIAkAAIAAARIgEAAIAAA5IAEAAIAAARg");
	this.shape_32.setTransform(-45.5,-8.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAHAuIAAgRIAFAAIAAgdIgXAaIAAADIAFAAIAAARIghAAIAAgRIAFAAIAAg5IgFAAIAAgRIAhAAIAAARIgFAAIAAAdIAXgaIAAgDIgFAAIAAgRIAhAAIAAARIgFAAIAAA5IAFAAIAAARg");
	this.shape_33.setTransform(-56.1,-8.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgOAuQgHgCgEgEQgEgEgBgGQgCgGAAgJIAAgdQAAgSAHgHQAIgIAPAAIAGABIAHADIAAgEIAWAAIAAAjIgWAAIAAgFQAAgFgDgDQgCgDgGAAQgJAAAAAMIAAAgQAAAIACACQADADAEAAQAHAAACgCQACgDAAgHIAAgFIAWAAIAAAWQgFAGgJAEQgJAEgKAAQgIAAgGgCg");
	this.shape_34.setTransform(-65,-8.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AADAuIAAgRIAEAAIgRgaIAAAaIAFAAIAAARIghAAIAAgRIAFAAIAAg5IgFAAIAAgRIAhAAIAAARIgFAAIAAAWIARgWIgEAAIAAgRIAiAAIAAARIgFAAIgXAZIAaAgIAEAAIAAARg");
	this.shape_35.setTransform(-73.4,-8.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAGAuIAAgRIAGAAIgDgNIgVAAIgDANIAGAAIAAARIgeAAIAAgRIAEAAIAOg5IgEAAIAAgRIAyAAIAAARIgDAAIAOA5IAEAAIAAARgAgIAAIANAAIgFgcIgCAAg");
	this.shape_36.setTransform(-82.4,-8.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AARAuIAAgRIAFAAIAAgrIgBAAIgOAtIgMAAIgQgtIAAAAIAAArIAFAAIAAARIghAAIAAgRIAGAAIAAg5IgGAAIAAgRIAkAAIANAtIAAAAIANgtIAkAAIAAARIgEAAIAAA5IAEAAIAAARg");
	this.shape_37.setTransform(-92.3,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#EBBA2C").ss(2,2,0,3).p("AzNjHMAmbAAAIAAGPMgmbAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,-21,248,42);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pDart();
	this.instance.setTransform(-3,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-47,98,48);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.brit();
	this.instance.setTransform(-48,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-4,97,8);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pBottle();
	this.instance.setTransform(-116,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,-172,232,345);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pWineglass();
	this.instance.setTransform(-115,-123);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-123,230,247);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBBA2C").s().p("AtvAJIAAgRIbfAAIAAARg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-1,176,2);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBBA2C").s().p("AglBhIAAgkIAPAAIAAg2IgxhDIgKAAIAAgkIBGAAIAAAkIgHAAIAVAgIAXggIgGAAIAAgkIA+AAIAAAkIgKAAIgxBDIAAA2IAPAAIAAAkg");
	this.shape.setTransform(86.3,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBBA2C").s().p("AhLBhIAAgkIAKAAIAAh2IgKAAIAAgnIBNAAQAkAAAQANQARANAAAdQAAAQgGAJQgGAJgMAGQAdALAAAfQAAAegRANQgRANgjAAgAgQA9IASAAQAOAAAGgGQAGgGAAgMQAAgLgHgGQgFgGgPAAIgRAAgAgQgRIAQAAQAMAAAHgFQAFgGAAgJQAAgLgFgEQgGgFgNAAIgQAAg");
	this.shape_1.setTransform(66.3,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBBA2C").s().p("AgKAWQgFgBgCgDQgDgCgBgFIgBgLIABgLQABgEADgCQACgDAFAAIAKgBIAMABQAEAAADADQACACABAEIABALIgBALQgBAFgCACQgDADgEABIgMAAIgKAAg");
	this.shape_2.setTransform(50.4,7.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EBBA2C").s().p("AglBhIAAglIAOAAIAAh4IgJAAQgJAAgDADQgCADAAAGIAAAVIglAAIAAhFICnAAIAABFIglAAIAAgVQAAgGgDgDQgDgDgIAAIgKAAIAAB4IAPAAIAAAlg");
	this.shape_3.setTransform(34.8,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EBBA2C").s().p("AhKBhIAAgkIALAAIAAh5IgLAAIAAgkICVAAIAABCIguAAIAAgKQAAgMgFgEQgEgEgNAAIgWAAIAAApIAsAAIAAAhIgsAAIAAAvIAWAAQANAAAEgEQAFgEAAgMIAAgPIAuAAIAABHg");
	this.shape_4.setTransform(14.5,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBBA2C").s().p("AAeBhIg6hjIAAA+IANAAIAAAlIhBAAIAAglIALAAIAAh4IgLAAIAAgkIAzAAIA7BjIAAg/IgMAAIAAgkIA/AAIAAAkIgLAAIAACdg");
	this.shape_5.setTransform(-6.2,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EBBA2C").s().p("AAABlQgUAAgOgEQgNgEgIgJQgJgIgDgOQgDgNAAgSIAAg9QAAgSADgNQADgOAJgIQAIgJANgEQAOgEAUAAIABAAQAUAAAOAEQANAEAIAJQAJAIADAOQADANAAASIAAA9QAAASgDANQgDAOgJAIQgIAJgNAEQgOAEgUAAgAgRg2QgFAFAAARIAABBQAAARAFAGQAFAFAMAAIABAAQAMAAAFgFQAFgGAAgRIAAhBQAAgRgFgFQgFgGgMAAIgBAAQgMAAgFAGg");
	this.shape_6.setTransform(-27.1,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EBBA2C").s().p("AAEBhIAAgkIAIAAIgQgoIgPAAIAAAoIAIAAIAAAkIhDAAIAAgkIALAAIAAh5IgLAAIAAgkIBPAAQAiAAARANQARANAAAfQAAATgIAMQgIALgNAGIAcA0IALAAIAAAkgAgTgMIASAAQAMAAAFgGQAGgGAAgLQAAgLgFgHQgGgHgLAAIgTAAg");
	this.shape_7.setTransform(-47.1,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EBBA2C").s().p("AAABlQgUAAgOgEQgNgEgIgJQgJgIgDgOQgDgNAAgSIAAg9QAAgSADgNQADgOAJgIQAIgJANgEQAOgEAUAAIABAAQAUAAAOAEQANAEAIAJQAJAIADAOQADANAAASIAAA9QAAASgDANQgDAOgJAIQgIAJgNAEQgOAEgUAAgAgRg2QgFAFAAARIAABBQAAARAFAGQAFAFAMAAIABAAQAMAAAFgFQAFgGAAgRIAAhBQAAgRgFgFQgFgGgMAAIgBAAQgMAAgFAGg");
	this.shape_8.setTransform(-67.7,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EBBA2C").s().p("AAIBhIAAgkIAHAAIglg3IAAA3IAKAAIAAAkIhFAAIAAgkIALAAIAAh5IgLAAIAAgkIBFAAIAAAkIgKAAIAAAuIAkguIgGAAIAAgkIBFAAIAAAkIgKAAIgwA0IA1BFIAKAAIAAAkg");
	this.shape_9.setTransform(-87.6,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1C1502").s().p("AglBhIAAgkIAPAAIAAg2IgxhDIgKAAIAAgkIBGAAIAAAkIgHAAIAVAgIAXggIgGAAIAAgkIA+AAIAAAkIgKAAIgxBDIAAA2IAPAAIAAAkg");
	this.shape_10.setTransform(86.3,2.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1C1502").s().p("AhLBhIAAgkIAKAAIAAh2IgKAAIAAgnIBNAAQAkAAAQANQARANAAAdQAAAQgGAJQgGAJgMAGQAdALAAAfQAAAegRANQgRANgjAAgAgQA9IASAAQAOAAAGgGQAGgGAAgMQAAgLgHgGQgFgGgPAAIgRAAgAgQgRIAQAAQAMAAAHgFQAFgGAAgJQAAgLgFgEQgGgFgNAAIgQAAg");
	this.shape_11.setTransform(66.3,2.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C1502").s().p("AgKAWQgFgBgCgDQgDgCgBgFIgBgLIABgLQABgEADgCQACgDAFAAIAKgBIAMABQAEAAADADQACACABAEIABALIgBALQgBAFgCACQgDADgEABIgMAAIgKAAg");
	this.shape_12.setTransform(50.4,10.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1C1502").s().p("AglBhIAAglIAOAAIAAh4IgJAAQgJAAgDADQgCADAAAGIAAAVIglAAIAAhFICnAAIAABFIglAAIAAgVQAAgGgDgDQgDgDgIAAIgKAAIAAB4IAPAAIAAAlg");
	this.shape_13.setTransform(34.8,2.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1C1502").s().p("AhKBhIAAgkIALAAIAAh5IgLAAIAAgkICVAAIAABCIguAAIAAgKQAAgMgFgEQgEgEgNAAIgWAAIAAApIAsAAIAAAhIgsAAIAAAvIAWAAQANAAAEgEQAFgEAAgMIAAgPIAuAAIAABHg");
	this.shape_14.setTransform(14.5,2.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1C1502").s().p("AAeBhIg6hjIAAA+IANAAIAAAlIhBAAIAAglIALAAIAAh4IgLAAIAAgkIAzAAIA7BjIAAg/IgMAAIAAgkIA/AAIAAAkIgLAAIAACdg");
	this.shape_15.setTransform(-6.2,2.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1C1502").s().p("AAABlQgUAAgOgEQgNgEgIgJQgJgIgDgOQgDgNAAgSIAAg9QAAgSADgNQADgOAJgIQAIgJANgEQAOgEAUAAIABAAQAUAAAOAEQANAEAIAJQAJAIADAOQADANAAASIAAA9QAAASgDANQgDAOgJAIQgIAJgNAEQgOAEgUAAgAgRg2QgFAFAAARIAABBQAAARAFAGQAFAFAMAAIABAAQAMAAAFgFQAFgGAAgRIAAhBQAAgRgFgFQgFgGgMAAIgBAAQgMAAgFAGg");
	this.shape_16.setTransform(-27.1,2.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1C1502").s().p("AAEBhIAAgkIAIAAIgQgoIgPAAIAAAoIAIAAIAAAkIhDAAIAAgkIALAAIAAh5IgLAAIAAgkIBPAAQAiAAARANQARANAAAfQAAATgIAMQgIALgNAGIAcA0IALAAIAAAkgAgTgMIASAAQAMAAAFgGQAGgGAAgLQAAgLgFgHQgGgHgLAAIgTAAg");
	this.shape_17.setTransform(-47.1,2.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1C1502").s().p("AAABlQgUAAgOgEQgNgEgIgJQgJgIgDgOQgDgNAAgSIAAg9QAAgSADgNQADgOAJgIQAIgJANgEQAOgEAUAAIABAAQAUAAAOAEQANAEAIAJQAJAIADAOQADANAAASIAAA9QAAASgDANQgDAOgJAIQgIAJgNAEQgOAEgUAAgAgRg2QgFAFAAARIAABBQAAARAFAGQAFAFAMAAIABAAQAMAAAFgFQAFgGAAgRIAAhBQAAgRgFgFQgFgGgMAAIgBAAQgMAAgFAGg");
	this.shape_18.setTransform(-67.7,2.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1C1502").s().p("AAIBhIAAgkIAHAAIglg3IAAA3IAKAAIAAAkIhFAAIAAgkIALAAIAAh5IgLAAIAAgkIBFAAIAAAkIgKAAIAAAuIAkguIgGAAIAAgkIBFAAIAAAkIgKAAIgwA0IA1BFIAKAAIAAAkg");
	this.shape_19.setTransform(-87.6,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.3,-17.2,198.7,37.4);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguA9IAAgXIAHAAIAAhLIgHAAIAAgXIBdAAIAAAqIgdAAIAAgHQAAgHgDgDQgCgCgJAAIgNAAIAAAaIAbAAIAAAUIgbAAIAAAdIANAAQAJAAACgCQADgDAAgHIAAgKIAdAAIAAAtg");
	this.shape.setTransform(80.5,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXA9IAAgXIAKAAIAAhLIgHAAQgFAAgCACQgCABAAAFIAAAMIgXAAIAAgrIBpAAIAAArIgXAAIAAgMQAAgFgCgBQgCgCgFAAIgHAAIAABLIAKAAIAAAXg");
	this.shape_1.setTransform(67.5,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJBMIAAgXIAHAAIAAgpIgeAlIAAAEIAGAAIAAAXIgrAAIAAgXIAHAAIAAhLIgHAAIAAgXIArAAIAAAXIgGAAIAAAnIAegkIAAgDIgHAAIAAgXIArAAIAAAXIgGAAIAABLIAGAAIAAAXgAgRg0QgIgFAAgJIAAgIIAPAAIAAADQAAABAAABQAAAAABABQAAAAAAABQABAAAAABQACABAGAAQAHAAACgBQABgBAAAAQABAAAAgBQAAgBAAAAQAAgBAAgBIAAgDIAPAAIAAAIQAAAJgHAFQgHAEgMABQgKgBgHgEg");
	this.shape_2.setTransform(54,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJA9IAAgXIAHAAIgEgRIgcAAIgDARIAHAAIAAAXIgnAAIAAgXIAFAAIAThLIgGAAIAAgXIBCAAIAAAXIgEAAIASBLIAFAAIAAAXgAgLAAIASAAIgHglIgDAAg");
	this.shape_3.setTransform(40.5,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTA9QgJgDgFgFQgFgFgCgJQgDgIAAgMIAAglQAAgYAKgKQAKgKAUAAIAIABIAKAEIAAgFIAdAAIAAAtIgdAAIAAgGQAAgHgEgDQgDgEgIAAQgMAAAAAPIAAArQAAALADADQADADAGAAQAJAAADgDQADgDAAgJIAAgHIAdAAIAAAcQgHAJgMAFQgMAFgNAAQgKAAgJgCg");
	this.shape_4.setTransform(28,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAJA9IAAgXIAHAAIgEgRIgcAAIgDARIAHAAIAAAXIgnAAIAAgXIAFAAIAThLIgGAAIAAgXIBCAAIAAAXIgEAAIASBLIAFAAIAAAXgAgLAAIASAAIgHglIgDAAg");
	this.shape_5.setTransform(9.1,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAIA9IAAgXIAGAAIAAgdIgbAAIAAAdIAHAAIAAAXIgsAAIAAgXIAHAAIAAhLIgHAAIAAgXIAsAAIAAAXIgHAAIAAAbIAbAAIAAgbIgGAAIAAgXIArAAIAAAXIgHAAIAABLIAHAAIAAAXg");
	this.shape_6.setTransform(-4.2,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAeA9IAAgXIAHAAIAAhLIgHAAIAAgXIArAAIAAAXIgHAAIAABLIAHAAIAAAXgAhIA9IAAgXIAHAAIAAhLIgHAAIAAgXIAsAAIAAAXIgHAAIAAAVIAOAAQAMAAAIACQAGACAFAFQAFAFADAFQACAHAAALQAAAWgKAJQgKAJgVAAgAgjAmIAGAAQALAAAFgEQAEgDAAgKQAAgJgEgEQgFgDgLAAIgGAAg");
	this.shape_7.setTransform(-26.5,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYA8QgLgEgJgJIAAgfIAdAAIAAAHQAAAHAEAEQADAEAIAAQAGAAAEgDQAEgDAAgIIgBgHQAAgDgCgCQgCgCgEAAIgJgBIgHAAIAAgTIAHAAQAIAAAFgEQAEgDAAgGQAAgHgEgEQgDgDgGAAIgHABQgDAAgBADQgCACgBADIgBAKIgaAAIAAgsIAaAAIAAAFIALgEIAKgBQASAAAJAJQAJAIAAARQAAALgDAGQgEAGgHAFQAKACADAHQAEAHAAAMQAAASgMAJQgMAIgVAAQgNAAgLgDg");
	this.shape_8.setTransform(-41.9,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAJA9IAAgXIAHAAIAAgnIgeAjIAAAEIAGAAIAAAXIgrAAIAAgXIAHAAIAAhLIgHAAIAAgXIArAAIAAAXIgGAAIAAAnIAegjIAAgEIgHAAIAAgXIArAAIAAAXIgGAAIAABLIAGAAIAAAXg");
	this.shape_9.setTransform(-55.2,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguA9IAAgXIAHAAIAAhLIgHAAIAAgXIAyAAQAWAAALAJQAKAJAAAWQAAALgDAHQgCAGgFAEQgFAFgIACQgJACgLAAIgNAAIAAAVIAIAAIAAAXgAgJgDIAIAAQAJAAAFgEQAEgDAAgKQAAgKgEgEQgFgDgJAAIgIAAg");
	this.shape_10.setTransform(-68.4,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAIA9IAAgXIAGAAIAAhLIgbAAIAABLIAHAAIAAAXIgsAAIAAgXIAHAAIAAhLIgHAAIAAgXIBlAAIAAAXIgHAAIAABLIAHAAIAAAXg");
	this.shape_11.setTransform(-81.9,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.9,-11.5,179.9,23.1);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguA9IAAgXIAHAAIAAhLIgHAAIAAgXIBdAAIAAAqIgdAAIAAgHQAAgHgDgDQgCgCgJAAIgNAAIAAAaIAbAAIAAAUIgbAAIAAAdIANAAQAJAAACgCQADgDAAgHIAAgKIAdAAIAAAtg");
	this.shape.setTransform(80.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXA9IAAgXIAKAAIAAhLIgHAAQgFAAgCACQgCABAAAFIAAAMIgXAAIAAgrIBpAAIAAArIgXAAIAAgMQAAgFgCgBQgCgCgFAAIgHAAIAABLIAKAAIAAAXg");
	this.shape_1.setTransform(67.3,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJBMIAAgXIAHAAIAAgpIgeAlIAAAEIAGAAIAAAXIgrAAIAAgXIAHAAIAAhLIgHAAIAAgXIArAAIAAAXIgGAAIAAAnIAegkIAAgDIgHAAIAAgXIArAAIAAAXIgGAAIAABLIAGAAIAAAXgAgRg0QgIgFAAgJIAAgIIAPAAIAAADQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQACABAGAAQAHAAACgBQABgBAAAAQAAAAABgBQAAgBAAAAQAAgBAAgBIAAgDIAPAAIAAAIQAAAJgHAFQgHAEgMABQgKgBgHgEg");
	this.shape_2.setTransform(53.7,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJA9IAAgXIAHAAIgEgRIgcAAIgDARIAHAAIAAAXIgnAAIAAgXIAFAAIAThLIgGAAIAAgXIBCAAIAAAXIgEAAIASBLIAFAAIAAAXgAgLAAIASAAIgHglIgDAAg");
	this.shape_3.setTransform(40.1,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvA9IAAgXIAHAAIAAhKIgHAAIAAgYIAxAAQAWAAAKAIQALAJAAASQAAAKgEAFQgEAGgHAEQASAGAAAUQAAASgLAJQgKAIgXAAgAgKAmIALAAQAJAAAEgEQAEgDAAgIQAAgGgEgEQgEgEgJAAIgLAAgAgKgKIAKAAQAIAAAEgEQAEgDAAgGQAAgGgEgDQgEgEgIAAIgKAAg");
	this.shape_4.setTransform(27.2,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeA9IAAgXIAGAAIAAhLIgGAAIAAgXIArAAIAAAXIgGAAIAABLIAGAAIAAAXgAhIA9IAAgXIAHAAIAAhLIgHAAIAAgXIAtAAIAAAXIgIAAIAAAVIAPAAQALAAAIACQAGACAFAFQAFAFACAFQACAHAAALQAAAWgJAJQgKAJgUAAgAgjAmIAGAAQALAAAEgEQAFgDAAgKQAAgJgFgEQgEgDgLAAIgGAAg");
	this.shape_5.setTransform(11.4,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguA9IAAgXIAHAAIAAhLIgHAAIAAgXIAyAAQAWAAALAJQAKAJAAAWQAAALgDAHQgCAGgFAEQgFAFgIACQgJACgLAAIgNAAIAAAVIAIAAIAAAXgAgJgDIAIAAQAJAAAFgEQAEgDAAgKQAAgKgEgEQgFgDgJAAIgIAAg");
	this.shape_6.setTransform(-4,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqA9IAAgXIAHAAIAAhLIgHAAIAAgXIBVAAIAAArIgYAAIAAgIQAAgHgDgDQgDgCgIAAIgKAAIAABLIAIAAIAAAXg");
	this.shape_7.setTransform(-16.3,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAJA9IAAgXIAHAAIAAgnIgeAjIAAAEIAGAAIAAAXIgrAAIAAgXIAHAAIAAhLIgHAAIAAgXIArAAIAAAXIgGAAIAAAnIAegjIAAgEIgHAAIAAgXIArAAIAAAXIgGAAIAABLIAGAAIAAAXg");
	this.shape_8.setTransform(-29.6,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAeA9IAAgXIAGAAIAAhLIgGAAIAAgXIArAAIAAAXIgHAAIAABLIAHAAIAAAXgAhIA9IAAgXIAHAAIAAhLIgHAAIAAgXIAtAAIAAAXIgIAAIAAAVIAPAAQALAAAIACQAGACAFAFQAFAFACAFQACAHAAALQAAAWgJAJQgKAJgUAAgAgjAmIAGAAQALAAAEgEQAFgDAAgKQAAgJgFgEQgEgDgLAAIgGAAg");
	this.shape_9.setTransform(-45.9,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvA9IAAgXIAHAAIAAhKIgHAAIAAgYIAxAAQAWAAAKAIQALAJAAASQAAAKgEAFQgEAGgHAEQASAGAAAUQAAASgLAJQgKAIgXAAgAgKAmIALAAQAJAAAEgEQAEgDAAgIQAAgGgEgEQgEgEgJAAIgLAAgAgKgKIAKAAQAIAAAEgEQAEgDAAgGQAAgGgEgDQgEgEgIAAIgKAAg");
	this.shape_10.setTransform(-61.6,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAJA9IAAgXIAHAAIAAgnIgeAjIAAAEIAGAAIAAAXIgrAAIAAgXIAHAAIAAhLIgHAAIAAgXIArAAIAAAXIgGAAIAAAnIAegjIAAgEIgHAAIAAgXIArAAIAAAXIgGAAIAABLIAGAAIAAAXg");
	this.shape_11.setTransform(-81.7,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.9,-11.5,179.9,23.1);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsA5IAAgVIAGAAIAAhGIgGAAIAAgWIAtAAQAVAAAKAHQAKAIAAARQAAAKgEAFQgDAGgHADQARAGAAASQAAARgKAIQgKAIgVAAgAgJAkIAKAAQAJgBADgDQAEgEAAgGQAAgGgFgFQgDgDgIAAIgKAAgAgJgJIAJAAQAHAAAEgEQADgDAAgGQAAgFgDgEQgEgDgHAAIgJAAg");
	this.shape.setTransform(82.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAA8QgLAAgIgDQgJgCgEgGQgFgEgCgJQgCgHAAgLIAAgjQAAgLACgIQACgHAFgGQAEgFAJgCQAIgCALgBIABAAQAMABAHACQAIACAGAFQAEAGACAHQACAIAAALIAAAjQAAALgCAHQgCAJgEAEQgGAGgIACQgHADgMAAgAgJggQgEADAAALIAAAlQAAAKAEAEQADADAGAAIABAAQAHAAADgDQADgEAAgKIAAglQAAgLgDgDQgDgDgHAAIgBAAQgGAAgDADg");
	this.shape_1.setTransform(70.9,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrA5IAAgVIAHAAIAAhHIgHAAIAAgVIBTAAIAAAoIgXAAIAAgIQAAgGgCgDQgDgCgHAAIgNAAIAAAWIALAAQAUABALAIQAKAHAAASQAAASgKAJQgLAJgUAAgAgIAkIAHAAQAKgBADgDQADgDABgIQgBgIgDgDQgEgDgJAAIgHAAg");
	this.shape_2.setTransform(59.9,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAIA5IAAgVIAHAAIgEgRIgaAAIgDARIAGAAIAAAVIgkAAIAAgVIAFAAIARhHIgFAAIAAgVIA+AAIAAAVIgEAAIARBHIAFAAIAAAVgAgKAAIARAAIgHgjIgDAAg");
	this.shape_3.setTransform(48.7,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAHA5IAAgVIAGAAIAAhHIgZAAIAABHIAGAAIAAAVIgpAAIAAgVIAHAAIAAhHIgHAAIAAgVIBfAAIAAAVIgGAAIAABHIAGAAIAAAVg");
	this.shape_4.setTransform(37.1,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAHA5IAAgVIAEAAIgMgTIgNATIAEAAIAAAVIglAAIAAgVIAGAAIAbgkIgYgjIgHAAIAAgVIApAAIAAAVIgDAAIAJAQIALgQIgEAAIAAgVIAkAAIAAAVIgFAAIgZAiIAbAlIAGAAIAAAVg");
	this.shape_5.setTransform(20.6,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAJA5IAAgVIAGAAIAAglIgcAhIAAAEIAGAAIAAAVIgpAAIAAgVIAGAAIAAhHIgGAAIAAgVIApAAIAAAVIgGAAIAAAlIAcghIAAgEIgGAAIAAgVIAoAAIAAAVIgGAAIAABHIAGAAIAAAVg");
	this.shape_6.setTransform(8.7,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAEA5IAAgVIAFAAIgWghIAAAhIAHAAIAAAVIgqAAIAAgVIAHAAIAAhHIgHAAIAAgVIAqAAIAAAVIgHAAIAAAbIAWgbIgFAAIAAgVIAqAAIAAAVIgHAAIgcAeIAfApIAGAAIAAAVg");
	this.shape_7.setTransform(-3,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSA5QgIgCgEgGQgFgFgDgHQgCgIAAgLIAAgjQAAgWAJgKQAKgKASAAIAIACIAJAEIAAgGIAbAAIAAArIgbAAIAAgGQAAgGgDgEQgEgDgHAAQgMAAAAAOIAAAoQAAAKADAEQAEADAFAAQAJgBACgCQADgDAAgJIAAgGIAbAAIAAAbQgGAIgLAFQgMAEgLABQgKAAgJgDg");
	this.shape_8.setTransform(-14.4,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAHA5IAAgVIAGAAIAAgcIgZAAIAAAcIAGAAIAAAVIgpAAIAAgVIAHAAIAAhHIgHAAIAAgVIApAAIAAAVIgGAAIAAAaIAZAAIAAgaIgGAAIAAgVIApAAIAAAVIgGAAIAABHIAGAAIAAAVg");
	this.shape_9.setTransform(-25.9,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAIA5IAAgVIAHAAIgEgRIgaAAIgDARIAGAAIAAAVIgkAAIAAgVIAFAAIARhHIgFAAIAAgVIA+AAIAAAVIgEAAIARBHIAFAAIAAAVgAgKAAIARAAIgHgjIgDAAg");
	this.shape_10.setTransform(-37.5,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWA5IAAgVIAJAAIAAhHIgGAAQgEAAgCABQgCACAAAEIAAAMIgWAAIAAgoIBiAAIAAAoIgVAAIAAgMQAAgEgCgCQgCgBgEAAIgHAAIAABHIAJAAIAAAVg");
	this.shape_11.setTransform(-48.5,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAJA5IAAgVIAGAAIAAglIgcAhIAAAEIAGAAIAAAVIgpAAIAAgVIAGAAIAAhHIgGAAIAAgVIApAAIAAAVIgGAAIAAAlIAcghIAAgEIgGAAIAAgVIAoAAIAAAVIgGAAIAABHIAGAAIAAAVg");
	this.shape_12.setTransform(-60.3,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrA5IAAgVIAHAAIAAhHIgHAAIAAgVIAuAAQAWAAAKAIQAJAJAAAUQAAAKgDAHQgCAFgEAFQgGAEgHACQgIACgLAAIgLAAIAAAUIAIAAIAAAVgAgIgDIAHAAQAJAAAEgDQAEgEAAgJQAAgKgEgDQgEgDgJAAIgHAAg");
	this.shape_13.setTransform(-71.7,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgrA5IAAgVIAGAAIAAhHIgGAAIAAgVIBTAAIAAAoIgXAAIAAgIQAAgGgDgDQgCgCgHAAIgNAAIAAAWIAMAAQATABAKAIQALAHAAASQAAASgLAJQgKAJgTAAgAgIAkIAHAAQAJgBAEgDQADgDAAgIQAAgIgDgDQgEgDgJAAIgHAAg");
	this.shape_14.setTransform(-82.9,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.3,-11,180.6,22);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhBEIAAgaIAIAAIAAhTIgIAAIAAgaIAxAAIAAAaIgIAAIAABTIAIAAIAAAagAhRBEIAAgaIAIAAIAAhTIgIAAIAAgaIAyAAIAAAaIgIAAIAAAXIAQAAQANAAAJACQAHADAFAFQAGAFACAHQADAIAAAMQAAAYgLAKQgLAKgXAAgAgnAqIAHAAQAMAAAFgDQAFgFAAgKQAAgKgFgFQgFgEgMAAIgHAAg");
	this.shape.setTransform(77.9,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzBEIAAgaIAHAAIAAhTIgHAAIAAgaIA4AAQAZAAALAKQALAKAAAYQAAANgCAIQgDAGgGAFQgGAGgJACQgJADgMAAIgPAAIAAAWIAJAAIAAAagAgKgEIAJAAQALAAAEgEQAFgDAAgLQAAgMgFgEQgEgDgLAAIgJAAg");
	this.shape_1.setTransform(62.2,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvBEIAAgaIAHAAIAAhTIgHAAIAAgaIBfAAIAAAwIgbAAIAAgJQAAgIgDgCQgDgDgJAAIgMAAIAABTIAKAAIAAAag");
	this.shape_2.setTransform(50,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AALBEIAAgaIAHAAIAAgrIgiAnIAAAEIAHAAIAAAaIgwAAIAAgaIAHAAIAAhTIgHAAIAAgaIAwAAIAAAaIgHAAIAAAsIAigoIAAgEIgHAAIAAgaIAvAAIAAAaIgHAAIAABTIAHAAIAAAag");
	this.shape_3.setTransform(36.5,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1BEIAAgaIAIAAIAAhSIgIAAIAAgbIA3AAQAYAAAMAKQAMAIAAAVQAAAKgFAHQgDAGgJAFQAVAHgBAWQAAAVgMAJQgMAJgYAAgAgLAqIANAAQAJAAAEgDQAEgFABgIQAAgHgFgFQgEgEgKAAIgMAAgAgLgLIALAAQAJAAAEgFQAFgDgBgHQABgHgFgEQgEgDgJAAIgLAAg");
	this.shape_4.setTransform(17,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0BEIAAgaIAIAAIAAhTIgIAAIAAgaIBoAAIAAAvIggAAIAAgIQAAgIgDgCQgDgDgJAAIgPAAIAAAdIAeAAIAAAWIgeAAIAAAgIAPAAQAJABADgDQADgDAAgIIAAgLIAgAAIAAAyg");
	this.shape_5.setTransform(-2,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaBEIAAgaIAKAAIAAhTIgHAAQgFAAgCACQgDABAAAFIAAAOIgZAAIAAgwIB1AAIAAAwIgaAAIAAgOQAAgFgCgBQgDgCgFAAIgHAAIAABTIAKAAIAAAag");
	this.shape_6.setTransform(-15.2,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAKBUIAAgYIAHAAIAAguIghAoIAAAGIAHAAIAAAYIgwAAIAAgYIAHAAIAAhVIgHAAIAAgaIAwAAIAAAaIgHAAIAAAsIAhgnIAAgFIgHAAIAAgaIAxAAIAAAaIgIAAIAABVIAIAAIAAAYgAgUg6QgIgGAAgKIAAgJIARAAIAAAEQAAABAAABQAAAAAAABQABAAAAABQABAAAAABQACACAHAAQAIgBACgBQABgBAAAAQABgBAAAAQAAgBAAAAQABgBAAgBIAAgEIARAAIAAAJQgBAKgHAGQgJAFgNAAQgLAAgJgFg");
	this.shape_7.setTransform(-29,-1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAKBEIAAgaIAIAAIgEgSIggAAIgEASIAIAAIAAAaIgsAAIAAgaIAGAAIAVhTIgGAAIAAgaIBKAAIAAAaIgFAAIAUBTIAHAAIAAAagAgNAAIAVAAIgIgpIgDAAg");
	this.shape_8.setTransform(-42.8,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzBEIAAgaIAHAAIAAhTIgHAAIAAgaIA4AAQAZAAALAKQALAKAAAYQAAANgCAIQgDAGgGAFQgGAGgJACQgJADgMAAIgPAAIAAAWIAJAAIAAAagAgKgEIAJAAQALAAAEgEQAFgDAAgLQAAgMgFgEQgEgDgLAAIgJAAg");
	this.shape_9.setTransform(-55.4,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvBEIAAgaIAHAAIAAhTIgHAAIAAgaIBfAAIAAAwIgbAAIAAgJQAAgIgDgCQgDgDgJAAIgMAAIAABTIAKAAIAAAag");
	this.shape_10.setTransform(-67.6,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAKBEIAAgaIAIAAIAAgrIgiAnIAAAEIAHAAIAAAaIgxAAIAAgaIAIAAIAAhTIgIAAIAAgaIAxAAIAAAaIgHAAIAAAsIAigoIAAgEIgIAAIAAgaIAwAAIAAAaIgHAAIAABTIAHAAIAAAag");
	this.shape_11.setTransform(-81.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-12.7,180,25.4);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.table();
	this.instance.setTransform(-320,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-60,640,120);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#090300","rgba(13,4,0,0.831)","rgba(17,6,1,0.663)","rgba(25,9,2,0.341)","rgba(34,14,4,0)"],[0,0.333,0.51,0.765,0.961],-160,0,160,0).s().p("A4/fPMAAAg+dMAx/AAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-200,320,400);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.298,1],0,-37.4,0,37.5).s().p("A3bGPIAAsdMAu3AAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-40,300,80);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.targetShadow();
	this.instance.setTransform(-156.5,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.5,-159.5,313,319);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.board();
	this.instance.setTransform(-162.5,-169.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.5,-169.5,325,339);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#57DB22").s().p("AgwAxQgVgVAAgcQAAgbAVgVQAVgVAbAAQAcAAAVAVQAVAVAAAbQAAAcgVAVQgVAVgcAAQgbAAgVgVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7,14,14);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#237700").s().p("AhwBxQgugvgBhCQABhBAugvQAvgvBBAAQBCAAAvAvQAuAvABBBQgBBCguAvQgvAuhCABQhBgBgvgug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai4o5QC4gmC5AWIiMSbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-59.4,37.2,118.9);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#237700").s().p("Ah2giQB3gZB2APIgLBVQhogNhpAWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-5.1,23.9,10.2);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ai4gcQC4gmC5AWIgJBSQirgVitAkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-5.3,37.2,10.7);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shadow();
	this.instance.setTransform(-37,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,0,74,236);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-2,-4,4,8,2);
	this.shape.setTransform(0,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAheQApAAAdAdQAeAdAAAoIAACgQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpIAAigQAAgoAdgdQAegdAoAAgAAAhiQAAgXgJgSQgMgUgGgJQgWgkAXg7");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-27.4,22,54.9);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAPIgEgDQgCgBgBgDIgBgIIABgHQABgDACgCQAAAAAAAAQABgBAAAAQABAAABAAQAAAAABgBIAHgBIAIABIAFACQAAABABAAQAAABAAAAQAAABABABQAAAAAAABIABAHIgBAIIgCAEIgFADIgIABIgHgBg");
	this.shape.setTransform(111.8,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKBDIAAgZIAHAAIAAgrIghAmIAAAFIAHAAIAAAZIgvAAIAAgZIAHAAIAAhTIgHAAIAAgZIAvAAIAAAZIgHAAIAAArIAhgnIAAgEIgHAAIAAgZIAwAAIAAAZIgIAAIAABTIAIAAIAAAZg");
	this.shape_1.setTransform(103.2,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAFBDIAAgZIAFAAIgZgmIAAAmIAHAAIAAAZIgwAAIAAgZIAIAAIAAhTIgIAAIAAgZIAwAAIAAAZIgHAAIAAAfIAZgfIgFAAIAAgZIAwAAIAAAZIgHAAIghAkIAlAvIAHAAIAAAZg");
	this.shape_2.setTransform(88.7,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhPBDIAAgZIAHAAIAAhTIgHAAIAAgZIAxAAIAAAZIgJAAIAABTIAbAAIAAhWIAZAAIAABWIAbAAIAAhTIgIAAIAAgZIAwAAIAAAZIgHAAIAABTIAHAAIAAAZg");
	this.shape_3.setTransform(71.2,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhBDIAAgZIAHAAIAAhTIgHAAIAAgZIAvAAIAAAZIgHAAIAABTIAHAAIAAAZgAhPBDIAAgZIAHAAIAAhTIgHAAIAAgZIAxAAIAAAZIgJAAIAAAXIAQAAQANAAAJACQAHADAFAFQAGAFACAGQACAIAAAMQAAAYgKAKQgLAKgXAAgAgnAqIAHAAQAMAAAFgEQAFgEAAgLQAAgKgFgEQgFgEgMAAIgHAAg");
	this.shape_4.setTransform(51.3,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYBDIAAgZIAIAAIAAg+IgBAAIgWBAIgRAAIgWhAIgBAAIAAA+IAIAAIAAAZIgvAAIAAgZIAHAAIAAhTIgHAAIAAgZIA0AAIASBCIABAAIAThCIAzAAIAAAZIgHAAIAABTIAHAAIAAAZg");
	this.shape_5.setTransform(32.4,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKBDQgKgDgDgGQgFgGgDgJQgCgJAAgNIAAgMIgbAAIAAAhIAHAAIAAAZIgvAAIAAgZIAHAAIAAhTIgHAAIAAgZIAvAAIAAAZIgHAAIAAAcIAbAAIAAgHQAAgNADgJQACgJAFgGQAEgGAJgDQAJgDAOAAQAOAAAKADQAJADAFAGQAGAGACAJQACAJAAANIAAApQAAANgCAJQgDAJgFAGQgGAGgJADQgJADgOAAQgOAAgJgDgAAVglQgDAEAAAJIAAAwQAAAJADAFQAEAEAIAAQAJAAADgEQADgFAAgJIAAgwQAAgJgDgEQgDgEgJAAQgIAAgEAEg");
	this.shape_6.setTransform(6.7,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyBDIAAgZIAIAAIAAhTIgIAAIAAgZIAxAAIAAAZIgIAAIAAAXIAOAAQANAAAIACQAJADAGAFQAFAFADAGQACAIAAAMQAAAYgLAKQgKAKgZAAgAgJAqIAHAAQAKAAAFgEQAFgEAAgLQAAgKgFgEQgFgEgKAAIgHAAg");
	this.shape_7.setTransform(-9.9,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA5BOIAAgOQAAgEgCgCQgCgCgFAAIiBAAIAAgZIAIAAIAAhTIgIAAIAAgZIAxAAIAAAZIgIAAIAABTIAbAAIAAhWIAZAAIAABWIAbAAIAAhTIgJAAIAAgZIAwAAIAAAZIgHAAIAABTIALAAIAAAvg");
	this.shape_8.setTransform(-26.8,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAABGQgNAAgKgDQgJgDgGgGQgGgGgCgJQgCgJAAgNIAAgpQAAgNACgJQACgJAGgGQAGgGAJgDQAKgDANAAIAAAAQAOAAAKADQAJADAGAGQAGAGACAJQACAJAAANIAAApQAAANgCAJQgCAJgGAGQgGAGgJADQgKADgOAAgAgMglQgDADAAAMIAAAtQAAAMADADQAEAEAIAAIAAAAQAJAAAEgEQADgDAAgMIAAgtQAAgMgDgDQgEgEgJAAIAAAAQgIAAgEAEg");
	this.shape_9.setTransform(-43.8,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAYBDIAAgZIAIAAIAAg+IgBAAIgWBAIgRAAIgWhAIgBAAIAAA+IAIAAIAAAZIgvAAIAAgZIAHAAIAAhTIgHAAIAAgZIA0AAIASBCIABAAIAThCIAzAAIAAAZIgHAAIAABTIAHAAIAAAZg");
	this.shape_10.setTransform(-59.7,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAABGQgNAAgKgDQgJgDgGgGQgGgGgCgJQgCgJAAgNIAAgpQAAgNACgJQACgJAGgGQAGgGAJgDQAKgDANAAIAAAAQAOAAAKADQAJADAGAGQAGAGACAJQACAJAAANIAAApQAAANgCAJQgCAJgGAGQgGAGgJADQgKADgOAAgAgMglQgDADAAAMIAAAtQAAAMADADQAEAEAIAAIAAAAQAJAAAEgEQADgDAAgMIAAgtQAAgMgDgDQgEgEgJAAIAAAAQgIAAgEAEg");
	this.shape_11.setTransform(-75.6,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAIBDIAAgZIAHAAIAAhTIgdAAIAABTIAHAAIAAAZIgwAAIAAgZIAHAAIAAhTIgHAAIAAgZIBvAAIAAAZIgIAAIAABTIAIAAIAAAZg");
	this.shape_12.setTransform(-89.9,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVBDQgJgDgGgGQgGgGgCgJQgDgJAAgNIAAgpQAAgaALgLQALgMAVAAQAEAAAGACQAHACADADIABgHIAfAAIAAAyIggAAIAAgGQAAgIgEgEQgDgEgJAAQgOAAAAARIAAAvQAAAMAEADQADAEAHAAQAKAAADgDQADgEAAgKIAAgHIAgAAIAAAeQgHAKgNAGQgNAGgPAAQgLAAgKgDg");
	this.shape_13.setTransform(-110.7,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.6,-12.6,237.2,25.1);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpA2IAAgUIAGAAIAAhDIgGAAIAAgUIBTAAIAAAlIgaAAIAAgGQAAgGgCgDQgDgCgIAAIgLAAIAAAXIAYAAIAAASIgYAAIAAAaIALAAQAIAAADgCQACgDAAgGIAAgJIAaAAIAAAog");
	this.shape.setTransform(108.5,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUA2IAAgUIAIAAIAAhDIgFAAQgFABgBABQgCABAAAEIAAALIgUAAIAAgmIBbAAIAAAmIgUAAIAAgLQAAgEgCgBQgBgBgFgBIgGAAIAABDIAJAAIAAAUg");
	this.shape_1.setTransform(97,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAIBDIAAgUIAGAAIAAgkIgbAgIAAAEIAGAAIAAAUIgmAAIAAgUIAGAAIAAhCIgGAAIAAgUIAmAAIAAAUIgGAAIAAAiIAbgfIAAgDIgGAAIAAgUIAmAAIAAAUIgGAAIAABCIAGAAIAAAUgAgPguQgHgEAAgIIAAgIIANAAIAAAEQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQACABAFAAQAGAAACgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAAgEIANAAIAAAIQAAAIgGAEQgHAFgKAAQgJAAgGgFg");
	this.shape_2.setTransform(85.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAIA2IAAgUIAGAAIgEgQIgYAAIgDAQIAHAAIAAAUIgjAAIAAgUIAEAAIARhDIgEAAIAAgUIA5AAIAAAUIgEAAIARBDIAEAAIAAAUgAgJAAIAQAAIgHghIgCAAg");
	this.shape_3.setTransform(73.3,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRA1QgHgCgFgFQgFgEgCgIQgBgHAAgKIAAghQAAgVAIgJQAIgJATAAIAHABQAFACADACIAAgFIAaAAIAAAoIgaAAIAAgFQAAgGgDgEQgDgDgHAAQgLAAAAAOIAAAlQAAAJADADQADADAFAAQAHAAADgCQADgDAAgIIAAgGIAaAAIAAAZQgGAIgLAEQgLAFgLAAQgJAAgIgDg");
	this.shape_4.setTransform(62.3,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAA4QgKAAgIgDQgHgCgFgFQgEgEgCgIQgCgHgBgKIAAghQABgKACgIQACgHAEgFQAFgFAHgCQAIgCAKAAIAAAAQALAAAIACQAIACAEAFQAEAFACAHQACAIAAAKIAAAhQAAAKgCAHQgCAIgEAEQgEAFgIACQgIADgLAAgAgJgeQgDADAAAKIAAAjQAAAJADADQACADAHAAIAAAAQAHAAADgDQACgDAAgJIAAgjQAAgKgCgDQgDgDgHAAIAAAAQgHAAgCADg");
	this.shape_5.setTransform(51.2,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoA2IAAgUIAGAAIAAhDIgGAAIAAgUIArAAQAUAAAJAJQAJAHAAAUQAAAJgCAHQgCAEgFAFQgEADgHADQgHACgLAAIgLAAIAAASIAHAAIAAAUgAgIgDIAHAAQAIAAAEgDQAEgCAAgJQAAgKgEgCQgEgEgIAAIgHAAg");
	this.shape_6.setTransform(40.2,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoA2IAAgUIAGAAIAAhDIgGAAIAAgUIBOAAIAAAmIgWAAIAAgHQAAgGgCgDQgDgCgHAAIgMAAIAAAWIALAAQATAAAJAHQAKAHAAAQQAAASgKAIQgJAIgTABgAgIAiIAHAAQAJAAADgEQAEgDAAgIQAAgGgEgEQgEgCgIAAIgHAAg");
	this.shape_7.setTransform(28.9,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAIA2IAAgUIAGAAIAAgiIgbAeIAAAEIAGAAIAAAUIgmAAIAAgUIAGAAIAAhDIgGAAIAAgUIAmAAIAAAUIgGAAIAAAiIAbgeIAAgEIgGAAIAAgUIAmAAIAAAUIgGAAIAABDIAGAAIAAAUg");
	this.shape_8.setTransform(11.5,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoA2IAAgUIAGAAIAAhDIgGAAIAAgUIBRAAIAAAlIgaAAIAAgGQAAgGgCgDQgCgCgIAAIgLAAIAAAXIAXAAIAAASIgXAAIAAAaIALAAQAIAAACgCQACgDAAgGIAAgJIAaAAIAAAog");
	this.shape_9.setTransform(-5.8,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUA2IAAgUIAIAAIAAhDIgFAAQgFABgBABQgCABAAAEIAAALIgUAAIAAgmIBbAAIAAAmIgUAAIAAgLQAAgEgCgBQgBgBgFgBIgGAAIAABDIAJAAIAAAUg");
	this.shape_10.setTransform(-17.2,1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAIBDIAAgUIAGAAIAAgkIgbAgIAAAEIAGAAIAAAUIgmAAIAAgUIAGAAIAAhCIgGAAIAAgUIAmAAIAAAUIgGAAIAAAiIAbgfIAAgDIgGAAIAAgUIAmAAIAAAUIgGAAIAABCIAGAAIAAAUgAgPguQgHgEAAgIIAAgIIANAAIAAAEQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQACABAFAAQAGAAACgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgEIANAAIAAAIQAAAIgGAEQgHAFgKAAQgJAAgGgFg");
	this.shape_11.setTransform(-29.1,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkA2IgHgCIAAgUIACAAIACAAQAFAAABgCQACgBAAgHIAAgEQAAgLAJgGQgIgCgEgHQgDgGAAgJQAAgRAKgHQAJgHASAAIAsAAIAAAUIgFAAIAABCIAFAAIAAAUIgmAAIAAgUIAGAAIAAgWIgIAAQgHAAgCAEQgDADAAAFIgBAQQgCAGgDAEQgCADgEACQgEACgEAAIgIgBgAgHgfQgEADAAAIQAAAOANAAIAKAAIAAgcIgLAAQgFAAgDADg");
	this.shape_12.setTransform(-41.4,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkA2IgJgCIAAgVIADABIAEAAQAEAAACgCQACgBAAgHIAAg4IgKAAIAAgUIBWAAIAAAUIgGAAIAABCIAGAAIAAAUIgmAAIAAgUIAGAAIAAhCIgVAAIAAA4QAAAKgCAGIgEAKQgDADgEACQgDACgEAAIgJgBg");
	this.shape_13.setTransform(-53.2,1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpA2IAAgUIAGAAIAAhBIgGAAIAAgWIArAAQATAAAJAIQAJAHAAAQQAAAJgDAFQgDAEgGAEQAPAFAAASQAAAQgJAHQgKAHgTABgAgIAiIAKAAQAHgBADgDQADgDAAgHQAAgFgDgEQgEgDgHAAIgJAAgAgIgJIAIAAQAHAAAEgDQACgCAAgGQAAgGgCgCQgEgDgHAAIgIAAg");
	this.shape_14.setTransform(-64.6,1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAHA2IAAgUIAHAAIgDgQIgYAAIgEAQIAGAAIAAAUIgiAAIAAgUIAFAAIAQhDIgFAAIAAgUIA7AAIAAAUIgFAAIAQBDIAFAAIAAAUgAgKAAIAQAAIgGghIgCAAg");
	this.shape_15.setTransform(-76.1,1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoA2IAAgUIAGAAIAAhDIgGAAIAAgUIArAAQAUAAAJAJQAJAHAAAUQAAAJgCAHQgCAEgFAFQgEADgHADQgHACgLAAIgLAAIAAASIAHAAIAAAUgAgIgDIAHAAQAIAAAEgDQAEgCAAgJQAAgKgEgCQgEgEgIAAIgHAAg");
	this.shape_16.setTransform(-87,1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAHA2IAAgUIAFAAIAAhDIgXAAIAABDIAGAAIAAAUIgnAAIAAgUIAGAAIAAhDIgGAAIAAgUIBZAAIAAAUIgGAAIAABDIAGAAIAAAUg");
	this.shape_17.setTransform(-98.9,1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYA2IgFgCIAAgWIAEACIAFAAQADAAACgCQACgCADgGIgcg4IgGAAIAAgUIAoAAIAAAUIgGAAIAMAhIANghIgHAAIAAgUIAlAAIAAAUIgHAAIgdBCQgEANgGAFQgHAFgKAAIgGgBg");
	this.shape_18.setTransform(-110.2,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.9,-12.6,233.9,25.4);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAMIgEgCIgCgEIAAgGIAAgFIACgEIAEgCIAFAAIAGAAIAEACQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIAAAFIAAAGQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABIgEACIgGAAIgFAAg");
	this.shape.setTransform(123.5,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoA2IAAgUIAFAAIAAhDIgFAAIAAgTIBRAAIAAAkIgaAAIAAgGQAAgGgBgDQgDgCgHAAIgMAAIAAAXIAXAAIAAASIgXAAIAAAaIAMAAQAHAAADgDQABgCAAgHIAAgIIAaAAIAAAog");
	this.shape_1.setTransform(116.9,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoA2IAAgUIAGAAIAAhDIgGAAIAAgTIArAAQAUgBAJAJQAJAHAAAUQAAAJgCAHQgCAEgFAFQgEADgHACQgHADgLAAIgLAAIAAASIAHAAIAAAUgAgIgDIAHAAQAIAAAEgDQAEgDAAgIQAAgKgEgDQgEgDgIAAIgHAAg");
	this.shape_2.setTransform(107.1,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUA2IAAgUIAIAAIAAhDIgFAAQgFABgBABQgCACAAADIAAALIgUAAIAAglIBbAAIAAAlIgUAAIAAgLQAAgDgCgCQgBgBgFgBIgGAAIAABDIAJAAIAAAUg");
	this.shape_3.setTransform(97.1,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAHA2IAAgUIAGAAIAAgaIgYAAIAAAaIAGAAIAAAUIgnAAIAAgUIAGAAIAAhDIgGAAIAAgTIAnAAIAAATIgGAAIAAAYIAYAAIAAgYIgGAAIAAgTIAmAAIAAATIgGAAIAABDIAGAAIAAAUg");
	this.shape_4.setTransform(86.7,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoA2IAAgUIAFAAIAAhDIgFAAIAAgTIBRAAIAAAkIgaAAIAAgGQAAgGgCgDQgCgCgHAAIgMAAIAAAXIAXAAIAAASIgXAAIAAAaIAMAAQAHAAACgDQACgCAAgHIAAgIIAaAAIAAAog");
	this.shape_5.setTransform(76.5,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZA+IAAgLQAAgDgBgCQgCgBgEAAIg+AAIAAgVIAFAAIAAhCIgFAAIAAgTIAmAAIAAATIgGAAIAABCIAWAAIAAhCIgGAAIAAgTIAnAAIAAATIgGAAIAABCIAJAAIAAAmg");
	this.shape_6.setTransform(66.1,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpA2IAAgUIAGAAIAAhBIgGAAIAAgVIAqAAQAUgBAJAIQAKAHAAAQQAAAIgEAGQgDAEgHAEQAQAGAAAQQAAARgJAHQgJAHgUABgAgJAiIAKAAQAIAAAEgEQACgDAAgHQAAgFgDgEQgDgEgJABIgJAAgAgJgJIAJAAQAHAAADgDQAEgDAAgFQAAgGgEgCQgDgDgHAAIgJAAg");
	this.shape_7.setTransform(51.5,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUA2IAAgUIAIAAIAAhDIgFAAQgFABgBABQgCACAAADIAAALIgUAAIAAglIBbAAIAAAlIgUAAIAAgLQAAgDgCgCQgBgBgFgBIgGAAIAABDIAJAAIAAAUg");
	this.shape_8.setTransform(37.4,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoA2IAAgUIAGAAIAAhDIgGAAIAAgTIBRAAIAAAkIgaAAIAAgGQAAgGgCgDQgCgCgIAAIgLAAIAAAXIAXAAIAAASIgXAAIAAAaIALAAQAIAAACgDQACgCAAgHIAAgIIAaAAIAAAog");
	this.shape_9.setTransform(27.5,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAdA+IAAgLQAAgDgCgCQgCgBgEAAIgrAAQgDAAgBABQgCACAAADIAAALIgVAAIAAgmIAGAAQAFAAACgDQACgEAAgGIAAg1IgHAAIAAgTIBXAAIAAATIgHAAIAABCIAKAAIAAAmgAgKAMIgCAGIgCAGIAbAAIAAhCIgXAAg");
	this.shape_10.setTransform(17,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYA2IgFgCIAAgWIAEACIAFAAQADAAACgCQACgCADgGIgcg4IgGAAIAAgUIAoAAIAAAUIgGAAIAMAhIANghIgHAAIAAgUIAlAAIAAAUIgHAAIgdBCQgEANgGAFQgHAFgKAAIgGgBg");
	this.shape_11.setTransform(7.3,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgoA2IAAgUIAGAAIAAhDIgGAAIAAgTIBOAAIAAAlIgWAAIAAgHQAAgHgCgCQgDgCgHAAIgMAAIAAAVIALAAQATABAJAHQAKAHAAAQQAAASgKAIQgJAJgTAAgAgIAiIAHAAQAJAAADgEQAEgDAAgIQAAgGgEgEQgEgCgIAAIgHAAg");
	this.shape_12.setTransform(-2.4,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAEA2IAAgUIAEAAIgUgfIAAAfIAGAAIAAAUIgnAAIAAgUIAHAAIAAhDIgHAAIAAgTIAnAAIAAATIgGAAIAAAaIATgaIgDAAIAAgTIAmAAIAAATIgFAAIgbAdIAeAmIAFAAIAAAUg");
	this.shape_13.setTransform(-16.3,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAIA2IAAgUIAGAAIAAgiIgbAeIAAAEIAGAAIAAAUIgmAAIAAgUIAGAAIAAhDIgGAAIAAgTIAmAAIAAATIgGAAIAAAiIAbgeIAAgEIgGAAIAAgTIAmAAIAAATIgGAAIAABDIAGAAIAAAUg");
	this.shape_14.setTransform(-27.3,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUA2IAAgUIAIAAIAAhDIgFAAQgFABgBABQgCACAAADIAAALIgUAAIAAglIBbAAIAAAlIgUAAIAAgLQAAgDgCgCQgBgBgFgBIgGAAIAABDIAJAAIAAAUg");
	this.shape_15.setTransform(-37.8,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAA4QgKAAgIgDQgIgCgEgFQgEgEgCgIQgCgHAAgKIAAghQAAgKACgIQACgHAEgFQAEgFAIgCQAIgCAKAAIAAAAQALAAAIACQAHACAFAFQAEAFACAHQACAIAAAKIAAAhQAAAKgCAHQgCAIgEAEQgFAFgHACQgIADgLAAgAgJgeQgDADAAAKIAAAjQAAAJADADQADADAGAAIAAAAQAHAAADgDQACgDAAgJIAAgjQAAgKgCgDQgDgDgHAAIAAAAQgGAAgDADg");
	this.shape_16.setTransform(-47.7,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoA2IAAgUIAGAAIAAhDIgGAAIAAgTIArAAQAUgBAJAJQAJAHAAAUQAAAJgCAHQgCAEgFAFQgEADgHACQgHADgLAAIgLAAIAAASIAHAAIAAAUgAgIgDIAHAAQAIAAAEgDQAEgDAAgIQAAgKgEgDQgEgDgIAAIgHAAg");
	this.shape_17.setTransform(-57.3,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAdA+IAAgLQAAgDgCgCQgCgBgEAAIgqAAQgFAAgBABQgBACAAADIAAALIgUAAIAAgmIAFAAQAFAAACgDQACgEAAgGIAAg1IgGAAIAAgTIBVAAIAAATIgFAAIAABCIAKAAIAAAmgAgKAMIgBAGIgDAGIAbAAIAAhCIgXAAg");
	this.shape_18.setTransform(-67.7,0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAHA2IAAgUIAHAAIgDgQIgYAAIgEAQIAGAAIAAAUIgiAAIAAgUIAFAAIAQhDIgFAAIAAgTIA7AAIAAATIgFAAIAQBDIAFAAIAAAUgAgKAAIAQAAIgGghIgCAAg");
	this.shape_19.setTransform(-81.8,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAdA+IAAgLQAAgDgCgCQgCgBgEAAIgqAAQgFAAgBABQgBACAAADIAAALIgUAAIAAgmIAFAAQAFAAACgDQADgEgBgGIAAg1IgHAAIAAgTIBWAAIAAATIgFAAIAABCIAKAAIAAAmgAgKAMIgBAGIgDAGIAbAAIAAhCIgXAAg");
	this.shape_20.setTransform(-92.1,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AglA2IAAgUIAGAAIAAhDIgGAAIAAgTIBLAAIAAAlIgWAAIAAgHQABgHgDgCQgDgCgGAAIgJAAIAABDIAHAAIAAAUg");
	this.shape_21.setTransform(-101.5,-0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAA4QgKAAgIgDQgIgCgEgFQgFgEgCgIQgCgHAAgKIAAghQAAgKACgIQACgHAFgFQAEgFAIgCQAIgCAKAAIAAAAQAMAAAHACQAHACAFAFQAFAFACAHQABAIAAAKIAAAhQAAAKgBAHQgCAIgFAEQgFAFgHACQgHADgMAAgAgJgeQgDADAAAKIAAAjQAAAJADADQADADAGAAIAAAAQAHAAADgDQACgDAAgJIAAgjQAAgKgCgDQgDgDgHAAIAAAAQgGAAgDADg");
	this.shape_22.setTransform(-111.1,-0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAEA2IAAgUIAEAAIgUgfIAAAfIAGAAIAAAUIgmAAIAAgUIAFAAIAAhDIgFAAIAAgTIAmAAIAAATIgGAAIAAAaIAUgaIgEAAIAAgTIAmAAIAAATIgFAAIgbAdIAeAmIAGAAIAAAUg");
	this.shape_23.setTransform(-120.9,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.3,-10.4,256.6,20.9);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAPQACAAACgCQADgDABgCQgIAAgDgDQgCgDAAgJIAAgIIADgFQABgBAEgBIAHAAIAIAAQAEABABACIADAFIAAAJQAAAFgCAEQgDAFgDAFQgEAEgEACQgEADgGAAg");
	this.shape.setTransform(123.3,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzBEIAAgaIAIAAIAAhTIgIAAIAAgaIAyAAIAAAaIgIAAIAAAXIAOAAQANAAAJACQAJADAFAFQAGAFACAHQADAIAAAMQAAAYgLAKQgLAKgZAAgAgJAqIAHAAQAKAAAFgDQAFgFAAgKQAAgKgFgFQgFgEgKAAIgHAAg");
	this.shape_1.setTransform(116.6,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAIBEIAAgaIAIAAIAAggIgeAAIAAAgIAGAAIAAAaIgwAAIAAgaIAIAAIAAhTIgIAAIAAgaIAwAAIAAAaIgGAAIAAAeIAeAAIAAgeIgIAAIAAgaIAxAAIAAAaIgIAAIAABTIAIAAIAAAag");
	this.shape_2.setTransform(102.1,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BEIAAgaIAIAAIAAhTIgIAAIAAgaIBoAAIAAAvIggAAIAAgIQAAgIgDgCQgDgDgJAAIgPAAIAAAdIAeAAIAAAWIgeAAIAAAgIAPAAQAJABADgDQADgDAAgIIAAgLIAgAAIAAAyg");
	this.shape_3.setTransform(87.6,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhRBEIAAgaIAIAAIAAhTIgIAAIAAgaIAyAAIAAAaIgIAAIAABTIAbAAIAAhXIAZAAIAABXIAcAAIAAhTIgJAAIAAgaIAyAAIAAAaIgIAAIAABTIAIAAIAAAag");
	this.shape_4.setTransform(70.6,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALBEIAAgaIAGAAIAAgrIghAnIAAAEIAHAAIAAAaIgwAAIAAgaIAHAAIAAhTIgHAAIAAgaIAwAAIAAAaIgHAAIAAAsIAhgoIAAgEIgGAAIAAgaIAwAAIAAAaIgIAAIAABTIAIAAIAAAag");
	this.shape_5.setTransform(53,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYBEIAAgaIAJAAIAAg+IgBAAIgXBBIgSAAIgVhBIgBAAIAAA+IAIAAIAAAaIgxAAIAAgaIAIAAIAAhUIgIAAIAAgZIA2AAIASBDIAAAAIAUhDIA0AAIAAAZIgHAAIAABUIAHAAIAAAag");
	this.shape_6.setTransform(36.2,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0BEIAAgaIAHAAIAAhSIgHAAIAAgbIA2AAQAZAAALAKQAMAIAAAVQAAAKgEAHQgFAGgIAFQAVAHAAAWQAAAVgNAJQgMAJgYAAgAgLAqIANAAQAKAAADgDQAFgFAAgIQgBgHgEgFQgEgEgKAAIgMAAgAgLgLIALAAQAIAAAFgFQAFgDAAgHQAAgHgFgEQgEgDgJAAIgLAAg");
	this.shape_7.setTransform(13.7,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzBEIAAgaIAHAAIAAhTIgHAAIAAgaIBoAAIAAAvIghAAIAAgIQAAgIgDgCQgDgDgJAAIgPAAIAAAdIAeAAIAAAWIgeAAIAAAgIAPAAQAJABADgDQADgDAAgIIAAgLIAhAAIAAAyg");
	this.shape_8.setTransform(-6.9,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaBEIAAgaIALAAIAAhTIgIAAQgFAAgDACQgCABAAAFIAAAOIgZAAIAAgwIB1AAIAAAwIgaAAIAAgOQAAgFgDgBQgCgCgFAAIgHAAIAABTIALAAIAAAag");
	this.shape_9.setTransform(-20.9,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAKBUIAAgYIAHAAIAAguIghAoIAAAGIAHAAIAAAYIgxAAIAAgYIAIAAIAAhVIgIAAIAAgaIAxAAIAAAaIgHAAIAAAsIAhgnIAAgFIgHAAIAAgaIAxAAIAAAaIgIAAIAABVIAIAAIAAAYgAgUg6QgIgGAAgKIAAgJIARAAIAAAEQAAABAAABQAAAAAAABQABAAAAABQAAAAABABQADACAGAAQAIgBACgBQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAgEIARAAIAAAJQAAAKgIAGQgIAFgNAAQgLAAgJgFg");
	this.shape_10.setTransform(-35.5,-1.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AguBFIgJgDIAAgZIACAAIADABQAGAAACgDQACgCAAgJIAAgFQAAgOALgIQgKgDgEgIQgEgJAAgKQAAgWAMgJQAMgIAXgBIA4AAIAAAaIgHAAIAABVIAHAAIAAAYIgwAAIAAgYIAHAAIAAgdIgKAAQgJAAgEAEQgDAFAAAGQAAAMgCAIQgCAIgDAFQgDAEgFADQgFACgFAAIgKgBgAgKgnQgEAEAAAJQAAASAQAAIANAAIAAgjIgOAAQgHAAgEAEg");
	this.shape_11.setTransform(-50.6,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgvBFIgLgDIAAgaIAFABIAEABQAGAAACgDQADgCgBgJIAAhHIgLAAIAAgaIBsAAIAAAaIgHAAIAABVIAHAAIAAAYIgwAAIAAgYIAHAAIAAhVIgbAAIAABHQAAAMgCAIQgCAIgDAFQgEAEgEADQgFACgFAAIgMgBg");
	this.shape_12.setTransform(-65.1,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgzBEIAAgaIAHAAIAAhTIgHAAIAAgaIBnAAIAAAvIggAAIAAgIQAAgIgDgCQgDgDgJAAIgPAAIAAAdIAeAAIAAAWIgeAAIAAAgIAPAAQAJABADgDQADgDAAgIIAAgLIAgAAIAAAyg");
	this.shape_13.setTransform(-79.1,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgzBEIAAgaIAHAAIAAhTIgHAAIAAgaIA4AAQAZAAALAKQALAKAAAYQAAANgCAIQgDAGgGAFQgGAGgJACQgJADgMAAIgPAAIAAAWIAJAAIAAAagAgKgEIAJAAQALAAAEgEQAFgDAAgLQAAgMgFgEQgEgDgLAAIgJAAg");
	this.shape_14.setTransform(-92.7,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaBEIAAgaIAKAAIAAhTIgHAAQgFAAgDACQgCABAAAFIAAAOIgZAAIAAgwIB1AAIAAAwIgaAAIAAgOQAAgFgDgBQgBgCgGAAIgHAAIAABTIAKAAIAAAag");
	this.shape_15.setTransform(-106.6,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVBEQgKgDgGgGQgGgGgCgJQgDgJABgOIAAgqQAAgaAKgLQALgMAXAAIAJACIAKAEIABgGIAgAAIAAAzIghAAIAAgHQAAgIgDgEQgEgEgJAAQgOAAAAARIAAAwQAAAMADAEQAEADAHAAQAKAAADgDQAEgDgBgKIAAgIIAhAAIAAAfQgHAKgNAGQgOAGgPAAQgLAAgKgDg");
	this.shape_16.setTransform(-120.3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.3,-12.7,256.7,25.4);


(lib.Symbol32copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0B03D").s().p("AgXA9IAAgXIAKAAIAAhLIgHAAQgFAAgCACQgCABAAAFIAAAMIgXAAIAAgrIBpAAIAAArIgXAAIAAgMQAAgFgCgBQgCgCgFAAIgHAAIAABLIAKAAIAAAXg");
	this.shape.setTransform(17.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0B03D").s().p("AguBNIAAgWIAHAAIAAhMIgHAAIAAgWIBdAAIAAApIgdAAIAAgGQAAgIgDgCQgCgDgJAAIgNAAIAAAYIAbAAIAAAWIgbAAIAAAeIANAAQAJAAACgDQADgCAAgIIAAgJIAdAAIAAAsgAAKg1QgCgDAAgIQAAgIACgCQADgCAHAAQAHAAACACQACACAAAIQAAAIgCADQgCACgHAAQgHAAgDgCgAgWg1QgCgDAAgIQAAgIACgCQACgCAIAAQAHAAACACQADACAAAIQAAAIgDADQgCACgHAAQgIAAgCgCg");
	this.shape_1.setTransform(5.2,-1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0B03D").s().p("AAEA9IAAgXIAIAAIAAgVIgMAAQgXAAgKgJQgKgIAAgVIAAgQIgFAAIAAgXIAqAAIAAAXIgHAAIAAAQQAAAKAEAEQAEAEAKAAIAHAAIAAgiIgGAAIAAgXIArAAIAAAXIgGAAIAABLIAGAAIAAAXg");
	this.shape_2.setTransform(-7.2,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0B03D").s().p("AgTA9QgJgDgFgFQgFgFgCgJQgDgIAAgMIAAglQAAgYAKgKQAKgKAUAAIAIABIAKAEIAAgFIAdAAIAAAtIgdAAIAAgGQAAgHgEgDQgDgEgIAAQgMAAAAAPIAAArQAAALADADQADADAGAAQAJAAADgDQADgDAAgJIAAgHIAdAAIAAAcQgHAJgMAFQgMAFgNAAQgKAAgJgCg");
	this.shape_3.setTransform(-18.4,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXA9IAAgXIAKAAIAAhLIgHAAQgFAAgCACQgCABAAAFIAAAMIgXAAIAAgrIBpAAIAAArIgXAAIAAgMQAAgFgCgBQgCgCgFAAIgHAAIAABLIAKAAIAAAXg");
	this.shape_4.setTransform(18.6,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AguBNIAAgWIAHAAIAAhMIgHAAIAAgWIBdAAIAAApIgdAAIAAgGQAAgIgDgCQgDgDgHAAIgOAAIAAAYIAbAAIAAAWIgbAAIAAAeIAOAAQAHAAADgDQADgCAAgIIAAgJIAdAAIAAAsgAAKg1QgCgDAAgIQAAgIACgCQADgCAHAAQAHAAADACQACACAAAIQAAAIgCADQgDACgHAAQgHAAgDgCgAgWg1QgCgDAAgIQAAgIACgCQACgCAIAAQAHAAACACQADACgBAIQABAIgDADQgCACgHAAQgIAAgCgCg");
	this.shape_5.setTransform(6.6,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAEA9IAAgXIAIAAIAAgVIgMAAQgXAAgKgJQgKgIAAgVIAAgQIgFAAIAAgXIAqAAIAAAXIgHAAIAAAQQAAAKAEAEQAEAEAKAAIAHAAIAAgiIgGAAIAAgXIArAAIAAAXIgGAAIAABLIAGAAIAAAXg");
	this.shape_6.setTransform(-5.8,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTA9QgJgDgFgFQgFgFgCgJQgDgIAAgMIAAglQAAgYAKgKQAKgKAUAAIAIABIAKAEIAAgFIAdAAIAAAtIgdAAIAAgGQAAgHgEgDQgDgEgIAAQgMAAAAAPIAAArQAAALADADQADADAGAAQAJAAADgDQADgDAAgJIAAgHIAdAAIAAAcQgHAJgMAFQgMAFgNAAQgKAAgJgCg");
	this.shape_7.setTransform(-17,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.8,-11.5,53,24.5);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0B03D").s().p("AAFA9IAAgXIAEAAIgWgiIAAAiIAGAAIAAAXIgsAAIAAgXIAHAAIAAhLIgHAAIAAgXIAsAAIAAAXIgGAAIAAAcIAWgcIgEAAIAAgXIAsAAIAAAXIgHAAIgeAgIAhArIAGAAIAAAXg");
	this.shape.setTransform(39.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0B03D").s().p("AAAA/QgMAAgJgCQgIgDgFgFQgFgFgCgJQgDgIAAgMIAAglQAAgMADgIQACgIAFgGQAFgFAIgDQAJgCAMAAIAAAAQANAAAJACQAIADAFAFQAGAGACAIQACAIAAAMIAAAlQAAAMgCAIQgCAJgGAFQgFAFgIADQgJACgNAAgAgKgiQgDAEAAAKIAAApQAAALADADQADADAHAAIAAAAQAIAAADgDQAEgDAAgLIAAgpQAAgKgEgEQgDgDgIAAIAAAAQgHAAgDADg");
	this.shape_1.setTransform(26.9,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0B03D").s().p("AgXA9IAAgXIAKAAIAAhLIgHAAQgFAAgCACQgCABAAAFIAAAMIgXAAIAAgrIBpAAIAAArIgXAAIAAgMQAAgFgCgBQgCgCgFAAIgHAAIAABLIAKAAIAAAXg");
	this.shape_2.setTransform(15,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0B03D").s().p("AAeA9IAAgXIAGAAIAAhLIgGAAIAAgXIArAAIAAAXIgGAAIAABLIAGAAIAAAXgAhIA9IAAgXIAHAAIAAhLIgHAAIAAgXIAsAAIAAAXIgHAAIAAAVIAPAAQALAAAIACQAGACAFAFQAFAFACAFQACAHABALQAAAWgKAJQgKAJgUAAgAgjAmIAGAAQALAAAFgEQAEgDAAgKQAAgJgEgEQgFgDgLAAIgGAAg");
	this.shape_3.setTransform(0.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0B03D").s().p("AAIA9IAAgXIAGAAIAAhLIgbAAIAABLIAHAAIAAAXIgsAAIAAgXIAHAAIAAhLIgHAAIAAgXIBlAAIAAAXIgHAAIAABLIAHAAIAAAXg");
	this.shape_4.setTransform(-14.9,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0B03D").s().p("AAAA/QgMAAgJgCQgIgDgFgFQgFgFgCgJQgDgIAAgMIAAglQAAgMADgIQACgIAFgGQAFgFAIgDQAJgCAMAAIAAAAQANAAAJACQAIADAFAFQAGAGACAIQACAIAAAMIAAAlQAAAMgCAIQgCAJgGAFQgFAFgIADQgJACgNAAgAgKgiQgDAEAAAKIAAApQAAALADADQADADAHAAIAAAAQAIAAADgDQAEgDAAgLIAAgpQAAgKgEgEQgDgDgIAAIAAAAQgHAAgDADg");
	this.shape_5.setTransform(-27.3,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0B03D").s().p("AAIA9IAAgXIAGAAIAAhLIgbAAIAABLIAHAAIAAAXIgsAAIAAgXIAHAAIAAhLIgHAAIAAgXIBlAAIAAAXIgHAAIAABLIAHAAIAAAXg");
	this.shape_6.setTransform(-39.7,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAEA9IAAgXIAGAAIgYgiIAAAiIAHAAIAAAXIgsAAIAAgXIAIAAIAAhLIgIAAIAAgXIAsAAIAAAXIgHAAIAAAcIAXgcIgFAAIAAgXIAsAAIAAAXIgGAAIgeAgIAiArIAGAAIAAAXg");
	this.shape_7.setTransform(40.8,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAA/QgMAAgJgCQgIgDgFgFQgFgFgCgJQgDgIAAgMIAAglQAAgMADgIQACgIAFgGQAFgFAIgDQAJgCAMAAIAAAAQANAAAJACQAIADAFAFQAGAGACAIQACAIAAAMIAAAlQAAAMgCAIQgCAJgGAFQgFAFgIADQgJACgNAAgAgKgiQgDAEAAAKIAAApQAAALADADQADADAHAAIAAAAQAIAAADgDQAEgDAAgLIAAgpQAAgKgEgEQgDgDgIAAIAAAAQgHAAgDADg");
	this.shape_8.setTransform(28.3,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXA9IAAgXIAKAAIAAhLIgHAAQgFAAgCACQgCABAAAFIAAAMIgXAAIAAgrIBpAAIAAArIgXAAIAAgMQAAgFgCgBQgCgCgFAAIgHAAIAABLIAKAAIAAAXg");
	this.shape_9.setTransform(16.4,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAeA9IAAgXIAHAAIAAhLIgHAAIAAgXIArAAIAAAXIgHAAIAABLIAHAAIAAAXgAhIA9IAAgXIAHAAIAAhLIgHAAIAAgXIAtAAIAAAXIgIAAIAAAVIAOAAQAMAAAIACQAGACAFAFQAFAFADAFQABAHAAALQAAAWgJAJQgKAJgVAAgAgjAmIAGAAQALAAAEgEQAFgDAAgKQAAgJgFgEQgEgDgLAAIgGAAg");
	this.shape_10.setTransform(1.7,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAIA9IAAgXIAGAAIAAhLIgbAAIAABLIAHAAIAAAXIgsAAIAAgXIAHAAIAAhLIgHAAIAAgXIBlAAIAAAXIgHAAIAABLIAHAAIAAAXg");
	this.shape_11.setTransform(-13.5,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAA/QgMAAgJgCQgIgDgFgFQgFgFgCgJQgDgIAAgMIAAglQAAgMADgIQACgIAFgGQAFgFAIgDQAJgCAMAAIAAAAQANAAAJACQAIADAFAFQAGAGACAIQACAIAAAMIAAAlQAAAMgCAIQgCAJgGAFQgFAFgIADQgJACgNAAgAgKgiQgDAEAAAKIAAApQAAALADADQADADAHAAIAAAAQAIAAADgDQAEgDAAgLIAAgpQAAgKgEgEQgDgDgIAAIAAAAQgHAAgDADg");
	this.shape_12.setTransform(-25.9,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAIA9IAAgXIAGAAIAAhLIgbAAIAABLIAHAAIAAAXIgsAAIAAgXIAHAAIAAhLIgHAAIAAgXIBlAAIAAAXIgHAAIAABLIAHAAIAAAXg");
	this.shape_13.setTransform(-38.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.8,-11.5,97,24.5);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C69C2C").s().p("AouCqIAAlTIRdAAIAAFTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-17,112,34);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B00E0E").s().p("AobCWIAAkrIQ3AAIAAErg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-15,108,30);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.setTransform(-41,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-22,82,45);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2C2C").s().rr(-0.5,-10,1,20,0.5);
	this.shape.setTransform(0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-15,1.5,30);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#930101").s().rr(-0.5,-5,1,10,0.5);
	this.shape.setTransform(0,-8.7,1.5,1.822);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#740000").s().rr(-0.5,-5,1,10,0.5);
	this.shape_1.setTransform(0,8.8,1.5,1.822);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-17.8,1.5,35.8);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().rr(-1,-8,2,16,1);
	this.shape.setTransform(0,12,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,0,3,24);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFF00","#CC9900","#A17200","#CC9900","#FFFF00"],[0.043,0.294,0.486,0.698,0.957],-7.5,7.5,7.5,7.5).s().p("AgyBeQgXg4AAhDIAAgtQgBgeAWgXQAXgVAdgBQAfABAVAVQAWAXAAAeIAAAtQABBFgVA0QgWA5ggAAQgbAAgXg3g");
	this.shape.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,0,15,30);


(lib.Symbol16copy2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#252525").s().p("AgCAwQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAhYQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAgBQAAABAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABIAABYQgBAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape.setTransform(-8.6,21.5,1,1.873,-72.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhWBCIAwiRIB9gpIAADxg");
	mask.setTransform(-8.8,12.2);

	// Layer 10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.557)","rgba(0,0,0,0.243)"],[0,1],0,12.9,0,-12.8).s().p("Ah/CSIAAkjID/AAIAAEjg");
	this.shape_1.setTransform(-10.5,12.2);

	this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 9 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CA162C").s().p("AA8AUIAcgBIipBVIgjAHgABcgaIidhUIAeAGICXBOg");
	this.shape_2.setTransform(-14.4,11.4);

	this.shape_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 9
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah6BrICvhbIA4gBIAGAIIipBVgAA5gYIiehUIBJAAICXBPIgHAIg");
	this.shape_3.setTransform(-14.4,11.5);

	this.shape_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CA162C").s().p("AjkAPIAAgdIHIAAIAAAdg");
	this.shape_4.setTransform(1.2,10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#012780").s().p("AhjCNIAyiAICJAAIgKCggAguggIAAgcICShwIgKCMg");
	this.shape_5.setTransform(-12,12);

	this.shape_4.mask = this.shape_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 6
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CA162C").s().p("AghC0IAPlnIAzAAIAAFng");
	this.shape_6.setTransform(0.7,14.1);

	this.shape_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 8
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah/CSIAAkjID/AAIAAEjg");
	this.shape_7.setTransform(-10.5,12.2);

	this.shape_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.1,0,85.4,24.6);


(lib.Symbol16 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F3F3F").s().p("AgCAwQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAhYQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAgBQAAABAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABIAABYQgBAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape.setTransform(-8.6,21.5,1,1.873,-72.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhWBCIAwiRIB9gpIAADxg");
	mask.setTransform(-8.8,12.2);

	// Layer 10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.243)","rgba(0,0,0,0)"],[0,0.808],0,12.9,0,-12.8).s().p("Ah/CSIAAkjID/AAIAAEjg");
	this.shape_1.setTransform(-10.5,12.2);

	this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 9 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CA162C").s().p("ABNAUIAbgBIipBVIgiAHgAA2gaIidhUIAfAGICXBOg");
	this.shape_2.setTransform(-13.6,11.4);

	this.shape_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 9
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah6BrICvhbIA4gBIAGAIIipBVgAA5gYIiehUIBJAAICXBPIgHAIg");
	this.shape_3.setTransform(-14.4,11.5);

	this.shape_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CA162C").s().p("AjkAPIAAgdIHIAAIAAAdg");
	this.shape_4.setTransform(1.2,10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#012780").s().p("AhjCNIAyiAICJAAIgKCggAguggIAAgcICShwIgKCMg");
	this.shape_5.setTransform(-12,12);

	this.shape_4.mask = this.shape_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 6
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CA162C").s().p("AghC0IAPlnIAzAAIAAFng");
	this.shape_6.setTransform(0.7,14.1);

	this.shape_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 8
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah/CSIAAkjID/AAIAAEjg");
	this.shape_7.setTransform(-10.5,12.2);

	this.shape_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.1,0,85.4,24.6);


(lib.link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx/AfPMAAAg+dMBj/AAAMAAAA+dg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol70_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMAuIgDgPIgRAAIgDAPIgRAAIAWhbIANAAIAWBbgAAGARIgFgVIgBgKIgBAKIAAACIgBAEIgCAHIgBAFIAAADIALAAg");
	this.shape_5.setTransform(12.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHAuIAAhLIgQAAIAAgQIAvAAIAAAQIgQAAIAABLg");
	this.shape_6.setTransform(6.7,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAHAuIAAgnIgNAAIAAAnIgRAAIAAhbIARAAIAAAmIANAAIAAgmIARAAIAABbg");
	this.shape_7.setTransform(0.4,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAIAuIAAgrIAAgDIAAgEIABgDIgBAAIgRA1IgPAAIAAhbIARAAIAAAqIAAADIgBAEIAAAEIATg1IAOAAIAABbg");
	this.shape_8.setTransform(-6.3,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAHAuIAAhLIgNAAIAABLIgRAAIAAhbIAvAAIAABbg");
	this.shape_9.setTransform(-13.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-9.2,36.6,18.5);


(lib.Symbol63_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.dart();
	this.instance_1.setTransform(-60,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-126,60,126);


(lib.Symbol62_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.brit();
	this.instance_1.setTransform(-48,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-4,97,8);


(lib.Symbol61_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.pBottle();
	this.instance_1.setTransform(-116,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,-172,232,345);


(lib.Symbol60_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.pWineglass();
	this.instance_1.setTransform(-115,-123);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-123,230,247);


(lib.Symbol53_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.table();
	this.instance_1.setTransform(-320,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-60,640,120);


(lib.Symbol38_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.shadow();
	this.instance_1.setTransform(-37,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,0,74,236);


(lib.Symbol32_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag2BHIAAgbIAIAAIAAhYIgIAAIAAgbIA1AAIAAAbIgJAAIAAAZIAPAAQAOAAAJACQAKACAFAGQAHAFACAIQADAIAAANQAAAZgMALQgMAKgaAAgAgKAsIAHAAQALAAAFgDQAGgFAAgLQAAgLgGgEQgFgEgLAAIgHAAg");
	this.shape_14.setTransform(33.7,1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbBHIAAgbIALAAIAAhYIgHAAQgHAAgBACQgDACAAAFIAAAPIgbAAIAAgzIB7AAIAAAzIgbAAIAAgPQAAgFgDgCQgCgCgGAAIgHAAIAABYIALAAIAAAbg");
	this.shape_15.setTransform(20.1,1.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAKBHIAAgbIAJAAIgFgUIghAAIgEAUIAIAAIAAAbIguAAIAAgbIAHAAIAVhYIgGAAIAAgbIBOAAIAAAbIgFAAIAVBYIAHAAIAAAbgAgNAAIAWAAIgJgsIgDAAg");
	this.shape_16.setTransform(6.5,1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag2BHIAAgbIAIAAIAAhYIgIAAIAAgbIA7AAQAaAAAMALQAMALAAAZQAAAMgDAKQgDAGgGAGQgGAFgJADQgKADgNAAIgQAAIAAAXIAKAAIAAAbgAgLgEIAJAAQAMAAAFgEQAEgEAAgMQAAgMgEgEQgFgEgMAAIgJAAg");
	this.shape_17.setTransform(-6.5,1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgyBHIAAgbIAIAAIAAhYIgIAAIAAgbIBlAAIAAAzIgdAAIAAgJQAAgJgDgDQgEgDgJAAIgNAAIAABYIAKAAIAAAbg");
	this.shape_18.setTransform(-19.1,1.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAKBHIAAgbIAIAAIAAgtIgkApIAAAEIAIAAIAAAbIgzAAIAAgbIAIAAIAAhYIgIAAIAAgbIAzAAIAAAbIgIAAIAAAvIAkgqIAAgFIgIAAIAAgbIAzAAIAAAbIgIAAIAABYIAIAAIAAAbg");
	this.shape_19.setTransform(-33.1,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-11.5,84.9,26.5);


(lib.Symbol31copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C69C2C").s().p("AouCqIAAlTIRdAAIAAFTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-17,112,34);


(lib.Symbol30copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B00E0E").s().p("AobCWIAAkrIQ3AAIAAErg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-15,108,30);


(lib.Symbol27_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(-41,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-22,82,45);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.warn();
	this.instance.setTransform(-316.5,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316.5,-20,633,40);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.blk_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Egx/AfPMAAAg+dMBj/AAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-200,640,400);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Symbol49();
	this.instance.setTransform(4,-7,1.1,1);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol49();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.1,-166.5,344.3,326);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvTPTQmVmWAAo9QAAo8GVmWQGXmVI8gBQI8ABGWGVQGWGWABI8QgBI9mWGWQmWGVo8ABQo8gBmXmVg");
	mask.setTransform(0,-1);

	// sh
	this.sh = new lib.Symbol50();
	this.sh.setTransform(0,-130);

	this.sh.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.sh).wait(1));

	// Layer 1
	this.instance = new lib.target();
	this.instance.setTransform(-138.5,-139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.5,-139.5,277,279);


(lib.Symbol40 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// x2
	this.x2 = new lib.Symbol41();
	this.x2.setTransform(-4.5,-113.5);

	this.timeline.addTween(cjs.Tween.get(this.x2).wait(1));

	// x3
	this.x3 = new lib.Symbol42();
	this.x3.setTransform(-2.9,-71.3);

	this.timeline.addTween(cjs.Tween.get(this.x3).wait(1));

	// Layer 1
	this.x1 = new lib.Symbol43();
	this.x1.setTransform(-4.5,-59.4);

	this.timeline.addTween(cjs.Tween.get(this.x1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.1,-118.8,37.2,118.9);


(lib.Symbol39 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3 copy
	this.c1 = new lib.Symbol45();

	this.timeline.addTween(cjs.Tween.get(this.c1).wait(1));

	// Layer 3
	this.c2 = new lib.Symbol44();

	this.timeline.addTween(cjs.Tween.get(this.c2).wait(1));

	// Layer 2
	this.l5 = new lib.Symbol40();
	this.l5.setTransform(0,0.2,1,1,-18);

	this.l12 = new lib.Symbol40();
	this.l12.setTransform(0,0.2,1,1,-36);

	this.l9 = new lib.Symbol40();
	this.l9.setTransform(0,0.2,1,1,-54);

	this.l14 = new lib.Symbol40();
	this.l14.setTransform(0,0.2,1,1,-72);

	this.l11 = new lib.Symbol40();
	this.l11.setTransform(0,0.2,1,1,-90);

	this.l8 = new lib.Symbol40();
	this.l8.setTransform(0,0.2,1,1,-108);

	this.l16 = new lib.Symbol40();
	this.l16.setTransform(0,0.2,1,1,-126);

	this.l7 = new lib.Symbol40();
	this.l7.setTransform(0,0.2,1,1,-144);

	this.l19 = new lib.Symbol40();
	this.l19.setTransform(0,0.2,1,1,-162);

	this.l3 = new lib.Symbol40();
	this.l3.setTransform(0,0.2,1,1,180);

	this.l17 = new lib.Symbol40();
	this.l17.setTransform(0,0.2,1,1,162);

	this.l2 = new lib.Symbol40();
	this.l2.setTransform(0,0.2,1,1,144);

	this.l15 = new lib.Symbol40();
	this.l15.setTransform(0,0.2,1,1,126);

	this.l10 = new lib.Symbol40();
	this.l10.setTransform(0,0.2,1,1,108);

	this.l6 = new lib.Symbol40();
	this.l6.setTransform(0,0.2,1,1,90);

	this.l13 = new lib.Symbol40();
	this.l13.setTransform(0,0.2,1,1,72);

	this.l4 = new lib.Symbol40();
	this.l4.setTransform(0,0.2,1,1,54);

	this.l18 = new lib.Symbol40();
	this.l18.setTransform(0,0.2,1,1,36);

	this.l1 = new lib.Symbol40();
	this.l1.setTransform(0,0.2,1,1,18);

	this.l20 = new lib.Symbol40();
	this.l20.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l20},{t:this.l1},{t:this.l18},{t:this.l4},{t:this.l13},{t:this.l6},{t:this.l10},{t:this.l15},{t:this.l2},{t:this.l17},{t:this.l3},{t:this.l19},{t:this.l7},{t:this.l16},{t:this.l8},{t:this.l11},{t:this.l14},{t:this.l9},{t:this.l12},{t:this.l5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.2,-120,240.4,240.4);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.m2 = new lib.Symbol30();

	this.timeline.addTween(cjs.Tween.get(this.m2).wait(1));

	// Layer 1
	this.m1 = new lib.Symbol31();

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-17,112,34);


(lib.Symbol28copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mc
	this.mc = new lib.Symbol59();
	this.mc.setTransform(0,-17);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

	// t12345
	this.t5 = new lib.Symbol58();
	this.t5.setTransform(0,47.5);

	this.t4 = new lib.Symbol57();
	this.t4.setTransform(0,19.9);

	this.t3 = new lib.Symbol56();
	this.t3.setTransform(0,-0.1);

	this.t2 = new lib.Symbol55();
	this.t2.setTransform(0,-32.7);

	this.t1 = new lib.Symbol54();
	this.t1.setTransform(0,-55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4},{t:this.t5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-419,-86,518.4,172);


(lib.Symbol26 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.mc3 = new lib.Symbol47();
	this.mc3.setTransform(3.5,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.mc3).wait(1));

	// Layer 3
	this.mc2 = new lib.Symbol48();
	this.mc2.setTransform(0,23.5);

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(1));

	// Layer 2
	this.mc1 = new lib.Symbol46();
	this.mc1.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mc1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-397.5,-173.5,573.7,356.5);


(lib.Symbol25copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// points
	this.points = new cjs.Text("0", "bold 33px 'Rokkitt'", "#FFFFFF");
	this.points.name = "points";
	this.points.textAlign = "center";
	this.points.lineHeight = 49;
	this.points.lineWidth = 81;
	this.points.setTransform(-2,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.points).wait(1));

	// points2
	this.points2 = new cjs.Text("0", "bold 33px 'Rokkitt'", "#660505");
	this.points2.name = "points2";
	this.points2.textAlign = "center";
	this.points2.lineHeight = 49;
	this.points2.lineWidth = 81;
	this.points2.setTransform(0,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.points2).wait(1));

	// bg
	this.bg = new lib.Symbol29();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	// t1
	this.t1 = new lib.Symbol32copy();
	this.t1.setTransform(0,-30.4);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-41.9,112,78.4);


(lib.Symbol25 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// points
	this.points = new cjs.Text("3", "bold 33px 'Rokkitt'", "#FFFFFF");
	this.points.name = "points";
	this.points.textAlign = "center";
	this.points.lineHeight = 49;
	this.points.lineWidth = 81;
	this.points.setTransform(-2,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.points).wait(1));

	// points2
	this.points2 = new cjs.Text("3", "bold 33px 'Rokkitt'", "#660505");
	this.points2.name = "points2";
	this.points2.textAlign = "center";
	this.points2.lineHeight = 49;
	this.points2.lineWidth = 81;
	this.points2.setTransform(0,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.points2).wait(1));

	// bg
	this.bg = new lib.Symbol29();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	// t1
	this.t1 = new lib.Symbol32();
	this.t1.setTransform(0,-30.4);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-41.9,112,78.4);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol38();
	this.mc.setTransform(0,116,1,1,0,0,0,0,118);
	this.mc.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-2,74,236);


(lib.Symbol15 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol16copy2();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol16();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-5.3,53.7,37.5);


(lib.mouse = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.mc2 = new lib.Symbol37();
	this.mc2.setTransform(0,10,1,1,0,0,0,0,8.1);

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-25.5,22,54.9);


(lib.warn_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyuFyIAArjMAldAAAIAALjg");
	mask.setTransform(0,9);

	// Layer 1 copy
	this.instance_1 = new lib.Symbol8();
	this.instance_1.setTransform(95.5,-15,0.67,0.55);

	this.instance_2 = new lib.Symbol8();
	this.instance_2.setTransform(-148.2,7.8,0.84,0.6);

	this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-26,240,45.8);


(lib.Symbol28copy_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// t12345
	this.t32 = new lib.Symbol67copy();
	this.t32.setTransform(1,20.8);

	this.t22 = new lib.Symbol66copy();
	this.t22.setTransform(-3.6,2.1);

	this.t12 = new lib.Symbol65copy();
	this.t12.setTransform(-3.6,-18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t12},{t:this.t22},{t:this.t32}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.7,-36.3,97.4,72.6);


(lib.Symbol25copy_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// t1
	this.t10 = new lib.Symbol32_1();
	this.t10.setTransform(0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.t10).wait(1));

	// m2
	this.m20 = new lib.Symbol30copy();

	this.timeline.addTween(cjs.Tween.get(this.m20).wait(1));

	// m1
	this.m10 = new lib.Symbol31copy();

	this.timeline.addTween(cjs.Tween.get(this.m10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-17,112,34);


(lib.Symbol20copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol38_1();
	this.mc.setTransform(0,116,1,1,0,0,0,0,118);
	this.mc.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-2,74,236);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// darken
	this.darken = new lib.blk();

	this.timeline.addTween(cjs.Tween.get(this.darken).wait(1));

	// warn
	this.instance = new lib.warn_2();
	this.instance.setTransform(0,180);
	this.instance.alpha = 0.43;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dart
	this.dart2 = new lib.Symbol63_1();
	this.dart2.setTransform(-26.8,113.9,1,1,0,0,0,-2.8,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.dart2).wait(1));

	// sh
	this.sh20 = new lib.Symbol20copy();
	this.sh20.setTransform(-26.6,115.3,0.947,0.711,0,77.1,7.6);

	this.timeline.addTween(cjs.Tween.get(this.sh20).wait(1));

	// brit
	this.brit2 = new lib.Symbol62_1();
	this.brit2.setTransform(51,-161);

	this.timeline.addTween(cjs.Tween.get(this.brit2).wait(1));

	// logo
	this.logo2 = new lib.Symbol27_1();
	this.logo2.setTransform(-44,-173);

	this.timeline.addTween(cjs.Tween.get(this.logo2).wait(1));

	// cta
	this.cta2 = new lib.Symbol25copy_1();
	this.cta2.setTransform(-42,-48,1,1,0,0,0,0,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.cta2).wait(1));

	// t12
	this.t12 = new lib.Symbol28copy_1();
	this.t12.setTransform(-39,-105);

	this.timeline.addTween(cjs.Tween.get(this.t12).wait(1));

	// pint
	this.pint2 = new lib.Symbol70_1();
	this.pint2.setTransform(98,143);

	this.timeline.addTween(cjs.Tween.get(this.pint2).wait(1));

	// pGlass
	this.p2Glass = new lib.Symbol60_1();
	this.p2Glass.setTransform(-110,78);

	this.timeline.addTween(cjs.Tween.get(this.p2Glass).wait(1));

	// pBottle
	this.pBottle2 = new lib.Symbol61_1();
	this.pBottle2.setTransform(-13,28);

	this.timeline.addTween(cjs.Tween.get(this.pBottle2).wait(1));

	// pGlass2
	this.p2Glass2 = new lib.Symbol60_1();
	this.p2Glass2.setTransform(100,78);

	this.timeline.addTween(cjs.Tween.get(this.p2Glass2).wait(1));

	// pTable
	this.pTable2 = new lib.Symbol53_1();
	this.pTable2.setTransform(30,140);

	this.timeline.addTween(cjs.Tween.get(this.pTable2).wait(1));

	// bar
	this.bar2 = new lib.Symbol68();

	this.timeline.addTween(cjs.Tween.get(this.bar2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-414.1,-201,764.1,427);


(lib.aimcopy2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mc6
	this.mc6 = new lib.Symbol23();
	this.mc6.setTransform(0,100.4);

	this.timeline.addTween(cjs.Tween.get(this.mc6).wait(1));

	// mc5
	this.mc5 = new lib.Symbol24();
	this.mc5.setTransform(0,82.5,1,1,0,0,0,0,8.5);

	this.timeline.addTween(cjs.Tween.get(this.mc5).wait(1));

	// mc4
	this.mc4 = new lib.Symbol15();
	this.mc4.setTransform(0,64.1,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.mc4).wait(1));

	// mc3
	this.mc3 = new lib.Symbol22();
	this.mc3.setTransform(0,45.7,1,1,0,0,0,0,1.2);

	this.timeline.addTween(cjs.Tween.get(this.mc3).wait(1));

	// mc2
	this.mc2 = new lib.Symbol21();
	this.mc2.setTransform(0,22.6,1,1,0,0,0,0,5.3);

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(1));

	// mc1
	this.mc1 = new lib.zzzzz();

	this.timeline.addTween(cjs.Tween.get(this.mc1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,0,80.6,118.3);


(lib.aimcopy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mc6
	this.mc6 = new lib.Symbol23();
	this.mc6.setTransform(0,100.4);

	this.timeline.addTween(cjs.Tween.get(this.mc6).wait(1));

	// mc5
	this.mc5 = new lib.Symbol24();
	this.mc5.setTransform(0,82.5,1,1,0,0,0,0,8.5);

	this.timeline.addTween(cjs.Tween.get(this.mc5).wait(1));

	// mc4
	this.mc4 = new lib.Symbol15();
	this.mc4.setTransform(0,64.1,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.mc4).wait(1));

	// mc3
	this.mc3 = new lib.Symbol22();
	this.mc3.setTransform(0,45.7,1,1,0,0,0,0,1.2);

	this.timeline.addTween(cjs.Tween.get(this.mc3).wait(1));

	// mc2
	this.mc2 = new lib.Symbol21();
	this.mc2.setTransform(0,22.6,1,1,0,0,0,0,5.3);

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(1));

	// mc1
	this.mc1 = new lib.zzzzz();

	this.timeline.addTween(cjs.Tween.get(this.mc1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,0,80.6,118.3);


(lib.aim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mc6
	this.mc6 = new lib.Symbol23();
	this.mc6.setTransform(0,100.4);

	this.timeline.addTween(cjs.Tween.get(this.mc6).wait(1));

	// mc5
	this.mc5 = new lib.Symbol24();
	this.mc5.setTransform(0,82.5,1,1,0,0,0,0,8.5);

	this.timeline.addTween(cjs.Tween.get(this.mc5).wait(1));

	// mc4
	this.mc4 = new lib.Symbol15();
	this.mc4.setTransform(0,64.1,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.mc4).wait(1));

	// mc3
	this.mc3 = new lib.Symbol22();
	this.mc3.setTransform(0,45.7,1,1,0,0,0,0,1.2);

	this.timeline.addTween(cjs.Tween.get(this.mc3).wait(1));

	// mc2
	this.mc2 = new lib.Symbol21();
	this.mc2.setTransform(0,22.6,1,1,0,0,0,0,5.3);

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(1));

	// mc1
	this.mc1 = new lib.zzzzz();

	this.timeline.addTween(cjs.Tween.get(this.mc1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,0,80.6,118.3);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pDart
	this.pDart = new lib.Symbol63();
	this.pDart.setTransform(12,0);

	this.timeline.addTween(cjs.Tween.get(this.pDart).wait(1));

	// Layer 3
	this.sh1 = new lib.Symbol20();
	this.sh1.setTransform(12.1,0.1,0.699,0.629,50);

	this.timeline.addTween(cjs.Tween.get(this.sh1).wait(1));

	// Layer 1
	this.instance = new lib.targetPackshot();
	this.instance.setTransform(-90,-98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.3,-98,224.4,212.5);


(lib.Symbol28 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.maxScore = new lib.Symbol64();
	this.maxScore.setTransform(0,157);

	this.timeline.addTween(cjs.Tween.get(this.maxScore).wait(1));

	// mc
	this.mc = new lib.mouse();
	this.mc.setTransform(0,76);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

	// t1234
	this.t4 = new lib.Symbol36();
	this.t4.setTransform(0,151,1.1,1.1);

	this.t3 = new lib.Symbol35();
	this.t3.setTransform(0,126,1.1,1.1);

	this.t2 = new lib.Symbol34();
	this.t2.setTransform(0,11);

	this.t1 = new lib.Symbol33();
	this.t1.setTransform(0,-8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.4,-21.6,260.9,200);


(lib.Symbol12copy2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// aim
	this.aim = new lib.aimcopy2();

	this.timeline.addTween(cjs.Tween.get(this.aim).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-3,80.6,121.3);


(lib.Symbol12copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// aim
	this.aim = new lib.aimcopy();

	this.timeline.addTween(cjs.Tween.get(this.aim).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-3,80.6,121.3);


(lib.Symbol12 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// aim
	this.aim = new lib.aim();

	this.timeline.addTween(cjs.Tween.get(this.aim).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-272.6,277.9,390.9);


(lib.content_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btnLink.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			//console.log("hit");
			admixAPIGlobal.click();
		}
		var n = this.rolik;
		
		var tr = new TimelineMax();
		tr.to(n.darken, 0.7, {alpha:0, ease:Power0.easeNone}, 0.0)
		  .staggerFrom([n.logo2, n.brit2], 1.0, {y:"-=50", ease:Expo.easeOut}, 0.1, 0.2)
		  .from(n.pTable2, 1.0, {y:"+=150", ease:Expo.easeOut}, 0.2)
		  .from(n.p2Glass, 1.0, {x:"-=300", ease:Expo.easeOut}, 0.8)
		  .from(n.pBottle2, 1.0, {x:"+=300", ease:Expo.easeOut}, 0.8)
		  .from(n.p2Glass2, 1.0, {x:"+=300", ease:Expo.easeOut}, 0.8)
		  .from(n.pint2, 1.0, {x:"+=300", ease:Expo.easeOut}, 0.9)
		  
		  .to(n.p2Glass, 1.0, {x:"-=300", ease:Expo.easeIn}, 2.8)
		  .from(n.dart2, 0.1, {x:"-=150", y:"-=600", ease:Power0.easeNone}, 3.8)
		  .from(n.sh20.mc, 0.1, {y:"+=300", ease:Power0.easeNone}, 3.8)
		  .from(n.dart2, 0.3, {rotation:"-=5", ease:Elastic.easeOut}, 3.9)
		  .from(n.sh20, 0.3, {rotation:"+=5", ease:Elastic.easeOut}, 3.9)
		  
		  .staggerFrom([n.t12.t12, n.t12.t22, n.t12.t32], 1.0, {y:"+=30", alpha:0.0, ease:Expo.easeOut}, 0.07, 4.0)
		  
		  .staggerFrom([n.cta2.m10, n.cta2.m20, n.cta2.t10], 1.0, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 0.1, 4.2)
		  
		  .to(n.cta2, 0.5, {scaleX:0.7, scaleY:0.7, ease:Expo.easeOut}, 6.0)
		  .to(n.cta2, 1.5, {scaleX:1, scaleY:1, ease:Elastic.easeOut}, 6.6)
		  
		  .to(n.cta2, 0.5, {scaleX:0.7, scaleY:0.7, ease:Expo.easeOut}, 9.0)
		  .to(n.cta2, 1.5, {scaleX:1, scaleY:1, ease:Elastic.easeOut}, 9.6)
		  
		  .to(n.cta2, 0.5, {scaleX:0.7, scaleY:0.7, ease:Expo.easeOut}, 12.0)
		  .to(n.cta2, 1.5, {scaleX:1, scaleY:1, ease:Elastic.easeOut}, 12.6)
		  
		  .staggerTo([n.t12.t12, n.t12.t22, n.t12.t32, n.cta2], 1.5, {x:"-=300", ease:Expo.easeInOut}, 0.07, 15.0)
		  
		  .staggerTo([n.p2Glass, n.pBottle2, n.pTable2, n.dart2, n.sh20], 2.0, {x:"-=100", ease:Expo.easeInOut}, 0.0, 15.0)
		  .to(n.p2Glass2, 2.0, {x:"-=110", ease:Expo.easeInOut}, 15.0)
		  .to(n.bar2, 2.0, {x:"-=50", ease:Expo.easeInOut}, 15.0)
		  
		  .to(n.darken, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart2}, 20)
		  ;
		
		
		
		function restart2() {
			tr.play(0);
		}
		this.stop();
		
		var r = this;
		var oldX;
		var frequency = 60;
		stage.enableMouseOver(frequency);
		stage.enableDOMEvents(true);
		
		//intro
		var tl = new TimelineMax();
		tl.to(r.blk, 0.7, {alpha:0, ease:Power0.easeNone}, 0.0)
		  .from(r.board, 1.5, {x:"+=200", ease:Expo.easeOut}, 0.0)
		  .from(r.logo, 1.0, {alpha:0, y:"+=60", ease:Expo.easeOut}, 0.3)
		  .staggerFrom([r.t1.t1, r.t1.t2], 1.0, {alpha:0, y:"+=60", ease:Expo.easeOut}, 0.05, 0.5)
		  .staggerFrom([r.t1.t4, r.t1.t3], 1.0, {alpha:0, y:"-=60", ease:Expo.easeOut}, 0.05, 0.5)
		  .from(r.t1.mc, 2.0, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 0.5)
		  .to(r.t1.mc, 2.0, {rotation:"+=360", yoyo:false, repeat:-1, repeatDelay:1.0, ease:Power1.easeInOut}, 0.3)
		  .to(r.t1.mc.mc2, 2.0, {rotation:"-=360", yoyo:false, repeat:-1, repeatDelay:1.0, ease:Power1.easeInOut}, 0.3)
		  
		  .staggerFrom([r.poin.bg.m1, r.poin.bg.m2], 1.0, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 0.1, 0.5)
		  .staggerFrom([r.shot.bg.m1, r.shot.bg.m2], 1.0, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 0.1, 0.5)
		  .staggerFrom([r.poin.t1, r.shot.t1], 1.0, {alpha:0, y:"+=50", ease:Expo.easeOut}, 0.0, 0.8)
		  .staggerFrom([r.poin.points, r.poin.points2, r.shot.points, r.shot.points2], 1.0, {alpha:0, x:"+=20", ease:Expo.easeOut}, 0.0, 0.9)
		  
		  .from(r.dartboard, 0.5, {x:"+=500", ease:Expo.easeOut}, 1.0)
		  .from(r.testHit, 1.0, {x:"+=200", y:"+=300", ease:Expo.easeOut, onComplete:startAiming}, 1.0);
		//--end intro
		
		  
		TweenMax.set(r.t1.maxScore, {alpha:0});
		TweenMax.set(r.testHit.aim, {x:-5, y:-5});
		var floatAim = "+=10";
		
		function startAiming() {
			//cursor "floating"
			TweenMax.to(r.testHit.aim, 1.21, {x:floatAim, yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0);
			TweenMax.to(r.testHit.aim, 1.74, {y:floatAim, yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0);
			
			TweenMax.set(r.dartboard, {y:-34});
			TweenMax.set(r.testHit, {alpha:1, scaleX:1.5, scaleY:1.5, overwrite:true});
			stage.addEventListener("stagemousemove", handleMouseMove);
			stage.addEventListener("stagemousedown", boom);
		}
		
		
		var dlit=1.0;
		
		var mc1 = r.testHit.aim.mc1;
		var mc2 = r.testHit.aim.mc2;
		var mc3 = r.testHit.aim.mc3;
		var mc4 = r.testHit.aim.mc4;
		var mc5 = r.testHit.aim.mc5;
		var mc6 = r.testHit.aim.mc6;
		
		var mc7  = r.testHit2.aim.mc1;
		var mc8  = r.testHit2.aim.mc2;
		var mc9  = r.testHit2.aim.mc3;
		var mc10 = r.testHit2.aim.mc4;
		var mc11 = r.testHit2.aim.mc5;
		var mc12 = r.testHit2.aim.mc6;
		
		var mc13 = r.testHit3.aim.mc1;
		var mc14 = r.testHit3.aim.mc2;
		var mc15 = r.testHit3.aim.mc3;
		var mc16 = r.testHit3.aim.mc4;
		var mc17 = r.testHit3.aim.mc5;
		var mc18 = r.testHit3.aim.mc6;
		
		
		function handleMouseMove(event) {
			var newX = stage.mouseX-320;
			var newY = stage.mouseY-200;
			if (newX>=20 && newX<290 && newY<130 && newY>-180) {
				document.getElementById("bannerPlace").style.cursor = "none";
				TweenMax.to(r.t1.mc, 0.3, {scaleX:0.0, scaleY:0.0, ease:Sine.easeOut/*, overwrite:true*/}, 0.0)
				TweenMax.to(r.t1.t2, 0.5, {y:56, ease:Sine.easeOut}, 0.0)
				TweenMax.to(r.t1.t1, 0.5, {y:36, delay:0.0, ease:Sine.easeOut}, 0.0)
				TweenMax.to(r.t1.t3, 0.5, {y:81, ease:Sine.easeOut}, 0.0)
				TweenMax.to(r.t1.t4, 0.5, {y:106, delay:0.0, ease:Sine.easeOut}, 0.0)
				TweenMax.to(r.t1.maxScore, 0.5, {alpha:1, ease:Sine.easeOut}, 0.0)
				
				TweenMax.to(r.testHit, dlit, {x:newX, y:newY, ease:Expo.easeOut}, 0.0);
				sc = (stage.mouseX-320)*0.001+1;
				//console.log("sc="+sc);
				var newS = 1+((newY+190)*0.01)-0.5;
				TweenMax.to(mc1, dlit, {scaleY:newS*0.3, ease:Expo.easeOut}, 0.0);
				var newYmc2 = 2.25+newS*6.0-15.0;
				TweenMax.to(mc2, dlit, {scaleY:newS*0.2+0.5, y:newYmc2+15, ease:Expo.easeOut}, 0.0);
				var newYmc3 = 29.5+newS*11.0-33.0;
				TweenMax.to(mc3, dlit, {scaleY:newS*0.15+0.5, y:newYmc3+15, ease:Expo.easeOut}, 0.0);
				var newYmc4 = 29.5+newS*19.0-38.0;
				TweenMax.to(mc4, dlit, {scaleY:newS*0.2+0.5, y:newYmc4+15, ease:Expo.easeOut}, 0.0);
				var newYmc5 = 29.5+newS*24.0-38.0;
				TweenMax.to(mc5, dlit, {scaleY:newS*0.1+0.3, y:newYmc5+15, ease:Expo.easeOut}, 0.0);
				var newYmc6 = 29.5+newS*27.0-25.0;
				TweenMax.to(mc6, dlit, {y:newYmc6+15, ease:Expo.easeOut}, 0.0);
			} else {
				document.getElementById("bannerPlace").style.cursor = "pointer";
				TweenMax.to(r.t1.mc, 1.0, {scaleX:1, scaleY:1, ease:Sine.easeOut/*, overwrite:true*/}, 0.0)
				TweenMax.to(r.t1.t1, 0.5, {y:-9, ease:Sine.easeOut}, 0.0)
				TweenMax.to(r.t1.t2, 0.5, {y:11, delay:0.0, ease:Sine.easeOut}, 0.0)
				TweenMax.to(r.t1.t4, 0.5, {y:151, ease:Sine.easeOut}, 0.0)
				TweenMax.to(r.t1.t3, 0.5, {y:126, delay:0.0, ease:Sine.easeOut}, 0.0)
				TweenMax.to(r.t1.maxScore, 0.3, {alpha:0, ease:Sine.easeOut}, 0.0)
				
				var newX = 160;
				var newY = -25;
				TweenMax.to(r.testHit, dlit, {x:newX, y:newY, ease:Expo.easeOut}, 0.0);
				sc = (newX)*0.001+1;
				//console.log("sc="+sc);
				var newS = 1+((newY+190)*0.01)-0.5;
				TweenMax.to(mc1, dlit, {scaleY:newS*0.3, ease:Expo.easeOut}, 0.0);
				var newYmc2 = 2.25+newS*6.0-15.0;
				TweenMax.to(mc2, dlit, {scaleY:newS*0.2+0.5, y:newYmc2+15, ease:Expo.easeOut}, 0.0);
				var newYmc3 = 29.5+newS*11.0-33.0;
				TweenMax.to(mc3, dlit, {scaleY:newS*0.15+0.5, y:newYmc3+15, ease:Expo.easeOut}, 0.0);
				var newYmc4 = 29.5+newS*19.0-38.0;
				TweenMax.to(mc4, dlit, {scaleY:newS*0.2+0.5, y:newYmc4+15, ease:Expo.easeOut}, 0.0);
				var newYmc5 = 29.5+newS*24.0-38.0;
				TweenMax.to(mc5, dlit, {scaleY:newS*0.1+0.3, y:newYmc5+15, ease:Expo.easeOut}, 0.0);
				var newYmc6 = 29.5+newS*27.0-25.0;
				TweenMax.to(mc6, dlit, {y:newYmc6+15, ease:Expo.easeOut}, 0.0);
			}
		}
		
		
		//cursor aiming
		var ochki = 0;
		var attempt = 3;
		function boom(event) {
			var newX = stage.mouseX-320;
			var newY = stage.mouseY-200;
			
			nX = newX;
			nY = newY;
			
			if (newX>=10 && newX<300 && newY<120 && newY>-190) {
				stage.removeEventListener("stagemousedown", boom);
				stage.removeEventListener("stagemousemove", handleMouseMove);
				attempt--;
				r.shot.points.text = r.shot.points2.text = attempt;
				
				var newY = -200;
				var newS = 1+((newY+190)*0.01)-0.5;
				TweenMax.to(mc1, dlit, {scaleY:newS*0.3, ease:Expo.easeOut}, 0.0);
				var newYmc2 = 2.25+newS*6.0-15.0;
				TweenMax.to(mc2, dlit, {scaleY:newS*0.2+0.5, y:newYmc2+15, ease:Expo.easeOut}, 0.0);
				var newYmc3 = 29.5+newS*11.0-33.0;
				TweenMax.to(mc3, dlit, {scaleY:newS*0.15+0.5, y:newYmc3+15, ease:Expo.easeOut}, 0.0);
				var newYmc4 = 29.5+newS*19.0-38.0;
				TweenMax.to(mc4, dlit, {scaleY:newS*0.2+0.5, y:newYmc4+15, ease:Expo.easeOut}, 0.0);
				var newYmc5 = 29.5+newS*24.0-38.0;
				TweenMax.to(mc5, dlit, {scaleY:newS*0.1+0.3, y:newYmc5+15, ease:Expo.easeOut}, 0.0);
				var newYmc6 = 29.5+newS*27.0-25.0;
				TweenMax.to(mc6, dlit, {y:newYmc6+15, ease:Expo.easeOut}, 0.0);
				
				if (attempt==2) {
					shX = r.testHit.x;
					shY = r.testHit.y;
					TweenMax.set(r.sh1, {x:shX, y:shY});
					TweenMax.from(r.sh1.mc, 0.4, {/*x:"+=100", */y:"+=300", alpha:0, delay:0.5, ease:Sine.easeIn});
					}
				if (attempt==1) {
					shX = r.testHit.x;
					shY = r.testHit.y;
					TweenMax.set(r.sh2, {x:shX, y:shY});
					TweenMax.from(r.sh2.mc, 0.4, {/*x:"+=100", */y:"+=300", alpha:0, delay:0.5, ease:Sine.easeIn});
					}
				if (attempt==0) {
					shX = r.testHit.x;
					shY = r.testHit.y;
					TweenMax.set(r.sh3, {x:shX, y:shY});
					TweenMax.from(r.sh3.mc, 0.4, {/*x:"+=100", */y:"+=300", alpha:0, delay:0.5, ease:Sine.easeIn});
					}
				//dart goes to board
				TweenMax.to(r.testHit.aim, 1.0, {x:0, y:0, ease:Sine.easeInOut, overwrite:true}, 0.0);
				TweenMax.fromTo(r.testHit, 1.0, {scaleX:1.5, scaleY:1.5}, {scaleX:0.5, scaleY:0.5, ease:Sine.easeInOut}, 0.0)
				TweenMax.to(r.testHit, 0.5, {y:"-=40", /*scaleX:1.0, scaleY:1.0,*/ ease:Sine.easeOut}, 0.0)
				TweenMax.to(r.testHit, 0.5, {y:"+=40", /*scaleX:0.5, scaleY:0.5,*/ ease:Sine.easeIn, delay:0.5, onComplete:reSet}, 0.0)
			}
		}
		
		
		function reSet(event) {
			if (attempt==2) {
				TweenMax.set(r.testHit, {alpha:0});
				TweenMax.set(r.testHit2, {scaleX:0.5, scaleY:0.5, x:shX, y:shY});
				var newY = -200;
				var newS = 1+((newY+190)*0.01)-0.5;
				TweenMax.set(mc7, {scaleY:newS*0.3});
				var newYmc2 = 2.25+newS*6.0-15.0;
				TweenMax.set(mc8, {scaleY:newS*0.2+0.5, y:newYmc2+15});
				var newYmc3 = 29.5+newS*11.0-33.0;
				TweenMax.set(mc9, {scaleY:newS*0.15+0.5, y:newYmc3+15});
				var newYmc4 = 29.5+newS*19.0-38.0;
				TweenMax.set(mc10, {scaleY:newS*0.2+0.5, y:newYmc4+15});
				var newYmc5 = 29.5+newS*24.0-38.0;
				TweenMax.set(mc11, {scaleY:newS*0.1+0.3, y:newYmc5+15});
				var newYmc6 = 29.5+newS*27.0-25.0;
				TweenMax.set(mc12, {y:newYmc6+15});
				
				TweenMax.delayedCall(1, startAiming);
			}
			if (attempt==1) {
				TweenMax.set(r.testHit3, {scaleX:0.5, scaleY:0.5, x:shX, y:shY});
				var newY = -200;
				var newS = 1+((newY+190)*0.01)-0.5;
				TweenMax.set(mc13, {scaleY:newS*0.3});
				var newYmc2 = 2.25+newS*6.0-15.0;
				TweenMax.set(mc14, {scaleY:newS*0.2+0.5, y:newYmc2+15});
				var newYmc3 = 29.5+newS*11.0-33.0;
				TweenMax.set(mc15, {scaleY:newS*0.15+0.5, y:newYmc3+15});
				var newYmc4 = 29.5+newS*19.0-38.0;
				TweenMax.set(mc16, {scaleY:newS*0.2+0.5, y:newYmc4+15});
				var newYmc5 = 29.5+newS*24.0-38.0;
				TweenMax.set(mc17, {scaleY:newS*0.1+0.3, y:newYmc5+15});
				var newYmc6 = 29.5+newS*27.0-25.0;
				TweenMax.set(mc18, {y:newYmc6+15});
				
				TweenMax.delayedCall(1, startAiming);
			}
			if (attempt==0) {
				TweenMax.delayedCall(1, function(){
					document.getElementById("bannerPlace").style.cursor = "pointer";
					endGamingScenario();
					});
				
			}
		}
		
		
		var och = []; //array of functions
		var aimNum = 0; //aim index in array
		
		//для каждого клика отдельная функция
		function createfunc(ochkiSec,i,j) {
		    return function() {
				mc = eval("(" + "r.dartboard.l"+i+".x"+j + ")");
				mc.addEventListener("click", function(event) {
					TweenMax.set(r.dartboard, {y:1000});
					ochki = ochki+ochkiSec;
					TweenMax.delayedCall(1, countPoints);
					});
				};
		}
		function createfuncForCenter() {
			r.dartboard.c1.addEventListener("click", function(event) {
				TweenMax.set(r.dartboard, {y:1000});
				ochki = ochki+50;
				TweenMax.delayedCall(1, countPoints);
			});
			
			r.dartboard.c2.addEventListener("click", function(event) {
				TweenMax.set(r.dartboard, {y:1000});
				ochki = ochki+25;
				TweenMax.delayedCall(1, countPoints);
			});
		};
		createfuncForCenter();
		function countPoints() {
			r.poin.points.text = r.poin.points2.text = ochki;
		}
		
		//цикл для создания отдельной функции для каждого клика 
		for (var i = 1; i < 21; i++) {
			for (var j = 1; j < 4; j++) {
				
				var ochkiSec = i*j;
				och[aimNum] = createfunc(ochkiSec,i,j);
				aimNum++;
			}
		}
		
		//запускаем все созданные функции
		for (var n = 0; n < 60; n++) {
		    och[n]();
		}
		
		
		TweenMax.set(r.btnLink, {y:1000});
		TweenMax.set(r.pBoard, {alpha:0});
		TweenMax.set(r.pGrad, {alpha:0});
		TweenMax.set(r.pTable, {y:260});
		TweenMax.set(r.t2, {y:500});
		TweenMax.set(r.pBottle, {x:r.pBottle.x+300});
		TweenMax.set(r.pGlass, {x:r.pGlass.x+300});
		
		function endGamingScenario() {
			var tm = new TimelineMax();
			tm.to(r.board.mc3.sh, 0.6, {y:"-=100", ease:Expo.easeInOut}, 0.0)
			  .set(r.t2, {y:82})
			  .to(r.board.mc1, 0.6, {/*x:0, y:0, */scaleX:"-=0.1", scaleY:"-=0.1", ease:Expo.easeInOut}, 0.0)
			  .to(r.board.mc2, 0.6, {/*x:0, */y:"+=160", scaleX:"-=0.2", scaleY:"-=0.2", /*alpha:0.5, */ease:Expo.easeInOut}, 0.0)
			  .to(r.board.mc3, 0.6, {/*x:0, y:0, */scaleX:"+=0.05", scaleY:"+=0.05", ease:Expo.easeInOut}, 0.0)
			  .staggerTo([r.testHit, r.testHit2, r.testHit3], 0.6, {scaleX:"+=0.4", scaleY:"+=0.4", ease:Expo.easeInOut}, 0.0, 0.0)
			  .staggerTo([r.sh1.mc, r.sh2.mc, r.sh3.mc], 0.6, {y:"+=100", alpha:0.3, ease:Expo.easeInOut}, 0.0, 0.0)
			  
			  .staggerTo([r.testHit2, r.testHit3, r.testHit], 3.1, {x:"+=400", ease:Expo.easeInOut}, 0.1, 0.0)
			  .staggerTo([r.sh1.mc, r.sh2.mc, r.sh3.mc], 3.1, {x:"+=400", ease:Expo.easeInOut}, 0.1, 0.0)
			  .to(r.board.mc1, 3.1, {x:"+=400", ease:Expo.easeInOut}, 0.0)
			  .to(r.board.mc2, 2.7, {alpha:0.0, ease:Sine.easeInOut}, 0.0)
			  
			  .to(r.logo, 1.6, {y:"-=100", ease:Expo.easeInOut, onComplete: function () {
				  TweenMax.set(r.logo, {x:92});
				  TweenMax.set(r.btnLink, {y:0});
				  }}, 0.5)
			  
			  .staggerTo([r.t1.t1, r.t1.t2, r.t1.mc, r.t1.t3, r.t1.t4, r.t1.maxScore], 1.6, {x:"-=500", ease:Expo.easeInOut}, 0.1, 0.5)
			  .staggerTo([r.poin.t1, r.shot.t1], 0.6, {alpha:0, y:"+=50", ease:Expo.easeIn}, 0.0, 0.8)
			  .staggerTo([r.poin, r.shot], 1.6, {x:"-=500", ease:Expo.easeInOut}, 0.1, 0.8)
			  
			  .from(r.pBoard, 1.0, {x:158, y:-33, scaleX:1.55, scaleY:1.4, ease:Expo.easeInOut}, 1.3)
			  .to(r.board.mc3, 1.0, {x:-300, y:-60, scaleX:0.65, scaleY:0.7, ease:Expo.easeInOut}, 1.3)
			  .to(r.pBoard, 0.4, {alpha:1.0, ease:Power0.easeNone}, 1.7)
			  .to(r.board.mc3, 0.4, {alpha:0.0, ease:Power0.easeNone}, 1.7)
			  .to(r.pGrad, 1.0, {alpha:1.0, ease:Expo.easeInOut}, 1.3)
			  .to(r.pTable, 1.0, {y:140, ease:Expo.easeInOut}, 1.3)
			  .staggerFrom([r.t2.t1, r.t2.t2, r.t2.mc, r.t2.t3, r.t2.t4, r.t2.t5], 1.0, {y:"+=50", alpha:0.0, ease:Expo.easeOut}, 0.03, 2.0)
			  .from(r.t2.mc, 1.0, {scaleX:0, ease:Expo.easeInOut}, 2.5)
			  
			  .to(r.logo, 1.0, {y:-173, ease:Expo.easeOut}, 2.2)
			  .to(r.brit, 1.4, {y:"+=50", ease:Expo.easeOut, onComplete: function () { /*createjs.Ticker.setFPS(1); tl.play(0);*/}}, 2.2)
			  
			  .staggerTo([r.pBottle, r.pGlass], 1.0, {x:"-=300", ease:Expo.easeOut}, 0.1, 2.0)
			  .to(r.pint, 1.0, {x:"-=70", ease:Expo.easeOut}, 2.5)
			  
			  .from(r.pBoard.pDart, 0.1, {x:"+=400", y:"-=100", scaleX:2, scaleY:2, ease:Power0.easeNone}, 3.0)
			  .from(r.pBoard.sh1.mc, 0.1, {y:"+=100", alpha:0.0, ease:Power0.easeNone}, 3.0)
			  
			  .from(r.pBoard.pDart, 0.3, {rotation:"+=5", ease:Elastic.easeOut}, 3.1)
			  .from(r.pBoard.sh1, 0.3, {rotation:"-=5", ease:Elastic.easeOut}, 3.1)
			  ;
			
			//console.log("END!");
		}
		tl.pause();
		
		var w = this;
		
		TweenMax.set(w.btn_switch2, {alpha:0});
		
		w.btn_switch1.addEventListener("rollover", mov);
		
		function mov()
		{
			//prevent(_event);
			//console.log(admixAPIGlobal);
			admixAPIGlobal.expand();
			TweenMax.set(w.btn_switch1, {alpha:0});
			TweenMax.set(w.btn_switch2, {alpha:1});
			TweenMax.set(w.rolik, {x:-1000});
			w.btn_switch1.removeEventListener("click", mov);
			document.getElementById("bannerPlace").style.width = "640px";
			//document.getElementById("bannerPlace").style.right = "50%";
			document.getElementById("bannerPlace").style.margin = "0 -320px 0 0";
			tl.play();
			tr.pause();
			w.btn_switch2.addEventListener("click", mov2);
		}
		
		function mov2()
		{
			admixAPIGlobal.collapse();
			//console.log(admixAPIGlobal);
			TweenMax.set(w.btn_switch1, {alpha:1});
			TweenMax.set(w.btn_switch2, {alpha:0});
			TweenMax.set(w.rolik, {x:-200});
			w.btn_switch2.removeEventListener("click", mov2);
			document.getElementById("bannerPlace").style.width = "240px";
			document.getElementById("bannerPlace").style.margin = "0 -120px 0 0";
			tr.play();
			w.btn_switch1.addEventListener("click", mov);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn_switch2
	this.btn_switch2 = new lib.Symbol72copy();
	this.btn_switch2.setTransform(303.1,-183);
	new cjs.ButtonHelper(this.btn_switch2, 0, 1, 2, false, new lib.Symbol72copy(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_switch2).wait(1));

	// btn_switch1
	this.btn_switch1 = new lib.Symbol72();
	this.btn_switch1.setTransform(-200,0);
	new cjs.ButtonHelper(this.btn_switch1, 0, 1, 2, false, new lib.Symbol72(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_switch1).wait(1));

	// btnLink
	this.btnLink = new lib.link();
	new cjs.ButtonHelper(this.btnLink, 0, 1, 2, false, new lib.link(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnLink).wait(1));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyvfPMAAAg+dMAleAAAMAAAA+dg");
	mask.setTransform(-200,0);

	// Layer 4
	this.rolik = new lib.content();
	this.rolik.setTransform(-200,0);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

	// border
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("Egx/gfPMBj/AAAMAAAA+fMhj/AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// blk
	this.blk = new lib.blk_1();

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// warn
	this.instance_1 = new lib.warn_1();
	this.instance_1.setTransform(0,180);
	this.instance_1.alpha = 0.43;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// brit
	this.brit = new lib.Symbol62();
	this.brit.setTransform(187,-211);

	this.timeline.addTween(cjs.Tween.get(this.brit).wait(1));

	// logo
	this.logo = new lib.Symbol27();
	this.logo.setTransform(-162,-166);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// t1
	this.t1 = new lib.Symbol28();
	this.t1.setTransform(-162,-108.9);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// poin
	this.poin = new lib.Symbol25copy();
	this.poin.setTransform(-230.9,123);

	this.timeline.addTween(cjs.Tween.get(this.poin).wait(1));

	// shot
	this.shot = new lib.Symbol25();
	this.shot.setTransform(-92.9,123);

	this.timeline.addTween(cjs.Tween.get(this.shot).wait(1));

	// testHit
	this.testHit = new lib.Symbol12();
	this.testHit.setTransform(160,-32,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.testHit).wait(1));

	// testHit2
	this.testHit2 = new lib.Symbol12copy();
	this.testHit2.setTransform(379,-68,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.testHit2).wait(1));

	// testHit3
	this.testHit3 = new lib.Symbol12copy2();
	this.testHit3.setTransform(409,-68,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.testHit3).wait(1));

	// sh1
	this.sh1 = new lib.Symbol20();
	this.sh1.setTransform(515,-2,0.999,0.999,-29.8);

	this.timeline.addTween(cjs.Tween.get(this.sh1).wait(1));

	// sh2
	this.sh2 = new lib.Symbol20();
	this.sh2.setTransform(550,-68,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.sh2).wait(1));

	// sh3
	this.sh3 = new lib.Symbol20();
	this.sh3.setTransform(640,-48,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.sh3).wait(1));

	// pBoard
	this.pBoard = new lib.Symbol51();
	this.pBoard.setTransform(-140,-90);

	this.timeline.addTween(cjs.Tween.get(this.pBoard).wait(1));

	// t2
	this.t2 = new lib.Symbol28copy();
	this.t2.setTransform(-137,82);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// pGrad
	this.pGrad = new lib.Symbol52();
	this.pGrad.setTransform(-160,0);

	this.timeline.addTween(cjs.Tween.get(this.pGrad).wait(1));

	// pint
	this.pint = new lib.Symbol70();
	this.pint.setTransform(367,148);

	this.timeline.addTween(cjs.Tween.get(this.pint).wait(1));

	// pBottle, pGlass
	this.pBottle = new lib.Symbol61();
	this.pBottle.setTransform(23,28);

	this.pGlass = new lib.Symbol60();
	this.pGlass.setTransform(116,78);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pGlass},{t:this.pBottle}]}).wait(1));

	// pTable
	this.pTable = new lib.Symbol53();
	this.pTable.setTransform(0,140);

	this.timeline.addTween(cjs.Tween.get(this.pTable).wait(1));

	// board
	this.board = new lib.Symbol26();
	this.board.setTransform(157,-30);

	this.timeline.addTween(cjs.Tween.get(this.board).wait(1));

	// bar
	this.instance_2 = new lib.bg();
	this.instance_2.setTransform(-320,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// dartboard
	this.dartboard = new lib.Symbol39();
	this.dartboard.setTransform(161,-34);

	this.timeline.addTween(cjs.Tween.get(this.dartboard).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-321,-215,1110.1,434.1);


// stage content:
(lib.kor_640x400 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*this.stop();
		
		this.btn1.addEventListener("click", mov.bind(this));
		
		function mov()
		{
			
			document.getElementById("bannerPlace").style.width = "640px";
			this.gotoAndStop(1);
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egx+AfQMAAAg+fMBj9AAAMAAAA+fg");
	mask.setTransform(320,200);

	// movie
	this.rolik = new lib.content_1();
	this.rolik.setTransform(320,200);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,200,640,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;