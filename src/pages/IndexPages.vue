<template>
	<div class="main-page">
		<transition name="slide-effect">
			<div
				class="main-page__skew-wrapper"
				v-if="isActiveTable"
				:key="1"
			>

				<div class="main-page__main-block">
					<ul class="main-list">
						<li
							class="main-list__item"
							v-for="(item, index) in mainList"
							:key="item.id"
						>
							<span class="main-list__rank">{{ index + 1 }}</span>
							<span class="main-list__nick">{{ item.nickname }}</span>
							<span class="main-list__points">{{ item.rating }}</span>
						</li>
					</ul>
				</div>

				<div class="main-page__additional-block">
					<ul class="additional-list">
						<li
							class="additional-list__item"
							v-for="(item, index) in additionalList"
							:key="item.id"
						>
							<span class="additional-list__rank">{{ index + 21 }} </span>
							<span class="additional-list__nick">{{ item.nickname }} </span>
							<span class="additional-list__points">{{ item.rating }}</span>
						</li>
					</ul>
				</div>

			</div>
		</transition>

		<transition name="slide-effect">
			<div
				class="main-page__skew-wrapper"
				v-if="isActiveInfo"
				:key="2"
			>
				<h2>Тут будет инфа</h2>
			</div>
		</transition>


		<button @click="toggleBlock" style="position: absolute;top: 50px; left:50px">Переключить</button>
	</div>
</template>

<script>
	export default {
		name: "IndexPages",

		data: function () {
      return {
        mainList: [
					{
            id: 1,
						nickname: 'Константинопольский Константин Константинович',
						rating: 100
					},
          {
            id: 2,
            nickname: 'Петров Иван',
            rating: 99
          },
          {
            id: 3,
            nickname: 'Сидоров Петр',
            rating: 98
          },
          {
            id: 4,
            nickname: 'Иванов Петр',
            rating: 96
          },
          {
            id: 5,
            nickname: 'Петров Петр',
            rating: 95
          },
          {
            id: 6,
            nickname: 'Сидоров Петр',
            rating: 91
          },
          {
            id: 7,
            nickname: 'Иванов Петр',
            rating: 87
          },
          {
            id: 8,
            nickname: 'Петров Петр',
            rating: 83
          },
          {
            id: 9,
            nickname: 'Сидоров Петр',
            rating: 80
          },
          {
            id: 10,
            nickname: 'Иванов Петр',
            rating: 78
          },
          {
            id: 11,
            nickname: 'Петров Петр',
            rating: 76
          },
          {
            id: 12,
            nickname: 'Сидоров Петр',
            rating: 76
          },
          {
            id: 13,
            nickname: 'Иванов Петр',
            rating: 75
          },
          {
            id: 14,
            nickname: 'Петров Петр',
            rating: 73
          },
          {
            id: 15,
            nickname: 'Петров Петр',
            rating: 72
          },
          {
            id: 16,
            nickname: 'Иванов Петр',
            rating: 70
          },
          {
            id: 17,
            nickname: 'Сидоров Петр',
            rating: 69
          },
          {
            id: 18,
            nickname: 'Петров Петр',
            rating: 69
          },
          {
            id: 19,
            nickname: 'Иванов Петр',
            rating: 68
          },
          {
            id: 20,
            nickname: 'Сидоров Петр',
            rating: 64
          }
				],

				isActiveTable: false,

				isActiveInfo: true
      }
		},

		computed: {
      additionalList: function () {
        let list =[]
        for (let i = 0; i < 60; i++) {
          let item = {
            id: 60 + i,
            nickname: 'Иванов Виталий',
            rating: 63 - i
					}
          list.push(item)
        }
        return list
      }
		},

		methods: {
      toggleBlock () {
        if (this.isActiveTable) {
          this.isActiveTable = false
					setTimeout(() => {
            this.isActiveInfo = true
					}, 300)
				}
        if (this.isActiveInfo) {
          this.isActiveInfo = false
          setTimeout(() => {
            this.isActiveTable = true
          }, 300)
        }
			}
		}
	}
</script>

<style lang="scss">
	body {
		margin: 0;
		padding: 0;
		font-family: Arial, Helvetica, sans-serif;
	}

	.main-page {
		width: 1920px;
		height: 1080px;
		background-color: #005aab;
		overflow: hidden;

		&__skew-wrapper {
			display: flex;
			width: 81.875%;
			height: 100%;
			padding: 50px;
			transform-origin: left bottom;
			transform: skew(-20deg);
			background-color: white;
			box-sizing: border-box;
		}

		&__main-block {
			width: 40.21739%;
			margin-right: 4.7554%;
		}

		&__additional-block {
			width: 56.11413%;
		}
	}

	.main-list {
		margin: 0;
		padding: 0;
		list-style: none;

		&__item {
			display: flex;
			margin: 0 0 6px 0;
			padding: 6px 24px 6px 0;
			font-size: 2.7777vh;
			line-height: 3.0555vh;
			font-weight: bold;
			background-color: rgba(0,0,0,0.1);
		}

		&__rank {
			display: block;
			min-width: 50px;
			margin-right: 30px;
			text-align: right;
		}

		&__nick {
			display: block;
			flex-grow: 1;
			padding-right: 6px;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}

		&__points {
			display: block;
		}
	}

	.additional-list {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		max-height: 990px;
		margin: 5px 0 0 0;
		padding: 0;
		list-style: none;

		&__item {
			display: flex;
			flex-basis: 45%;
			margin: 0 6.4164% 5px 0;
			padding: 4px 24px 4px 0;
			font-size: 1.6666vh;
			line-height: 1.85188vh;
			background-color: rgba(0,0,0,0.1);
		}

		&__rank {
			display: block;
			min-width: 36px;
			margin-right: 30px;
			padding-right: 6px;
			text-align: right;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}

		&__nick {
			display: block;
			flex-grow: 1;
		}

		&__points {
			display: block;
		}
	}

	// animation effect
	.slide-effect {

		&-enter {
			transform: skew(-20deg) translateX(2000px);

			&-active {
				transition: transform 0.3s;
			}

			&-to {
				transform: skew(-20deg) translateX(0);
			}
		}

		&-leave {
			transform: skew(-20deg) translateX(0);

			&-active {
				transition: transform 0.3s;
			}

			&-to {
				transform: skew(-20deg) translateX(-2000px);
			}
		}
	}
</style>