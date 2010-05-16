/*
---
description: Clickable Table Rows class. Makes table rows clickable within a table

license: MIT-style

authors:
- Matthew Wells

requires:
- core/1.2.1:*

provides: [Clickable_Table_Rows]

...
*/

var Clickable_Table_Rows = new Class({

	Implements: [Options, Events],

	options: {
		'target_class':'row-link',
		'activated_class':'row-clickable'
	},

	initialize: function(table, options)
	{
		this.setOptions(options)
		this.target_table = $(table);
		this.current_tab_index = null;

		//Make sure the table has a defined tHead
		if (! this.target_table || ! $defined(this.target_table.tBodies[0])) return;

		if (this.options.activated_class) this.target_table.addClass(this.options.activated_class);

		this.target_table.tBodies[0].addEvent('click', this.listener.bindWithEvent(this));
	},
	
	listener: function(ev)
	{
		// Dont intercept standard anchors or inputs within the row
		if (ev.target.getTag() == 'a' || ev.target.getTag() == 'input') return;

		// Find the row
		while (ev.target.get('tag') != 'tr')
		{
			ev.target = ev.target.getParent();
			if (ev.target.getTag() == 'a' || ev.target.getTag() == 'input') return false;
		}

		var tg = ev.target.getElement('a.'+this.options.target_class);

		if (tg) document.location.href = tg.get('href');
		ev.stop();
	}
});