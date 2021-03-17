import React, {useEffect,useState} from 'react';
import Layout from "../components/Layout";
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '../../State/rootReducer';
import {getAppTypesRequest} from "../../State/lookUps";
import {SelectOptions} from '../../types/UIRelated'
import {getCreateRequest} from "../../State/newApp";
function NewApp() {
	const AppTypesState = useSelector<RootState,RootState["lookUp"]>(state => state.lookUp);
  const newAppState = useSelector<RootState,RootState["newApp"]>(state => state.newApp);
  // const [appType, setappType] = useState<SelectOptions>({label:"",value:""});
  const {AppTypes} = AppTypesState;
  let dispatch = useDispatch();
  useEffect(() => {
    const GetDropdownValues = async () => {
      if (AppTypes === undefined) {
        dispatch(getAppTypesRequest());
      }
    };
    GetDropdownValues();

  }, []);

	const handleSubmit = async (e: React.SyntheticEvent) => {
		 e.preventDefault();
     newAppState.applicationDate = new Date();
     newAppState.userId=5;
     newAppState.isActive=false;
     newAppState.stepNo=0;
     newAppState.applicationStatusId=1;
     newAppState.remark="ss";
   

		  dispatch(getCreateRequest(newAppState));
	}

  const handleAppTypeChange = async (value?:SelectOptions|SelectOptions[] | null) => {
    let temp : SelectOptions= value as SelectOptions;
    newAppState.applicationTypeId = Number(temp?.value);
  }
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
                        <form className="user" onSubmit={handleSubmit}>
                          <div className="form-group">
                            <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="ادخل رقم الموظف " />
                          </div>
                          <div className="form-group">
                            <Select 
                             name="AppType" 
                             placeholder=" Choose App Type "
                             options={AppTypes}
                             onChange={handleAppTypeChange}
                              />
                          </div>
                          <div className="row justify-content-center"> <button type="submit" className="btn btn-primary btn-user  shorooq " style={{fontSize: '22px'}}>
                              بدء معاملة جديدة
                            </button>
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
