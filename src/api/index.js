import instance from '@/api/instance'
import wordsModule from '@/api/words'
import localModule from '@/api/local'

export default {
    words: wordsModule(instance),
    local: localModule(),
}
