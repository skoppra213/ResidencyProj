import React, { useEffect, useState } from "react";
import auth from "../auth/auth";
import { login } from "../api/login";
import SideMenu from "../components/SideMenu";





const Login = (props: any) => {

	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");


	useEffect(() => {
		document.body.classList.add("sb-sidenav-toggled");
       
		return () => {
			document.body.classList.remove("sb-sidenav-toggled");
		}
	}, []);





	const loginSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		console.log(username, "===", password);

		console.log(login(username, password));


		// auth.login(() => {

		// })
	}
	return (
		
		<>

			<div id="layoutSidenav_content">
				<SideMenu />
				{/*################## start contents #####################*/}
				<main className="login-bg">
					<div className="container" style={{ marginBottom: '80px' }}>
						{/* Outer Row */}
						<div className="row justify-content-center">
							<div className="col-xl-10 col-lg-12 col-md-9">
								<div className="card o-hidden border-1 shadow my-5 animate__animated animate__backInDown " style={{ border: '1px solid rgb(189, 189, 189)' }}>
									<div className="card-header bg-dark">
										<div className="text-center">
											<h1 className=" text-gray-900 mb-1 shorooq gold" style={{ fontSize: '28px' }}>تسجيل دخول لخدمات
                            البوابة الالكترونية</h1>
										</div>
									</div>
									<div className="card-body p-0 ">
										{/* Nested Row within Card Body */}
										<div className="row">
											<div className="col-lg-8">
												<div className="p-5">
													<div className="text-center">
														<h1 className=" text-gray-900 mb-4 gold" style={{ fontSize: '16px', lineHeight: '30px' }}>ادخل اسم المستخدم وكلمة السر
                                  للدخول الى خدمات البوابة اﻹلكترونية</h1>
													</div>
													<form className="user">
														<div className="form-group">
															<input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="ادخل اسم المستخدم" />
														</div>
														<div className="form-group">
															<input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="ادخل كلمة السر " />
														</div>
														<div className="row justify-content-between">
															<button className="btn btn-primary btn-user  shorooq " style={{ fontSize: '22px' }}> تسجيل الدخول الى النظام </button>
															<button className="btn btn-info btn-user shorooq " style={{ fontSize: '22px' }}> تسجيل مستخدم جديد </button>
														</div>
													</form>
												</div>
											</div>
											<div className="col-lg-4 d-none d-lg-block text-center my-auto" style={{ backgroundColor: 'transparent' }}>
												{/* <img className="img-fluid" src={imageKwtman}  alt="" width="80%" /> */}
												<img className="img-fluid" src={process.env.PUBLIC_URL + 'img/kwtman.png'} alt="" width="80%" />
											
											
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>

		</>
	);
};

export default Login;

