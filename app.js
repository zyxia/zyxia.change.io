const ELEMENTS = ["木", "火", "土", "金", "水"];

const SHENG = {
  木: "火",
  火: "土",
  土: "金",
  金: "水",
  水: "木",
};

const KE = {
  木: "土",
  火: "金",
  土: "水",
  金: "木",
  水: "火",
};

const SHENG_BY = Object.fromEntries(
  ELEMENTS.map((name) => [SHENG[name], name])
);

const KE_BY = Object.fromEntries(
  ELEMENTS.map((name) => [KE[name], name])
);

const HEHUA_PAIRS = [
  { a: "甲", b: "己", result: "土" },
  { a: "乙", b: "庚", result: "金" },
  { a: "丙", b: "辛", result: "水" },
  { a: "丁", b: "壬", result: "木" },
  { a: "戊", b: "癸", result: "火" },
];

const CHONG_PAIRS = [
  { a: "甲", b: "庚" },
  { a: "乙", b: "辛" },
  { a: "丙", b: "壬" },
  { a: "丁", b: "癸" },
];

const MONTHS = [
  { num: 1, label: "正月", alt: "一月", branch: "寅" },
  { num: 2, label: "二月", branch: "卯" },
  { num: 3, label: "三月", branch: "辰" },
  { num: 4, label: "四月", branch: "巳" },
  { num: 5, label: "五月", branch: "午" },
  { num: 6, label: "六月", branch: "未" },
  { num: 7, label: "七月", branch: "申" },
  { num: 8, label: "八月", branch: "酉" },
  { num: 9, label: "九月", branch: "戌" },
  { num: 10, label: "十月", branch: "亥" },
  { num: 11, label: "十一月", alt: "冬月", branch: "子" },
  { num: 12, label: "十二月", alt: "腊月", branch: "丑" },
];

const STEM_ELEMENT = {
  甲: "木",
  乙: "木",
  丙: "火",
  丁: "火",
  戊: "土",
  己: "土",
  庚: "金",
  辛: "金",
  壬: "水",
  癸: "水",
};

const STEM_PARTNER = {};
const STEM_RESULT = {};
for (const pair of HEHUA_PAIRS) {
  STEM_PARTNER[pair.a] = pair.b;
  STEM_PARTNER[pair.b] = pair.a;
  STEM_RESULT[pair.a] = pair.result;
  STEM_RESULT[pair.b] = pair.result;
}

const STEM_CHONG = {};
for (const pair of CHONG_PAIRS) {
  STEM_CHONG[pair.a] = pair.b;
  STEM_CHONG[pair.b] = pair.a;
}

const HEHUA_STEMS = Object.keys(STEM_PARTNER);
const CHONG_STEMS = Object.keys(STEM_CHONG);

const form = document.getElementById("form");
const promptEl = document.getElementById("prompt");
const elementEl = document.getElementById("element");
const wuxingFields = document.getElementById("wuxingFields");
const hehuaFields = document.getElementById("hehuaFields");
const chongFields = document.getElementById("chongFields");
const monthFields = document.getElementById("monthFields");
const feedback = document.getElementById("feedback");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const streakEl = document.getElementById("streak");
const correctEl = document.getElementById("correct");
const totalEl = document.getElementById("total");
const typeFilters = [...document.querySelectorAll('input[name="typeFilter"]')];

let mode = "wuxing";
let current = "木";
let lastKey = null;
let streak = 0;
let correct = 0;
let total = 0;
let locked = false;

function normalize(value) {
  return value.trim().replace(/行/g, "");
}

function updateWuxingLabels(name) {
  document.getElementById("labelKe").textContent = `${name}克谁`;
  document.getElementById("labelKeBy").textContent = `谁克${name}`;
  document.getElementById("labelShengBy").textContent = `谁生${name}`;
  document.getElementById("labelSheng").textContent = `${name}生谁`;
}

function updateHehuaLabels(stem) {
  document.getElementById("labelPartner").textContent = `${stem}与谁相合`;
  document.getElementById("labelHehua").textContent = `合化什么`;
}

function updateChongLabels(stem) {
  document.getElementById("labelChong").textContent = `${stem}与谁相冲`;
}

function monthDisplay(month) {
  return month.alt ? `${month.label}（${month.alt}）` : month.label;
}

function updateMonthLabels(month) {
  document.getElementById("labelMonth").textContent = `${monthDisplay(month)}对应什么地支`;
}

function showMode(nextMode) {
  mode = nextMode;
  wuxingFields.hidden = mode !== "wuxing";
  hehuaFields.hidden = mode !== "hehua";
  chongFields.hidden = mode !== "chong";
  monthFields.hidden = mode !== "month";
}

function getSelectedTypes() {
  return typeFilters.filter((input) => input.checked).map((input) => input.value);
}

function buildPool() {
  const selected = new Set(getSelectedTypes());
  return [
    ...ELEMENTS.map((name) => ({ mode: "wuxing", value: name, key: `wuxing:${name}` })),
    ...HEHUA_STEMS.map((stem) => ({ mode: "hehua", value: stem, key: `hehua:${stem}` })),
    ...CHONG_STEMS.map((stem) => ({ mode: "chong", value: stem, key: `chong:${stem}` })),
    ...MONTHS.map((month) => ({ mode: "month", value: month, key: `month:${month.num}` })),
  ].filter((item) => selected.has(item.mode));
}

function pickQuestion() {
  const pool = buildPool();
  if (pool.length === 0) return false;

  const candidates = pool.filter((item) => item.key !== lastKey);
  const choices = candidates.length > 0 ? candidates : pool;
  const picked = choices[Math.floor(Math.random() * choices.length)];

  lastKey = picked.key;
  current = picked.value;
  showMode(picked.mode);

  if (picked.mode === "wuxing") {
    promptEl.textContent = "当前五行";
    elementEl.textContent = current;
    elementEl.dataset.name = current;
    delete elementEl.dataset.kind;
    updateWuxingLabels(current);
    return true;
  }

  if (picked.mode === "month") {
    promptEl.textContent = "当前月份";
    elementEl.textContent = monthDisplay(current);
    elementEl.dataset.kind = "month";
    delete elementEl.dataset.name;
    updateMonthLabels(current);
    return true;
  }

  promptEl.textContent = "当前天干";
  elementEl.textContent = current;
  elementEl.dataset.name = STEM_ELEMENT[current];
  delete elementEl.dataset.kind;

  if (picked.mode === "hehua") {
    updateHehuaLabels(current);
  } else {
    updateChongLabels(current);
  }
  return true;
}

function activeInputs() {
  if (mode === "wuxing") return [form.ke, form.keBy, form.shengBy, form.sheng];
  if (mode === "hehua") return [form.partner, form.hehua];
  if (mode === "month") return [form.branch];
  return [form.chong];
}

function resetInputs() {
  for (const input of form.querySelectorAll("input")) {
    input.value = "";
    input.classList.remove("ok", "bad");
    input.disabled = false;
  }
  activeInputs()[0].focus();
}

function setLocked(value) {
  locked = value;
  checkBtn.hidden = value;
  nextBtn.hidden = !value;
  for (const input of form.querySelectorAll("input")) {
    input.disabled = value;
  }
}

function answerOf() {
  if (mode === "wuxing") {
    return {
      ke: KE[current],
      keBy: KE_BY[current],
      shengBy: SHENG_BY[current],
      sheng: SHENG[current],
    };
  }
  if (mode === "hehua") {
    return {
      partner: STEM_PARTNER[current],
      hehua: STEM_RESULT[current],
    };
  }
  if (mode === "month") {
    return {
      branch: current.branch,
    };
  }
  return {
    chong: STEM_CHONG[current],
  };
}

function nextQuestion() {
  if (!pickQuestion()) {
    feedback.hidden = false;
    feedback.textContent = "请至少选择一种题型。";
    feedback.className = "feedback bad";
    setLocked(true);
    checkBtn.hidden = true;
    nextBtn.hidden = false;
    return;
  }

  resetInputs();
  setLocked(false);
  feedback.hidden = true;
  feedback.textContent = "";
  feedback.className = "feedback";
}

function onTypeFilterChange(changedInput) {
  if (getSelectedTypes().length === 0) {
    changedInput.checked = true;
    return;
  }

  lastKey = null;
  if (locked) {
    nextQuestion();
    return;
  }
  nextQuestion();
}

for (const input of typeFilters) {
  input.addEventListener("change", () => onTypeFilterChange(input));
}

function markFields(expected, given, fields) {
  let allRight = true;
  for (const field of fields) {
    const ok = given[field] === expected[field];
    form[field].classList.toggle("ok", ok);
    form[field].classList.toggle("bad", !ok);
    if (!ok) allRight = false;
  }
  return allRight;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (locked) {
    nextQuestion();
    return;
  }

  const expected = answerOf();
  let allRight = false;

  if (mode === "wuxing") {
    const given = {
      ke: normalize(form.ke.value),
      keBy: normalize(form.keBy.value),
      shengBy: normalize(form.shengBy.value),
      sheng: normalize(form.sheng.value),
    };
    allRight = markFields(expected, given, ["ke", "keBy", "shengBy", "sheng"]);
    if (allRight) {
      feedback.textContent = `正确。${current}克${expected.ke}，${expected.keBy}克${current}，${expected.shengBy}生${current}，${current}生${expected.sheng}。`;
    } else {
      feedback.textContent = `再记一遍：${current}克${expected.ke}；${expected.keBy}克${current}；生${current}的是${expected.shengBy}；${current}生${expected.sheng}。`;
    }
  } else if (mode === "hehua") {
    const given = {
      partner: normalize(form.partner.value),
      hehua: normalize(form.hehua.value),
    };
    allRight = markFields(expected, given, ["partner", "hehua"]);
    if (allRight) {
      feedback.textContent = `正确。${current}${expected.partner}相合，合化${expected.hehua}。`;
    } else {
      feedback.textContent = `再记一遍：${current}${expected.partner}相合，合化${expected.hehua}。`;
    }
  } else if (mode === "month") {
    const given = {
      branch: normalize(form.branch.value),
    };
    allRight = markFields(expected, given, ["branch"]);
    const monthText = monthDisplay(current);
    if (allRight) {
      feedback.textContent = `正确。${monthText}为${expected.branch}月。`;
    } else {
      feedback.textContent = `再记一遍：${monthText}为${expected.branch}月。`;
    }
  } else {
    const given = {
      chong: normalize(form.chong.value),
    };
    allRight = markFields(expected, given, ["chong"]);
    if (allRight) {
      feedback.textContent = `正确。${current}${expected.chong}相冲。`;
    } else {
      feedback.textContent = `再记一遍：${current}${expected.chong}相冲。`;
    }
  }

  total += 1;
  if (allRight) {
    correct += 1;
    streak += 1;
    feedback.className = "feedback ok";
  } else {
    streak = 0;
    feedback.className = "feedback bad";
  }

  feedback.hidden = false;
  streakEl.textContent = String(streak);
  correctEl.textContent = String(correct);
  totalEl.textContent = String(total);
  setLocked(true);
  nextBtn.focus();
});

nextBtn.addEventListener("click", nextQuestion);

nextQuestion();
