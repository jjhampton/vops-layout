(function(module) {
try {
  module = angular.module('ngLayoutPage');
} catch (e) {
  module = angular.module('ngLayoutPage', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('blankslate/blankslate.html',
    '<i class="blankslate-icon {{vm.icon}}"></i>\n' +
    '<div class="blankslate-content">\n' +
    '    <div class="blankslate-content-title">{{vm.title}}</div>\n' +
    '    <div class="blankslate-content-subtitle">\n' +
    '        <div ng-transclude></div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('ngLayoutPage');
} catch (e) {
  module = angular.module('ngLayoutPage', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('doughnut/doughnut.html',
    '<div class="doughnut-text">\n' +
    '    <div ng-transclude></div>\n' +
    '</div>\n' +
    '<canvas></canvas>');
}]);
})();

(function(module) {
try {
  module = angular.module('ngLayoutPage');
} catch (e) {
  module = angular.module('ngLayoutPage', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('body-header/body-header.html',
    '<div class="body-header-top">\n' +
    '    <div class="body-header-title">{{vm.title}}</div>\n' +
    '    <div class="body-header-actions">\n' +
    '        <div ng-transclude></div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="body-header-bottom">\n' +
    '    <div class="body-header-subtitle" ng-show="vm.subtitle">{{vm.subtitle}}</div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('ngLayoutPage');
} catch (e) {
  module = angular.module('ngLayoutPage', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('nav-group-item/nav-group-item.html',
    '<i ng-if="vm.hasIcon" class="nav-group-item-icon" ng-class="vm.iconClass"></i>\n' +
    '<span class="nav-group-item-text" ng-transclude></span>');
}]);
})();

(function(module) {
try {
  module = angular.module('ngLayoutPage');
} catch (e) {
  module = angular.module('ngLayoutPage', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('nav-header/nav-header.html',
    '<span class="nav-header-text">{{vm.text}}</span>\n' +
    '<span class="nav-header-small">{{vm.small}}</span>');
}]);
})();

(function(module) {
try {
  module = angular.module('ngLayoutPage');
} catch (e) {
  module = angular.module('ngLayoutPage', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('page-header/page-header.html',
    '<div class="page-header-actions" ng-transclude></div>\n' +
    '<div class="page-header-titles">\n' +
    '    <div class="page-header-titles-item">\n' +
    '        <span class="page-header-title">{{vm.title}}</span>\n' +
    '    </div>\n' +
    '    <div class="page-header-titles-item">\n' +
    '        <span class="page-header-subtitle" ng-if="vm.subtitle">{{vm.subtitle}}</span>\n' +
    '    </div>\n' +
    '    <div class="page-header-titles-item">\n' +
    '        <span class="page-header-label" ng-if="vm.label">{{vm.label}}</span>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('ngLayoutPage');
} catch (e) {
  module = angular.module('ngLayoutPage', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('pane-header/pane-header.html',
    '<a href="#" class="pane-header-close" ng-if="vm.showClose" ng-click="vm.close()">\n' +
    '    <i class="pane-header-closeIcon fa fa-times-circle"></i>\n' +
    '</a>\n' +
    '<div class="pane-header-actions" ng-transclude></div>\n' +
    '<div class="pane-header-titles" ng-class="{ \'pane-header-titles--withSubtitle\': vm.subtitle }">\n' +
    '    <span class="pane-header-title">\n' +
    '        <span class="pane-header-titleText">{{vm.title}}</span>\n' +
    '    </span>\n' +
    '    <span class="pane-header-subtitle" ng-if="vm.subtitle">\n' +
    '        <span class="pane-header-subtitleText">{{vm.subtitle}}</span>\n' +
    '    </span>\n' +
    '</div>');
}]);
})();
