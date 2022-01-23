<template>
	<div>
		<NavBar/>
		<section>
			<div class="card">
				<h1>List Companies</h1>
				<div class="table-responsive">
					<table class="table" >
						<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Full Name</th>
							<th scope="col">Email</th>
						</tr>
						</thead>
						<tbody>
						<tr >
							<th scope="row">1</th>
							<td v-bind:key="res.name">{{ res.name }}</td>
							<td>{{ res.email }}</td>
						</tr>
						</tbody>
					</table>
				</div>

			</div>
		</section>
	</div>

</template>

<style scoped>
section {
	padding: 100px;
}

</style>


<script>
import NavBar from './NavBar.vue';

export default {
	name: "CreateCompany",
	components: {
		"NavBar": NavBar,
	},
	data(){

		return {
			// data: this.getCompanies(),
			res: [],
		}
	},
	beforeMount() {
		this.getCompanies()
	},
	methods: {
		getCompanies() {
			const data = fetch("http://localhost:3333/company", {
				method: "Get",
				headers: {
					"Content-Type": "application/json",
				}
			}).then(data=> data.json())
					.then((data) => {
						const resp = JSON.stringify(data)
						// this.res = JSON.stringify(data);
						this.res= resp
						console.log(this.res)
						return resp
						// return this.res;
					})
			console.log(JSON.stringify(data))
			return data;
		}
	},
}

</script>