<template>
	<form
		class="border p-4"
		@submit.prevent="addNewMember"
	>
		<h3 class="mb-4">Добавить нового участника</h3>

		<div class="form-group">
			<label class="d-block">
				<span class="d-block m-2">Никнейм</span>
				<input
					class="form-control"
					type="text"
					placeholder="Никнейм"
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

		<app-notification
			:error="error"
			:notification="notification"
			@close-event="clearError"
		></app-notification>
	</form>
</template>

<script>
	import axios from 'axios'
	import server from '../config/server'
	import AppNotification from '../components/AppNotification'

  export default {
    name: "AddNewUser",

		components: {
      AppNotification
		},

    data: () => {
      return {
        newMemberNickname: '',

        newMemberFirstName: '',

        newMemberLastName: '',

        newMemberMail: '',

        newMemberPhone: '',

				error: '',

				notification: ''
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
              this.notification = `Добавлен новый участник`
              setTimeout(() => {
                this.notification = ''
              }, 2500)
              this.newMemberNickname = ''
              this.newMemberFirstName = ''
              this.newMemberLastName = ''
              this.newMemberMail = ''
              this.newMemberPhone = ''
							resolve(response)
						})
						.catch((err) => {
							this.error = `Ошибка добавления нового участника. ${err}`
							reject(err)
						})
				})
			},

			clearError () {
        this.error = ''
			}
		}
  }
</script>
