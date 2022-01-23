<template>
    <div class="vue-tempalte">
        <form>
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>

        </form>
    </div>
</template>

<script>
    import router from "../../router";

    export default {
	    data() {
		    return {}
	    },
	    methods:{
		    submitForm(){
			    let myForm = document.getElementById('frm');
			    let formData = new FormData(myForm);
			    const data = {};
			    // need to convert it before using not with XMLHttpRequest
			    for (let [key, val] of formData.entries()) {
				    Object.assign(data, {[key]: val})
			    }
			    console.log(data);
			    const res = fetch('http://localhost:3333/admin/login',{
				    method: "POST",
				    headers: {
					    "Content-Type": "application/json",
				    },
				    body: JSON.stringify(data)
			    }).then(data => data.json())
					    .then(data =>{
						    console.log(data)
					    });
			    const token = "Bearer" + res.access_token;
			    localStorage.setItem("access_token", token);
			    router.push('/login')
		    }
	    }

    }
</script>