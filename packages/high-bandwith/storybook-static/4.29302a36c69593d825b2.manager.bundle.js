/*! For license information please see 4.29302a36c69593d825b2.manager.bundle.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    874(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(
          __webpack_exports__,
          'createCopyToClipboardFunction',
          () => createCopyToClipboardFunction
        ),
        __webpack_require__.d(
          __webpack_exports__,
          'SyntaxHighlighter',
          () => syntaxhighlighter_SyntaxHighlighter
        );
      __webpack_require__(90),
        __webpack_require__(42),
        __webpack_require__(15),
        __webpack_require__(115),
        __webpack_require__(5),
        __webpack_require__(89),
        __webpack_require__(4),
        __webpack_require__(11),
        __webpack_require__(13),
        __webpack_require__(9),
        __webpack_require__(8),
        __webpack_require__(10),
        __webpack_require__(16),
        __webpack_require__(14),
        __webpack_require__(17),
        __webpack_require__(47),
        __webpack_require__(24);
      const react = __webpack_require__(0);
      const react_default = __webpack_require__.n(react);
      const esm = __webpack_require__(26);
      const dist_esm = __webpack_require__(1);
      const global_window = __webpack_require__(6);
      const window_default = __webpack_require__.n(global_window);
      const memoizerific = __webpack_require__(31);
      const memoizerific_default = __webpack_require__.n(memoizerific);
      const jsx = __webpack_require__(889);
      const prism_jsx = __webpack_require__.n(jsx).a;
      const bash = __webpack_require__(931);
      const prism_bash = __webpack_require__.n(bash).a;
      const css = __webpack_require__(887);
      const prism_css = __webpack_require__.n(css).a;
      const js_extras = __webpack_require__(927);
      const prism_js_extras = __webpack_require__.n(js_extras).a;
      const json = __webpack_require__(928);
      const prism_json = __webpack_require__.n(json).a;
      const graphql = __webpack_require__(933);
      const prism_graphql = __webpack_require__.n(graphql).a;
      const markup = __webpack_require__(886);
      const prism_markup = __webpack_require__.n(markup).a;
      const markdown = __webpack_require__(930);
      const prism_markdown = __webpack_require__.n(markdown).a;
      const yaml = __webpack_require__(929);
      const prism_yaml = __webpack_require__.n(yaml).a;
      const tsx = __webpack_require__(932);
      const prism_tsx = __webpack_require__.n(tsx).a;
      const typescript = __webpack_require__(890);
      const prism_typescript = __webpack_require__.n(typescript).a;
      const objectWithoutProperties = __webpack_require__(923);
      const objectWithoutProperties_default = __webpack_require__.n(objectWithoutProperties);
      const objectSpread = __webpack_require__(888);
      const objectSpread_default = __webpack_require__.n(objectSpread);
      const helpers_extends = __webpack_require__(926);
      const extends_default = __webpack_require__.n(helpers_extends);
      function createStyleObject(classNames) {
        const elementStyle = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const stylesheet = arguments.length > 2 ? arguments[2] : void 0;
        return classNames.reduce(
          (styleObject, className) =>
            objectSpread_default()({}, styleObject, stylesheet[className]),
          elementStyle
        );
      }
      function createClassNameString(classNames) {
        return classNames.join(' ');
      }
      function createElement(_ref) {
        const { node } = _ref;
        const { stylesheet } = _ref;
        const _ref$style = _ref.style;
        const style = void 0 === _ref$style ? {} : _ref$style;
        const { useInlineStyles } = _ref;
        const { key } = _ref;
        const { properties } = node;
        const { type } = node;
        const TagName = node.tagName;
        const { value } = node;
        if (type === 'text') return value;
        if (TagName) {
          const childrenCreator = (function createChildren(stylesheet, useInlineStyles) {
            let childrenCount = 0;
            return function (children) {
              return (
                (childrenCount += 1),
                children.map((child, i) =>
                  createElement({
                    node: child,
                    stylesheet,
                    useInlineStyles,
                    key: 'code-segment-'.concat(childrenCount, '-').concat(i),
                  })
                )
              );
            };
          })(stylesheet, useInlineStyles);
          const nonStylesheetClassNames =
            useInlineStyles &&
            properties.className &&
            properties.className.filter((className) => !stylesheet[className]);
          const className =
            nonStylesheetClassNames && nonStylesheetClassNames.length
              ? nonStylesheetClassNames
              : void 0;
          const props = useInlineStyles
            ? objectSpread_default()(
                {},
                properties,
                { className: className && createClassNameString(className) },
                {
                  style: createStyleObject(
                    properties.className,
                    { ...properties.style, ...style },
                    stylesheet
                  ),
                }
              )
            : objectSpread_default()({}, properties, {
                className: createClassNameString(properties.className),
              });
          const children = childrenCreator(node.children);
          return react_default.a.createElement(
            TagName,
            extends_default()({ key }, props),
            children
          );
        }
      }
      const newLineRegex = /\n/g;
      function AllLineNumbers(_ref2) {
        const { codeString } = _ref2;
        const { codeStyle } = _ref2;
        const _ref2$containerStyle = _ref2.containerStyle;
        const containerStyle =
          void 0 === _ref2$containerStyle
            ? { float: 'left', paddingRight: '10px' }
            : _ref2$containerStyle;
        const _ref2$numberStyle = _ref2.numberStyle;
        const numberStyle = void 0 === _ref2$numberStyle ? {} : _ref2$numberStyle;
        const { startingLineNumber } = _ref2;
        return react_default.a.createElement(
          'code',
          { style: { ...codeStyle, ...containerStyle } },
          (function getAllLineNumbers(_ref) {
            const { lines } = _ref;
            const { startingLineNumber } = _ref;
            const { style } = _ref;
            return lines.map((_, i) => {
              const number = i + startingLineNumber;
              return react_default.a.createElement(
                'span',
                {
                  key: 'line-'.concat(i),
                  className: 'react-syntax-highlighter-line-number',
                  style: typeof style === 'function' ? style(number) : style,
                },
                ''.concat(number, '\n')
              );
            });
          })({
            lines: codeString.replace(/\n$/, '').split('\n'),
            style: numberStyle,
            startingLineNumber,
          })
        );
      }
      function getInlineLineNumber(lineNumber, inlineLineNumberStyle) {
        return {
          type: 'element',
          tagName: 'span',
          properties: {
            key: 'line-number--'.concat(lineNumber),
            className: ['comment', 'linenumber', 'react-syntax-highlighter-line-number'],
            style: inlineLineNumberStyle,
          },
          children: [{ type: 'text', value: lineNumber }],
        };
      }
      function assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber) {
        let num;
        let len;
        const defaultLineNumberStyle = {
          display: 'inline-block',
          minWidth:
            ((num = largestLineNumber), (len = num.toString().length), ''.concat(len, 'em')),
          paddingRight: '1em',
          textAlign: 'right',
          userSelect: 'none',
        };
        const customLineNumberStyle =
          typeof lineNumberStyle === 'function' ? lineNumberStyle(lineNumber) : lineNumberStyle;
        return objectSpread_default()({}, defaultLineNumberStyle, customLineNumberStyle);
      }
      function createLineElement(_ref3) {
        const { children } = _ref3;
        const { lineNumber } = _ref3;
        const { lineNumberStyle } = _ref3;
        const { largestLineNumber } = _ref3;
        const { showInlineLineNumbers } = _ref3;
        const _ref3$lineProps = _ref3.lineProps;
        const lineProps = void 0 === _ref3$lineProps ? {} : _ref3$lineProps;
        const _ref3$className = _ref3.className;
        const className = void 0 === _ref3$className ? [] : _ref3$className;
        const properties = typeof lineProps === 'function' ? lineProps(lineNumber) : lineProps;
        if (((properties.className = className), lineNumber && showInlineLineNumbers)) {
          const inlineLineNumberStyle = assembleLineNumberStyles(
            lineNumberStyle,
            lineNumber,
            largestLineNumber
          );
          children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
        }
        return { type: 'element', tagName: 'span', properties, children };
      }
      function flattenCodeTree(tree) {
        for (
          var className = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            newTree = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = 0;
          i < tree.length;
          i++
        ) {
          const node = tree[i];
          if (node.type === 'text')
            newTree.push(createLineElement({ children: [node], className }));
          else if (node.children) {
            const classNames = className.concat(node.properties.className);
            newTree = newTree.concat(flattenCodeTree(node.children, classNames));
          }
        }
        return newTree;
      }
      function processLines(
        codeTree,
        wrapLines,
        lineProps,
        showLineNumbers,
        showInlineLineNumbers,
        startingLineNumber,
        largestLineNumber,
        lineNumberStyle
      ) {
        let _ref4;
        const tree = flattenCodeTree(codeTree.value);
        const newTree = [];
        let lastLineBreakIndex = -1;
        let index = 0;
        function createWrappedLine(children, lineNumber) {
          const className = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return createLineElement({
            children,
            lineNumber,
            lineNumberStyle,
            largestLineNumber,
            showInlineLineNumbers,
            lineProps,
            className,
          });
        }
        function createUnwrappedLine(children, lineNumber) {
          if (lineNumber && showInlineLineNumbers) {
            const inlineLineNumberStyle = assembleLineNumberStyles(
              lineNumberStyle,
              lineNumber,
              largestLineNumber
            );
            children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
          }
          return children;
        }
        function createLine(children, lineNumber) {
          const className = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return wrapLines || className.length > 0
            ? createWrappedLine(children, lineNumber, className)
            : createUnwrappedLine(children, lineNumber);
        }
        for (
          let _loop = function _loop() {
            const node = tree[index];
            const { value } = node.children[0];
            if (
              (function getNewLines(str) {
                return str.match(newLineRegex);
              })(value)
            ) {
              const splitValue = value.split('\n');
              splitValue.forEach((text, i) => {
                const lineNumber = showLineNumbers && newTree.length + startingLineNumber;
                const newChild = { type: 'text', value: ''.concat(text, '\n') };
                if (i === 0) {
                  const _line = createLine(
                    tree.slice(lastLineBreakIndex + 1, index).concat(
                      createLineElement({
                        children: [newChild],
                        className: node.properties.className,
                      })
                    ),
                    lineNumber
                  );
                  newTree.push(_line);
                } else if (i === splitValue.length - 1) {
                  if (tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0]) {
                    const newElem = createLineElement({
                      children: [{ type: 'text', value: ''.concat(text) }],
                      className: node.properties.className,
                    });
                    tree.splice(index + 1, 0, newElem);
                  } else {
                    const _line2 = createLine([newChild], lineNumber, node.properties.className);
                    newTree.push(_line2);
                  }
                } else {
                  const _line3 = createLine([newChild], lineNumber, node.properties.className);
                  newTree.push(_line3);
                }
              }),
                (lastLineBreakIndex = index);
            }
            index++;
          };
          index < tree.length;

        )
          _loop();
        if (lastLineBreakIndex !== tree.length - 1) {
          const children = tree.slice(lastLineBreakIndex + 1, tree.length);
          if (children && children.length) {
            const line = createLine(children, newTree.length + startingLineNumber);
            newTree.push(line);
          }
        }
        return wrapLines ? newTree : (_ref4 = []).concat.apply(_ref4, newTree);
      }
      function defaultRenderer(_ref5) {
        const { rows } = _ref5;
        const { stylesheet } = _ref5;
        const { useInlineStyles } = _ref5;
        return rows.map((node, i) =>
          createElement({
            node,
            stylesheet,
            useInlineStyles,
            key: 'code-segement'.concat(i),
          })
        );
      }
      function isHighlightJs(astGenerator) {
        return astGenerator && void 0 !== astGenerator.highlightAuto;
      }
      let defaultAstGenerator;
      let defaultStyle;
      const core = __webpack_require__(896);
      const core_default = __webpack_require__.n(core);
      const prism_light_SyntaxHighlighter =
        ((defaultAstGenerator = core_default.a),
        (defaultStyle = {}),
        function SyntaxHighlighter(_ref7) {
          const { language } = _ref7;
          const { children } = _ref7;
          const _ref7$style = _ref7.style;
          const style = void 0 === _ref7$style ? defaultStyle : _ref7$style;
          const _ref7$customStyle = _ref7.customStyle;
          const customStyle = void 0 === _ref7$customStyle ? {} : _ref7$customStyle;
          const _ref7$codeTagProps = _ref7.codeTagProps;
          const codeTagProps =
            void 0 === _ref7$codeTagProps
              ? {
                  className: language ? 'language-'.concat(language) : void 0,
                  style: style['code[class*="language-"]'],
                }
              : _ref7$codeTagProps;
          const _ref7$useInlineStyles = _ref7.useInlineStyles;
          const useInlineStyles = void 0 === _ref7$useInlineStyles || _ref7$useInlineStyles;
          const _ref7$showLineNumbers = _ref7.showLineNumbers;
          const showLineNumbers = void 0 !== _ref7$showLineNumbers && _ref7$showLineNumbers;
          const _ref7$showInlineLineN = _ref7.showInlineLineNumbers;
          const showInlineLineNumbers = void 0 !== _ref7$showInlineLineN && _ref7$showInlineLineN;
          const _ref7$startingLineNum = _ref7.startingLineNumber;
          const startingLineNumber = void 0 === _ref7$startingLineNum ? 1 : _ref7$startingLineNum;
          const { lineNumberContainerStyle } = _ref7;
          const _ref7$lineNumberStyle = _ref7.lineNumberStyle;
          const lineNumberStyle = void 0 === _ref7$lineNumberStyle ? {} : _ref7$lineNumberStyle;
          let { wrapLines } = _ref7;
          const _ref7$lineProps = _ref7.lineProps;
          const lineProps = void 0 === _ref7$lineProps ? {} : _ref7$lineProps;
          let { renderer } = _ref7;
          const _ref7$PreTag = _ref7.PreTag;
          const PreTag = void 0 === _ref7$PreTag ? 'pre' : _ref7$PreTag;
          const _ref7$CodeTag = _ref7.CodeTag;
          const CodeTag = void 0 === _ref7$CodeTag ? 'code' : _ref7$CodeTag;
          const _ref7$code = _ref7.code;
          const code =
            void 0 === _ref7$code ? (Array.isArray(children) ? children[0] : children) : _ref7$code;
          let { astGenerator } = _ref7;
          const rest = objectWithoutProperties_default()(_ref7, [
            'language',
            'children',
            'style',
            'customStyle',
            'codeTagProps',
            'useInlineStyles',
            'showLineNumbers',
            'showInlineLineNumbers',
            'startingLineNumber',
            'lineNumberContainerStyle',
            'lineNumberStyle',
            'wrapLines',
            'lineProps',
            'renderer',
            'PreTag',
            'CodeTag',
            'code',
            'astGenerator',
          ]);
          astGenerator = astGenerator || defaultAstGenerator;
          const allLineNumbers = showLineNumbers
            ? react_default.a.createElement(AllLineNumbers, {
                containerStyle: lineNumberContainerStyle,
                codeStyle: codeTagProps.style || {},
                numberStyle: lineNumberStyle,
                startingLineNumber,
                codeString: code,
              })
            : null;
          const defaultPreStyle = style.hljs ||
            style['pre[class*="language-"]'] || { backgroundColor: '#fff' };
          const generatorClassName = isHighlightJs(astGenerator) ? 'hljs' : 'prismjs';
          const preProps = useInlineStyles
            ? { ...rest, style: { ...defaultPreStyle, ...customStyle } }
            : {
                ...rest,
                className: rest.className
                  ? ''.concat(generatorClassName, ' ').concat(rest.className)
                  : generatorClassName,
                style: { ...customStyle },
              };
          if (!astGenerator)
            return react_default.a.createElement(
              PreTag,
              preProps,
              allLineNumbers,
              react_default.a.createElement(CodeTag, codeTagProps, code)
            );
          (wrapLines = !(!renderer || void 0 !== wrapLines) || wrapLines),
            (renderer = renderer || defaultRenderer);
          const defaultCodeValue = [{ type: 'text', value: code }];
          const codeTree = (function getCodeTree(_ref6) {
            const { astGenerator } = _ref6;
            const { language } = _ref6;
            const { code } = _ref6;
            const { defaultCodeValue } = _ref6;
            if (isHighlightJs(astGenerator)) {
              const hasLanguage = (function (astGenerator, language) {
                return astGenerator.listLanguages().indexOf(language) !== -1;
              })(astGenerator, language);
              return language === 'text'
                ? { value: defaultCodeValue, language: 'text' }
                : hasLanguage
                ? astGenerator.highlight(language, code)
                : astGenerator.highlightAuto(code);
            }
            try {
              return language && language !== 'text'
                ? { value: astGenerator.highlight(code, language) }
                : { value: defaultCodeValue };
            } catch (e) {
              return { value: defaultCodeValue };
            }
          })({
            astGenerator,
            language,
            code,
            defaultCodeValue,
          });
          codeTree.language === null && (codeTree.value = defaultCodeValue);
          const rows = processLines(
            codeTree,
            wrapLines,
            lineProps,
            showLineNumbers,
            showInlineLineNumbers,
            startingLineNumber,
            codeTree.value.length + startingLineNumber,
            lineNumberStyle
          );
          return react_default.a.createElement(
            PreTag,
            preProps,
            react_default.a.createElement(
              CodeTag,
              codeTagProps,
              !showInlineLineNumbers && allLineNumbers,
              renderer({ rows, stylesheet: style, useInlineStyles })
            )
          );
        });
      prism_light_SyntaxHighlighter.registerLanguage = function (_, language) {
        return core_default.a.register(language);
      };
      const prism_light = prism_light_SyntaxHighlighter;
      const ActionBar = __webpack_require__(871);
      const ScrollArea = __webpack_require__(424);
      const ts_dedent_esm = __webpack_require__(35);
      const formatter = memoizerific_default()(2)((code) => Object(ts_dedent_esm.a)(code));
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (let i = 1; i < arguments.length; i++) {
                const source = arguments[i];
                for (const key in source)
                  Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        let key;
        let i;
        const target = (function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          let key;
          let i;
          const target = {};
          const sourceKeys = Object.keys(source);
          for (i = 0; i < sourceKeys.length; i++)
            (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
          return target;
        })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          const sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var { value } = info;
        } catch (error) {
          return void reject(error);
        }
        info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr))) return;
            const _arr = [];
            let _n = !0;
            let _d = !1;
            let _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || _i.return == null || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
            let n = Object.prototype.toString.call(o).slice(8, -1);
            n === 'Object' && o.constructor && (n = o.constructor.name);
            if (n === 'Map' || n === 'Set') return Array.from(o);
            if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (len == null || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      const syntaxhighlighter_navigator = window_default.a.navigator;
      const syntaxhighlighter_document = window_default.a.document;
      const globalWindow = window_default.a.window;
      prism_light.registerLanguage('jsextra', prism_js_extras),
        prism_light.registerLanguage('jsx', prism_jsx),
        prism_light.registerLanguage('json', prism_json),
        prism_light.registerLanguage('yml', prism_yaml),
        prism_light.registerLanguage('md', prism_markdown),
        prism_light.registerLanguage('bash', prism_bash),
        prism_light.registerLanguage('css', prism_css),
        prism_light.registerLanguage('html', prism_markup),
        prism_light.registerLanguage('tsx', prism_tsx),
        prism_light.registerLanguage('typescript', prism_typescript),
        prism_light.registerLanguage('graphql', prism_graphql);
      const themedSyntax = memoizerific_default()(2)((theme) =>
        Object.entries(theme.code || {}).reduce((acc, _ref) => {
          const _ref2 = _slicedToArray(_ref, 2);
          const key = _ref2[0];
          const val = _ref2[1];
          return {
            ...acc,
            ...(function _defineProperty(obj, key, value) {
              return (
                key in obj
                  ? Object.defineProperty(obj, key, {
                      value,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (obj[key] = value),
                obj
              );
            })({}, '* .'.concat(key), val),
          };
        }, {})
      );
      const copyToClipboard = createCopyToClipboardFunction();
      function createCopyToClipboardFunction() {
        return syntaxhighlighter_navigator != null && syntaxhighlighter_navigator.clipboard
          ? function (text) {
              return syntaxhighlighter_navigator.clipboard.writeText(text);
            }
          : (function () {
              const _ref3 = (function _asyncToGenerator(fn) {
                return function () {
                  const self = this;
                  const args = arguments;
                  return new Promise((resolve, reject) => {
                    const gen = fn.apply(self, args);
                    function _next(value) {
                      asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
                    }
                    function _throw(err) {
                      asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
                    }
                    _next(void 0);
                  });
                };
              })(
                regeneratorRuntime.mark(function _callee(text) {
                  let tmp;
                  let focus;
                  return regeneratorRuntime.wrap((_context) => {
                    for (;;)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          (tmp = syntaxhighlighter_document.createElement('TEXTAREA')),
                            (focus = syntaxhighlighter_document.activeElement),
                            (tmp.value = text),
                            syntaxhighlighter_document.body.appendChild(tmp),
                            tmp.select(),
                            syntaxhighlighter_document.execCommand('copy'),
                            syntaxhighlighter_document.body.removeChild(tmp),
                            focus.focus();
                        case 8:
                        case 'end':
                          return _context.stop();
                      }
                  }, _callee);
                })
              );
              return function (_x) {
                return _ref3.apply(this, arguments);
              };
            })();
      }
      const Wrapper = dist_esm.styled.div(
        (_ref4) => ({
          position: 'relative',
          overflow: 'hidden',
          color: _ref4.theme.color.defaultText,
        }),
        (_ref5) => {
          const { theme } = _ref5;
          return _ref5.bordered
            ? {
                border: '1px solid '.concat(theme.appBorderColor),
                borderRadius: theme.borderRadius,
                background: theme.background.content,
              }
            : {};
        }
      );
      const Scroller = Object(dist_esm.styled)((_ref6) => {
        const { children } = _ref6;
        const { className } = _ref6;
        return react_default.a.createElement(
          ScrollArea.a,
          { horizontal: !0, vertical: !0, className },
          children
        );
      })(
        { position: 'relative' },
        (_ref7) => ({ '& code': { paddingRight: _ref7.theme.layoutMargin } }),
        (_ref8) => {
          const { theme } = _ref8;
          return themedSyntax(theme);
        }
      );
      const Pre = dist_esm.styled.pre((_ref9) => {
        const { theme } = _ref9;
        return {
          display: 'flex',
          justifyContent: 'flex-start',
          margin: 0,
          padding: _ref9.padded ? theme.layoutMargin : 0,
        };
      });
      const Code = dist_esm.styled.code({ flex: 1, paddingRight: 0, opacity: 1 });
      var syntaxhighlighter_SyntaxHighlighter = function SyntaxHighlighter(_ref10) {
        const { children } = _ref10;
        const _ref10$language = _ref10.language;
        const language = void 0 === _ref10$language ? 'jsx' : _ref10$language;
        const _ref10$copyable = _ref10.copyable;
        const copyable = void 0 !== _ref10$copyable && _ref10$copyable;
        const _ref10$bordered = _ref10.bordered;
        const bordered = void 0 !== _ref10$bordered && _ref10$bordered;
        const _ref10$padded = _ref10.padded;
        const padded = void 0 !== _ref10$padded && _ref10$padded;
        const _ref10$format = _ref10.format;
        const format = void 0 === _ref10$format || _ref10$format;
        const _ref10$className = _ref10.className;
        const className = void 0 === _ref10$className ? null : _ref10$className;
        const _ref10$showLineNumber = _ref10.showLineNumbers;
        const showLineNumbers = void 0 !== _ref10$showLineNumber && _ref10$showLineNumber;
        const rest = _objectWithoutProperties(_ref10, [
          'children',
          'language',
          'copyable',
          'bordered',
          'padded',
          'format',
          'className',
          'showLineNumbers',
        ]);
        if (typeof children !== 'string' || !children.trim()) return null;
        const highlightableCode = format ? formatter(children) : children.trim();
        const _useState2 = _slicedToArray(Object(react.useState)(!1), 2);
        const copied = _useState2[0];
        const setCopied = _useState2[1];
        const onClick = function onClick(e) {
          e.preventDefault();
          const selectedText = globalWindow.getSelection().toString();
          const textToCopy = e.type !== 'click' && selectedText ? selectedText : highlightableCode;
          copyToClipboard(textToCopy)
            .then(() => {
              setCopied(!0), globalWindow.setTimeout(() => setCopied(!1), 1500);
            })
            .catch(esm.a.error);
        };
        return react_default.a.createElement(
          Wrapper,
          { bordered, padded, className, onCopyCapture: onClick },
          react_default.a.createElement(
            Scroller,
            null,
            react_default.a.createElement(
              prism_light,
              {
                padded: padded || bordered,
                language,
                showLineNumbers,
                showInlineLineNumbers: showLineNumbers,
                useInlineStyles: !1,
                PreTag: Pre,
                CodeTag: Code,
                lineNumberContainerStyle: {},
                ...rest,
              },
              highlightableCode
            )
          ),
          copyable
            ? react_default.a.createElement(ActionBar.a, {
                actionItems: [{ title: copied ? 'Copied' : 'Copy', onClick }],
              })
            : null
        );
      };
      syntaxhighlighter_SyntaxHighlighter.displayName = 'SyntaxHighlighter';
      __webpack_exports__.default = syntaxhighlighter_SyntaxHighlighter;
    },
    878(module, exports, __webpack_require__) {
      const normalize = __webpack_require__(879);
      const Schema = __webpack_require__(881);
      const DefinedInfo = __webpack_require__(882);
      module.exports = function create(definition) {
        let prop;
        let info;
        const { space } = definition;
        const mustUseProperty = definition.mustUseProperty || [];
        const attributes = definition.attributes || {};
        const props = definition.properties;
        const { transform } = definition;
        const property = {};
        const normal = {};
        for (prop in props)
          (info = new DefinedInfo(prop, transform(attributes, prop), props[prop], space)),
            mustUseProperty.indexOf(prop) !== -1 && (info.mustUseProperty = !0),
            (property[prop] = info),
            (normal[normalize(prop)] = prop),
            (normal[normalize(info.attribute)] = prop);
        return new Schema(property, normal, space);
      };
    },
    879(module, exports, __webpack_require__) {
      module.exports = function normalize(value) {
        return value.toLowerCase();
      };
    },
    880(module, exports, __webpack_require__) {
      let powers = 0;
      function increment() {
        return Math.pow(2, ++powers);
      }
      (exports.boolean = increment()),
        (exports.booleanish = increment()),
        (exports.overloadedBoolean = increment()),
        (exports.number = increment()),
        (exports.spaceSeparated = increment()),
        (exports.commaSeparated = increment()),
        (exports.commaOrSpaceSeparated = increment());
    },
    881(module, exports, __webpack_require__) {
      module.exports = Schema;
      const proto = Schema.prototype;
      function Schema(property, normal, space) {
        (this.property = property), (this.normal = normal), space && (this.space = space);
      }
      (proto.space = null), (proto.normal = {}), (proto.property = {});
    },
    882(module, exports, __webpack_require__) {
      const Info = __webpack_require__(883);
      const types = __webpack_require__(880);
      (module.exports = DefinedInfo),
        (DefinedInfo.prototype = new Info()),
        (DefinedInfo.prototype.defined = !0);
      const checks = [
        'boolean',
        'booleanish',
        'overloadedBoolean',
        'number',
        'commaSeparated',
        'spaceSeparated',
        'commaOrSpaceSeparated',
      ];
      const checksLength = checks.length;
      function DefinedInfo(property, attribute, mask, space) {
        let check;
        let index = -1;
        for (
          mark(this, 'space', space), Info.call(this, property, attribute);
          ++index < checksLength;

        )
          mark(this, (check = checks[index]), (mask & types[check]) === types[check]);
      }
      function mark(values, key, value) {
        value && (values[key] = value);
      }
    },
    883(module, exports, __webpack_require__) {
      module.exports = Info;
      const proto = Info.prototype;
      function Info(property, attribute) {
        (this.property = property), (this.attribute = attribute);
      }
      (proto.space = null),
        (proto.attribute = null),
        (proto.property = null),
        (proto.boolean = !1),
        (proto.booleanish = !1),
        (proto.overloadedBoolean = !1),
        (proto.number = !1),
        (proto.commaSeparated = !1),
        (proto.spaceSeparated = !1),
        (proto.commaOrSpaceSeparated = !1),
        (proto.mustUseProperty = !1),
        (proto.defined = !1);
    },
    884(module, exports, __webpack_require__) {
      const caseSensitiveTransform = __webpack_require__(905);
      module.exports = function caseInsensitiveTransform(attributes, property) {
        return caseSensitiveTransform(attributes, property.toLowerCase());
      };
    },
    885(module, exports, __webpack_require__) {
      module.exports = function decimal(character) {
        const code = typeof character === 'string' ? character.charCodeAt(0) : character;
        return code >= 48 && code <= 57;
      };
    },
    886(module, exports, __webpack_require__) {
      function markup(Prism) {
        (Prism.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              'internal-subset': {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              'doctype-tag': /^DOCTYPE/i,
              name: /[^\s<>'"]+/,
            },
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              'special-attr': [],
              'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: { punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/] },
              },
              punctuation: /\/?>/,
              'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
            },
          },
          entity: [{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' }, /&#x?[\da-f]{1,8};/i],
        }),
          (Prism.languages.markup.tag.inside['attr-value'].inside.entity =
            Prism.languages.markup.entity),
          (Prism.languages.markup.doctype.inside['internal-subset'].inside =
            Prism.languages.markup),
          Prism.hooks.add('wrap', (env) => {
            env.type === 'entity' &&
              (env.attributes.title = env.content.value.replace(/&amp;/, '&'));
          }),
          Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
            value: function addInlined(tagName, lang) {
              const includedCdataInside = {};
              (includedCdataInside[`language-${lang}`] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: Prism.languages[lang],
              }),
                (includedCdataInside.cdata = /^<!\[CDATA\[|\]\]>$/i);
              const inside = {
                'included-cdata': {
                  pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                  inside: includedCdataInside,
                },
              };
              inside[`language-${lang}`] = { pattern: /[\s\S]+/, inside: Prism.languages[lang] };
              const def = {};
              (def[tagName] = {
                pattern: RegExp(
                  /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                    /__/g,
                    () => tagName
                  ),
                  'i'
                ),
                lookbehind: !0,
                greedy: !0,
                inside,
              }),
                Prism.languages.insertBefore('markup', 'cdata', def);
            },
          }),
          Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
            value(attrName, lang) {
              Prism.languages.markup.tag.inside['special-attr'].push({
                pattern: RegExp(
                  `${/(^|["'\s])/.source}(?:${attrName})${
                    /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source
                  }`,
                  'i'
                ),
                lookbehind: !0,
                inside: {
                  'attr-name': /^[^\s=]+/,
                  'attr-value': {
                    pattern: /=[\s\S]+/,
                    inside: {
                      value: {
                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                        lookbehind: !0,
                        alias: [lang, `language-${lang}`],
                        inside: Prism.languages[lang],
                      },
                      punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
                    },
                  },
                },
              });
            },
          }),
          (Prism.languages.html = Prism.languages.markup),
          (Prism.languages.mathml = Prism.languages.markup),
          (Prism.languages.svg = Prism.languages.markup),
          (Prism.languages.xml = Prism.languages.extend('markup', {})),
          (Prism.languages.ssml = Prism.languages.xml),
          (Prism.languages.atom = Prism.languages.xml),
          (Prism.languages.rss = Prism.languages.xml);
      }
      (module.exports = markup),
        (markup.displayName = 'markup'),
        (markup.aliases = ['html', 'mathml', 'svg', 'xml', 'ssml', 'atom', 'rss']);
    },
    887(module, exports, __webpack_require__) {
      function css(Prism) {
        !(function (Prism) {
          const string =
            /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          (Prism.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                'selector-function-argument': {
                  pattern:
                    /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: 'selector',
                },
                keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 },
              },
            },
            url: {
              pattern: RegExp(
                `\\burl\\((?:${string.source}|${/(?:[^\\\r\n()"']|\\[\s\S])*/.source})\\)`,
                'i'
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp(`^${string.source}$`), alias: 'url' },
              },
            },
            selector: {
              pattern: RegExp(
                `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|${string.source})*(?=\\s*\\{)`
              ),
              lookbehind: !0,
            },
            string: { pattern: string, greedy: !0 },
            property: {
              pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0,
            },
            important: /!important\b/i,
            function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
            punctuation: /[(){};:,]/,
          }),
            (Prism.languages.css.atrule.inside.rest = Prism.languages.css);
          const { markup } = Prism.languages;
          markup &&
            (markup.tag.addInlined('style', 'css'), markup.tag.addAttribute('style', 'css'));
        })(Prism);
      }
      (module.exports = css), (css.displayName = 'css'), (css.aliases = []);
    },
    888(module, exports, __webpack_require__) {
      const defineProperty = __webpack_require__(925);
      (module.exports = function _objectSpread(target) {
        for (let i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? Object(arguments[i]) : {};
          const ownKeys = Object.keys(source);
          typeof Object.getOwnPropertySymbols === 'function' &&
            ownKeys.push.apply(
              ownKeys,
              Object.getOwnPropertySymbols(source).filter(
                (sym) => Object.getOwnPropertyDescriptor(source, sym).enumerable
              )
            ),
            ownKeys.forEach((key) => {
              defineProperty(target, key, source[key]);
            });
        }
        return target;
      }),
        (module.exports.__esModule = !0),
        (module.exports.default = module.exports);
    },
    889(module, exports, __webpack_require__) {
      function jsx(Prism) {
        !(function (Prism) {
          const javascript = Prism.util.clone(Prism.languages.javascript);
          const space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
          const braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
          let spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
          function re(source, flags) {
            return (
              (source = source
                .replace(/<S>/g, () => space)
                .replace(/<BRACES>/g, () => braces)
                .replace(/<SPREAD>/g, () => spread)),
              RegExp(source, flags)
            );
          }
          (spread = re(spread).source),
            (Prism.languages.jsx = Prism.languages.extend('markup', javascript)),
            (Prism.languages.jsx.tag.pattern = re(
              /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                .source
            )),
            (Prism.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i),
            (Prism.languages.jsx.tag.inside['attr-value'].pattern =
              /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/i),
            (Prism.languages.jsx.tag.inside.tag.inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            (Prism.languages.jsx.tag.inside.comment = javascript.comment),
            Prism.languages.insertBefore(
              'inside',
              'attr-name',
              { spread: { pattern: re(/<SPREAD>/.source), inside: Prism.languages.jsx } },
              Prism.languages.jsx.tag
            ),
            Prism.languages.insertBefore(
              'inside',
              'special-attr',
              {
                script: {
                  pattern: re(/=<BRACES>/.source),
                  inside: {
                    'script-punctuation': { pattern: /^=(?=\{)/, alias: 'punctuation' },
                    rest: Prism.languages.jsx,
                  },
                  alias: 'language-javascript',
                },
              },
              Prism.languages.jsx.tag
            );
          var stringifyToken = function (token) {
            return token
              ? typeof token === 'string'
                ? token
                : typeof token.content === 'string'
                ? token.content
                : token.content.map(stringifyToken).join('')
              : '';
          };
          var walkTokens = function (tokens) {
            for (let openedTags = [], i = 0; i < tokens.length; i++) {
              const token = tokens[i];
              let notTagNorBrace = !1;
              if (
                (typeof token !== 'string' &&
                  (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag'
                    ? token.content[0].content[0].content === '</'
                      ? openedTags.length > 0 &&
                        openedTags[openedTags.length - 1].tagName ===
                          stringifyToken(token.content[0].content[1]) &&
                        openedTags.pop()
                      : token.content[token.content.length - 1].content === '/>' ||
                        openedTags.push({
                          tagName: stringifyToken(token.content[0].content[1]),
                          openedBraces: 0,
                        })
                    : openedTags.length > 0 && token.type === 'punctuation' && token.content === '{'
                    ? openedTags[openedTags.length - 1].openedBraces++
                    : openedTags.length > 0 &&
                      openedTags[openedTags.length - 1].openedBraces > 0 &&
                      token.type === 'punctuation' &&
                      token.content === '}'
                    ? openedTags[openedTags.length - 1].openedBraces--
                    : (notTagNorBrace = !0)),
                (notTagNorBrace || typeof token === 'string') &&
                  openedTags.length > 0 &&
                  openedTags[openedTags.length - 1].openedBraces === 0)
              ) {
                let plainText = stringifyToken(token);
                i < tokens.length - 1 &&
                  (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text') &&
                  ((plainText += stringifyToken(tokens[i + 1])), tokens.splice(i + 1, 1)),
                  i > 0 &&
                    (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text') &&
                    ((plainText = stringifyToken(tokens[i - 1]) + plainText),
                    tokens.splice(i - 1, 1),
                    i--),
                  (tokens[i] = new Prism.Token('plain-text', plainText, null, plainText));
              }
              token.content && typeof token.content !== 'string' && walkTokens(token.content);
            }
          };
          Prism.hooks.add('after-tokenize', (env) => {
            (env.language !== 'jsx' && env.language !== 'tsx') || walkTokens(env.tokens);
          });
        })(Prism);
      }
      (module.exports = jsx), (jsx.displayName = 'jsx'), (jsx.aliases = []);
    },
    890(module, exports, __webpack_require__) {
      function typescript(Prism) {
        !(function (Prism) {
          (Prism.languages.typescript = Prism.languages.extend('javascript', {
            'class-name': {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            builtin:
              /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
          })),
            Prism.languages.typescript.keyword.push(
              /\b(?:abstract|as|declare|implements|is|keyof|readonly|require)\b/,
              /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
              /\btype\b(?=\s*(?:[\{*]|$))/
            ),
            delete Prism.languages.typescript.parameter;
          const typeInside = Prism.languages.extend('typescript', {});
          delete typeInside['class-name'],
            (Prism.languages.typescript['class-name'].inside = typeInside),
            Prism.languages.insertBefore('typescript', 'function', {
              decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: { at: { pattern: /^@/, alias: 'operator' }, function: /^[\s\S]+/ },
              },
              'generic-function': {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: typeInside },
                },
              },
            }),
            (Prism.languages.ts = Prism.languages.typescript);
        })(Prism);
      }
      (module.exports = typescript),
        (typescript.displayName = 'typescript'),
        (typescript.aliases = ['ts']);
    },
    896(module, exports, __webpack_require__) {
      (function (global) {
        const ctx =
          typeof globalThis === 'object'
            ? globalThis
            : typeof self === 'object'
            ? self
            : typeof window === 'object'
            ? window
            : typeof global === 'object'
            ? global
            : {};
        const restore = (function capture() {
          let defined = 'Prism' in ctx;
          let current = defined ? ctx.Prism : void 0;
          return function restore() {
            defined ? (ctx.Prism = current) : delete ctx.Prism;
            (defined = void 0), (current = void 0);
          };
        })();
        ctx.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
        const h = __webpack_require__(897);
        const decode = __webpack_require__(913);
        const Prism = __webpack_require__(920);
        const markup = __webpack_require__(886);
        const css = __webpack_require__(887);
        const clike = __webpack_require__(921);
        const js = __webpack_require__(922);
        restore();
        const own = {}.hasOwnProperty;
        function Refractor() {}
        Refractor.prototype = Prism;
        const refract = new Refractor();
        function register(grammar) {
          if (typeof grammar !== 'function' || !grammar.displayName)
            throw new Error(`Expected \`function\` for \`grammar\`, got \`${grammar}\``);
          void 0 === refract.languages[grammar.displayName] && grammar(refract);
        }
        (module.exports = refract),
          (refract.highlight = function highlight(value, name) {
            let grammar;
            const sup = Prism.highlight;
            if (typeof value !== 'string')
              throw new Error(`Expected \`string\` for \`value\`, got \`${value}\``);
            if (refract.util.type(name) === 'Object') (grammar = name), (name = null);
            else {
              if (typeof name !== 'string')
                throw new Error(`Expected \`string\` for \`name\`, got \`${name}\``);
              if (!own.call(refract.languages, name))
                throw new Error(`Unknown language: \`${name}\` is not registered`);
              grammar = refract.languages[name];
            }
            return sup.call(this, value, grammar, name);
          }),
          (refract.register = register),
          (refract.alias = function alias(name, alias) {
            let key;
            let list;
            let length;
            let index;
            const { languages } = refract;
            let map = name;
            alias && ((map = {})[name] = alias);
            for (key in map)
              for (
                list = map[key],
                  length = (list = typeof list === 'string' ? [list] : list).length,
                  index = -1;
                ++index < length;

              )
                languages[list[index]] = languages[key];
          }),
          (refract.registered = function registered(language) {
            if (typeof language !== 'string')
              throw new Error(`Expected \`string\` for \`language\`, got \`${language}\``);
            return own.call(refract.languages, language);
          }),
          (refract.listLanguages = function listLanguages() {
            let language;
            const { languages } = refract;
            const list = [];
            for (language in languages)
              own.call(languages, language) &&
                typeof languages[language] === 'object' &&
                list.push(language);
            return list;
          }),
          register(markup),
          register(css),
          register(clike),
          register(js),
          (refract.util.encode = function encode(tokens) {
            return tokens;
          }),
          (refract.Token.stringify = function stringify(value, language, parent) {
            let env;
            if (typeof value === 'string') return { type: 'text', value };
            if (refract.util.type(value) === 'Array')
              return (function stringifyAll(values, language) {
                let value;
                const result = [];
                let { length } = values;
                let index = -1;
                for (; ++index < length; )
                  (value = values[index]) !== '' && value != null && result.push(value);
                (index = -1), (length = result.length);
                for (; ++index < length; )
                  (value = result[index]),
                    (result[index] = refract.Token.stringify(value, language, result));
                return result;
              })(value, language);
            (env = {
              type: value.type,
              content: refract.Token.stringify(value.content, language, parent),
              tag: 'span',
              classes: ['token', value.type],
              attributes: {},
              language,
              parent,
            }),
              value.alias && (env.classes = env.classes.concat(value.alias));
            return (
              refract.hooks.run('wrap', env),
              h(
                `${env.tag}.${env.classes.join('.')}`,
                (function attributes(attrs) {
                  let key;
                  for (key in attrs) attrs[key] = decode(attrs[key]);
                  return attrs;
                })(env.attributes),
                env.content
              )
            );
          });
      }.call(this, __webpack_require__(97)));
    },
    897(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(898);
    },
    898(module, exports, __webpack_require__) {
      const schema = __webpack_require__(899);
      const html = __webpack_require__(908)(schema, 'div');
      (html.displayName = 'html'), (module.exports = html);
    },
    899(module, exports, __webpack_require__) {
      const merge = __webpack_require__(900);
      const xlink = __webpack_require__(902);
      const xml = __webpack_require__(903);
      const xmlns = __webpack_require__(904);
      const aria = __webpack_require__(906);
      const html = __webpack_require__(907);
      module.exports = merge([xml, xlink, xmlns, aria, html]);
    },
    900(module, exports, __webpack_require__) {
      const xtend = __webpack_require__(901);
      const Schema = __webpack_require__(881);
      module.exports = function merge(definitions) {
        let info;
        let space;
        const { length } = definitions;
        const property = [];
        const normal = [];
        let index = -1;
        for (; ++index < length; )
          (info = definitions[index]),
            property.push(info.property),
            normal.push(info.normal),
            (space = info.space);
        return new Schema(xtend.apply(null, property), xtend.apply(null, normal), space);
      };
    },
    901(module, exports) {
      module.exports = function extend() {
        for (var target = {}, i = 0; i < arguments.length; i++) {
          const source = arguments[i];
          for (const key in source) hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
      };
      var { hasOwnProperty } = Object.prototype;
    },
    902(module, exports, __webpack_require__) {
      const create = __webpack_require__(878);
      module.exports = create({
        space: 'xlink',
        transform: function xlinkTransform(_, prop) {
          return `xlink:${prop.slice(5).toLowerCase()}`;
        },
        properties: {
          xLinkActuate: null,
          xLinkArcRole: null,
          xLinkHref: null,
          xLinkRole: null,
          xLinkShow: null,
          xLinkTitle: null,
          xLinkType: null,
        },
      });
    },
    903(module, exports, __webpack_require__) {
      const create = __webpack_require__(878);
      module.exports = create({
        space: 'xml',
        transform: function xmlTransform(_, prop) {
          return `xml:${prop.slice(3).toLowerCase()}`;
        },
        properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
      });
    },
    904(module, exports, __webpack_require__) {
      const create = __webpack_require__(878);
      const caseInsensitiveTransform = __webpack_require__(884);
      module.exports = create({
        space: 'xmlns',
        attributes: { xmlnsxlink: 'xmlns:xlink' },
        transform: caseInsensitiveTransform,
        properties: { xmlns: null, xmlnsXLink: null },
      });
    },
    905(module, exports, __webpack_require__) {
      module.exports = function caseSensitiveTransform(attributes, attribute) {
        return attribute in attributes ? attributes[attribute] : attribute;
      };
    },
    906(module, exports, __webpack_require__) {
      const types = __webpack_require__(880);
      const create = __webpack_require__(878);
      const { booleanish } = types;
      const { number } = types;
      const { spaceSeparated } = types;
      module.exports = create({
        transform: function ariaTransform(_, prop) {
          return prop === 'role' ? prop : `aria-${prop.slice(4).toLowerCase()}`;
        },
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: booleanish,
          ariaAutoComplete: null,
          ariaBusy: booleanish,
          ariaChecked: booleanish,
          ariaColCount: number,
          ariaColIndex: number,
          ariaColSpan: number,
          ariaControls: spaceSeparated,
          ariaCurrent: null,
          ariaDescribedBy: spaceSeparated,
          ariaDetails: null,
          ariaDisabled: booleanish,
          ariaDropEffect: spaceSeparated,
          ariaErrorMessage: null,
          ariaExpanded: booleanish,
          ariaFlowTo: spaceSeparated,
          ariaGrabbed: booleanish,
          ariaHasPopup: null,
          ariaHidden: booleanish,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: spaceSeparated,
          ariaLevel: number,
          ariaLive: null,
          ariaModal: booleanish,
          ariaMultiLine: booleanish,
          ariaMultiSelectable: booleanish,
          ariaOrientation: null,
          ariaOwns: spaceSeparated,
          ariaPlaceholder: null,
          ariaPosInSet: number,
          ariaPressed: booleanish,
          ariaReadOnly: booleanish,
          ariaRelevant: null,
          ariaRequired: booleanish,
          ariaRoleDescription: spaceSeparated,
          ariaRowCount: number,
          ariaRowIndex: number,
          ariaRowSpan: number,
          ariaSelected: booleanish,
          ariaSetSize: number,
          ariaSort: null,
          ariaValueMax: number,
          ariaValueMin: number,
          ariaValueNow: number,
          ariaValueText: null,
          role: null,
        },
      });
    },
    907(module, exports, __webpack_require__) {
      const types = __webpack_require__(880);
      const create = __webpack_require__(878);
      const caseInsensitiveTransform = __webpack_require__(884);
      const { boolean } = types;
      const { overloadedBoolean } = types;
      const { booleanish } = types;
      const { number } = types;
      const { spaceSeparated } = types;
      const { commaSeparated } = types;
      module.exports = create({
        space: 'html',
        attributes: {
          acceptcharset: 'accept-charset',
          classname: 'class',
          htmlfor: 'for',
          httpequiv: 'http-equiv',
        },
        transform: caseInsensitiveTransform,
        mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
        properties: {
          abbr: null,
          accept: commaSeparated,
          acceptCharset: spaceSeparated,
          accessKey: spaceSeparated,
          action: null,
          allow: null,
          allowFullScreen: boolean,
          allowPaymentRequest: boolean,
          allowUserMedia: boolean,
          alt: null,
          as: null,
          async: boolean,
          autoCapitalize: null,
          autoComplete: spaceSeparated,
          autoFocus: boolean,
          autoPlay: boolean,
          capture: boolean,
          charSet: null,
          checked: boolean,
          cite: null,
          className: spaceSeparated,
          cols: number,
          colSpan: null,
          content: null,
          contentEditable: booleanish,
          controls: boolean,
          controlsList: spaceSeparated,
          coords: number | commaSeparated,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: boolean,
          defer: boolean,
          dir: null,
          dirName: null,
          disabled: boolean,
          download: overloadedBoolean,
          draggable: booleanish,
          encType: null,
          enterKeyHint: null,
          form: null,
          formAction: null,
          formEncType: null,
          formMethod: null,
          formNoValidate: boolean,
          formTarget: null,
          headers: spaceSeparated,
          height: number,
          hidden: boolean,
          high: number,
          href: null,
          hrefLang: null,
          htmlFor: spaceSeparated,
          httpEquiv: spaceSeparated,
          id: null,
          imageSizes: null,
          imageSrcSet: commaSeparated,
          inputMode: null,
          integrity: null,
          is: null,
          isMap: boolean,
          itemId: null,
          itemProp: spaceSeparated,
          itemRef: spaceSeparated,
          itemScope: boolean,
          itemType: spaceSeparated,
          kind: null,
          label: null,
          lang: null,
          language: null,
          list: null,
          loading: null,
          loop: boolean,
          low: number,
          manifest: null,
          max: null,
          maxLength: number,
          media: null,
          method: null,
          min: null,
          minLength: number,
          multiple: boolean,
          muted: boolean,
          name: null,
          nonce: null,
          noModule: boolean,
          noValidate: boolean,
          onAbort: null,
          onAfterPrint: null,
          onAuxClick: null,
          onBeforePrint: null,
          onBeforeUnload: null,
          onBlur: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onContextMenu: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFormData: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLanguageChange: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadEnd: null,
          onLoadStart: null,
          onMessage: null,
          onMessageError: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRejectionHandled: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSecurityPolicyViolation: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onSlotChange: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnhandledRejection: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onWheel: null,
          open: boolean,
          optimum: number,
          pattern: null,
          ping: spaceSeparated,
          placeholder: null,
          playsInline: boolean,
          poster: null,
          preload: null,
          readOnly: boolean,
          referrerPolicy: null,
          rel: spaceSeparated,
          required: boolean,
          reversed: boolean,
          rows: number,
          rowSpan: number,
          sandbox: spaceSeparated,
          scope: null,
          scoped: boolean,
          seamless: boolean,
          selected: boolean,
          shape: null,
          size: number,
          sizes: null,
          slot: null,
          span: number,
          spellCheck: booleanish,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: commaSeparated,
          start: number,
          step: null,
          style: null,
          tabIndex: number,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: boolean,
          useMap: null,
          value: booleanish,
          width: number,
          wrap: null,
          align: null,
          aLink: null,
          archive: spaceSeparated,
          axis: null,
          background: null,
          bgColor: null,
          border: number,
          borderColor: null,
          bottomMargin: number,
          cellPadding: null,
          cellSpacing: null,
          char: null,
          charOff: null,
          classId: null,
          clear: null,
          code: null,
          codeBase: null,
          codeType: null,
          color: null,
          compact: boolean,
          declare: boolean,
          event: null,
          face: null,
          frame: null,
          frameBorder: null,
          hSpace: number,
          leftMargin: number,
          link: null,
          longDesc: null,
          lowSrc: null,
          marginHeight: number,
          marginWidth: number,
          noResize: boolean,
          noHref: boolean,
          noShade: boolean,
          noWrap: boolean,
          object: null,
          profile: null,
          prompt: null,
          rev: null,
          rightMargin: number,
          rules: null,
          scheme: null,
          scrolling: booleanish,
          standby: null,
          summary: null,
          text: null,
          topMargin: number,
          valueType: null,
          version: null,
          vAlign: null,
          vLink: null,
          vSpace: number,
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          disablePictureInPicture: boolean,
          disableRemotePlayback: boolean,
          prefix: null,
          property: null,
          results: number,
          security: null,
          unselectable: null,
        },
      });
    },
    908(module, exports, __webpack_require__) {
      const find = __webpack_require__(909);
      const normalize = __webpack_require__(879);
      const parseSelector = __webpack_require__(910);
      const spaces = __webpack_require__(911).parse;
      const commas = __webpack_require__(912).parse;
      module.exports = function factory(schema, defaultTagName, caseSensitive) {
        const adjust = caseSensitive
          ? (function createAdjustMap(values) {
              let value;
              const { length } = values;
              let index = -1;
              const result = {};
              for (; ++index < length; ) result[(value = values[index]).toLowerCase()] = value;
              return result;
            })(caseSensitive)
          : null;
        return function h(selector, properties) {
          let property;
          const node = parseSelector(selector, defaultTagName);
          const children = Array.prototype.slice.call(arguments, 2);
          const name = node.tagName.toLowerCase();
          (node.tagName = adjust && own.call(adjust, name) ? adjust[name] : name),
            properties &&
              isChildren(properties, node) &&
              (children.unshift(properties), (properties = null));
          if (properties)
            for (property in properties)
              addProperty(node.properties, property, properties[property]);
          addChild(node.children, children),
            node.tagName === 'template' &&
              ((node.content = { type: 'root', children: node.children }), (node.children = []));
          return node;
        };
        function addProperty(properties, key, value) {
          let info;
          let property;
          let result;
          value != null &&
            value == value &&
            ((property = (info = find(schema, key)).property),
            typeof (result = value) === 'string' &&
              (info.spaceSeparated
                ? (result = spaces(result))
                : info.commaSeparated
                ? (result = commas(result))
                : info.commaOrSpaceSeparated && (result = spaces(commas(result).join(' ')))),
            property === 'style' &&
              typeof value !== 'string' &&
              (result = (function style(value) {
                let key;
                const result = [];
                for (key in value) result.push([key, value[key]].join(': '));
                return result.join('; ');
              })(result)),
            property === 'className' &&
              properties.className &&
              (result = properties.className.concat(result)),
            (properties[property] = (function parsePrimitives(info, name, value) {
              let index;
              let length;
              let result;
              if (typeof value !== 'object' || !('length' in value))
                return parsePrimitive(info, name, value);
              (length = value.length), (index = -1), (result = []);
              for (; ++index < length; ) result[index] = parsePrimitive(info, name, value[index]);
              return result;
            })(info, property, result)));
        }
      };
      var own = {}.hasOwnProperty;
      function isChildren(value, node) {
        return (
          typeof value === 'string' ||
          'length' in value ||
          (function isNode(tagName, value) {
            let { type } = value;
            if (tagName === 'input' || !type || typeof type !== 'string') return !1;
            if (typeof value.children === 'object' && 'length' in value.children) return !0;
            if (((type = type.toLowerCase()), tagName === 'button'))
              return type !== 'menu' && type !== 'submit' && type !== 'reset' && type !== 'button';
            return 'value' in value;
          })(node.tagName, value)
        );
      }
      function addChild(nodes, value) {
        let index;
        let length;
        if (typeof value !== 'string' && typeof value !== 'number')
          if (typeof value === 'object' && 'length' in value)
            for (index = -1, length = value.length; ++index < length; )
              addChild(nodes, value[index]);
          else {
            if (typeof value !== 'object' || !('type' in value))
              throw new Error(`Expected node, nodes, or string, got \`${value}\``);
            nodes.push(value);
          }
        else nodes.push({ type: 'text', value: String(value) });
      }
      function parsePrimitive(info, name, value) {
        let result = value;
        return (
          info.number || info.positiveNumber
            ? isNaN(result) || result === '' || (result = Number(result))
            : (info.boolean || info.overloadedBoolean) &&
              (typeof result !== 'string' ||
                (result !== '' && normalize(value) !== normalize(name)) ||
                (result = !0)),
          result
        );
      }
    },
    909(module, exports, __webpack_require__) {
      const normalize = __webpack_require__(879);
      const DefinedInfo = __webpack_require__(882);
      const Info = __webpack_require__(883);
      module.exports = function find(schema, value) {
        const normal = normalize(value);
        let prop = value;
        let Type = Info;
        if (normal in schema.normal) return schema.property[schema.normal[normal]];
        normal.length > 4 &&
          normal.slice(0, 4) === 'data' &&
          valid.test(value) &&
          (value.charAt(4) === '-'
            ? (prop = (function datasetToProperty(attribute) {
                const value = attribute.slice(5).replace(dash, camelcase);
                return `data${value.charAt(0).toUpperCase()}${value.slice(1)}`;
              })(value))
            : (value = (function datasetToAttribute(property) {
                let value = property.slice(4);
                if (dash.test(value)) return property;
                (value = value.replace(cap, kebab)).charAt(0) !== '-' && (value = `-${value}`);
                return `data${value}`;
              })(value)),
          (Type = DefinedInfo));
        return new Type(prop, value);
      };
      var valid = /^data[-\w.:]+$/i;
      var dash = /-[a-z]/g;
      var cap = /[A-Z]/g;
      function kebab($0) {
        return `-${$0.toLowerCase()}`;
      }
      function camelcase($0) {
        return $0.charAt(1).toUpperCase();
      }
    },
    910(module, exports, __webpack_require__) {
      module.exports = function parse(selector, defaultTagName) {
        let subvalue;
        let previous;
        let match;
        const value = selector || '';
        let name = defaultTagName || 'div';
        const props = {};
        let start = 0;
        for (; start < value.length; )
          (search.lastIndex = start),
            (match = search.exec(value)),
            (subvalue = value.slice(start, match ? match.index : value.length)) &&
              (previous
                ? previous === '#'
                  ? (props.id = subvalue)
                  : props.className
                  ? props.className.push(subvalue)
                  : (props.className = [subvalue])
                : (name = subvalue),
              (start += subvalue.length)),
            match && ((previous = match[0]), start++);
        return { type: 'element', tagName: name, properties: props, children: [] };
      };
      var search = /[#.]/g;
    },
    911(module, exports, __webpack_require__) {
      (exports.parse = function parse(value) {
        const input = String(value || '').trim();
        return input === '' ? [] : input.split(whiteSpace);
      }),
        (exports.stringify = function stringify(values) {
          return values.join(' ').trim();
        });
      var whiteSpace = /[ \t\n\r\f]+/g;
    },
    912(module, exports, __webpack_require__) {
      (exports.parse = function parse(value) {
        let val;
        const values = [];
        const input = String(value || '');
        let index = input.indexOf(',');
        let lastIndex = 0;
        let end = !1;
        for (; !end; )
          index === -1 && ((index = input.length), (end = !0)),
            (!(val = input.slice(lastIndex, index).trim()) && end) || values.push(val),
            (lastIndex = index + 1),
            (index = input.indexOf(',', lastIndex));
        return values;
      }),
        (exports.stringify = function stringify(values, options) {
          const settings = options || {};
          const left = !1 === settings.padLeft ? '' : ' ';
          const right = settings.padRight ? ' ' : '';
          values[values.length - 1] === '' && (values = values.concat(''));
          return values.join(`${right},${left}`).trim();
        });
    },
    913(module, exports, __webpack_require__) {
      const legacy = __webpack_require__(914);
      const invalid = __webpack_require__(915);
      const decimal = __webpack_require__(885);
      const hexadecimal = __webpack_require__(916);
      const alphanumerical = __webpack_require__(917);
      const decodeEntity = __webpack_require__(919);
      module.exports = function parseEntities(value, options) {
        let option;
        let key;
        const settings = {};
        options || (options = {});
        for (key in defaults)
          (option = options[key]), (settings[key] = option == null ? defaults[key] : option);
        (settings.position.indent || settings.position.start) &&
          ((settings.indent = settings.position.indent || []),
          (settings.position = settings.position.start));
        return (function parse(value, settings) {
          let entityCharacters;
          let namedEntity;
          let terminated;
          let characters;
          let character;
          let reference;
          let following;
          let warning;
          let reason;
          let output;
          let entity;
          let begin;
          let start;
          let type;
          let test;
          let prev;
          let next;
          let diff;
          let end;
          let { additional } = settings;
          const { nonTerminated } = settings;
          const handleText = settings.text;
          const handleReference = settings.reference;
          const handleWarning = settings.warning;
          const { textContext } = settings;
          const { referenceContext } = settings;
          const { warningContext } = settings;
          const pos = settings.position;
          const indent = settings.indent || [];
          let { length } = value;
          let index = 0;
          let lines = -1;
          let column = pos.column || 1;
          let line = pos.line || 1;
          let queue = '';
          const result = [];
          typeof additional === 'string' && (additional = additional.charCodeAt(0));
          (prev = now()), (warning = handleWarning ? parseError : noop), index--, length++;
          for (; ++index < length; )
            if (
              (character === 10 && (column = indent[lines] || 1),
              (character = value.charCodeAt(index)) === 38)
            ) {
              if (
                (following = value.charCodeAt(index + 1)) === 9 ||
                following === 10 ||
                following === 12 ||
                following === 32 ||
                following === 38 ||
                following === 60 ||
                following != following ||
                (additional && following === additional)
              ) {
                (queue += fromCharCode(character)), column++;
                continue;
              }
              for (
                begin = start = index + 1,
                  end = start,
                  following === 35
                    ? ((end = ++begin),
                      (following = value.charCodeAt(end)) === 88 || following === 120
                        ? ((type = hexa), (end = ++begin))
                        : (type = deci))
                    : (type = name),
                  entityCharacters = '',
                  entity = '',
                  characters = '',
                  test = tests[type],
                  end--;
                ++end < length && test((following = value.charCodeAt(end)));

              )
                (characters += fromCharCode(following)),
                  type === name &&
                    own.call(legacy, characters) &&
                    ((entityCharacters = characters), (entity = legacy[characters]));
              (terminated = value.charCodeAt(end) === 59) &&
                (end++,
                (namedEntity = type === name && decodeEntity(characters)) &&
                  ((entityCharacters = characters), (entity = namedEntity))),
                (diff = 1 + end - start),
                (terminated || nonTerminated) &&
                  (characters
                    ? type === name
                      ? (terminated && !entity
                          ? warning(5, 1)
                          : (entityCharacters !== characters &&
                              ((diff = 1 + (end = begin + entityCharacters.length) - begin),
                              (terminated = !1)),
                            terminated ||
                              ((reason = entityCharacters ? 1 : 3),
                              settings.attribute
                                ? (following = value.charCodeAt(end)) === 61
                                  ? (warning(reason, diff), (entity = null))
                                  : alphanumerical(following)
                                  ? (entity = null)
                                  : warning(reason, diff)
                                : warning(reason, diff))),
                        (reference = entity))
                      : (terminated || warning(2, diff),
                        prohibited((reference = parseInt(characters, bases[type])))
                          ? (warning(7, diff), (reference = fromCharCode(65533)))
                          : reference in invalid
                          ? (warning(6, diff), (reference = invalid[reference]))
                          : ((output = ''),
                            disallowed(reference) && warning(6, diff),
                            reference > 65535 &&
                              ((output += fromCharCode(((reference -= 65536) >>> 10) | 55296)),
                              (reference = 56320 | (1023 & reference))),
                            (reference = output + fromCharCode(reference))))
                    : type !== name && warning(4, diff)),
                reference
                  ? (flush(),
                    (prev = now()),
                    (index = end - 1),
                    (column += end - start + 1),
                    result.push(reference),
                    (next = now()).offset++,
                    handleReference &&
                      handleReference.call(
                        referenceContext,
                        reference,
                        { start: prev, end: next },
                        value.slice(start - 1, end)
                      ),
                    (prev = next))
                  : ((characters = value.slice(start - 1, end)),
                    (queue += characters),
                    (column += characters.length),
                    (index = end - 1));
            } else
              character === 10 && (line++, lines++, (column = 0)),
                character == character ? ((queue += fromCharCode(character)), column++) : flush();
          return result.join('');
          function now() {
            return { line, column, offset: index + (pos.offset || 0) };
          }
          function parseError(code, offset) {
            const position = now();
            (position.column += offset),
              (position.offset += offset),
              handleWarning.call(warningContext, messages[code], position, code);
          }
          function flush() {
            queue &&
              (result.push(queue),
              handleText && handleText.call(textContext, queue, { start: prev, end: now() }),
              (queue = ''));
          }
        })(value, settings);
      };
      var own = {}.hasOwnProperty;
      var { fromCharCode } = String;
      var noop = Function.prototype;
      var defaults = {
        warning: null,
        reference: null,
        text: null,
        warningContext: null,
        referenceContext: null,
        textContext: null,
        position: {},
        additional: null,
        attribute: !1,
        nonTerminated: !0,
      };
      var name = 'named';
      var hexa = 'hexadecimal';
      var deci = 'decimal';
      var bases = { hexadecimal: 16, decimal: 10 };
      var tests = {};
      (tests.named = alphanumerical), (tests[deci] = decimal), (tests[hexa] = hexadecimal);
      var messages = {};
      function prohibited(code) {
        return (code >= 55296 && code <= 57343) || code > 1114111;
      }
      function disallowed(code) {
        return (
          (code >= 1 && code <= 8) ||
          code === 11 ||
          (code >= 13 && code <= 31) ||
          (code >= 127 && code <= 159) ||
          (code >= 64976 && code <= 65007) ||
          (65535 & code) == 65535 ||
          (65535 & code) == 65534
        );
      }
      (messages[1] = 'Named character references must be terminated by a semicolon'),
        (messages[2] = 'Numeric character references must be terminated by a semicolon'),
        (messages[3] = 'Named character references cannot be empty'),
        (messages[4] = 'Numeric character references cannot be empty'),
        (messages[5] = 'Named character references must be known'),
        (messages[6] = 'Numeric character references cannot be disallowed'),
        (messages[7] =
          'Numeric character references cannot be outside the permissible Unicode range');
    },
    914(module) {
      module.exports = JSON.parse(
        '{"AElig":"Æ","AMP":"&","Aacute":"Á","Acirc":"Â","Agrave":"À","Aring":"Å","Atilde":"Ã","Auml":"Ä","COPY":"©","Ccedil":"Ç","ETH":"Ð","Eacute":"É","Ecirc":"Ê","Egrave":"È","Euml":"Ë","GT":">","Iacute":"Í","Icirc":"Î","Igrave":"Ì","Iuml":"Ï","LT":"<","Ntilde":"Ñ","Oacute":"Ó","Ocirc":"Ô","Ograve":"Ò","Oslash":"Ø","Otilde":"Õ","Ouml":"Ö","QUOT":"\\"","REG":"®","THORN":"Þ","Uacute":"Ú","Ucirc":"Û","Ugrave":"Ù","Uuml":"Ü","Yacute":"Ý","aacute":"á","acirc":"â","acute":"´","aelig":"æ","agrave":"à","amp":"&","aring":"å","atilde":"ã","auml":"ä","brvbar":"¦","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","curren":"¤","deg":"°","divide":"÷","eacute":"é","ecirc":"ê","egrave":"è","eth":"ð","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","iacute":"í","icirc":"î","iexcl":"¡","igrave":"ì","iquest":"¿","iuml":"ï","laquo":"«","lt":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","ntilde":"ñ","oacute":"ó","ocirc":"ô","ograve":"ò","ordf":"ª","ordm":"º","oslash":"ø","otilde":"õ","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","raquo":"»","reg":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","thorn":"þ","times":"×","uacute":"ú","ucirc":"û","ugrave":"ù","uml":"¨","uuml":"ü","yacute":"ý","yen":"¥","yuml":"ÿ"}'
      );
    },
    915(module) {
      module.exports = JSON.parse(
        '{"0":"�","128":"€","130":"‚","131":"ƒ","132":"„","133":"…","134":"†","135":"‡","136":"ˆ","137":"‰","138":"Š","139":"‹","140":"Œ","142":"Ž","145":"‘","146":"’","147":"“","148":"”","149":"•","150":"–","151":"—","152":"˜","153":"™","154":"š","155":"›","156":"œ","158":"ž","159":"Ÿ"}'
      );
    },
    916(module, exports, __webpack_require__) {
      module.exports = function hexadecimal(character) {
        const code = typeof character === 'string' ? character.charCodeAt(0) : character;
        return (
          (code >= 97 && code <= 102) || (code >= 65 && code <= 70) || (code >= 48 && code <= 57)
        );
      };
    },
    917(module, exports, __webpack_require__) {
      const alphabetical = __webpack_require__(918);
      const decimal = __webpack_require__(885);
      module.exports = function alphanumerical(character) {
        return alphabetical(character) || decimal(character);
      };
    },
    918(module, exports, __webpack_require__) {
      module.exports = function alphabetical(character) {
        const code = typeof character === 'string' ? character.charCodeAt(0) : character;
        return (code >= 97 && code <= 122) || (code >= 65 && code <= 90);
      };
    },
    919(module, exports, __webpack_require__) {
      let el;
      module.exports = function decodeEntity(characters) {
        let char;
        const entity = `&${characters};`;
        if (
          (((el = el || document.createElement('i')).innerHTML = entity),
          (char = el.textContent).charCodeAt(char.length - 1) === 59 && characters !== 'semi')
        )
          return !1;
        return char !== entity && char;
      };
    },
    920(module, exports, __webpack_require__) {
      (function (global) {
        const Prism = (function (_self) {
          const lang = /\blang(?:uage)?-([\w-]+)\b/i;
          let uniqueId = 0;
          const plainTextGrammar = {};
          var _ = {
            manual: _self.Prism && _self.Prism.manual,
            disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
            util: {
              encode: function encode(tokens) {
                return tokens instanceof Token
                  ? new Token(tokens.type, encode(tokens.content), tokens.alias)
                  : Array.isArray(tokens)
                  ? tokens.map(encode)
                  : tokens
                      .replace(/&/g, '&amp;')
                      .replace(/</g, '&lt;')
                      .replace(/\u00a0/g, ' ');
              },
              type(o) {
                return Object.prototype.toString.call(o).slice(8, -1);
              },
              objId(obj) {
                return (
                  obj.__id || Object.defineProperty(obj, '__id', { value: ++uniqueId }), obj.__id
                );
              },
              clone: function deepClone(o, visited) {
                let clone;
                let id;
                switch (((visited = visited || {}), _.util.type(o))) {
                  case 'Object':
                    if (((id = _.util.objId(o)), visited[id])) return visited[id];
                    for (const key in ((clone = {}), (visited[id] = clone), o))
                      o.hasOwnProperty(key) && (clone[key] = deepClone(o[key], visited));
                    return clone;
                  case 'Array':
                    return (
                      (id = _.util.objId(o)),
                      visited[id]
                        ? visited[id]
                        : ((clone = []),
                          (visited[id] = clone),
                          o.forEach((v, i) => {
                            clone[i] = deepClone(v, visited);
                          }),
                          clone)
                    );
                  default:
                    return o;
                }
              },
              getLanguage(element) {
                for (; element && !lang.test(element.className); ) element = element.parentElement;
                return element
                  ? (element.className.match(lang) || [, 'none'])[1].toLowerCase()
                  : 'none';
              },
              currentScript() {
                if (typeof document === 'undefined') return null;
                if ('currentScript' in document) return document.currentScript;
                try {
                  throw new Error();
                } catch (err) {
                  const src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
                  if (src) {
                    const scripts = document.getElementsByTagName('script');
                    for (const i in scripts) if (scripts[i].src == src) return scripts[i];
                  }
                  return null;
                }
              },
              isActive(element, className, defaultActivation) {
                for (let no = `no-${className}`; element; ) {
                  const { classList } = element;
                  if (classList.contains(className)) return !0;
                  if (classList.contains(no)) return !1;
                  element = element.parentElement;
                }
                return !!defaultActivation;
              },
            },
            languages: {
              plain: plainTextGrammar,
              plaintext: plainTextGrammar,
              text: plainTextGrammar,
              txt: plainTextGrammar,
              extend(id, redef) {
                const lang = _.util.clone(_.languages[id]);
                for (const key in redef) lang[key] = redef[key];
                return lang;
              },
              insertBefore(inside, before, insert, root) {
                const grammar = (root = root || _.languages)[inside];
                const ret = {};
                for (const token in grammar)
                  if (grammar.hasOwnProperty(token)) {
                    if (token == before)
                      for (const newToken in insert)
                        insert.hasOwnProperty(newToken) && (ret[newToken] = insert[newToken]);
                    insert.hasOwnProperty(token) || (ret[token] = grammar[token]);
                  }
                const old = root[inside];
                return (
                  (root[inside] = ret),
                  _.languages.DFS(_.languages, function (key, value) {
                    value === old && key != inside && (this[key] = ret);
                  }),
                  ret
                );
              },
              DFS: function DFS(o, callback, type, visited) {
                visited = visited || {};
                const { objId } = _.util;
                for (const i in o)
                  if (o.hasOwnProperty(i)) {
                    callback.call(o, i, o[i], type || i);
                    const property = o[i];
                    const propertyType = _.util.type(property);
                    propertyType !== 'Object' || visited[objId(property)]
                      ? propertyType !== 'Array' ||
                        visited[objId(property)] ||
                        ((visited[objId(property)] = !0), DFS(property, callback, i, visited))
                      : ((visited[objId(property)] = !0), DFS(property, callback, null, visited));
                  }
              },
            },
            plugins: {},
            highlightAll(async, callback) {
              _.highlightAllUnder(document, async, callback);
            },
            highlightAllUnder(container, async, callback) {
              const env = {
                callback,
                container,
                selector:
                  'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
              };
              _.hooks.run('before-highlightall', env),
                (env.elements = Array.prototype.slice.apply(
                  env.container.querySelectorAll(env.selector)
                )),
                _.hooks.run('before-all-elements-highlight', env);
              for (var element, i = 0; (element = env.elements[i++]); )
                _.highlightElement(element, !0 === async, env.callback);
            },
            highlightElement(element, async, callback) {
              const language = _.util.getLanguage(element);
              const grammar = _.languages[language];
              element.className = `${element.className
                .replace(lang, '')
                .replace(/\s+/g, ' ')} language-${language}`;
              let parent = element.parentElement;
              parent &&
                parent.nodeName.toLowerCase() === 'pre' &&
                (parent.className = `${parent.className
                  .replace(lang, '')
                  .replace(/\s+/g, ' ')} language-${language}`);
              const env = {
                element,
                language,
                grammar,
                code: element.textContent,
              };
              function insertHighlightedCode(highlightedCode) {
                (env.highlightedCode = highlightedCode),
                  _.hooks.run('before-insert', env),
                  (env.element.innerHTML = env.highlightedCode),
                  _.hooks.run('after-highlight', env),
                  _.hooks.run('complete', env),
                  callback && callback.call(env.element);
              }
              if (
                (_.hooks.run('before-sanity-check', env),
                (parent = env.element.parentElement) &&
                  parent.nodeName.toLowerCase() === 'pre' &&
                  !parent.hasAttribute('tabindex') &&
                  parent.setAttribute('tabindex', '0'),
                !env.code)
              )
                return _.hooks.run('complete', env), void (callback && callback.call(env.element));
              if ((_.hooks.run('before-highlight', env), env.grammar))
                if (async && _self.Worker) {
                  const worker = new Worker(_.filename);
                  (worker.onmessage = function (evt) {
                    insertHighlightedCode(evt.data);
                  }),
                    worker.postMessage(
                      JSON.stringify({
                        language: env.language,
                        code: env.code,
                        immediateClose: !0,
                      })
                    );
                } else insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
              else insertHighlightedCode(_.util.encode(env.code));
            },
            highlight(text, grammar, language) {
              const env = { code: text, grammar, language };
              return (
                _.hooks.run('before-tokenize', env),
                (env.tokens = _.tokenize(env.code, env.grammar)),
                _.hooks.run('after-tokenize', env),
                Token.stringify(_.util.encode(env.tokens), env.language)
              );
            },
            tokenize(text, grammar) {
              const { rest } = grammar;
              if (rest) {
                for (const token in rest) grammar[token] = rest[token];
                delete grammar.rest;
              }
              const tokenList = new LinkedList();
              return (
                addAfter(tokenList, tokenList.head, text),
                matchGrammar(text, tokenList, grammar, tokenList.head, 0),
                (function toArray(list) {
                  const array = [];
                  let node = list.head.next;
                  for (; node !== list.tail; ) array.push(node.value), (node = node.next);
                  return array;
                })(tokenList)
              );
            },
            hooks: {
              all: {},
              add(name, callback) {
                const hooks = _.hooks.all;
                (hooks[name] = hooks[name] || []), hooks[name].push(callback);
              },
              run(name, env) {
                const callbacks = _.hooks.all[name];
                if (callbacks && callbacks.length)
                  for (var callback, i = 0; (callback = callbacks[i++]); ) callback(env);
              },
            },
            Token,
          };
          function Token(type, content, alias, matchedStr) {
            (this.type = type),
              (this.content = content),
              (this.alias = alias),
              (this.length = 0 | (matchedStr || '').length);
          }
          function matchPattern(pattern, pos, text, lookbehind) {
            pattern.lastIndex = pos;
            const match = pattern.exec(text);
            if (match && lookbehind && match[1]) {
              const lookbehindLength = match[1].length;
              (match.index += lookbehindLength), (match[0] = match[0].slice(lookbehindLength));
            }
            return match;
          }
          function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
            for (const token in grammar)
              if (grammar.hasOwnProperty(token) && grammar[token]) {
                let patterns = grammar[token];
                patterns = Array.isArray(patterns) ? patterns : [patterns];
                for (let j = 0; j < patterns.length; ++j) {
                  if (rematch && rematch.cause == `${token},${j}`) return;
                  const patternObj = patterns[j];
                  const { inside } = patternObj;
                  const lookbehind = !!patternObj.lookbehind;
                  const greedy = !!patternObj.greedy;
                  const { alias } = patternObj;
                  if (greedy && !patternObj.pattern.global) {
                    const flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
                    patternObj.pattern = RegExp(patternObj.pattern.source, `${flags}g`);
                  }
                  for (
                    let pattern = patternObj.pattern || patternObj,
                      currentNode = startNode.next,
                      pos = startPos;
                    currentNode !== tokenList.tail && !(rematch && pos >= rematch.reach);
                    pos += currentNode.value.length, currentNode = currentNode.next
                  ) {
                    let str = currentNode.value;
                    if (tokenList.length > text.length) return;
                    if (!(str instanceof Token)) {
                      var match;
                      let removeCount = 1;
                      if (greedy) {
                        if (!(match = matchPattern(pattern, pos, text, lookbehind))) break;
                        var from = match.index;
                        const to = match.index + match[0].length;
                        let p = pos;
                        for (p += currentNode.value.length; from >= p; )
                          p += (currentNode = currentNode.next).value.length;
                        if (
                          ((pos = p -= currentNode.value.length),
                          currentNode.value instanceof Token)
                        )
                          continue;
                        for (
                          let k = currentNode;
                          k !== tokenList.tail && (p < to || typeof k.value === 'string');
                          k = k.next
                        )
                          removeCount++, (p += k.value.length);
                        removeCount--, (str = text.slice(pos, p)), (match.index -= pos);
                      } else if (!(match = matchPattern(pattern, 0, str, lookbehind))) continue;
                      from = match.index;
                      const matchStr = match[0];
                      const before = str.slice(0, from);
                      const after = str.slice(from + matchStr.length);
                      const reach = pos + str.length;
                      rematch && reach > rematch.reach && (rematch.reach = reach);
                      let removeFrom = currentNode.prev;
                      if (
                        (before &&
                          ((removeFrom = addAfter(tokenList, removeFrom, before)),
                          (pos += before.length)),
                        removeRange(tokenList, removeFrom, removeCount),
                        (currentNode = addAfter(
                          tokenList,
                          removeFrom,
                          new Token(
                            token,
                            inside ? _.tokenize(matchStr, inside) : matchStr,
                            alias,
                            matchStr
                          )
                        )),
                        after && addAfter(tokenList, currentNode, after),
                        removeCount > 1)
                      ) {
                        const nestedRematch = { cause: `${token},${j}`, reach };
                        matchGrammar(
                          text,
                          tokenList,
                          grammar,
                          currentNode.prev,
                          pos,
                          nestedRematch
                        ),
                          rematch &&
                            nestedRematch.reach > rematch.reach &&
                            (rematch.reach = nestedRematch.reach);
                      }
                    }
                  }
                }
              }
          }
          function LinkedList() {
            const head = { value: null, prev: null, next: null };
            const tail = { value: null, prev: head, next: null };
            (head.next = tail), (this.head = head), (this.tail = tail), (this.length = 0);
          }
          function addAfter(list, node, value) {
            const { next } = node;
            const newNode = { value, prev: node, next };
            return (node.next = newNode), (next.prev = newNode), list.length++, newNode;
          }
          function removeRange(list, node, count) {
            for (var { next } = node, i = 0; i < count && next !== list.tail; i++) next = next.next;
            (node.next = next), (next.prev = node), (list.length -= i);
          }
          if (
            ((_self.Prism = _),
            (Token.stringify = function stringify(o, language) {
              if (typeof o === 'string') return o;
              if (Array.isArray(o)) {
                let s = '';
                return (
                  o.forEach((e) => {
                    s += stringify(e, language);
                  }),
                  s
                );
              }
              const env = {
                type: o.type,
                content: stringify(o.content, language),
                tag: 'span',
                classes: ['token', o.type],
                attributes: {},
                language,
              };
              const aliases = o.alias;
              aliases &&
                (Array.isArray(aliases)
                  ? Array.prototype.push.apply(env.classes, aliases)
                  : env.classes.push(aliases)),
                _.hooks.run('wrap', env);
              let attributes = '';
              for (const name in env.attributes)
                attributes += ` ${name}="${(env.attributes[name] || '').replace(/"/g, '&quot;')}"`;
              return `<${env.tag} class="${env.classes.join(' ')}"${attributes}>${env.content}</${
                env.tag
              }>`;
            }),
            !_self.document)
          )
            return _self.addEventListener
              ? (_.disableWorkerMessageHandler ||
                  _self.addEventListener(
                    'message',
                    (evt) => {
                      const message = JSON.parse(evt.data);
                      const lang = message.language;
                      const { code } = message;
                      const { immediateClose } = message;
                      _self.postMessage(_.highlight(code, _.languages[lang], lang)),
                        immediateClose && _self.close();
                    },
                    !1
                  ),
                _)
              : _;
          const script = _.util.currentScript();
          function highlightAutomaticallyCallback() {
            _.manual || _.highlightAll();
          }
          if (
            (script &&
              ((_.filename = script.src), script.hasAttribute('data-manual') && (_.manual = !0)),
            !_.manual)
          ) {
            const { readyState } = document;
            readyState === 'loading' || (readyState === 'interactive' && script && script.defer)
              ? document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback)
              : window.requestAnimationFrame
              ? window.requestAnimationFrame(highlightAutomaticallyCallback)
              : window.setTimeout(highlightAutomaticallyCallback, 16);
          }
          return _;
        })(
          typeof window !== 'undefined'
            ? window
            : typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope
            ? self
            : {}
        );
        module.exports && (module.exports = Prism), void 0 !== global && (global.Prism = Prism);
      }.call(this, __webpack_require__(97)));
    },
    921(module, exports, __webpack_require__) {
      function clike(Prism) {
        Prism.languages.clike = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          'class-name': {
            pattern:
              /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
          boolean: /\b(?:true|false)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        };
      }
      (module.exports = clike), (clike.displayName = 'clike'), (clike.aliases = []);
    },
    922(module, exports, __webpack_require__) {
      function javascript(Prism) {
        (Prism.languages.javascript = Prism.languages.extend('clike', {
          'class-name': [
            Prism.languages.clike['class-name'],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number:
            /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
          operator:
            /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
          (Prism.languages.javascript['class-name'][0].pattern =
            /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
          Prism.languages.insertBefore('javascript', 'keyword', {
            regex: {
              pattern:
                /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
              lookbehind: !0,
              greedy: !0,
              inside: {
                'regex-source': {
                  pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                  lookbehind: !0,
                  alias: 'language-regex',
                  inside: Prism.languages.regex,
                },
                'regex-delimiter': /^\/|\/$/,
                'regex-flags': /^[a-z]+$/,
              },
            },
            'function-variable': {
              pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
              alias: 'function',
            },
            parameter: [
              {
                pattern:
                  /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: Prism.languages.javascript,
              },
              {
                pattern:
                  /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: Prism.languages.javascript,
              },
              {
                pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: Prism.languages.javascript,
              },
              {
                pattern:
                  /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: Prism.languages.javascript,
              },
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
          }),
          Prism.languages.insertBefore('javascript', 'string', {
            hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
            'template-string': {
              pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
              greedy: !0,
              inside: {
                'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
                interpolation: {
                  pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                  lookbehind: !0,
                  inside: {
                    'interpolation-punctuation': { pattern: /^\$\{|\}$/, alias: 'punctuation' },
                    rest: Prism.languages.javascript,
                  },
                },
                string: /[\s\S]+/,
              },
            },
          }),
          Prism.languages.markup &&
            (Prism.languages.markup.tag.addInlined('script', 'javascript'),
            Prism.languages.markup.tag.addAttribute(
              /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
                .source,
              'javascript'
            )),
          (Prism.languages.js = Prism.languages.javascript);
      }
      (module.exports = javascript),
        (javascript.displayName = 'javascript'),
        (javascript.aliases = ['js']);
    },
    923(module, exports, __webpack_require__) {
      const objectWithoutPropertiesLoose = __webpack_require__(924);
      (module.exports = function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        let key;
        let i;
        const target = objectWithoutPropertiesLoose(source, excluded);
        if (Object.getOwnPropertySymbols) {
          const sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }),
        (module.exports.__esModule = !0),
        (module.exports.default = module.exports);
    },
    924(module, exports) {
      (module.exports = function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        let key;
        let i;
        const target = {};
        const sourceKeys = Object.keys(source);
        for (i = 0; i < sourceKeys.length; i++)
          (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
      }),
        (module.exports.__esModule = !0),
        (module.exports.default = module.exports);
    },
    925(module, exports) {
      (module.exports = function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }),
        (module.exports.__esModule = !0),
        (module.exports.default = module.exports);
    },
    926(module, exports) {
      function _extends() {
        return (
          (module.exports = _extends =
            Object.assign ||
            function (target) {
              for (let i = 1; i < arguments.length; i++) {
                const source = arguments[i];
                for (const key in source)
                  Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
              }
              return target;
            }),
          (module.exports.__esModule = !0),
          (module.exports.default = module.exports),
          _extends.apply(this, arguments)
        );
      }
      (module.exports = _extends),
        (module.exports.__esModule = !0),
        (module.exports.default = module.exports);
    },
    927(module, exports, __webpack_require__) {
      function jsExtras(Prism) {
        !(function (Prism) {
          function withId(source, flags) {
            return RegExp(
              source.replace(
                /<ID>/g,
                () => /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source
              ),
              flags
            );
          }
          Prism.languages.insertBefore('javascript', 'function-variable', {
            'method-variable': {
              pattern: RegExp(
                `(\\.\\s*)${Prism.languages.javascript['function-variable'].pattern.source}`
              ),
              lookbehind: !0,
              alias: ['function-variable', 'method', 'function', 'property-access'],
            },
          }),
            Prism.languages.insertBefore('javascript', 'function', {
              method: {
                pattern: RegExp(`(\\.\\s*)${Prism.languages.javascript.function.source}`),
                lookbehind: !0,
                alias: ['function', 'property-access'],
              },
            }),
            Prism.languages.insertBefore('javascript', 'constant', {
              'known-class-name': [
                {
                  pattern:
                    /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
                  alias: 'class-name',
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' },
              ],
            }),
            Prism.languages.insertBefore('javascript', 'keyword', {
              imports: {
                pattern: withId(
                  /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                    .source
                ),
                lookbehind: !0,
                inside: Prism.languages.javascript,
              },
              exports: {
                pattern: withId(
                  /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source
                ),
                lookbehind: !0,
                inside: Prism.languages.javascript,
              },
            }),
            Prism.languages.javascript.keyword.unshift(
              { pattern: /\b(?:as|default|export|from|import)\b/, alias: 'module' },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|for|finally|if|return|switch|throw|try|while|yield)\b/,
                alias: 'control-flow',
              },
              { pattern: /\bnull\b/, alias: ['null', 'nil'] },
              { pattern: /\bundefined\b/, alias: 'nil' }
            ),
            Prism.languages.insertBefore('javascript', 'operator', {
              spread: { pattern: /\.{3}/, alias: 'operator' },
              arrow: { pattern: /=>/, alias: 'operator' },
            }),
            Prism.languages.insertBefore('javascript', 'punctuation', {
              'property-access': { pattern: withId(/(\.\s*)#?<ID>/.source), lookbehind: !0 },
              'maybe-class-name': {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern:
                  /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
                alias: 'variable',
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' },
            });
          for (
            let maybeClassNameTokens = [
                'function',
                'function-variable',
                'method',
                'method-variable',
                'property-access',
              ],
              i = 0;
            i < maybeClassNameTokens.length;
            i++
          ) {
            const token = maybeClassNameTokens[i];
            let value = Prism.languages.javascript[token];
            Prism.util.type(value) === 'RegExp' &&
              (value = Prism.languages.javascript[token] = { pattern: value });
            const inside = value.inside || {};
            (value.inside = inside), (inside['maybe-class-name'] = /^[A-Z][\s\S]*/);
          }
        })(Prism);
      }
      (module.exports = jsExtras), (jsExtras.displayName = 'jsExtras'), (jsExtras.aliases = []);
    },
    928(module, exports, __webpack_require__) {
      function json(Prism) {
        (Prism.languages.json = {
          property: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' },
        }),
          (Prism.languages.webmanifest = Prism.languages.json);
      }
      (module.exports = json), (json.displayName = 'json'), (json.aliases = ['webmanifest']);
    },
    929(module, exports, __webpack_require__) {
      function yaml(Prism) {
        !(function (Prism) {
          const anchorOrAlias = /[*&][^\s[\]{},]+/;
          const tag =
            /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/;
          const properties = `(?:${tag.source}(?:[ \t]+${anchorOrAlias.source})?|${anchorOrAlias.source}(?:[ \t]+${tag.source})?)`;
          const plainKey =
            /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
              /<PLAIN>/g,
              () =>
                /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source
            );
          const string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function createValuePattern(value, flags) {
            flags = `${(flags || '').replace(/m/g, '')}m`;
            const pattern =
              /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                .replace(/<<prop>>/g, () => properties)
                .replace(/<<value>>/g, () => value);
            return RegExp(pattern, flags);
          }
          (Prism.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  () => properties
                )
              ),
              lookbehind: !0,
              alias: 'string',
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, () => properties)
                  .replace(/<<key>>/g, () => `(?:${plainKey}|${string})`)
              ),
              lookbehind: !0,
              greedy: !0,
              alias: 'atrule',
            },
            directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: 'important' },
            datetime: {
              pattern: createValuePattern(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source
              ),
              lookbehind: !0,
              alias: 'number',
            },
            boolean: {
              pattern: createValuePattern(/true|false/.source, 'i'),
              lookbehind: !0,
              alias: 'important',
            },
            null: {
              pattern: createValuePattern(/null|~/.source, 'i'),
              lookbehind: !0,
              alias: 'important',
            },
            string: { pattern: createValuePattern(string), lookbehind: !0, greedy: !0 },
            number: {
              pattern: createValuePattern(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                'i'
              ),
              lookbehind: !0,
            },
            tag,
            important: anchorOrAlias,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (Prism.languages.yml = Prism.languages.yaml);
        })(Prism);
      }
      (module.exports = yaml), (yaml.displayName = 'yaml'), (yaml.aliases = ['yml']);
    },
    930(module, exports, __webpack_require__) {
      function markdown(Prism) {
        !(function (Prism) {
          const inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
          function createInline(pattern) {
            return (
              (pattern = pattern.replace(/<inner>/g, () => inner)),
              RegExp(`${/((?:^|[^\\])(?:\\{2})*)/.source}(?:${pattern})`)
            );
          }
          const tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
          const tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
            /__/g,
            () => tableCell
          );
          const tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
            .source;
          (Prism.languages.markdown = Prism.languages.extend('markup', {})),
            Prism.languages.insertBefore('markdown', 'prolog', {
              'front-matter-block': {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  'font-matter': {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ['yaml', 'language-yaml'],
                    inside: Prism.languages.yaml,
                  },
                },
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
              table: {
                pattern: RegExp(`^${tableRow}${tableLine}(?:${tableRow})*`, 'm'),
                inside: {
                  'table-data-rows': {
                    pattern: RegExp(`^(${tableRow}${tableLine})(?:${tableRow})*$`),
                    lookbehind: !0,
                    inside: {
                      'table-data': {
                        pattern: RegExp(tableCell),
                        inside: Prism.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  'table-line': {
                    pattern: RegExp(`^(${tableRow})${tableLine}$`),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  'table-header-row': {
                    pattern: RegExp(`^${tableRow}$`),
                    inside: {
                      'table-header': {
                        pattern: RegExp(tableCell),
                        alias: 'important',
                        inside: Prism.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern:
                    /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: 'keyword',
                },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    'code-block': {
                      pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0,
                    },
                    'code-language': { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: 'important',
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: 'important',
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: 'punctuation',
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: 'punctuation',
              },
              'url-reference': {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: 'url',
              },
              bold: {
                pattern: createInline(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: createInline(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} },
                  punctuation: /~~?/,
                },
              },
              'code-snippet': {
                pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                lookbehind: !0,
                greedy: !0,
                alias: ['code', 'keyword'],
              },
              url: {
                pattern: createInline(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} },
                  variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 },
                },
              },
            }),
            ['url', 'bold', 'italic', 'strike'].forEach((token) => {
              ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach((inside) => {
                token !== inside &&
                  (Prism.languages.markdown[token].inside.content.inside[inside] =
                    Prism.languages.markdown[inside]);
              });
            }),
            Prism.hooks.add('after-tokenize', (env) => {
              (env.language !== 'markdown' && env.language !== 'md') ||
                (function walkTokens(tokens) {
                  if (tokens && typeof tokens !== 'string')
                    for (let i = 0, l = tokens.length; i < l; i++) {
                      const token = tokens[i];
                      if (token.type === 'code') {
                        const codeLang = token.content[1];
                        const codeBlock = token.content[3];
                        if (
                          codeLang &&
                          codeBlock &&
                          codeLang.type === 'code-language' &&
                          codeBlock.type === 'code-block' &&
                          typeof codeLang.content === 'string'
                        ) {
                          let lang = codeLang.content
                            .replace(/\b#/g, 'sharp')
                            .replace(/\b\+\+/g, 'pp');
                          const alias = `language-${(lang = (/[a-z][\w-]*/i.exec(lang) || [
                            '',
                          ])[0].toLowerCase())}`;
                          codeBlock.alias
                            ? typeof codeBlock.alias === 'string'
                              ? (codeBlock.alias = [codeBlock.alias, alias])
                              : codeBlock.alias.push(alias)
                            : (codeBlock.alias = [alias]);
                        }
                      } else walkTokens(token.content);
                    }
                })(env.tokens);
            }),
            Prism.hooks.add('wrap', (env) => {
              if (env.type === 'code-block') {
                for (var codeLang = '', i = 0, l = env.classes.length; i < l; i++) {
                  const cls = env.classes[i];
                  const match = /language-(.+)/.exec(cls);
                  if (match) {
                    codeLang = match[1];
                    break;
                  }
                }
                const grammar = Prism.languages[codeLang];
                if (grammar)
                  env.content = Prism.highlight(
                    (function textContent(html) {
                      let text = html.replace(tagPattern, '');
                      return (text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, (m, code) => {
                        let value;
                        if ((code = code.toLowerCase())[0] === '#')
                          return (
                            (value =
                              code[1] === 'x'
                                ? parseInt(code.slice(2), 16)
                                : Number(code.slice(1))),
                            fromCodePoint(value)
                          );
                        const known = KNOWN_ENTITY_NAMES[code];
                        return known || m;
                      }));
                    })(env.content.value),
                    grammar,
                    codeLang
                  );
                else if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
                  const id = `md-${new Date().valueOf()}-${Math.floor(1e16 * Math.random())}`;
                  (env.attributes.id = id),
                    Prism.plugins.autoloader.loadLanguages(codeLang, () => {
                      const ele = document.getElementById(id);
                      ele &&
                        (ele.innerHTML = Prism.highlight(
                          ele.textContent,
                          Prism.languages[codeLang],
                          codeLang
                        ));
                    });
                }
              }
            });
          var tagPattern = RegExp(Prism.languages.markup.tag.pattern.source, 'gi');
          var KNOWN_ENTITY_NAMES = { amp: '&', lt: '<', gt: '>', quot: '"' };
          var fromCodePoint = String.fromCodePoint || String.fromCharCode;
          Prism.languages.md = Prism.languages.markdown;
        })(Prism);
      }
      (module.exports = markdown), (markdown.displayName = 'markdown'), (markdown.aliases = ['md']);
    },
    931(module, exports, __webpack_require__) {
      function bash(Prism) {
        !(function (Prism) {
          const envVars =
            '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';
          const commandAfterHeredoc = {
            pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
            lookbehind: !0,
            alias: 'punctuation',
            inside: null,
          };
          const insideString = {
            bash: commandAfterHeredoc,
            environment: { pattern: RegExp(`\\$${envVars}`), alias: 'constant' },
            variable: [
              {
                pattern: /\$?\(\([\s\S]+?\)\)/,
                greedy: !0,
                inside: {
                  variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/],
                  number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                  operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                  punctuation: /\(\(?|\)\)?|,|;/,
                },
              },
              {
                pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                greedy: !0,
                inside: { variable: /^\$\(|^`|\)$|`$/ },
              },
              {
                pattern: /\$\{[^}]+\}/,
                greedy: !0,
                inside: {
                  operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                  punctuation: /[\[\]]/,
                  environment: {
                    pattern: RegExp(`(\\{)${envVars}`),
                    lookbehind: !0,
                    alias: 'constant',
                  },
                },
              },
              /\$(?:\w+|[#?*!@$])/,
            ],
            entity:
              /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/,
          };
          (Prism.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            'function-name': [
              {
                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: 'function',
              },
              { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: 'function' },
            ],
            'for-or-select': {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: 'variable',
              lookbehind: !0,
            },
            'assign-left': {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp(`(^|[\\s;|&]|[<>]\\()${envVars}`),
                  lookbehind: !0,
                  alias: 'constant',
                },
              },
              alias: 'variable',
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: insideString,
              },
              {
                pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: commandAfterHeredoc },
              },
              {
                pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: insideString,
              },
              { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
              {
                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                greedy: !0,
                inside: { entity: insideString.entity },
              },
            ],
            environment: { pattern: RegExp(`\\$?${envVars}`), alias: 'constant' },
            variable: insideString.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: 'class-name',
            },
            boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/, lookbehind: !0 },
            'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
            operator: {
              pattern:
                /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
              inside: { 'file-descriptor': { pattern: /^\d/, alias: 'important' } },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 },
          }),
            (commandAfterHeredoc.inside = Prism.languages.bash);
          for (
            let toBeCopied = [
                'comment',
                'function-name',
                'for-or-select',
                'assign-left',
                'string',
                'environment',
                'function',
                'keyword',
                'builtin',
                'boolean',
                'file-descriptor',
                'operator',
                'punctuation',
                'number',
              ],
              { inside } = insideString.variable[1],
              i = 0;
            i < toBeCopied.length;
            i++
          )
            inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
          Prism.languages.shell = Prism.languages.bash;
        })(Prism);
      }
      (module.exports = bash), (bash.displayName = 'bash'), (bash.aliases = ['shell']);
    },
    932(module, exports, __webpack_require__) {
      const refractorJsx = __webpack_require__(889);
      const refractorTypescript = __webpack_require__(890);
      function tsx(Prism) {
        Prism.register(refractorJsx),
          Prism.register(refractorTypescript),
          (function (Prism) {
            const typescript = Prism.util.clone(Prism.languages.typescript);
            Prism.languages.tsx = Prism.languages.extend('jsx', typescript);
            const { tag } = Prism.languages.tsx;
            (tag.pattern = RegExp(
              `${/(^|[^\w$]|(?=<\/))/.source}(?:${tag.pattern.source})`,
              tag.pattern.flags
            )),
              (tag.lookbehind = !0);
          })(Prism);
      }
      (module.exports = tsx), (tsx.displayName = 'tsx'), (tsx.aliases = []);
    },
    933(module, exports, __webpack_require__) {
      function graphql(Prism) {
        (Prism.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: 'string',
            inside: {
              'language-markdown': {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: Prism.languages.markdown,
              },
            },
          },
          string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:true|false)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
          'attr-name': {
            pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          'atom-input': { pattern: /[A-Z]\w*Input(?=!?.*$)/m, alias: 'class-name' },
          scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
          constant: /\b[A-Z][A-Z_\d]*\b/,
          'class-name': {
            pattern:
              /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function',
          },
          'definition-mutation': {
            pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function',
          },
          'definition-query': {
            pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function',
          },
          keyword:
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          'property-query': /\w+(?=\s*\()/,
          object: /\w+(?=\s*\{)/,
          punctuation: /[!(){}\[\]:=,]/,
          property: /\w+/,
        }),
          Prism.hooks.add('after-tokenize', (env) => {
            if (env.language === 'graphql')
              for (
                var validTokens = env.tokens.filter(
                    (token) =>
                      typeof token !== 'string' &&
                      token.type !== 'comment' &&
                      token.type !== 'scalar'
                  ),
                  currentIndex = 0;
                currentIndex < validTokens.length;

              ) {
                const startToken = validTokens[currentIndex++];
                if (startToken.type === 'keyword' && startToken.content === 'mutation') {
                  const inputVariables = [];
                  if (
                    isTokenType(['definition-mutation', 'punctuation']) &&
                    getToken(1).content === '('
                  ) {
                    currentIndex += 2;
                    const definitionEnd = findClosingBracket(/^\($/, /^\)$/);
                    if (definitionEnd === -1) continue;
                    for (; currentIndex < definitionEnd; currentIndex++) {
                      const t = getToken(0);
                      t.type === 'variable' &&
                        (addAlias(t, 'variable-input'), inputVariables.push(t.content));
                    }
                    currentIndex = definitionEnd + 1;
                  }
                  if (
                    isTokenType(['punctuation', 'property-query']) &&
                    getToken(0).content === '{' &&
                    (currentIndex++,
                    addAlias(getToken(0), 'property-mutation'),
                    inputVariables.length > 0)
                  ) {
                    const mutationEnd = findClosingBracket(/^\{$/, /^\}$/);
                    if (mutationEnd === -1) continue;
                    for (let i = currentIndex; i < mutationEnd; i++) {
                      const varToken = validTokens[i];
                      varToken.type === 'variable' &&
                        inputVariables.indexOf(varToken.content) >= 0 &&
                        addAlias(varToken, 'variable-input');
                    }
                  }
                }
              }
            function getToken(offset) {
              return validTokens[currentIndex + offset];
            }
            function isTokenType(types, offset) {
              offset = offset || 0;
              for (let i = 0; i < types.length; i++) {
                const token = getToken(i + offset);
                if (!token || token.type !== types[i]) return !1;
              }
              return !0;
            }
            function findClosingBracket(open, close) {
              for (let stackHeight = 1, i = currentIndex; i < validTokens.length; i++) {
                const token = validTokens[i];
                const { content } = token;
                if (token.type === 'punctuation' && typeof content === 'string')
                  if (open.test(content)) stackHeight++;
                  else if (close.test(content) && --stackHeight === 0) return i;
              }
              return -1;
            }
            function addAlias(token, alias) {
              let aliases = token.alias;
              aliases
                ? Array.isArray(aliases) || (token.alias = aliases = [aliases])
                : (token.alias = aliases = []),
                aliases.push(alias);
            }
          });
      }
      (module.exports = graphql), (graphql.displayName = 'graphql'), (graphql.aliases = []);
    },
  },
]);
