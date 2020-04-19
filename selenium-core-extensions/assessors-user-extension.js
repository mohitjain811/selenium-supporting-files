/**
 * User-defined extension for Selenium IDE
 */

Selenium.prototype.assertLowerCaseText = function (locator, text) {
	
	//Locate the element with the locator as name, ID, css, Xpath, etc.
	var element = this.page().findElement(locator);
	
	// Expected text value in the lower case
	var expectedValue = text.toLowerCase();
	
	// It is the actual value
	var actualValue = element.value;
	
	// Assert that both the expected and actual values are matching
	Assert.matches (expectedValue, actualValue);
};

Selenium.prototype.getTextAsValue = function (locator, text) {
	return.this.getText(locator).value;
};

Selenium.prototype.isEqualText = function (locator, text) {
	return.this.getText(locator).value === text;
};
