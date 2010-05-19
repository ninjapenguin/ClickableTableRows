ClickableTableRows
===========

Very small plugin to make table rows clickable. Will find the first link within the row (with the designated class) and direct the user to its target location. If the user clicks on a link directly within the row the plugin will not interfere with this.

Optionally adds a class to the table if the plugin successfully attaches to a table so you can style the rows alternatively

![Screenshot](http://github.com/ninjapenguin/ClickableTableRows/raw/master/Images/ctr.png)

How to use
----------

To use the plugin simply instantiate the class and give it the id of the target table.

	window.addEvent('domready', function(){
		var ctr = new Clickable_Table_Rows('table-id', {'target-class':'row-link'});
	})

Thats all!

Known Issues
-----------------

The plugin has been tested in Safari, Firefox and Chrome but NOT IE.

Any feedback greatly appreciated!