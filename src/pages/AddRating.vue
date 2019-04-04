<template>
	<div class="border p-4">
		<h3 class="mb-4">Редактировать участника</h3>

		<div class="form-group mb-5 position-relative">
			<label class="d-block">
				<span class="d-block m-2">Поиск по фамилии или имени</span>
				<div class="input-group mb-3">
					<input
						class="form-control"
						type="text"
						required
						v-model="searchString"
					>
					<div class="input-group-append">
						<button
							class="input-group-text"
							v-if="searchString.length"
							@click="clearForm"
						>X</button>
					</div>
				</div>
			</label>
			<ul class="drop-down__list border">
				<li
					class="drop-down__item border-top"
					v-for="item in relevantSearchList"
					@click="setCurrentMember(item)"
					:key="item.id"
				>{{ item.surname + ' ' + item.name }}</li>
			</ul>
		</div>

		<form
			class="border m-1 p-4 row"
			@submit.prevent="updateMemberData"
		>
			<div class="col-6">
				<div class="form-group">
					<label class="d-block">
						<span class="d-block m-2">Никнейм</span>
						<input
							class="form-control"
							type="text"
							placeholder="Никнейм"
							v-model="currentNickname"
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
							v-model="currentLastName"
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
							v-model="currentFirstName"
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
							v-model="currentMail"
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
							v-model="currentPhone"
							minlength="11"
							maxlength="11"
						>
					</label>
				</div>

				<button
					class="btn btn-primary"
					type="submit"
					v-show="currentId"
				>Применить</button>
			</div>
			<div class="col-6">
				<div class="form-group">
					<label class="d-block">
						<span class="d-block m-2">Баллы</span>
						<input
							class="form-control"
							type="number"
							min="0"
							max="62"
							placeholder="Баллы"
							required
							v-model="currentScore"
						>
					</label>
				</div>
				<div class="form-group">
					<span class="d-block m-2 mt-4">Управление активностью</span>

					<input
						id="active"
						class="custom-control-input"
						type="checkbox"
						v-model="currentActive"
					>
					<label
						class="d-block ml-4 custom-control-label"
						for="active"
					>
						{{ currentActive ? 'Активен' : 'Неактивен' }}
					</label>
				</div>
			</div>
		</form>
		<app-notification
			:error="error"
			:notification="notification"
			@close-event="clearNotification"
		></app-notification>
	</div>
</template>

<script>
	import axios from 'axios'
	import server from '../config/server'
	import AppNotification from '../components/AppNotification'

  export default {
    name: "AddRating",

		components: {
      AppNotification
    },

		data () {
      return {
        searchString: '',

				currentId: '',

        currentNickname: '',

				currentLastName: '',

        currentFirstName: '',

				currentMail: '',

				currentPhone: '',

				currentScore: '',

				currentActive: '',

				relevantSearchList: [],

				error: '',

				notification: ''
			}
		},

		methods: {
      searchMember () {
        return new Promise((resolve, reject) => {
          axios({
						url: `${server.host}${server.endpoints.list}?term=${this.searchString}`,
						method: 'GET'
					})
						.then((response) => {
							this.relevantSearchList = response.data
							resolve(response)
						})
						.catch((err) => {
							this.error = `Ошибка загрузки списка участников. ${err}`
							reject(err)
						})
				})
			},

			setCurrentMember (member) {
        this.error = ''
        this.searchString = `${member.surname} ${member.name}`
        this.currentId = member.id
				this.currentNickname = member.nickname
				this.currentLastName = member.surname
				this.currentFirstName = member.name
				this.currentMail = member.email
				this.currentPhone = member.phone
				this.currentScore = member.score
				this.currentActive = member.active
        this.relevantSearchList = []
			},

      updateMemberData () {
        this.error = ''
        return new Promise((resolve, reject) => {
          let data = {
            id: this.currentId,
            nickname: this.currentNickname,
						surname: this.currentLastName,
						name: this.currentFirstName,
						email: this.currentMail,
						phone: this.currentPhone,
						score: this.currentScore,
						active: this.currentActive
					}
          axios({
            url: `${server.host}${server.endpoints.update}`,
            method: 'POST',
						data: data
          })
            .then((response) => {
              this.notification = `Данные об участнике обновлены`
							setTimeout(() => {
								this.notification = ''
							}, 2500)
              resolve(response)
            })
            .catch((err) => {
              this.error = `Ошибка обновления данных участника. ${err}`
              reject(err)
            })
        })
			},

			clearForm () {
        this.searchString = ''
        this.currentId = ''
        this.currentNickname = ''
        this.currentLastName = ''
        this.currentFirstName = ''
        this.currentMail = ''
        this.currentPhone = ''
        this.currentScore = ''
        this.currentActive = ''
        this.relevantSearchList = []
			},

      clearNotification () {
        this.error = ''
        this.notification = ''
			}
		},

		watch: {
      searchString () {
        if (this.searchString.length) {
          this.searchMember()
				}
			}
		}
  }
</script>

<style lang="scss">
	.drop-down {

		&__list {
			position: absolute;
			top: 100%;
			width: 100%;
			margin: 3px 0;
			padding: 0;
			list-style: none;
			border-radius: 0.25rem;
			background-color: white;
			z-index: 1;
		}

		&__item {
			margin: 0 5px;
			padding: 0.375rem 0.75rem;
			cursor: pointer;

			&:hover {
				background-color: rgba(0, 123, 255, 0.25);
			}
		}
	}
</style>
