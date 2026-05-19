// ========================================
// STATE.JS - Game State Management
// Mission 6: TELESCOPE — STTM
// No localStorage. Username and language come from
// the parent platform via postMessage (see main.js).
// ========================================

let state = {
    username: 'Игрок',           // set by platform via INIT message
    lang: 'ru',                  // 'ru' | 'uz' | 'en' — set by platform via INIT message
    currentLevelIndex: 0,        // 0..9
    totalScore: 0,               // cumulative 0..100 (10 per level)
    levelsCompleted: 0           // how many levels have been finished
};
