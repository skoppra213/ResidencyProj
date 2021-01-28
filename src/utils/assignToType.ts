export function assignToType<T extends object>(arg: T , res :any): T {
    Object.keys(res).forEach((key:string)=>{
         if (arg.hasOwnProperty(key)){        
            arg[key as keyof T] = res[key];          
         }   
        })
    return arg;
  }