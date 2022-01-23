<template>
	<div id="navbar">
		<nav class="navbar navbar-expand-lg navbar-light bg-transparent">
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" href="/admin/profile">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/admin/create_user">Create User</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/admin/list_users"> List Users</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/admin/create_admin">Create Admin</a>
					</li>
				</ul>
			</div>
		</nav>
		<a class="nav-link" href="/logout">Logout</a>
	</div>

</template>

<style scoped>
#navbar {
	padding: 10px;
	display: flex;
	justify-content: center;
	background-color: transparent;
	width: 100%;
}

nav {
	width: 80%;
}
</style>

<script>
/*export default({
    name: "App",
    data() {
        return {};
    },
})*/
</script>
