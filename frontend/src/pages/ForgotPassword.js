import React from 'react'

function ForgotPassword() {
  return (
   <>
   <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-4 border shadow-lg p-5 mt-5">
        <div className="text-center">
          <img src={logo} alt="Logo" className="logo" height={100} />
        </div>
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="userEmail"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div> 
          <div className="text-center">
            <button type="submit" className="btn btn-info fw-bold">Send UID</button>
          </div>
        </form>
      </div>
    </div>
    <ToastContainer />
  </div>
   </>
  )
}

export default ForgotPassword