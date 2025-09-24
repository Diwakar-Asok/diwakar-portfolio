export const contact = () => {
  return (
    <section id="contact" className="card">
      <h2>Contact</h2>
      <form className="form" action="mailto:you@example.com" method="post" encType="text/plain">
        <input placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <textarea rows={4} placeholder="Message" />
        <div className="row-end">
          <button className="btn">Send</button>
        </div>
      </form>
      <p className="muted">Based in Dubai, UAE · Open to Frontend/React roles.</p>
    </section>
   );
}