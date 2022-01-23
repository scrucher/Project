<template>
	<div>
		<NavBar/>
		<section>
			<div class="card">
				<h1>List Users</h1>
				<div class="table-responsive">
					<table class="table">
						<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Full Name</th>
							<th scope="col">Email</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>Otto</td>
						</tr>
						</tbody>
					</table>
				</div>

			</div>
		</section>
	</div>
</template>

<script>
import NavBar from "./NavBar";

export default {
	name: "list_users",
	components: {
		"NavBar": NavBar,
	}
}
</script>

<style scoped>
	section{
		padding: 100px;
	}
	.table-responsive{
		padding: 50px 50px 50px 50px;
	}

</style>