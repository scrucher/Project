<template>
<div>
    <NavBar/>
    <section>
        <div class="card">
                <h1>Create Company</h1>
            <form v-on:submit.prevent="submitForm()" id="frm">
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                    <input type="text" name="email" 
                    class="form-control" id="inputPassword" placeholder="example@example.com" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                    <input type="text" name="name" 
                    class="form-control" id="inputPassword" placeholder="Name" required>
                    </div>
                </div>
            <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Address 1</label>
                    <div class="col-sm-10">
                    <input type="text" name="address_1" 
                    class="form-control" id="inputPassword" placeholder="Address Line 1" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Address 2</label>
                    <div class="col-sm-10">
                    <input type="text" name="address_2" 
                    class="form-control" id="inputPassword" placeholder="Address 2" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Phone</label>
                    <div class="col-sm-10">
                    <input type="phone" name="phone" 
                    class="form-control" id="inputPassword" placeholder="0600000000" required>
                    </div>
                </div>
                    <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Description</label>
                    <div class="col-sm-10">
                    <textarea type="text" name="description" 
                    class="form-control" id="inputPassword" placeholder="description"></textarea>
                    </div>
                </div>
                <div class="form-group row">
                <div class='input-group date' id='datetimepicker2'>
                <label for="inputPassword" class="col-sm-2 col-form-label">Start Date</label>
                <Datepicker name="start_date"/>
                </div>
            </div>
            <div class="form-group row">
                <div class='input-group date' id='datetimepicker2'>
                <label for="inputPassword" class="col-sm-2 col-form-label">Fiscal Date</label>
                    <Datepicker name="fiscal_date"/>
                </div>
            </div>
            <div class="form-goup row" id="btn-div">
                <input id="btn" type="submit" class="btn btn-info" value="submit">
            </div>
            </form>
        </div>
    </section>    
</div>

</template>

<style scoped>
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


<script>
    import NavBar from './NavBar.vue';
import Datepicker from 'vuejs-datepicker';
    export default {
        name: "CreateCompany",
        components: {
            "NavBar":NavBar, 
            "Datepicker":Datepicker,
            },
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
            fetch('http://localhost:3333/company/create',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }).then(data => data.json())
            .then(data =>{
                console.log(data)
            })
            }    
        }
    }

</script>