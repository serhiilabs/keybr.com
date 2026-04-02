# typer.top - typing trainer

**[typer.top](https://typer.top)** - free adaptive typing trainer for Ukrainian and English languages. Practice touch typing with smart lessons that adapt to your skill level.

Open-source fork of [keybr.com](https://github.com/aradzie/keybr.com) by Aliaksandr Radzivanovich. Modified 2025.

## Features

- Adaptive learning algorithm - starts with most frequent letters, adds more as you improve
- Ukrainian (ЙЦУКЕН) and English (QWERTY) keyboard layouts
- 10,000-word frequency dictionaries
- Phonetic model for pseudo-word generation
- Progress tracking (stored locally in browser)
- Google OAuth for cross-device sync
- Dark/light themes
- Ukrainian and English UI

## Local setup

```bash
git clone git@github.com:serhiilabs/keybr.com.git
cd keybr.com
npm install
cp .env.example .env
npm run compile
npm run build-dev
npx tsnode packages/devenv/lib/initdb.ts
npm start
```

Open http://localhost:3000/

## Google OAuth (optional)

1. Create OAuth credentials at https://console.cloud.google.com/apis/credentials
2. Add redirect URI: `http://localhost:3000/auth/oauth-callback/google`
3. Add to `.env`:
```
AUTH_GOOGLE_CLIENT_ID=...
AUTH_GOOGLE_CLIENT_SECRET=...
```

## License

AGPL-3.0 - see [LICENSE](LICENSE).
