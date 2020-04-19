/**
 * User-defined extension for Selenium IDE
 */

PageBot.prototype.locateElementByLowerCaseText = function (text, inDocument) {
	
	// Expected text value in the lower case
	var expectedElement = text.toLowerCase();
	
	// List all the web elements based on the tags from the web page
	var listWebElements = inDocument.getElementsByTagName("*");
	
	for (var j=0; j<listWebElements.length; j++ ){
		var webelement = listWebElements[i];
		if (webelement.innerHTML && webelement.innerHTML ==== expectedElement){
			return webelement;
		}
	}
	return null;
};
