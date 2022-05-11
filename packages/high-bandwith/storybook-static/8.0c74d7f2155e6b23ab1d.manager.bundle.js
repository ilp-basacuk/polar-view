(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    942(module, exports) {
      module.exports = function (e, n) {
        return (
          (n = n || {}),
          new Promise((t, r) => {
            const s = new XMLHttpRequest();
            const o = [];
            const u = [];
            const i = {};
            var a = function () {
              return {
                ok: ((s.status / 100) | 0) == 2,
                statusText: s.statusText,
                status: s.status,
                url: s.responseURL,
                text() {
                  return Promise.resolve(s.responseText);
                },
                json() {
                  return Promise.resolve(s.responseText).then(JSON.parse);
                },
                blob() {
                  return Promise.resolve(new Blob([s.response]));
                },
                clone: a,
                headers: {
                  keys() {
                    return o;
                  },
                  entries() {
                    return u;
                  },
                  get(e) {
                    return i[e.toLowerCase()];
                  },
                  has(e) {
                    return e.toLowerCase() in i;
                  },
                },
              };
            };
            for (const l in (s.open(n.method || 'get', e, !0),
            (s.onload = function () {
              s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (e, n, t) => {
                o.push((n = n.toLowerCase())), u.push([n, t]), (i[n] = i[n] ? `${i[n]},${t}` : t);
              }),
                t(a());
            }),
            (s.onerror = r),
            (s.withCredentials = n.credentials == 'include'),
            n.headers))
              s.setRequestHeader(l, n.headers[l]);
            s.send(n.body || null);
          })
        );
      };
    },
  },
]);
