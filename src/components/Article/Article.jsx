import React from 'react'
import Usa from "./images/usa1.jpg";

const Article = () => {
  return (
    <>
    
          <div className='article'>
            <div className='container'>
                <div>
                    <ul style={{ backgroundImage: `url(${Usa})` }}
                            className="bg-cover bg-center h-70 w-60 rounded-bl-2xl rounded-tl-2xl">
                        <li>
                            
                        </li>
                    </ul>
                </div>
            </div>
          </div>
    
    </>
  )
}

export default Article