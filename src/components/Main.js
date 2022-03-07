import React from 'react';
import Metrics from './Metrics';
import LastMovie from './LastMovie';
//import Movies from './Movies';
import foto from '../assets/images/jordan-walke.png';
import image from '../assets/images/logo-DH.png';
import {Link} from 'react-router-dom';
function Main(){
    return (
        <React.Fragment>

            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span>
                        </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link collapsed" to="/LastMovie">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Ultima pelicula</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/Metrics">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Metricas</span>
                      </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
			{/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}

            {/*<!-- Topbar -->*/}
			<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                 {/*<!-- Sidebar Toggle (Topbar) -->*/}
            	<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                	<i className="fa fa-bars"></i>
            	</button>

            {/*<!-- Topbar Navbar -->*/}
            <ul className="navbar-nav ml-auto">
                
				{/*<!-- Nav Item - Alerts -->*/}
				<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
								<i className="fas fa-bell fa-fw"></i>
								{/*<!-- Counter - Alerts -->*/}
								<span className="badge badge-danger badge-counter"></span>
							</a>
						</li>

						{/*<!-- Nav Item - Messages -->*/}
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
								<i className="fas fa-envelope fa-fw"></i>
								{/*<!-- Counter - Messages -->*/}
								<span className="badge badge-danger badge-counter"></span>
							</a>
						</li>

						<div className="topbar-divider d-none d-sm-block"></div>

						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">Jordan Walke</span>
								<img className="img-profile rounded-circle" src={foto} alt="Jordan Walke - Creador de React" width="60"/>
							</a>
						</li>

					</ul>

				</nav>
				{/*<!-- End of Topbar -->*/}
    		
            
                <div id="content">
                    <Metrics />
                
					
				   {/*<!-- Content Row Last Movie in Data Base -->*/}
				   <div className="row">
                    <LastMovie />
                        {/*<!-- Genres in DB -->*/}
						<div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Acción</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Animación</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Aventura</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Ciencia Ficción</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Comedia</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Documental</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Drama</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Fantasia</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Infantiles</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Musical</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

                        {/*<!--End Genres In Db-->*/}		
						
					      </div>
				       </div>
				       {/*<!--End Content Row Top-->*/}
				
				      {/*<!-- Footer -->*/}

				      <footer className="sticky-footer bg-white">
				       <div className="container my-auto">
					         <div className="copyright text-center my-auto">
						      <span>Copyright &copy; Dashboard 2021</span>
					         </div>
				        </div>
			           </footer>
				     </div>

				      {/*<!-- End of Footer -->*/}
         



		</React.Fragment>
    )

}
export default Main;
