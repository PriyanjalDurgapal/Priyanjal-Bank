import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Users, Activity, CreditCard, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white bg-[radial-gradient(circle_at_center,_#0f172a,_#020617)]">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-xl font-semibold">SecureBank</h1>
        <div className="flex gap-3">
          <Link to="/admin/login" className="bg-red-500 px-4 py-1.5 rounded-full text-sm">Admin</Link>
          <Link to="/staff/login" className="bg-blue-500 px-4 py-1.5 rounded-full text-sm">Staff</Link>
          <Link to="/customer/login" className="bg-green-500 px-4 py-1.5 rounded-full text-sm">Customer</Link>
        </div>
      </nav>

      {/* HERO CARD */}
      <div className="flex justify-center mt-20 px-4">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center max-w-3xl w-full shadow-2xl">
          <h2 className="text-5xl font-bold mb-6">Next-Gen Secure Banking</h2>
          <p className="text-slate-400 mb-8">
            A full-stack, security-first banking platform with 2FA, real-time transactions, and enterprise-level protection.
          </p>

          <div className="flex justify-center gap-6">
            <Link to="/admin/login" className="bg-red-500 px-6 py-3 rounded-full">Admin Login</Link>
            <Link to="/staff/login" className="bg-blue-500 px-6 py-3 rounded-full">Staff Login</Link>
            <Link to="/customer/login" className="bg-green-500 px-6 py-3 rounded-full">Customer Login</Link>
          </div>

          {/* SCROLL */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mt-10 text-slate-400 flex flex-col items-center"
          >
            <span className="text-sm">Scroll down for test credentials</span>
            <ArrowDown size={18} />
          </motion.div>
        </div>
      </div>

      {/* STATS */}
      <div className="flex justify-center mt-12">
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex gap-6">
          <Stat title="Balance" value="$24,580.00" sub="+12.5%" />
          <Stat title="Transactions" value="1,248" sub="This month" />
          <Stat title="Security" value="99.9%" sub="Uptime" />
        </div>
      </div>

      {/* FEATURES */}
      <section className="mt-24 px-10">
        <h3 className="text-center text-xl mb-10">Core Features</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Feature icon={<ShieldCheck />} title="Advanced Security" desc="JWT + 2FA, brute-force protection" />
          <Feature icon={<CreditCard />} title="Banking Operations" desc="Deposit, Withdraw, Transfer" />
          <Feature icon={<Users />} title="Role-Based Access" desc="Admin, Staff & Customer APIs" />
          <Feature icon={<Activity />} title="Monitoring & Logs" desc="Track all activities" />
          <Feature icon={<Lock />} title="Encrypted System" desc="Secure password storage" />
        </div>
      </section>

      {/* TECH STACK */}
      <section className="mt-24 text-center">
        <h3 className="mb-6">Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {["Spring Boot","React","TypeScript","PostgreSQL","Docker","Tailwind CSS"].map((tech) => (
            <span key={tech} className="px-4 py-2 bg-white/10 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="mt-24 px-10 pb-20">
        <h3 className="text-center mb-10">Test Credentials</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Credential role="Admin" email="admin@gmail.com" pass="123" color="border-red-500" />
          <Credential role="Staff" email="STF1774349499916" pass="123" color="border-blue-500" />
          <Credential role="Customer" email="CUST1774346370512" pass="55a6944c" color="border-green-500" />
        </div>
      </section>

      <footer className="text-center text-slate-500 pb-6">
        © 2026 SecureBank • Built with Spring Boot & React
      </footer>
    </div>
  );
};

const Feature = ({ icon, title, desc }: any) => (
  <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
    <div className="mb-3">{icon}</div>
    <h4 className="font-semibold">{title}</h4>
    <p className="text-sm text-slate-400">{desc}</p>
  </div>
);

const Stat = ({ title, value, sub }: any) => (
  <div>
    <p className="text-xs text-slate-400">{title}</p>
    <h4 className="font-semibold">{value}</h4>
    <p className="text-xs text-green-400">{sub}</p>
  </div>
);

const Credential = ({ role, email, pass, color }: any) => (
  <div className={`bg-white/5 border ${color} p-6 rounded-xl`}>
    <h4 className="mb-2">{role}</h4>
    <p className="text-sm text-slate-400">Email/Cust-id: {email}</p>
    <p className="text-sm text-slate-400">Pass: {pass}</p>
  </div>
);

export default LandingPage;
