
const actions ={
	SET_allLanguage: ({ commit }, data) => {
		commit('set_allLanguage', data)
	},
	SET_allToast: ({ commit }, data) => {
		commit('set_allToast', data)
	},
	SET_allMsg: ({ commit }, data) => {
		commit('set_allMsg', data)
	},
	SET_allIsLogin: ({ commit }, data) => {
		commit('set_allIsLogin', data)
	},













	SET_isLogin: ({ commit }, data) => {
		commit('set_login', data)
	},
	SET_allPusherAddress: ({ commit }, data) => {
		commit('set_allPusherAddress', data)
	},
}
export default actions