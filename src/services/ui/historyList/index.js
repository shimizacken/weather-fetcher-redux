export const getHistoryList = () => {

    const historyList = window.localStorage.getItem('_history_list_');

    if (historyList) {
        
        const array = JSON.parse(historyList);

        return array.sort((a, b) => new Date(b.date) - new Date(a.date))
                                                                    .reverse();
    }
}