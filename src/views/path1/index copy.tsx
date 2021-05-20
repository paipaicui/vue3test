import { defineComponent, ref, reactive, nextTick, onMounted, onUnmounted } from "vue";
import { setup } from "vue-class-component";
import { useRouter } from "vue-router";


const Component =  defineComponent({
    setup(){
        const router = useRouter()
        const answerRef = ref()
        const addAnswer = (item:string)=>{
          console.log(item)
        }
        const title = ref('title')
      
        const messageDom = () => (
            <div onClick={() => addAnswer('item')}>this is messageDom</div>
        )
      
        const answerDom = () =>(
            <div>{title.value} this is answerDom</div>
        )
      
      
        return () => (
          <div class="pd-nav">
            {messageDom()}
            {answerDom()}
          </div>
        )
    }

})
export default Component