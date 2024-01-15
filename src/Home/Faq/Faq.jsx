

const Faq = () => {
    return (
        <div>
            <p>People's most searched question</p>
            <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  How do I buy a book?
  </div>
  <div className="collapse-content"> 
    <p>To buy a book users often need to create an account, then have to sign in .</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What kind of books can I find?
  </div>
  <div className="collapse-content"> 
    <p>We are trying update to get all kinds of books. </p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Can I lve chat with reading partner?
  </div>
  <div className="collapse-content"> 
    <p>Sure, you can exchange your thought and opinions</p>
  </div>
</div>
        </div>
    );
};

export default Faq;