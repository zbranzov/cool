var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;
var fs = require("fs");
var protractor = require("protractor");
const addContext = require("mochawesome/addContext");
const rimraf = require("rimraf");

var env = process.env.cool;
var server =
  env ||
  "https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/47391690_2150989878265659_4354943409027284992_n.jpg?_nc_cat=109&_nc_ht=scontent.fsof3-1.fna&oh=b5d72bba74c9346c9c12238d94db06ae&oe=5CAD12E4";
describe("Hi ", function() {
  it("Mitko", function() {
    browser.get(server);
    browser.wait(browser.sleep(10000), 10000);
  });
});
