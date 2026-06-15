# 🧊 简历魔方 — 多平台简历智能定制助手

> 投其所好，每次面试都因为这份简历。

📦 **Tags:** `boss` `bosshelper` `简历助手` `简历定制` `简历魔方`  
🎯 **支持平台:** BOSS直聘 · 智联招聘 · 猎聘 · 前程无忧 · 应届生求职网

---

## ✨ 功能

- 📁 **粘贴简历** — 直接粘贴简历文本或上传 .txt 文件
- 🔍 **一键抓取 JD** — 自动识别当前站点，提取岗位名称、薪资、公司、职位描述（抓不到可手动填写）
- 🤖 **AI 定制** — 根据 JD 自动改写简历，匹配岗位要求（支持 DeepSeek / OpenAI）
- 🕳️ **空档期填充** — 自动检测 3 个月以上空档期，填充相关经历
- ✏️ **预览编辑** — 生成结果可直接编辑修改
- 📥 **导出 PDF** — 一键下载专业排版的 PDF 简历
- ↔️ **可拖拽侧边栏** — 宽度 280-600px 自由调整，自动保存

## 🖥️ 支持的招聘平台

| 平台 | 域名 | 状态 |
|------|------|------|
| BOSS直聘 | zhipin.com | ✅ 已适配 |
| 智联招聘 | zhaopin.com | ✅ 已适配 |
| 猎聘 | liepin.com | ✅ 已适配 |
| 前程无忧 | 51job.com | ✅ 已适配 |
| 应届生求职网 | yingjiesheng.com | ✅ 已适配 |

进入以上任意网站的 **职位详情页**，侧边栏自动出现，点击「🔍 抓取岗位信息」即可。

## 🚀 安装

### 方式一：下载 ZIP

1. 打开 https://github.com/bitchbitchbitch/CVbox
2. 点击 **Code** → **Download ZIP** → 解压

### 方式二：Git 克隆

```bash
git clone https://github.com/bitchbitchbitch/CVbox.git
```
**国内推荐（Gitee 镜像，下载更快）：**
```bash
git clone https://gitee.com/zhangyushao111/resume-cube---cvbox.git
```

### 加载扩展

1. 打开 Chrome，地址栏输入 `chrome://extensions`
2. 开启右上角 **开发者模式**
3. 点击 **加载已解压的扩展程序**
4. 选择 `boss_resume_extension` 文件夹

> ⚠️ 选择的是 `boss_resume_extension` 子文件夹，不是外层目录。

## 📖 使用

1. 打开任一招聘网站的职位详情页
2. 左侧出现 🧊 **简历魔方** 侧边栏
3. 点击「⚙️ 展开设置」填写 **API Key**
   - 默认使用 DeepSeek API，在 [platform.deepseek.com](https://platform.deepseek.com) 注册获取
   - 也可切换为 OpenAI 或其他兼容 API
4. 粘贴简历 → 抓取岗位 → 生成定制简历 → 下载 PDF

## ⚙️ 设置

| 项目 | 说明 |
|------|------|
| API Key | 必填。DeepSeek / OpenAI 等 API 密钥 |
| 模型 | DeepSeek V3 / R1、GPT-4o Mini / GPT-4o |
| API 地址 | 默认 DeepSeek，可改为硅基流动等兼容地址 |
| 空档期填充 | 自动检测并填充 3 个月以上空档期（默认开启） |

## 📂 目录结构

```
boss_resume_extension/
├── manifest.json    # 扩展配置
├── content.js       # 侧边栏 UI + 逻辑（零外部依赖）
├── background.js    # 后台 API 调用
├── icons/           # 图标
└── README.md
```

## 📦 版本历史

- **v1.1.0** — 多站适配（智联/猎聘/前程无忧/应届生），侧边栏可拖拽伸缩，反爬增强
- **v1.0.2** — 侧边栏隐藏时显示竖直长条
- **v1.0.1** — 更名为简历魔方
- **v1.0.0** — 基础功能（仅 BOSS直聘）

## 🔑 注意事项

- API Key 仅存储在本地浏览器，不会上传到其他服务器
- 生成的内容请审核后再使用，确保信息准确
- 本工具为个人辅助工具，请合理使用
