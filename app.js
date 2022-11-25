particlesJS('particles-js', {
  particles: {
    number: { value: 500, density: { enable: true, value_area: 1000 } },
    color: { value: '#ffffff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 12 },
      image: { src: 'img/github.svg', width: 100, height: 100 },
    },
    opacity: {
      value: 0.8,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 2,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 1200, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: { enable: true, mode: 'bubble' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: {
        distance: 400,
        size: 2,
        duration: 4,
        opacity: 1,
        speed: 0,
      },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
})
// var count_particles, stats, update
// stats = new Stats()
// stats.setMode(0)
// stats.domElement.style.position = 'absolute'
// stats.domElement.style.left = '0px'
// stats.domElement.style.top = '0px'
// document.body.appendChild(stats.domElement)
// count_particles = document.querySelector('.js-count-particles')
// update = function () {
//   stats.begin()
//   stats.end()
//   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length
//   }
//   requestAnimationFrame(update)
// }
// requestAnimationFrame(update)

//TEXT CODE
function type(n, t) {
  var str = document.getElementsByTagName('code')[n].innerHTML.toString()
  var i = 0
  document.getElementsByTagName('code')[n].innerHTML = ''

  setTimeout(function () {
    var se = setInterval(function () {
      i++
      document.getElementsByTagName('code')[n].innerHTML = str.slice(0, i) + '|'
      if (i == str.length) {
        clearInterval(se)
        document.getElementsByTagName('code')[n].innerHTML = str
      }
    }, 60)
  }, t)
}

type(0, 400)
type(1, 4000)
type(2, 12000)

// RELLAX

// Accepts any class name
var rellax = new Rellax('.rellax')

//breakpoints
// This is the default setting
var rellax = new Rellax('.rellax', {
  breakpoints: [576, 768, 1201],
})

// Center all the things!
// var rellax = new Rellax('.rellax', {
//   center: true,
// })

// SCALE ON SCROLL
