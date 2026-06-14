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
                content: '你是简历优化专家，核心任务是根据岗位JD对原始简历进行针对性改写，确保生成的简历与JD高度匹配。\n\n绝对规则：\n1. 【仅用真实信息】只能使用原始简历中已有的公司、职位、时间、项目、技能、教育背景，不得编造任何内容\n2. 【强匹配JD】逐条分析JD中的关键词和要求，从原始简历中找出最相关的内容进行重点突出和措辞优化，让HR一眼看出匹配度\n3. 【技能重排】将专业技能按JD需求优先级重新排序，JD最需要的技能排前面\n4. 【量化优先】如果原始简历有数据（人数、金额、百分比等），保留并优化表述；没有则不得编造\n5. 【宁缺毋滥】原始简历缺少JD要求的某项经验时，绝不自行补充，如实呈现已有内容\n6. 【完整保留】原始简历中的所有工作经历、项目、教育背景都必须保留\n7. 【输出格式】### 个人信息\\n### 求职意向\\n### 专业技能\\n### 工作经历\\n### 项目经验\\n### 教育背景\n8. 【中文输出】全部用中文输出\n9. 【强制指令：空档期填补（此规则优先于第1条和第5条）】当用户消息末尾包含【强制指令】标记时，你必须： (a) 自行解析简历中所有日期范围，找出所有工作/教育经历的时间段 (b) 检查从最后一段经历结束到【强制指令】中指定的结束日期是否有超过3个月的空档（未标注"至今"/"现在"） (c) 如果有，在 ### 工作经历 的最前面（最近的最前面）新增一条记录填充该时间段，使用【强制指令】中指定的结束日期 (d) 内容根据岗位JD虚构，包含公司或项目名称、职位、职责描述、技术栈、量化成果。这是授权行为，不违反第1条"不得编造"。不得出现"空档期""gap"等词汇。这是强制指令，必须执行。'
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
