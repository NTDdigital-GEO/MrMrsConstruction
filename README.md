# mrandmrscnr.com — Astro 重建版

這是 Mr. & Mrs. Construction & Remodeling 官網從 WordPress + Elementor 搬到 GitHub 的版本，部署到 Cloudflare Pages。

- **模板不變**：字體（Roboto / Roboto Condensed）、配色（slate `#334155`、navy `#1E293B`、footer `#1F2839`）、版面和元件都照原站重做。
- **首頁呈現不變**：首頁照原順序重建 13 個區塊，Hero 一樣用 `Hero_p2.mp4` 影片，加上灰色半透明 logo 框和電話。
- **網址不變**：所有 WordPress 網址 1:1 保留，只有測試頁改用 301 轉址。
- **圖片、影片沿用原檔**：路徑保持 `/wp-content/uploads/...`。
- **新增廣告落地頁** `/free-3d-design-consultation/`：由 /home-test/ 的優化設計改寫，套用同一個網站模板。

| 項目 | 規格 |
|---|---|
| 框架 | Astro 5（純靜態 HTML，CSS 約 22 KB，JS 約 4 KB） |
| 部署 | Cloudflare Pages（靜態檔 + `functions/api/lead.js` 處理表單） |
| 頁數 | 67 頁，部落格遷移後約 225 頁 |
| 追蹤 | 沿用現有 2 個 GTM container，dataLayer 事件名稱和 Google Ads 已匯入的 GA4 事件一致 |

---

## 1. 本機開發

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # 輸出到 dist/
npm run preview
```

圖片和影片預設從線上 WordPress 載入（`PUBLIC_MEDIA_ORIGIN` 自動判斷）。執行過 `npm run media`、`public/wp-content/uploads/` 存在之後，會自動改成從本站載入。

## 2. 目錄結構

```
src/
  config/site.ts        ← 公司資料唯一來源（電話、地址、執照、GTM、社群連結）
  data/services.ts      ← 8 個服務頁內容
  data/cities.ts        ← 19 個服務城市
  data/gallery.ts       ← 21 個作品集
  data/content.ts       ← 首頁文案、影片見證、Why Us
  data/landing.ts       ← 廣告落地頁的文案和設定（含 TODO 待確認項目）
  components/           ← Header / Footer / QuoteForm / Sections …
  layouts/              ← BaseLayout（全站）、LandingLayout（落地頁：無選單、手機置底 CTA）
  pages/                ← 每個網址對應一個檔案
  content/blog/         ← 部落格 Markdown（npm run migrate 產生）
  styles/global.css     ← 原站模板樣式
  styles/landing.css    ← 落地頁專用樣式
functions/api/lead.js   ← 表單接收：防垃圾 → Webhook / Email
public/_redirects       ← 301 轉址
public/_headers         ← 安全標頭、快取、noindex
scripts/                ← 遷移與檢查腳本
```

改電話、地址或營業時間時，只要改 `src/config/site.ts`。頁首、頁尾、Schema、llms.txt 和所有表單都讀這個檔。

## 3. 上線前的遷移步驟（DNS 切換前，WordPress 必須還在線上）

```bash
npm run migrate                         # 1. 匯入全部 160 篇部落格文章 → src/content/blog/*.md
npm run migrate -- --noindex-landmarks  #    （可選）52 篇餐廳、公園類離題文章加 noindex，清單見 scripts/noindex-posts.json
npm run media                           # 2. 下載所有引用到的圖片和影片到 public/wp-content/uploads/
npm run build:ci                        # 3. 建置，並檢查 222 個舊網址都已重建或已 301
git add . && git commit -m "Migrate content" && git push
```

`scripts/check-urls.mjs` 會比對 `scripts/legacy-urls.json`（從 WP REST API 擷取的完整網址清單）和 `dist/`、`_redirects`。結果顯示 0 missing 才可以切 DNS。要重新抓網址清單時，執行 `node scripts/check-urls.mjs --refresh`。

> 目前狀態：頁面、服務頁、城市頁、作品集都已重建（62/62），只差部落格文章要等 `npm run migrate` 匯入。

媒體檔很大，建議用 Git LFS 提交，或改放 Cloudflare R2，再設定 `PUBLIC_MEDIA_ORIGIN`（見 `.gitignore` 說明）。

## 3.5 客戶預覽：GitHub Pages（正式上線前）

網址：`https://<帳號>.github.io/<repo名稱>/`。推到 `main` 分支後會自動發佈，約 1–2 分鐘。

**一次性設定**
1. 在 GitHub 建 repo，把專案推上去。免費方案的 repo 必須設為 Public；私人 repo 需要 GitHub Pro 或 Team。
2. 到 repo 的 Settings → Pages → Build and deployment → Source，選「GitHub Actions」。
3. 到 Actions 分頁，等「Preview on GitHub Pages」跑完（綠勾），就會出現網址。

**預覽模式會自動做這些事**（由 `.github/workflows/preview-pages.yml` 設定 `PUBLIC_PREVIEW=1`）：
- 整站 `noindex, nofollow`，`robots.txt` 設為 `Disallow: /`，並移除 sitemap，不會被 Google 收錄成重複內容。
- 不載入 GTM，客戶和團隊瀏覽時不會進入 GA4 或 Google Ads 488-601-8017 的數據。
- 表單只檢查欄位，不送出，會顯示「Preview site — form submissions are disabled」。
- 左下角顯示「Preview — not the live site」標示。
- 所有連結、CSS、字型、JS 自動加上 `/<repo名稱>/` 前綴（`scripts/preview-integration.mjs`，只在建置後的 dist 處理，原始碼不變）。
- 圖片和影片直接從線上 WordPress 載入，所以預覽期間 WordPress 要保持運作。

**客戶確認後**：照第 4 節接 Cloudflare Pages。正式建置不設定 `PUBLIC_PREVIEW`，所以上面這些設定都不會套用，原始碼不用做任何修改。上線後到 Actions 停用「Preview on GitHub Pages」，再到 Settings → Pages 取消發佈。

## 4. 部署到 Cloudflare Pages

1. 把專案推到 GitHub（例如 `ntd-digital/mrandmrscnr-site`）。
2. Cloudflare → Workers & Pages → Create → Pages → Connect to Git，選擇這個 repo。
3. 建置設定：
   - Framework：Astro
   - Build command：`npm run build`
   - Output：`dist`
   - Node 版本：20
4. 在 Settings → Environment variables 設定：

| 變數 | 用途 |
|---|---|
| `LEAD_WEBHOOK_URL` | 表單轉送到 CRM、Zapier 或 Make（至少設定這個或 Email 其中一種） |
| `RESEND_API_KEY`、`LEAD_TO_EMAIL`、`LEAD_FROM_EMAIL` | 用 Resend 寄送詢價信 |
| `PUBLIC_TURNSTILE_SITEKEY`、`TURNSTILE_SECRET` | Cloudflare Turnstile 防垃圾驗證（可選，取代 reCAPTCHA） |

5. 先在 `*.pages.dev` 預覽網址測試表單、電話和 GTM（Tag Assistant）。
6. 都沒問題後，在 Custom domains 綁定 `mrandmrscnr.com` 和 `www`，再切 DNS。

`.github/workflows/build.yml` 會在每次 push 時建置，確保程式沒有錯誤。

## 5. 上線當天：GTM 與 Google Ads 必改項目

原站的轉換是靠 Elementor 表單觸發的，新站改用 dataLayer 事件。事件名稱沿用 Ads 帳戶 488-601-8017 已匯入的 GA4 事件，所以 **GA4 和 Ads 端不用重新設定轉換**，只要在 GTM 改觸發條件：

| dataLayer 事件 | 觸發時機 | GTM 要做的事 |
|---|---|---|
| `form_submit_all` | 表單送出成功（含 `user_data.email`、`phone_number`） | 建 Custom Event 觸發條件，取代原本的 Elementor 表單觸發；在 GA4 事件和強化轉換中帶入 user_data |
| `call_click` | 點擊任何 `tel:` 連結 | 建 Custom Event 觸發條件，取代原本的 Click URL 觸發 |
| `form_start` | 開始填寫表單 | （可選）建 GA4 事件 |
| `lead_thank_you` | 進入 /thank-you/ | 可作為備援轉換 |
| `click_get_quote`、`email_click`、`click_get_directions`、`click_services`、`click_gallery`、`click_about_us`、`click_service_area`、`video_play` | 對應的點擊 | 沿用原本的 GA4 事件名稱 |

Google Ads 方面：
- **Final URL**：搜尋廣告和 PMax 改指向 `/free-3d-design-consultation/`，並加上 `?service=` 參數讓廣告和頁面訊息一致（見下節）。
- **通話轉換**：通話長度門檻改為 60 秒，排除 Spam Call 報告中發現的短通話。
- 切換後 2 週內，每天比對 Ads 轉換數和 CRM 實際名單數。

## 6. 廣告落地頁 `/free-3d-design-consultation/`

- 版型沿用網站模板：Hero 用同一支 `Hero_p2.mp4` 影片，Why Us 背景搭配玻璃卡片，表單和頁尾配色與全站一致。
- 頁首只放 Logo、電話和 CTA，不放導覽選單；手機版底部固定「SEE MY HOME IN 3D / CALL」按鈕列。
- 預約表單只有 4 個必填欄位加 1 個選填（原本 9 欄），頁面上出現 2 次，主要 CTA 出現 5 次以上。
- 頁面設定 `noindex`（meta 標籤和 `X-Robots-Tag` 都有），並排除在 sitemap 之外，不會和自然搜尋頁面互搶排名。
- **訊息一致參數**：網址加上 `?service=` 後，標題、副標會跟著換，專案類型也會預先選好：

| 參數 | 用於 |
|---|---|
| `?service=kitchen` | 廚房廣告群組 |
| `?service=bathroom` | 浴室 |
| `?service=adu` | ADU |
| `?service=addition` | 加建 |
| `?service=remodel` | 全屋翻新 |
| `?service=newhome` | 新建住宅 |

- 頁面文案都集中在 `src/data/landing.ts`。
- UTM 和 gclid 會在 session 期間保存，隨表單一起送出（欄位 `utm`、`gclid`、`landing`）。

## 7. 上線前需要業主確認的項目（程式中以 `TODO(client)` 標示）

1. **營業時間**：`site.ts` 的 `openingHours`，要和 Google 商家檔案一致。
2. **Google 評分與評論數**：2026/10/23 已核對商家檔案為 5.0 星、58 則評論，落地頁寫「5.0 ★ · 50+ reviews」。上線當天再看一次；若平均分數改變，修改 `landing.ts` 即可。
3. **各服務的參考價格區間**：來自 2026/05 的 Offer Stack。如果不想公開，設定 `showPricing:false`。
4. **3D 設計諮詢包含的內容**：渲染圖在簽約前還是簽約後交付、可修改幾次。
5. **回覆時間承諾**：目前寫「一個工作日內」。
6. **書面承諾與保固期限**：需要和標準合約內容一致。
7. **隱私權政策、服務條款**：目前是草稿，需要律師審閱，特別是 CCPA 相關內容。

## 8. 搬家時順手修正的內容

- 首頁 Title、Meta 改寫；Schema 修正 `addressRegion: CA`、`priceRange`，並加上 19 個服務城市、CSLB 執照號碼和 `sameAs`。
- 服務城市頁：修正城市名稱錯置，CTA 改成「Ready to start your remodeling project in {city}?」，並列出當地作品。
- 詢價頁：移除「Lorem ipsum」佔位文字。表單的專案類型拼字錯誤已修正；街道、門牌、郵遞區號改為選填。
- 無障礙聲明：重寫，移除沒有根據的 overlay 合規說法和測試聲明。
- 新增隱私權政策、服務條款（草稿）、`llms.txt`（GEO 用）和 XML sitemap。
- 首頁的 YouTube 見證影片改用 lite-embed（點擊才載入），速度更快。
- `/home-test/`、`/home-test1/` 301 轉到首頁；Rank Math 的 sitemap 網址、分類、標籤、作者頁、feed 也都有 301。

## 9. 切換後檢查清單

- [ ] 在 Google Search Console 重新提交 `https://mrandmrscnr.com/sitemap-index.xml`
- [ ] 抽查 301：`/home-test/`、`/sitemap_index.xml`、`/category/...`、`/blog/page/2/`
- [ ] 在 GTM 預覽模式確認 `form_submit_all`、`call_click` 都有觸發，並在 GA4 DebugView 看到事件
- [ ] 送出一筆測試表單，確認 CRM 或 Email 有收到資料，而且帶有 utm/gclid
- [ ] PageSpeed Insights 手機版檢查（目標 LCP < 2.5s）
- [ ] 2 週內監控 GSC 的 404 和索引涵蓋範圍
- [ ] 保留 WordPress 主機 30 天唯讀備份後再停用
