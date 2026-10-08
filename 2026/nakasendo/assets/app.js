(function () {
  "use strict";
  var T = window.TRIP, DAYS = window.DAYS, STAYS = window.STAYS;

  // ---------- icons ----------
  var I = {
    today: '<path d="M3 6.5c6-1.6 12-1.6 18 0"/><path d="M5 10h14"/><path d="M7 6v14M17 6v14"/>',
    days: '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v4M16 3v4M4 10h16M8 14h3M8 17h6"/>',
    map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',
    stays: '<path d="M3 18V8M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="2"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
    places: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    hike: '<path d="M5 19c6 0 12-5 13-14-8 1-13 6-13 14z"/><path d="M5 19 13 11"/>',
    bird: '<path d="M4 15c3 0 5-1 7-4l2-3a3 3 0 0 1 5 1l2 1-2 1c0 5-4 8-9 8H6"/><path d="M11 19l-1 2M14 18l1 3"/>',
    onsen: '<path d="M8 4c-1 1.5 1 2.5 0 4M12 3c-1 1.5 1 2.5 0 4M16 4c-1 1.5 1 2.5 0 4"/><path d="M4 13c0 4 3.5 7 8 7s8-3 8-7"/><path d="M3 12h18"/>',
    town: '<path d="M3 21h18M5 21V11l7-5 7 5v10"/><path d="M3 12l9-7 9 7M10 21v-5h4v5"/>',
    plane: '<path d="M3 13l18-6-3 5-6 2-3 5-1-4z"/>',
    torii: '<path d="M3 6.5c6-1.6 12-1.6 18 0"/><path d="M5 10h14"/><path d="M7 6v14M17 6v14"/>',
    mountain: '<path d="M2 20l7-12 4 6 3-4 6 10z"/>',
    trees: '<path d="M7 3 3 11h8z M7 9 3 16h8z M7 16v5"/><path d="M17 5l-3 6h6z M17 10l-3 6h6z M17 16v5"/>',
    house: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10M10 20v-5h4v5"/>',
    castle: '<path d="M4 21h16M6 21v-6h12v6M8 15v-4h8v4M10 11V7h4v4"/><path d="M5 15h14M7 11h10M9 7h6M12 4v3"/>',
    tower: '<path d="M12 2v4M10 6h4l-1 5h-2zM11 11l-2 10M13 11l2 10M8 21h8M10 16h4"/>',
    bus: '<rect x="4" y="4" width="16" height="13" rx="2"/><path d="M4 11h16M8 21v-4M16 21v-4"/>',
    cloud: '<path d="M7 18a4 4 0 0 1-.5-8A5.5 5.5 0 0 1 17 9a4.5 4.5 0 0 1 0 9z"/>',
    yen: '<path d="M6 4l6 8 6-8M12 12v8M8 13h8M8 16h8"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/>',
    phone: '<path d="M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    pass: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10h5M7 14h8"/>',
    locate: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
    chevron: '<path d="M9 6l6 6-6 6"/>'
  };
  function icon(name) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (I[name] || "") + "</svg>"; }
  window.NK_ICON = icon;

  // ---------- dates ----------
  function jpToday() {
    var q = new URLSearchParams(location.search).get("date");
    if (q && /^\d{4}-\d{2}-\d{2}$/.test(q)) return q;
    return new Intl.DateTimeFormat("en-CA", { timeZone: T.tz, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  }
  function parse(d) { var p = d.split("-"); return Date.UTC(+p[0], +p[1] - 1, +p[2]); }
  function diffDays(a, b) { return Math.round((parse(b) - parse(a)) / 86400000); }
  function addDays(d, n) { var t = new Date(parse(d) + n * 86400000); return t.toISOString().slice(0, 10); }
  function fmt(d, opts) { return new Date(parse(d)).toLocaleDateString("en-US", Object.assign({ timeZone: "UTC" }, opts)); }
  function longDate(d) { return fmt(d, { weekday: "short", month: "short", day: "numeric" }); }
  var today = jpToday();
  var todayDay = DAYS.find(function (d) { return d.date === today; }) || null;
  var phase = today < T.start ? "before" : today > T.end ? "after" : "during";
  window.NK = { today: today, todayDay: todayDay, phase: phase, longDate: longDate, icon: icon };

  // ---------- speech (built-in Japanese voice; works offline on iPhone) ----------
  var jaVoice = null;
  var canSpeak = "speechSynthesis" in window;
  function pickVoice() {
    var vs = speechSynthesis.getVoices().filter(function (v) { return /^ja/i.test(v.lang); });
    jaVoice = vs.find(function (v) { return v.localService; }) || vs[0] || null;
  }
  if (canSpeak) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  // Read an address the way people say it: no postal code, and "1-1" as "1の1".
  function spokenAddress(a) {
    return a.replace(/〒\s*\d{3}-\d{4}\s*/g, "").replace(/(\d)\s*[-−ー]\s*(?=\d)/g, "$1の").replace(/\s+/g, " ").trim();
  }
  function speak(text, btn) {
    if (!canSpeak) return;
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "ja-JP"; u.rate = 0.8;
    if (jaVoice) u.voice = jaVoice;
    if (btn) { btn.classList.add("on"); u.onend = u.onerror = function () { btn.classList.remove("on"); }; }
    speechSynthesis.speak(u);
  }
  var SPK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11"/></svg>';
  window.NK.speak = speak; window.NK.canSpeak = canSpeak; window.NK.SPK = SPK;

  // ---------- to-do state (per device) ----------
  function doneKey(n, i) { return "nk-done-" + n + "-" + i; }
  function isDone(n, i) { try { return localStorage.getItem(doneKey(n, i)) === "1"; } catch (e) { return false; } }
  function setDone(n, i, v) { try { v ? localStorage.setItem(doneKey(n, i), "1") : localStorage.removeItem(doneKey(n, i)); } catch (e) {} }
  function countDone(d) { var c = 0; d.plan.forEach(function (p, i) { if (isDone(d.n, i)) c++; }); return c; }
  var CHECK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  function todoItem(d, p, i, withNote) {
    var on = isDone(d.n, i);
    return '<li class="todo' + (on ? " done" : "") + (p.optional ? " opt" : "") + '">' +
      '<button type="button" class="chk" role="checkbox" aria-checked="' + on + '" data-n="' + d.n + '" data-i="' + i + '" aria-label="' + esc(p.t + ", " + p.what) + '">' + CHECK + "</button>" +
      '<span class="t">' + esc(p.t) + '</span><span><span class="w">' + esc(p.what) + "</span>" +
      (withNote && p.note ? '<span class="n">' + esc(p.note) + "</span>" : "") + "</span></li>";
  }
  function progressText(d) { var c = countDone(d); return c + " of " + d.plan.length + " done"; }
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".chk"); if (!b) return;
    var n = +b.dataset.n, i = +b.dataset.i, on = b.getAttribute("aria-checked") !== "true";
    setDone(n, i, on);
    document.querySelectorAll('.chk[data-n="' + n + '"][data-i="' + i + '"]').forEach(function (x) {
      x.setAttribute("aria-checked", on); x.closest(".todo").classList.toggle("done", on);
    });
    var d = DAYS[n];
    document.querySelectorAll('[data-progress="' + n + '"]').forEach(function (x) { x.textContent = progressText(d); });
  });

  function stayFor(id) { return STAYS.find(function (s) { return s.id === id; }); }
  function tonightStay() {
    return STAYS.find(function (s) { return today >= s.from && today < addDays(s.from, s.nights); });
  }
  function f(c) { return Math.round(c * 9 / 5 + 32); }
  function wxText(w) {
    if (!w) return "";
    return '<span class="wxpill">' + (w.sky ? w.sky + " " : "") + "<strong>" + w.hi + "°/" + w.lo + "°C</strong><span>" +
      f(w.hi) + "°/" + f(w.lo) + "°F" + (w.typical ? ", typical" : "") + "</span></span>";
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  // ---------- tab bar ----------
  var page = document.body.dataset.page;
  var tabs = [["index.html", "today", "Today"], ["days.html", "days", "Days"], ["places.html", "places", "Places"], ["map.html", "map", "Map"], ["stays.html", "stays", "Stays"], ["info.html", "info", "Info"]];
  var nav = document.createElement("nav");
  nav.className = "tabbar";
  nav.setAttribute("aria-label", "Sections");
  nav.innerHTML = tabs.map(function (t) {
    return '<a href="' + t[0] + '"' + (page === t[1] ? ' aria-current="page"' : "") + ">" + icon(t[1]) + "<span>" + t[2] + "</span></a>";
  }).join("");
  document.body.appendChild(nav);

  // ---------- home ----------
  function renderHome() {
    var el = document.getElementById("today");
    if (!el) return;
    var html = "";
    if (phase === "before") {
      var n = diffDays(today, T.start);
      var d1 = DAYS[1];
      html += '<p class="kicker">' + (n === 0 ? "We fly tonight" : n === 1 ? "We fly tomorrow night" : "We fly in " + n + " days") + "</p>";
      html += "<h2>First up: " + esc(d1.title) + "</h2>";
      html += '<p class="where">' + longDate(d1.date) + ", " + esc(d1.where) + "</p>";
      html += planList(d1.plan.slice(0, 4));
      html += '<div class="btn-row"><a class="btn" href="days.html#day-0">See the whole trip</a><a class="btn ghost" href="info.html#arrival">Arrival checklist</a></div>';
    } else if (phase === "after") {
      html += '<p class="kicker">お帰りなさい, welcome home</p><h2>That was the Nakasendō</h2>';
      html += '<p class="where">Oct 9–24, 2026. Everything is still here to look back on.</p>';
      html += '<div class="btn-row"><a class="btn" href="days.html">Look back at the days</a></div>';
    } else {
      var d = todayDay;
      var st = d && d.stay ? stayFor(d.stay) : null;
      html += '<p class="kicker">Today, day ' + d.n + " of 15</p>";
      html += "<h2>" + esc(d.title) + "</h2>";
      html += '<p class="where">' + longDate(d.date) + ", " + esc(d.where) + "</p>";
      if (d.weather) html += '<div class="wx" id="wx">' + wxText(d.weather) + "</div>";
      html += '<div class="plan-head"><span class="progress" data-progress="' + d.n + '">' + progressText(d) + "</span></div>";
      html += '<ul class="plan">' + d.plan.map(function (p, i) { return todoItem(d, p, i, false); }).join("") + "</ul>";
      html += '<div class="btn-row"><a class="btn" href="days.html#day-' + d.n + '">Full day plan</a>' +
        (st ? '<a class="btn ghost" href="stays.html#' + st.id + '">Tonight: ' + esc(st.area) + "</a>" : "") + "</div>";
      liveWeather(d);
    }
    el.innerHTML = html;

    var strip = document.getElementById("route-strip");
    if (strip) {
      var stops = [["Osaka", 1, "torii"], ["Nakatsugawa", 3, "mountain"], ["Magome & Tsumago", 4, "trees"], ["Kiso-Fukushima", 5, "house"],
        ["Matsumoto", 8, "castle"], ["Karuizawa", 9, "trees"], ["Kusatsu", 11, "onsen"], ["Tokyo", 13, "tower"], ["Home", 15, "plane"]];
      strip.innerHTML = stops.map(function (s, i) {
        var next = stops[i + 1] ? stops[i + 1][1] : 16;
        var isT = todayDay && todayDay.n >= s[1] && todayDay.n < next;
        var dayLabel = s[1] === next - 1 || s[1] === 15 ? "Day " + s[1] : "Days " + s[1] + "–" + (next - 1);
        return '<a href="days.html#day-' + s[1] + '"' + (isT ? ' class="is-today"' : "") + '><span class="dot">' + icon(s[2]) +
          '</span><span class="nm">' + s[0] + '</span><span class="dy">' + dayLabel + "</span></a>";
      }).join("");
    }
  }
  function planList(items) {
    return "<ol>" + items.map(function (p) { return "<li><b>" + esc(p.t) + "</b><span>" + esc(p.what) + "</span></li>"; }).join("") + "</ol>";
  }
  function liveWeather(d) {
    if (!navigator.onLine) return;
    var url = "https://api.open-meteo.com/v1/forecast?latitude=" + d.lat + "&longitude=" + d.lng +
      "&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Asia%2FTokyo&forecast_days=2";
    fetch(url).then(function (r) { return r.json(); }).then(function (j) {
      var i = j.daily.time.indexOf(d.date); if (i < 0) return;
      var hi = Math.round(j.daily.temperature_2m_max[i]), lo = Math.round(j.daily.temperature_2m_min[i]), pop = j.daily.precipitation_probability_max[i];
      var el = document.getElementById("wx");
      if (el) el.innerHTML = '<span class="wxpill"><strong>' + hi + "° / " + lo + "°C</strong> " + f(hi) + "° / " + f(lo) + "°F</span><span>" + pop + "% chance of rain</span><span>Live forecast</span>";
    }).catch(function () {});
  }

  // ---------- days ----------
  function renderDays() {
    var chips = document.getElementById("chips"), list = document.getElementById("days");
    if (!chips || !list) return;
    chips.innerHTML = DAYS.map(function (d) {
      return '<a class="chip' + (todayDay && d.n === todayDay.n ? " is-today" : "") + '" href="#day-' + d.n + '" data-n="' + d.n + '"><b>' + d.n +
        "</b><span>" + fmt(d.date, { month: "short", day: "numeric" }) + "</span></a>";
    }).join("");
    list.innerHTML = DAYS.map(function (d) {
      var isT = todayDay && d.n === todayDay.n;
      var st = d.stay ? stayFor(d.stay) : null;
      var h = '<section class="day' + (isT ? " is-today" : "") + '" id="day-' + d.n + '" aria-labelledby="h-' + d.n + '">';
      h += '<p class="day-num">' + (isT ? "Today, day " : "Day ") + d.n + "</p>";
      h += '<h2 id="h-' + d.n + '">' + esc(d.title) + "</h2>";
      h += '<div class="meta"><span>' + longDate(d.date) + "</span><span>" + esc(d.where) + "</span>" + (d.weather ? wxText(d.weather) : "") + "</div>";
      h += '<div class="tags">' + d.cats.map(function (c) { return '<span class="tag ' + c + '">' + window.CATS[c].label + "</span>"; }).join("") + "</div>";
      h += '<div class="plan-head"><h3 class="sub">Plan and to-dos</h3><span class="progress" data-progress="' + d.n + '">' + progressText(d) + "</span></div>";
      h += '<ul class="plan">' + d.plan.map(function (p, i) { return todoItem(d, p, i, true); }).join("") + "</ul>";
      (d.tips || []).forEach(function (t) { h += '<p class="callout ' + t.kind + '">' + esc(t.text) + "</p>"; });
      if (d.eats && d.eats.length) {
        h += '<h3 class="sub">Food</h3><ul class="linklist">' + d.eats.map(function (e) {
          return "<li><span class=\"meal\">" + esc(e.meal) + "</span>" + (e.url ? '<a href="' + e.url + '" target="_blank" rel="noopener">' + esc(e.name) + "</a>" : esc(e.name)) + "</li>";
        }).join("") + "</ul>";
      }
      if (d.links && d.links.length) {
        h += '<h3 class="sub">Links</h3><ul class="linklist">' + d.links.map(function (l) {
          return '<li><a href="' + l.url + '" target="_blank" rel="noopener">' + esc(l.text) + "</a></li>";
        }).join("") + "</ul>";
      }
      if (st) {
        h += '<a class="stay-link" href="stays.html#' + st.id + '"><span><small>Tonight</small><strong>' + esc(st.name) + "</strong><small>Check-in " +
          esc(st.in) + "</small></span>" + icon("chevron") + "</a>";
      }
      h += '<p style="margin:12px 0 0"><a class="btn ghost small" href="map.html?day=' + d.n + '">Show on map</a></p>';
      return h + "</section>";
    }).join("");

    var target = location.hash ? document.querySelector(location.hash) : todayDay ? document.getElementById("day-" + todayDay.n) : null;
    if (target) setTimeout(function () { target.scrollIntoView(); }, 50);
    // highlight the chip of the day in view
    if ("IntersectionObserver" in window) {
      var current = null;
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var n = en.target.id.replace("day-", "");
          if (current === n) return;
          current = n;
          chips.querySelectorAll(".chip").forEach(function (c) {
            var on = c.dataset.n === n;
            c.classList.toggle("is-current", on);
            if (on && window.innerWidth < 900) {
              var r = c.getBoundingClientRect(), cr = chips.getBoundingClientRect();
              if (r.left < cr.left || r.right > cr.right) chips.scrollTo({ left: c.offsetLeft - 18, behavior: "smooth" });
            }
          });
        });
      }, { rootMargin: "-90px 0px -70% 0px" });
      list.querySelectorAll(".day").forEach(function (s) { io.observe(s); });
    }
  }

  // ---------- stays ----------
  function renderStays() {
    var el = document.getElementById("stays");
    if (!el) return;
    var tn = tonightStay();
    el.innerHTML = STAYS.map(function (s) {
      var last = addDays(s.from, s.nights - 1);
      var when = s.nights === 1 ? longDate(s.from) + ", 1 night" : fmt(s.from, { month: "short", day: "numeric" }) + "–" + fmt(addDays(s.from, s.nights), { month: "short", day: "numeric" }) + ", " + s.nights + " nights";
      var isT = tn && tn.id === s.id;
      var apple = "https://maps.apple.com/?ll=" + s.lat + "," + s.lng + "&q=" + encodeURIComponent(s.name);
      var google = "https://www.google.com/maps/search/?api=1&query=" + s.lat + "," + s.lng;
      return '<article class="stay' + (isT ? " is-tonight" : "") + '" id="' + s.id + '">' +
        '<p class="when">' + (isT ? "Tonight. " : "") + when + "</p>" +
        "<h2>" + esc(s.name) + '</h2><p class="area">' + esc(s.area) + "</p>" +
        '<div class="times"><div><small>Check-in</small><strong>' + esc(s.in) + "</strong></div><div><small>Check-out</small><strong>" + esc(s.out) + "</strong></div></div>" +
        "<ul>" + s.notes.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul>" +
        (s.addrLabel ? '<p class="muted" style="margin:0;font-size:14px">' + esc(s.addrLabel) + "</p>" : "") +
        '<p class="addr-jp" lang="ja">' + esc(s.addrJp) + '</p><p class="addr-en">' + esc(s.addrEn) + "</p>" +
        (s.alt ? '<p class="muted" style="margin:0;font-size:14px">' + esc(s.alt.label) + '</p><p class="addr-jp" lang="ja">' + esc(s.alt.addrJp) + '</p><p class="addr-en">' + esc(s.alt.addrEn) + "</p>" +
          '<p style="margin:0 0 12px"><button class="btn small ghost" type="button" data-taxi="' + s.id + '" data-alt="1">Show check-in office to taxi driver</button></p>' : "") +
        '<div class="btn-row"><button class="btn" type="button" data-taxi="' + s.id + '">Show to taxi driver</button>' +
        '<a class="btn ghost" href="' + apple + '">Apple Maps</a><a class="btn ghost" href="' + google + '" target="_blank" rel="noopener">Google Maps</a>' +
        (s.phone ? '<a class="btn ghost" href="tel:' + s.phone.replace(/[^+\d]/g, "") + '">' + icon("phone").replace("<svg", '<svg style="width:20px;height:20px;stroke:currentColor;fill:none;stroke-width:2"') + "Call</a>" : "") +
        "</div></article>";
    }).join("");

    var ov = document.getElementById("taxi");
    var sayBtn = ov.querySelector(".say");
    var current = null;
    if (canSpeak) sayBtn.innerHTML = SPK + "<span>Say it in Japanese</span>";
    else sayBtn.hidden = true;
    el.addEventListener("click", function (e) {
      var b = e.target.closest("[data-taxi]"); if (!b) return;
      var s0 = stayFor(b.dataset.taxi);
      current = b.dataset.alt ? { name: s0.name + ", " + s0.alt.label, addrJp: s0.alt.addrJp, phone: s0.phone } : s0;
      ov.querySelector(".big").textContent = current.addrJp;
      ov.querySelector(".nm").textContent = current.name;
      ov.querySelector(".tel").textContent = current.phone || "";
      ov.classList.add("open");
      ov.querySelector(".close").focus();
    });
    sayBtn.addEventListener("click", function () {
      if (current) speak("この住所までお願いします。" + spokenAddress(current.addrJp), sayBtn);
    });
    function closeTaxi() { ov.classList.remove("open"); if (canSpeak) speechSynthesis.cancel(); }
    ov.querySelector(".close").addEventListener("click", closeTaxi);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeTaxi(); });
    var st = location.hash ? document.querySelector(location.hash) : tn ? document.getElementById(tn.id) : null;
    if (st) setTimeout(function () { st.scrollIntoView(); }, 50);
  }

  if (page === "today") renderHome();
  if (page === "days") renderDays();
  if (page === "stays") renderStays();

  // ---------- offline ----------
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
})();
