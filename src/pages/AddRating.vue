<template>
	<form
		class="border p-4"
		@submit.prevent="addNewMember"
	>
		<h3 class="mb-4">Начислить баллы</h3>

		<div class="form-group">
			<label class="d-block">
				<span class="d-block m-2">Nickname</span>
				<input
					class="form-control"
					type="text"
					placeholder="Nickname"
					required
					v-model="memberNickname"
				>
			</label>
		</div>

		<div class="form-group">
			<label class="d-block">
				<span class="d-block m-2">Фамилия</span>
				<input
					class="form-control"
					type="text"
					placeholder="Фамилия"
					required
					v-model="memberSurname"
				>
			</label>
		</div>

		<button type="submit" class="btn btn-primary">Применить</button>
	</form>
</template>

<script>
  export default {
    name: "AddRating",

		data () {
      return {
        memberNickname: '',

        memberSurname: ''
			}
		}
  }
</script>
