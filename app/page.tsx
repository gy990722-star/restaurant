import type { SpaceSlide } from "@/components/SpaceCarousel";
import { SpaceCarousel } from "@/components/SpaceCarousel";

const slides: SpaceSlide[] = [
  {
    src: "/images/dining-hall.webp",
    alt: "墨蓝墙面与暖铜灯光交织的燧里主餐区，圆桌整齐陈设",
    title: "主餐区",
    description: "开阔 · 温暖 · 适合相聚",
  },
  {
    src: "/images/charcoal-bar.webp",
    alt: "面对炭火开放厨房的长吧台，青瓷餐具沿木质台面排列",
    title: "炭火吧台",
    description: "十二席 · 近观火候",
  },
  {
    src: "/images/tea-courtyard.webp",
    alt: "圆形月洞窗外是松石小庭，室内长桌陈设青瓷茶具",
    title: "茶庭包间",
    description: "八至十席 · 清静私享",
  },
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand${footer ? " brand--footer" : ""}`} href="#top" aria-label="燧里首页">
      {!footer && (
        <svg className="brand-mark" viewBox="0 0 42 42" aria-hidden="true">
          <circle cx="21" cy="21" r="19" />
          <path d="M21 9c4 5-1 7 3 11 2 2 5 3 5 7 0 5-4 8-9 8s-9-3-9-8c0-4 3-7 7-9-1 4 1 6 3 7-1-5 3-8 0-16Z" />
        </svg>
      )}
      <span className="brand-name">燧里</span>
      <span className="brand-sub">SUI LI</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">跳至主要内容</a>

      <header className="site-header">
        <Brand />
        <nav className="nav" aria-label="主导航">
          <a href="#story">理念</a>
          <a href="#spaces">空间</a>
          <a href="#menu">菜单</a>
        </nav>
        <a className="booking booking--header" href="tel:+862188062718">预订席位</a>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">现代炭火粤菜 · 上海</p>
            <h1 id="hero-title">一味入火，<br /><em>一席入心。</em></h1>
            <p className="hero-intro">我们循着岭南的时令与烟火，以炭火唤醒食材本味。开放厨房里的每一道火光，都是今晚的序章。</p>
            <div className="hero-actions">
              <a className="booking" href="tel:+862188062718">致电预订 <span>021 8806 2718</span></a>
              <a className="text-link" href="#menu">查看本季菜单 <span aria-hidden="true">↘</span></a>
            </div>
          </div>
          <aside className="hero-note" aria-label="营业时间">
            <span>晚市</span><strong>17:30—23:00</strong><small>周一店休</small>
          </aside>
          <div className="scroll-cue" aria-hidden="true"><span />向下</div>
        </section>

        <section className="story section" id="story" aria-labelledby="story-title">
          <div className="section-label"><span>我们的火候</span></div>
          <div className="story-lead">
            <p className="kicker">守味，也造味</p>
            <h2 id="story-title">火不是调料，<br />是我们理解食材的方式。</h2>
          </div>
          <div className="story-body">
            <p>从荔枝木的清香，到龙眼木的沉稳，每一种炭都有自己的性情。厨师在咫尺火光间，判断温度、距离与时间，让乳鸽皮脆肉润，让海鲜留住潮汐般的鲜甜。</p>
            <p>菜单随二十四节气细微更替。我们尊重传统味型，也不把传统封存于旧日；一碟、一盅、一炉，都是今天的岭南。</p>
            <div className="seal" aria-hidden="true"><span>火</span><small>与<br />时</small></div>
          </div>
        </section>

        <section className="spaces" id="spaces" aria-labelledby="spaces-title">
          <div className="spaces-head">
            <div><p className="kicker">席间有景</p><h2 id="spaces-title">三种空间，<br />三种相聚的温度。</h2></div>
            <p>从谈笑相聚，到近观炉火，再到一室清寂。每一席都留有恰好的距离。</p>
          </div>
          <SpaceCarousel slides={slides} />
        </section>

        <section className="menu section" id="menu" aria-labelledby="menu-title">
          <div className="section-label"><span>本季之味</span></div>
          <div className="menu-intro">
            <p className="kicker">夏 · 小暑</p>
            <h2 id="menu-title">跟着南风，<br />吃一口清鲜。</h2>
            <p>餐厅菜单每六周一换，以下为本季代表菜。食材可能因当日海获与农场收成微调。</p>
          </div>
          <div className="menu-list">
            <article><span className="menu-no">壹</span><div><h3>荔枝木烧乳鸽</h3><p>十八日乳鸽 · 桂花梅酱 · 沙姜盐</p></div><strong>¥ 168</strong></article>
            <article><span className="menu-no">贰</span><div><h3>炭烤黄皮鱼</h3><p>潮汕黄皮 · 紫苏 · 九年陈皮</p></div><strong>¥ 238</strong></article>
            <article><span className="menu-no">叁</span><div><h3>丝瓜白贝清汤</h3><p>胜瓜 · 白贝 · 顺德鱼腐</p></div><strong>¥ 88</strong></article>
            <article><span className="menu-no">肆</span><div><h3>姜花椰香冻</h3><p>野姜花 · 椰青 · 新会柑</p></div><strong>¥ 58</strong></article>
          </div>
        </section>

        <section className="visit" aria-labelledby="visit-title">
          <p className="kicker">今晚，燧里见</p>
          <h2 id="visit-title">留一席，<br />等一炉火正好。</h2>
          <a className="booking booking--light" href="tel:+862188062718">致电预订 <span>021 8806 2718</span></a>
          <div className="visit-info">
            <div><span>地址</span><p>上海市徐汇区永嘉路 271 弄 8 号</p></div>
            <div><span>营业</span><p>周二至周日 17:30—23:00</p></div>
            <div><span>交通</span><p>地铁 1 / 10 / 12 号线陕西南路站</p></div>
          </div>
        </section>
      </main>

      <footer>
        <Brand footer />
        <p>一席粤味，一炉新火。</p>
        <p className="copyright">© 2026 燧里餐厅</p>
      </footer>
    </>
  );
}
