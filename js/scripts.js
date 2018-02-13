//scripts.js

//var btn1 = new Button('Hello'); - czemu ten var nie działa i musi być deklaracja w 22 linii?

function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		//$('body').append(this.$element);
		this.$element.appendTo($('body'));
	}
}

var btn1 = new Button('Hello');

btn1.create();

