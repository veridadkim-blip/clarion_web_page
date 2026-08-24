import React, { useEffect, useRef } from 'react'

export default function WaveCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth || 800)
    let height = (canvas.height = canvas.offsetHeight || window.innerHeight || 600)

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const isMobile = window.innerWidth < 768

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth || window.innerWidth || 800
      height = canvas.height = canvas.offsetHeight || window.innerHeight || 600
    }

    window.addEventListener('resize', handleResize)

    let step = 0

    // Wave config for Clarity Wave (Flowing from left turbulence to right clarity)
    const waveConfigs = [
      { amplitude: 30, frequency: 0.005, speed: 0.008, color: 'rgba(18, 101, 229, 0.25)', yRatio: 0.52 },
      { amplitude: 22, frequency: 0.007, speed: 0.006, color: 'rgba(55, 183, 255, 0.18)', yRatio: 0.58 },
      { amplitude: 40, frequency: 0.004, speed: 0.005, color: 'rgba(11, 31, 58, 0.65)', yRatio: 0.65 },
    ]

    const wavesToRender = isMobile ? waveConfigs.slice(0, 2) : waveConfigs
    const xStep = isMobile ? 12 : 6

    const render = () => {
      try {
        if (!ctx || width <= 0 || height <= 0) return
        ctx.clearRect(0, 0, width, height)

        // 1. Deep Navy background fill
        const bgGrad = ctx.createLinearGradient(0, 0, width, height)
        bgGrad.addColorStop(0, '#07152B')
        bgGrad.addColorStop(0.6, '#0B1F3A')
        bgGrad.addColorStop(1, '#050E1D')
        ctx.fillStyle = bgGrad
        ctx.fillRect(0, 0, width, height)

        if (!mediaQuery.matches) {
          step += 1
        }

        // 2. Render smooth waves that dampen towards the right (Clarity effect)
        wavesToRender.forEach((w) => {
          ctx.beginPath()
          ctx.moveTo(0, height)

          const baseHeight = height * w.yRatio

          for (let x = 0; x <= width; x += xStep) {
            const dampening = Math.max(0.15, 1 - (x / width) * 0.75)
            const currentAmp = w.amplitude * dampening

            const y =
              Math.sin(x * w.frequency + step * w.speed) * currentAmp +
              Math.cos((x + step) * (w.frequency * 0.7)) * (currentAmp * 0.4) +
              baseHeight

            ctx.lineTo(x, y)
          }

          ctx.lineTo(width, height)
          ctx.lineTo(0, height)
          ctx.closePath()

          ctx.fillStyle = w.color
          ctx.fill()
        })

        // 3. Clarity Ray / Focused Horizontal Light Line
        ctx.beginPath()
        const focusLineY = height * 0.54
        for (let x = 0; x <= width; x += xStep) {
          const dampening = Math.max(0.1, 1 - (x / width) * 0.8)
          const waveOffset = Math.sin(x * 0.006 + step * 0.01) * (18 * dampening)
          const y = focusLineY + waveOffset

          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }

        const lineGrad = ctx.createLinearGradient(0, 0, width, 0)
        lineGrad.addColorStop(0, 'rgba(55, 183, 255, 0.2)')
        lineGrad.addColorStop(0.5, 'rgba(55, 183, 255, 0.7)')
        lineGrad.addColorStop(1, 'rgba(255, 255, 255, 0.95)')

        ctx.strokeStyle = lineGrad
        ctx.lineWidth = isMobile ? 1.5 : 2
        ctx.shadowColor = '#37B7FF'
        ctx.shadowBlur = 10
        ctx.stroke()
        ctx.shadowBlur = 0

        if (!mediaQuery.matches) {
          animationFrameId = requestAnimationFrame(render)
        }
      } catch (err) {
        console.warn('WaveCanvas render warning:', err)
      }
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  )
}
