import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '../../State/rootReducer';
import {getAppTypesRequest} from "../../State/lookUps";

function NewApp() {
	const lookUpState = useSelector<RootState,RootState["lookUp"]>(state => state.lookUp);
  const {AppTypes} = lookUpState;
  let dispatch = useDispatch();
  useEffect(() => {
    const GetDropdownValues = async () => {
      if (AppTypes === undefined) {
        dispatch(getAppTypesRequest());
      }
    };
    GetDropdownValues();

  }, []);


    return (
        <Layout>
                  <main className="login-bg">
        <div className="container" style={{marginBottom: '80px'}}>
          {/* Outer Row */}
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-1 shadow my-5 animate__animated animate__backInDown " style={{border: '1px solid rgb(189, 189, 189)'}}>
                <div className="card-header bg-dark">
                  <div className="text-center">
                    <h1 className=" text-gray-900 mb-1 shorooq gold" style={{fontSize: '28px'}}>نموذج انشاء معاملة جديدة</h1>
                  </div>
                </div>
                <div className="card-body p-0 ">
                  {/* Nested Row within Card Body */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="p-5">
                        <form className="user">
                          <div className="form-group">
                            <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="ادخل رقم الموظف " />
                          </div>
                          <div className="form-group">
                            <Select 
                             name="AppType" 
                             placeholder=" Choose App Type "
                             options={AppTypes} />
                          </div>
                          <div className="row justify-content-center"> <a href="001-001.html" className="btn btn-primary btn-user  shorooq " style={{fontSize: '22px'}}>
                              بدء معاملة جديدة
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></main>
    );
        </Layout>
            
        
    )
}

export default NewApp
