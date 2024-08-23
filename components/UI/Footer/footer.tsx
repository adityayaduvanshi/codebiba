import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-[#141327] to-[#171c37] text-white py-10">
  <div className="container mx-auto flex justify-between">
   
    <div>
      <h1 className="text-xl font-bold mb-4">Codebiba</h1>
      <p className="text-sm mb-8">Companies that can help you in developing your company for the future</p>
      <p className="text-xs text-gray-400">© 2024 Mangcoding. All rights reserved.</p>
    </div>
   
    <div>
      <h2 className="text-md font-bold mb-4">Services</h2>
      <ul className="space-y-2 text-sm">
        <li>Web Development</li>
        <li>UI/UX Designer</li>
        <li>Branding</li>
        <li>Shopify</li>
      </ul>
    </div>
    <div>
      <h2 className="text-md font-bold mb-4">Business Features</h2>
      <ul className="space-y-2 text-sm">
        <li>Data-Based Chatbot Training</li>
        <li>Model Fine-Tuning</li>
        <li>Sales & Customer Service Smart Agents</li>
      </ul>
    </div>
  </div>
  <div className="container mx-auto mt-8 flex justify-between items-center">
    <div className="flex space-x-4 text-xs text-gray-400">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Cookie Policy</a>
    </div>
    {/* <div className="flex space-x-4">
      <a href="#"><img src="/path-to-instagram-icon.svg" alt="Instagram" className="h-5 w-5"></a>
      <a href="#"><img src="/path-to-whatsapp-icon.svg" alt="WhatsApp" className="h-5 w-5"></a>
      <a href="#"><img src="/path-to-linkedin-icon.svg" alt="LinkedIn" className="h-5 w-5"></a>
      <a href="#"><img src="/path-to-twitter-icon.svg" alt="Twitter" className="h-5 w-5"></a>
    </div> */}
  </div>
</footer>

    </div>
  )
}

export default Footer
