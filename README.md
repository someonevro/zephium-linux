<div align="center">
  <img src=".github/assets/logo.png" width="112" height="112" alt="Zephium" />
  <h1>Zephium for Linux</h1>

  <p><strong>An unofficial Linux build of <a href="https://github.com/zephium-browser/Zephium">Zephium</a>,<br />a fast, private browser on the system web engine.</strong></p>

  <p>
    <a href="../../releases/latest"><img src="https://img.shields.io/github/v/release/someonevro/zephium-linux?label=release&color=blue" alt="Latest release" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/license-MPL--2.0-blue" alt="License: MPL-2.0" /></a>
    <img src="https://img.shields.io/badge/platform-Linux-lightgrey" alt="Platform: Linux" />
    <a href="https://github.com/zephium-browser/Zephium"><img src="https://img.shields.io/badge/upstream-zephium--browser%2FZephium-black?logo=github" alt="Upstream: zephium-browser/Zephium" /></a>
  </p>
</div>

> [!IMPORTANT]
> **This is not the official Zephium.** It is not affiliated with or endorsed by the Zephium developers. Report bugs in this build here, not upstream.

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/assets/browse-dark.webp" />
    <img src=".github/assets/browse-light.webp" alt="Zephium's new tab: the window opens onto the sky, with the name, the time and date, and the day's figures along its foot" width="960" />
  </picture>
</p>

## Credits

- **Zephium** is created by [crynta](https://github.com/crynta) and the [Zephium contributors](https://github.com/zephium-browser/Zephium/graphs/contributors). The browser is entirely their work, and the Zephium name and logo belong to them.
- **Built on** [Tauri](https://tauri.app), [Wry](https://github.com/tauri-apps/wry), [WebKitGTK](https://webkitgtk.org), Brave's [adblock-rust](https://github.com/brave/adblock-rust) and [EasyList](https://easylist.to).
- **Linux port:** [someonevro](https://github.com/someonevro), with the code changes made by [Claude Code](https://claude.com/claude-code) (Anthropic). It is about 50 lines on top of upstream; see [discussion #284](https://github.com/zephium-browser/Zephium/discussions/284).

If you like Zephium, support the original project: [zephium.app](https://zephium.app) · [GitHub](https://github.com/zephium-browser/Zephium).

## What you get

- Pages run on WebKitGTK, the web engine your distro keeps up to date, with each page in WebKit's sandbox.
- A native ad and tracker blocker, on by default.
- Vertical tabs, spaces, profiles, pinned tabs, folders and split view.
- A launcher on `Ctrl Shift Space`.
- Tasks, time tracking and notes built in.

<table>
  <tr>
    <td width="33%" align="center"><img src=".github/assets/tasks.webp" alt="Tasks: today, tomorrow and upcoming, with a task linked to the page it came from" /></td>
    <td width="33%" align="center"><img src=".github/assets/time.webp" alt="Time: 3 hours 24 minutes on the web today, a 25-minute focus round and time per site" /></td>
    <td width="33%" align="center"><img src=".github/assets/notes.webp" alt="Notes: a Markdown release checklist with code, beside the page" /></td>
  </tr>
  <tr>
    <td valign="top"><strong>Tasks</strong><br /><sub>Lists, priorities, deadlines and subtasks, with the page you were on linked.</sub></td>
    <td valign="top"><strong>Time</strong><br /><sub>Where your time on the web goes, counted on this device only, plus focus rounds.</sub></td>
    <td valign="top"><strong>Notes</strong><br /><sub>Markdown notes beside the page, each a file you own.</sub></td>
  </tr>
</table>

**Not available in this Linux build:** Work (the agent feature), Chrome extensions, and the in-app updater. The Work tab is visible but does nothing.

## Install

Download from [Releases](../../releases/latest). You need WebKitGTK 4.1 and GTK 3, plus GStreamer plugins for audio and video.

| Distro | Command |
|---|---|
| Arch / CachyOS / Manjaro | `sudo pacman -U zephium-bin-*.pkg.tar.zst` |
| Debian / Ubuntu / Mint | `sudo apt install ./app.zephium_*_amd64.deb` |
| Fedora / openSUSE | `sudo dnf install ./app.zephium-*.x86_64.rpm` |

Verify downloads with `sha256sum -c SHA256SUMS`.

> [!NOTE]
> **AUR package coming soon.** `zephium-linux-bin` is ready but not on the AUR yet, because AUR registrations are currently closed. Until then, install the Arch package from [Releases](../../releases/latest), or build it yourself with the [PKGBUILD](desktop/linux/arch/PKGBUILD): `cd desktop/linux/arch && makepkg -si`.

- **Tested on:** Arch (CachyOS, KDE Plasma Wayland). The `.deb` and `.rpm` have not been tested on their own distros yet.
- **Updates:** install the newer release over the old one. There is no auto-update.
- **No AppImage:** WebKit's sandbox cannot run inside one, and this build does not turn it off.

## Build from source

You need Rust (through `rustup`), Node.js, pnpm and the [Tauri Linux prerequisites](https://v2.tauri.app/start/prerequisites/#linux).

```sh
git clone https://github.com/someonevro/zephium-linux.git
cd zephium-linux
pnpm install --frozen-lockfile
pnpm dev:linux      # run a development build
pnpm -C desktop exec tauri build --bundles deb,rpm -- --no-default-features
```

Linux builds use `--no-default-features`, because the Work feature only compiles on macOS and Windows.

## License

Zephium is licensed under the [Mozilla Public License 2.0](LICENSE), and so are the Linux changes in this fork.

The bundled EasyList and EasyPrivacy filter lists are used under
[CC BY-SA 3.0](assets/blocker-seed/v1/LICENSE-CC-BY-SA-3.0.txt); see
[the notice](assets/blocker-seed/v1/NOTICE) for attribution.

The Zephium name and logo are not licensed under the MPL. They belong to the Zephium developers.
