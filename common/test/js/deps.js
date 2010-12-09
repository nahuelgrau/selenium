// This file was autogenerated by calcdeps.py
goog.addDependency("../../../js/src/asserts.js", ['webdriver.asserts'], ['goog.math.Coordinate', 'goog.string', 'webdriver.Future']);
goog.addDependency("../../../js/src/timing.js", ['webdriver.timing'], ['goog.userAgent']);
goog.addDependency("../../../js/src/webelement.js", ['webdriver.WebElement'], ['goog.array', 'webdriver.By.Locator', 'webdriver.By.Strategy', 'webdriver.CommandName', 'webdriver.Future']);
goog.addDependency("../../../js/src/command.js", ['webdriver.Command', 'webdriver.CommandName', 'webdriver.Response', 'webdriver.Response.Code'], ['goog.array', 'goog.events.EventTarget', 'goog.testing.stacktrace', 'webdriver.Future']);
goog.addDependency("../../../js/src/factory.js", ['webdriver.factory'], ['goog.userAgent', 'webdriver.LocalCommandProcessor', 'webdriver.WebDriver']);
goog.addDependency("../../../js/src/webdriver.js", ['webdriver.WebDriver', 'webdriver.WebDriver.EventType', 'webdriver.WebDriver.Speed'], ['goog.debug.Logger', 'goog.events', 'goog.events.EventTarget', 'webdriver.By.Locator', 'webdriver.Command', 'webdriver.CommandName', 'webdriver.Response', 'webdriver.WebElement', 'webdriver.timing']);
goog.addDependency("../../../js/src/testcase.js", ['webdriver.TestCase', 'webdriver.TestCase.Test'], ['goog.events', 'goog.testing.TestCase', 'goog.testing.TestCase.Test', 'goog.testing.asserts', 'webdriver.Command']);
goog.addDependency("../../../js/src/jsunit.js", ['webdriver.jsunit'], ['goog.testing.jsunit', 'webdriver.TestCase', 'webdriver.asserts', 'webdriver.factory']);
goog.addDependency("../../../js/src/abstractcommandprocessor.js", ['webdriver.AbstractCommandProcessor'], ['goog.Disposable', 'goog.array', 'goog.object', 'webdriver.CommandName', 'webdriver.Future', 'webdriver.Response', 'webdriver.Response.Code', 'webdriver.WebElement', 'webdriver.timing']);
goog.addDependency("../../../js/src/future.js", ['webdriver.Future'], ['goog.Disposable', 'goog.array']);
goog.addDependency("../../../js/src/key.js", ['webdriver.Key'], ['goog.array']);
goog.addDependency("../../../js/src/by.js", ['webdriver.By', 'webdriver.By.Locator', 'webdriver.By.Strategy'], ['goog.object', 'goog.string']);
goog.addDependency("../../../js/src/localcommandprocessor.js", ['webdriver.LocalCommandProcessor'], ['goog.array', 'goog.debug.Logger', 'goog.dom', 'goog.events', 'goog.json', 'goog.object', 'webdriver.AbstractCommandProcessor', 'webdriver.CommandName', 'webdriver.Response']);
goog.addDependency("../../../js/src/js/jsunit/appUnitMockTimeout.js", [], []);
goog.addDependency("../../../js/src/js/jsunit/appUnitTracer.js", [], []);
goog.addDependency("../../../js/src/js/jsunit/appUnitTestSuite.js", [], []);
goog.addDependency("../../../js/src/js/jsunit/appUnitTestManager.js", [], []);
goog.addDependency("../../../js/src/js/jsunit/appUnitCore.js", [], []);
goog.addDependency("../../../js/src/jsunit/app/xbDebug.js", [], []);
goog.addDependency("../../../js/src/js/jsunit/appUnitVersionCheck.js", [], []);
goog.addDependency("../../../js/src/selenium/se_element.js", ['core.element'], ['bot.dom', 'core.Error', 'core.locators']);
goog.addDependency("../../../js/src/selenium/text.js", ['core.text'], ['bot.dom', 'core.locators', 'core.patternMatcher', 'goog.dom.NodeType', 'goog.string', 'goog.userAgent']);
goog.addDependency("../../../js/src/selenium/se_locators.js", ['core.locators', 'core.locators.Locator'], ['core.Error', 'core.LocatorStrategies', 'goog.dom.NodeType', 'goog.string']);
goog.addDependency("../../../js/src/selenium/core.js", ['core.Error'], []);
goog.addDependency("../../../js/src/selenium/filters.js", ['core.filters'], ['bot.dom', 'core.Error', 'goog.array']);
goog.addDependency("../../../js/src/selenium/locator_strategies.js", ['core.LocatorStrategies'], ['bot.inject.cache', 'bot.locators', 'core.Error', 'core.filters', 'goog.string']);
goog.addDependency("../../../js/src/selenium/pattern_matcher.js", ['core.patternMatcher'], []);
goog.addDependency("../../../js/src/selenium/testbase.js", [], []);
goog.addDependency("../../../js/src/selenium/browserbot.js", ['core.browserbot'], ['bot.locators', 'bot.dom', 'core.locators', 'core.patternMatcher']);
goog.addDependency("../../../js/src/webdriver/web_element.js", ['webdriver.element'], ['bot.dom', 'goog.dom.TagName', 'goog.math', 'goog.style']);
goog.addDependency("../../../js/src/webdriver/logging.js", ['webdriver.debug.Console'], ['goog.debug.LogManager', 'goog.debug.Logger.Level', 'goog.debug.TextFormatter']);
goog.addDependency("../../../js/src/extension/dommessenger.js", [], []);
goog.addDependency("../../../js/src/bot/error.js", ['bot.Error', 'bot.ErrorCode'], ['goog.debug.Error', 'goog.object']);
goog.addDependency("../../../js/src/bot/bot.js", ['bot'], []);
goog.addDependency("../../../js/src/bot/dom.js", ['bot.dom'], ['bot', 'goog.array', 'goog.dom.NodeIterator', 'goog.dom.NodeType', 'goog.dom.TagName', 'goog.math.Size', 'goog.string', 'goog.style']);
goog.addDependency("../../../js/src/bot/events.js", ['bot.events'], ['bot.dom', 'goog.dom', 'goog.events.EventType', 'goog.userAgent']);
goog.addDependency("../../../js/src/bot/keys.js", ['bot.keys'], ['bot.Error', 'bot.ErrorCode', 'bot.action', 'bot.events', 'goog.events.EventType', 'goog.events.KeyCodes', 'goog.userAgent']);
goog.addDependency("../../../js/src/bot/action.js", ['bot.action'], ['bot.Error', 'bot.ErrorCode', 'bot.dom', 'bot.events', 'goog.array', 'goog.dom', 'goog.dom.NodeType', 'goog.dom.TagName', 'goog.events.EventType', 'goog.userAgent']);
goog.addDependency("../../../js/src/bot/inject.js", ['bot.inject', 'bot.inject.cache'], ['bot.Error', 'bot.ErrorCode', 'goog.array', 'goog.dom', 'goog.dom.NodeType', 'goog.object']);
goog.addDependency("../../../js/src/bot/locators/locators.js", ['bot.locators'], ['bot', 'bot.locators.strategies', 'goog.array']);
goog.addDependency("../../../js/src/bot/locators/strategies/strategies.js", ['bot.locators.strategies'], ['bot.locators.strategies.className', 'bot.locators.strategies.css', 'bot.locators.strategies.id', 'bot.locators.strategies.linkText', 'bot.locators.strategies.name', 'bot.locators.strategies.partialLinkText', 'bot.locators.strategies.tagName', 'bot.locators.strategies.xpath', 'goog.array', 'goog.object']);
goog.addDependency("../../../js/src/bot/locators/strategies/classname.js", ['bot.locators.strategies.className'], ['goog.array', 'goog.dom', 'goog.dom.DomHelper', 'goog.string']);
goog.addDependency("../../../js/src/bot/locators/strategies/css.js", ['bot.locators.strategies.css'], ['goog.array', 'goog.dom', 'goog.dom.NodeType', 'goog.object', 'goog.string', 'goog.userAgent']);
goog.addDependency("../../../js/src/bot/locators/strategies/link_text.js", ['bot.locators.strategies.linkText', 'bot.locators.strategies.partialLinkText'], ['bot', 'bot.dom', 'goog.array', 'goog.dom', 'goog.dom.DomHelper']);
goog.addDependency("../../../js/src/bot/locators/strategies/xpath.js", ['bot.locators.strategies.xpath'], ['goog.array', 'goog.dom', 'goog.dom.xml']);
goog.addDependency("../../../js/src/bot/locators/strategies/id.js", ['bot.locators.strategies.id'], ['bot.dom', 'goog.array', 'goog.dom']);
goog.addDependency("../../../js/src/bot/locators/strategies/tag_name.js", ['bot.locators.strategies.tagName'], ['goog.array', 'goog.dom', 'goog.dom.DomHelper']);
goog.addDependency("../../../js/src/bot/locators/strategies/name.js", ['bot.locators.strategies.name'], ['bot.dom', 'goog.array', 'goog.dom']);
goog.addDependency("../../../js/src/core/scripts/ui-element.js", [], []);
goog.addDependency("../../../js/src/core/scripts/selenium-api.js", [], []);
goog.addDependency("../../../js/src/core/scripts/selenium-logging.js", [], []);
goog.addDependency("../../../js/src/core/scripts/find_matching_child.js", [], []);
goog.addDependency("../../../js/src/core/scripts/selenium-version.js", [], []);
goog.addDependency("../../../js/src/core/scripts/ui-map-sample.js", [], []);
goog.addDependency("../../../js/src/core/scripts/selenium-testrunner.js", [], []);
goog.addDependency("../../../js/src/core/scripts/user-extensions.js", [], []);
goog.addDependency("../../../js/src/core/scripts/selenium-executionloop.js", [], []);
goog.addDependency("../../../js/src/core/scripts/selenium-commandhandlers.js", [], []);
goog.addDependency("../../../js/src/core/scripts/htmlutils.js", [], []);
goog.addDependency("../../../js/src/core/scripts/xmlextras.js", [], []);
goog.addDependency("../../../js/src/core/scripts/selenium-remoterunner.js", [], []);
goog.addDependency("../../../js/src/core/scripts/selenium-browserbot.js", [], []);
goog.addDependency("../../../js/src/core/scripts/selenium-browserdetect.js", [], []);
goog.addDependency("../../../js/src/core/xpath/xmltoken.js", [], []);
goog.addDependency("../../../js/src/core/xpath/util.js", [], []);
goog.addDependency("../../../js/src/core/xpath/dom.js", [], []);
goog.addDependency("../../../js/src/core/xpath/javascript-xpath-0.1.11.js", [], []);
goog.addDependency("../../../js/src/core/xpath/xpath.js", [], []);
goog.addDependency("../../../js/src/core/lib/prototype.js", [], []);
goog.addDependency("../../../js/src/core/lib/snapsie.js", [], []);
goog.addDependency("../../../js/src/core/lib/cssQuery/cssQuery-p.js", [], []);
goog.addDependency("../../../js/src/core/lib/cssQuery/src/cssQuery-level2.js", [], []);
goog.addDependency("../../../js/src/core/lib/cssQuery/src/cssQuery.js", [], []);
goog.addDependency("../../../js/src/core/lib/cssQuery/src/cssQuery-level3.js", [], []);
goog.addDependency("../../../js/src/core/lib/cssQuery/src/cssQuery-standard.js", [], []);
goog.addDependency("../../../js/src/core/lib/scriptaculous/unittest.js", [], []);
goog.addDependency("../../../js/src/core/lib/scriptaculous/dragdrop.js", [], []);
goog.addDependency("../../../js/src/core/lib/scriptaculous/effects.js", [], []);
goog.addDependency("../../../js/src/core/lib/scriptaculous/controls.js", [], []);
goog.addDependency("../../../js/src/core/lib/scriptaculous/slider.js", [], []);
goog.addDependency("../../../js/src/core/lib/scriptaculous/builder.js", [], []);
goog.addDependency("../../../js/src/core/lib/scriptaculous/scriptaculous.js", [], []);
goog.addDependency("../../../js/test/testbase.js", [], ['goog.Uri', 'goog.dom', 'goog.events', 'goog.math.Coordinate', 'goog.math.Size', 'goog.string', 'goog.userAgent', 'webdriver.Key', 'webdriver.WebElement', 'webdriver.asserts', 'webdriver.factory', 'webdriver.jsunit']);
goog.addDependency("../../../js/test/deps.js", [], []);
goog.addDependency("../../../js/test/fakecommandprocessor.js", ['webdriver.FakeCommandProcessor'], ['goog.structs.Map', 'goog.testing.asserts', 'webdriver.AbstractCommandProcessor']);
goog.addDependency("../../../js/test/webdriver-bootstrap.js", [], []);
goog.addDependency("../../../js/test/core/PatternMatcherTest.js", [], []);
goog.addDependency("../../../js/test/core/RemoteRunnerTest.js", [], []);
goog.addDependency("../../../js/test/core/AssertTest.js", [], []);
goog.addDependency("../../../js/test/core/BrowserBotTest.js", [], []);
goog.addDependency("../../../js/test/core/CommandFactoryTest.js", [], []);
goog.addDependency("../../../js/test/core/BrowserBotFrameFinderTest.js", [], []);
goog.addDependency("../../../js/test/core/TestLoopHandleErrorTest.js", [], []);
goog.addDependency("../../../js/test/core/PageBotAccessorTest.js", [], []);
goog.addDependency("../../../js/test/core/HtmlUtilTest.js", [], []);
goog.addDependency("../../../js/test/core/CookieTest.js", [], []);
goog.addDependency("../../../js/test/core/AlertHandlingTest.js", [], []);
goog.addDependency("../../../js/test/core/ErrorCheckingCommandTest.js", [], []);
goog.addDependency("../../../js/test/core/CommandHandlerTest.js", [], []);
goog.addDependency("../../../js/test/core/ConfirmHandlingTest.js", [], []);
goog.addDependency("../../../js/test/core/SeleniumParameterTest.js", [], []);
goog.addDependency("../../../js/test/core/UIElementTest.js", [], []);
goog.addDependency("../../../js/test/core/SeleniumApiTest.js", [], []);
goog.addDependency("../../../js/test/core/OptionLocatorTest.js", [], []);
goog.addDependency("../../../js/test/core/SampleTest.js", [], []);
