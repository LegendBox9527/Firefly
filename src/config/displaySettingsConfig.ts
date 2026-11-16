import type { DisplaySettingsConfig } from "../types/displaySettingsConfig";
import { resolveDisplaySettingsConfig } from "../utils/display-settings-utils";

// 显示设置面板开关配置
// 集中管理设置面板中所有可切换项的开关
// 方便统一控制哪些设置项对用户可见
// 也方便进行调试预览效果

export const displaySettingsConfig: DisplaySettingsConfig =
	resolveDisplaySettingsConfig({
		// ── 总开关 (Master switch) ────────────────────────────

		// 视图设置面板总开关：开启后导航栏右侧出现调色板按钮，
		// 点开即浮动面板（内含主题色相滑动条，可 0–360° 调整整站配色）。
		// 面板开启后其组件会打进客户端产物，会略微增加构建体积与首屏 JS；
		// 如果只想要固定的配色、不需要前台调色，把它设回 false 即可。
		//
		// 除了改这里，也可以在部署平台（Vercel / Cloudflare 等）配置环境变量开启，
		// 无需改动本文件：PUBLIC_DISPLAY_SETTINGS=true
		// 环境变量优先级更高，未设置或取值无法识别时使用这里的值
		enable: true,

		// ── 外观 (Appearance) ──────────────────────────────────

		// 主题色相滑动条（本站唯一启用的设置项）
		// 拖动即可实时改变 --hue，整站配色（主色、卡片、按钮、标签等）跟随变化，
		// 当前默认色相为 siteConfig.themeColor.hue（165，偏绿）。
		themeColorSwitchable: true,

		// 以下设置项本站不需要，全部关闭以减少面板复杂度与产物体积。
		// 需要其中某一项时，把对应值改为 true 即可恢复。

		// 文章列表布局切换开关
		layoutSwitchable: false,

		// 卡片边框和阴影开关
		cardBorderSwitchable: false,

		// 卡片风格跟随主题色开关
		cardFollowThemeSwitchable: false,

		// ── 壁纸 (Wallpaper) ──────────────────────────────────

		// 壁纸模式切换开关（这是构建体积的大头，约 +33 KB/页，本站关闭）
		wallpaperModeSwitchable: false,

		// 全屏壁纸布局切换开关（classic / hero）
		fullscreenLayoutSwitchable: false,

		// 水波纹动画开关
		wavesSwitchable: false,

		// 渐变过渡效果开关
		gradientSwitchable: false,

		// 横幅标题显示开关
		bannerTitleSwitchable: false,

		// 壁纸轮播开关
		bannerCarouselSwitchable: false,

		// 全屏壁纸/透明覆盖模式参数调节开关
		// 设为 false 关闭所有滑块，或用对象形式单独控制每个滑块
		overlaySwitchable: false,

		// ── 特效 (Effects) ────────────────────────────────────

		// 樱花特效开关
		sakuraSwitchable: false,
	});
