import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("admin-jwtToken");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    navigate("/home");
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      {/*  <li className="nav-item">
        <Link
          to="/user/bank/register"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Register Bank Manager</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/admin/bank/register"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Add Bank</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/admin/bank/all"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">View Banks</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/admin/bank/managers"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Bank Managers</b>
        </Link>
      </li>
*/}
      <li className="nav-item">
        <Link
          to="/admin/fee/detail/add"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Add Fee</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/admin/fee/detail/view"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">View Fee</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/admin/customer/pending"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Pending Customers</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/admin/all/bank/customers"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">All Customers</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/admin/customer/transaction/pending"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Pending Transactions</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/admin/customer/transaction/success"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Success Transactions</b>
        </Link>
      </li>
      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={adminLogout}
        >
          <b className="text-color">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
