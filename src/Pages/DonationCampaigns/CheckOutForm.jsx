import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosPrivet from "../../Hooks/useAxiosPrivet";
import useAuth from "../../Hooks/useAuth";
import PropTypes from 'prop-types';


const CheckOutForm = ({ donate, setShowModal }) => {
  const elements = useElements();
  const stripe = useStripe();
  const { user } = useAuth();
  const [errorMessage, setErrorMessage] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const axios = useAxiosPrivet();
  const [amount, setAmount] = useState();
  const [transaction, setTransaction] = useState("");

  useEffect(() => {
    if (amount > 0) {
      axios.post("create-payment-intent", { price: amount }).then((res) => {
        // console.log(res);
        setClientSecret(res.data?.clientSecret);
      });
    }
  }, [amount, axios]);

  // Send the token to your server for processing

  const handleAdoptBtn = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // Trigger form validation and wallet collection

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
      });
      setErrorMessage(error.message);
    } else {
      setErrorMessage("");
      // console.log(paymentMethod);
    }

    //   confirm payment method
    const { paymentIntent, error: errMsg } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "NO Email",
            name: user?.displayName || "No Name",
          },
        },
      }
    );
    if (errMsg) {
      setErrorMessage(errMsg.massage);
    } else {
      if (paymentIntent.status === "succeeded") {
        const paymentInfo = {
          name: user?.displayName || "NO name",
          email: user?.email || "NO email",
          transactionId: paymentIntent.id,
          donateId: donate._id,
          status: "pending",
          date: new Date(),
          price: amount,
        };
        const res = await axios.post("create-payment-info", paymentInfo);
        setTransaction(paymentIntent.id);
        // console.log(res.data.acknowledged);
        if (res.data.acknowledged) {
          form.reset();
          setShowModal(false);
          Swal.fire({
            position: "top",
            icon: "success",
            title: "your payment was successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleAdoptBtn}>
        <div>
          <p className="font-bold">Donation Amount</p>
          <input
            onChange={(e) => setAmount(e.target.value)}
            className="border text-[#ef6f18] border-red-400 py-3 px-6 w-full rounded-md mt-3 placeholder-[#ef6f18] outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
            name="number"
            id="number"
            placeholder="Donate Amount $"
          />
          <div className="mt-8">
            <CardElement
              className="border p-4 w-full  border-[#ef6f18] rounded-lg text-gray-700"
              options={{
                style: {
                  base: {
                    fontSize: "16px",

                    color: "#ef6f18",
                    "::placeholder": {
                      color: "#ef6f18",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
            <div className="mt-5 " type="submit">
              {clientSecret && (
                <button
                  disabled={!stripe || !clientSecret}
                  className={`rounded-full font-bold border-solid border-2 bg-[#ef6f18] flex gap-2 items-center transition delay-300 text-white py-2 px-4 hover:bg-gray-700 hover:text-gray-100}`}
                >
                  {" "}
                  <RiMoneyDollarCircleLine className="text-3xl">
                    {" "}
                  </RiMoneyDollarCircleLine>
                  Donate Now
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
      <div className="mt-5">
        {transaction && (
          <p className="text-green-500 text-bold">
            Transaction Id :{transaction}
          </p>
        )}
        {errorMessage && (
          <p className="text-green-500 text-bold">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

CheckOutForm.propTypes = {
  donate: PropTypes.node,
  setShowModal: PropTypes.func.isRequired,
};

export default CheckOutForm;
