import React from "react";

// ----------------------
// Theme & Content (DATA)
// ----------------------
const BRAND = {
  name: "JoyVoyage",
  primary: "#EE1D52", // TikTok Pink accent
  dark: "#000000",
  light: "#ffffff",
};

const LINKS = {
  line: "https://line.me/R/ti/p/@786bdyyp?oat_content=qr#~",
  entry: "#apply",
  instagram: "https://www.instagram.com/",
  x: "https://x.com/",
  tiktok: "https://www.tiktok.com/",
  contact: "#contact",
  company: "#company",
  privacy: "#privacy",
};

const CREATORS = [
  { name: "しろ", handle: "@x_v0_", img: "/illustrations/1.jpg" },
  { name: "おまめちゃあん", handle: "@omame", img: "/illustrations/2.jpg" },
  { name: "かのん", handle: "@nyan", img: "/illustrations/3.jpg" },
  { name: "わたあめちゃん", handle: "@wataame", img: "/illustrations/4.jpg" },
  { name: "かるちゃん", handle: "@karu", img: "/illustrations/5.jpg" },
  { name: "mayu", handle: "@mayu", img: "/illustrations/6.jpg" },
  { name: "Hinako", handle: "@hina", img: "/illustrations/7.jpeg" },
  { name: "美星", handle: "@mihoshi", img: "/illustrations/8.jpeg" },
];

const PROBLEMS = [
  { title: "稼げるイメージが湧かない", img: "/illustrations/problem-earn.png" },
  { title: "長時間配信でメンタルが心配", img: "/illustrations/problem-mental.png" },
  { title: "仕事/子育てと両立できる?", img: "/illustrations/problem-balance.png" },
  { title: "顔出しに抵抗がある…", img: "/illustrations/problem-face.png" },
  { title: "何を話せばいい?", img: "/illustrations/problem-talk.png" },
];

const STATS = [
  { title: "ライブ配信のトップ代理店", icon: "/illustrations/stat-agency.png" },
  { title: "TikTok売上 1位継続", icon: "/illustrations/stat-top.png" },
  { title: "世界4拠点で展開", icon: "/illustrations/stat-globe.png" },
  { title: "約11社と業務提携", icon: "/illustrations/stat-handshake.png" },
];

const SUPPORT = [
  { title: "メンタルフォロー万全", body: "専属マネージャーが24時間いつでも相談OK。", icon: "/illustrations/support-mental.png" },
  { title: "初心者でも稼げるノウハウ", body: "プラットフォーム出身のプロが運用を徹底指導。", icon: "/illustrations/support-knowhow.png" },
  { title: "案件/メディア出演多数", body: "PR案件、雑誌・広告モデルへの道も。", icon: "/illustrations/support-media.png" },
  { title: "確定申告/税務も安心", body: "顧問税理士と提携しバックアップ。", icon: "/illustrations/support-tax.png" },
];

// ▼ 画像ベースの新サポート配列（送っていただく実画像で差し替え）
const SUPPORT_MEDIA = [
  // 例: { title: "24時間サポート", body: "困ったらすぐ相談", img: "/illustrations/support/24h.jpg" },
];

// ▼ 追加のベネフィット（アイコンタイル）
const BENEFITS = [
  { title: "TikTok専属チーム", icon: "📊" },
  { title: "マネージャーサポート", icon: "🎧" },
  { title: "トラフィック支援", icon: "📈" },
  { title: "PK配信サポート", icon: "🤝" },
  { title: "報酬還元100%", icon: "💴" },
  { title: "事務所ボーナス", icon: "🎁" },
  { title: "1週間以内現金化", icon: "⏱️" },
  { title: "事務所イベント", icon: "🏆" },
  { title: "費用なし", icon: "⭕" },
  { title: "TikTok LIVE", icon: "📺" },
  { title: "税務サポート", icon: "🧮" },
];

const COMMERCE_POINTS = [
  "スマホひとつで好きなことを仕事に",
  "ファッション/コスメの発信で活躍",
  "販売スキルを身につける",
  "フォロワーを増やして次へ繋ぐ",
];

const TESTIMONIALS = [
  {
    name: "Hinako",
    tags: ["#TikToker", "#フルートライバー", "#ママライバー"],
    img: "/illustrations/voice-01.png",
    quote: "初月でギフトを大きく達成！専属マネージャーのおかげで配信が楽しい！",
  },
  {
    name: "かのん",
    tags: ["#TikToker", "#イベントガチ勢"],
    img: "/illustrations/voice-02.png",
    quote: "丁寧な説明で安心して所属を決めました。",
  },
];

// ✅ FAQ: 改行を含むためテンプレートリテラル（バッククォート）を使用
const FAQ = [
  {
    q: "ライブ配信が初めてなのですが大丈夫ですか？",
    a: `お問い合わせいただく方の８割は初めて配信を始める方です。
初心者の方でも安心して配信できるように当事務所一同全力でサポート致します！`,
  },
  {
    q: "どんなことを配信すればいいですか？",
    a: `配信内容は、日々あったことや最近ハマっていること、趣味、など話したいことで大丈夫です！
少し配信しているとリスナーさんからコメントが来るので、是非リスナーさんのコメントと会話してみてください。`,
  },
  {
    q: "仕事をしながらでも大丈夫ですか？",
    a: `もちろん可能です！ 本業の内容など伺いながら配信ペースなどを調整してスタート出来ます`,
  },
  {
    q: "所属するにあたり料金は発生しますか？",
    a: `所属するにあたっては料金は一切発生いたしませんのでご安心ください！仮に辞めたい時でもいつでも辞めることも可能ですし違約金等はございません。お気軽にご応募ください。`,
  },
];

// 自動リダイレクト秒数（完了画面）
const THANKYOU_REDIRECT_SECONDS = 6;

// ✅ CSS変数オブジェクト（TS/JSXでも安全な記法）
const THEME_CSS_VARS = {
  "--accent": BRAND.primary,
  "--accent2": "#69C9D0",
  "--brand-dark": BRAND.dark,
  "--brand-light": BRAND.light,
};

// ----------------------
// Helpers
// ----------------------
function normalizePathname(pathname) {
  return (pathname || "").replace(/\/+/g, "/").replace(/\/+$/, "");
}

// ----------------------
// Dev Self-Tests (runtime assertions)
// ----------------------
(function runSelfTests() {
  try {
    const sets = { CREATORS, PROBLEMS, STATS, SUPPORT, TESTIMONIALS, FAQ, SUPPORT_MEDIA, BENEFITS };
    console.assert(Object.values(sets).every(Array.isArray), "[TEST] All data sets must be arrays");
    console.assert(Array.isArray(SUPPORT_MEDIA), "[TEST] SUPPORT_MEDIA is array");
    if (SUPPORT_MEDIA.length)
      console.assert(SUPPORT_MEDIA.every((it) => typeof it.img === "string" && typeof it.title === "string"), "[TEST] SUPPORT_MEDIA items need img & title");
    console.assert(Array.isArray(BENEFITS) && BENEFITS.length >= 6, "[TEST] BENEFITS should have items");
    console.assert(CREATORS.length >= 1, "[TEST] CREATORS should not be empty");
    console.assert(typeof ThankYouPage === "function", "[TEST] ThankYouPage component exists");
    console.assert(Number.isInteger(THANKYOU_REDIRECT_SECONDS) && THANKYOU_REDIRECT_SECONDS > 0, "[TEST] Redirect seconds configured");
    // 追加テスト: FAQのq/aは文字列
    console.assert(FAQ.every((f) => typeof f.q === "string" && typeof f.a === "string"), "[TEST] FAQ items must have q/a strings");
    // 追加テスト: CSS変数オブジェクトのキー存在
    ["--accent", "--accent2", "--brand-dark", "--brand-light"].forEach((k) => {
      console.assert(typeof THEME_CSS_VARS[k] === "string" && THEME_CSS_VARS[k].length > 0, `[TEST] Missing theme var ${k}`);
    });
    // 追加テスト: パス正規化
    console.assert(normalizePathname("/thank-you///") === "/thank-you", "[TEST] normalizePathname trims trailing slashes");
    console.assert(normalizePathname("//a///b//") === "/a/b", "[TEST] normalizePathname collapses repeats");

    console.log("[TEST] Self-tests passed ✔");
  } catch (e) {
    console.error("[TEST] Self-tests error:", e);
  }
})();

// ----------------------
// Utilities
// ----------------------
function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {title && (
          <header className="mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">{title}</h2>
            {subtitle && <p className="mt-3 text-gray-300 md:text-lg">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-block rounded-full text-xs font-semibold px-3 py-1" style={{ backgroundColor: "rgba(238,29,82,.12)", color: "var(--accent)" }}>
      {children}
    </span>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a href={href} className="inline-flex items-center justify-center rounded-xl text-white font-semibold px-5 py-3 shadow-sm transition hover:opacity-90" style={{ backgroundColor: "var(--accent)" }}>
      {children}
    </a>
  );
}

function GhostButton({ href, children }) {
  return (
    <a href={href} className="inline-flex items-center justify-center rounded-xl font-semibold px-5 py-3 transition hover:opacity-90 border" style={{ color: "var(--accent)", borderColor: "var(--accent)", backgroundColor: "rgba(238,29,82,.08)" }}>
      {children}
    </a>
  );
}

function Card({ children }) {
  return <div className="rounded-2xl border p-6 shadow-sm bg-neutral-900/70 border-white/10">{children}</div>;
}

// ----------------------
// Main Component
// ----------------------
export default function NextwaveLikeSite() {
  // Robust thank-you detection: /thank-you, /thank-you/, and ?thank-you=1
  const path = typeof window !== "undefined" ? normalizePathname(window.location.pathname) : "";
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
  if (path === "/thank-you" || params.has("thank-you")) {
    return <ThankYouPage />;
  }

  return (
    <div className="min-h-screen bg-black text-white" style={THEME_CSS_VARS}>
      <Header />
      <Hero />
      <Creators />
      <Problems />
      <About />
      <Support />
      <Commerce />
      <WorkStyles />
      <Voices />
      <ApplyCTA />
      <Flow />
      {/* ▼ お問い合わせフォーム（#contact） */}
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

// ----------------------
// Sections
// ----------------------
function Header() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src="/illustrations/logo.svg" alt="logo" className="h-8 w-auto" />
          <span className="font-extrabold text-lg tracking-tight">{BRAND.name}</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#creators" className="hover:text-white">クリエイター</a>
          <a href="#problems" className="hover:text-white">お悩み</a>
          <a href="#about" className="hover:text-white">{BRAND.name}とは</a>
          <a href="#support" className="hover:text-white">サポート</a>
          <a href="#commerce" className="hover:text-white">新しい働き方</a>
          <a href="#voices" className="hover:text-white">声</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <GhostButton href={LINKS.line}>LINEで相談</GhostButton>
          <PrimaryButton href={LINKS.entry}>エントリー</PrimaryButton>
        </div>
        <div className="md:hidden">
          <a href={LINKS.entry} className="rounded-xl px-3 py-2 text-sm text-white" style={{ backgroundColor: "var(--accent)" }}>
            エントリー
          </a>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-black">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Badge>ライブ配信を始めるなら</Badge>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">{BRAND.name} があなたの夢をカタチに</h1>
          <p className="mt-5 text-gray-300 md:text-lg">
            ライブ配信初心者からトップライバーまで、{BRAND.name} が全力で伴走。
            無料相談で最適なスタートを切りましょう。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href={LINKS.line}>まずはLINEで無料相談</PrimaryButton>
            <GhostButton href={LINKS.entry}>エントリーはこちら</GhostButton>
          </div>
          <div className="mt-6 flex gap-4 text-gray-400">
            <a href={LINKS.instagram} aria-label="Instagram" className="hover:text-white">
              Instagram
            </a>
            <a href={LINKS.x} aria-label="X" className="hover:text-white">
              X
            </a>
            <a href={LINKS.tiktok} aria-label="TikTok" className="hover:text-white">
              TikTok
            </a>
          </div>
        </div>
        <div className="relative">
          <img src="/illustrations/promo-movie.mp4" alt="ライブ配信のイラスト" className="w-full max-w-xl mx-auto drop-shadow" />
          {/* Cyan glow */}
          <div className="absolute -z-10 blur-3xl opacity-25" style={{ inset: "-20% auto auto -20%", width: "60%", height: "60%", background: "radial-gradient(60% 60% at 50% 50%, var(--accent2), transparent)" }} />
        </div>
      </div>
    </section>
  );
}

function Creators() {
  return (
    <Section id="creators" title="活躍中のクリエイターたち" subtitle="音楽・トーク・料理・コスメ…得意分野を活かして活躍中！">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {CREATORS.map((c, i) => (
          <li key={i}>
            <Card>
              <img src={c.img} alt={c.name} className="h-36 w-full object-cover rounded-xl" />
              <div className="mt-4">
                <div className="font-semibold text-white">{c.name}</div>
                <div className="text-gray-400 text-sm">{c.handle}</div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Problems() {
  return (
    <Section id="problems" title="こんなお悩みありませんか？">
      <ul className="grid md:grid-cols-5 gap-4">
        {PROBLEMS.map((p, i) => (
          <li key={i}>
            <Card>
              <img src={p.img} alt="" className="h-20 w-20 object-contain" />
              <div className="mt-3 font-semibold text-white">{p.title}</div>
            </Card>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-gray-300">どんな不安にも寄り添い、{BRAND.name} が解決へ導きます。</div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" title={`${BRAND.name}とは？`} subtitle="ライブ配信特化の支援体制で未経験からでも成長をサポート。">
      <ul className="grid md:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <li key={i}>
            <Card>
              <img src={s.icon} alt="" className="h-14 w-14 object-contain" />
              <div className="mt-3 font-semibold text-white">{s.title}</div>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Support() {
  // 参考デザイン適用：
  // 1) 3カラムの“額縁カード”（321の特徴風）
  const FEATURE_CARDS = [
    { title: "マネージャー制", body: "ライバー1人1人にマネージャーが付き、継続伴走。", emoji: "🤝" },
    { title: "高還元率", body: "事務所所属でもフリーと変わらない水準のバック率。", emoji: "💴" },
    { title: "オリジナルイベント多", body: "所属限定の定期イベントを開催。大型表彰やFES形式も。", emoji: "🎉" },
  ];

  return (
    <Section id="support" title={`${BRAND.name}がサポートします！`} subtitle="“続けやすさ”と“伸びやすさ”に直結する仕組みを用意しています。">
      {/* 額縁カード */}
      <ul className="grid md:grid-cols-3 gap-6">
        {FEATURE_CARDS.map((f, i) => (
          <li key={i}>
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl border-2" style={{ borderColor: "var(--accent2)" }} />
              <div className="relative rounded-2xl border border-white/10 bg-neutral-900/70 p-8 text-center">
                <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full" style={{ background: "var(--accent2)", color: "#111" }}>
                  {f.emoji}
                </div>
                <div className="font-extrabold text-white text-xl">{f.title}</div>
                <p className="mt-3 text-gray-300 text-sm leading-relaxed">{f.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* 画像タイル（SUPPORT_MEDIA があれば表示） */}
      {SUPPORT_MEDIA.length > 0 && (
        <div className="mt-10">
          <h3 className="text-lg font-bold text-white mb-3">サポート実例</h3>
          <ul className="grid md:grid-cols-3 gap-4">
            {SUPPORT_MEDIA.map((s, i) => (
              <li key={i}>
                <div className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/10">
                  <img src={s.img} alt={s.title} className="w-full h-44 object-cover" />
                  <div className="absolute left-3 bottom-3 rounded-xl bg-white text-black px-3 py-1 text-sm font-semibold">{s.title}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* アイコンタイル */}
      <div className="mt-12">
        <h3 className="text-lg font-bold text-white mb-3">提供メニュー</h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {BENEFITS.map((b, i) => (
            <li key={i}>
              <div className="relative rounded-2xl p-4 text-center shadow" style={{ background: "var(--accent2)", color: "#0c0c0c", boxShadow: "6px 6px 0 rgba(0,0,0,.35)" }}>
                <div className="text-2xl mb-1">{b.icon}</div>
                <div className="text-sm font-bold">{b.title}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function Commerce() {
  return (
    <Section id="commerce" title="TikTok Shopでの新しい働き方" subtitle="投げ銭だけじゃない“コマーサー”という選択肢。">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img src="/illustrations/commerce.png" alt="コマースのイラスト" className="w-full max-w-md" />
        <div>
          <ul className="space-y-3 list-disc list-inside text-gray-300">
            {COMMERCE_POINTS.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <PrimaryButton href={LINKS.line}>LINEで相談</PrimaryButton>
            <GhostButton href={LINKS.entry}>エントリー</GhostButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

function WorkStyles() {
  return (
    <Section id="workstyles" title="ライバー or コマーサー どちらの働き方を選ぶ？">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center gap-4">
            <img src="/illustrations/streamer.png" className="h-14 w-14" alt="ライバー" />
            <div>
              <div className="font-bold text-lg text-white">ライバー</div>
              <p className="text-gray-300">ライブ配信でファン作りをする</p>
            </div>
          </div>
          <div className="mt-4">
            <PrimaryButton href={LINKS.entry}>ライバーで応募</PrimaryButton>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-4">
            <img src="/illustrations/commercer.png" className="h-14 w-14" alt="コマーサー" />
            <div>
              <div className="font-bold text-lg text-white">コマーサー</div>
              <p className="text-gray-300">好きなものを紹介して販売する</p>
            </div>
          </div>
          <div className="mt-4">
            <PrimaryButton href={LINKS.entry}>コマーサーで応募</PrimaryButton>
          </div>
        </Card>
      </div>
    </Section>
  );
}

function Voices() {
  return (
    <Section id="voices" title="所属クリエイターの声">
      <ul className="grid md:grid-cols-2 gap-4">
        {TESTIMONIALS.map((t, i) => (
          <li key={i}>
            <Card>
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="h-16 w-16 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {t.tags.map((tag, j) => (
                      <Badge key={j}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-300">{t.quote}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function ApplyCTA() {
  return (
    <section id="apply" className="py-20 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold">あなたも {BRAND.name} で一緒に活動しませんか？</h3>
        <p className="mt-3 text-gray-300">迷っているなら、まずは相談を！</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <PrimaryButton href={LINKS.entry}>今すぐエントリー</PrimaryButton>
          <GhostButton href={LINKS.line}>LINEで無料相談</GhostButton>
        </div>
      </div>
    </section>
  );
}

function Flow() {
  const steps = [
    { title: "公式LINEに登録してエントリー", body: "写真とメッセージを送信。顔写真があると面談がスムーズです。" },
    { title: "オンライン面談", body: "15分程度で目標やスケジュールを確認。報酬体系なども説明。" },
    { title: "マネジメント・配信スタート", body: "毎月の目標設定やイベント対策を行いながら二人三脚でスタート。" },
  ];
  return (
    <Section id="flow" title="応募から配信開始までの流れ">
      <ol className="grid md:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <li key={i}>
            <Card>
              <div className="text-sm text-gray-400">STEP {String(i + 1).padStart(2, "0")}</div>
              <div className="mt-1 font-bold text-white">{s.title}</div>
              <p className="mt-2 text-gray-300 text-sm">{s.body}</p>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function FAQSection() {
  return (
    <Section id="faq" title="よくある質問">
      <div className="space-y-3">
        {FAQ.map((item, i) => (
          <details key={i} className="group rounded-2xl border border-white/10 p-5 bg-neutral-900/70">
            <summary className="cursor-pointer list-none font-semibold">
              <span className="mr-2" style={{ color: "var(--accent)" }}>Q.</span> {item.q}
            </summary>
            <p className="mt-3 text-gray-300 whitespace-pre-line">
              <span className="mr-2 font-semibold text-gray-400">A.</span>
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}

// ▼ 送信完了ページ（/thank-you）
function ThankYouPage() {
  const [seconds, setSeconds] = React.useState(THANKYOU_REDIRECT_SECONDS);

  // カウントダウンと自動リダイレクト
  React.useEffect(() => {
    const tick = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    const to = setTimeout(() => {
      window.location.assign("/");
    }, THANKYOU_REDIRECT_SECONDS * 1000);
    return () => {
      clearInterval(tick);
      clearTimeout(to);
    };
  }, []);

  return (
    <div className="relative min-h-screen grid place-items-center bg-black overflow-hidden text-white">
      <style>{`
        @keyframes float { 0% { transform: translateY(0) } 50% { transform: translateY(-18px) } 100% { transform: translateY(-36px) } }
        @keyframes popIn { 0% { opacity: 0; transform: translateY(8px) scale(.98) } 100% { opacity: 1; transform: translateY(0) scale(1) } }
        .bubble { position: absolute; border-radius: 9999px; opacity: .22; animation: float 6s ease-in-out infinite; filter: blur(1px); }
        .pop { animation: popIn .6s ease-out both; }
      `}</style>

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="bubble" style={{ left: "8%", top: "70%", width: 14, height: 14, background: "var(--accent)", animationDuration: "7s" }} />
        <span className="bubble" style={{ left: "20%", top: "60%", width: 22, height: 22, background: "var(--accent2)", animationDuration: "8s" }} />
        <span className="bubble" style={{ left: "35%", top: "75%", width: 12, height: 12, background: "var(--accent)", animationDuration: "6.5s" }} />
        <span className="bubble" style={{ left: "48%", top: "65%", width: 26, height: 26, background: "var(--accent2)", animationDuration: "9s" }} />
        <span className="bubble" style={{ left: "60%", top: "72%", width: 16, height: 16, background: "var(--accent)", animationDuration: "7.5s" }} />
        <span className="bubble" style={{ left: "72%", top: "62%", width: 14, height: 14, background: "var(--accent2)", animationDuration: "8.5s" }} />
        <span className="bubble" style={{ left: "82%", top: "74%", width: 18, height: 18, background: "var(--accent)", animationDuration: "7.2s" }} />
        <span className="bubble" style={{ left: "12%", top: "20%", width: 12, height: 12, background: "var(--accent2)", animationDuration: "6.8s" }} />
        <span className="bubble" style={{ left: "28%", top: "18%", width: 16, height: 16, background: "var(--accent)", animationDuration: "8.2s" }} />
        <span className="bubble" style={{ left: "76%", top: "16%", width: 12, height: 12, background: "var(--accent2)", animationDuration: "7.8s" }} />
        <span className="bubble" style={{ left: "66%", top: "22%", width: 20, height: 20, background: "var(--accent)", animationDuration: "8.1s" }} />
        <span className="bubble" style={{ left: "42%", top: "14%", width: 12, height: 12, background: "var(--accent2)", animationDuration: "6.9s" }} />
      </div>

      <main className="pop p-8 max-w-xl text-center">
        <img src="/illustrations/logo.svg" alt="logo" className="h-14 w-14 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">送信ありがとうございました！</h1>
        <p className="text-gray-300">お問い合わせ内容は送信されました。通常1〜3営業日以内にご連絡いたします。</p>
        <p className="text-gray-400 mt-3 mb-6" aria-live="polite">{seconds} 秒後にトップへ自動的に戻ります。</p>
        <div className="flex items-center justify-center gap-3">
          <a href="/" className="rounded-xl text-white font-semibold px-5 py-3 hover:opacity-90" style={{ backgroundColor: "var(--accent)" }}>
            今すぐトップへ戻る
          </a>
          <a href={LINKS.line} className="rounded-xl font-semibold px-5 py-3 border hover:opacity-90" style={{ color: "var(--accent)", borderColor: "var(--accent)", backgroundColor: "rgba(238,29,82,.08)" }}>
            LINEで相談
          </a>
        </div>
      </main>
    </div>
  );
}

// ▼ 追加：Netlify Forms 対応のお問い合わせフォーム
function ContactSection() {
  return (
    <Section id="contact" title="お問い合わせ">
      <form name="contact" method="POST" action="/thank-you" data-netlify="true" netlify-honeypot="bot-field" className="space-y-4 max-w-2xl">
        {/* Netlifyがフォームを識別するための hidden フィールド */}
        <input type="hidden" name="form-name" value="contact" />
        {/* 迷惑対策（bot-field） */}
        <input type="text" name="bot-field" className="hidden" aria-hidden="true" />

        <label className="block">
          <span className="text-sm text-gray-300">お名前</span>
          <input name="name" required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 text-white px-4 py-3 placeholder-gray-500" placeholder="山田 太郎" />
        </label>
        <label className="block">
          <span className="text-sm text-gray-300">メール</span>
          <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 text-white px-4 py-3 placeholder-gray-500" placeholder="mail@example.com" />
        </label>
        <label className="block">
          <span className="text-sm text-gray-300">内容</span>
          <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 text-white px-4 py-3 placeholder-gray-500" placeholder="ご用件をご記入ください" />
        </label>
        <button className="rounded-xl text-white font-semibold px-5 py-3 hover:opacity-90" style={{ backgroundColor: "var(--accent)" }}>
          送信
        </button>
      </form>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <div className="flex items-center gap-2">
            <img src="/illustrations/logo.svg" alt="logo" className="h-8 w-auto" />
            <span className="font-extrabold text-lg">{BRAND.name}</span>
          </div>
          <p className="mt-2 text-gray-400 text-sm">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        </div>
        <div className="flex md:justify-end gap-6 text-sm text-gray-300">
          <a href={LINKS.company} className="hover:text-white">会社概要</a>
          <a href={LINKS.privacy} className="hover:text-white">プライバシーポリシー</a>
          {/* ▼ これをクリックすると #contact セクションへスクロール */}
          <a href={LINKS.contact} className="hover:text-white">お問い合わせ</a>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------
   Framer Code Wrapper (optional)
   ----------------------
   使い方:
   1) Framerのプロジェクトで Code コンポーネントを追加
   2) 下記のコードを別ファイル（例: NextwaveLike.framer.tsx）にコピペ
   3) `NextwaveLikeSite` を内部で描画し、PropertyControlsでブランド名などを調整

   NOTE: Framer側では Tailwind が不要です。シンプルにHTML/CSSで再構築する場合は
   上記のセクションを Framer のセクション/スタックで再現していく方法もあります。
*/
