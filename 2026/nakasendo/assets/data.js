// Trip data for the Nakasendo 2026 site.
// Public repo: no confirmation numbers, traveler names, or private-home addresses.

window.TRIP = {
  title: "Nakasendō 2026",
  start: "2026-10-09",
  end: "2026-10-24",
  tz: "Asia/Tokyo"
};

window.CATS = {
  hike:   { label: "Hiking" },
  bird:   { label: "Birding" },
  onsen:  { label: "Onsen" },
  town:   { label: "Towns" },
  travel: { label: "Travel" },
  stay:   { label: "Stays" }
};

// Weather: Oct 10–18 from the Oct 2 forecast, Oct 19–24 typical for the date (typical: true).
window.DAYS = [
  {
    n: 0, date: "2026-10-09", title: "Fly to Japan", where: "San Francisco → Taipei", cats: ["travel"],
    lat: 37.6152, lng: -122.3899,
    plan: [
      { t: "Thu eve", what: "Head to SFO International Terminal (I)", note: "The flight leaves just after midnight" },
      { t: "00:45", what: "EVA Air BR 27 to Taipei", note: "13 h 30 m" },
      { t: "05:15", what: "Land in Taipei (Sat Oct 10)", note: "75 min connection" },
      { t: "06:30", what: "EVA Air BR 178 to Osaka Kansai" }
    ],
    tips: [
      { kind: "must", text: "Have your Visit Japan Web QR code saved as a screenshot. Each traveler has their own code." }
    ]
  },
  {
    n: 1, date: "2026-10-10", title: "Arrive in Osaka", where: "Kansai Airport → Umeda", cats: ["town", "travel"],
    lat: 34.7014, lng: 135.4910, stay: "respire", weather: { hi: 28, lo: 19, sky: "☁️" },
    plan: [
      { t: "10:10", what: "Land at Kansai Airport, Terminal 1", note: "Immigration and customs with Visit Japan Web QR codes" },
      { t: "~11:17", what: "Limousine bus to the hotel", note: "T1 bus stop 5 → stop UM9. ¥1,800, buy at the T1 arrivals counter. Leaves at :07, :17, :27, :37, :47; about 60 min" },
      { t: "~12:30", what: "Drop bags at the hotel and relax nearby" },
      { t: "13:05", what: "Hong Kong flight lands at KIX", note: "They meet us at the hotel" },
      { t: "15:00", what: "Check in" },
      { t: "18:00", what: "Dinner at Aki to Shiro (sushi)", note: "Booked" }
    ],
    eats: [
      { meal: "Dinner", name: "Aki to Shiro (sushi), booked 18:00", url: "https://maps.app.goo.gl/kZeorztcPtLjQKLK6" },
      { meal: "Alternative", name: "Hakkakuan (tofu)" }
    ]
  },
  {
    n: 2, date: "2026-10-11", title: "Osaka at an easy pace", where: "Osaka", cats: ["town"],
    lat: 34.6631, lng: 135.5050, stay: "respire", weather: { hi: 26, lo: 18, sky: "⛅" },
    plan: [
      { t: "10:00", what: "Osaka Kitchen Street (Sennichimae Doguyasuji)", note: "Cookware shops, open 10:00–18:00" },
      { t: "Midday", what: "Tenjinbashi-suji shopping street and Tenma market", note: "Optional" },
      { t: "Any time", what: "Print the Shinano 9 train tickets", note: "JR West ticket machine in Osaka Station. Needs the e5489 booking number and the card used to pay" },
      { t: "18:00", what: "teamLab Botanical Garden", note: "Optional, evening light art in Nagai Park", optional: true }
    ],
    tips: [
      { kind: "must", text: "Pick up the Shinano 9 paper tickets today. You can't board tomorrow's train without them." }
    ],
    eats: [
      { meal: "Dinner", name: "Sushidokoro Kaihara", url: "https://tabelog.com/en/osaka/A2701/A270103/27051741/" },
      { meal: "Dinner", name: "Shashisu", url: "https://maps.app.goo.gl/tfMR1VsGeDd1ktx98" }
    ],
    links: [{ text: "teamLab Botanical Garden Osaka", url: "https://www.teamlab.art/e/botanicalgarden/" }]
  },
  {
    n: 3, date: "2026-10-12", title: "Into the Kiso Valley", where: "Osaka → Nakatsugawa", cats: ["travel", "town"],
    lat: 35.4996, lng: 137.5028, stay: "abhotel", weather: { hi: 27, lo: 12, sky: "⛅" },
    plan: [
      { t: "~9:00", what: "Check out; walk to JR Osaka Station (5 min)" },
      { t: "~9:15", what: "JR Osaka → Shin-Osaka (4 min)", note: "Tap your Suica; the QR ticket covers the Shinkansen only" },
      { t: "9:45", what: "Nozomi 6 to Nagoya, arrive 10:34", note: "Reserved seats, car 6. Scan your QR ticket at the gate" },
      { t: "10:34", what: "Change at Nagoya", note: "Through the transfer gate to platform 10. Allow 10 minutes" },
      { t: "11:00", what: "Shinano 9 to Nakatsugawa, arrive 11:48", note: "Reserved seats, car 2. Paper tickets" },
      { t: "~12:00", what: "Taxi to AB Hotel (~10 min)", note: "Ask them to hold bags until check-in at 15:00" },
      { t: "By 14:00", what: "Forward suitcases to Kiso Mikawaya", note: "Yamato 宅急便, about ¥3,000 a bag. Set the delivery date to Oct 14" },
      { t: "Afternoon", what: "Cash, snacks, water; stroll old Nakatsugawa-juku" },
      { t: "Evening", what: "Ask the front desk to book an 8:00 taxi to Magome" }
    ],
    tips: [
      { kind: "note", text: "Oct 12 is a national holiday (Sports Day). Trains are busier than a normal Monday." },
      { kind: "note", text: "Pack two nights in your backpack. Suitcases rejoin us in Kiso-Fukushima on Oct 14." },
      { kind: "note", text: "Shinkansen rule: bags over 160 cm (length + width + height) need an oversized-luggage seat." },
      { kind: "tip", text: "Kurikinton (chestnut sweets) are in season. Nakatsugawa is where they come from: try Suya or Kawakamiya." }
    ],
    eats: [
      { meal: "Lunch", name: "豆乃匠 中島豆腐 (tofu)", url: "https://maps.app.goo.gl/Dz5zyUbm1wH4Nz7D8" },
      { meal: "Dinner", name: "Takara Udon", url: "https://maps.app.goo.gl/AhcB3SabBLpuJ1Mu6" }
    ]
  },
  {
    n: 4, date: "2026-10-13", title: "Magome to Tsumago on foot", where: "Magome → Tsumago", cats: ["hike", "town"],
    lat: 35.5273, lng: 137.5668, stay: "tsumago", weather: { hi: 22, lo: 12, sky: "🌦️" },
    plan: [
      { t: "7:45", what: "Drop suitcases at the front desk for forwarding (if not done yesterday)" },
      { t: "8:00", what: "Taxi to Magome-juku (¥4,400–5,500)", note: "Backup: bus at 7:42 or 9:10, ¥800 exact cash" },
      { t: "8:30", what: "Explore Magome" },
      { t: "9:30", what: "Hike to Tsumago", note: "5.2 mi, up 1,069 ft and down 1,410 ft, about 4 hours. Waterfalls at Odaki and Medaki" },
      { t: "~13:30", what: "Lunch and explore Tsumago" },
      { t: "15:00", what: "Check in" },
      { t: "17:00", what: "Bento and breakfast delivered", note: "Pay cash, about ¥2,000–3,000" }
    ],
    tips: [
      { kind: "note", text: "Shops in the post towns open 9:00–16:30." },
      { kind: "tip", text: "Ring the bear bells along the trail; everyone does." },
      { kind: "tip", text: "Wear sneakers or trail runners. Bring a rain jacket, spare socks, a small towel, water and snacks." }
    ],
    eats: [{ meal: "Lunch", name: "Wachinoya (steamed buns) or soba", url: "https://maps.app.goo.gl/WhTSD3DMhehPjgY96" }],
    links: [
      { text: "AllTrails: Magome – Tsumago", url: "https://www.alltrails.com/trail/japan/gifu/nakasendo-magome-tsumago" },
      { text: "Visit Kiso hike guide", url: "https://en.visitkiso.com/nakasendo/magome-tsumago" }
    ]
  },
  {
    n: 5, date: "2026-10-14", title: "Down to the river town", where: "Tsumago → Kiso-Fukushima", cats: ["hike", "town", "onsen"],
    lat: 35.8427, lng: 137.6961, stay: "mikawaya", weather: { hi: 19, lo: 13, sky: "🌦️" },
    plan: [
      { t: "Morning", what: "Walk Tsumago → Nagiso Station", note: "2.6 mi, 1–2 hours along the river" },
      { t: "Lunch", what: "Eat in Nagiso" },
      { t: "Early pm", what: "JR Chuo Line to Kiso-Fukushima (45–60 min)", note: "Rural train: have cash" },
      { t: "15:00", what: "Check in at Kiso Mikawaya", note: "Suitcases should be waiting" },
      { t: "Afternoon", what: "Onsen and a slow walk through town", note: "Kozenji Temple, Yamamura Daikan Yashiki, the stilt houses over the river" }
    ],
    eats: [
      { meal: "Lunch", name: "Azuma (Japanese lunch sets)", url: "https://maps.app.goo.gl/4MEVKNgBkGSzJRfL9" },
      { meal: "Lunch", name: "Momotsuketei (soba), check hours", url: "https://maps.app.goo.gl/5A8PBMMgem8QWHwZA" },
      { meal: "Lunch", name: "Fukusuke", url: "https://maps.app.goo.gl/ovY7NnnrA75Ph8Aj8" }
    ],
    links: [{ text: "AllTrails: Nagiso from Tsumago", url: "https://www.alltrails.com/trail/japan/nagano/nakasendo-nagiso-tsumago" }]
  },
  {
    n: 6, date: "2026-10-15", title: "Emerald water at Atera", where: "Atera Valley", cats: ["hike"],
    lat: 35.6888, lng: 137.6163, stay: "mikawaya", weather: { hi: 13, lo: 3, sky: "🌦️" },
    plan: [
      { t: "Morning", what: "Train to Nojiri (30 min), then taxi to the valley (5 min)" },
      { t: "Late am", what: "Riverside forest walk", note: "The best stretch is about an hour in, around 30 minutes past the suspension bridge" },
      { t: "Afternoon", what: "Train back to Kiso-Fukushima" },
      { t: "Evening", what: "Dinner at 四季の彩 幸川", note: "Not booked yet" }
    ],
    tips: [{ kind: "note", text: "Cold morning, near 37°F. Bring a warm layer, beanie and gloves." }],
    links: [
      { text: "Atera Valley field guide (PDF)", url: "https://www.vill.okuwa.lg.jp/kanko/support/documents/aterafield_en.pdf" },
      { text: "Restaurant on Tabelog", url: "https://tabelog.com/en/nagano/A2007/A200701/20026019/" }
    ]
  },
  {
    n: 7, date: "2026-10-16", title: "Over Torii Pass to Narai", where: "Yabuhara → Narai", cats: ["hike", "town"],
    lat: 35.9657, lng: 137.8138, stay: "mikawaya", weather: { hi: 14, lo: 0, sky: "☁️" },
    plan: [
      { t: "~9:00", what: "Train to Yabuhara (15–20 min)" },
      { t: "~9:30", what: "Torii Pass hike to Narai", note: "Optional. 4.5 mi, 2.5–4 hours, about 1,200 ft up and down. Torii gates and a shrine at the top", optional: true },
      { t: "Afternoon", what: "Explore Narai-juku (1–2 hours)" },
      { t: "Optional", what: "Kiso-Hirasawa for lacquerware", optional: true },
      { t: "Late pm", what: "Train back to Kiso-Fukushima (20–25 min)" }
    ],
    tips: [
      { kind: "note", text: "Possible frost at the pass early on. Stone paths can be slippery." }
    ],
    links: [{ text: "AllTrails: Torii Pass", url: "https://www.alltrails.com/trail/japan/nagano/nakasendo-torii-pass" }]
  },
  {
    n: 8, date: "2026-10-17", title: "Castle and polka dots", where: "Kiso-Fukushima → Matsumoto", cats: ["town", "travel"],
    lat: 36.2386, lng: 137.9689, stay: "mitsubikiya", weather: { hi: 20, lo: 10, sky: "☁️" },
    plan: [
      { t: "9:26", what: "Limited express Shinano to Matsumoto, arrive 10:05", note: "¥2,210, unreserved is fine. Earlier option: 8:29" },
      { t: "Late am", what: "Matsumoto Castle", note: "National Treasure, original keep" },
      { t: "Afternoon", what: "Matsumoto City Museum of Art", note: "Best Yayoi Kusama collection anywhere" },
      { t: "Afternoon", what: "Nawate Street and Nakamachi Street" },
      { t: "15:00–17:00", what: "Check in at Mitsubikiya", note: "Check-in is only open these two hours" },
      { t: "18:30", what: "Dinner at the inn", note: "Ordered ahead" }
    ]
  },
  {
    n: 9, date: "2026-10-18", title: "Up to Karuizawa", where: "Matsumoto → Karuizawa", cats: ["travel", "bird", "town"],
    lat: 36.3501, lng: 138.6233, stay: "compass", weather: { hi: 16, lo: 5, sky: "☁️" },
    plan: [
      { t: "8:12", what: "Shinano to Nagano, arrive 9:11" },
      { t: "9:30", what: "Asama Shinkansen to Karuizawa, arrive 10:00", note: "¥4,290 for both trains" },
      { t: "Late am", what: "Kumoba Pond", note: "Mirror pond with maples" },
      { t: "16:00", what: "Check in at Compass Globe", note: "Door code arrives by 16:00. Fill in guest info with the QR code on the table" }
    ],
    tips: [{ kind: "tip", text: "Flying squirrels: Picchio runs evening watching tours if you want one." }]
  },
  {
    n: 10, date: "2026-10-19", title: "A morning with the birds", where: "Karuizawa", cats: ["bird", "hike", "town"],
    lat: 36.3686, lng: 138.5958, stay: "compass", weather: { hi: 15, lo: 7, sky: "", typical: true },
    plan: [
      { t: "Early", what: "Picchio early bird walk, Hoshino forest", note: "Guided. Confirm the start time" },
      { t: "9:30", what: "Karuizawa Wild Bird Sanctuary opens", note: "Easy forest trails and a quiet loop" },
      { t: "Midday", what: "Shiraito Falls (25 min bus)" },
      { t: "Afternoon", what: "Old Karuizawa Ginza Street", note: "Cafés and shops" }
    ],
    tips: [{ kind: "note", text: "The early walk will be around 40–45°F. Beanie and gloves." }],
    links: [{ text: "Picchio wildlife tours", url: "https://picchio.co.jp/en/" }]
  },
  {
    n: 11, date: "2026-10-20", title: "Into the steam", where: "Karuizawa → Kusatsu Onsen", cats: ["onsen", "travel"],
    lat: 36.6231, lng: 138.5966, stay: "kusatsu", weather: { hi: 13, lo: 6, sky: "", typical: true },
    plan: [
      { t: "9:40", what: "Bus to Kusatsu Onsen, arrive 10:58", note: "Karuizawa Station North Exit, platform 2. ¥2,240, Suica works" },
      { t: "11:00", what: "Drop bags at the check-in office near the bus terminal" },
      { t: "Midday", what: "Yubatake, the steaming hot-water field" },
      { t: "Afternoon", what: "Groceries at Super Mokube" },
      { t: "15:00", what: "Check in" },
      { t: "Evening", what: "Sainokawara open-air bath", note: "Closes 20:00. No showers; bring or rent a towel" }
    ],
    eats: [{ meal: "Idea", name: "Kamameshi at Yubatake Manten" }]
  },
  {
    n: 12, date: "2026-10-21", title: "A full day of hot water", where: "Kusatsu Onsen", cats: ["onsen"],
    lat: 36.6231, lng: 138.5966, stay: "kusatsu", weather: { hi: 13, lo: 5, sky: "", typical: true },
    plan: [
      { t: "Any time", what: "Yumomi show at Netsunoyu", note: "Water-cooling paddle performance by Yubatake" },
      { t: "Any time", what: "Ōtaki no Yu", note: "Big bathhouse with the awase-yu baths. About 3 hours, 9:00–21:00" },
      { t: "Any time", what: "Gozanoyu", note: "Small, central, lovely building. About 1 hour, 8:00–21:00" },
      { t: "Any time", what: "Free local baths: Shirahata no Yu and Jizō no Yu", note: "No showers. Very hot water" }
    ],
    tips: [{ kind: "tip", text: "Ask about the Triple Onsen Pass if you plan to try several bathhouses." }]
  },
  {
    n: 13, date: "2026-10-22", title: "Back to the city", where: "Kusatsu → Tokyo (Ueno)", cats: ["travel", "town"],
    lat: 35.7142, lng: 139.7774, stay: "ueno", weather: { hi: 20, lo: 13, sky: "", typical: true },
    plan: [
      { t: "9:50", what: "Bus to Karuizawa, arrive 11:15", note: "¥2,240. Backup: 10:10 → 11:28. Check out by 10:00" },
      { t: "12:00", what: "Asama 614 to Ueno, arrive 13:06", note: "¥5,390, unreserved. Backup: Asama 616 at 13:00" },
      { t: "15:00", what: "Check in at Mitsui Garden Hotel Ueno" },
      { t: "Evening", what: "Ameyoko market street; Muji and Uniqlo nearby" }
    ]
  },
  {
    n: 14, date: "2026-10-23", title: "Old Tokyo neighborhoods", where: "Ueno, Yanaka, Nezu", cats: ["town"],
    lat: 35.7148, lng: 139.7734, stay: "ueno", weather: { hi: 20, lo: 12, sky: "", typical: true },
    plan: [
      { t: "Morning", what: "Ueno Park" },
      { t: "Midday", what: "Yanaka and Nippori" },
      { t: "Afternoon", what: "Nezu Shrine" },
      { t: "Any time", what: "Pillow Stand at Ueno Marui", note: "Custom pillows" }
    ],
    links: [{ text: "Pillow Stand Ueno Marui", url: "https://pillowstand.com/shop/ueno-marui" }]
  },
  {
    n: 15, date: "2026-10-24", title: "Going home", where: "Tokyo → Haneda / Narita", cats: ["travel"],
    lat: 35.7732, lng: 140.3874, weather: { hi: 20, lo: 12, sky: "", typical: true },
    plan: [
      { t: "8:10", what: "Haneda flyer: taxi to Akihabara Station (10 min)" },
      { t: "8:40", what: "Haneda flyer: Airport Limousine Bus to Haneda T3, arrive 9:35", note: "Booked. Show the QR ticket" },
      { t: "11:00", what: "Check out; leave bags with the hotel" },
      { t: "~11:30", what: "Hong Kong flight: Skyliner from Keisei Ueno to Narita" },
      { t: "12:40", what: "Haneda → Taipei departs" },
      { t: "15:50", what: "Narita → Hong Kong departs" },
      { t: "17:30", what: "San Francisco flight: Skyliner from Keisei Ueno to Narita T1" },
      { t: "21:30", what: "Zipair ZG 26 to San Francisco", note: "Lands SFO 14:45 the same day" }
    ]
  }
];

window.STAYS = [
  {
    id: "respire", name: "Hotel Hankyu RESPIRE OSAKA", area: "Osaka (Umeda)", from: "2026-10-10", nights: 2,
    in: "15:00", out: "Before 12:00",
    addrJp: "〒530-0011 大阪府大阪市北区大深町1-1", addrEn: "1-1 Ofukacho, Kita-ku, Osaka", phone: "+81-6-6372-0480",
    lat: 34.7014, lng: 135.4910,
    notes: ["No breakfast", "5 min walk to JR Osaka Station", "Airport limousine bus stops here (UM9)"]
  },
  {
    id: "abhotel", name: "AB Hotel Nakatsugawa", area: "Nakatsugawa", from: "2026-10-12", nights: 1,
    in: "15:00–24:00", out: "By 10:00",
    addrJp: "〒508-0015 岐阜県中津川市手賀野258-1", addrEn: "258-1 Tegano, Nakatsugawa, Gifu",
    lat: 35.4789, lng: 137.4956,
    notes: ["Breakfast included", "Public bath", "About 10 min by taxi from the station", "Forward suitcases from the front desk"]
  },
  {
    id: "tsumago", name: "Traditional house in Tsumago", area: "Tsumago-juku", from: "2026-10-13", nights: 1,
    in: "15:00–19:00", out: "Before 10:00",
    addrJp: "長野県木曽郡南木曽町 妻籠宿", addrEn: "Tsumago-juku, Nagiso (exact address in the booking)",
    lat: 35.5768, lng: 137.5956,
    notes: ["Bento and breakfast items delivered at 17:00, pay cash", "Backpacks only tonight"]
  },
  {
    id: "mikawaya", name: "Kiso Mikawaya 木曽三河家", area: "Kiso-Fukushima", from: "2026-10-14", nights: 3,
    in: "15:00–22:30", out: "Before 10:00",
    addrJp: "〒397-0001 長野県木曽郡木曽町福島大手町5782", addrEn: "5782 Fukushima Ote-machi, Kiso, Nagano",
    lat: 35.8478, lng: 137.6952,
    notes: ["Buffet breakfast 6:30–8:30", "Drink bar 15:00–10:00", "Onsen 15:00–23:30 and 6:00–9:00", "Forwarded suitcases arrive here"]
  },
  {
    id: "mitsubikiya", name: "Mitsubikiya 三引屋", area: "Matsumoto", from: "2026-10-17", nights: 1,
    in: "15:00–17:00 only", out: "7:00–10:00",
    addrJp: "〒390-0811 長野県松本市中央2丁目9-24", addrEn: "2-9-24 Chuo, Matsumoto, Nagano",
    lat: 36.2326, lng: 137.9711,
    notes: ["Family suite", "Breakfast included", "Dinner around 18:30, ordered ahead"]
  },
  {
    id: "compass", name: "Compass Globe", area: "Karuizawa", from: "2026-10-18", nights: 2,
    in: "16:00–21:00", out: "Before 10:00",
    addrJp: "〒389-0111 長野県北佐久郡軽井沢町長倉3215-5", addrEn: "3215-5 Nagakura, Karuizawa, Nagano",
    lat: 36.3522, lng: 138.5913,
    notes: ["3-bedroom apartment", "Door code sent by 16:00 on arrival day", "Fill in guest info with the QR code on the table"]
  },
  {
    id: "kusatsu", name: "Private house in Kusatsu", area: "Kusatsu Onsen", from: "2026-10-20", nights: 2,
    in: "15:00–19:00", out: "Before 10:00",
    addrJp: "群馬県吾妻郡草津町草津452-10 KAWAMURA RESORT 1階", addrEn: "Check-in office: Kawamura Resort 1F, 452-10 Kusatsu (3 min walk from the bus terminal)",
    addrLabel: "Check-in office",
    lat: 36.6215, lng: 138.5985,
    notes: ["Check in at the office first; the house is nearby", "Leave bags at the office before 15:00", "Pick-up and drop-off 15:00–22:00"]
  },
  {
    id: "ueno", name: "Mitsui Garden Hotel Ueno", area: "Tokyo (Ueno)", from: "2026-10-22", nights: 2,
    in: "From 15:00", out: "Before 11:00",
    addrJp: "〒110-0015 東京都台東区東上野3丁目19-7", addrEn: "3-19-7 Higashi-Ueno, Taito-ku, Tokyo",
    lat: 35.7119, lng: 139.7781,
    notes: ["2 min walk from Ueno Station", "Ask to hold bags on departure day"]
  }
];

// Map pins (stays come from STAYS).
window.PLACES = [
  { name: "Kansai Airport T1", lat: 34.4320, lng: 135.2304, day: 1, cat: "travel", note: "Land 10:10. Limousine bus from stop 5" },
  { name: "Osaka Kitchen Street", lat: 34.6631, lng: 135.5050, day: 2, cat: "town", note: "Cookware shops, 10:00–18:00" },
  { name: "teamLab Botanical Garden", lat: 34.6121, lng: 135.5218, day: 2, cat: "town", optional: true, note: "Optional, evening" },
  { name: "Osaka Station", lat: 34.7025, lng: 135.4960, day: 2, cat: "travel", note: "Print Shinano 9 tickets here" },
  { name: "Nagoya Station", lat: 35.1709, lng: 136.8815, day: 3, cat: "travel", note: "Change trains: platform 10 for Shinano 9" },
  { name: "Nakatsugawa Station", lat: 35.5005, lng: 137.5031, day: 3, cat: "travel", note: "Arrive 11:48" },
  { name: "Magome-juku", lat: 35.5273, lng: 137.5668, day: 4, cat: "hike", note: "Start of the hike" },
  { name: "Magome Pass", lat: 35.5495, lng: 137.5797, day: 4, cat: "hike", note: "High point of the walk" },
  { name: "Tsumago-juku", lat: 35.5768, lng: 137.5956, day: 4, cat: "town", note: "End of the hike" },
  { name: "Nagiso Station", lat: 35.5988, lng: 137.6084, day: 5, cat: "travel", note: "Train to Kiso-Fukushima" },
  { name: "Kozenji Temple", lat: 35.8478, lng: 137.6905, day: 5, cat: "town" },
  { name: "Yamamura Daikan Yashiki", lat: 35.8452, lng: 137.6918, day: 5, cat: "town" },
  { name: "Nojiri Station", lat: 35.6730, lng: 137.6362, day: 6, cat: "travel", note: "Taxi 5 min to the valley" },
  { name: "Atera Valley", lat: 35.6888, lng: 137.6163, day: 6, cat: "hike", note: "Riverside forest walk" },
  { name: "Yabuhara Station", lat: 35.9302, lng: 137.7845, day: 7, cat: "travel", note: "Start of Torii Pass" },
  { name: "Torii Pass", lat: 35.9478, lng: 137.8003, day: 7, cat: "hike", optional: true, note: "Optional hike" },
  { name: "Narai-juku", lat: 35.9657, lng: 137.8138, day: 7, cat: "town" },
  { name: "Matsumoto Castle", lat: 36.2388, lng: 137.9707, day: 8, cat: "town" },
  { name: "Matsumoto City Museum of Art", lat: 36.2326, lng: 137.9695, day: 8, cat: "town", note: "Yayoi Kusama" },
  { name: "Nagano Station", lat: 36.6439, lng: 138.1884, day: 9, cat: "travel", note: "Change to the Asama Shinkansen" },
  { name: "Kumoba Pond", lat: 36.3501, lng: 138.6233, day: 9, cat: "bird" },
  { name: "Picchio (Hoshino)", lat: 36.3629, lng: 138.5891, day: 10, cat: "bird", note: "Early bird walk" },
  { name: "Wild Bird Sanctuary", lat: 36.3686, lng: 138.5958, day: 10, cat: "bird", note: "Opens 9:30" },
  { name: "Shiraito Falls", lat: 36.3986, lng: 138.6014, day: 10, cat: "hike" },
  { name: "Old Karuizawa Ginza", lat: 36.3567, lng: 138.6340, day: 10, cat: "town" },
  { name: "Karuizawa Station", lat: 36.3426, lng: 138.6353, day: 11, cat: "travel", note: "Kusatsu bus: North Exit, platform 2" },
  { name: "Kusatsu bus terminal", lat: 36.6209, lng: 138.5963, day: 11, cat: "travel" },
  { name: "Yubatake", lat: 36.6231, lng: 138.5966, day: 11, cat: "onsen" },
  { name: "Sainokawara open-air bath", lat: 36.6236, lng: 138.5897, day: 11, cat: "onsen", note: "Until 20:00" },
  { name: "Ōtaki no Yu", lat: 36.6203, lng: 138.5946, day: 12, cat: "onsen" },
  { name: "Ueno Station", lat: 35.7142, lng: 139.7774, day: 13, cat: "travel" },
  { name: "Ueno Park", lat: 35.7148, lng: 139.7734, day: 14, cat: "town" },
  { name: "Nezu Shrine", lat: 35.7202, lng: 139.7606, day: 14, cat: "town" },
  { name: "Akihabara Station", lat: 35.6984, lng: 139.7731, day: 15, cat: "travel", note: "Limousine bus 8:40 to Haneda" },
  { name: "Haneda Airport T3", lat: 35.5437, lng: 139.7690, day: 15, cat: "travel" },
  { name: "Narita Airport T1", lat: 35.7732, lng: 140.3874, day: 15, cat: "travel" }
];

window.ROUTE = [
  [34.4320, 135.2304], [34.7014, 135.4910], [35.1709, 136.8815], [35.5005, 137.5031],
  [35.5273, 137.5668], [35.5768, 137.5956], [35.5988, 137.6084], [35.8427, 137.6961],
  [36.2386, 137.9689], [36.6439, 138.1884], [36.3426, 138.6353], [36.6209, 138.5963],
  [36.3426, 138.6353], [35.7142, 139.7774], [35.7732, 140.3874]
];
