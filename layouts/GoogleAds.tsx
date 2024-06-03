import React, { useEffect } from 'react'

const AdComponent: React.FC = () => {
  useEffect(() => {
    // Crear un nuevo script
    const script = document.createElement('script')

    // Configurar los atributos del script
    script.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    script.async = true

    // Agregar el script al body del documento
    document.body.appendChild(script)

    // Ejecutar el script de anuncios una vez que el componente se monta
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})

    // Limpiar el script al desmontar el componente
    return () => {
      document.body.removeChild(script)
    }
  }, []) // El array vacío como segundo argumento asegura que este efecto solo se ejecute una vez después del montaje

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
