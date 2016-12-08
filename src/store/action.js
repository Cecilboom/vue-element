// action 处理异步 （通过$store.dispatch触发）
export const actions = {
    incrementAsync({commit}) {
        setTimeout(() => {
            commit('INCREMENT')
        }, 200)
    },
    IndicatorShow ( { commit } ) {
        commit('INDICATOR_SHOW_TRUE')
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(commit('INDICATOR_SHOW_FALSE'))
            },2000)
        })
    },
    IndicatorShow2 ( { commit } ) {
        commit('INDICATOR_SHOW_TRUE')
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(commit('INDICATOR_SHOW_FALSE'))
            },4000)
        })
    }
}

