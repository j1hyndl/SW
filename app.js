// Bob Recommender Application Logic - Nintendo 2001 Console Edition

// Default Restaurant Dataset
const DEFAULT_RESTAURANTS = [
  { id: 1,  name: "비나레스토랑",     category: "기타", location: "참살이길", weatherTag: "상관없음" },
  { id: 2,  name: "미분당",           category: "기타", location: "참살이길", weatherTag: "추운 날" },
  { id: 3,  name: "꽌부이",           category: "기타", location: "정후",     weatherTag: "비오는 날" },
  { id: 4,  name: "샤브로21",         category: "기타", location: "정후",     weatherTag: "상관없음" },
  { id: 5,  name: "아다나케밥",       category: "기타", location: "정후",     weatherTag: "상관없음" },
  { id: 6,  name: "베나레스",         category: "기타", location: "참살이길", weatherTag: "상관없음" },
  { id: 7,  name: "KFC",             category: "기타", location: "정후",     weatherTag: "상관없음" },
  { id: 8,  name: "맥도날드",         category: "기타", location: "참살이길", weatherTag: "상관없음" },
  { id: 9,  name: "맘스터치",         category: "기타", location: "정후",     weatherTag: "상관없음" },
  { id: 10, name: "고른햇살",         category: "분식", location: "정후",     weatherTag: "상관없음" },
  { id: 11, name: "유자유김치떡볶이", category: "분식", location: "참살이길", weatherTag: "상관없음" },
  { id: 12, name: "어흥식당",         category: "양식", location: "정후",     weatherTag: "상관없음" },
  { id: 13, name: "무르무르드구스토", category: "양식", location: "참살이길", weatherTag: "상관없음" },
  { id: 14, name: "이수영피자",       category: "양식", location: "기타",     weatherTag: "상관없음" },
  { id: 15, name: "매스플레이트",     category: "양식", location: "정후",     weatherTag: "상관없음" },
  { id: 16, name: "퍽앤어니언",       category: "양식", location: "참살이길", weatherTag: "상관없음" },
  { id: 17, name: "효이당",           category: "양식", location: "정후",     weatherTag: "상관없음" },
  { id: 18, name: "야마토텐동",       category: "일식", location: "참살이길", weatherTag: "상관없음" },
  { id: 19, name: "백소정",           category: "일식", location: "정후",     weatherTag: "상관없음" },
  { id: 20, name: "특별식당",         category: "일식", location: "정후",     weatherTag: "상관없음" },
  { id: 21, name: "대부라멘",         category: "일식", location: "참살이길", weatherTag: "추운 날" },
  { id: 22, name: "다정소반",         category: "일식", location: "정후",     weatherTag: "상관없음" },
  { id: 23, name: "시키카츠",         category: "일식", location: "참살이길", weatherTag: "상관없음" },
  { id: 24, name: "또정초밥",         category: "일식", location: "기타",     weatherTag: "상관없음" },
  { id: 25, name: "호랑이초밥",       category: "일식", location: "참살이길", weatherTag: "상관없음" },
  { id: 26, name: "쿠이도라쿠",       category: "일식", location: "참살이길", weatherTag: "추운 날" },
  { id: 27, name: "핵밥",             category: "일식", location: "참살이길", weatherTag: "상관없음" },
  { id: 28, name: "이세돈가스",       category: "일식", location: "정후",     weatherTag: "상관없음" },
  { id: 29, name: "일월의제면소",     category: "일식", location: "정후",     weatherTag: "더운 날" },
  { id: 30, name: "용초수",           category: "중식", location: "정후",     weatherTag: "상관없음" },
  { id: 31, name: "니뽕내뽕",         category: "중식", location: "참살이길", weatherTag: "상관없음" },
  { id: 32, name: "수저가",           category: "중식", location: "참살이길", weatherTag: "추운 날" },
  { id: 33, name: "언니네반점",       category: "중식", location: "정후",     weatherTag: "상관없음" },
  { id: 34, name: "춘리마라탕",       category: "중식", location: "참살이길", weatherTag: "상관없음" },
  { id: 35, name: "짱가네돈냉면",     category: "한식", location: "참살이길", weatherTag: "더운 날" },
  { id: 36, name: "만복식당",         category: "한식", location: "정후",     weatherTag: "비오는 날" },
  { id: 37, name: "내가찜한닭",       category: "한식", location: "참살이길", weatherTag: "상관없음" },
  { id: 38, name: "양지식당",         category: "한식", location: "기타",     weatherTag: "추운 날" },
  { id: 39, name: "금쪽삼겹",         category: "한식", location: "정후",     weatherTag: "상관없음" },
  { id: 40, name: "행복은간장밥",     category: "한식", location: "참살이길", weatherTag: "상관없음" },
  { id: 41, name: "우승식당",         category: "한식", location: "참살이길", weatherTag: "상관없음" },
  { id: 42, name: "BIYA부대찌개",    category: "한식", location: "정후",     weatherTag: "비오는 날" },
  { id: 43, name: "미스터국밥",       category: "한식", location: "참살이길", weatherTag: "추운 날" },
  { id: 44, name: "옥두헌순두부",     category: "한식", location: "정후",     weatherTag: "추운 날" },
  { id: 45, name: "철남",             category: "한식", location: "정후",     weatherTag: "비오는 날" },
  { id: 46, name: "끄트머리집",       category: "한식", location: "참살이길", weatherTag: "상관없음" },
  { id: 47, name: "고품콩",           category: "한식", location: "참살이길", weatherTag: "상관없음" },
  { id: 48, name: "동우설렁탕",       category: "한식", location: "정후",     weatherTag: "추운 날" },
  { id: 49, name: "등촌샤브칼국수",   category: "한식", location: "정후",     weatherTag: "추운 날" },
  { id: 50, name: "팔백집",           category: "한식", location: "정후",     weatherTag: "추운 날" },
  { id: 51, name: "토로생선구이",     category: "한식", location: "참살이길", weatherTag: "비오는 날" },
  { id: 52, name: "금복식당",         category: "한식", location: "기타",     weatherTag: "상관없음" },
  { id: 53, name: "오봉집",           category: "한식", location: "정후",     weatherTag: "상관없음" },
  { id: 54, name: "토담",             category: "한식", location: "정후",     weatherTag: "상관없음" },
  { id: 55, name: "육쌈냉면",         category: "한식", location: "참살이길", weatherTag: "더운 날" }
];

// App State
let restaurants = [];
let pendingRequests = []; // Suggested by users
let isAdminMode = false;
let editingId = null;

let currentFilter = {
  category: "all",
  location: "all",
  weatherEnabled: true
};

let simulatedWeather = {
  active: false,
  type: "sunny",
  temp: 22
};

let realWeather = {
  loaded: false,
  type: "sunny",
  temp: 20
};

// DOM Elements
const categoryGrid = document.getElementById("category-grid");
const locationGrid = document.getElementById("location-grid");
const weatherFilterToggle = document.getElementById("weather-filter-toggle");
const triggerRecommendBtn = document.getElementById("trigger-recommend-btn");

// Result Elements
const resultSection = document.getElementById("result-section");
const resultRestaurantName = document.getElementById("result-restaurant-name");
const resultBadgeCategory = document.getElementById("result-badge-category");
const resultBadgeLocation = document.getElementById("result-badge-location");
const resultBadgeWeather = document.getElementById("result-badge-weather");
const resultExplanationText = document.getElementById("result-explanation-text");

// Modal Elements
const suggestMenuBtn = document.getElementById("suggest-menu-btn");
const suggestModalOverlay = document.getElementById("suggest-modal-overlay");
const closeModalBtn = document.getElementById("close-modal-btn");
const suggestRestaurantForm = document.getElementById("suggest-restaurant-form");

// Admin Elements
const adminNavLink = document.getElementById("admin-nav-link");
const secretAdminTrigger = document.getElementById("secret-admin-trigger");
const pendingTableBody = document.getElementById("pending-table-body");
const restaurantTableBody = document.getElementById("restaurant-table-body");
const dbCountLabel = document.getElementById("db-count-label");
const adminAddForm = document.getElementById("admin-add-form");
const resetDefaultDbBtn = document.getElementById("reset-default-db-btn");
const toast = document.getElementById("toast-notification");

// Navigation & Weather Widgets
const weatherStatusText = document.getElementById("weather-status-text");
const quickSimToggle = document.getElementById("quick-sim-toggle");
const weatherSimPanel = document.getElementById("weather-sim-panel");
const simBtns = document.querySelectorAll("#weather-sim-panel .console-option-chip");
const simTempInput = document.getElementById("sim-temp");

// Result buttons
const reRecommendBtn = document.getElementById("re-recommend-btn");
const resetRecommendBtn = document.getElementById("reset-recommend-btn");

// Init
document.addEventListener("DOMContentLoaded", () => {
  loadData();
  setupEventListeners();
  initWeather();
  checkUrlHash();
});

// Load DB from LocalStorage
function loadData() {
  const storedDb = localStorage.getItem("nintendo_restaurants_db");
  if (storedDb) {
    restaurants = JSON.parse(storedDb);
    // If stored DB is the old dataset (fewer than 30 restaurants), reset to new defaults
    if (restaurants.length < 30) {
      restaurants = [...DEFAULT_RESTAURANTS];
      localStorage.setItem("nintendo_restaurants_db", JSON.stringify(restaurants));
    }
  } else {
    restaurants = [...DEFAULT_RESTAURANTS];
    localStorage.setItem("nintendo_restaurants_db", JSON.stringify(restaurants));
  }

  const storedPending = localStorage.getItem("nintendo_pending_requests");
  if (storedPending) {
    pendingRequests = JSON.parse(storedPending);
  } else {
    pendingRequests = [];
    localStorage.setItem("nintendo_pending_requests", JSON.stringify(pendingRequests));
  }

  updateDbCounts();
}

function updateDbCounts() {
  if (dbCountLabel) {
    dbCountLabel.textContent = `등록 맛집: ${restaurants.length}개`;
  }
}

// Event Listeners Setup
function setupEventListeners() {
  
  // Navigation tabs switching
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      const target = tab.getAttribute("data-target");
      switchView(target);
    });
  });

  // Switch view function
  function switchView(viewName) {
    document.querySelectorAll(".view-section").forEach(sec => {
      sec.classList.remove("active");
    });
    document.getElementById(`view-${viewName}`).classList.add("active");

    document.querySelectorAll(".nintendo-nav-links a").forEach(link => {
      if (link.getAttribute("data-target") === viewName) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    if (viewName === "admin") {
      renderAdminTable();
      renderPendingTable();
    }
  }

  // Suggest Modal Toggles
  suggestMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    suggestModalOverlay.classList.add("active");
  });

  closeModalBtn.addEventListener("click", () => {
    suggestModalOverlay.classList.remove("active");
  });

  // Close modal when clicking outside it
  suggestModalOverlay.addEventListener("click", (e) => {
    if (e.target === suggestModalOverlay) {
      suggestModalOverlay.classList.remove("active");
    }
  });

  // User Suggest Form Submit
  suggestRestaurantForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("s-name").value.trim();
    const category = document.getElementById("s-category").value;
    const location = document.getElementById("s-location").value;
    const weatherTag = document.getElementById("s-weather").value;

    if (!name) return;

    const newReq = {
      id: Date.now(),
      name,
      category,
      location,
      weatherTag
    };

    pendingRequests.push(newReq);
    localStorage.setItem("nintendo_pending_requests", JSON.stringify(pendingRequests));
    
    suggestRestaurantForm.reset();
    suggestModalOverlay.classList.remove("active");
    showToast("맛집 추천 요청이 성공적으로 전송되었습니다!");

    if (isAdminMode) {
      renderPendingTable();
    }
  });

  // Secret Admin Trigger click
  secretAdminTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    const pw = prompt("관리자 인증 비밀번호를 입력해 주세요:");
    if (pw === "admin" || pw === "1234") {
      enableAdminMode();
      showToast("관리자 로그인 성공! 관리자 콘솔이 상단 바에 생성되었습니다.");
    } else {
      alert("인증에 실패했습니다.");
    }
  });

  // Hash change detection
  window.addEventListener("hashchange", checkUrlHash);

  // Category Selector chips
  categoryGrid.addEventListener("click", (e) => {
    if (e.target.classList.contains("console-option-chip")) {
      categoryGrid.querySelectorAll(".console-option-chip").forEach(btn => btn.classList.remove("selected"));
      e.target.classList.add("selected");
      currentFilter.category = e.target.getAttribute("data-value");
    }
  });

  // Location Selector chips
  locationGrid.addEventListener("click", (e) => {
    if (e.target.classList.contains("console-option-chip")) {
      locationGrid.querySelectorAll(".console-option-chip").forEach(btn => btn.classList.remove("selected"));
      e.target.classList.add("selected");
      currentFilter.location = e.target.getAttribute("data-value");
    }
  });

  // Weather toggle option
  weatherFilterToggle.addEventListener("change", (e) => {
    currentFilter.weatherEnabled = e.target.checked;
  });

  // Weather simulator button toggler
  quickSimToggle.addEventListener("click", () => {
    if (weatherSimPanel.style.display === "none") {
      weatherSimPanel.style.display = "block";
      simulatedWeather.active = true;
      quickSimToggle.classList.add("active");
    } else {
      weatherSimPanel.style.display = "none";
      simulatedWeather.active = false;
      quickSimToggle.classList.remove("active");
      initWeather();
    }
    updateWeatherDisplay();
  });

  // Simulator options
  simBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      simBtns.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      simulatedWeather.type = btn.getAttribute("data-weather");
      updateWeatherDisplay();
    });
  });

  simTempInput.addEventListener("input", (e) => {
    let val = parseInt(e.target.value);
    if (isNaN(val)) val = 20;
    simulatedWeather.temp = val;
    updateWeatherDisplay();
  });

  // Recommend Decision Trigger
  triggerRecommendBtn.addEventListener("click", getRecommendation);
  reRecommendBtn.addEventListener("click", getRecommendation);
  
  resetRecommendBtn.addEventListener("click", () => {
    resultSection.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Direct Admin Add Form
  adminAddForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("admin-new-name").value.trim();
    const category = document.getElementById("admin-new-category").value;
    const location = document.getElementById("admin-new-location").value;
    const weatherTag = document.getElementById("admin-new-weather").value;

    if (!name) return;

    const newId = restaurants.length > 0 ? Math.max(...restaurants.map(r => r.id)) + 1 : 1;
    const newRest = {
      id: newId,
      name,
      category,
      location,
      weatherTag
    };

    restaurants.push(newRest);
    localStorage.setItem("nintendo_restaurants_db", JSON.stringify(restaurants));
    
    adminAddForm.reset();
    updateDbCounts();
    renderAdminTable();
    showToast(`${name} 매장이 데이터베이스에 즉각 추가되었습니다.`);
  });

  // Admin database reset
  resetDefaultDbBtn.addEventListener("click", () => {
    if (confirm("정말로 전체 맛집 목록을 기본 안암 상권 데이터셋으로 리셋하시겠습니까? 새로 추가된 데이터는 소실됩니다.")) {
      restaurants = [...DEFAULT_RESTAURANTS];
      localStorage.setItem("nintendo_restaurants_db", JSON.stringify(restaurants));
      updateDbCounts();
      renderAdminTable();
      showToast("데이터베이스가 초기화되었습니다.");
    }
  });
}

// Enable Admin Module
function enableAdminMode() {
  isAdminMode = true;
  adminNavLink.style.display = "block";
}

// URL hash check
function checkUrlHash() {
  if (window.location.hash === "#admin") {
    enableAdminMode();
    // Trigger switch to admin view
    const tab = document.querySelector('.nav-tab[data-target="admin"]');
    if (tab) tab.click();
  }
}

// Show Toast
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// Weather Module
function initWeather() {
  if (simulatedWeather.active) {
    updateWeatherDisplay();
    return;
  }

  if (realWeather.loaded) {
    let label = "맑음 ☀️";
    if (realWeather.type === "cloudy") label = "흐림 ☁️";
    else if (realWeather.type === "rainy") label = "비 🌧️";
    else if (realWeather.type === "snowy") label = "눈 ❄️";
    weatherStatusText.textContent = `현재 날씨: 서울 성북구 안암동 [ ${label} | 기온: ${realWeather.temp}°C ]`;
  } else {
    weatherStatusText.textContent = "현재 날씨: 서울 성북구 안암동 정보 수집 중...";
    fetchRealWeather();
  }
}

function fetchRealWeather() {
  const lat = 37.5864; // Anam-dong latitude
  const lon = 127.0292; // Anam-dong longitude
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=Asia/Seoul`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data && data.current) {
        const temp = Math.round(data.current.temperature_2m);
        const code = data.current.weather_code;
        
        let type = "sunny";
        let label = "맑음 ☀️";
        
        if (code === 0 || code === 1) {
          type = "sunny";
          label = "맑음 ☀️";
        } else if (code === 2 || code === 3) {
          type = "cloudy";
          label = "흐림 ☁️";
        } else if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) {
          type = "rainy";
          label = "비 🌧️";
        } else if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) {
          type = "snowy";
          label = "눈 ❄️";
        } else {
          type = "cloudy";
          label = "흐림 ☁️";
        }
        
        realWeather = {
          loaded: true,
          type: type,
          temp: temp
        };
        
        if (!simulatedWeather.active) {
          weatherStatusText.textContent = `현재 날씨: 서울 성북구 안암동 [ ${label} | 기온: ${temp}°C ]`;
        }
      }
    })
    .catch(err => {
      console.error("Failed to fetch weather:", err);
      // Fallback
      realWeather = {
        loaded: true,
        type: "sunny",
        temp: 24
      };
      if (!simulatedWeather.active) {
        weatherStatusText.textContent = "현재 날씨: 서울 성북구 안암동 [ 맑음 ☀️ | 기온: 24°C ]";
      }
    });
}

function updateWeatherDisplay() {
  if (simulatedWeather.active) {
    const temp = simulatedWeather.temp;
    const type = simulatedWeather.type;
    let label = "맑음 ☀️";
    
    if (type === "cloudy") label = "흐림 ☁️";
    else if (type === "rainy") label = "비 🌧️";
    else if (type === "snowy") label = "눈 ❄️";

    weatherStatusText.textContent = `기상 시뮬레이터 동작 중: [ ${label} | 기온: ${temp}°C ]`;
  }
}

// Weather classification
function getActiveWeatherClassification() {
  let temp, type;
  if (simulatedWeather.active) {
    temp = simulatedWeather.temp;
    type = simulatedWeather.type;
  } else {
    temp = realWeather.temp;
    type = realWeather.type;
  }

  if (type === "rainy" || type === "snowy") return "비오는 날";
  if (temp >= 28) return "더운 날";
  if (temp <= 10) return "추운 날";
  return "상관없음";
}

// Recommendations core logic
function getRecommendation() {
  const classification = getActiveWeatherClassification();
  
  let pool = [...restaurants];

  // Category filtering
  if (currentFilter.category !== "all") {
    pool = pool.filter(r => r.category === currentFilter.category);
  }

  // Location filtering
  if (currentFilter.location !== "all") {
    if (currentFilter.location === "기타") {
      pool = pool.filter(r => r.location !== "정후" && r.location !== "참살이길");
    } else {
      pool = pool.filter(r => r.location === currentFilter.location);
    }
  }

  // Weather filtering
  if (currentFilter.weatherEnabled && classification !== "상관없음") {
    // Only filter when weather is active AND there's a meaningful condition (rain/hot/cold)
    pool = pool.filter(r => r.weatherTag === classification || r.weatherTag === "상관없음");
  }
  // If unchecked OR weather is neutral → show all restaurants regardless of weatherTag

  // Render Result
  if (pool.length === 0) {
    resultRestaurantName.textContent = "조건 부합 매장 없음";
    resultBadgeCategory.textContent = "ERR";
    resultBadgeLocation.textContent = "ERR";
    resultBadgeWeather.style.display = "none";
    resultExplanationText.textContent = "(시스템 출력: 매칭 풀 0개)";
    
    resultSection.style.display = "block";
    
    // Smooth scroll
    const y = resultSection.getBoundingClientRect().top + window.pageYOffset - 20;
    window.scrollTo({ top: y, behavior: "smooth" });
    return;
  }

  // Random pull
  const selected = pool[Math.floor(Math.random() * pool.length)];

  resultRestaurantName.textContent = selected.name;
  resultBadgeCategory.textContent = selected.category;
  resultBadgeLocation.textContent = selected.location;

  if (selected.weatherTag && selected.weatherTag !== "상관없음") {
    resultBadgeWeather.textContent = `🎯 ${selected.weatherTag} 특선`;
    resultBadgeWeather.style.display = "inline-block";
  } else {
    resultBadgeWeather.style.display = "none";
  }

  // Match system printout
  let explanation = `(시스템 환경 정보: ${classification} 상황 가중 적용)`;
  if (selected.weatherTag === "상관없음") {
    explanation += ` | 사계절 언제나 호불호 없이 든든하게 한 끼 해결하기 최적인 매장입니다.`;
  } else {
    explanation += ` | 오늘 기상 상황인 '${selected.weatherTag}'에 최고의 만족감을 주는 시즈널 특화 매장입니다.`;
  }
  resultExplanationText.textContent = explanation;

  // Reveal result screen
  resultSection.style.display = "block";

  // Smooth scroll
  const y = resultSection.getBoundingClientRect().top + window.pageYOffset - 20;
  window.scrollTo({ top: y, behavior: "smooth" });
}

// Render Admin Master Table
function renderAdminTable() {
  if (!restaurantTableBody) return;
  restaurantTableBody.innerHTML = "";

  // Sort by category
  const sorted = [...restaurants].sort((a,b) => a.category.localeCompare(b.category));
  
  sorted.forEach(r => {
    const tr = document.createElement("tr");
    if (r.id === editingId) {
      tr.innerHTML = `
        <td>
          <input type="text" class="edit-name retro-input" style="height: 26px; padding: 2px 6px; font-size: 11px; font-weight: 800;" value="${escapeHtml(r.name)}" placeholder="식당 이름">
        </td>
        <td>
          <select class="edit-category retro-input" style="height: 26px; padding: 2px 6px; font-size: 11px; background: white;">
            <option value="한식" ${r.category === '한식' ? 'selected' : ''}>한식</option>
            <option value="중식" ${r.category === '중식' ? 'selected' : ''}>중식</option>
            <option value="일식" ${r.category === '일식' ? 'selected' : ''}>일식</option>
            <option value="양식" ${r.category === '양식' ? 'selected' : ''}>양식</option>
            <option value="분식" ${r.category === '분식' ? 'selected' : ''}>분식</option>
            <option value="기타" ${r.category === '기타' ? 'selected' : ''}>기타</option>
          </select>
        </td>
        <td>
          <select class="edit-location retro-input" style="height: 26px; padding: 2px 6px; font-size: 11px; background: white;">
            <option value="정후" ${r.location === '정후' ? 'selected' : ''}>정후</option>
            <option value="참살이길" ${r.location === '참살이길' ? 'selected' : ''}>참살이길</option>
            <option value="기타" ${r.location === '기타' ? 'selected' : ''}>기타</option>
          </select>
        </td>
        <td>
          <select class="edit-weather retro-input" style="height: 26px; padding: 2px 6px; font-size: 11px; background: white;">
            <option value="상관없음" ${r.weatherTag === '상관없음' ? 'selected' : ''}>상관없음</option>
            <option value="더운 날" ${r.weatherTag === '더운 날' ? 'selected' : ''}>더운 날</option>
            <option value="추운 날" ${r.weatherTag === '추운 날' ? 'selected' : ''}>추운 날</option>
            <option value="비오는 날" ${r.weatherTag === '비오는 날' ? 'selected' : ''}>비오는 날</option>
          </select>
        </td>
        <td class="action-cell" style="display: flex; gap: 4px; justify-content: center; align-items: center; border: none; padding: 8px 4px;">
          <button class="btn-amber save-btn" data-id="${r.id}" style="padding: 2px 6px; font-size: 10px;">저장</button>
          <button class="btn-carbon cancel-btn" data-id="${r.id}" style="padding: 2px 6px; font-size: 10px;">취소</button>
        </td>
      `;
    } else {
      tr.innerHTML = `
        <td style="font-weight: 800;">${escapeHtml(r.name)}</td>
        <td>${escapeHtml(r.category)}</td>
        <td>${escapeHtml(r.location)}</td>
        <td>${escapeHtml(r.weatherTag)}</td>
        <td class="action-cell" style="display: flex; gap: 8px; justify-content: center; align-items: center; border: none; padding: 8px;">
          <a href="#" class="edit-link" data-id="${r.id}" style="color: var(--colors-chrome-indigo); font-weight: 800; text-decoration: none; font-size: 11px;">수정</a>
          <a href="#" class="delete-link" data-id="${r.id}" style="color: var(--colors-primary); font-weight: 800; text-decoration: none; font-size: 11px;">제거</a>
        </td>
      `;
    }
    restaurantTableBody.appendChild(tr);
  });

  // Attach delete links listeners
  restaurantTableBody.querySelectorAll(".delete-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = parseInt(link.getAttribute("data-id"));
      deleteRestaurant(id);
    });
  });

  // Attach edit links listeners
  restaurantTableBody.querySelectorAll(".edit-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      editingId = parseInt(link.getAttribute("data-id"));
      renderAdminTable();
    });
  });

  // Attach save button listeners
  restaurantTableBody.querySelectorAll(".save-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-id"));
      const tr = btn.closest("tr");
      saveEditedRestaurant(id, tr);
    });
  });

  // Attach cancel button listeners
  restaurantTableBody.querySelectorAll(".cancel-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      editingId = null;
      renderAdminTable();
    });
  });
}

function saveEditedRestaurant(id, tr) {
  const name = tr.querySelector(".edit-name").value.trim();
  const category = tr.querySelector(".edit-category").value;
  const location = tr.querySelector(".edit-location").value;
  const weatherTag = tr.querySelector(".edit-weather").value;

  if (!name) {
    alert("식당 이름을 입력해주세요.");
    return;
  }

  const idx = restaurants.findIndex(r => r.id === id);
  if (idx !== -1) {
    restaurants[idx].name = name;
    restaurants[idx].category = category;
    restaurants[idx].location = location;
    restaurants[idx].weatherTag = weatherTag;

    localStorage.setItem("nintendo_restaurants_db", JSON.stringify(restaurants));
    editingId = null;
    renderAdminTable();
    showToast(`식당 '${name}'의 정보가 수정되었습니다.`);
  }
}

function deleteRestaurant(id) {
  const rest = restaurants.find(r => r.id === id);
  const name = rest ? rest.name : "식당";
  
  if (confirm(`진짜로 '${name}' 매장을 메인 데이터베이스에서 영구히 삭제하시겠습니까?`)) {
    restaurants = restaurants.filter(r => r.id !== id);
    localStorage.setItem("nintendo_restaurants_db", JSON.stringify(restaurants));
    updateDbCounts();
    renderAdminTable();
    showToast(`식당 '${name}'이(가) DB에서 제거되었습니다.`);
  }
}

// Render Pending User Suggest requests
function renderPendingTable() {
  if (!pendingTableBody) return;
  pendingTableBody.innerHTML = "";

  if (pendingRequests.length === 0) {
    pendingTableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; color: var(--colors-muted-indigo); padding: var(--spacing-lg);">
          대기 중인 맛집 등록 요청이 존재하지 않습니다.
        </td>
      </tr>
    `;
    return;
  }

  pendingRequests.forEach(req => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="font-weight: 800;">${escapeHtml(req.name)}</td>
      <td>${escapeHtml(req.category)}</td>
      <td>${escapeHtml(req.location)}</td>
      <td>${escapeHtml(req.weatherTag)}</td>
      <td class="action-cell" style="display: flex; justify-content: center; gap: 6px; border: none;">
        <button class="btn-amber approve-btn" data-id="${req.id}" style="padding: 2px 6px; font-size: 10px;">승인</button>
        <button class="btn-carbon reject-btn" data-id="${req.id}" style="padding: 2px 6px; font-size: 10px; background-color: #ff3b30; border-color: #ff9500;">반려</button>
      </td>
    `;
    pendingTableBody.appendChild(tr);
  });

  // Attach Approve / Reject listeners
  pendingTableBody.querySelectorAll(".approve-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseFloat(btn.getAttribute("data-id"));
      approvePendingRequest(id);
    });
  });

  pendingTableBody.querySelectorAll(".reject-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseFloat(btn.getAttribute("data-id"));
      rejectPendingRequest(id);
    });
  });
}

function approvePendingRequest(id) {
  const req = pendingRequests.find(r => r.id === id);
  if (!req) return;

  // Add to active database
  const newId = restaurants.length > 0 ? Math.max(...restaurants.map(r => r.id)) + 1 : 1;
  const newRest = {
    id: newId,
    name: req.name,
    category: req.category,
    location: req.location,
    weatherTag: req.weatherTag
  };

  restaurants.push(newRest);
  localStorage.setItem("nintendo_restaurants_db", JSON.stringify(restaurants));

  // Remove from pending
  pendingRequests = pendingRequests.filter(r => r.id !== id);
  localStorage.setItem("nintendo_pending_requests", JSON.stringify(pendingRequests));

  updateDbCounts();
  renderAdminTable();
  renderPendingTable();
  showToast(`요청한 '${req.name}' 매장이 메인 DB에 추가 승인되었습니다.`);
}

function rejectPendingRequest(id) {
  const req = pendingRequests.find(r => r.id === id);
  if (!req) return;

  if (confirm(`'${req.name}' 매장 등록 제안을 반려하고 목록에서 삭제합니까?`)) {
    pendingRequests = pendingRequests.filter(r => r.id !== id);
    localStorage.setItem("nintendo_pending_requests", JSON.stringify(pendingRequests));

    renderPendingTable();
    showToast("요청이 반려 처리되었습니다.");
  }
}

// Utility: HTML escaping
function escapeHtml(string) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return String(string).replace(/[&<>"']/g, function(m) { return map[m]; });
}

// Simple string hash function to generate a stable index
function getStringHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

// Generate rich description
function generateRichDescription(name, category, location) {
  const hash = getStringHash(name);

  const templates = {
    "한식": [
      "뜨끈뜨끈 푹 고아낸 깊고 진한 국물 맛이 일품이며, 한 입 먹는 순간 속이 사르르 풀리는 든든한 가마솥 밥집입니다.",
      "지글지글 구워지는 육즙 가득 고소한 구이와 직접 담근 정갈한 겉절이가 어우러진 안암의 숨은 로컬 고기 맛집.",
      "매콤달콤 비법 소스 양념에 신선하고 푸짐한 제철 식재료로 정성 가득 차려내 매일 먹어도 물리지 않는 집밥의 대명사.",
      "오랜 세월 동안 고려대 학생들의 입맛을 지켜온 어머니의 따뜻한 정성과 깊은 손맛이 깃든 전통 한식 명소."
    ],
    "중식": [
      "강력한 불맛을 입혀 볶아낸 알싸한 마라 향과 감칠맛 폭발 소스가 쫄깃한 면발에 스며든 중독성 강한 중식 전문점.",
      "겉은 바삭하고 속은 촉촉 쫀득한 시그니처 꿔바로우와 깔끔하면서 칼칼한 짬뽕 국물의 환상적인 어우러짐.",
      "고슬고슬 불향 가득 볶아낸 시그니처 볶음밥과 육즙이 뚝뚝 흐르는 정통 수제 중화 요리를 맛볼 수 있는 곳."
    ],
    "일식": [
      "장시간 깊게 우려낸 정통 돈코츠 육수에 차슈와 아삭한 숙주나물을 올려 깊은 내공을 뽐내는 일품 일식 라멘집.",
      "주문 즉시 갓 튀겨내어 바삭함이 가득 살아있는 튀김 덮밥과 단짠단짠 소스가 사르르 밥알에 밴 최고의 한 그릇.",
      "입안에서 쫀득하고 부드럽게 사르르 녹아내리는 극상의 신선도를 자랑하는 연어와 숙성 스시 전문 식당."
    ],
    "양식": [
      "풍성한 치즈 풍미와 올리브유, 신선하고 건강한 허브 향이 기분 좋게 감도는 정통 이탈리안 파스타/화덕 피자 맛집.",
      "두툼하고 부드럽게 씹히는 패티 속 가득 갇힌 육즙과 아삭한 채소가 완벽한 마리아주를 이루는 정통 수제 양식 플레이스.",
      "모던하고 분위기 있는 아늑한 공간 속에서 여유롭게 즐기는 다채롭고 예술적인 비주얼의 서양식 정찬 전문점."
    ],
    "분식": [
      "매콤달콤 입맛 당기는 마성의 떡볶이 소스와 바삭한 김말이, 갓 쪄낸 순대가 조화를 이루는 추억의 단골 분식 아지트.",
      "주문 즉시 정성스레 속을 꽉 채워 말아낸 수제 대왕 김밥과 뜨끈하고 시원한 어묵 국물 한 사발이 생각나는 분식 명소."
    ],
    "기타": [
      "이국적이고 다채로운 스파이스 향과 독창적인 레시피로 방문할 때마다 새로운 미식의 즐거움을 주는 트렌디 핫플레이스.",
      "가성비와 퀄리티를 모두 잡은 특색 있는 퓨전 시그니처 메뉴들과 사장님의 유니크한 감성이 돋보이는 개성파 식당.",
      "안암 주민들과 대학생들 사이에서 나만 알고 싶은 아지트로 소문난, 편안하고 감성 충만한 로컬 히든 맛집."
    ]
  };

  let pool = templates[category] || templates["기타"];
  
  if (name.includes("국밥") || name.includes("찌개") || name.includes("탕") || name.includes("국수")) {
    if (category === "한식") {
      pool = [
        "가마솥에서 종일 푹 고아내어 한 입 먹으면 온몸에 온기가 도는 진하고 든든한 전통 국물 요리 전문점입니다.",
        "칼칼하고 얼큰한 국물 속에 아낌없이 넣은 푸짐한 건더기와 어머니 손맛 반찬이 환상 조화를 이루는 국밥 전문점."
      ];
    }
  } else if (name.includes("고기") || name.includes("곱창") || name.includes("구이") || name.includes("갈비")) {
    if (category === "한식") {
      pool = [
        "신선한 고기에서 뿜어져 나오는 고소한 육즙과 불향 가득한 그릴링으로 퇴근길 술 한잔 걸치기 딱 좋은 안암 고기 맛집.",
        "지글지글 구워지는 구이 요리 특유의 매력과 넉넉한 인심이 느껴지는 푸짐한 한 상 차림이 일품인 곳."
      ];
    }
  } else if (name.includes("라멘") || name.includes("우동") || name.includes("소바")) {
    if (category === "일식") {
      pool = [
        "자가제면한 쫄깃한 면발과 깊고 묵직한 일본 정통 육수 베이스가 조화로운 골목 안 아늑한 면 요리 전문점.",
        "따끈한 국물 속 숨겨진 셰프의 깊은 내공과 아삭한 토핑들이 훌륭한 밸런스를 보여주는 라멘 전문 명가."
      ];
    }
  } else if (name.includes("돈카츠") || name.includes("돈가스") || name.includes("까스")) {
    pool = [
      "엄선된 돼지고기를 두툼하게 썰어내어 겉은 바삭하고 속은 촉촉함이 극대화된 최고급 수제 카츠 전문점.",
      "풍성한 특제 데미글라스 소스가 듬뿍 뿌려져 나와 경양식 추억을 물씬 느끼게 해주는 인생 돈까스 맛집."
    ];
  } else if (name.includes("피자") || name.includes("파스타")) {
    pool = [
      "신선한 치즈와 특제 토마토 소스의 어우러짐이 훌륭하며, 셰프의 정갈한 파스타 요리를 함께 즐길 수 있는 이탈리안 키친.",
      "정성껏 반죽하고 화덕에서 구워내 도우가 유난히 쫄깃한 나폴리 감성의 정통 피자 플레이스."
    ];
  } else if (name.includes("버거") || name.includes("샌드위치")) {
    pool = [
      "매일 아침 구워내는 수제 번에 두툼하고 육즙 가득한 100% 소고기 패티가 들어간 최고급 수제 버거 전문점."
    ];
  }

  const idx = hash % pool.length;
  return pool[idx];
}
