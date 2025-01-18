import { motion } from "framer-motion";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "../components/ui/button";
import { LogOut } from "lucide-react";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-black text-keypad-gold p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <Button
          variant="outline"
          onClick={logout}
          className="absolute top-0 right-0 border-keypad-gold text-keypad-gold hover:bg-keypad-gold hover:text-black"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
        <h1 className="text-4xl font-light mb-6">Welcome to Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-keypad-dark p-6 rounded-lg shadow-keypad-glow">
            <h2 className="text-2xl mb-4">Statistics</h2>
            <p className="text-gray-400">Your activity dashboard</p>
          </div>
          <div className="bg-keypad-dark p-6 rounded-lg shadow-keypad-glow">
            <h2 className="text-2xl mb-4">Recent Activity</h2>
            <p className="text-gray-400">Latest actions and events</p>
          </div>
          <div className="bg-keypad-dark p-6 rounded-lg shadow-keypad-glow">
            <h2 className="text-2xl mb-4">Settings</h2>
            <p className="text-gray-400">Configure your preferences</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;