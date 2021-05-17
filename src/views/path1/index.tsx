import { defineComponent, ref, reactive, nextTick, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";


export default defineComponent(() => {
  const router = useRouter()
  const answerRef = ref()
  const addAnswer = (item:string)=>{
    console.log(item)
  }

  const messageDom = () => (
      <div onClick={() => addAnswer('item')}>this is messageDom</div>
  )

  const answerDom = () =>(
      <div>this is answerDom</div>
  )


  return () => (
    <div class="pd-nav">
      {messageDom()}
      {answerDom()}
    </div>
  )
})