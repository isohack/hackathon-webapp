import React from 'react';
import './../css/prizes.css';

const Prizes = () =>
<div className="prizesBg">

<h2 className="header-text white-text">Prizes</h2>

<section className="main" style={{top: '10%'}}>
			
				<ul className="ch-grid">
					<li>
						<div className="ch-item ch-img-1">				
							<div className="ch-info-wrap">
								<div className="ch-info">
									<div className="ch-info-front ch-img-1"></div>
									<div className="ch-info-back">
										<h3>First Prize</h3>
										<p>by Company_Name<a href="index.html">Additional detail</a></p>
									</div>	
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="ch-item ch-img-2">
							<div className="ch-info-wrap">
								<div className="ch-info">
									<div className="ch-info-front ch-img-2"></div>
									<div className="ch-info-back">
										<h3>Second Prize</h3>
										<p>by Company_Name<a href="index.html">Additional detial</a></p>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="ch-item ch-img-3">
							<div className="ch-info-wrap">
								<div className="ch-info">
									<div className="ch-info-front ch-img-3"></div>
									<div className="ch-info-back">
										<h3>Third Prize</h3>
										<p>by Company_Name<a href="index.html">Additional detial</a></p>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
				
			</section>

</div>

export default Prizes