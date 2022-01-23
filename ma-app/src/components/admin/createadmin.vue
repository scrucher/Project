<template>
	<div>
		<NavBar/>
		<section>
			<div class="card">
				<h1>Create User</h1>
				<form v-on:submit.prevent="submitForm()" id="frm">
					{{ data.msg }}
					<div class="form-group row">
						<label  class="col-sm-2 col-form-label">Email</label>
						<div class="col-sm-10">
							<input type="text" name="email" class="form-control" id="inputPassword" placeholder="example@example.com" required>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword" class="col-sm-2 col-form-label">Full Name</label>
						<div class="col-sm-10">
							<input type="text" name="full_name" class="form-control" id="inputPassword" placeholder="John Doe" required>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
						<div class="col-sm-10">
							<input type="password" name="password" class="form-control" id="inputPassword" placeholder="Password" required>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword" class="col-sm-2 col-form-label">Role</label>
						<select class="form-select">
							<option class="form-select" value="Manager">Manager</option>
							<option class="form-select" value="Consultant">Consultant</option>
						</select>
					</div>
					<div class="form-group row" id="btn-div">
						<input id="btn" type="submit" class="btn btn-info" value="submit">
					</div>
				</form>
			</div>
		</section>
	</div>
</template>

<script>
import NavBar from "./NavBar";

export default {
	name: "createadmin",
	data: ()=>{
		return {
			data: {}
		}
	},
	components: {
		"NavBar": NavBar,
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
			const res = fetch('http://localhost:3333/admin/signup',{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data)
			}).then(data => data.json())
					.then(data =>{
						console.log(data)
					});
			this.data= res.msg;
		}
	}

}
</script>

<style scoped>
select{
	width: 200px;
}
section{
	padding: 100px;
}
form{
	padding: 50px 50px 50px 50px;
}
h1{
	align-content: center;
	color: rgb(49, 47, 47);
	padding: 20px;
}
.form-group{
	padding: 10px;
}
.btn{
	width: 100px;
	height: 50px;
}
.btn-div{
	display: flex;
	justify-content: end;
	padding-right: 50px ;
}

</style>