// ========================================
// MAIN.JS - Initialization & Event Setup
// Mission 6: TELESCOPE — STTM
// ========================================

// ----- PLATFORM POSTMESSAGE INTEGRATION -----

let platformInitReceived = false;

// Listen for INIT from parent platform.
// Expected: { type: 'INIT', username: 'Aziz', lang: 'ru' }
window.addEventListener('message', function (event) {
    const data = event.data;
    if (!data || typeof data !== 'object') return;

    if (data.type === 'INIT') {
        platformInitReceived = true;
        if (typeof data.username === 'string' && data.username.trim().length > 0) {
            state.username = data.username.trim();
        }
        if (data.lang === 'ru' || data.lang === 'uz' || data.lang === 'en') {
            state.lang = data.lang;
        }
        applyLanguage();
        updateGlobalUI();
    }
});

// Tell the parent we're ready to receive INIT.
function sendReady() {
    try {
        if (window.parent && window.parent !== window) {
            window.parent.postMessage({ type: 'READY' }, '*');
        }
    } catch (e) {
        console.warn('[STTM] Could not send READY:', e);
    }
}

// Send cumulative score after each level.
// Platform stores best score (max wins).
function submitScore() {
    try {
        if (window.parent && window.parent !== window) {
            window.parent.postMessage({
                type: 'SUBMIT_SCORE',
                score: state.totalScore
            }, '*');
        }
    } catch (e) {
        console.warn('[STTM] Could not send SUBMIT_SCORE:', e);
    }
}

// ----- INIT -----

function init() {
    console.info('[STTM Telescope] init() starting...');

    // 1. Generate level metadata (depends on data.js only)
    try {
        generateFixedLevels();
        console.info('[STTM Telescope] Levels generated:', LEVELS.length);
    } catch (e) {
        console.error('[STTM Telescope] generateFixedLevels() failed:', e);
    }

    // 2. Attach event listeners FIRST so the START button works even if
    //    Three.js fails to load (e.g. blocked CDN).
    document.addEventListener('mousemove', onMove);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown, { passive: false });
    console.info('[STTM Telescope] Event listeners attached.');

    // 3. Update UI based on initial state (score=0, default username)
    try {
        updateGlobalUI();
        applyLanguage();
    } catch (e) {
        console.error('[STTM Telescope] updateGlobalUI() failed:', e);
    }

    // 4. Initialize Three.js scene. Wrapped — if THREE isn't loaded,
    //    the rest of the app should still respond (intro / map screen).
    if (typeof THREE === 'undefined') {
        console.error('[STTM Telescope] THREE is not loaded! Check the CDN: https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js');
    } else {
        try {
            initThree();
            console.info('[STTM Telescope] Three.js scene initialized.');
        } catch (e) {
            console.error('[STTM Telescope] initThree() failed:', e);
        }
    }

    // 5. Notify parent we're ready, then wait briefly for INIT.
    sendReady();
    setTimeout(function () {
        if (!platformInitReceived) {
            console.info('[STTM Telescope] No INIT received from parent — using defaults (username=Игрок, lang=ru).');
        }
    }, 2000);

    console.info('[STTM Telescope] init() complete.');
}

window.onload = init;
