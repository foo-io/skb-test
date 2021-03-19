export default function () {
    return {
        saveWord (word) {
            try {
                if (localStorage.getItem('words')) {
                    let words = JSON.parse(localStorage.getItem('words'))
                    words.push(word)
                    localStorage.setItem('words', JSON.stringify(words))
                } else {
                    localStorage.setItem('words', JSON.stringify([ word ]))
                }
                return true
            } catch (e) {
                console.log('API Local: saveWord - ', e)
                return false
            }
        },
        getWords () {
            try {
                if (localStorage.getItem('words')) {
                    return JSON.parse(localStorage.getItem('words'))
                } else {
                    return []
                }
            } catch (e) {
                console.log('API Local: getWords - ', e)
                return false
            }
        },
        deleteWord (word) {
            try {
                let words = JSON.parse(localStorage.getItem('words'))
                let newList = words.filter(elem => elem.word !== word);
                localStorage.setItem('words', JSON.stringify(newList))
                return true
            } catch (e) {
                console.log('API Local: removeWord - ', e)
                return false
            }
        }
    }
}
