const MENU = ["会員登録", "運営会社", "利用規約", "個人情報の取扱について", "特定商取引法に基づく表記", "お問い合わせ"];

const Footer: React.FC = () => (
  <footer className="bg-dark-500 py-14">
    <div className="container">
      <ul className="flex items-center text-light">
        {MENU.map((item, index) => (
          <li key={item} className={index === 0 ? "" : "ml-[45px]"}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
