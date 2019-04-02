<template>
	<div class="border p-4">
		<h3 class="mb-4">Начислить баллы</h3>

		<div class="form-group mb-5 position-relative">
			<label class="d-block">
				<span class="d-block m-2">Поиск по никнейму</span>
				<input
					class="form-control"
					type="text"
					placeholder="Nickname"
					required
					v-model="searchString"
				>
			</label>
			<ul
				class="drop-down__list border"
				v-if="!currentId && searchString.length"
			>
				<li
					class="drop-down__item border-top"
					v-for="item in relevantSearchList"
					@click="setCurrentMember(item)"
					:key="item.id"
				>{{ item.nickname }}</li>
			</ul>
		</div>

		<form
			class="border m-1 p-4 row"
			v-show="currentId"
			@submit.prevent="updateMemberData"
		>
			<div class="col-6">
				<div class="form-group">
					<label class="d-block">
						<span class="d-block m-2">Nickname</span>
						<input
							class="form-control"
							type="text"
							placeholder="Nickname"
							required
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
					type="submit"
					class="btn btn-primary"
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
							max="100"
							placeholder="Баллы"
							required
							v-model="currentScore"
						>
					</label>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	import axios from 'axios'
	import server from '../config/server'

  export default {
    name: "AddRating",

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

				relevantSearchList: []
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
							reject(err)
						})
				})
			},

			setCurrentMember (member) {
        this.searchString = member.nickname
        this.currentId = member.id
				this.currentNickname = member.nickname
				this.currentLastName = member.surname
				this.currentFirstName = member.name
				this.currentMail = member.email
				this.currentPhone = member.phone
				this.currentScore = member.score
        this.relevantSearchList = []
			},

      updateMemberData () {
        return new Promise((resolve, reject) => {
          let data = {
            id: this.currentId,
            nickname: this.currentNickname,
						surname: this.currentLastName,
						name: this.currentFirstName,
						email: this.currentMail,
						phone: this.currentPhone,
						score: this.currentScore
					}
          axios({
            url: `${server.host}${server.endpoints.update}`,
            method: 'POST',
						data: data
          })
            .then((response) => {
              this.searchString = ''
              this.currentId = ''
              this.currentNickname = ''
              this.currentLastName = ''
              this.currentFirstName = ''
              this.currentMail = ''
              this.currentPhone = ''
              this.currentScore = ''
              this.relevantSearchList = []
              resolve(response)
            })
            .catch((err) => {
              reject(err)
            })
        })
			}
		},

		watch: {
      searchString () {
        this.searchMember()
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
