"use client";

import { useState } from "react";

const work = [
  {
    image: "/case-22.jpg",
    type: "剧集宣发 / 悬疑",
    title: "《假面迷情》全域内容营销",
    note: "围绕剧集看点分层策划微博话题，并在抖音、快手持续生产剧情二创与口碑内容。相关话题 5 次登上微博主榜，快手累计登榜 11 次。",
    result: "微博阅读 1.5 亿+ · 短视频播放 2.2 亿+",
  },
  {
    image: "/case-31.jpg",
    type: "电影营销 / 青春",
    title: "《漫长的季节》口碑破圈",
    note: "以口碑传播、短视频征稿和城市事件为核心，联动 11 城交通广播与 42402 辆出租车落地应援，形成线上线下共振。",
    result: "热搜热榜 1180+ · 主话题阅读 12 亿",
  },
  {
    image: "/case-55.jpg",
    type: "晚会营销 / 节点",
    title: "春节档节点事件传播",
    note: "围绕节目高光、嘉宾内容和文化表达展开全域宣发，联动权威媒体与海外嘉宾账号，多维度维持晚会口碑。",
    result: "全网热搜 2033+ · 相关曝光 104 亿",
  },
];

const moreWork = [
  [23, "电视剧营销", "《人生若如初见》内容传播"],
  [24, "电视剧营销", "《似锦》全域宣发"],
  [25, "电视剧营销", "《武林外传》内容营销"],
  [26, "电视剧营销", "《CHER FOR YOU》项目传播"],
  [27, "电视剧营销", "《再次人生》话题营销"],
  [29, "电视剧营销", "《人生若如初见》整合传播"],
  [30, "电视剧营销", "《玫瑰的故事》口碑营销"],
  [32, "电视剧营销", "《热恋中的他》社交传播"],
  [33, "综艺营销", "《乘风》节目营销"],
  [34, "电视剧营销", "《繁花》内容推广"],
  [36, "短剧营销", "《超时空罗曼史》整合营销"],
  [37, "短剧营销", "《献鱼》内容营销"],
  [38, "短剧营销", "《城主是我的》项目传播"],
  [40, "综艺营销", "《奔跑吧 2025》整合传播"],
  [41, "综艺营销", "《雪迷宫》节目推广"],
  [42, "综艺营销", "金典品牌节目合作"],
  [43, "电影营销", "动画电影内容营销"],
  [44, "品牌营销", "三星娱乐内容合作"],
  [45, "综艺营销", "芒果 IP 内容推广"],
  [46, "综艺营销", "《芒果新生班》整合营销"],
  [47, "综艺营销", "恋爱成长综艺传播"],
  [48, "综艺营销", "舞台艺人内容合作"],
  [49, "短剧营销", "《再次人生》短剧推广"],
  [50, "综艺营销", "芒果综艺内容共创"],
  [51, "品牌营销", "三星内容共创项目"],
  [52, "电视剧营销", "《武林外传》怀旧营销"],
  [53, "电视剧营销", "主创团队内容营销"],
  [56, "晚会营销", "招聘直播整合项目"],
  [57, "晚会营销", "京东品牌晚会传播"],
  [58, "晚会营销", "京东 618 开心夜"],
  [59, "晚会营销", "天猫双 11 惊喜夜"],
  [60, "晚会营销", "《鲜活唱游团》节目传播"],
  [61, "晚会营销", "搜狐时尚盛典"],
  [63, "艺人营销", "《另一面》音乐人推广"],
  [64, "艺人营销", "歌手舞台内容传播"],
  [65, "艺人营销", "艺人商务合作"],
  [66, "艺人营销", "音乐人新歌推广"],
  [67, "艺人营销", "主持人个人品牌营销"],
  [68, "艺人营销", "资深艺人商务合作"],
  [69, "艺人营销", "演员内容推广"],
  [70, "艺人营销", "青年演员商务合作"],
  [71, "艺人营销", "艺人整合营销"],
  [74, "品牌营销", "喜力啤酒内容营销"],
  [75, "品牌营销", "瑞幸咖啡娱乐营销"],
  [76, "品牌营销", "鸿星尔克品牌营销"],
  [77, "品牌营销", "达肤妍内容营销"],
  [78, "品牌营销", "OLAY 品牌内容合作"],
];

const services = [
  ["01", "影视内容营销", "电视剧、电影、综艺与短剧的全周期整合营销。"],
  ["02", "媒体矩阵投放", "微信、微博、抖音、小红书、视频号等多平台精准传播。"],
  ["03", "内容共创与二创", "联合达人与内容团队，生产更适合社交传播的创意内容。"],
  ["04", "品牌与艺人营销", "连接娱乐资源与商业价值，提供策略、创意和执行服务。"],
];

const matrix = [
  ["50+", "影视剪辑", "抖音 / 快手"],
  ["60+", "行业媒体", "微信 / 微博"],
  ["200+", "娱乐账号", "全平台"],
  ["30+", "剧情达人", "抖音 / 小红书"],
  ["20+", "艺人资源", "商务合作"],
  ["10", "原创栏目", "内容资产"],
];

const caseDetails: Record<number, { summary: string; result: string }> = {
  23: { summary: "深挖社会议题与普通人共鸣点，微博、抖音、快手、小红书多端协同，持续产出剧情解读和人物向爆款内容。", result: "微博阅读 3.2 亿 · 抖音相关播放 105 亿 · 热榜话题 123 个" },
  24: { summary: "围绕嘉宾观点、节目内容与线下活动提炼传播亮点，配合幕后内容和平台活动扩大文化类综艺影响力。", result: "微博阅读 6.4 亿+ · 抖音播放 9.5 亿+ · 全网曝光 3.5 亿+" },
  25: { summary: "运营官微与官博阵地，结合音乐人嘉宾和节目名场面持续产出高光内容，并用热点话题实现圈层破壁。", result: "主话题阅读 2 亿+ · 官微涨粉 2 万+ · 运营内容 398 条" },
  26: { summary: "结合选手特质、奥运节点和线下活动进行内容共创，联动权威媒体为啦啦队文化与青春体育精神背书。", result: "主话题播放 5 亿+ · 阅读 1221 万 · 图文视频直发 260 条" },
  27: { summary: "根据嘉宾关系和节目环节策划情感话题，通过创意活动、媒体助推和双平台内容运营持续制造讨论。", result: "微博播放 1.2 亿+ · 抖音播放 1.9 亿+ · 全网热搜 30+" },
  29: { summary: "构建微博、抖音、快手、小红书、视频号五端传播矩阵，以社会议题和角色共鸣持续生产高赞内容。", result: "微博热搜 769 次 · 抖音播放 53.4 亿 · 小红书浏览 1.2 亿" },
  30: { summary: "围绕都市女性议题和角色成长展开小红书深度传播，并联动主流媒体与影视 KOL 建立作品口碑。", result: "小红书主话题 31.9 亿 · 热点榜 21 次 · 腾讯热度最高 31558" },
  32: { summary: "以微博和小红书为核心阵地，投放剧情内容并运营角色账号，打造全程沉浸式追剧体验。", result: "微博话题 1200+ · 小红书浏览 10.7 亿+ · 官微粉丝 30 万+" },
  33: { summary: "从校园青春、师生关系与演员表现等维度拆解议题，兼顾热度制造和口碑维护。", result: "微博热搜 575+ · 豆瓣开分 8.4 · 头条主话题 9418.9 万" },
  34: { summary: "围绕喜剧名场面、角色反差和原声梗进行短视频爆款生产，持续推动全民二创与社交扩散。", result: "官方播放 6.6 亿 · 抖音播放 21.4 亿+ · 爆款视频 111 支" },
  36: { summary: "按开播、热播、收官三阶段配置 KOL 投放、艺人话题和评论区维护，持续引导剧情讨论与口碑沉淀。", result: "抖音主话题 5382.8 万 · 多话题登实时热点与娱乐榜" },
  37: { summary: "融合平台热点、官方二创活动与线下观影会，形成从线上种草到核心用户口碑验证的完整链路。", result: "抖音播放 6.7 亿+ · 爆款视频 28 条 · 观影好评率 96.2%" },
  38: { summary: "突出‘不只有苏也有爽’的差异化卖点，以系统任务、人物博弈和高甜剧情策划系列话题。", result: "抖音总播放 3.4 亿+ · 主话题 1.2 亿 · 实时热点 2 个" },
  40: { summary: "以艺人直播、女性力量内容和跨界品牌事件打造全民话题，并联动全国文旅与主流媒体扩大社会影响。", result: "全网热搜 15424+ · IP 播放 394.4 亿 · 小红书曝光 109 亿" },
  41: { summary: "围绕熟人群像、旅行体验与音乐内容持续提炼高共鸣话题，兼顾微博讨论和短视频高赞传播。", result: "微博阅读 76.5 亿+ · 抖音播放 41.7 亿 · 高热视频 301+" },
  42: { summary: "从职业精神与奋斗议题切入，整合微博大号、媒体机构和短视频内容，为节目立意建立权威背书。", result: "全网传播 23 亿+ · 热搜 560+ · 主流媒体 300+ 家" },
  43: { summary: "围绕十年 IP、嘉宾群像和情绪关系设计多角度议题，在微博、抖音、快手、小红书形成超长线传播。", result: "全网热搜 4027 个 · 微博累计阅读 343.9 亿 · 抖音播放 134 亿" },
  44: { summary: "以哥哥群像、舞台表现和文旅联动持续制造内容事件，并通过专访和主流媒体报道深化节目价值。", result: "全网热搜 6878+ · 微博阅读 201.4 亿 · 万赞内容 2785+" },
  45: { summary: "围绕女性成长、职场与亲密关系提炼高共鸣话题，同时用多维榜单表现强化节目热度认知。", result: "全网热搜 1775+ · 微博热搜 841+ · 多平台榜单 TOP1" },
  46: { summary: "聚焦演员表演、导师点评和节目反差名场面，快速将内容转化为高位热搜与短视频爆款。", result: "全网热搜 400+ · 微博热搜 270+ · 万赞内容 46+" },
  47: { summary: "从女性审美、母女关系与明星妆造切入，兼顾节目价值表达、收视表现和多平台话题传播。", result: "全网热搜 95+ · 微博相关阅读 7.9 亿 · 抖音阅读 4.1 亿+" },
  48: { summary: "围绕音乐舞台、艺人个性和幕后内容持续策划高位话题，用短视频爆款带动节目收视与讨论。", result: "全网热搜 2659+ · 微博阅读新增 29 亿 · 10 万赞视频 125 个" },
  49: { summary: "围绕嘉宾择偶观、情感选择和节目关系线设计社交议题，推动话题登上微博与抖音高位榜单。", result: "微博阅读 1.2 亿 · 多平台热搜 14 个 · 抖音热点最高 TOP4" },
  50: { summary: "以慢综群像和生活情绪为主线，联动直播陪看、环球时报共创及收官口碑话题，强化用户参与。", result: "全网热搜 1082+ · 万赞视频 153+ · 小红书曝光 1.12 亿" },
  51: { summary: "围绕旅行体验与嘉宾互动进行跨平台内容运营，兼顾收视、榜单热度和短视频种草效率。", result: "全网热搜 1419+ · 全网阅读 25 亿+ · 短视频曝光 18 亿+" },
  52: { summary: "持续运营节目官号，批量生产高光片段和创意平面，并通过朋友圈及异业合作拓展传播触点。", result: "微博阅读 2.1 亿+ · 高光卡段 96 条 · 创意平面 31 组" },
  53: { summary: "从名师内容和语文教育价值切入，结合直播、大屏和权威媒体传播，推动文化议题破圈。", result: "全网播放 12 亿+ · 全网涨粉 100 万+ · 媒体助力 400+ 家" },
  55: { summary: "以春晚高光、地域文化和国际嘉宾内容进行多维传播，联动主流媒体与名家解读维持节目口碑。", result: "全网热搜 2033+ · 全网曝光 104 亿 · CVB 省级卫视 TOP1" },
  56: { summary: "预埋现场互动和嘉宾话题，依据赛事直播内容实时生产热点，实现微博、抖音、快手等多平台同步冲榜。", result: "全平台上榜 202 个 · 抖音播放 5.8 亿 · 快手互动 14.5 万+" },
  57: { summary: "围绕舞台内容、嘉宾表达和跨年情绪策划高能话题，并以主流媒体解读稳固晚会价值与口碑。", result: "双榜热搜 501+ · 短视频播放 84.3 亿 · 省级卫视收视第一" },
  58: { summary: "结合晚会阵容、电商节点与艺人内容密集发酵，在微博及短视频平台形成持续 14 天的传播周期。", result: "全网热搜 582+ · 话题浏览 83.4 亿 · 微博阅读 50 亿+" },
  59: { summary: "围绕艺人阵容、舞台和品牌福利构建直播晚会传播矩阵，以微博高位热搜带动全网观看。", result: "全网热搜 1600+ · 话题浏览 132 亿 · 全网播放 9 亿+" },
  60: { summary: "以节目单、嘉宾舞台和跨年倒计时为内容核心，实现长时热搜占位与全域收视领先。", result: "全网热搜 2193+ · 话题阅读 200 亿+ · 在榜时长 1000 小时+" },
  61: { summary: "针对红毯造型和明星采访预埋话题，通过抖音、快手高密度冲榜放大时尚事件影响力。", result: "短视频上榜 235 次 · 抖音阅读近 11 亿 · 快手上榜 164 个" },
  63: { summary: "覆盖巡演票务节点、现场脚本、短视频物料、纪录片及媒体发稿，统筹国内外站次线上线下执行。", result: "已执行国内外巡演 20 站+ · 全国及海外资源整合曝光" },
  64: { summary: "围绕《歌手 2024》舞台与个人巡演同步策划话题、冲榜和物料，并以城市资源辅助票务转化。", result: "全网登榜破百 · 微博双榜 TOP1 · 巡演执行 13 场+" },
  65: { summary: "从职场、亲情、友情和金句四条内容线塑造艺人形象，配合舆情预埋实现多平台持续上榜。", result: "全网曝光 10 亿+ · 热搜 100+ · 多平台涨粉 5 万+" },
  66: { summary: "联动综艺首秀、新歌上线和高考社会热点，为音乐作品配置直播互动、物料投放和节点传播。", result: "音乐平台热度 999+ · 高考话题登抖音热榜 · 热度 300 万+" },
  67: { summary: "以《狂飙》陈书婷角色为核心，围绕气场、演技、妆造和经典台词强化角色与艺人双向认知。", result: "全平台涨粉 800 万+ · 热搜 600+ · 抖音播放 50 亿+" },
  68: { summary: "结合《繁花》范总角色亮点和艺人过往形象，生产表情包、创意图、混剪及人物专访内容。", result: "全平台涨粉 25 万+ · 个人话题播放 13 亿+ · 多家权威媒体专访" },
  69: { summary: "围绕多部作品与活动节点设计差异化话题，持续强化演技派、硬汉和有趣灵魂的公众形象。", result: "《突围》期间相关榜单 25 个 · 话题阅读 10 亿+" },
  70: { summary: "将新作角色与经典荧屏形象趣味联动，通过作品讨论和时尚内容塑造少年感、正能量人设。", result: "百度指数峰值 60 万+ · 核心话题阅读 3.3 亿 · 热搜 TOP4" },
  71: { summary: "围绕综艺与剧集核心卖点持续制作预热、更新和总结物料，通过多平台口碑维护强化艺人形象。", result: "覆盖多档重点项目 · 完成全周期内容输出与口碑维护" },
  74: { summary: "借势音乐节热点，将品牌展位、乐迷场景与‘快乐文化’自然植入内容，强化喜力与音乐体验的关联。", result: "项目播放 800 万+ · 单条最高 56 万+" },
  75: { summary: "结合平台热点与直播内容，用年轻化人物和场景表达瑞幸的活力时尚形象，提升直播关注。", result: "主话题播放 313.9 万 · 单条视频播放 72.8 万" },
  76: { summary: "强化‘为国民运动而生’定位，将国货担当、爱国情怀与高性价比技术优势转化为传播内容。", result: "总播放 8004.2 万 · 单条播放 154.2 万 · 总点赞 40.55 万" },
  77: { summary: "以藏区女性肌肤健康真实故事建立情感共鸣，结合公益传播自然植入产品修护价值。", result: "总曝光 185 万+ · 完播率 80% · 品牌搜索提升 25%" },
  78: { summary: "借势体育赛事和孙颖莎影响力，以坚持、自信和美丽的故事内容传递 OLAY 品牌温度。", result: "主话题播放 2000 万+ · 单条点赞 8 万+ · 完播率 94%" },
};

export default function Home() {
  const [visibleCases, setVisibleCases] = useState(0);
  const loadSize = 8;
  const remainingCases = moreWork.length - visibleCases;

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="烹小鲜首页">
          <span className="logo-icon"><i /><i /><i /></span>
          <span className="brand-text"><strong>烹小鲜</strong><small>PENGXIAOXIAN MEDIA</small></span>
        </a>
        <nav aria-label="主导航">
          <a href="#cases">案例</a>
          <a href="#services">服务</a>
          <a href="#matrix">内容矩阵</a>
          <a href="#about">关于</a>
        </nav>
        <a className="black-button" href="#contact">开始合作 <span>→</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-haze haze-left" />
        <div className="hero-haze haze-right" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="badge"><i /> 2014—2025 娱乐内容营销机构</p>
            <h1>
              让好内容<br />
              被 <em>看见</em>、被 <em>讨论</em>、<br />
              再被 <mark>记住</mark>。
            </h1>
            <p className="hero-lead">
              我们是聚焦影视娱乐与 MCN 的内容营销机构。从行业洞察到内容共创，
              从媒体矩阵到数据复盘，为每一部作品搭建属于它自己的舆论现场。
            </p>
            <div className="hero-actions">
              <a className="green-button" href="#cases">查看代表案例 <span>→</span></a>
              <a className="text-link" href="#contact">预约营销顾问</a>
            </div>
          </div>

          <aside className="live-card">
            <span className="live-label">CONTENT NETWORK</span>
            <h2>娱乐内容<br /><em>影响力网络</em></h2>
            <div className="live-metrics">
              <div><small>自营账号</small><strong>300+</strong></div>
              <div><small>合作媒体</small><strong>100+</strong></div>
              <div><small>原创栏目</small><strong>10</strong></div>
              <div><small>精准粉丝</small><strong>2.3亿+</strong></div>
            </div>
            <div className="live-glow" />
          </aside>

          <div className="platforms">
            <strong>全平台内容矩阵</strong>
            <span>微信</span><span>微博</span><span>抖音</span><span>小红书</span>
            <span>视频号</span><span>快手</span><span>B站</span>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="核心数据">
        <div><strong>10<sup>年+</sup></strong><span>深耕影视娱乐行业</span></div>
        <div><strong>300<sup>+</sup></strong><span>自营新媒体账号</span></div>
        <div><strong>50<sup>万+</sup></strong><span>影视从业者覆盖</span></div>
        <div><strong>200<sup>+</sup></strong><span>专业团队成员</span></div>
      </section>

      <section className="featured section" id="cases">
        <div className="section-head">
          <div><p className="eyebrow">FEATURED WORK</p><h2>让作品自己发声。</h2></div>
          <a href="#case-library">PPT 案例库 · {moreWork.length + work.length} 条 <span>↓</span></a>
        </div>
        <div className="featured-grid">
          <article className="work-card work-main">
            <img src={work[0].image} alt={work[0].title} />
            <div className="work-overlay" />
            <div className="work-copy"><span>{work[0].type}</span><h3>{work[0].title}</h3></div>
          </article>
          <div className="work-side">
            {work.slice(1).map((item) => (
              <article className="work-card work-small" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="work-overlay" />
                <div className="work-copy"><span>{item.type}</span><h3>{item.title}</h3></div>
              </article>
            ))}
          </div>
        </div>
        <div className="work-notes" id="more-cases">
          {work.map((item) => (
            <div key={item.title}><p>{item.note}</p><strong>{item.result}</strong></div>
          ))}
        </div>
        <div className="case-library" id="case-library">
          {visibleCases > 0 && (
            <div className="case-library-grid">
              {moreWork.slice(0, visibleCases).map(([page, type, title]) => (
              <article key={page}>
                <div className="library-media">
                  <img src={`/cases/case-${page}.jpg`} alt={`${title}案例视觉`} />
                  <span>{String(page).padStart(2, "0")}</span>
                </div>
                <p className="library-type">{type}</p>
                <h3>{title}</h3>
                <p className="library-description">{caseDetails[Number(page)]?.summary}</p>
                <strong className="library-result">{caseDetails[Number(page)]?.result}</strong>
              </article>
              ))}
            </div>
          )}
          {remainingCases > 0 && (
            <button
              className="load-more"
              type="button"
              onClick={() => setVisibleCases((count) => Math.min(count + loadSize, moreWork.length))}
            >
              {visibleCases === 0
                ? `查看更多案例（共 ${moreWork.length} 条）`
                : `继续加载（剩余 ${remainingCases} 条）`}
              <span>↓</span>
            </button>
          )}
          {visibleCases === moreWork.length && (
            <p className="all-loaded">已展示全部 {moreWork.length + work.length} 条案例</p>
          )}
        </div>
      </section>

      <section className="services section" id="services">
        <div className="service-intro">
          <div><p className="eyebrow">WHAT WE DO</p><h2>四个环节，<br />一支专攻内容的团队。</h2></div>
          <p>从策略、投放、内容共创到复盘，我们把“让作品被看见”拆解成可执行、可衡量的每一步。</p>
        </div>
        <div className="service-grid">
          {services.map(([num, title, text], index) => (
            <article className={index === 3 ? "active" : ""} key={num}>
              <span>{num}</span><i>↗</i><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="matrix section" id="matrix">
        <div className="matrix-copy">
          <p className="eyebrow">CONTENT MATRIX</p>
          <h2>全平台资源，<br />覆盖内容全链路。</h2>
          <p>自营账号与行业合作媒体共同构成烹小鲜的内容网络。策略、创意、投放和数据分析由专业团队协同推进。</p>
          <div className="matrix-actions">
            <a className="green-button" href="#contact">获取合作方案</a>
            <a className="outline-button" href="#about">了解烹小鲜</a>
          </div>
        </div>
        <div className="matrix-grid">
          {matrix.map(([value, name, platform], index) => (
            <article className={index === 0 || index === 4 ? "tint" : ""} key={name}>
              <strong>{value}</strong><span>{name}</span><small>{platform}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="about-strip" id="about">
        <p className="eyebrow">ABOUT PENGXIAOXIAN</p>
        <h2>创立于 2014 年，持续深耕影视娱乐行业的内容研发与资源整合。</h2>
        <p>我们相信，传播不只是制造一次热度，而是为作品建立可以被理解、被讨论和被记住的内容资产。</p>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">LET&apos;S TALK</p>
          <h2>有一部作品，<br />想让更多人看见？</h2>
          <p>留下项目需求，我们将为你匹配合适的内容营销方案。</p>
        </div>
        <div className="contact-card">
          <div><small>联系电话</small><strong>18210793777</strong></div>
          <div><small>服务方向</small><strong>影视 · 综艺 · 短剧 · 艺人 · 品牌</strong></div>
          <div><small>工作地点</small><strong>北京</strong></div>
          <a href="tel:18210793777">拨打联系电话 <span>→</span></a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">
          <span className="logo-icon"><i /><i /><i /></span>
          <span className="brand-text"><strong>烹小鲜</strong><small>PENGXIAOXIAN MEDIA</small></span>
        </a>
        <span>© 2025 烹小鲜文化传媒. All rights reserved.</span>
        <div><a href="#">微信公众号</a><a href="#">视频号</a><a href="#">微博</a><a href="#">抖音</a></div>
      </footer>
    </main>
  );
}
