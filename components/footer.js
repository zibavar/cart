

function Footer (){
    return (
        <footer className="shadow-xs grid grid-cols-5  border bg-white mt-10 footer bg-base-200 text-base-content p-10">
  <nav className=" grid ">
    <h3 className="footer-title font-bold py-3">Services</h3>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className=" grid ">
    <h6 className="footer-title font-bold py-3">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className=" grid  ">
    <h6 className="footer-title font-bold py-3">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title font-bold py-3">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text py-3">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item py-2 px-2 shadow-lg shadow-gray-300/50" />
        <button className="bg-blue-500 px-2 py-2 text-white join-item shadow-lg shadow-blue-500/50">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
       
    )

}export default Footer