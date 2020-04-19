/**
 * User-defined extension for Selenium IDE
 */

Selenium.prototype.doLowerCaseText = function (locator, text) {
	
	//Locate the element with the locator as name, ID, css, Xpath, etc.
	var element = this.page().findElement(locator);
	
	// make the text in the lower case
	text = text.toLowerCase();
	
	// Replace the text of element with the lower case text
	this.page().replaceText(element, text);
} 
