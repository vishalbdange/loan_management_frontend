import axios from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/json'
// const result = await axios.post('https://testapi.org/post', { name: 'John Doe' }, {
//     headers: {
//         'content-type': 'text/json'
//     }
// });
const addEmployee = async (employee) => {
  try{
    const response = await axios.post(
      "http://localhost:8080/api/employees",
       employee,{
        headers : {
          'content-type' : 'application/json',
          'Access-Control-Allow-Origin' : '*'
        }
      }
    );
    
    console.log(response);
  } catch(e){
    console.log(e)
  }

};

const getAll = async () => {

    // axios({
    //   method: "get",
    //   url: "http://localhost:8080/api/employees/getAll"
      
    
    // }).then(function (response) {
    //   console.log(response.data);
    //   return response.data;
    // });
  const response = await axios.get("http://localhost:8080/api/employees/getAll",{headers:{'Content-Type':"text/plain"}});
  console.log("This is from get All", response.data);
  return response.data;
};

export { addEmployee, getAll };
