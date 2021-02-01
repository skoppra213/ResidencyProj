import React, { useContext, useEffect, useState } from "react";
import { login } from "../api/login";
import { UserInfo, userInfo } from "../types/userInfo";
import { useHistory } from "react-router-dom";
import { assignToType } from "../utils/assignToType";
import ErrorInfo from "../types/errorInfo";
import UserContext from "../context/AppContext";



const Login = () => {

	const {user,setUser} = useContext(UserContext);
    console.log("Login ~ user", user);
	const history = useHistory();

	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [isFieldEmpty, setIsFieldEmpty] = useState(false);


	useEffect(() => {
		document.body.classList.add("sb-sidenav-toggled");

		return () => {
			document.body.classList.remove("sb-sidenav-toggled");
		}
	}, []);

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();

		setUser({...user, isLoggedIn: true});
		return;

		if (username.trim() === "" || password.trim() === "") {
			setIsFieldEmpty(true);
			return;

		}

		setIsFieldEmpty(false);

		setLoading(true);

		let loginRes = await login(username, password);

		let errInfo: ErrorInfo = new ErrorInfo();
	//	console.log('loginRes', loginRes);

		if (loginRes.userInfo) {
			console.log('success login');
			// user = assignToType<UserInfo>(loginRes.userInfo, userInfo);
			// user.isLoggedIn = true;
			// user.hasError = false;
			setLoading(false);
			//history.push("/");
		}
		else {
			console.log('error login');

			//TODO: assign user to error type
			errInfo = assignToType<ErrorInfo>(loginRes, errInfo);
		//	console.log("errInfo", errInfo);
			// user.isLoggedIn = false;
			// user.hasError = true;
			// user.error = errInfo;
			setLoading(false);
		}

	}
	return (

		<>


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

											{true &&
												<div className="alert alert-danger" role="alert">
													اسم المتسخدم / كلمة المرور غير صحيحة!
												</div>
											}

											{isFieldEmpty &&
												<div className="alert alert-danger" role="alert">
													مطلوب اسم المستخدم وكلمة المرور!
												</div>
											}

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
		</>
	);
};

export default Login;

