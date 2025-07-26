export default function HomePage() {
  return (
    <main className="bg-[#fdfdf5] text-gray-800 font-noto px-4 py-8 max-w-4xl mx-auto">
      
      {/* 网站标题区 */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2">宋词札记</h1>
        <p className="text-base text-gray-500 tracking-wide">记忆与感知的流动</p>
      </header>

      {/* 随机词展示区 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🎴 今日词作</h2>
        <article className="bg-white shadow p-6 rounded leading-loose">
          <h3 className="text-xl font-bold mb-2">《如梦令》· 李清照</h3>
          <p className="whitespace-pre-line">
            常记溪亭日暮，沉醉不知归路。<br />
            兴尽晚回舟，误入藕花深处。<br />
            争渡，争渡，惊起一滩鸥鹭。
          </p>
        </article>
      </section>

      {/* 分类导航区 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">📚 词集索引</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <button className="bg-white shadow rounded px-4 py-3 hover:bg-gray-100">春词</button>
          <button className="bg-white shadow rounded px-4 py-3 hover:bg-gray-100">离别</button>
          <button className="bg-white shadow rounded px-4 py-3 hover:bg-gray-100">咏史</button>
          <button className="bg-white shadow rounded px-4 py-3 hover:bg-gray-100">词牌索引</button>
          <button className="bg-white shadow rounded px-4 py-3 hover:bg-gray-100">李清照</button>
          <button className="bg-white shadow rounded px-4 py-3 hover:bg-gray-100">苏轼</button>
        </div>
      </section>

      {/* 最近更新区 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">📝 最近更新</h2>
        <ul className="space-y-4">
          <li className="border-l-4 border-gray-300 pl-4">
            2025/7/25 · 《蝶恋花·梦回西湖夜泊》 by Eliot
          </li>
          <li className="border-l-4 border-gray-300 pl-4">
            2025/7/20 · 《忆江南·雨过苏堤草色新》 by Eliot
          </li>
        </ul>
      </section>

      {/* 填词助手入口 */}
      <section className="mb-16 text-center">
        <h2 className="text-xl font-semibold mb-2">✍️ 想试试自己填一首词？</h2>
        <a href="/tools" className="inline-block mt-2 px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
          打开填词助手
        </a>
      </section>

      {/* 页脚 */}
      <footer className="text-center text-sm text-gray-500 border-t pt-6">
        © 2025 Eliot Hongtuo · 以词为舟，泛古今之思。
      </footer>
    </main>
  )
}