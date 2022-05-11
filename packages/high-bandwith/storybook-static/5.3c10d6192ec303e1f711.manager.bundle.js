(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    875(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'ColorControl', () => Color_ColorControl);
      __webpack_require__(24),
        __webpack_require__(4),
        __webpack_require__(11),
        __webpack_require__(5),
        __webpack_require__(13),
        __webpack_require__(9),
        __webpack_require__(8),
        __webpack_require__(10),
        __webpack_require__(17),
        __webpack_require__(19),
        __webpack_require__(15),
        __webpack_require__(70),
        __webpack_require__(43),
        __webpack_require__(30),
        __webpack_require__(23),
        __webpack_require__(124),
        __webpack_require__(75),
        __webpack_require__(177),
        __webpack_require__(82),
        __webpack_require__(16),
        __webpack_require__(33),
        __webpack_require__(14);
      const react = __webpack_require__(0);
      const react_default = __webpack_require__.n(react);
      function index_module_u() {
        return (index_module_u =
          Object.assign ||
          function (e) {
            for (let r = 1; r < arguments.length; r++) {
              const t = arguments[r];
              for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function index_module_c(e, r) {
        if (e == null) return {};
        let t;
        let n;
        const o = {};
        const a = Object.keys(e);
        for (n = 0; n < a.length; n++) r.indexOf((t = a[n])) >= 0 || (o[t] = e[t]);
        return o;
      }
      function index_module_i(e) {
        const t = Object(react.useRef)(e);
        const n = Object(react.useRef)((e) => {
          t.current && t.current(e);
        });
        return (t.current = e), n.current;
      }
      const index_module_s = function (e, r, t) {
        return void 0 === r && (r = 0), void 0 === t && (t = 1), e > t ? t : e < r ? r : e;
      };
      const index_module_f = function (e) {
        return 'touches' in e;
      };
      const index_module_v = function (e) {
        return (e && e.ownerDocument.defaultView) || self;
      };
      const index_module_d = function (e, r, t) {
        const n = e.getBoundingClientRect();
        const o = index_module_f(r)
          ? (function (e, r) {
              for (let t = 0; t < e.length; t++) if (e[t].identifier === r) return e[t];
              return e[0];
            })(r.touches, t)
          : r;
        return {
          left: index_module_s((o.pageX - (n.left + index_module_v(e).pageXOffset)) / n.width),
          top: index_module_s((o.pageY - (n.top + index_module_v(e).pageYOffset)) / n.height),
        };
      };
      const index_module_h = function (e) {
        !index_module_f(e) && e.preventDefault();
      };
      const index_module_m = react_default.a.memo((o) => {
        const a = o.onMove;
        const l = o.onKey;
        const s = index_module_c(o, ['onMove', 'onKey']);
        const m = Object(react.useRef)(null);
        const g = index_module_i(a);
        const p = index_module_i(l);
        const b = Object(react.useRef)(null);
        const _ = Object(react.useRef)(!1);
        const x = Object(react.useMemo)(() => {
          const e = function (e) {
            index_module_h(e),
              (index_module_f(e) ? e.touches.length > 0 : e.buttons > 0) && m.current
                ? g(index_module_d(m.current, e, b.current))
                : t(!1);
          };
          const r = function () {
            return t(!1);
          };
          function t(t) {
            const n = _.current;
            let o = index_module_v(m.current);
            const a = t ? o.addEventListener : o.removeEventListener;
            a(n ? 'touchmove' : 'mousemove', e), a(n ? 'touchend' : 'mouseup', r);
          }
          return [
            function (e) {
              const r = e.nativeEvent;
              const n = m.current;
              if (
                n &&
                (index_module_h(r),
                !(function (e, r) {
                  return r && !index_module_f(e);
                })(r, _.current) && n)
              ) {
                if (index_module_f(r)) {
                  _.current = !0;
                  const o = r.changedTouches || [];
                  o.length && (b.current = o[0].identifier);
                }
                n.focus(), g(index_module_d(n, r, b.current)), t(!0);
              }
            },
            function (e) {
              const r = e.which || e.keyCode;
              r < 37 ||
                r > 40 ||
                (e.preventDefault(),
                p({
                  left: r === 39 ? 0.05 : r === 37 ? -0.05 : 0,
                  top: r === 40 ? 0.05 : r === 38 ? -0.05 : 0,
                }));
            },
            t,
          ];
        }, [p, g]);
        const C = x[0];
        const E = x[1];
        const H = x[2];
        return (
          Object(react.useEffect)(() => H, [H]),
          react_default.a.createElement('div', {
            ...s,
            onTouchStart: C,
            onMouseDown: C,
            className: 'react-colorful__interactive',
            ref: m,
            onKeyDown: E,
            tabIndex: 0,
            role: 'slider',
          })
        );
      });
      const index_module_g = function (e) {
        return e.filter(Boolean).join(' ');
      };
      const index_module_p = function (r) {
        const t = r.color;
        const n = r.left;
        const o = r.top;
        const a = void 0 === o ? 0.5 : o;
        const l = index_module_g(['react-colorful__pointer', r.className]);
        return react_default.a.createElement(
          'div',
          { className: l, style: { top: `${100 * a}%`, left: `${100 * n}%` } },
          react_default.a.createElement('div', {
            className: 'react-colorful__pointer-fill',
            style: { backgroundColor: t },
          })
        );
      };
      const index_module_b = function (e, r, t) {
        return (
          void 0 === r && (r = 0), void 0 === t && (t = Math.pow(10, r)), Math.round(t * e) / t
        );
      };
      const index_module_ = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
      const index_module_x = function (e) {
        return (
          e[0] === '#' && (e = e.substr(1)),
          e.length < 6
            ? {
                r: parseInt(e[0] + e[0], 16),
                g: parseInt(e[1] + e[1], 16),
                b: parseInt(e[2] + e[2], 16),
                a: 1,
              }
            : {
                r: parseInt(e.substr(0, 2), 16),
                g: parseInt(e.substr(2, 2), 16),
                b: parseInt(e.substr(4, 2), 16),
                a: 1,
              }
        );
      };
      const index_module_C = function (e, r) {
        return void 0 === r && (r = 'deg'), Number(e) * (index_module_[r] || 1);
      };
      const index_module_E = function (e) {
        const r =
          /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
            e
          );
        return r
          ? M({
              h: index_module_C(r[1], r[2]),
              s: Number(r[3]),
              l: Number(r[4]),
              a: void 0 === r[5] ? 1 : Number(r[5]) / (r[6] ? 100 : 1),
            })
          : { h: 0, s: 0, v: 0, a: 1 };
      };
      var M = function (e) {
        let r = e.s;
        const t = e.l;
        return {
          h: e.h,
          s: (r *= (t < 50 ? t : 100 - t) / 100) > 0 ? ((2 * r) / (t + r)) * 100 : 0,
          v: t + r,
          a: e.a,
        };
      };
      const N = function (e) {
        const r = e.s;
        const t = e.v;
        const n = e.a;
        const o = ((200 - r) * t) / 100;
        return {
          h: index_module_b(e.h),
          s: index_module_b(
            o > 0 && o < 200 ? ((r * t) / 100 / (o <= 100 ? o : 200 - o)) * 100 : 0
          ),
          l: index_module_b(o / 2),
          a: index_module_b(n, 2),
        };
      };
      const w = function (e) {
        const r = N(e);
        return `hsl(${r.h}, ${r.s}%, ${r.l}%)`;
      };
      const y = function (e) {
        const r = N(e);
        return `hsla(${r.h}, ${r.s}%, ${r.l}%, ${r.a})`;
      };
      const q = function (e) {
        let r = e.h;
        let t = e.s;
        let n = e.v;
        const o = e.a;
        (r = (r / 360) * 6), (t /= 100), (n /= 100);
        const a = Math.floor(r);
        const l = n * (1 - t);
        const u = n * (1 - (r - a) * t);
        const c = n * (1 - (1 - r + a) * t);
        const i = a % 6;
        return {
          r: index_module_b(255 * [n, u, l, l, c, n][i]),
          g: index_module_b(255 * [c, n, n, u, l, l][i]),
          b: index_module_b(255 * [l, l, c, n, n, u][i]),
          a: index_module_b(o, 2),
        };
      };
      const I = function (e) {
        const r =
          /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
            e
          );
        return r
          ? B({
              r: Number(r[1]) / (r[2] ? 100 / 255 : 1),
              g: Number(r[3]) / (r[4] ? 100 / 255 : 1),
              b: Number(r[5]) / (r[6] ? 100 / 255 : 1),
              a: void 0 === r[7] ? 1 : Number(r[7]) / (r[8] ? 100 : 1),
            })
          : { h: 0, s: 0, v: 0, a: 1 };
      };
      const z = function (e) {
        const r = e.toString(16);
        return r.length < 2 ? `0${r}` : r;
      };
      var B = function (e) {
        const { r } = e;
        const t = e.g;
        const n = e.b;
        const o = e.a;
        const a = Math.max(r, t, n);
        const l = a - Math.min(r, t, n);
        const u = l ? (a === r ? (t - n) / l : a === t ? 2 + (n - r) / l : 4 + (r - t) / l) : 0;
        return {
          h: index_module_b(60 * (u < 0 ? u + 6 : u)),
          s: index_module_b(a ? (l / a) * 100 : 0),
          v: index_module_b((a / 255) * 100),
          a: o,
        };
      };
      const K = react_default.a.memo((r) => {
        const t = r.hue;
        const n = r.onChange;
        const o = index_module_g(['react-colorful__hue', r.className]);
        return react_default.a.createElement(
          'div',
          { className: o },
          react_default.a.createElement(
            index_module_m,
            {
              onMove(e) {
                n({ h: 360 * e.left });
              },
              onKey(e) {
                n({ h: index_module_s(t + 360 * e.left, 0, 360) });
              },
              'aria-label': 'Hue',
              'aria-valuetext': index_module_b(t),
            },
            react_default.a.createElement(index_module_p, {
              className: 'react-colorful__hue-pointer',
              left: t / 360,
              color: w({ h: t, s: 100, v: 100, a: 1 }),
            })
          )
        );
      });
      const L = react_default.a.memo((r) => {
        const t = r.hsva;
        const n = r.onChange;
        const o = { backgroundColor: w({ h: t.h, s: 100, v: 100, a: 1 }) };
        return react_default.a.createElement(
          'div',
          { className: 'react-colorful__saturation', style: o },
          react_default.a.createElement(
            index_module_m,
            {
              onMove(e) {
                n({ s: 100 * e.left, v: 100 - 100 * e.top });
              },
              onKey(e) {
                n({
                  s: index_module_s(t.s + 100 * e.left, 0, 100),
                  v: index_module_s(t.v - 100 * e.top, 0, 100),
                });
              },
              'aria-label': 'Color',
              'aria-valuetext': `Saturation ${index_module_b(t.s)}%, Brightness ${index_module_b(
                t.v
              )}%`,
            },
            react_default.a.createElement(index_module_p, {
              className: 'react-colorful__saturation-pointer',
              top: 1 - t.v / 100,
              left: t.s / 100,
              color: w(t),
            })
          )
        );
      });
      const A = function (e, r) {
        if (e === r) return !0;
        for (const t in e) if (e[t] !== r[t]) return !1;
        return !0;
      };
      const S = function (e, r) {
        return e.replace(/\s/g, '') === r.replace(/\s/g, '');
      };
      function T(e, t, l) {
        const u = index_module_i(l);
        const c = Object(react.useState)(() => e.toHsva(t));
        const s = c[0];
        const f = c[1];
        const v = Object(react.useRef)({ color: t, hsva: s });
        Object(react.useEffect)(() => {
          if (!e.equal(t, v.current.color)) {
            const r = e.toHsva(t);
            (v.current = { hsva: r, color: t }), f(r);
          }
        }, [t, e]),
          Object(react.useEffect)(() => {
            let r;
            A(s, v.current.hsva) ||
              e.equal((r = e.fromHsva(s)), v.current.color) ||
              ((v.current = { hsva: s, color: r }), u(r));
          }, [s, e, u]);
        const d = Object(react.useCallback)((e) => {
          f((r) => ({ ...r, ...e }));
        }, []);
        return [s, d];
      }
      let F;
      const P = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;
      const R = new Map();
      const V = function (e) {
        P(() => {
          const r = e.current ? e.current.ownerDocument : document;
          if (void 0 !== r && !R.has(r)) {
            const t = r.createElement('style');
            (t.innerHTML =
              '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}'),
              R.set(r, t);
            const n = F || __webpack_require__.nc;
            n && t.setAttribute('nonce', n), r.head.appendChild(t);
          }
        }, []);
      };
      const $ = function (t) {
        const n = t.className;
        const o = t.colorModel;
        const a = t.color;
        const l = void 0 === a ? o.defaultColor : a;
        const i = t.onChange;
        const s = index_module_c(t, ['className', 'colorModel', 'color', 'onChange']);
        const f = Object(react.useRef)(null);
        V(f);
        const v = T(o, l, i);
        const d = v[0];
        const h = v[1];
        const m = index_module_g(['react-colorful', n]);
        return react_default.a.createElement(
          'div',
          { ...s, ref: f, className: m },
          react_default.a.createElement(L, { hsva: d, onChange: h }),
          react_default.a.createElement(K, {
            hue: d.h,
            onChange: h,
            className: 'react-colorful__last-control',
          })
        );
      };
      const G = {
        defaultColor: '000',
        toHsva(e) {
          return B(index_module_x(e));
        },
        fromHsva(e) {
          return (t = (r = q(e)).g), (n = r.b), `#${z(r.r)}${z(t)}${z(n)}`;
          let r;
          let t;
          let n;
        },
        equal(e, r) {
          return e.toLowerCase() === r.toLowerCase() || A(index_module_x(e), index_module_x(r));
        },
      };
      const Q = function (r) {
        const t = r.className;
        const n = r.hsva;
        const o = r.onChange;
        const a = {
          backgroundImage: `linear-gradient(90deg, ${y({ ...n, a: 0 })}, ${y({ ...n, a: 1 })})`,
        };
        const l = index_module_g(['react-colorful__alpha', t]);
        return react_default.a.createElement(
          'div',
          { className: l },
          react_default.a.createElement('div', {
            className: 'react-colorful__alpha-gradient',
            style: a,
          }),
          react_default.a.createElement(
            index_module_m,
            {
              onMove(e) {
                o({ a: e.left });
              },
              onKey(e) {
                o({ a: index_module_s(n.a + e.left) });
              },
              'aria-label': 'Alpha',
              'aria-valuetext': `${index_module_b(100 * n.a)}%`,
            },
            react_default.a.createElement(index_module_p, {
              className: 'react-colorful__alpha-pointer',
              left: n.a,
              color: y(n),
            })
          )
        );
      };
      const U = function (t) {
        const n = t.className;
        const o = t.colorModel;
        const a = t.color;
        const l = void 0 === a ? o.defaultColor : a;
        const i = t.onChange;
        const s = index_module_c(t, ['className', 'colorModel', 'color', 'onChange']);
        const f = Object(react.useRef)(null);
        V(f);
        const v = T(o, l, i);
        const d = v[0];
        const h = v[1];
        const m = index_module_g(['react-colorful', n]);
        return react_default.a.createElement(
          'div',
          { ...s, ref: f, className: m },
          react_default.a.createElement(L, { hsva: d, onChange: h }),
          react_default.a.createElement(K, { hue: d.h, onChange: h }),
          react_default.a.createElement(Q, {
            hsva: d,
            onChange: h,
            className: 'react-colorful__last-control',
          })
        );
      };
      const ee = {
        defaultColor: 'hsla(0, 0%, 0%, 1)',
        toHsva: index_module_E,
        fromHsva: y,
        equal: S,
      };
      const ge = {
        defaultColor: 'rgba(0, 0, 0, 1)',
        toHsva: I,
        fromHsva(e) {
          const r = q(e);
          return `rgba(${r.r}, ${r.g}, ${r.b}, ${r.a})`;
        },
        equal: S,
      };
      const color_convert = __webpack_require__(934);
      const color_convert_default = __webpack_require__.n(color_convert);
      const throttle = __webpack_require__(426);
      const throttle_default = __webpack_require__.n(throttle);
      const esm = __webpack_require__(1);
      __webpack_require__(52);
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
      const Note = esm.styled.div((_ref) => {
        const { theme } = _ref;
        return {
          padding: '2px 6px',
          lineHeight: '16px',
          fontSize: 10,
          fontWeight: theme.typography.weight.bold,
          color: theme.color.lightest,
          boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.3)',
          borderRadius: 4,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          zIndex: -1,
          background: theme.base === 'light' ? 'rgba(60, 60, 60, 0.9)' : 'rgba(20, 20, 20, 0.85)',
          margin: 6,
        };
      });
      const TooltipNote_TooltipNote = function TooltipNote(_ref2) {
        const { note } = _ref2;
        const props = _objectWithoutProperties(_ref2, ['note']);
        return react_default.a.createElement(Note, props, note);
      };
      TooltipNote_TooltipNote.displayName = 'TooltipNote';
      let _ColorPicker;
      let _fallbackColor;
      const lazy_WithTooltip = __webpack_require__(423);
      const esm_form = __webpack_require__(59);
      const icon = __webpack_require__(63);
      const helpers = __webpack_require__(36);
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
      function _defineProperty(obj, key, value) {
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
      }
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
      function Color_objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        let key;
        let i;
        const target = (function Color_objectWithoutPropertiesLoose(source, excluded) {
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
      const Wrapper = esm.styled.div({ position: 'relative', maxWidth: 250 });
      const PickerTooltip = Object(esm.styled)(lazy_WithTooltip.a)({
        position: 'absolute',
        zIndex: 1,
        top: 4,
        left: 4,
      });
      const TooltipContent = esm.styled.div({
        width: 200,
        margin: 5,
        '.react-colorful__saturation': { borderRadius: '4px 4px 0 0' },
        '.react-colorful__hue': { boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)' },
        '.react-colorful__last-control': { borderRadius: '0 0 4px 4px' },
      });
      const Color_Note = Object(esm.styled)(TooltipNote_TooltipNote)((_ref) => ({
        fontFamily: _ref.theme.typography.fonts.base,
      }));
      const Swatches = esm.styled.div({
        display: 'grid',
        gridTemplateColumns: 'repeat(9, 16px)',
        gap: 6,
        padding: 3,
        marginTop: 5,
        width: 200,
      });
      const SwatchColor = esm.styled.div((_ref2) => {
        const { theme } = _ref2;
        return {
          width: 16,
          height: 16,
          boxShadow: _ref2.active
            ? ''
                .concat(theme.appBorderColor, ' 0 0 0 1px inset, ')
                .concat(theme.color.mediumdark, '50 0 0 0 4px')
            : ''.concat(theme.appBorderColor, ' 0 0 0 1px inset'),
          borderRadius: theme.appBorderRadius,
        };
      });
      const Color_Swatch = function Swatch(_ref3) {
        const { value } = _ref3;
        const { active } = _ref3;
        const { onClick } = _ref3;
        const { style } = _ref3;
        const props = Color_objectWithoutProperties(_ref3, ['value', 'active', 'onClick', 'style']);
        const backgroundImage = 'linear-gradient('
          .concat(value, ', ')
          .concat(value, '), ')
          .concat(
            'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',
            ', linear-gradient(#fff, #fff)'
          );
        return react_default.a.createElement(SwatchColor, {
          ...props,
          active,
          onClick,
          style: { ...style, backgroundImage },
        });
      };
      Color_Swatch.displayName = 'Swatch';
      let ColorSpace;
      const Input = Object(esm.styled)(esm_form.a.Input)((_ref4) => ({
        width: '100%',
        paddingLeft: 30,
        paddingRight: 30,
        boxSizing: 'border-box',
        fontFamily: _ref4.theme.typography.fonts.base,
      }));
      const ToggleIcon = Object(esm.styled)(icon.a)((_ref5) => ({
        position: 'absolute',
        zIndex: 1,
        top: 6,
        right: 7,
        width: 20,
        height: 20,
        padding: 4,
        boxSizing: 'border-box',
        cursor: 'pointer',
        color: _ref5.theme.input.color,
      }));
      !(function (ColorSpace) {
        (ColorSpace.RGB = 'rgb'), (ColorSpace.HSL = 'hsl'), (ColorSpace.HEX = 'hex');
      })(ColorSpace || (ColorSpace = {}));
      const COLOR_SPACES = Object.values(ColorSpace);
      const COLOR_REGEXP = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/;
      const RGB_REGEXP = /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i;
      const HSL_REGEXP = /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i;
      const HEX_REGEXP = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i;
      const SHORTHEX_REGEXP = /^\s*#?([0-9a-f]{3})\s*$/i;
      const ColorPicker =
        (_defineProperty((_ColorPicker = {}), ColorSpace.HEX, (r) =>
          react_default.a.createElement($, { ...r, colorModel: G })
        ),
        _defineProperty(_ColorPicker, ColorSpace.RGB, (r) =>
          react_default.a.createElement(U, { ...r, colorModel: ge })
        ),
        _defineProperty(_ColorPicker, ColorSpace.HSL, (r) =>
          react_default.a.createElement(U, { ...r, colorModel: ee })
        ),
        _ColorPicker);
      const fallbackColor =
        (_defineProperty((_fallbackColor = {}), ColorSpace.HEX, 'transparent'),
        _defineProperty(_fallbackColor, ColorSpace.RGB, 'rgba(0, 0, 0, 0)'),
        _defineProperty(_fallbackColor, ColorSpace.HSL, 'hsla(0, 0%, 0%, 0)'),
        _fallbackColor);
      const stringToArgs = function stringToArgs(value) {
        const match = value == null ? void 0 : value.match(COLOR_REGEXP);
        if (!match) return [0, 0, 0, 1];
        const _match = _slicedToArray(match, 5);
        const x = _match[1];
        const y = _match[2];
        const z = _match[3];
        const _match$ = _match[4];
        return [x, y, z, void 0 === _match$ ? 1 : _match$].map(Number);
      };
      const Color_parseValue = function parseValue(value) {
        let _ref12;
        if (value) {
          let valid = !0;
          if (RGB_REGEXP.test(value)) {
            let _ref8;
            const _stringToArgs2 = _slicedToArray(stringToArgs(value), 4);
            const r = _stringToArgs2[0];
            const g = _stringToArgs2[1];
            const b = _stringToArgs2[2];
            const a = _stringToArgs2[3];
            const _ref7 = _slicedToArray(
              color_convert_default.a.rgb.hsl([r, g, b]) || [0, 0, 0],
              3
            );
            const h = _ref7[0];
            const s = _ref7[1];
            const l = _ref7[2];
            return (
              _defineProperty(
                (_ref8 = {
                  valid,
                  value,
                  keyword: color_convert_default.a.rgb.keyword([r, g, b]),
                  colorSpace: ColorSpace.RGB,
                }),
                ColorSpace.RGB,
                value
              ),
              _defineProperty(
                _ref8,
                ColorSpace.HSL,
                'hsla('.concat(h, ', ').concat(s, '%, ').concat(l, '%, ').concat(a, ')')
              ),
              _defineProperty(
                _ref8,
                ColorSpace.HEX,
                '#'.concat(color_convert_default.a.rgb.hex([r, g, b]).toLowerCase())
              ),
              _ref8
            );
          }
          if (HSL_REGEXP.test(value)) {
            let _ref11;
            const _stringToArgs4 = _slicedToArray(stringToArgs(value), 4);
            const _h = _stringToArgs4[0];
            const _s2 = _stringToArgs4[1];
            const _l = _stringToArgs4[2];
            const _a = _stringToArgs4[3];
            const _ref10 = _slicedToArray(
              color_convert_default.a.hsl.rgb([_h, _s2, _l]) || [0, 0, 0],
              3
            );
            const _r = _ref10[0];
            const _g = _ref10[1];
            const _b = _ref10[2];
            return (
              _defineProperty(
                (_ref11 = {
                  valid,
                  value,
                  keyword: color_convert_default.a.hsl.keyword([_h, _s2, _l]),
                  colorSpace: ColorSpace.HSL,
                }),
                ColorSpace.RGB,
                'rgba('.concat(_r, ', ').concat(_g, ', ').concat(_b, ', ').concat(_a, ')')
              ),
              _defineProperty(_ref11, ColorSpace.HSL, value),
              _defineProperty(
                _ref11,
                ColorSpace.HEX,
                '#'.concat(color_convert_default.a.hsl.hex([_h, _s2, _l]).toLowerCase())
              ),
              _ref11
            );
          }
          const plain = value.replace('#', '');
          const rgb =
            color_convert_default.a.keyword.rgb(plain) || color_convert_default.a.hex.rgb(plain);
          const hsl = color_convert_default.a.rgb.hsl(rgb);
          let mapped = value;
          if (
            (/[^#a-f0-9]/i.test(value)
              ? (mapped = plain)
              : HEX_REGEXP.test(value) && (mapped = '#'.concat(plain)),
            mapped.startsWith('#'))
          )
            valid = HEX_REGEXP.test(mapped);
          else
            try {
              color_convert_default.a.keyword.hex(mapped);
            } catch (e) {
              valid = !1;
            }
          return (
            _defineProperty(
              (_ref12 = {
                valid,
                value: mapped,
                keyword: color_convert_default.a.rgb.keyword(rgb),
                colorSpace: ColorSpace.HEX,
              }),
              ColorSpace.RGB,
              'rgba('.concat(rgb[0], ', ').concat(rgb[1], ', ').concat(rgb[2], ', 1)')
            ),
            _defineProperty(
              _ref12,
              ColorSpace.HSL,
              'hsla('.concat(hsl[0], ', ').concat(hsl[1], '%, ').concat(hsl[2], '%, 1)')
            ),
            _defineProperty(_ref12, ColorSpace.HEX, mapped),
            _ref12
          );
        }
      };
      const Color_useColorInput = function useColorInput(initialValue, onChange) {
        const _useState2 = _slicedToArray(Object(react.useState)(initialValue || ''), 2);
        const value = _useState2[0];
        const setValue = _useState2[1];
        const _useState4 = _slicedToArray(
          Object(react.useState)(() => Color_parseValue(value)),
          2
        );
        const color = _useState4[0];
        const setColor = _useState4[1];
        const _useState6 = _slicedToArray(
          Object(react.useState)((color == null ? void 0 : color.colorSpace) || ColorSpace.HEX),
          2
        );
        const colorSpace = _useState6[0];
        const setColorSpace = _useState6[1];
        Object(react.useEffect)(() => {
          void 0 === initialValue &&
            (setValue(''), setColor(void 0), setColorSpace(ColorSpace.HEX));
        }, [initialValue]);
        const realValue = Object(react.useMemo)(
          () =>
            (function getRealValue(value, color, colorSpace) {
              if (!value || color == null || !color.valid) return fallbackColor[colorSpace];
              if (colorSpace !== ColorSpace.HEX)
                return (color == null ? void 0 : color[colorSpace]) || fallbackColor[colorSpace];
              if (!color.hex.startsWith('#'))
                try {
                  return '#'.concat(color_convert_default.a.keyword.hex(color.hex));
                } catch (e) {
                  return fallbackColor.hex;
                }
              const short = color.hex.match(SHORTHEX_REGEXP);
              if (!short) return HEX_REGEXP.test(color.hex) ? color.hex : fallbackColor.hex;
              const _short$1$split2 = _slicedToArray(short[1].split(''), 3);
              const r = _short$1$split2[0];
              const g = _short$1$split2[1];
              const b = _short$1$split2[2];
              return '#'.concat(r).concat(r).concat(g).concat(g).concat(b).concat(b);
            })(value, color, colorSpace).toLowerCase(),
          [value, color, colorSpace]
        );
        const updateValue = Object(react.useCallback)(
          (update) => {
            const parsed = Color_parseValue(update);
            setValue((parsed == null ? void 0 : parsed.value) || update || ''),
              parsed &&
                (setColor(parsed), setColorSpace(parsed.colorSpace), onChange(parsed.value));
          },
          [onChange]
        );
        const cycleColorSpace = Object(react.useCallback)(() => {
          let next = COLOR_SPACES.indexOf(colorSpace) + 1;
          next >= COLOR_SPACES.length && (next = 0), setColorSpace(COLOR_SPACES[next]);
          const update = (color == null ? void 0 : color[COLOR_SPACES[next]]) || '';
          setValue(update), onChange(update);
        }, [color, colorSpace, onChange]);
        return {
          value,
          realValue,
          updateValue,
          color,
          colorSpace,
          cycleColorSpace,
        };
      };
      const id = function id(value) {
        return value.replace(/\s*/, '').toLowerCase();
      };
      var Color_ColorControl = function ColorControl(_ref13) {
        const { name } = _ref13;
        const initialValue = _ref13.value;
        const { onChange } = _ref13;
        const { onFocus } = _ref13;
        const { onBlur } = _ref13;
        const { presetColors } = _ref13;
        const { startOpen } = _ref13;
        const _useColorInput = Color_useColorInput(initialValue, throttle_default()(onChange, 200));
        const { value } = _useColorInput;
        const { realValue } = _useColorInput;
        const { updateValue } = _useColorInput;
        const { color } = _useColorInput;
        const { colorSpace } = _useColorInput;
        const { cycleColorSpace } = _useColorInput;
        const _usePresets = (function usePresets(presetColors, currentColor, colorSpace) {
          const _useState8 = _slicedToArray(
            Object(react.useState)(
              currentColor != null && currentColor.valid ? [currentColor] : []
            ),
            2
          );
          const selectedColors = _useState8[0];
          const setSelectedColors = _useState8[1];
          Object(react.useEffect)(() => {
            void 0 === currentColor && setSelectedColors([]);
          }, [currentColor]);
          const presets = Object(react.useMemo)(
            () =>
              (presetColors || [])
                .map((preset) =>
                  typeof preset === 'string'
                    ? Color_parseValue(preset)
                    : preset.title
                    ? { ...Color_parseValue(preset.color), keyword: preset.title }
                    : Color_parseValue(preset.color)
                )
                .concat(selectedColors)
                .filter(Boolean)
                .slice(-27),
            [presetColors, selectedColors]
          );
          const addPreset = Object(react.useCallback)(
            (color) => {
              color != null &&
                color.valid &&
                (presets.some((preset) => id(preset[colorSpace]) === id(color[colorSpace])) ||
                  setSelectedColors((arr) => arr.concat(color)));
            },
            [colorSpace, presets]
          );
          return { presets, addPreset };
        })(presetColors, color, colorSpace);
        const { presets } = _usePresets;
        const { addPreset } = _usePresets;
        const Picker = ColorPicker[colorSpace];
        return react_default.a.createElement(
          Wrapper,
          null,
          react_default.a.createElement(
            PickerTooltip,
            {
              trigger: 'click',
              startOpen,
              closeOnClick: !0,
              onVisibilityChange: function onVisibilityChange() {
                return addPreset(color);
              },
              tooltip: react_default.a.createElement(
                TooltipContent,
                null,
                react_default.a.createElement(Picker, {
                  color: realValue === 'transparent' ? '#000000' : realValue,
                  onChange: updateValue,
                  onFocus,
                  onBlur,
                }),
                presets.length > 0 &&
                  react_default.a.createElement(
                    Swatches,
                    null,
                    presets.map((preset, index) =>
                      react_default.a.createElement(
                        lazy_WithTooltip.a,
                        {
                          key: ''.concat(preset.value, '-').concat(index),
                          hasChrome: !1,
                          tooltip: react_default.a.createElement(Color_Note, {
                            note: preset.keyword || preset.value,
                          }),
                        },
                        react_default.a.createElement(Color_Swatch, {
                          value: preset[colorSpace],
                          active: color && id(preset[colorSpace]) === id(color[colorSpace]),
                          onClick: function onClick() {
                            return updateValue(preset.value);
                          },
                        })
                      )
                    )
                  )
              ),
            },
            react_default.a.createElement(Color_Swatch, {
              value: realValue,
              style: { margin: 4 },
            })
          ),
          react_default.a.createElement(Input, {
            id: Object(helpers.a)(name),
            value,
            onChange: function onChange(e) {
              return updateValue(e.target.value);
            },
            onFocus: function onFocus(e) {
              return e.target.select();
            },
            placeholder: 'Choose color...',
          }),
          value
            ? react_default.a.createElement(ToggleIcon, {
                icon: 'markup',
                onClick: cycleColorSpace,
              })
            : null
        );
      };
      Color_ColorControl.displayName = 'ColorControl';
      __webpack_exports__.default = Color_ColorControl;
    },
    891(module, exports, __webpack_require__) {
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            let _i =
              arr == null
                ? null
                : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
            if (_i == null) return;
            let _s;
            let _e;
            const _arr = [];
            let _n = !0;
            let _d = !1;
            try {
              for (
                _i = _i.call(arr);
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
      __webpack_require__(24),
        __webpack_require__(228),
        __webpack_require__(5),
        __webpack_require__(89),
        __webpack_require__(230),
        __webpack_require__(43),
        __webpack_require__(30),
        __webpack_require__(66),
        __webpack_require__(23),
        __webpack_require__(82),
        __webpack_require__(935),
        __webpack_require__(229),
        __webpack_require__(4),
        __webpack_require__(11),
        __webpack_require__(13),
        __webpack_require__(9),
        __webpack_require__(8),
        __webpack_require__(10),
        __webpack_require__(16),
        __webpack_require__(14),
        __webpack_require__(17);
      for (
        var cssKeywords = __webpack_require__(937),
          reverseKeywords = {},
          _i = 0,
          _Object$keys = Object.keys(cssKeywords);
        _i < _Object$keys.length;
        _i++
      ) {
        const key = _Object$keys[_i];
        reverseKeywords[cssKeywords[key]] = key;
      }
      const convert = {
        rgb: { channels: 3, labels: 'rgb' },
        hsl: { channels: 3, labels: 'hsl' },
        hsv: { channels: 3, labels: 'hsv' },
        hwb: { channels: 3, labels: 'hwb' },
        cmyk: { channels: 4, labels: 'cmyk' },
        xyz: { channels: 3, labels: 'xyz' },
        lab: { channels: 3, labels: 'lab' },
        lch: { channels: 3, labels: 'lch' },
        hex: { channels: 1, labels: ['hex'] },
        keyword: { channels: 1, labels: ['keyword'] },
        ansi16: { channels: 1, labels: ['ansi16'] },
        ansi256: { channels: 1, labels: ['ansi256'] },
        hcg: { channels: 3, labels: ['h', 'c', 'g'] },
        apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
        gray: { channels: 1, labels: ['gray'] },
      };
      module.exports = convert;
      for (let _i2 = 0, _Object$keys2 = Object.keys(convert); _i2 < _Object$keys2.length; _i2++) {
        const model = _Object$keys2[_i2];
        if (!('channels' in convert[model])) throw new Error(`missing channels property: ${model}`);
        if (!('labels' in convert[model]))
          throw new Error(`missing channel labels property: ${model}`);
        if (convert[model].labels.length !== convert[model].channels)
          throw new Error(`channel and label counts mismatch: ${model}`);
        const _convert$model = convert[model];
        const { channels } = _convert$model;
        const { labels } = _convert$model;
        delete convert[model].channels,
          delete convert[model].labels,
          Object.defineProperty(convert[model], 'channels', { value: channels }),
          Object.defineProperty(convert[model], 'labels', { value: labels });
      }
      (convert.rgb.hsl = function (rgb) {
        let h;
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const min = Math.min(r, g, b);
        const max = Math.max(r, g, b);
        const delta = max - min;
        max === min
          ? (h = 0)
          : r === max
          ? (h = (g - b) / delta)
          : g === max
          ? (h = 2 + (b - r) / delta)
          : b === max && (h = 4 + (r - g) / delta),
          (h = Math.min(60 * h, 360)) < 0 && (h += 360);
        const l = (min + max) / 2;
        return [
          h,
          100 * (max === min ? 0 : l <= 0.5 ? delta / (max + min) : delta / (2 - max - min)),
          100 * l,
        ];
      }),
        (convert.rgb.hsv = function (rgb) {
          let rdif;
          let gdif;
          let bdif;
          let h;
          let s;
          const r = rgb[0] / 255;
          const g = rgb[1] / 255;
          const b = rgb[2] / 255;
          const v = Math.max(r, g, b);
          const diff = v - Math.min(r, g, b);
          const diffc = function diffc(c) {
            return (v - c) / 6 / diff + 0.5;
          };
          return (
            diff === 0
              ? ((h = 0), (s = 0))
              : ((s = diff / v),
                (rdif = diffc(r)),
                (gdif = diffc(g)),
                (bdif = diffc(b)),
                r === v
                  ? (h = bdif - gdif)
                  : g === v
                  ? (h = 1 / 3 + rdif - bdif)
                  : b === v && (h = 2 / 3 + gdif - rdif),
                h < 0 ? (h += 1) : h > 1 && (h -= 1)),
            [360 * h, 100 * s, 100 * v]
          );
        }),
        (convert.rgb.hwb = function (rgb) {
          const r = rgb[0];
          const g = rgb[1];
          let b = rgb[2];
          return [
            convert.rgb.hsl(rgb)[0],
            100 * ((1 / 255) * Math.min(r, Math.min(g, b))),
            100 * (b = 1 - (1 / 255) * Math.max(r, Math.max(g, b))),
          ];
        }),
        (convert.rgb.cmyk = function (rgb) {
          const r = rgb[0] / 255;
          const g = rgb[1] / 255;
          const b = rgb[2] / 255;
          const k = Math.min(1 - r, 1 - g, 1 - b);
          return [
            100 * ((1 - r - k) / (1 - k) || 0),
            100 * ((1 - g - k) / (1 - k) || 0),
            100 * ((1 - b - k) / (1 - k) || 0),
            100 * k,
          ];
        }),
        (convert.rgb.keyword = function (rgb) {
          const reversed = reverseKeywords[rgb];
          if (reversed) return reversed;
          for (
            var currentClosestKeyword,
              x,
              y,
              currentClosestDistance = 1 / 0,
              _i3 = 0,
              _Object$keys3 = Object.keys(cssKeywords);
            _i3 < _Object$keys3.length;
            _i3++
          ) {
            const keyword = _Object$keys3[_i3];
            const value = cssKeywords[keyword];
            const distance =
              ((x = rgb),
              (y = value),
              Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2));
            distance < currentClosestDistance &&
              ((currentClosestDistance = distance), (currentClosestKeyword = keyword));
          }
          return currentClosestKeyword;
        }),
        (convert.keyword.rgb = function (keyword) {
          return cssKeywords[keyword];
        }),
        (convert.rgb.xyz = function (rgb) {
          let r = rgb[0] / 255;
          let g = rgb[1] / 255;
          let b = rgb[2] / 255;
          return [
            100 *
              (0.4124 * (r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92) +
                0.3576 * (g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92) +
                0.1805 * (b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92)),
            100 * (0.2126 * r + 0.7152 * g + 0.0722 * b),
            100 * (0.0193 * r + 0.1192 * g + 0.9505 * b),
          ];
        }),
        (convert.rgb.lab = function (rgb) {
          const xyz = convert.rgb.xyz(rgb);
          let x = xyz[0];
          let y = xyz[1];
          let z = xyz[2];
          return (
            (y /= 100),
            (z /= 108.883),
            (x = (x /= 95.047) > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116),
            [
              116 * (y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116) - 16,
              500 * (x - y),
              200 * (y - (z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116)),
            ]
          );
        }),
        (convert.hsl.rgb = function (hsl) {
          let t2;
          let t3;
          let val;
          const h = hsl[0] / 360;
          const s = hsl[1] / 100;
          const l = hsl[2] / 100;
          if (s === 0) return [(val = 255 * l), val, val];
          for (
            var t1 = 2 * l - (t2 = l < 0.5 ? l * (1 + s) : l + s - l * s), rgb = [0, 0, 0], i = 0;
            i < 3;
            i++
          )
            (t3 = h + (1 / 3) * -(i - 1)) < 0 && t3++,
              t3 > 1 && t3--,
              (val =
                6 * t3 < 1
                  ? t1 + 6 * (t2 - t1) * t3
                  : 2 * t3 < 1
                  ? t2
                  : 3 * t3 < 2
                  ? t1 + (t2 - t1) * (2 / 3 - t3) * 6
                  : t1),
              (rgb[i] = 255 * val);
          return rgb;
        }),
        (convert.hsl.hsv = function (hsl) {
          const h = hsl[0];
          let s = hsl[1] / 100;
          let l = hsl[2] / 100;
          let smin = s;
          const lmin = Math.max(l, 0.01);
          return (
            (s *= (l *= 2) <= 1 ? l : 2 - l),
            (smin *= lmin <= 1 ? lmin : 2 - lmin),
            [
              h,
              100 * (l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s)),
              100 * ((l + s) / 2),
            ]
          );
        }),
        (convert.hsv.rgb = function (hsv) {
          const h = hsv[0] / 60;
          const s = hsv[1] / 100;
          let v = hsv[2] / 100;
          const hi = Math.floor(h) % 6;
          const f = h - Math.floor(h);
          const p = 255 * v * (1 - s);
          const q = 255 * v * (1 - s * f);
          const t = 255 * v * (1 - s * (1 - f));
          switch (((v *= 255), hi)) {
            case 0:
              return [v, t, p];
            case 1:
              return [q, v, p];
            case 2:
              return [p, v, t];
            case 3:
              return [p, q, v];
            case 4:
              return [t, p, v];
            case 5:
              return [v, p, q];
          }
        }),
        (convert.hsv.hsl = function (hsv) {
          let sl;
          let l;
          const h = hsv[0];
          const s = hsv[1] / 100;
          const v = hsv[2] / 100;
          const vmin = Math.max(v, 0.01);
          l = (2 - s) * v;
          const lmin = (2 - s) * vmin;
          return (
            (sl = s * vmin),
            [h, 100 * (sl = (sl /= lmin <= 1 ? lmin : 2 - lmin) || 0), 100 * (l /= 2)]
          );
        }),
        (convert.hwb.rgb = function (hwb) {
          let f;
          const h = hwb[0] / 360;
          let wh = hwb[1] / 100;
          let bl = hwb[2] / 100;
          const ratio = wh + bl;
          ratio > 1 && ((wh /= ratio), (bl /= ratio));
          const i = Math.floor(6 * h);
          const v = 1 - bl;
          (f = 6 * h - i), (1 & i) != 0 && (f = 1 - f);
          let r;
          let g;
          let b;
          const n = wh + f * (v - wh);
          switch (i) {
            default:
            case 6:
            case 0:
              (r = v), (g = n), (b = wh);
              break;
            case 1:
              (r = n), (g = v), (b = wh);
              break;
            case 2:
              (r = wh), (g = v), (b = n);
              break;
            case 3:
              (r = wh), (g = n), (b = v);
              break;
            case 4:
              (r = n), (g = wh), (b = v);
              break;
            case 5:
              (r = v), (g = wh), (b = n);
          }
          return [255 * r, 255 * g, 255 * b];
        }),
        (convert.cmyk.rgb = function (cmyk) {
          const c = cmyk[0] / 100;
          const m = cmyk[1] / 100;
          const y = cmyk[2] / 100;
          const k = cmyk[3] / 100;
          return [
            255 * (1 - Math.min(1, c * (1 - k) + k)),
            255 * (1 - Math.min(1, m * (1 - k) + k)),
            255 * (1 - Math.min(1, y * (1 - k) + k)),
          ];
        }),
        (convert.xyz.rgb = function (xyz) {
          let r;
          let g;
          let b;
          const x = xyz[0] / 100;
          const y = xyz[1] / 100;
          const z = xyz[2] / 100;
          return (
            (g = -0.9689 * x + 1.8758 * y + 0.0415 * z),
            (b = 0.0557 * x + -0.204 * y + 1.057 * z),
            (r =
              (r = 3.2406 * x + -1.5372 * y + -0.4986 * z) > 0.0031308
                ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055
                : 12.92 * r),
            (g = g > 0.0031308 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : 12.92 * g),
            (b = b > 0.0031308 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : 12.92 * b),
            [
              255 * (r = Math.min(Math.max(0, r), 1)),
              255 * (g = Math.min(Math.max(0, g), 1)),
              255 * (b = Math.min(Math.max(0, b), 1)),
            ]
          );
        }),
        (convert.xyz.lab = function (xyz) {
          let x = xyz[0];
          let y = xyz[1];
          let z = xyz[2];
          return (
            (y /= 100),
            (z /= 108.883),
            (x = (x /= 95.047) > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116),
            [
              116 * (y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116) - 16,
              500 * (x - y),
              200 * (y - (z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116)),
            ]
          );
        }),
        (convert.lab.xyz = function (lab) {
          let x;
          let y;
          let z;
          const l = lab[0];
          (x = lab[1] / 500 + (y = (l + 16) / 116)), (z = y - lab[2] / 200);
          const y2 = Math.pow(y, 3);
          const x2 = Math.pow(x, 3);
          const z2 = Math.pow(z, 3);
          return (
            (y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787),
            (x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787),
            (z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787),
            [(x *= 95.047), (y *= 100), (z *= 108.883)]
          );
        }),
        (convert.lab.lch = function (lab) {
          let h;
          const l = lab[0];
          const a = lab[1];
          const b = lab[2];
          return (
            (h = (360 * Math.atan2(b, a)) / 2 / Math.PI) < 0 && (h += 360),
            [l, Math.sqrt(a * a + b * b), h]
          );
        }),
        (convert.lch.lab = function (lch) {
          const l = lch[0];
          const c = lch[1];
          const hr = (lch[2] / 360) * 2 * Math.PI;
          return [l, c * Math.cos(hr), c * Math.sin(hr)];
        }),
        (convert.rgb.ansi16 = function (args) {
          const saturation = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const _args = _slicedToArray(args, 3);
          const r = _args[0];
          const g = _args[1];
          const b = _args[2];
          let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
          if ((value = Math.round(value / 50)) === 0) return 30;
          let ansi =
            30 + ((Math.round(b / 255) << 2) | (Math.round(g / 255) << 1) | Math.round(r / 255));
          return value === 2 && (ansi += 60), ansi;
        }),
        (convert.hsv.ansi16 = function (args) {
          return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
        }),
        (convert.rgb.ansi256 = function (args) {
          const r = args[0];
          const g = args[1];
          const b = args[2];
          return r === g && g === b
            ? r < 8
              ? 16
              : r > 248
              ? 231
              : Math.round(((r - 8) / 247) * 24) + 232
            : 16 +
                36 * Math.round((r / 255) * 5) +
                6 * Math.round((g / 255) * 5) +
                Math.round((b / 255) * 5);
        }),
        (convert.ansi16.rgb = function (args) {
          let color = args % 10;
          if (color === 0 || color === 7)
            return args > 50 && (color += 3.5), [(color = (color / 10.5) * 255), color, color];
          const mult = 0.5 * (1 + ~~(args > 50));
          return [
            (1 & color) * mult * 255,
            ((color >> 1) & 1) * mult * 255,
            ((color >> 2) & 1) * mult * 255,
          ];
        }),
        (convert.ansi256.rgb = function (args) {
          if (args >= 232) {
            const c = 10 * (args - 232) + 8;
            return [c, c, c];
          }
          let rem;
          return (
            (args -= 16),
            [
              (Math.floor(args / 36) / 5) * 255,
              (Math.floor((rem = args % 36) / 6) / 5) * 255,
              ((rem % 6) / 5) * 255,
            ]
          );
        }),
        (convert.rgb.hex = function (args) {
          const string = (
            ((255 & Math.round(args[0])) << 16) +
            ((255 & Math.round(args[1])) << 8) +
            (255 & Math.round(args[2]))
          )
            .toString(16)
            .toUpperCase();
          return '000000'.substring(string.length) + string;
        }),
        (convert.hex.rgb = function (args) {
          const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
          if (!match) return [0, 0, 0];
          let colorString = match[0];
          match[0].length === 3 &&
            (colorString = colorString
              .split('')
              .map((char) => char + char)
              .join(''));
          const integer = parseInt(colorString, 16);
          return [(integer >> 16) & 255, (integer >> 8) & 255, 255 & integer];
        }),
        (convert.rgb.hcg = function (rgb) {
          let hue;
          const r = rgb[0] / 255;
          const g = rgb[1] / 255;
          const b = rgb[2] / 255;
          const max = Math.max(Math.max(r, g), b);
          const min = Math.min(Math.min(r, g), b);
          const chroma = max - min;
          return (
            (hue =
              chroma <= 0
                ? 0
                : max === r
                ? ((g - b) / chroma) % 6
                : max === g
                ? 2 + (b - r) / chroma
                : 4 + (r - g) / chroma),
            (hue /= 6),
            [360 * (hue %= 1), 100 * chroma, 100 * (chroma < 1 ? min / (1 - chroma) : 0)]
          );
        }),
        (convert.hsl.hcg = function (hsl) {
          const s = hsl[1] / 100;
          const l = hsl[2] / 100;
          const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
          let f = 0;
          return c < 1 && (f = (l - 0.5 * c) / (1 - c)), [hsl[0], 100 * c, 100 * f];
        }),
        (convert.hsv.hcg = function (hsv) {
          const s = hsv[1] / 100;
          const v = hsv[2] / 100;
          const c = s * v;
          let f = 0;
          return c < 1 && (f = (v - c) / (1 - c)), [hsv[0], 100 * c, 100 * f];
        }),
        (convert.hcg.rgb = function (hcg) {
          const h = hcg[0] / 360;
          const c = hcg[1] / 100;
          const g = hcg[2] / 100;
          if (c === 0) return [255 * g, 255 * g, 255 * g];
          let mg;
          const pure = [0, 0, 0];
          const hi = (h % 1) * 6;
          const v = hi % 1;
          const w = 1 - v;
          switch (Math.floor(hi)) {
            case 0:
              (pure[0] = 1), (pure[1] = v), (pure[2] = 0);
              break;
            case 1:
              (pure[0] = w), (pure[1] = 1), (pure[2] = 0);
              break;
            case 2:
              (pure[0] = 0), (pure[1] = 1), (pure[2] = v);
              break;
            case 3:
              (pure[0] = 0), (pure[1] = w), (pure[2] = 1);
              break;
            case 4:
              (pure[0] = v), (pure[1] = 0), (pure[2] = 1);
              break;
            default:
              (pure[0] = 1), (pure[1] = 0), (pure[2] = w);
          }
          return (
            (mg = (1 - c) * g),
            [255 * (c * pure[0] + mg), 255 * (c * pure[1] + mg), 255 * (c * pure[2] + mg)]
          );
        }),
        (convert.hcg.hsv = function (hcg) {
          const c = hcg[1] / 100;
          const v = c + (hcg[2] / 100) * (1 - c);
          let f = 0;
          return v > 0 && (f = c / v), [hcg[0], 100 * f, 100 * v];
        }),
        (convert.hcg.hsl = function (hcg) {
          const c = hcg[1] / 100;
          const l = (hcg[2] / 100) * (1 - c) + 0.5 * c;
          let s = 0;
          return (
            l > 0 && l < 0.5 ? (s = c / (2 * l)) : l >= 0.5 && l < 1 && (s = c / (2 * (1 - l))),
            [hcg[0], 100 * s, 100 * l]
          );
        }),
        (convert.hcg.hwb = function (hcg) {
          const c = hcg[1] / 100;
          const v = c + (hcg[2] / 100) * (1 - c);
          return [hcg[0], 100 * (v - c), 100 * (1 - v)];
        }),
        (convert.hwb.hcg = function (hwb) {
          const w = hwb[1] / 100;
          const v = 1 - hwb[2] / 100;
          const c = v - w;
          let g = 0;
          return c < 1 && (g = (v - c) / (1 - c)), [hwb[0], 100 * c, 100 * g];
        }),
        (convert.apple.rgb = function (apple) {
          return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
        }),
        (convert.rgb.apple = function (rgb) {
          return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
        }),
        (convert.gray.rgb = function (args) {
          return [(args[0] / 100) * 255, (args[0] / 100) * 255, (args[0] / 100) * 255];
        }),
        (convert.gray.hsl = function (args) {
          return [0, 0, args[0]];
        }),
        (convert.gray.hsv = convert.gray.hsl),
        (convert.gray.hwb = function (gray) {
          return [0, 100, gray[0]];
        }),
        (convert.gray.cmyk = function (gray) {
          return [0, 0, 0, gray[0]];
        }),
        (convert.gray.lab = function (gray) {
          return [gray[0], 0, 0];
        }),
        (convert.gray.hex = function (gray) {
          const val = 255 & Math.round((gray[0] / 100) * 255);
          const string = ((val << 16) + (val << 8) + val).toString(16).toUpperCase();
          return '000000'.substring(string.length) + string;
        }),
        (convert.rgb.gray = function (rgb) {
          return [((rgb[0] + rgb[1] + rgb[2]) / 3 / 255) * 100];
        });
    },
    934(module, exports, __webpack_require__) {
      __webpack_require__(24),
        __webpack_require__(178),
        __webpack_require__(41),
        __webpack_require__(228);
      const conversions = __webpack_require__(891);
      const route = __webpack_require__(938);
      const convert = {};
      Object.keys(conversions).forEach((fromModel) => {
        (convert[fromModel] = {}),
          Object.defineProperty(convert[fromModel], 'channels', {
            value: conversions[fromModel].channels,
          }),
          Object.defineProperty(convert[fromModel], 'labels', {
            value: conversions[fromModel].labels,
          });
        const routes = route(fromModel);
        Object.keys(routes).forEach((toModel) => {
          const fn = routes[toModel];
          (convert[fromModel][toModel] = (function wrapRounded(fn) {
            const wrappedFn = function wrappedFn() {
              for (
                var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
                _key2 < _len2;
                _key2++
              )
                args[_key2] = arguments[_key2];
              const arg0 = args[0];
              if (arg0 == null) return arg0;
              arg0.length > 1 && (args = arg0);
              const result = fn(args);
              if (typeof result === 'object')
                for (let len = result.length, i = 0; i < len; i++)
                  result[i] = Math.round(result[i]);
              return result;
            };
            return 'conversion' in fn && (wrappedFn.conversion = fn.conversion), wrappedFn;
          })(fn)),
            (convert[fromModel][toModel].raw = (function wrapRaw(fn) {
              const wrappedFn = function wrappedFn() {
                for (
                  var _len = arguments.length, args = new Array(_len), _key = 0;
                  _key < _len;
                  _key++
                )
                  args[_key] = arguments[_key];
                const arg0 = args[0];
                return arg0 == null ? arg0 : (arg0.length > 1 && (args = arg0), fn(args));
              };
              return 'conversion' in fn && (wrappedFn.conversion = fn.conversion), wrappedFn;
            })(fn));
        });
      }),
        (module.exports = convert);
    },
    935(module, exports, __webpack_require__) {
      const $ = __webpack_require__(25);
      const $parseInt = __webpack_require__(936);
      $({ global: !0, forced: parseInt != $parseInt }, { parseInt: $parseInt });
    },
    936(module, exports, __webpack_require__) {
      const global = __webpack_require__(18);
      const fails = __webpack_require__(28);
      const uncurryThis = __webpack_require__(27);
      const toString = __webpack_require__(48);
      const { trim } = __webpack_require__(315);
      const whitespaces = __webpack_require__(316);
      const $parseInt = global.parseInt;
      const { Symbol } = global;
      const ITERATOR = Symbol && Symbol.iterator;
      const hex = /^[+-]?0x/i;
      const exec = uncurryThis(hex.exec);
      const FORCED =
        $parseInt(`${whitespaces}08`) !== 8 ||
        $parseInt(`${whitespaces}0x16`) !== 22 ||
        (ITERATOR &&
          !fails(() => {
            $parseInt(Object(ITERATOR));
          }));
      module.exports = FORCED
        ? function parseInt(string, radix) {
            const S = trim(toString(string));
            return $parseInt(S, radix >>> 0 || (exec(hex, S) ? 16 : 10));
          }
        : $parseInt;
    },
    937(module, exports, __webpack_require__) {
      module.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
      };
    },
    938(module, exports, __webpack_require__) {
      __webpack_require__(24);
      const conversions = __webpack_require__(891);
      function deriveBFS(fromModel) {
        const graph = (function buildGraph() {
          for (
            var graph = {}, models = Object.keys(conversions), len = models.length, i = 0;
            i < len;
            i++
          )
            graph[models[i]] = { distance: -1, parent: null };
          return graph;
        })();
        const queue = [fromModel];
        for (graph[fromModel].distance = 0; queue.length; )
          for (
            let current = queue.pop(),
              adjacents = Object.keys(conversions[current]),
              len = adjacents.length,
              i = 0;
            i < len;
            i++
          ) {
            const adjacent = adjacents[i];
            const node = graph[adjacent];
            node.distance === -1 &&
              ((node.distance = graph[current].distance + 1),
              (node.parent = current),
              queue.unshift(adjacent));
          }
        return graph;
      }
      function link(from, to) {
        return function (args) {
          return to(from(args));
        };
      }
      function wrapConversion(toModel, graph) {
        for (
          var path = [graph[toModel].parent, toModel],
            fn = conversions[graph[toModel].parent][toModel],
            cur = graph[toModel].parent;
          graph[cur].parent;

        )
          path.unshift(graph[cur].parent),
            (fn = link(conversions[graph[cur].parent][cur], fn)),
            (cur = graph[cur].parent);
        return (fn.conversion = path), fn;
      }
      module.exports = function (fromModel) {
        for (
          var graph = deriveBFS(fromModel),
            conversion = {},
            models = Object.keys(graph),
            len = models.length,
            i = 0;
          i < len;
          i++
        ) {
          const toModel = models[i];
          graph[toModel].parent !== null && (conversion[toModel] = wrapConversion(toModel, graph));
        }
        return conversion;
      };
    },
  },
]);
