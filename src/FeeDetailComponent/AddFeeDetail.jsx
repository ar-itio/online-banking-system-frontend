import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const AddFeeDetail = () => {
  let navigate = useNavigate();

  const [feeRequest, setFeeRequest] = useState({
    type: "",
    fee: "",
  });

  const [feeTypes, setFeeTypes] = useState([]);

  const admin_jwtToken = sessionStorage.getItem("admin-jwtToken");

  const admin = JSON.parse(sessionStorage.getItem("active-admin"));
  const handleUserInput = (e) => {
    setFeeRequest({
      ...feeRequest,
      [e.target.name]: e.target.value,
    });
  };

  const retrieveAllFeeType = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/fee/detail/type",
      {
        headers: {
          Authorization: "Bearer " + admin_jwtToken, // Replace with your actual JWT token
        },
      }
    );

    return response.data;
  };

  useEffect(() => {
    const getAlltypes = async () => {
      const types = await retrieveAllFeeType();
      if (types) {
        setFeeTypes(types);
      }
    };

    getAlltypes();
  }, []);

  const addFeeDetail = (e) => {
    if (feeRequest.type === "") {
      toast.error("Select Fee Type", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      fetch("http://localhost:8080/api/fee/detail/add", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + admin_jwtToken,
        },
        body: JSON.stringify(feeRequest),
      })
        .then((result) => {
          result.json().then((res) => {
            if (res.success) {
              toast.success(res.responseMessage, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              setTimeout(() => {
                window.location.href = "/admin/fee/detail/view";
              }, 1000); // Redirect after 3 seconds
            } else {
              console.log("Didn't got success response");
              toast.error(res.responseMessage, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          });
        })
        .catch((error) => {
          console.error(error);
          toast.error("It seems server is down", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }

    e.preventDefault();
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header bg-color text-center custom-bg-text">
            <h4 className="card-title">Add Fee Detail</h4>
          </div>
          <div className="card-body">
            <form>
              <div class="mb-3 text-color">
                <label for="role" class="form-label">
                  <b>Fee Type</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="type"
                >
                  <option value="">Select Fee Type</option>
                  {feeTypes.map((type) => {
                    return <option value={type}>{type}</option>;
                  })}
                </select>
              </div>

              <div className="mb-3 text-color">
                <label for="beneficiaryName" class="form-label">
                  <b>Fee</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="fee"
                  name="fee"
                  onChange={handleUserInput}
                  value={feeRequest.fee}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn bg-color custom-bg-text"
                onClick={addFeeDetail}
              >
                Add fee Detail
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFeeDetail;
