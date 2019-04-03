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
					v-model="newMemberLastName"
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
					v-model="newMemberFirstName"
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
					minlength="11"
					maxlength="11"
				>
			</label>
		</div>

		<button
			type="submit"
			class="btn btn-primary"
		>Добавить</button>
	</form>
</template>

<script>
	import axios from 'axios'
	import server from '../config/server'

  export default {
    name: "AddNewUser",

    data: () => {
      return {
        newMemberNickname: '',

        newMemberFirstName: '',

        newMemberLastName: '',

        newMemberMail: '',

        newMemberPhone: ''
      }
    },

		methods: {
      addNewMember () {
        let data = {
          nickname: this.newMemberNickname,
					name: this.newMemberFirstName,
					surname: this.newMemberLastName,
					email: this.newMemberMail,
					phone: this.newMemberPhone
        }
        return new Promise((resolve, reject) => {
          axios({
						url: `${server.host}${server.endpoints.create}`,
						method: 'POST',
						data: data
					})
						.then((response) => {
              this.newMemberNickname = ''
              this.newMemberFirstName = ''
              this.newMemberLastName = ''
              this.newMemberMail = ''
              this.newMemberPhone = ''
							resolve(response)
						})
						.catch((err) => {
							reject(err)
						})
				})
			}
		}
  }
</script>
