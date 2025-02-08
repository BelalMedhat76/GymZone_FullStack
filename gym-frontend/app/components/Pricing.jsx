// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";

// const Pricing = () => {
//   const [plans, setPlans] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get("http://localhost:8000/api/membership-plans/")
//       .then(response => {
//         setPlans(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("Error fetching plans:", error);
//         setError("Failed to load membership plans.");
//         setLoading(false);
//       });
//   }, []);


//   const handleJoin = async (planId) => {
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/join-membership/", {
//         plan_id: planId,
//       }, { withCredentials: true });
  
//       alert(response.data.message);
//     } catch (error) {
//       console.error("Error joining membership:", error.response?.data || error.message);
//       alert("Failed to join membership.");
//     }
//   };
  

//   if (loading) return <p className="text-center text-lg py-6">Loading membership plans...</p>;
//   if (error) return <p className="text-center text-red-500 py-6">{error}</p>;

//   return (
//     <section className="py-20 text-white bg-gray-900">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-8">Membership Plans</h2>

//         <div className="grid md:grid-cols-3 gap-8 px-4">
//           {plans.map((plan, index) => (
//             <motion.div
//               key={plan.id}
//               className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <h3 className="text-2xl font-bold">{plan.name}</h3>
//               <p className="text-xl my-4">$ {" "} {plan.price}</p>
//               <ul className="text-gray-300 space-y-2">
//                 {plan.features.map((feature, i) => (
//                   <li key={i}>✅ {feature}</li>
//                 ))}
//               </ul>
//               <button
//                 onClick={() => handleJoin(plan.id)}
//                 className="mt-6 px-6 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-colors"
//               >
//                 Join Now
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;


"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null); // Track logged-in user
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/membership-plans/")
      .then((response) => {
        setPlans(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching plans:", error);
        setError("Failed to load membership plans.");
        setLoading(false);
      });

    // Check if user is logged in
    axios
      .get("http://127.0.0.1:8000/api/check-auth/", { withCredentials: true })
      .then((response) => setUser(response.data.user))
      .catch(() => setUser(null));
  }, []);

  const handleJoinClick = (plan) => {
    if (!user) {
      setShowAuthModal(true); // Show login/register prompt if not logged in
      return;
    }
    setSelectedPlan(plan);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/join-membership/",
        {
          plan_id: selectedPlan.id,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        { withCredentials: true }
      );

      alert(response.data.message);
      setSelectedPlan(null);
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error("Error joining membership:", error.response?.data || error.message);
      alert("Failed to join membership.");
    }
  };

  if (loading)
    return <p className="text-center text-lg py-6 text-white">Loading membership plans...</p>;
  if (error) return <p className="text-center text-red-500 py-6">{error}</p>;

  return (
    <section className="py-20 bg-gradient-to-r  bg-gray-900 text-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-5xl font-extrabold mb-12 tracking-wide">
          Choose Your <span className="text-blue-300">Membership</span>
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="relative bg-opacity-90 backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-white/10 rounded-2xl" />
              <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
              <p className="text-2xl font-semibold mb-6 text-blue-300">
                ${plan.price} <span className="text-sm text-gray-300">/month</span>
              </p>
              <ul className="text-gray-300 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleJoinClick(plan)}
                className="mt-6 w-full py-3 text-lg font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 transition-all"
              >
                Join Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Authentication Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-white mb-4">You need to log in first</h3>
            <p className="text-gray-400 mb-6">Please sign in or create an account to join a membership.</p>
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-2 bg-green-500 rounded-lg text-white hover:bg-green-600">
                Login
              </button>
              <button className="px-6 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600">
                Register
              </button>
            </div>
            <button
              className="mt-4 text-gray-400 hover:text-white"
              onClick={() => setShowAuthModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Membership Form Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center w-96">
            <h3 className="text-xl font-semibold text-white mb-4">
              Join {selectedPlan.name} Plan
            </h3>
            <form onSubmit={handleFormSubmit} className="text-left">
              <label className="text-gray-300 block mb-2">Full Name:</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-800 text-white mb-4"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />

              <label className="text-gray-300 block mb-2">Email:</label>
              <input
                type="email"
                className="w-full p-2 rounded bg-gray-800 text-white mb-4"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />

              <label className="text-gray-300 block mb-2">Phone Number:</label>
              <input
                type="tel"
                className="w-full p-2 rounded bg-gray-800 text-white mb-4"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />

              <button className="w-full py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600">
                Confirm Membership
              </button>
            </form>
            <button
              className="mt-4 text-gray-400 hover:text-white"
              onClick={() => setSelectedPlan(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
