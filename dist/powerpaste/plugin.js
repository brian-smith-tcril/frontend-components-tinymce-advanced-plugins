"use strict";

var _tinymce = _interopRequireDefault(require("tinymce"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable */

// disabling lint is necessary, because of the prefer-arrow-callback rule causing the below code to get
// rewritten to a broken state
_tinymce["default"].PluginManager.add('powerpaste', function (editor, url) {
  return {
    getMetadata: function getMetadata() {
      return {
        name: 'stub open-source powerpaste',
        url: 'https://github.com/openedx/frontend-components-tinymce-advanced-plugins'
      };
    }
  };
});
//# sourceMappingURL=plugin.js.map