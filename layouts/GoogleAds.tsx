'use client'
import React, { useEffect } from 'react'

const AdComponent: React.FC = () => {
  useEffect(() => {
    // Verificar si el script de anuncios ya está presente en el DOM
    const existingScript = document.querySelector(
      'script[src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
    )

    if (!existingScript) {
      // Crear un nuevo script
      const script = document.createElement('script')

      // Configurar los atributos del script
      script.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      script.async = true

      // Agregar el script al body del documento
      document.body.appendChild(script)
    }

    // Ejecutar el script de anuncios una vez que el componente se monta
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})

    // Limpiar el script al desmontar el componente
    return () => {
      const insElements = document.querySelectorAll('.adsbygoogle')
      insElements.forEach((element) => {
        element.innerHTML = ''
      })
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-3646138644530578"
      data-ad-slot="6731750998"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  )
}

export default AdComponent
