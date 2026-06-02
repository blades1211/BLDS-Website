/**
 * CINEMATIC MANAGER - Handles cutscenes and animations
 */

class CinematicManager {
  async playOpeningCinematic() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      z-index: 99999;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      font-family: monospace;
      font-size: 20px;
      text-align: center;
      line-height: 1.8;
    `;

    const text = document.createElement('div');
    text.style.cssText = `
      opacity: 0;
      transition: opacity 0.8s ease;
    `;
    text.textContent = `In the beginning...
there was only separation.

BLACK & LIGHT
Two opposites, both necessary.`;

    overlay.appendChild(text);
    document.body.appendChild(overlay);

    setTimeout(() => text.style.opacity = '1', 300);
    setTimeout(() => text.style.opacity = '0', 4000);
    setTimeout(() => overlay.remove(), 5000);
  }

  async playForgottenCutscene() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      z-index: 99999;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      font-family: monospace;
      padding: 40px;
      overflow-y: auto;
    `;

    const texts = [
      'NO ACTIVE RECORD FOUND',
      'Attempting reconstruction...',
      'Searching fragments...',
      'Searching fragments...',
      'Searching fragments...',
      '',
      '1 Fragment Detected',
      'Core Signature Match: 99.87%',
      'Historical Reconstruction Available',
      'Opening Archive...'
    ];

    for (const txt of texts) {
      const el = document.createElement('div');
      el.style.cssText = `
        font-size: 14px;
        margin: 5px 0;
        opacity: 0;
        transition: opacity 0.5s ease;
      `;
      el.textContent = txt;
      overlay.appendChild(el);
      await new Promise(r => setTimeout(() => {
        el.style.opacity = '1';
        setTimeout(r, 800);
      }, 100));
    }

    setTimeout(() => overlay.remove(), 2000);
  }

  async play12FlamesCutscene() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      z-index: 99999;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      font-family: monospace;
      text-align: center;
    `;

    const logo = document.createElement('img');
    logo.src = 'logo.png';
    logo.style.cssText = `
      width: 150px;
      height: 150px;
      filter: drop-shadow(0 0 30px #ffcc00);
      animation: logoGrow 4s ease-out forwards;
      margin-bottom: 30px;
    `;

    const text = document.createElement('div');
    text.style.cssText = `
      font-size: 18px;
      opacity: 0;
      transition: opacity 1s ease;
    `;
    text.innerHTML = 'You Found it<br><br>12 Flames<br><br>I thought you guys forgot about it';

    overlay.appendChild(logo);
    overlay.appendChild(text);
    document.body.appendChild(overlay);

    const style = document.createElement('style');
    style.textContent = `
      @keyframes logoGrow {
        0% { width: 50px; height: 50px; opacity: 0; transform: scale(0.5); }
        50% { opacity: 1; }
        100% { width: 200px; height: 200px; opacity: 1; transform: scale(1); }
      }
    `;
    document.head.appendChild(style);

    setTimeout(() => text.style.opacity = '1', 2500);
    setTimeout(() => overlay.remove(), 6000);
  }

  async playStreak100Cutscene() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      z-index: 99999;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      font-family: monospace;
      text-align: center;
      padding: 40px;
      overflow-y: auto;
    `;

    const texts = [
      'For a hundred days...',
      'the Eclipse watched.',
      '',
      'For a hundred days...',
      'you continued forward.',
      '',
      'Many flames burned brightly...',
      'only to disappear.',
      '',
      'Yet yours remained.',
      '',
      'And now...',
      'the Core remembers your name.'
    ];

    for (const txt of texts) {
      const el = document.createElement('div');
      el.style.cssText = `
        font-size: 16px;
        margin: 8px 0;
        opacity: 0;
        transition: opacity 0.6s ease;
      `;
      el.textContent = txt;
      overlay.appendChild(el);
      await new Promise(r => setTimeout(() => {
        el.style.opacity = '1';
        setTimeout(r, 1000);
      }, 100));
    }

    setTimeout(() => {
      overlay.innerHTML = '';
      
      const whiteScreen = document.createElement('div');
      whiteScreen.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        animation: fadeToBlack 2s ease-in-out forwards;
      `;

      const logo = document.createElement('img');
      logo.src = 'logo.png';
      logo.style.cssText = `
        width: 250px;
        height: 250px;
        filter: drop-shadow(0 0 50px #ffcc00);
        animation: logoGlow 2s ease-in-out infinite;
        z-index: 10;
      `;

      const title = document.createElement('div');
      title.style.cssText = `
        font-size: 48px;
        font-weight: bold;
        color: #ffcc00;
        text-shadow: 0 0 20px #ffcc00;
        margin-top: 30px;
        animation: titlePulse 1s ease-in-out infinite;
        z-index: 10;
      `;
      title.textContent = 'STREAK 100';

      overlay.appendChild(whiteScreen);
      overlay.appendChild(logo);
      overlay.appendChild(title);

      const style = document.createElement('style');
      style.textContent = `
        @keyframes fadeToBlack {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes logoGlow {
          0%, 100% { filter: drop-shadow(0 0 30px #ffcc00); }
          50% { filter: drop-shadow(0 0 60px #ffcc00) brightness(1.2); }
        }
        @keyframes titlePulse {
          0%, 100% { text-shadow: 0 0 20px #ffcc00; }
          50% { text-shadow: 0 0 40px #ffcc00, 0 0 60px #ff6600; }
        }
      `;
      document.head.appendChild(style);
    }, 14000);

    setTimeout(() => overlay.remove(), 18000);
  }
}

const cinematicManager = new CinematicManager();