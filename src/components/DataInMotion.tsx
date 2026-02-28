import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const DataInMotion = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Wave animation
    let animationId: number
    let offset = 0

    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const waves = [
        { amplitude: 40, frequency: 0.01, speed: 0.02, color: 'rgba(255, 255, 255, 0.3)' },
        { amplitude: 30, frequency: 0.015, speed: 0.015, color: 'rgba(163, 163, 163, 0.3)' },
        { amplitude: 50, frequency: 0.008, speed: 0.025, color: 'rgba(255, 255, 255, 0.2)' },
      ]

      waves.forEach((wave) => {
        ctx.beginPath()
        ctx.strokeStyle = wave.color
        ctx.lineWidth = 2

        for (let x = 0; x < canvas.width; x++) {
          const y =
            canvas.height / 2 +
            Math.sin(x * wave.frequency + offset * wave.speed) * wave.amplitude
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      })

      offset++
      animationId = requestAnimationFrame(drawWaves)
    }

    drawWaves()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section id="platform" className="py-24 bg-secondary-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
            Data in <span className="gradient-text">Motion</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Watch your data flow through time and space. Every wave tells a story.
          </p>
        </motion.div>

        {/* Canvas for wave visualization */}
        <motion.div
          className="relative h-64 md:h-96 rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)' }}
          />

          {/* Overlay text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-bold gradient-text mb-4">
                Real-Time
              </div>
              <div className="text-xl md:text-2xl text-text-muted">
                Spatio-Temporal Intelligence
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DataInMotion
