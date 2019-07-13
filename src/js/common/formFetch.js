const formFetch = (url,params)=>{

	return fetch(url,{
		method:"POST",
		headers:{
'Content-Type': 'application/json'
		},
		params:params
	})
		.then(res=>{
			return res.json();
		})

}
export default formFetch;