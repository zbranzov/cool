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
  "https://www.google.bg/search?biw=1638&bih=837&tbm=isch&sa=1&ei=r18OXKSVJqGnrgSa_5u4BA&q=christmas+sexy+chicks&oq=christmas+sexy+chicks&gs_l=img.3...26088.28654..29194...1.0..0.81.451.6......1....1..gws-wiz-img.......0i7i30j0i8i30j0i8i7i30j0i8i7i30i19.ezbo-Fg04_U#imgrc=_";
describe("Hi ", function() {
  it("Mitko", function() {
    browser.get(server);
    browser.wait(browser.sleep(10000), 10000);
  });
});
