export default function (instance) {
    return {
        getWords (word) {
            return instance.get('words', {
                params: {
                    sp: `${word}*`,
                    md: 'd,r,p',
                    max: 10,
                    ipa: 1
                }
            })
        }
    }
}
