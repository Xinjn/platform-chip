(self["webpackChunktimeline"]=self["webpackChunktimeline"]||[]).push([[73],{55444:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_xinjn_work_project_ifeng_manager_chip_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86483);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44721);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49760);\n/* provided dependency */ var process = __webpack_require__(82195);\n\n// \u8d26\u6237\u767b\u9646\u9a8c\u8bc1\n\n// \u7c7b\u578b\n // JS\u64cd\u4f5ccookie\u7684\u63d2\u4ef6\n\n // \u6a21\u62df\u4ece\u7edf\u4e00\u7ba1\u7406\u5e73\u53f0\u8df3\u8f6c\u540e\u5e73\u53f0\u5e26\u6709\u7684Cookie\u6570\u636e\n\nvar CookieList = [{\n  platform_cn: '%E8%BE%9B%E8%BF%A6%E5%8D%97'\n}, {\n  platform_user: 'xinjn'\n}, {\n  Hm_lpvt_854ddd4a39be7c994420d51fb2e3ded7: '1655919991'\n}, {\n  if_mid: '1655652445910_o46mfj159'\n}, {\n  userid: '1655652445910_o46mfj159'\n}, {\n  Hm_lvt_ea92cb20c864b973fde8e6d16e4475e5: '1655444401'\n}, {\n  Hm_lvt_854ddd4a39be7c994420d51fb2e3ded7: '1655881455'\n}, {\n  Hm_lpvt_ea92cb20c864b973fde8e6d16e4475e5: '1655962589'\n}, {\n  _fe891: 'http://172.16.37.180:80'\n}, {\n  region_ver: '1.2'\n}, {\n  Hm_lpvt_ea92cb20c864b973fde8e6d16e4475e5: '1655777704'\n}, {\n  weather_city: 'bj'\n}, {\n  city: '010'\n}, {\n  region_ip: '114.112.77.x'\n}, {\n  prov: 'prov'\n}, {\n  _ga: 'GA1.2.1189717332.1655701993'\n}, {\n  token: '2022-6-16'\n}, {\n  day_limit_41816: '2022-6-16'\n}];\n/* \u7528\u6237\u767b\u9646\u9a8c\u8bc1 */\n\nvar Verification = props => {\n  // \u9a8c\u8bc1\u7528\u6237\u767b\u9646\n  var verifyUserLogin = () => {\n    // \u9a8c\u8bc1token\uff0c\u5224\u65ad\u662f\u5426\u767b\u9646\n    var token = js_cookie__WEBPACK_IMPORTED_MODULE_1__.default.get('cmpp_token');\n    var linkLoginUrl = process['CONFIG'].linkLoginUrl; // \u6dfb\u52a0Cookie\u6570\u636e\n\n    var setCookie = () => {\n      // \u904d\u5386\u6570\u7ec4\u5bf9\u8c61\n      for (var i = 0; i < CookieList.length; i++) {\n        var obj = CookieList[i];\n\n        for (var _i = 0, _Object$entries = Object.entries(obj); _i < _Object$entries.length; _i++) {\n          var _ref3 = _Object$entries[_i];\n\n          var _ref2 = (0,_Users_xinjn_work_project_ifeng_manager_chip_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(_ref3, 2);\n\n          var key = _ref2[0];\n          var value = _ref2[1];\n          js_cookie__WEBPACK_IMPORTED_MODULE_1__.default.set(\"\".concat(key), \"\".concat(value));\n        }\n      }\n    }; // \u96c6\u6210\u6743\u9650\u7cfb\u7edf\uff08\u7edf\u4e00\u5e73\u53f0\u7ba1\u7406: \u6dfb\u52a0Cookie\u6570\u636e\uff08\u8bf7\u6c42\u6570\u636e\uff1a\u81ea\u52a8\u6dfb\u52a0\u8bf7\u6c42\u5934\uff09\n\n\n    if (!token) {\n      // window.location.href = `${ linkLoginUrl }?url=${ encodeURIComponent(location.pathname) }`;\n      // Mock:\u6a21\u62df\u4ece\u7edf\u4e00\u7ba1\u7406\u5e73\u53f0\u8df3\u8f6c\u540e\u5e73\u53f0\u5e26\u6709\u7684Cookie\u6570\u636e\n      console.log('\u6a21\u62df\u4ece\u7edf\u4e00\u7ba1\u7406\u5e73\u53f0\u8df3\u8f6c\u540e\u5e73\u53f0\u5e26\u6709\u7684Cookie\u6570\u636e');\n      setCookie();\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    verifyUserLogin();\n  }, []);\n  return props === null || props === void 0 ? void 0 : props.children;\n};\n\nVerification.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_3__.node\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Verification);\n\n//# sourceURL=webpack://timeline/./src/layouts/Verification/index.tsx?")}}]);