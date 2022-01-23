<template>
    <div class="vue-template">
        <div class="card">
            <form v-on:submit.prevent="submitForm()" id="frm">
                <h3>Sign Up</h3>

                <div class="form-group">
                    <label>Full Name</label>
                    <input name="full_name" type="text" class="form-control form-control-lg"/>
                </div>

                <div class="form-group">
                    <label>Email address</label>
                    <input name="email" type="email" class="form-control form-control-lg" />
                </div>

                <div class="form-group">
                    <label>Password</label>
                    <input name="password" type="password" class="form-control form-control-lg" />
                </div>

                <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

                <p class="forgot-password text-right">
                    Already registered 
                    <router-link :to="{name: 'login'}">sign in?</router-link>
                </p>
            </form>            
        </div>

    </div>
</template>
<style scoped>
    .vue-tempalte{
    width: 450px;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
    }
</style>

<script>
import router from '../router'

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
            const res = fetch('http://localhost:3333/user/signup',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }).then(data => data.json())
            .then(data =>{
							console.log(data);
            });
						const token = "Bearer"+ res.access_token;
						localStorage.setItem("access_token", token);
						router.push('/login')
            }    
        }
       
    }
</script>