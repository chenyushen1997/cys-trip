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
      scrollHeight.value = document.documentElement.scrollHeight;
      clientHeigth.value = document.documentElement.clientHeight;
    } else {
      scrollTop.value = el.screenTop;
      scrollHeight.value = el.scrollHeight;
      clientHeigth.value = el.offsetHeight;
    }
    if (scrollTop.value + clientHeigth.value >= scrollHeight.value) {
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
