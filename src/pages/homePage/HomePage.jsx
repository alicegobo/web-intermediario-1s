import { useState } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

/* =====================
   DATA
   ===================== */
const books = [
  { id: 1, emoji: "💨", bg: "linear-gradient(135deg,#00D494,#00B893)", genre: "Romantasia",          title: "Corte de Névoa e Fúria", author: "Sarah J. Maas",  stars: "★★★★★" },
  { id: 2, emoji: "🩸", bg: "linear-gradient(135deg,#852EFF,#6E00CF)", genre: "Suspense",          title: "Suicidas",           author: "Raphael Montes", stars: "★★★★★" },
  { id: 3, emoji: "🧪", bg: "linear-gradient(135deg,#0087E8,#006ECF)", genre: "Romance Young-Adult", title: "A Hipótese do Amor",        author: "Ali Hazelwood",  stars: "★★★★★" },
  { id: 4, emoji: "🎈", bg: "linear-gradient(135deg,#8C0000,#7A0000)", genre: "Terror",            title: "It — A Coisa",               author: "Stephen King",   stars: "★★★★★" },
  { id: 5, emoji: "🎲", bg: "linear-gradient(135deg,#FF94ED,#FF54E3)", genre: "Romance Teen",     title: "Dungeons & Drama",             author: "Kristy Boyce",   stars: "★★★★★" },
  { id: 6, emoji: "👑", bg: "linear-gradient(135deg,#BF94EB,#82B0CF)", genre: "Fantasia",          title: "A Rainha do Nada",             author: "Holly Black",  stars: "★★★★★" },
  { id: 7, emoji: "👁‍🗨", bg: "linear-gradient(135deg,#FF6200,#DCE087)", genre: "Distopia",          title: "Incendeia-me",             author: "Tahereh Mafi",  stars: "★★★★★" },
  { id: 8, emoji: "🐕", bg: "linear-gradient(135deg,#876429,#A37058)", genre: "Clássico",          title: "Vidas Secas",             author: "Graciliano Ramos",  stars: "★★★★★" },
  { id: 9, emoji: "👧🏻", bg: "linear-gradient(135deg,#00B3A1,#CC528B)", genre: "Autobiografia",     title: "Eu Sou Malala",             author: "Malala Yousafzai",  stars: "★★★★★" },
  { id: 10, emoji: "💌", bg: "linear-gradient(135deg,#FFDD00,#FFEB57)", genre: "Auto-Ajuda",     title: "Cartas Para Mim Mesmo",       author: "Mateus Vasconcellos",  stars: "★★★★★" },
];

const quotes = [
  { emoji: "🌙", name: "Ana Clara, 24", handle: "leitora voraz desde os 10", text: "Quando termino um livro bom, fico dias sem conseguir começar outro. Preciso de um tempo de luto literário, sabe?" },
  { emoji: "📚", name: "Mariana, 31",   handle: "pilha de livros infinita",  text: "Tenho uma fila de 47 livros esperando, mas continuo comprando mais. Isso é um problema? Não acho." },
  { emoji: "✨", name: "Julia, 19",     handle: "fã da Sarah J. Maas",       text: "Personagens de livro se tornam meus melhores amigos. Às vezes mais reais do que pessoas reais, confesso." },
  { emoji: "🎀", name: "Beatriz, 27",   handle: "lê até na fila do mercado", text: "Eu leio no ônibus, no almoço, no banheiro, antes de dormir... basicamente em todo lugar onde me deixarem em paz." },
  { emoji: "💖", name: "Fernanda, 22",  handle: "romance e fantasia é vida", text: "Minha lista de favoritos é maior que meu armário. E isso é tudo que preciso saber sobre mim mesma." },
  { emoji: "🌸", name: "Camila, 26",    handle: "chora em ficção",           text: "Chorei pelo fim de uma série inteira. Minha mãe achou que tinha acontecido algo de verdade. Tinha." },
];

const features = [
  { icon: "💖", title: "Favoritar livros",           desc: "Salve seus títulos preferidos e monte sua estante virtual." },
  { icon: "💬", title: "Faça suas anotações",        desc: "Anote sobre seus surtos literários e suas opiniões." },
  { icon: "🔔", title: "Novidades e lançamentos",    desc: "Sempre que houver um lançamento de algum livro novo, será atualizado aqui no site." },
];

const stats = [
  { num: "12k+", label: "leitoras ativas" },
  { num: "38k",  label: "livros catalogados" },
  { num: "97%",  label: "recomendam para amigas" },
];

/* =====================
   SUB-COMPONENTS
   ===================== */
function BtnKawaii({ children, variant = "primary", className = "", onClick }) {
  return (
    <button className={`btn-kawaii btn-${variant} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

function BookCard({ book }) {
  const [fav, setFav] = useState(false);
  return (
    <div className="book-card">
      <div className="book-cover" style={{ background: book.bg }}>
        {book.emoji}
        <button
          className={`book-fav ${fav ? "active" : ""}`}
          onClick={e => { e.stopPropagation(); setFav(!fav); }}
          aria-label={fav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          {fav ? "💖" : "🤍"}
        </button>
      </div>
      <div className="book-info">
        <div className="book-genre">{book.genre}</div>
        <div className="book-title">{book.title}</div>
        <div className="book-author">{book.author}</div>
        <div className="book-stars">{book.stars}</div>
      </div>
    </div>
  );
}

function QuoteCard({ q }) {
  return (
    <div className="quote-card">
      <p className="quote-text">{q.text}</p>
      <div className="quote-avatar">
        <div className="avatar-circle">{q.emoji}</div>
        <div>
          <div className="avatar-name">{q.name}</div>
          <div className="avatar-handle">{q.handle}</div>
        </div>
      </div>
    </div>
  );
}

/* =====================
   MAIN COMPONENT
   ===================== */
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-glow" />

      {/* HERO */}
      <section className="hero">
        <div className="hero-deco hero-deco-1" />
        <div className="hero-deco hero-deco-2" />
        <div className="hero-deco hero-deco-3" />
        <div className="hero-inner">
          <div className="hero-badge fade-in-down">🌸 O seu cantinho literário favorito</div>
          <h1 className="hero-title fade-in-up-1">
            O lugar onde a <em>leitura</em> vira <span>paixão</span>
          </h1>
          <p className="hero-subtitle fade-in-up-2">
            Descubra livros incríveis, faça amigos que também amam ler, e organize sua estante do coração — tudo num só lugar fofo e acolhedor 🎀
          </p>
          <div className="verbo-card fade-in-up-3">
            <div className="verbo-label">📖 verbo transitivo</div>
            <div className="verbo-word">Ler</div>
            <div className="verbo-def">
              <strong>1.</strong> Percorrer com os olhos, compreendendo o que está escrito ou impresso.<br />
              <strong>2.</strong> Mergulhar em mundos que ainda não existem — mas que, nas páginas certas, se tornam mais <strong>reais do que a realidade</strong>.<br />
              <strong>3.</strong> O ato mais íntimo e transformador que um ser humano pode praticar a sós, mas que nunca se vive verdadeiramente <strong>sozinho</strong>.
            </div>
          </div>
        </div>
      </section>

      {/* BOOKS */}
      <section style={{ position: "relative", zIndex: 1, padding: "80px 40px", background: "#FFF0F3" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "rosedeep", marginBottom: 10 }}>🌟 Destaques</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "black", marginBottom: 14, lineHeight: 1.2 }}>
            Livros que vão <em style={{ fontStyle: "italic", color: "rosedeep" }}>mudar você</em>
          </h2>
          <p style={{ fontSize: "1rem", color: "brown", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Uma seleção especial dos nossos autores favoritos, escolhida com muito amor e muita leitura noturna ✨
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 24, maxWidth: 1100, margin: "0 auto" }}>
          {books.map(b => <BookCard key={b.id} book={b} />)}
        </div>
      </section>

      {/* QUOTES */}
      <section className="section quotes-section">
        <div className="section-header">
          <div className="section-tag">💬 Leitores falam</div>
          <h2 className="section-title">Você <em>também</em> se <span>identifica?</span></h2>
          <p className="section-desc">Frases de leitoras reais que mostram: aqui, você não está sozinha nessa paixão pelos livros 🌸</p>
        </div>
        <div className="quotes-grid">
          {quotes.map((q, i) => <QuoteCard key={i} q={q} />)}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about-section">
        <div className="about-grid">
          <div>
            <div className="section-tag">🌸 Sobre o Leiacomigo</div>
            <h2 className="section-title">Mais do que um site — <em>uma comunidade</em></h2>
            <p className="section-desc" style={{ marginBottom: 0 }}>
              O <strong>Leiacomigo</strong> nasceu da vontade de criar um espaço fofo, seguro e apaixonante para quem ama ler. Aqui você descobre novos títulos, escreve suas próprias resenhas, favorita os livros que mexem com o seu coração — e nunca mais precisa terminar um livro sem deixar registros.
            </p>
            <div className="about-features">
              {features.map((f, i) => (
                <div key={i} className="feature-item">
                  <div className="feature-icon">{f.icon}</div>
                  <div className="feature-text">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-visual">
            <div className="about-visual-icon">📚</div>
            {stats.map((s, i) => (
              <div key={i}>
                <div className="stat-block">
                  <div className="stat-number">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
                {i < stats.length - 1 && <div className="stat-divider" />}
              </div>
            ))}
            <div className="stat-divider" />
            <p className="about-quote">"Finalmente um site que entende que ler é um estilo de vida" 🌸</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="section-tag">✨ Venha fazer parte</div>
        <h2 className="section-title">
          Pronta para mergulhar <br />nesse <em>mundo</em>? <span className="sparkle">✨</span>
        </h2>
        <p className="section-desc" style={{ margin: "0 auto 36px", textAlign: "center" }}>
          Junte-se a milhares de leitoras que já encontraram o seu lugarzinho aqui. É grátis, é fofo e é feito com muito amor. 🎀
        </p>
        <div className="cta-btns">
          <BtnKawaii variant="primary" className="btn-lg" onClick={()=>navigate("/login")}>🌸 Criar minha conta</BtnKawaii>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        Feito com 💖 por Alice de Oliveira Gobo, para leitoras &nbsp;·&nbsp;{" "}
        <strong>Leiacomigo</strong> &nbsp;·&nbsp;{" "}
        <span className="gold">2026</span>
      </footer>

      {/* Floating hearts */}
      <div className="hearts-container">
        <div className="heart-float">🌸</div>
        <div className="heart-float">💖</div>
        <div className="heart-float">✨</div>
      </div>
    </div>
  );
}
