// ========================================
// UI.JS - User Interface & HUD Management
// Mission 6: TELESCOPE — STTM
// ========================================

// ========================================
// I18N — UI strings (intro, HUD labels, mode hints, etc.)
// Constellation names/descriptions/funFacts live in data.js
// ========================================

const I18N = {
    ru: {
        start: "НАЧАТЬ",
        back_btn: "◀ Назад",
        tagline: "Через телескоп ты увидишь то, что 600 лет назад Улугбек видел через секстант. Только намного больше.",
        map_title: "КАРТА",
        score_label: "Очки",
        level_label: "Уровень",
        scanning: "Наблюдайте за небом...",
        found: "НАЙДЕНО! (Нажмите на звезду)",
        searching: "Ищите звезды...",
        instr_classic: "СОЕДИНЯЙТЕ ПО ПОРЯДКУ (1 → 2 → 3...)",
        instr_shape: "НАЙДИТЕ ЗВЕЗДУ ПО ФОРМЕ",
        instr_trace: "ПРОВЕДИТЕ ТОЧНУЮ ЛИНИЮ МЕЖДУ ЗВЕЗДАМИ",
        instr_brightness: "НАЖИМАЙТЕ ОТ ТУСКЛЫХ К ЯРКИМ",
        instr_odd_one: "НАЙДИТЕ ЛИШНЮЮ ЗВЕЗДУ!",
        win_fact: "ИНТЕРЕСНЫЙ ФАКТ:",
        win_continue: "ДАЛЕЕ »",
        win_finish: "ЗАВЕРШИТЬ",
        finish_title: "МИССИЯ ЗАВЕРШЕНА",
        finish_subtitle: "Ты прошёл все 10 созвездий",
        // Error/alert messages
        err_title: "ОШИБКА",
        warn_title: "ВНИМАНИЕ",
        err_wrong_shape: "Неверная форма!\n\nНужна звезда с {n} концами.",
        err_shape_too_far: "Звезда не найдена!\n\nПеретащите ближе к пунктирной форме.",
        err_trace_left_line: "Вы вышли за линию!\n\nПопробуй снова",
        err_wrong_brightness: "Неверный порядок!\n\nНажимайте от тусклых к ярким.\n\nПопробуй снова",
        err_not_odd_one: "Это обычная звезда!\n\nНайдите уникальную.\n\nПопробуй снова",
        err_wrong_star: "Неверная звезда!\n\nПопробуй снова",
        // Exit modal
        exit_title: "ВЫЙТИ ИЗ ИГРЫ?",
        exit_msg: "Текущий прогресс может не сохраниться.",
        yes: "ДА",
        no: "НЕТ"
    },
    uz: {
        start: "BOSHLASH",
        back_btn: "◀ Orqaga",
        tagline: "Teleskop orqali sen 600 yil oldin Ulug'bek sekstant orqali ko'rganini ko'rasan. Faqat ancha kattaroq.",
        map_title: "XARITA",
        score_label: "Ochkolar",
        level_label: "Daraja",
        scanning: "Osmonni kuzating...",
        found: "TOPILDI! (Yulduzni bosing)",
        searching: "Yulduzlarni qidiring...",
        instr_classic: "TARTIB BO'YICHA BIRIKTIRING (1 → 2 → 3...)",
        instr_shape: "SHAKL BO'YICHA YULDUZ TOPING",
        instr_trace: "YULDUZLAR ORASIDA ANIQ CHIZIQ O'TKAZING",
        instr_brightness: "XIRADAN YORQINGACHA BOSING",
        instr_odd_one: "ORTIQCHA YULDUZNI TOPING!",
        win_fact: "QIZIQARLI FAKT:",
        win_continue: "DAVOM »",
        win_finish: "YAKUNLASH",
        finish_title: "MISSIYA YAKUNLANDI",
        finish_subtitle: "Sen barcha 10 ta yulduz turkumini o'tding",
        // Error/alert messages
        err_title: "XATO",
        warn_title: "DIQQAT",
        err_wrong_shape: "Noto'g'ri shakl!\n\n{n} uchli yulduz kerak.",
        err_shape_too_far: "Yulduz topilmadi!\n\nPunktirli shaklga yaqinroq tashlang.",
        err_trace_left_line: "Chiziqdan chiqib ketdingiz!\n\nQayta urinib ko'ring",
        err_wrong_brightness: "Noto'g'ri tartib!\n\nXiradan yorqingacha bosing.\n\nQayta urinib ko'ring",
        err_not_odd_one: "Bu oddiy yulduz!\n\nNoyobini toping.\n\nQayta urinib ko'ring",
        err_wrong_star: "Noto'g'ri yulduz!\n\nQayta urinib ko'ring",
        // Exit modal
        exit_title: "O'YINDAN CHIQASIZMI?",
        exit_msg: "Joriy taraqqiyot saqlanmasligi mumkin.",
        yes: "HA",
        no: "YO'Q"
    },
    en: {
        start: "START",
        back_btn: "◀ Back",
        tagline: "Through a telescope, you'll see what Ulugbek saw through his sextant 600 years ago — only much more.",
        map_title: "MAP",
        score_label: "Score",
        level_label: "Level",
        scanning: "Watch the sky...",
        found: "FOUND! (Tap the star)",
        searching: "Looking for stars...",
        instr_classic: "CONNECT IN ORDER (1 → 2 → 3...)",
        instr_shape: "FIND THE STAR BY SHAPE",
        instr_trace: "DRAW A PRECISE LINE BETWEEN STARS",
        instr_brightness: "TAP FROM DIMMEST TO BRIGHTEST",
        instr_odd_one: "FIND THE ODD STAR OUT!",
        win_fact: "FUN FACT:",
        win_continue: "NEXT »",
        win_finish: "FINISH",
        finish_title: "MISSION COMPLETE",
        finish_subtitle: "You completed all 10 constellations",
        // Error/alert messages
        err_title: "ERROR",
        warn_title: "HEADS UP",
        err_wrong_shape: "Wrong shape!\n\nYou need a star with {n} points.",
        err_shape_too_far: "Star not found!\n\nDrop closer to the dotted shape.",
        err_trace_left_line: "You left the line!\n\nTry again",
        err_wrong_brightness: "Wrong order!\n\nTap from dimmest to brightest.\n\nTry again",
        err_not_odd_one: "That's a regular star!\n\nFind the unique one.\n\nTry again",
        err_wrong_star: "Wrong star!\n\nTry again",
        // Exit modal
        exit_title: "QUIT GAME?",
        exit_msg: "Your current progress may not be saved.",
        yes: "YES",
        no: "NO"
    }
};

function t(key) {
    const dict = I18N[state.lang] || I18N.ru;
    return dict[key] || I18N.ru[key] || key;
}

function applyLanguage() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        const key = el.getAttribute('data-i18n');
        if (key) el.innerText = t(key);
    });

    // Update active lang-switcher button
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
        if (btn.getAttribute('data-lang') === state.lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update current victory modal if it's open (so live language switch
    // refreshes the constellation text without needing to reopen the modal)
    const winOverlay = document.getElementById('level-win-overlay');
    if (winOverlay && winOverlay.classList.contains('active')) {
        refreshVictoryModalText();
    }

    // Update HUD radar text if game is active
    const radarEl = document.getElementById('radar-msg');
    if (radarEl && isGameActive) {
        if (isScanning) {
            radarEl.innerText = t('scanning');
        } else if (window.currentLevelMode) {
            // Re-translate the current mode's instruction
            const modeKey = 'instr_' + window.currentLevelMode;
            radarEl.innerText = t(modeKey);
        }
    }
}

// Called from lang-switcher buttons. Lets the user override INIT lang
// at any time during gameplay.
function setLang(lang) {
    if (lang !== 'ru' && lang !== 'uz' && lang !== 'en') return;
    state.lang = lang;
    applyLanguage();
}

// Refresh constellation name/desc/funFact in the open victory modal
// after a live language switch.
function refreshVictoryModalText() {
    const currentIndex = state.currentLevelIndex;
    if (currentIndex < 0 || currentIndex >= LEVELS.length) return;
    const levelData = LEVELS[currentIndex];
    if (!levelData) return;
    const lang = state.lang;

    const nameEl = document.getElementById('win-constellation-name');
    const descEl = document.getElementById('win-constellation-desc');
    const factEl = document.getElementById('win-fact-text');
    const factTitleEl = document.getElementById('win-fact-title');
    const continueBtn = document.getElementById('win-btn-continue');

    if (nameEl) nameEl.innerText = levelData.name[lang] || levelData.name.ru;
    if (descEl) descEl.innerText = levelData.desc[lang] || levelData.desc.ru;
    if (factEl) factEl.innerText = levelData.funFact[lang] || levelData.funFact.ru;
    if (factTitleEl) factTitleEl.innerText = t('win_fact');

    const isFinalLevel = (currentIndex === LEVELS.length - 1);
    if (continueBtn) {
        continueBtn.innerText = isFinalLevel ? t('win_finish') : t('win_continue');
    }
}

// ========================================
// GLOBAL UI UPDATES
// ========================================

function updateGlobalUI() {
    // profile-name-btn removed in STTM build — username is shown by the parent platform

    const scoreEls = document.querySelectorAll('#game-score-num, #map-score');
    scoreEls.forEach(function (el) { el.innerText = state.totalScore; });
}

// ========================================
// SCREEN NAVIGATION
// ========================================

// Called from the intro "START" button. No login screen anymore —
// username is supplied by the platform via postMessage INIT.
function toLogin() {
    console.info('[STTM Telescope] toLogin() called — switching to map screen.');

    const intro = document.getElementById('screen-intro');
    const map = document.getElementById('screen-map');

    if (!intro) {
        console.error('[STTM Telescope] #screen-intro not found in DOM!');
        return;
    }
    if (!map) {
        console.error('[STTM Telescope] #screen-map not found in DOM!');
        return;
    }

    intro.style.display = 'none';
    intro.classList.remove('active-screen');

    try {
        renderMap();
    } catch (e) {
        console.error('[STTM Telescope] renderMap() failed:', e);
    }

    map.style.display = 'flex';
    map.classList.add('active-screen');

    console.info('[STTM Telescope] Map screen visible.');
}

// ========================================
// MAP RENDERING
// ========================================

function renderMap() {
    const grid = document.getElementById('level-grid');
    grid.innerHTML = "";
    updateGlobalUI();

    LEVELS.forEach(function (data, i) {
        const el = document.createElement('div');
        const levelNum = i + 1;
        const isUnlocked = (i <= state.levelsCompleted);

        if (isUnlocked) {
            el.className = "level-node unlocked";
            if (i === state.levelsCompleted) el.classList.add('current');

            let modeBadge = '';
            switch (data.mode) {
                case 'shape':      modeBadge = '⭐'; break;
                case 'trace':      modeBadge = '✏️'; break;
                case 'brightness': modeBadge = '💡'; break;
                case 'odd_one':    modeBadge = '🔍'; break;
                default:           modeBadge = '';
            }

            el.innerHTML =
                '<span style="font-size:1.2rem; color:gold;">' + levelNum + '</span>' +
                (modeBadge ? '<div style="font-size:0.8rem; margin-top:2px;">' + modeBadge + '</div>' : '');
            el.onclick = function () { startGame(i); };
        } else {
            el.className = "level-node";
            el.innerHTML = '<span style="font-size:1.2rem">🔒</span>';
        }
        grid.appendChild(el);
    });
}

// ========================================
// GAME START
// ========================================

function startGame(idx) {
    state.currentLevelIndex = idx;
    document.getElementById('screen-map').style.display = 'none';
    document.getElementById('telescope-hud').style.display = 'block';
    document.getElementById('game-lvl-num').innerText = idx + 1;

    const radarEl = document.getElementById('radar-msg');
    if (radarEl) {
        radarEl.innerText = t('scanning');
        radarEl.style.color = "gold";
    }

    updateGlobalUI();
    setupLevel(idx);
    isGameActive = true;
    isScanning = true;
    document.getElementById('back-btn').style.display = 'block';

    const existingBar = document.getElementById('shapes-bar');
    if (existingBar) existingBar.remove();

    if (typeof bgMusic !== 'undefined' && !isMuted) {
        bgMusic.play().catch(function (e) { console.log("Music error:", e); });
    }
}

// ========================================
// SHAPE MODE: DRAGGABLE ICONS BAR
// ========================================

function createShapesBar() {
    const existing = document.getElementById('shapes-bar');
    if (existing) existing.remove();

    const bar = document.createElement('div');
    bar.id = 'shapes-bar';
    bar.className = 'shapes-bar';
    // All styles live in index.html CSS now (so media queries can override
    // size and position for short landscape phones).

    const pointCounts = [4, 5, 6, 7, 8];

    pointCounts.forEach(function (points) {
        const icon = createShinyShapeIcon(points);
        icon.dataset.points = points;
        icon.draggable = true;
        icon.className = 'shape-icon';

        icon.ondragstart = function (e) {
            modeState.selectedShape = points;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', points.toString());
            icon.style.opacity = '0.5';
            icon.style.cursor = 'grabbing';
        };

        icon.ondragend = function () {
            icon.style.opacity = '1';
            icon.style.cursor = 'grab';
        };

        let touchStartX, touchStartY;

        icon.addEventListener('touchstart', function (e) {
            modeState.selectedShape = points;
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            icon.style.opacity = '0.5';

            const clone = icon.cloneNode(true);
            clone.id = 'drag-clone';
            // Match the live icon size so the drag preview isn't bigger than the bar
            const rect = icon.getBoundingClientRect();
            clone.style.position = 'fixed';
            clone.style.pointerEvents = 'none';
            clone.style.zIndex = '1000';
            clone.style.width = rect.width + 'px';
            clone.style.height = rect.height + 'px';
            const bodyLeft = document.body.getBoundingClientRect().left;
            clone.style.left = (touchStartX - bodyLeft - rect.width / 2) + 'px';
            clone.style.top = (touchStartY - rect.height / 2) + 'px';
            document.body.appendChild(clone);
        }, { passive: true });

        icon.addEventListener('touchmove', function (e) {
            const clone = document.getElementById('drag-clone');
            if (clone) {
                const touch = e.touches[0];
                const rect = clone.getBoundingClientRect();
                const bodyLeft = document.body.getBoundingClientRect().left;
                clone.style.left = (touch.clientX - bodyLeft - rect.width / 2) + 'px';
                clone.style.top = (touch.clientY - rect.height / 2) + 'px';
            }
        }, { passive: true });

        icon.addEventListener('touchend', function (e) {
            icon.style.opacity = '1';
            const clone = document.getElementById('drag-clone');
            if (clone) clone.remove();
            const touch = e.changedTouches[0];
            const x = touch.clientX - document.body.getBoundingClientRect().left;
            const y = touch.clientY;
            if (modeState.selectedShape) {
                tryPlaceShape(x, y);
            }
        }, { passive: true });

        bar.appendChild(icon);
    });

    document.body.appendChild(bar);
}

function createShinyShapeIcon(points) {
    const container = document.createElement('div');
    // Sizing is now controlled by .shape-icon CSS (responsive via media queries).
    // The internal canvas keeps drawing at 80x80; CSS scales the container.

    container.onmouseenter = function () {
        container.style.transform = 'scale(1.2) rotate(5deg)';
    };
    container.onmouseleave = function () {
        container.style.transform = 'scale(1) rotate(0deg)';
    };

    const canvas = document.createElement('canvas');
    canvas.width = 80;
    canvas.height = 80;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    const ctx = canvas.getContext('2d');
    const cx = 40, cy = 40;
    const outerR = 30;
    const innerR = 15;

    ctx.beginPath();
    for (let i = 0; i < points * 2; i++) {
        const r = i % 2 === 0 ? outerR : innerR;
        const angle = (i * Math.PI) / points - Math.PI / 2;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();

    const grad = ctx.createRadialGradient(cx, cy, 5, cx, cy, outerR);
    grad.addColorStop(0, '#fff8dc');
    grad.addColorStop(0.5, '#ffd700');
    grad.addColorStop(1, '#b8860b');
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 2;
    ctx.stroke();

    container.appendChild(canvas);
    return container;
}

// ========================================
// EXIT
// ========================================

function triggerExitFlow() {
    document.getElementById('exit-modal').style.display = 'flex';
}

function confirmExit(yes) {
    document.getElementById('exit-modal').style.display = 'none';
    if (yes) {
        backToMap();
    }
}

function backToMap() {
    document.querySelectorAll('.modal-overlay').forEach(function (e) { e.style.display = 'none'; });
    document.getElementById('telescope-hud').style.display = 'none';
    document.getElementById('back-btn').style.display = 'none';

    const shapesBar = document.getElementById('shapes-bar');
    if (shapesBar) shapesBar.remove();

    if (modeState && modeState.traceGuideLines) {
        modeState.traceGuideLines.forEach(function (line) { scene.remove(line); });
        modeState.traceGuideLines = [];
    }

    if (modeState && modeState.currentFreehandLine) {
        scene.remove(modeState.currentFreehandLine);
        modeState.currentFreehandLine = null;
    }

    isGameActive = false;
    renderMap();
    document.getElementById('screen-map').style.display = 'flex';
}

// ========================================
// ALERTS
// ========================================

// Global flag — true while a custom alert overlay is on screen.
// Game click handlers (onPointerDown in game.js) check this and
// ignore clicks so the OK button can be tapped without triggering
// another in-game error.
let alertActive = false;

function showCustomAlert(message, type, title) {
    type = type || 'info';
    title = title || '';

    const existing = document.getElementById('custom-alert-overlay');
    if (existing) existing.remove();

    const icon =
        type === 'success' ? '✅' :
        type === 'error'   ? '❌' :
        type === 'warning' ? '⚠️' : 'ℹ️';
    // Default titles fall back to i18n if available, else hardcoded ru
    const defaultTitle =
        type === 'error'   ? (typeof t === 'function' ? t('err_title')  : 'ОШИБКА') :
        type === 'warning' ? (typeof t === 'function' ? t('warn_title') : 'ВНИМАНИЕ') :
        type === 'success' ? 'OK' : 'i';

    const overlay = document.createElement('div');
    overlay.id = 'custom-alert-overlay';
    overlay.className = 'custom-alert-overlay';
    overlay.innerHTML =
        '<div class="custom-alert-box ' + type + '">' +
            '<span class="alert-icon">' + icon + '</span>' +
            '<h3 class="alert-title">' + (title || defaultTitle) + '</h3>' +
            '<p class="alert-message">' + message + '</p>' +
            '<button class="alert-button" onclick="closeCustomAlert()">OK</button>' +
        '</div>';

    // Block game pointer events while alert is open
    alertActive = true;

    // Also stop game-side mousedown listeners from firing while the alert is up.
    // (capture phase, so we get the event before document-level listeners do)
    overlay.addEventListener('mousedown',  function (e) { e.stopPropagation(); }, true);
    overlay.addEventListener('touchstart', function (e) { e.stopPropagation(); }, true);

    document.body.appendChild(overlay);
    setTimeout(function () { overlay.classList.add('active'); }, 10);

    if (type === 'success') {
        setTimeout(closeCustomAlert, 3000);
    }
}

function closeCustomAlert() {
    const overlay = document.getElementById('custom-alert-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(function () {
            overlay.remove();
            alertActive = false;
        }, 300);
    } else {
        alertActive = false;
    }
}

// ========================================
// LEVEL COMPLETION — VICTORY MODAL
// ========================================

function showVictoryModal(levelIndex) {
    const currentIndex = (levelIndex !== undefined) ? levelIndex : state.currentLevelIndex;

    const hud = document.getElementById('telescope-hud');
    const backBtn = document.getElementById('back-btn');
    if (hud) hud.style.display = 'none';
    if (backBtn) backBtn.style.display = 'none';

    const overlay = document.getElementById('level-win-overlay');
    const nameEl  = document.getElementById('win-constellation-name');
    const descEl  = document.getElementById('win-constellation-desc');
    const factEl  = document.getElementById('win-fact-text');
    const factTitleEl = document.getElementById('win-fact-title');
    const continueBtn = document.getElementById('win-btn-continue');

    if (!overlay) {
        console.error('[Victory] Modal element (level-win-overlay) not found!');
        nextLevel();
        return;
    }

    const levelData = LEVELS[currentIndex];
    const lang = state.lang;

    if (levelData) {
        if (nameEl) nameEl.innerText = levelData.name[lang] || levelData.name.ru;
        if (descEl) descEl.innerText = levelData.desc[lang] || levelData.desc.ru;
        if (factEl) factEl.innerText = levelData.funFact[lang] || levelData.funFact.ru;
    }

    if (factTitleEl) factTitleEl.innerText = t('win_fact');

    // --- Score: +10 per level, cumulative, capped at 100 ---
    state.totalScore = Math.min(100, state.totalScore + 10);

    // Track progression so the map unlocks the next node
    if (currentIndex >= state.levelsCompleted) {
        state.levelsCompleted = currentIndex + 1;
    }

    // Send progress to the parent platform
    submitScore();

    updateGlobalUI();
    isGameActive = false;

    // Last level → switch the "Next" button to "Finish"
    const isFinalLevel = (currentIndex === LEVELS.length - 1);
    if (continueBtn) {
        continueBtn.innerText = isFinalLevel ? t('win_finish') : t('win_continue');
    }

    overlay.style.display = 'flex';
    setTimeout(function () { overlay.classList.add('active'); }, 10);
}

function nextLevel() {
    const overlay = document.getElementById('level-win-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        overlay.style.display = 'none';
    }

    const nextIndex = state.currentLevelIndex + 1;

    if (nextIndex >= LEVELS.length) {
        // Mission complete — show a final summary, then return to map.
        showCustomAlert(
            t('finish_subtitle') + '\n\n' + t('score_label') + ': ' + state.totalScore + ' / 100',
            'success',
            t('finish_title')
        );
        setTimeout(quitToMap, 3000);
        return;
    }

    startGame(nextIndex);
}

function quitToMap() {
    const overlay = document.getElementById('level-win-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        overlay.style.display = 'none';
    }
    backToMap();
}

// Aliases kept for compatibility with older calls in game.js if any survive
function showLevelWinModal(idx) { showVictoryModal(idx); }
function continueToNextLevel() { nextLevel(); }

// ========================================
// MUSIC TOGGLE
// ========================================

let isMuted = false;

function toggleMusic() {
    isMuted = !isMuted;
    const btn = document.querySelector('.mute-btn');
    if (btn) btn.innerText = isMuted ? "🔇" : "🔊";

    if (isMuted) {
        if (typeof bgMusic !== 'undefined') bgMusic.pause();
    } else {
        if (typeof bgMusic !== 'undefined' && typeof isGameActive !== 'undefined' && isGameActive) {
            bgMusic.play().catch(function (e) { console.log("Autoplay blocked:", e); });
        }
    }
}
