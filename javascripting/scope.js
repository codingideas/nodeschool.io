var a = 1, b = 2, c = 3;

var start = (function firstFunction(){
	var b = 5, c = 6;
	var obj = {};

	obj.firstFunction = function () {
		return c;
	};

	(function secondFunction(){
		var b = 8;
		obj.secondFunction = function(){
			return b;
		};
		(function thirdFunction(){
			var a = 7, c = 9;
			obj.thirdFunction = function(){
				return c;
			};
			(function fourthFunction(){
				var a = 1, c = 8;
				obj.fourthFunction = function(){
					return c;
				};
			})();
		})();
	})();
	return obj
})();

console.log("a: " + a + ", b: " + start.secondFunction() + ", c: " + start.firstFunction());