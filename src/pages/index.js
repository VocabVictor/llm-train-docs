import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

const cards = [
  {
    title: "Start with calm",
    text: "给完全新手的学习入口，先看懂路线，再上手。",
    to: "/learn/intro"
  },
  {
    title: "Run the demo",
    text: "去最小训练工程仓库跑通一次任务，建立操作安全感。",
    href: "https://github.com/VocabVictor/llm-train-demo"
  },
  {
    title: "Practice interactively",
    text: "在交互练习站里练命令行、公式和结构拼装。",
    href: "https://github.com/VocabVictor/llm-train-lab"
  }
];

function Hero() {
  return (
    <header className="heroWrap">
      <div className="heroGrid">
        <div>
          <p className="eyebrow">Training Engineering For Beginners</p>
          <h1 className="heroTitle">Train Like an Engineer</h1>
          <p className="heroText">
            A public learning system for interns who need to move from shell fear
            to real distributed-training work without drowning in jargon on day one.
          </p>
          <div className="heroAct">
            <Link className="button button--primary button--lg" to="/learn/intro">
              从这里开始
            </Link>
            <Link className="button button--secondary button--lg" to="/blog">
              读博客
            </Link>
          </div>
        </div>
        <div className="panel">
          <div className="panelHead">What this site is for</div>
          <ul className="panelList">
            <li>理解训练工程仓库结构</li>
            <li>获得最小命令行生存能力</li>
            <li>跑通最小训练示例</li>
            <li>学会按证据链汇报问题</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

function CardGrid() {
  return (
    <section className="cardSec">
      <div className="cardGrid">
        {cards.map((card) => {
          const target = card.to || card.href;
          return (
            <Link key={card.title} className={clsx("cardLink")} to={card.to} href={card.href}>
              <article className="cardBox">
                <h2>{card.title}</h2>
                <p>{card.text}</p>
                <span>Open {target}</span>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout title="Train Like an Engineer" description="Public learning hub for training-engineering interns">
      <Hero />
      <CardGrid />
    </Layout>
  );
}
