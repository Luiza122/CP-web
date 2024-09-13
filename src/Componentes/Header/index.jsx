import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Meu site</h1>
      <nav>
      <ul>
		<li>
			<Link to='/'>Menu</Link>
		</li>
    <li>
			<Link to='/Lista'>Lista de projetos</Link>
		</li>
		<li>
			<Link to='/Midias'>Mídias sociais</Link>
		</li>
    <li>
			<Link to='/contato'>Contato</Link>
		</li>
		<li>
			<Link to='/Apresentação'>Apresentação</Link>
		</li>
	</ul>
        </nav>
    </header>
  );
}

export default Header;
