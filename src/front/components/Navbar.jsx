import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("token");
		setIsLoggedIn(false);
		navigate("/");
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					🌍 TripThread
				</Link>

				<div className="collapse navbar-collapse justify-content-end">
					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link" to="/posts">Explore</Link>
						</li>

						{isLoggedIn ? (
							<>
								<li className="nav-item">
									<Link className="nav-link" to="/create">Write a Post</Link>
								</li>
								<li className="nav-item">
									<button onClick={handleLogout} className="btn btn-outline-danger ms-2">
										Logout
									</button>
								</li>
							</>
						) : (
							<>
								<li className="nav-item">
									<Link className="nav-link" to="/login">Login</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/register">Register</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;