import React from 'react';
function Metrics(){
    return (
        <React.Fragment>
			    {/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
				    {/*<!-- Content Row Movies-->*/}
					<div className="row">

						{/*<!-- Movies in Data Base -->*/}
						<div className="col-md-4 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Movies in Data Base</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">21</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-film fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/*<!-- Series in Data Base -->*/}
						<div className="col-md-4 mb-4">
							<div className="card border-left-success shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-success text-uppercase mb-1">Series in Data Base</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">79</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-award fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/*<!-- Total Length Movies -->*/}
						<div className="col-md-4 mb-4">
							<div className="card border-left-warning shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Total Length Movies
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">49</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-user fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
                </div>
					{/*<!-- End movies in Data Base -->*/}
                
					

		</React.Fragment>
    )

}
export default Metrics;