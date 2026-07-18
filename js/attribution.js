/**
 * First-party campaign attribution for links into the web app.
 *
 * The web app (sshodhan.vercel.app) captures utm_source / utm_medium /
 * utm_campaign from its landing URL (first-touch, stored locally — see
 * docs/ACQUISITION_ATTRIBUTION.md in the app repo). This site does not run
 * any analytics of its own here; it only decorates outbound app links:
 *
 * 1. If the visitor arrived at this site with UTM params, remember them for
 *    the session and forward them onto every app link.
 * 2. Otherwise, tag app links with a stable site-referral source so ordinary
 *    site-to-app launches are attributable (utm_source=mathmagicfun).
 *
 * Explicit UTM params already present on a link are never overwritten.
 */
(function () {
    var APP_HOST = 'sshodhan.vercel.app';
    var KEYS = ['utm_source', 'utm_medium', 'utm_campaign'];
    var STORAGE_KEY = 'mm_site_utm';

    var inbound = {};
    try {
        var params = new URLSearchParams(window.location.search);
        KEYS.forEach(function (k) {
            var v = params.get(k);
            if (v) inbound[k] = v;
        });
        if (Object.keys(inbound).length) {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(inbound));
        } else {
            inbound = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
        }
    } catch (e) {
        inbound = {};
    }

    if (!inbound.utm_source) {
        var page = window.location.pathname
            .replace(/\.html$/, '')
            .replace(/[^a-z0-9]+/gi, '-')
            .replace(/^-+|-+$/g, '') || 'home';
        inbound = {
            utm_source: 'mathmagicfun',
            utm_medium: 'referral',
            utm_campaign: 'site-' + page
        };
    }

    function decorate() {
        var links = document.querySelectorAll('a[href*="' + APP_HOST + '"]');
        Array.prototype.forEach.call(links, function (a) {
            try {
                var url = new URL(a.href);
                if (url.hostname !== APP_HOST) return;
                KEYS.forEach(function (k) {
                    if (inbound[k] && !url.searchParams.has(k)) {
                        url.searchParams.set(k, inbound[k]);
                    }
                });
                a.href = url.toString();
            } catch (e) { /* leave the link untouched */ }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', decorate);
    } else {
        decorate();
    }
})();
