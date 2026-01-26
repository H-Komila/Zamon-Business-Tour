import React from 'react'

const Location = () => {
  return (
    <>
      <div className='footer-section'>
        <div className='container'>
          <div style={{ width: "100%",  overflow: "hidden", borderRadius: "15px" }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0728840438047!2d69.181155376571!3d41.28551420227181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89930773f733%3A0x6734139982759e97!2z0p7Rh9GC0LXQv9C40L3RgdC60LjQuSDRgNCw0LnQvtC90L3Ri9C5INCe0YLQtNC10Lsg0JLQuNC3INC4INCg0LXQs9C40YHRgtGA0LDRhtC40Lgg0KPQktCU!5e0!3m2!1suz!2s!4v1706220000000!5m2!1suz!2s" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Location