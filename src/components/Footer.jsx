import React from 'react'

const Footer = () => {
  return (
   <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10  fixed bottom-0 w-full grid grid-cols-1 md:grid-cols-2">
  <aside>
   <img  className="h-18 border rounded-3xl my-1" src="data:image/jpeg;base64,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"  alt=" Tinder logo"/>
    <p className="font-bold">
      DevTinder Ltd.
      <br />
      Providing reliable tech from 2025
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="flex gap-4 ">
    <div className="flex justify-center gap-4`">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
  )
}

export default Footer;
