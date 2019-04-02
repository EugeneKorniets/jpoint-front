<template>
	<form
		class="border p-4"
		@submit.prevent="addNewMember"
	>
		<h3 class="mb-4">Добавить нового участника</h3>

		<div class="form-group">
			<label class="d-block">
				<span class="d-block m-2">Nickname</span>
				<input
					class="form-control"
					type="text"
					placeholder="Nickname"
					required
					v-model="newMemberNickname"
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
					v-model="newMemberSurname"
				>
			</label>
		</div>

		<div class="form-group">
			<label class="d-block">
				<span class="d-block m-2">Имя</span>
				<input
					class="form-control"
					type="text"
					placeholder="Имя"
					required
					v-model="newMemberMiddleName"
				>
			</label>
		</div>

		<div class="form-group">
			<label class="d-block">
				<span class="d-block m-2">Отчество</span>
				<input
					class="form-control"
					type="text"
					placeholder="Отчество"
					v-model="newMemberLastName"
				>
			</label>
		</div>

		<div class="form-group">
			<label class="d-block">
				<span class="d-block m-2">Email</span>
				<input
					class="form-control"
					type="email"
					placeholder="Email"
					required
					v-model="newMemberMail"
				>
			</label>
		</div>

		<div class="form-group">
			<label class="d-block">
				<span class="d-block m-2">Тел</span>
				<input
					class="form-control"
					type="tel"
					placeholder="Тел"
					required
					v-model="newMemberPhone"
				>
			</label>
		</div>

		<div class="form-group">
			<label class="d-block">
				<span class="d-block m-2">Баллы</span>
				<input
					class="form-control"
					type="number"
					placeholder="Баллы"
					v-model="newMemberPoints"
				>
			</label>
		</div>

		<button type="submit" class="btn btn-primary">Добавить</button>
	</form>
</template>

<script>
  export default {
    name: "AddNewUser",

    data: () => {
      return {
        newMemberNickname: '',

        newMemberSurname: '',

        newMemberMiddleName: '',

        newMemberLastName: '',

        newMemberMail: '',

        newMemberPhone: '',

        newMemberPoints: 0
      }
    }
  }
</script>
