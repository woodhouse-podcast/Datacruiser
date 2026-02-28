import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const GlobeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 300

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true // Transparent background
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    const radius = 100

    // Create world map canvas (same as before)
    const createWorldMapCanvas = () => {
      const canvas = document.createElement('canvas')
      const size = 1024
      canvas.width = size
      canvas.height = size / 2
      const ctx = canvas.getContext('2d')!

      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#ffffff'

      const toCanvas = (lat: number, lon: number) => {
        const x = ((lon + 180) / 360) * canvas.width
        const y = ((90 - lat) / 180) * canvas.height
        return { x, y }
      }

      // Draw continents
      const continents = [
        [[72, -168], [72, -140], [70, -130], [60, -125], [50, -128], [40, -125], [32, -117], [25, -110], [22, -108], [20, -105], [18, -96], [20, -88], [25, -82], [30, -80], [32, -75], [40, -74], [45, -68], [50, -65], [60, -65], [65, -70], [70, -80], [72, -95], [68, -105], [65, -115], [60, -140], [65, -160], [70, -170]],
        [[12, -81], [8, -78], [5, -75], [0, -75], [-5, -75], [-10, -78], [-15, -75], [-20, -70], [-25, -70], [-30, -71], [-35, -72], [-40, -73], [-45, -72], [-50, -70], [-55, -68], [-56, -65], [-54, -60], [-50, -58], [-45, -58], [-40, -60], [-35, -58], [-30, -55], [-25, -52], [-20, -48], [-15, -45], [-10, -42], [-5, -40], [0, -38], [5, -42], [10, -48], [12, -55], [11, -65], [10, -72]],
        [[37, -17], [35, -10], [32, -6], [30, 3], [25, 10], [20, 15], [15, 20], [10, 25], [5, 30], [0, 35], [-5, 38], [-10, 40], [-15, 42], [-20, 45], [-25, 48], [-30, 50], [-35, 51], [-34, 45], [-32, 40], [-28, 35], [-24, 32], [-20, 30], [-15, 28], [-10, 25], [-5, 20], [0, 15], [5, 10], [8, 5], [10, -5], [12, -12], [15, -15], [20, -12], [25, -8], [30, -10], [35, -15]],
        [[71, -10], [70, 0], [68, 10], [65, 20], [60, 30], [58, 35], [55, 38], [50, 40], [45, 40], [40, 38], [38, 30], [40, 20], [45, 15], [50, 10], [55, 5], [60, -5], [65, -8], [70, -10]],
        [[78, 60], [75, 80], [70, 100], [65, 120], [60, 140], [55, 155], [50, 165], [45, 175], [40, 180], [35, 180], [30, 175], [25, 165], [20, 150], [15, 135], [10, 120], [5, 105], [0, 95], [-5, 90], [-8, 100], [-10, 110], [-5, 125], [0, 140], [10, 145], [20, 142], [25, 138], [30, 130], [35, 125], [40, 120], [50, 110], [60, 95], [70, 80], [75, 70]],
        [[-10, 113], [-15, 115], [-20, 118], [-25, 120], [-30, 125], [-35, 130], [-38, 138], [-40, 145], [-42, 150], [-43, 153], [-42, 150], [-38, 148], [-35, 145], [-30, 142], [-25, 140], [-20, 138], [-15, 135], [-12, 125], [-10, 118]]
      ]

      continents.forEach(points => {
        ctx.beginPath()
        points.forEach((p, i) => {
          const { x, y } = toCanvas(p[0], p[1])
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        })
        ctx.closePath()
        ctx.fill()
      })

      return canvas
    }

    const worldCanvas = createWorldMapCanvas()
    const worldCtx = worldCanvas.getContext('2d')!
    const imageData = worldCtx.getImageData(0, 0, worldCanvas.width, worldCanvas.height)

    const isLand = (lat: number, lon: number) => {
      const x = Math.floor(((lon + 180) / 360) * worldCanvas.width)
      const y = Math.floor(((90 - lat) / 180) * worldCanvas.height)
      if (x < 0 || x >= worldCanvas.width || y < 0 || y >= worldCanvas.height) return false
      const index = (y * worldCanvas.width + x) * 4
      return imageData.data[index] > 128
    }

    const latLonToVector3 = (lat: number, lon: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180)
      const theta = (lon + 180) * (Math.PI / 180)
      const x = -(radius * Math.sin(phi) * Math.cos(theta))
      const z = radius * Math.sin(phi) * Math.sin(theta)
      const y = radius * Math.cos(phi)
      return { x, y, z }
    }

    // Generate land particles
    const generateContinentParticles = () => {
      const points: { lat: number; lon: number }[] = []
      for (let i = 0; i < 80000; i++) {
        const lat = -90 + Math.random() * 180
        const lon = -180 + Math.random() * 360
        if (isLand(lat, lon)) points.push({ lat, lon })
      }
      return points
    }

    const continentPoints = generateContinentParticles()
    const particleCount = continentPoints.length
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)
    const targetPositions = new Float32Array(particleCount * 3)

    continentPoints.forEach((point, i) => {
      const i3 = i * 3
      const pos = latLonToVector3(point.lat, point.lon, radius)
      positions[i3] = pos.x
      positions[i3 + 1] = pos.y
      positions[i3 + 2] = pos.z
      targetPositions[i3] = pos.x
      targetPositions[i3 + 1] = pos.y
      targetPositions[i3 + 2] = pos.z
      velocities[i3] = (Math.random() - 0.5) * 0.15
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.15
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.15
    })

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.45,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    })
    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Add mobile particles
    const mobileCount = 2000
    const mobilePositions = new Float32Array(mobileCount * 3)
    const mobileVelocities = new Float32Array(mobileCount * 3)
    const mobileRadii = new Float32Array(mobileCount)

    for (let i = 0; i < mobileCount; i++) {
      const i3 = i * 3
      const isSatellite = Math.random() < 0.15
      const baseRadius = isSatellite ? radius * 1.3 : radius * 1.05
      const lat = -90 + Math.random() * 180
      const lon = -180 + Math.random() * 360
      const pos = latLonToVector3(lat, lon, baseRadius)
      mobilePositions[i3] = pos.x
      mobilePositions[i3 + 1] = pos.y
      mobilePositions[i3 + 2] = pos.z
      mobileRadii[i] = baseRadius
      const speed = isSatellite ? 0.4 : 0.25
      mobileVelocities[i3] = (Math.random() - 0.5) * speed
      mobileVelocities[i3 + 1] = (Math.random() - 0.5) * speed
      mobileVelocities[i3 + 2] = (Math.random() - 0.5) * speed
    }

    const mobileGeometry = new THREE.BufferGeometry()
    mobileGeometry.setAttribute('position', new THREE.BufferAttribute(mobilePositions, 3))
    const mobileMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.6,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    })
    const mobileParticles = new THREE.Points(mobileGeometry, mobileMaterial)
    scene.add(mobileParticles)

    // Animation
    let mouseX = 0, mouseY = 0
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)

    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      particles.rotation.y += 0.0003
      particles.rotation.x = Math.sin(Date.now() * 0.0001) * 0.05
      particles.rotation.y += mouseX * 0.002
      particles.rotation.x += mouseY * 0.002

      mobileParticles.rotation.y += 0.0003
      mobileParticles.rotation.x = Math.sin(Date.now() * 0.0001) * 0.05
      mobileParticles.rotation.y += mouseX * 0.002
      mobileParticles.rotation.x += mouseY * 0.002

      const positions = geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        positions[i3] += velocities[i3]
        positions[i3 + 1] += velocities[i3 + 1]
        positions[i3 + 2] += velocities[i3 + 2]
        const dx = targetPositions[i3] - positions[i3]
        const dy = targetPositions[i3 + 1] - positions[i3 + 1]
        const dz = targetPositions[i3 + 2] - positions[i3 + 2]
        positions[i3] += dx * 0.02
        positions[i3 + 1] += dy * 0.02
        positions[i3 + 2] += dz * 0.02
        velocities[i3] *= 0.98
        velocities[i3 + 1] *= 0.98
        velocities[i3 + 2] *= 0.98
      }

      const mobilePos = mobileGeometry.attributes.position.array as Float32Array
      for (let i = 0; i < mobileCount; i++) {
        const i3 = i * 3
        mobilePos[i3] += mobileVelocities[i3]
        mobilePos[i3 + 1] += mobileVelocities[i3 + 1]
        mobilePos[i3 + 2] += mobileVelocities[i3 + 2]
        const x = mobilePos[i3]
        const y = mobilePos[i3 + 1]
        const z = mobilePos[i3 + 2]
        const dist = Math.sqrt(x * x + y * y + z * z)
        const force = (mobileRadii[i] - dist) * 0.015
        mobilePos[i3] += (x / dist) * force
        mobilePos[i3 + 1] += (y / dist) * force
        mobilePos[i3 + 2] += (z / dist) * force
        mobileVelocities[i3] *= 0.995
        mobileVelocities[i3 + 1] *= 0.995
        mobileVelocities[i3 + 2] *= 0.995
        if (Math.random() < 0.002) {
          mobileVelocities[i3] += (Math.random() - 0.5) * 0.1
          mobileVelocities[i3 + 1] += (Math.random() - 0.5) * 0.1
          mobileVelocities[i3 + 2] += (Math.random() - 0.5) * 0.1
        }
      }

      geometry.attributes.position.needsUpdate = true
      mobileGeometry.attributes.position.needsUpdate = true
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      mobileGeometry.dispose()
      mobileMaterial.dispose()
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0" />
}

export default GlobeBackground
