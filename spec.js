// spec.js
describe('Protractor Demo App', function() {

  beforeEach(function() {
    browser.get('http://angular.github.io/angular-phonecat/step-12/app/#/phones');
  });
  
  it('should click', function() {

    element(by.xpath('/html/body/div/div/div/div/div[2]/ul/li[1]/a[2]')).click();
	expect(element(by.xpath('/html/body/div/div/h1')).getText()).
        toEqual('Motorola XOOM™ with Wi-Fi');
	element(by.xpath('/html/body/div/div/ul[1]/li[3]/img')).click();
  });
  
  it('should click', function() {

    element(by.xpath('/html/body/div/div/div/div/div[2]/ul/li[5]/a[2]')).click();
	element(by.xpath('/html/body/div/div/ul[1]/li[1]/img')).click();
	element(by.xpath('/html/body/div/div/ul[1]/li[2]/img')).click();
	element(by.xpath('/html/body/div/div/ul[1]/li[3]/img')).click();
  });

});