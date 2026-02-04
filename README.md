# Local Resource Diagnostic Tool

![Build](https://github.com/joost-bosman/local_resource_diagnostic_tool/actions/workflows/build-release.yml/badge.svg)

Small Windows + macOS diagnostics app with privacy controls and export.

<table>
  <tr>
    <td align="center" width="260" height="140"><b>Setup phase</b><br/>Install + Start</td>
    <td align="center" width="60">-></td>
    <td align="center" width="260" height="140"><b>Input</b><br/>Mode + Privacy</td>
    <td align="center" width="60">-></td>
    <td align="center" width="260" height="140"><b>Diagnostics</b><br/>OS - CPU - GPU - Memory - Internet</td>
    <td align="center" width="60">-></td>
    <td align="center" width="260" height="140"><b>Output</b><br/>Results + Suggestions + Export</td>
  </tr>
</table>

## Features
- Quick or full diagnostics
  - Tests: OS info, CPU, GPU, memory, internet latency.
  - The tool automatically checks CLI builds.
- Privacy mode
  - Private (default) or public (redacted)
- Output results
  - Format: TXT or PDF
  - Timestamped filenames: `results_diagnostic_DDMMYY`
  - Optimization suggestions included

## Notes
- Mode
  - Public (redacts username/hostname/home paths)
  - Private (shows all details)
- Speedtest
  - Runs hidden (up to ~60s); failures show as errors.
- Component fields in results (cores/speed/etc.)
  - When the OS/driver can't provide it, may show "n/a".

## Setup phase
- Install dependencies: `npm install`
- Start the app: `npm start`

## Build
- Electron-based build (applies to both Windows and macOS).

### Windows tool
- Folder build: `npm run pack`
- Installer: `npm run build`

### Mac tool
- macOS helper:
  - `./mac_diagtool_program_builder.sh`
  - Note: I made an auto builder for macOS, but I could not build it myself.

## Where the executables are
- Output folder: `dist/`
- Windows installer: `*.exe` (NSIS)
- macOS installer: `*.dmg`
- macOS builds are best done on macOS (I don’t have a Mac).
- Tests run before push; releases are on GitHub.
- The mac helper script generates `assets/icon-mac.icns` from `assets/icon-mac.png` before building.

## Credits
Source icons:
- http://toastytech.com/guis/win98.html
- https://www.aicerts.ai/news/apple-ai-strategy-the-invisible-approach-wall-street-is-questioning/
- https://www.speedtest.net/
