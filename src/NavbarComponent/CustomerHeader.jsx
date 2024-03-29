import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CustomerHeader = () => {
  let navigate = useNavigate();

  const customer = JSON.parse(sessionStorage.getItem("active-customer"));

  const userLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    sessionStorage.removeItem("active-customer");
    sessionStorage.removeItem("customer-jwtToken");

    setTimeout(() => {
      window.location.reload();
    }, 1000); 
    navigate("/home");
    
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link
          to="/customer/add/money"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Add Money </b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/customer/account/money/transfer"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Account Transfer </b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/customer/quick/account/transfer"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Quick Account Transfer </b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/customer/beneficiary/add"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Add Beneficiary </b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/customer/beneficiary/view"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">View Beneficiary </b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/customer/transaction/all"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">My Transactions </b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/customer/profile"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">My Profile </b>
        </Link>
      </li>
      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={userLogout}
        >
          <b className="text-color">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default CustomerHeader;
