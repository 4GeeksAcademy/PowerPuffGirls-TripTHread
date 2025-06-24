import { Link, useNavigate } from "react-router-dom";

export const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
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

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link" to="/posts">Destination</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/create">Post a Journal</Link>
						</li>

						{isLoggedIn ? (
							<li className="nav-item">
								<button onClick={handleLogout} className="btn btn-outline-danger ms-2">
									Logout
								</button>
							</li>
						) : (
							<>
								<li className="nav-item">
									<Link className="nav-link" to="/login">Login</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/register">SignUp</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/contact">Contact</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
