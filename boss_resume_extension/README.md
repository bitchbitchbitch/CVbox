# 🧊 简历魔方 —— BOSS直聘简历定制助手

> 投其所好，每次面试都因为这份简历。

在 BOSS直聘 页面内根据岗位 JD 自动定制优化简历内容，支持预览编辑并导出为 PDF。

## ✨ 功能

- 📁 **粘贴简历** — 直接粘贴简历文本或上传 .txt 文件
- 🔍 **抓取 JD** — 一键抓取当前页面的岗位信息
- 🤖 **AI 定制** — 根据 JD 自动改写简历，匹配岗位要求
- 🕳️ **空档期填充** — 自动检测 3 个月以上空档期，填充相关经历
- ✏️ **预览编辑** — 生成结果可直接编辑修改
- 📥 **导出 PDF** — 一键下载专业排版的 PDF 简历

## 🚀 安装步骤

### 1. 下载代码

**方式 A：直接下载 ZIP**
- 打开 https://github.com/bitchbitchbitch/---
- 点击绿色按钮 **Code** → **Download ZIP**
- 解压到本地文件夹

**方式 B：Git 克隆**
```bash
git clone https://github.com/bitchbitchbitch/---.git
```

### 2. 安装扩展

1. 打开 Chrome 浏览器，地址栏输入 `chrome://extensions`
2. 打开右上角的 **开发者模式**（Developer mode）
3. 点击左上角 **加载已解压的扩展程序**（Load unpacked）
4. 选择代码目录中的 `boss_resume_extension` 文件夹
5. 扩展安装成功，图标出现在工具栏

> ⚠️ 注意：选择的是 `boss_resume_extension` 子文件夹，不是外层目录。

### 3. 使用

1. 打开 BOSS直聘（zhipin.com），进入任意职位详情页
2. 左侧出现 🧊 **简历魔方** 侧边栏
3. **填写 API Key**（点击「⚙️ 展开设置」）
   - 默认使用 DeepSeek API，需在 [platform.deepseek.com](https://platform.deepseek.com) 注册获取 Key
   - 也可以切换为 OpenAI 或其他兼容 API
4. 粘贴简历 → 抓取岗位 → 生成定制简历 → 下载 PDF

## ⚙️ 设置

| 项目 | 说明 |
|------|------|
| API Key | 必填。DeepSeek / OpenAI 等 API 密钥 |
| 模型 | DeepSeek V3 / R1 / GPT-4o Mini / GPT-4o |
| API 地址 | 默认 DeepSeek，可改为硅基流动等兼容地址 |
| 空档期填充 | 自动检测并填充 3 个月以上空档期（默认开启） |

## 📂 目录结构

```
boss_resume_extension/
├── manifest.json    # 扩展配置
├── content.js       # 侧边栏 UI + 逻辑（零外部依赖）
├── background.js    # 后台 API 调用
└── README.md
```

## 📦 版本

- **v1.2.1** — 更名为简历魔方
- **v1.2.0** — 工作经历和项目经历支持按 JD 美化
- **v1.1.0** — 空档期自动填充 + PDF 页数控制
- **v1.0.0** — 基础功能

## 🔑 注意事项

- API Key 仅存储在本地浏览器，不会上传到其他服务器
- 生成的内容需要审核后再使用，确保信息准确
- 本工具为个人辅助工具，请合理使用
