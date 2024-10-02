import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
	  <div className="logo-title">
    <img src="/logo.png" alt="Logo" className="logo" />
    <h1>Portfólio</h1> 
	 </div>
      <nav>
      <ul>
		<li>
			<Link to='/'>Menu</Link>
		</li>
		<li>
			<Link to='/Apresentação'>Apresentação</Link>
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
		
	</ul>
        </nav>
    </header>
  );
}

export default Header;
