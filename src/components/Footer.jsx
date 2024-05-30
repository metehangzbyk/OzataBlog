import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsappIcon from '@mui/icons-material/WhatsApp'
import '../styles/footer.css'


export const Footer = () => {
   
   const phoneNumber = "905536824254";

   const generateWhatsAppLink = (phoneNumber) => {
    return `https://wa.me/${phoneNumber}`;
   }

  return (
    <div className='footer'>
    <div className='socialMedia'>
     <a href="https://www.instagram.com/mahmutozaata" target='_blank'><InstagramIcon/></a>  
       <a href={generateWhatsAppLink(phoneNumber)} target='_blank'><WhatsappIcon/></a>
       
       
    </div>
    <p style={{fontFamily:'arial', fontSize:'19px'}}>İletişim : 0553 682 4254</p>

    </div>
  )
}
