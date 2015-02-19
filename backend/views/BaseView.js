/*  ===================
    Element Social Dashboard - NodeJS
    By @SuperIRis for Element
    =================== */
"use strict";

var BaseView = function(response, template){
	this.response = response;
	this.template = template;
}
module.exports = BaseView;

BaseView.prototype.extend = function(properties){
	var Child = module.exports;
	Child.prototype = module.exports.prototype;
	for (var key in properties){
		Child.prototype[key] = properties[key];
	}
	return Child;
}

BaseView.prototype.render = function(data){
	if (this.response && this.template){
		this.response.render(this.template+".html",data);
	}
}