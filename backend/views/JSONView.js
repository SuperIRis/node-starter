/*  ===================
    Element Social Dashboard - NodeJS
    By @SuperIRis for Element
    =================== */
"use strict";


var JSONView = function(response, data){
	this.response = response;
	this.data = data;
}

module.exports = JSONView;

JSONView.prototype.render = function(){
	if (this.response && this.data){
		this.response.json(this.data);
	}
}