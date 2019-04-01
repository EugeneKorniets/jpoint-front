<template>
	<div class="admin-page">
		<header class="admin-page__header mb-4">
			<h1 class="admin-page__heading p-3">Управление дашбордом SM Lab</h1>
		</header>

		<main class="admin-page__content">
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
						<span class="d-block m-2">ФИО</span>
						<input
							class="form-control"
							type="text"
							placeholder="ФИО"
							required
							v-model="newMemberFullName"
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
		</main>
	</div>
</template>

<script>
  export default {
    name: "Admin",

		data: () => {
      return {
        newMemberNickname: '',

				newMemberFullName: '',

				newMemberMail: '',

				newMemberPhone: '',

				newMemberPoints: 0
			}
		},

		methods: {
      addNewMember () {
        // eslint-disable-next-line
        console.log(`Submit add member form: ${this.newMemberNickname}, ${this.newMemberFullName}, ${this.newMemberMail}, ${this.newMemberPhone}, ${this.newMemberPoints}`)
			}
		}
  }
</script>

<style lang="scss">
	.admin-page {

		&__header {
			color: #fff;
			text-align: center;
			background-color: #005aab;
		}

		&__heading {
			font-size: 24px;
			line-height: 44px;
		}

		&__content {
			width: 80%;
			min-width: 980px;
			margin: 0 auto;
		}
	}
</style>