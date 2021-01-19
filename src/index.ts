import vue from 'vue'

export default {
  install (Vue: typeof vue) {
    Vue.directive('preventWheelTransitions', {
      inserted: (element: HTMLElement) => {
        const preventHorizontallyStuckWheel = (event: WheelEvent) => {
          const { deltaX, deltaY } = event

          if (Math.abs(deltaX) < Math.abs(deltaY)) return

          const isStuckLeft = deltaX < 0 && element.scrollLeft <= 0
          const isStuckRight = deltaX > 0 && element.scrollWidth <= element.scrollLeft + element.clientWidth
          if (isStuckLeft || isStuckRight) {
            event.preventDefault()
          }
        }

        element.addEventListener('wheel', preventHorizontallyStuckWheel)
      }
    })
  }
}
