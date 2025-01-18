
import { useAuth } from "../contexts/AuthContext";


const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-black text-keypad-gold p-8">
      
    </div>
  );
};

export default Dashboard;