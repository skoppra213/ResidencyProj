import React, { useEffect, useState } from "react";
import auth from "../auth/auth";
import { login } from "../api/login";
import SideMenu from "../components/SideMenu";
import {UserInfo} from "../types/userInfo"
import {assignToType} from "../utils/assignToType"





const Login = (props: any) => {

	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false)


	useEffect(() => {
		document.body.classList.add("sb-sidenav-toggled");

		return () => {
			document.body.classList.remove("sb-sidenav-toggled");
		}
	}, []);





	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		setLoading(true);

		console.log(username, "===", password);

		let loginRes = await login(username, password);

		console.log('loginRes', loginRes);
		let mapOj2 : UserInfo= new UserInfo();

		// function assignToType<T extends object>(arg: T , res :any): T {
			
		// 	console.log("Geneics/Object.keys",Object.keys(arg));
		// 	console.log("Generics/Object.keys",Object.keys(loginRes.userInfo));
		// 	Object.keys(res).forEach((key:string)=>{
				
					
		// 		 if (arg.hasOwnProperty(key)){
				
		// 			arg[key as keyof T] = res[key];
					
		// 		 }
			
		// 		})
		// 		console.log("Generics/arg",arg);
		// 	return arg;
		//   }
		  mapOj2 = assignToType<UserInfo>(mapOj2,loginRes.userInfo);
		  console.log("mapOj2",mapOj2);
		//  let mapOj : UserInfo= new UserInfo();
		// console.log("Object.keys",Object.keys(mapOj));
		// console.log("Object.keys",Object.keys(loginRes.userInfo));
	
		// Object.keys(loginRes.userInfo).forEach((key:string)=>{
		// 	// for ( var key in Object.keys(loginRes.userInfo)) {
				
	    //      if (mapOj.hasOwnProperty(key)){
			
		// 		mapOj[key as keyof UserInfo] = loginRes.userInfo[key];
				
		// 	 }
		
		// 	})
		// 	console.log("mapOj",mapOj);

		setLoading(false);

		
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
										{loading && <h3 className="text-danger">Loading...</h3>}

											<h1 className=" text-gray-900 mb-1 shorooq gold" style={{ fontSize: '28px' }}>تسجيل دخول لخدمات
                            البوابة الالكترونية</h1>
										</div>
									</div>
									<div className="card-body p-0 ">
										{/* Nested Row within Card Body */}
										<div className="row">
											<div className="col-lg-8 p-5 text-center">


												<h1 className=" text-gray-900 mb-4 gold" style={{ fontSize: '16px', lineHeight: '30px' }}>ادخل اسم المستخدم وكلمة السر
                                  للدخول الى خدمات البوابة اﻹلكترونية</h1>

												<form className="user" onSubmit={handleSubmit}>
													<div className="form-group">
														<input value={username} type="email" className="form-control form-control-user"
															onChange={e => setUsername(e.target.value)}
															id="exampleInputEmail" aria-describedby="emailHelp" placeholder="ادخل اسم المستخدم" />
													</div>
													<div className="form-group">
														<input value={password} type="password" className="form-control form-control-user"
															onChange={e => setPassword(e.target.value)}
															id="exampleInputPassword" placeholder="ادخل كلمة السر " />
													</div>
													<div className="row justify-content-between">
														<button className="btn btn-primary btn-user  shorooq " style={{ fontSize: '22px' }}> تسجيل الدخول الى النظام  </button>
														<button className="btn btn-info btn-user shorooq " style={{ fontSize: '22px' }}> تسجيل مستخدم جديد </button>
													</div>
												</form>

											</div>
											<div className="col-lg-4 d-none d-lg-block text-center my-auto" style={{ backgroundColor: 'transparent' }}>
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

