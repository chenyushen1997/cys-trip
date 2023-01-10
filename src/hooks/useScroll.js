import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from "vue";
import { throttle } from "underscore";

export default function useScroll(elRef) {
  let el = window;
  const isReachBottom = ref(false);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  const clientHeigth = ref(0);
  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      scrollTop.value = document.documentElement.scrollTop;
      clientHeigth.value = document.documentElement.clientHeight;
      scrollHeight.value = document.documentElement.scrollHeight;
    } else {
      scrollTop.value = el.scrollTop;
      clientHeigth.value = el.clientHeight;
      scrollHeight.value = el.scrollHeight;
    }
    if (scrollTop.value + clientHeigth.value >= scrollHeight.value) {
      console.log("滚到了底部");
      isReachBottom.value = true;
    }
  }, 100);

  onMounted(() => {
    if (elRef) el = elRef.value;
    el.addEventListener("scroll", scrollListenerHandler);
  });

  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler);
  });

  onActivated(() => {
    if (elRef) el = elRef.value;
    el.addEventListener("scroll", scrollListenerHandler);
  });

  onDeactivated(() => {
    el.removeEventListener("scroll", scrollListenerHandler);
  });

  return { isReachBottom, scrollTop };
}
