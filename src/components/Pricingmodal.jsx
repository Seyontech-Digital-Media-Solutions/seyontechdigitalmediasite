import { useState, useEffect } from "react";
import "../styles/pricingmodal.css";

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: "₹25,000",
    note: "/ month",
    amount: 2500000,
    popular: false,
    features: [
      "8 Creative Posters",
      "4 Promo Videos",
      "AI Automation Tool",
      "Social Media Mgmt",
      "Team of 4 Members",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹50,000",
    note: "/ month",
    amount: 5000000,
    popular: true,
    features: [
      "10 Creative Posters",
      "8 Promo Videos",
      "AI Automation Tools",
      "Social Media Mgmt",
      "Team of 7 Members",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹1,00,000",
    note: "/ month",
    amount: 10000000,
    popular: false,
    features: [
      "15 Creative Posters",
      "12 Promo Videos",
      "AI Automation Tools",
      "Leads & Sales Mgmt",
      "Team of 15 Members",
    ],
  },
];

const SERVICES = [
  "Web Development",
  "Digital Marketing",
  "AI Automation",
  "SEO / Content",
  "Social Media",
  "Video Production",
];

// ✅ LOADS RAZORPAY SCRIPT DYNAMICALLY
const loadRazorpay = () => {
  return new Promise((resolve) => {
    // if already loaded, resolve immediately
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

function StepBar({ current }) {
  return (
    <div className="pm-stepbar">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`pm-step-dot ${current === i ? "active" : ""} ${
            current > i ? "done" : ""
          }`}
        />
      ))}
    </div>
  );
}

export default function PricingModal({ onClose }) {
  const [step, setStep] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [activeS, setActiveS] = useState(["Web Development"]);
  const [paymentId, setPaymentId] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    note: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ PRELOAD RAZORPAY SCRIPT WHEN MODAL OPENS
  useEffect(() => {
    loadRazorpay();
  }, []);

  // PLAN SELECT
  const pickPlan = (plan) => {
    setChosen(plan);
    setStep(1);
  };

  // SERVICES TOGGLE
  const toggleS = (s) => {
    setActiveS((p) =>
      p.includes(s) ? p.filter((x) => x !== s) : [...p, s]
    );
  };

  // VALIDATION
  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ FORM SUBMIT → LOAD RAZORPAY → OPEN PAYMENT
  const submit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setPaymentError("");

    // Load Razorpay script dynamically
    const loaded = await loadRazorpay();

    if (!loaded || !window.Razorpay) {
      setPaymentError(
        "Payment system failed to load. Please check your internet and try again."
      );
      setLoading(false);
      return;
    }

    setLoading(false);

    const options = {
      key: "rzp_live_SWGBeoewDqOUuF",
      amount: chosen.amount,
      currency: "INR",
      name: "Seyontech Digital Media Solutions",
      description: `Payment for ${chosen.name} Plan`,
      image: "/favicon.svg",
      handler: function (response) {
        setPaymentId(response.razorpay_payment_id);
        setStep(2);
      },
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },
      notes: {
        company: form.company,
        services: activeS.join(", "),
        requirements: form.note,
      },
      theme: {
        color: "#2563eb",
      },
      modal: {
        ondismiss: function () {
          setPaymentError("Payment was cancelled. Please try again.");
        },
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function (response) {
      setPaymentError(
        `Payment failed: ${response.error.description}`
      );
    });

    rzp.open();
  };

  // RESET
  const reset = () => {
    setStep(0);
    setChosen(null);
    setPaymentId("");
    setPaymentError("");
    setLoading(false);
    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      note: "",
    });
    setErrors({});
  };

  return (
    <div className="pm-backdrop" onClick={onClose}>
      <div className="pm-modal" onClick={(e) => e.stopPropagation()}>
        <div className="pm-accent" />

        <button className="pm-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {/* STEP 1 — PLAN SELECTION */}
        {step === 0 && (
          <>
            <div className="pm-head">
              <h2>Choose your growth plan</h2>
              <p>
                All packages include onboarding support & dedicated account
                manager
              </p>
            </div>

            <div className="pm-plans">
              {PLANS.map((pl) => (
                <div
                  key={pl.id}
                  className={`pm-plan ${pl.popular ? "popular" : ""}`}
                  onClick={() => pickPlan(pl)}
                >
                  {pl.popular && (
                    <span className="pm-hot">MOST POPULAR</span>
                  )}
                  <div className="pm-pname">{pl.name}</div>
                  <div className="pm-price">{pl.price}</div>
                  <div className="pm-note">{pl.note}</div>
                  <ul className="pm-features">
                    {pl.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <button className="pm-selbtn">Select plan →</button>
                </div>
              ))}
            </div>

            <StepBar current={0} />
          </>
        )}

        {/* STEP 2 — FORM */}
        {step === 1 && (
          <div className="pm-form-wrap">
            <button className="pm-back" onClick={() => setStep(0)}>
              ← Back to plans
            </button>

            <h2 className="pm-ftitle">Tell us about your business</h2>
            <p className="pm-fsub">
              Our team will reach out within 30 minutes
            </p>

            <span className="pm-tag">
              {chosen?.name} — {chosen?.price}
            </span>

            <form onSubmit={submit}>
              {/* NAME + COMPANY */}
              <div className="pm-row">
                <div className="pm-field">
                  <label>Full name</label>
                  <input
                    type="text"
                    placeholder="Ravi Kumar"
                    value={form.name}
                    className={errors.name ? "error" : ""}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      setErrors({ ...errors, name: "" });
                    }}
                  />
                  {errors.name && (
                    <small className="pm-error">{errors.name}</small>
                  )}
                </div>

                <div className="pm-field">
                  <label>Company</label>
                  <input
                    type="text"
                    placeholder="Acme Pvt Ltd"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* EMAIL + PHONE */}
              <div className="pm-row">
                <div className="pm-field">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="ravi@acme.com"
                    value={form.email}
                    className={errors.email ? "error" : ""}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      setErrors({ ...errors, email: "" });
                    }}
                  />
                  {errors.email && (
                    <small className="pm-error">{errors.email}</small>
                  )}
                </div>

                <div className="pm-field">
                  <label>Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    className={errors.phone ? "error" : ""}
                    onChange={(e) => {
                      setForm({ ...form, phone: e.target.value });
                      setErrors({ ...errors, phone: "" });
                    }}
                  />
                  {errors.phone && (
                    <small className="pm-error">{errors.phone}</small>
                  )}
                </div>
              </div>

              {/* SERVICES */}
              <div className="pm-field">
                <label>Services needed</label>
                <div className="pm-chips">
                  {SERVICES.map((s) => (
                    <button
                      type="button"
                      key={s}
                      className={`pm-chip ${
                        activeS.includes(s) ? "on" : ""
                      }`}
                      onClick={() => toggleS(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* MESSAGE */}
              <div className="pm-field">
                <label>Requirements (optional)</label>
                <textarea
                  placeholder="Tell us your goals..."
                  value={form.note}
                  onChange={(e) =>
                    setForm({ ...form, note: e.target.value })
                  }
                />
              </div>

              {/* PAYMENT ERROR */}
              {paymentError && (
                <div className="pm-payment-error">⚠️ {paymentError}</div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                className="pm-submit"
                disabled={loading}
              >
                {loading ? "Loading payment..." : "Proceed to Payment →"}
              </button>
            </form>

            <StepBar current={1} />
          </div>
        )}

        {/* STEP 3 — SUCCESS */}
        {step === 2 && (
          <div className="pm-success">
            <div className="pm-sring">✓</div>

            <h2>Payment Successful!</h2>

            <p>
              Thanks for choosing the{" "}
              <strong>{chosen?.name}</strong> plan. Our team will contact
              you within <strong>30 minutes</strong> to kick things off.
            </p>

            {paymentId && (
              <p className="pm-payid">
                Payment ID: <strong>{paymentId}</strong>
              </p>
            )}

            <button className="pm-restart" onClick={reset}>
              ← Explore other plans
            </button>

            <StepBar current={2} />
          </div>
        )}
      </div>
    </div>
  );
}