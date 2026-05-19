# Mission 6: Telescope — STTM

Browser game for the STEP TO THE MOON platform. Teaches kids (ages 7–11) about constellations through a telescope. 10 levels, trilingual (uz/ru/en).

## Files

```
mission-6-telescope/
├── index.html              ← entry point
├── main.js                 ← init + postMessage handshake
├── state.js                ← runtime state (no localStorage)
├── data.js                 ← 10 constellations + telescope facts
├── ui.js                   ← screens, i18n, victory modal
├── game.js                 ← Three.js engine + 5 mechanics
├── modern-modals__2_.css   ← shared styling
└── intro-bg.jpg            ← intro background image
```

## Deploy to GitHub Pages

1. Create a repo `mission-6-telescope` on GitHub
2. Upload all files above to the root
3. Settings → Pages → Branch: `main` → Folder: `/ (root)` → Save
4. After ~1 min, the game is live at `https://<username>.github.io/mission-6-telescope/`

## Embed in STTM platform

In your platform's Mission 6 page, embed the game as an iframe:

```html
<iframe
    src="https://<username>.github.io/mission-6-telescope/"
    id="mission-frame"
    style="width: 100%; height: 100vh; border: 0;"
    allow="autoplay">
</iframe>
```

## postMessage contract

### Platform → game

Sent **once**, in response to the game's `READY` signal.

```js
{ type: 'INIT', username: 'Aziz', lang: 'ru' }
```

- `username` — string, displayed in HUD
- `lang` — `'ru' | 'uz' | 'en'`, switches all UI strings + constellation facts

### Game → platform

**Sent once at startup:**
```js
{ type: 'READY' }
```
Listen for this, respond with `INIT`.

**Sent after each completed level (1–10):**
```js
{ type: 'SUBMIT_SCORE', score: 10 }   // after level 1
{ type: 'SUBMIT_SCORE', score: 20 }   // after level 2
// ...
{ type: 'SUBMIT_SCORE', score: 100 }  // after level 10 (final)
```

- `score` is cumulative (10, 20, 30 … 100)
- Always store the **maximum** of received scores in Firestore (best-score-only)

## Platform-side reference code

```javascript
// Wherever you set up the iframe for Mission 6:
const frame = document.getElementById('mission-frame');
const currentUser = getCurrentUser();   // your auth

window.addEventListener('message', async function (event) {
    // Optional: verify event.origin matches your game's GitHub Pages URL
    const data = event.data;
    if (!data || typeof data !== 'object') return;

    if (data.type === 'READY') {
        // Game has loaded — tell it who's playing and what language
        frame.contentWindow.postMessage({
            type: 'INIT',
            username: currentUser.nickname,
            lang: currentUser.language || 'ru'
        }, '*');
    }

    if (data.type === 'SUBMIT_SCORE') {
        const newScore = data.score;       // 10, 20, ... 100
        const missionId = 6;

        // Write to Firestore, keeping the maximum
        const ref = firestore
            .collection('scores')
            .doc(currentUser.uid)
            .collection('missions')
            .doc(String(missionId));

        const snapshot = await ref.get();
        const oldScore = snapshot.exists ? (snapshot.data().score || 0) : 0;

        if (newScore > oldScore) {
            await ref.set({
                score: newScore,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
        }
    }
});
```

This mirrors the Moon Rover (Mission 3) integration — same shape, just `missionId = 6`.

## Local testing

Open `_test-harness.html` in a browser. It loads `index.html` in an iframe and simulates the STTM platform: catches `READY`, sends `INIT`, displays the best score from `SUBMIT_SCORE`.

Use the "↻ Hard reload" button if the iframe shows a stale version.

## Game design

- **10 levels**, each = 1 constellation. Linear order, no branching.
- **5 mechanics** in an 8-step cycle: classic (connect by order) → shape (match by point count) → classic → trace (draw precise line) → classic → brightness (tap dim-to-bright) → classic → odd-one-out → classic → shape.
- **Score**: 10 points per level, capped at 100. Errors don't penalize — soft audio cue only.
- **Visual style**: Cinzel + Philosopher fonts, gold/teal palette, Samarkand observatory aesthetic.
- **No accounts, no shop, no lives.** Pure mission gameplay.

## Languages

UI strings, constellation names, descriptions, and "fun facts" are translated for all 3 languages in `data.js` (constellations) and `ui.js` (UI). Audio cues are language-neutral.

The intro tagline is in HTML; full uz/en versions are in a comment block above the `<p>` tag in `index.html` for editor reference.

## What's *not* in the game

- No internal authentication — username comes from the platform
- No internal leaderboard — score goes to platform, platform handles leaderboard
- No localStorage — fully stateless between sessions
- No internal quizzes — quiz/flashcard content is handled by the STTM platform separately
- No Firebase SDK — game never touches Firestore directly
