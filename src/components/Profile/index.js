import {Link} from 'react-router-dom'

import './index.css'

const Profile = () => (
  <div className="profile-container">
    <h1 className="heading-profile">Profile</h1>
    <div className="main-container">
      <img
        src="https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1691971200&Signature=YpaWRkaWOMdRC5HT4eTffn-NvDJxxf87hiX0hFvxbYrqmtXgzo2fy1v7-1j3fhGi1i2q8E2sBQ3sDg38jHyhS5UEBGcES6qoFsHXcB0zNpah~C8kKu61euDChDEf2US2RTAKAcyLo41iXSSFuvbwDXp2MKzdu8EPzResV9XNbvy6MC493bdr94WOIT1~c9tQDEBFLnj7xFgchyvFQIbHiVVJGE9l30oM3Lv0h~k-gTag6a-1YqHa502qT0ujMMQ6Lo1QTPnMx2vJHQhhr5CB2s0hgiHyfNLTg44Nz-sqV0-kgBp~2gUgXdRTCA-FrM3noqjsRX1eQxDQxqs7fZfeEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="pic"
        className="profile-pic"
      />

      <div className="name-container">
        <p className="p1">Your Name</p>
        <input placeholder="Charlen reed" className="input1" />
        <p className="p1">Email</p>
        <input placeholder="charlenereed@gmail.com " className="input1" />
        <p className="p1">Date of birth</p>
        <input placeholder="25 January 1990 " className="input1" />
        <p className="p1">Permanent Address</p>
        <input placeholder="San Jose, California, USA " className="input1" />
        <p className="p1">Postel Code</p>
        <input placeholder="45962 " className="input1" />
      </div>
      <div className="username-container-main">
        <p className="p1">Username</p>
        <input placeholder="Charlen reed" className="input1" />
        <p className="p1">Password</p>
        <input placeholder="**********" className="input1" />
        <p className="p1">Present Address</p>
        <input placeholder="San Jose, California, USA" className="input1" />
        <p className="p1">City</p>
        <input placeholder="San Jose" className="input1" />
        <p className="p1">Country</p>
        <input placeholder="USA" className="input1" />
      </div>
    </div>
    <Link to="login">
      <button className="logout-button" type="button">
        Logout
      </button>
    </Link>
  </div>
)
export default Profile
