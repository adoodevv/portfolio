const Contact: React.FC = () => {
   return (
      <div className="container mx-auto px-4 py-8">
         <h2 className="text-2xl font-medium text-gray-900 mb-4">Contact Me</h2>
         <form className="flex flex-col gap-4">
         <div className="flex flex-col md:flex-row gap-4">
            <input type="text" placeholder="First Name" className="input" />
            <input type="text" placeholder="Last Name" className="input" />
         </div>
         <input type="email" placeholder="Email" className="input" />
         <textarea placeholder="Message" className="input"></textarea>
         <button className="btn btn-primary">Send Message</button>
         </form>
      </div>
   );
};
export default Contact;