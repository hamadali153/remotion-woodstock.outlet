# Remotion Animation Project

This project uses Remotion to create dynamic animations with customizable content.

## Project Structure

```
public/
  ├── images/       # Place your image assets here
  ├── audio/        # Place your audio files here
  └── templates/    # Animation template files
```

## Image Requirements

Place your image files in the `public/images/` directory. The animation requires the following images:

1. `img_0.png` - Logo image (360x151)
2. `img_1.png` - Product image (1024x768)
3. `img_2.jpg` - High-res product shot (4736x3520)
4. `img_3.jpg` - Feature image (3008x1376)
5. `img_4.jpg` - Feature image (2816x1280)
6. `img_5.jpg` - Feature image (1184x880)
7. `img_6.png` - Product image (1024x768)
8. `img_7.jpg` - Background image (1280x768)

Image specifications:
- Format: PNG for logo and product images, JPG for feature images
- Resolution: As specified above for each image
- Color space: RGB
- Transparency: Supported in PNG files
- Quality: High quality, minimal compression

## Audio Requirements

Place your audio files in the `public/audio/` directory. The animation requires the following audio files:

Voice Narrations:
1. `aud_0.mp3` - Main narration (ElevenLabs voice)
2. `aud_1.mp3` - Voice clip for section 1
3. `aud_2.mp3` - Voice clip for section 2
4. `aud_3.mp3` - Voice clip for section 3
5. `aud_4.mp3` - Voice clip for section 4
6. `aud_5.mp3` - Voice clip for section 5
7. `aud_6.mp3` - Voice clip for section 6
8. `aud_7.mp3` - Voice clip for section 7
9. `aud_8.mp3` - Background music track

Audio specifications:
- Format: MP3
- Sample rate: 44.1kHz
- Channels: Stereo
- Voice quality: Clear, professional narration
- Background music: Subtle, non-intrusive
- Total animation duration: 49.87 seconds (1496 frames at 30fps)

## Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Render the video:
```bash
npm run build
```

## Commands

**Install Dependencies**

```console
npm install
```

**Start Preview**

```console
npm run dev
```

**Render video**

```console
npx remotion render
```

**Upgrade Remotion**

```console
npx remotion upgrade
```

## Help

Need help? Check out:
- [Remotion Documentation](https://www.remotion.dev/docs/the-fundamentals)
- [Discord Community](https://discord.gg/6VzzNDwUwV)
- [GitHub Issues](https://github.com/remotion-dev/remotion/issues/new)

## License

Note that for some entities a company license is needed. [Read the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
