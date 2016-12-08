// mutations 处理同步（通过$store.commit触发）
export const mutations = {
    INCREMENT(state) {
        state.count++
    },
    INDICATOR_SHOW_TRUE ( state ) {
        state.IndicatorShow =  true
    },
    INDICATOR_SHOW_FALSE ( state ) {
        state.IndicatorShow =  false
    }
}