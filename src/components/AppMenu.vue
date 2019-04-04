<template>
	<ul class="nav nav-tabs mb-3">
		<li class="nav-item">
			<router-link
				class="nav-link"
				active-class="active"
				:to="{name: 'AddNewUser'}"
			>Добавить участника</router-link>
		</li>
		<li class="nav-item">
			<router-link
				class="nav-link"
				active-class="active"
				:to="{name: 'AddRating'}"
			>Редактировать участника</router-link>
		</li>
	</ul>
</template>

<script>
  export default {
    name: "app-menu"
  }
</script>

<style>
	.menu {
		display: flex;
	}
</style>