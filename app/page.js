import posts from '../data/posts.json';

const isLink = (u) => typeof u === 'string' && /^https?:\/\//.test(u);

function formatDate(d) {
  const [y, m, day] = d.split('-');
  return `${Number(m)}월 ${Number(day)}일`;
}

export default function Home() {
  // 최신 게시물이 위로
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="wrap">
      <header className="head">
        <div className="logo">🎁</div>
        <h1>트렌디기프트</h1>
        <p className="sub">2030 선물 추천 · 게시물에 소개한 제품 링크 모음</p>
        <a className="ig" href="https://www.instagram.com/trendy_gift.98/" target="_blank" rel="noopener noreferrer">
          @trendy_gift.98
        </a>
      </header>

      <p className="notice">
        이 페이지의 링크는 네이버 브랜드 커넥트 활동의 일환으로, 링크를 통해 구매하면 일정 수수료를 받을 수 있습니다.
      </p>

      {sorted.map((post) => (
        <section key={post.id} id={post.id} className="post">
          <div className="post-head">
            <span className="date">{formatDate(post.date)}</span>
            <h2>{post.title}</h2>
          </div>
          <ul className="list">
            {post.products.map((p, i) => {
              const ok = isLink(p.url);
              const inner = (
                <>
                  <img src={p.image} alt={p.name} className="thumb" />
                  <div className="info">
                    <span className="num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="name">{p.name}</span>
                    {p.price && <span className="price">{p.price}</span>}
                  </div>
                  <span className="go">{ok ? '보러가기' : '준비 중'}</span>
                </>
              );
              return (
                <li key={i}>
                  {ok ? (
                    <a className="card" href={p.url} target="_blank" rel="sponsored noopener noreferrer">{inner}</a>
                  ) : (
                    <div className="card off">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <footer className="foot">가격은 게시 시점 기준이며 판매처에서 바뀔 수 있습니다.</footer>
    </main>
  );
}
