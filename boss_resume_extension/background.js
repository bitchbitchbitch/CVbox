// background.js - 唯一功能：调用 OpenAI API，返回生成的简历文本
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.action === 'generate') {
    (async () => {
      try {
        const resp = await fetch((msg.apiBase || 'https://api.deepseek.com') + '/v1/chat/completions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + msg.apiKey },
          body: JSON.stringify({
            model: msg.model || 'gpt-4o-mini',
            messages: [
              {
                role: 'system',
                content: '你是简历优化专家，核心任务是根据岗位JD对原始简历进行针对性改写，确保生成的简历与JD高度匹配。\n\n核心原则：\n1. 【强匹配JD】逐条分析JD中的关键词和要求，从原始简历中找出最相关的内容进行重点突出和措辞优化，让HR一眼看出匹配度\n2. 【30%虚构美化】在 ### 工作经历 和 ### 项目经验 中，允许对过往经历进行约30%的虚构和美化，使经历更贴合JD要求。具体包括：适度提升职位级别、增加JD中要求的技术栈/工具使用经验、补充与JD相关的职责描述和量化成果、优化项目名称使其更专业。不得凭空捏造完整的公司或学历，但在已有公司/项目基础上优化内容是允许的。\n3. 【技能重排】将专业技能按JD需求优先级重新排序，JD最需要的技能排前面\n4. 【量化优先】对工作经历和项目的描述尽量用量化数据（人数、金额、百分比等）增强说服力，可以合理虚构数据以符合JD\n5. 【完整保留】原始简历中的所有工作经历、项目、教育背景都必须保留，不得删减\n6. 【输出格式】### 个人信息\\n### 求职意向\\n### 专业技能\\n### 工作经历\\n### 项目经验\\n### 教育背景\n7. 【中文输出】全部用中文输出\n8. 【强制指令：空档期填补】当用户消息末尾包含【强制指令】标记时，你必须： (a) 自行解析简历中所有日期范围，找出所有工作/教育经历的时间段 (b) 检查从最后一段经历结束到【强制指令】中指定的结束日期是否有超过3个月的空档（未标注"至今"/"现在"） (c) 如果有，在 ### 工作经历 的最前面（最近的最前面）新增一条记录填充该时间段，使用【强制指令】中指定的结束日期 (d) 内容根据岗位JD虚构，包含公司或项目名称、职位、职责描述、技术栈、量化成果。不得出现"空档期""gap"等词汇 (e) 新增的公司或项目名称不能与JD中的公司名称相同或相似，禁止使用目标公司作为你的经历。这是强制指令，必须执行。'
              },
              { role: 'user', content: 'JD：\n' + msg.jd + '\n\n原始简历：\n' + msg.resume + '\n\n请生成针对性优化的简历。' }
            ],
            temperature: 0.3,
            max_tokens: 8192
          })
        });
        const data = await resp.json();
        if (!resp.ok) throw new Error(data.error?.message || 'API error ' + resp.status);
        const text = data.choices?.[0]?.message?.content;
        if (!text) throw new Error('返回内容为空');
        sendResponse({ ok: true, text });
      } catch (e) {
        sendResponse({ ok: false, error: e.message });
      }
    })();
    return true;
  }
});
