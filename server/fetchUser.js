
module.exports = ({ date_taken, testeeName, testName,attempts, score,sten,percentile}) => {
    const today = new Date();

    // Function to displays user information
    userInfo(user) 
    {
      return `
        <div>
          <p><strong>ID : </strong>${user.id}<p>
        </div>
        <div>
          <p><strong>Candidate Id : </strong>${user.candidate_id}<p>
        </div>
        <div>
          <p><strong>Name : </strong>${user.testName}<p>
        </div>
        <div>
          <p><strong>Password : </strong>${user.attempts}<p>
        </div>     
      `
    }
  }