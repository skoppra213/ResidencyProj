import React, {useEffect,useState} from 'react';
import Layout from "../components/Layout";
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '../../State/rootReducer';
import {getAppTypesRequest} from "../../State/lookUps";
import {SelectOptions} from '../../types/UIRelated';
import { useHistory } from "react-router-dom";
import {getCreateRequest,getFetchIncompleteRequest,getUpdateRequest} from "../../State/newApp";
import {Steps} from "../../types/Enums"

function NewApp() {
	const LookUpState = useSelector<RootState,RootState["lookUp"]>(state => state.lookUp);
  const newAppState = useSelector<RootState,RootState["newApp"]>(state => state.newApp);
  const userData = useSelector<RootState,RootState["login"]>(state => state.login);
  const [appType, setappType] = useState<SelectOptions|undefined>({label:"",value:""});
  const history = useHistory();

  const {AppTypes} = LookUpState;
  let dispatch = useDispatch();

  useEffect(() => {
    if (newAppState.applicationNumber===undefined)
    {
      dispatch(getFetchIncompleteRequest(userData.userInfo?.userId as number));
    }
    else{
      console.log("newApp state is exists",newAppState.applicationTypeId);
    }

    const GetDropdownValues = async () => {
      if (AppTypes === undefined) {
        dispatch(getAppTypesRequest());
      }
    };
    GetDropdownValues();

  }, []);

  useEffect(() => {
    console.log("in useEffect ddd",newAppState.applicationTypeId,AppTypes);
   let selectedObj = AppTypes?.find(a=>a.value===newAppState.applicationTypeId?.toString());
     setappType(selectedObj);

    return () => {
    }
  }, [newAppState.applicationTypeId,AppTypes]);

  

	const handleSubmit = async (e: React.SyntheticEvent) => {
		 e.preventDefault();
     newAppState.applicationTypeId = Number(appType?.value);
     if (newAppState.applicationNumber===undefined||newAppState.applicationNumber===0)
     {
      newAppState.applicationDate = new Date();
      newAppState.userId=userData.userInfo?.userId;
      newAppState.isActive=false;
      newAppState.stepNo=Steps.CreateApp;
      newAppState.applicationStatusId=1;
      newAppState.remark="ss";
      dispatch(getCreateRequest(newAppState));
     }
    else
    {
      console.log("in else");
      
      newAppState.remark="ss1";
      dispatch(getUpdateRequest(newAppState));
    }
    history.push("/personalInfo");

	}

  const handleAppTypeChange = async (value?:SelectOptions|SelectOptions[] | null) => { 
   if (value)
   {
      let temp : SelectOptions= value as SelectOptions;
      setappType(temp);
   }
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
                             value= {appType}
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
