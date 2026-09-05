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

const BRANCH_SEASON = {
  亥: "冬",
  子: "冬",
  丑: "冬",
  寅: "春",
  卯: "春",
  辰: "春",
  巳: "夏",
  午: "夏",
  未: "夏",
  申: "秋",
  酉: "秋",
  戌: "秋",
};

const BRANCH_HOURS = [
  { branch: "子", label: "23点-1点", key: "23-1" },
  { branch: "丑", label: "1点-3点", key: "1-3" },
  { branch: "寅", label: "3点-5点", key: "3-5" },
  { branch: "卯", label: "5点-7点", key: "5-7" },
  { branch: "辰", label: "7点-9点", key: "7-9" },
  { branch: "巳", label: "9点-11点", key: "9-11" },
  { branch: "午", label: "11点-13点", key: "11-13" },
  { branch: "未", label: "13点-15点", key: "13-15" },
  { branch: "申", label: "15点-17点", key: "15-17" },
  { branch: "酉", label: "17点-19点", key: "17-19" },
  { branch: "戌", label: "19点-21点", key: "19-21" },
  { branch: "亥", label: "21点-23点", key: "21-23" },
];

const BRANCH_DIRECTION = {
  子: { key: "正北", label: "正北方" },
  丑: { key: "东北", label: "东北方" },
  寅: { key: "东北", label: "东北方" },
  卯: { key: "正东", label: "正东方" },
  辰: { key: "东南", label: "东南方" },
  巳: { key: "东南", label: "东南方" },
  午: { key: "正南", label: "正南方" },
  未: { key: "西南", label: "西南方" },
  申: { key: "西南", label: "西南方" },
  酉: { key: "正西", label: "正西方" },
  戌: { key: "西北", label: "西北方" },
  亥: { key: "西北", label: "西北方" },
};

const BRANCH_COLORS = {
  亥: { colors: ["黑", "蓝"], label: "黑色、蓝色" },
  子: { colors: ["黑", "蓝"], label: "黑色、蓝色" },
  寅: { colors: ["青", "绿"], label: "青色、绿色" },
  卯: { colors: ["青", "绿"], label: "青色、绿色" },
  巳: { colors: ["红", "紫"], label: "红色、紫色" },
  午: { colors: ["红", "紫"], label: "红色、紫色" },
  申: { colors: ["金黄", "白"], label: "金黄色、白色" },
  酉: { colors: ["金黄", "白"], label: "金黄色、白色" },
  丑: { colors: ["土黄", "褐"], label: "土黄色、褐色" },
  辰: { colors: ["土黄", "褐"], label: "土黄色、褐色" },
  未: { colors: ["土黄", "褐"], label: "土黄色、褐色" },
  戌: { colors: ["土黄", "褐"], label: "土黄色、褐色" },
};

const BRANCH_ZODIAC = {
  子: "鼠",
  丑: "牛",
  寅: "虎",
  卯: "兔",
  辰: "龙",
  巳: "蛇",
  午: "马",
  未: "羊",
  申: "猴",
  酉: "鸡",
  戌: "狗",
  亥: "猪",
};

const BRANCH_PERSONALITY = {
  子: "阴柔智慧型",
  丑: "固执沉稳型",
  寅: "曲直向上型",
  卯: "柔顺向上型",
  辰: "倔强成熟型",
  巳: "纠结善变型",
  午: "急躁易怒型",
  未: "认死理沉闷型",
  申: "刚猛萧杀型",
  酉: "酒色暧昧型",
  戌: "沉稳不惊型",
  亥: "阴私多智型",
};

const BRANCH_BODY = {
  亥: { parts: ["肾脏", "膀胱"], label: "肾脏和膀胱" },
  子: { parts: ["肾脏", "膀胱"], label: "肾脏和膀胱" },
  丑: { parts: ["脾胃", "皮肤"], label: "脾胃和皮肤" },
  辰: { parts: ["脾胃", "皮肤"], label: "脾胃和皮肤" },
  未: { parts: ["脾胃", "皮肤"], label: "脾胃和皮肤" },
  戌: { parts: ["脾胃", "皮肤"], label: "脾胃和皮肤" },
  寅: { parts: ["肝胆", "手足"], label: "肝胆和手足" },
  卯: { parts: ["肝胆", "手足"], label: "肝胆和手足" },
  巳: { parts: ["心脏", "血液"], label: "心脏和血液" },
  午: { parts: ["心脏", "血液"], label: "心脏和血液" },
  申: { parts: ["肺部", "呼吸道"], label: "肺部和呼吸道" },
  酉: { parts: ["肺部", "呼吸道"], label: "肺部和呼吸道" },
};

const SEASON_BRANCHES = Object.keys(BRANCH_SEASON);
const DIRECTION_BRANCHES = Object.keys(BRANCH_DIRECTION);
const COLOR_BRANCHES = Object.keys(BRANCH_COLORS);
const ZODIAC_BRANCHES = Object.keys(BRANCH_ZODIAC);
const PERSONALITY_BRANCHES = Object.keys(BRANCH_PERSONALITY);
const BODY_BRANCHES = Object.keys(BRANCH_BODY);

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
const seasonFields = document.getElementById("seasonFields");
const hourFields = document.getElementById("hourFields");
const directionFields = document.getElementById("directionFields");
const colorFields = document.getElementById("colorFields");
const zodiacFields = document.getElementById("zodiacFields");
const personalityFields = document.getElementById("personalityFields");
const bodyFields = document.getElementById("bodyFields");
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

function normalizeSeason(value) {
  return normalize(value).replace(/[天季]/g, "");
}

function normalizeHour(value) {
  return normalize(value)
    .replace(/时/g, "")
    .replace(/点/g, "")
    .replace(/[：:]/g, "-")
    .replace(/[至到～~—–﹣－]/g, "-")
    .replace(/\s+/g, "");
}

function normalizeDirection(value) {
  const text = normalize(value).replace(/方/g, "");
  const aliases = {
    正北: "正北",
    北: "正北",
    东北: "东北",
    正东: "正东",
    东: "正东",
    东南: "东南",
    正南: "正南",
    南: "正南",
    西南: "西南",
    正西: "正西",
    西: "正西",
    西北: "西北",
  };
  return aliases[text] || text;
}

function colorsMatch(value, expectedColors) {
  const text = normalize(value).replace(/色/g, "").replace(/[、,，和与\s]/g, "");
  return expectedColors.every((color) => text.includes(color));
}

function bodyMatch(value, expectedParts) {
  const text = normalize(value)
    .replace(/部/g, "")
    .replace(/[、,，和与及\s]/g, "");
  const aliases = {
    肾脏: ["肾脏", "肾"],
    膀胱: ["膀胱"],
    脾胃: ["脾胃", "脾", "胃"],
    皮肤: ["皮肤"],
    肝胆: ["肝胆", "肝", "胆"],
    手足: ["手足", "手脚"],
    心脏: ["心脏", "心"],
    血液: ["血液", "血"],
    肺部: ["肺部", "肺"],
    呼吸道: ["呼吸道"],
  };
  return expectedParts.every((part) => {
    const options = aliases[part] || [part];
    return options.some((option) => text.includes(option.replace(/部/g, "")));
  });
}

function normalizePersonality(value) {
  return normalize(value)
    .replace(/\s+/g, "")
    .replace(/型$/g, "")
    .replace(/暖昧/g, "暧昧")
    .replace(/肃杀/g, "萧杀");
}

function personalityMatch(value, expected) {
  return normalizePersonality(value) === normalizePersonality(expected);
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

function updateSeasonLabels(branch) {
  document.getElementById("labelSeason").textContent = `${branch}属什么季节`;
}

function updateHourLabels(hour) {
  document.getElementById("labelHour").textContent = `${hour.branch}时对应什么时间`;
}

function updateDirectionLabels(branch) {
  document.getElementById("labelDirection").textContent = `${branch}对应什么方位`;
}

function updateColorLabels(branch) {
  document.getElementById("labelColor").textContent = `${branch}对应什么颜色`;
}

function updateZodiacLabels(branch) {
  document.getElementById("labelZodiac").textContent = `${branch}对应什么生肖`;
}

function updatePersonalityLabels(branch) {
  document.getElementById("labelPersonality").textContent = `${branch}属于什么性格类型`;
}

function updateBodyLabels(branch) {
  document.getElementById("labelBody").textContent = `${branch}对应什么脏腑部位`;
}

function showMode(nextMode) {
  mode = nextMode;
  wuxingFields.hidden = mode !== "wuxing";
  hehuaFields.hidden = mode !== "hehua";
  chongFields.hidden = mode !== "chong";
  monthFields.hidden = mode !== "month";
  seasonFields.hidden = mode !== "season";
  hourFields.hidden = mode !== "hour";
  directionFields.hidden = mode !== "direction";
  colorFields.hidden = mode !== "color";
  zodiacFields.hidden = mode !== "zodiac";
  personalityFields.hidden = mode !== "personality";
  bodyFields.hidden = mode !== "body";
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
    ...SEASON_BRANCHES.map((branch) => ({ mode: "season", value: branch, key: `season:${branch}` })),
    ...BRANCH_HOURS.map((hour) => ({ mode: "hour", value: hour, key: `hour:${hour.branch}` })),
    ...DIRECTION_BRANCHES.map((branch) => ({ mode: "direction", value: branch, key: `direction:${branch}` })),
    ...COLOR_BRANCHES.map((branch) => ({ mode: "color", value: branch, key: `color:${branch}` })),
    ...ZODIAC_BRANCHES.map((branch) => ({ mode: "zodiac", value: branch, key: `zodiac:${branch}` })),
    ...PERSONALITY_BRANCHES.map((branch) => ({ mode: "personality", value: branch, key: `personality:${branch}` })),
    ...BODY_BRANCHES.map((branch) => ({ mode: "body", value: branch, key: `body:${branch}` })),
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

  if (picked.mode === "season") {
    promptEl.textContent = "当前地支";
    elementEl.textContent = current;
    elementEl.dataset.kind = "season";
    delete elementEl.dataset.name;
    updateSeasonLabels(current);
    return true;
  }

  if (picked.mode === "hour") {
    promptEl.textContent = "当前时辰";
    elementEl.textContent = `${current.branch}时`;
    elementEl.dataset.kind = "hour";
    delete elementEl.dataset.name;
    updateHourLabels(current);
    return true;
  }

  if (picked.mode === "direction") {
    promptEl.textContent = "当前地支";
    elementEl.textContent = current;
    elementEl.dataset.kind = "direction";
    delete elementEl.dataset.name;
    updateDirectionLabels(current);
    return true;
  }

  if (picked.mode === "color") {
    promptEl.textContent = "当前地支";
    elementEl.textContent = current;
    elementEl.dataset.kind = "color";
    delete elementEl.dataset.name;
    updateColorLabels(current);
    return true;
  }

  if (picked.mode === "zodiac") {
    promptEl.textContent = "当前地支";
    elementEl.textContent = current;
    elementEl.dataset.kind = "zodiac";
    delete elementEl.dataset.name;
    updateZodiacLabels(current);
    return true;
  }

  if (picked.mode === "personality") {
    promptEl.textContent = "当前地支";
    elementEl.textContent = current;
    elementEl.dataset.kind = "personality";
    delete elementEl.dataset.name;
    updatePersonalityLabels(current);
    return true;
  }

  if (picked.mode === "body") {
    promptEl.textContent = "当前地支";
    elementEl.textContent = current;
    elementEl.dataset.kind = "body";
    delete elementEl.dataset.name;
    updateBodyLabels(current);
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
  if (mode === "season") return [form.season];
  if (mode === "hour") return [form.hour];
  if (mode === "direction") return [form.direction];
  if (mode === "color") return [form.color];
  if (mode === "zodiac") return [form.zodiac];
  if (mode === "personality") return [form.personality];
  if (mode === "body") return [form.body];
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
  if (mode === "season") {
    return {
      season: BRANCH_SEASON[current],
    };
  }
  if (mode === "hour") {
    return {
      hour: current.key,
      hourLabel: current.label,
    };
  }
  if (mode === "direction") {
    return {
      direction: BRANCH_DIRECTION[current].key,
      directionLabel: BRANCH_DIRECTION[current].label,
    };
  }
  if (mode === "color") {
    return {
      colors: BRANCH_COLORS[current].colors,
      colorLabel: BRANCH_COLORS[current].label,
    };
  }
  if (mode === "zodiac") {
    return {
      zodiac: BRANCH_ZODIAC[current],
    };
  }
  if (mode === "personality") {
    return {
      personality: BRANCH_PERSONALITY[current],
    };
  }
  if (mode === "body") {
    return {
      parts: BRANCH_BODY[current].parts,
      bodyLabel: BRANCH_BODY[current].label,
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
  } else if (mode === "season") {
    const given = {
      season: normalizeSeason(form.season.value),
    };
    allRight = markFields(expected, given, ["season"]);
    if (allRight) {
      feedback.textContent = `正确。${current}属${expected.season}。`;
    } else {
      feedback.textContent = `再记一遍：${current}属${expected.season}。`;
    }
  } else if (mode === "hour") {
    const given = {
      hour: normalizeHour(form.hour.value),
    };
    allRight = markFields(expected, given, ["hour"]);
    if (allRight) {
      feedback.textContent = `正确。${current.branch}时为${expected.hourLabel}。`;
    } else {
      feedback.textContent = `再记一遍：${current.branch}时为${expected.hourLabel}。`;
    }
  } else if (mode === "direction") {
    const given = {
      direction: normalizeDirection(form.direction.value),
    };
    allRight = markFields(expected, given, ["direction"]);
    if (allRight) {
      feedback.textContent = `正确。${current}是${expected.directionLabel}。`;
    } else {
      feedback.textContent = `再记一遍：${current}是${expected.directionLabel}。`;
    }
  } else if (mode === "color") {
    allRight = colorsMatch(form.color.value, expected.colors);
    form.color.classList.toggle("ok", allRight);
    form.color.classList.toggle("bad", !allRight);
    if (allRight) {
      feedback.textContent = `正确。${current}对应${expected.colorLabel}。`;
    } else {
      feedback.textContent = `再记一遍：${current}对应${expected.colorLabel}。`;
    }
  } else if (mode === "zodiac") {
    const given = {
      zodiac: normalize(form.zodiac.value),
    };
    allRight = markFields(expected, given, ["zodiac"]);
    if (allRight) {
      feedback.textContent = `正确。${current}对应生肖${expected.zodiac}。`;
    } else {
      feedback.textContent = `再记一遍：${current}对应生肖${expected.zodiac}。`;
    }
  } else if (mode === "personality") {
    allRight = personalityMatch(form.personality.value, expected.personality);
    form.personality.classList.toggle("ok", allRight);
    form.personality.classList.toggle("bad", !allRight);
    if (allRight) {
      feedback.textContent = `正确。${current}属${expected.personality}。`;
    } else {
      feedback.textContent = `再记一遍：${current}属${expected.personality}。`;
    }
  } else if (mode === "body") {
    allRight = bodyMatch(form.body.value, expected.parts);
    form.body.classList.toggle("ok", allRight);
    form.body.classList.toggle("bad", !allRight);
    if (allRight) {
      feedback.textContent = `正确。${current}对应${expected.bodyLabel}。`;
    } else {
      feedback.textContent = `再记一遍：${current}对应${expected.bodyLabel}。`;
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
