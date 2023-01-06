import { ref, onMounted, onUnmounted } from "vue";

export default function useScroll() {
  const isReachBottom = ref(false);
  const scrollTop = ref(0);
  const scrollListenerHandler = () => {
    scrollTop.value = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeigth = document.documentElement.clientHeight;
    if (scrollTop.value + clientHeigth >= scrollHeight) {
      isReachBottom.value = true;
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });

  return { isReachBottom, scrollTop };
}
