// import { defineComponent, ref, reactive, nextTick, onMounted, onUnmounted } from "vue";
// import { useRouter } from "vue-router";
import { defineComponent, ref,  onMounted } from "vue";

export default defineComponent({
    name: 'this',
    setup() {
        // const router = useRouter()
        // const answerRef = ref()
        const addAnswer = (item: string) => {
            console.log(item)
        }
        const title = ref<string>('title')
        const decLiteral = ref<number>(6)

        const messageDom = () => (
            <div onClick={() => addAnswer('item')}>this is messageDom</div>
        )

        const answerDom = () => (
            <div>{title.value} this is answerDom {decLiteral.value}</div>
        )
        onMounted(() => {
            console.log('mounted')
        })


        return () => (
            <div class="pd-nav">
                {messageDom()}
                {answerDom()}
            </div>
        )
    }

})