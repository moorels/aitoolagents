'use client'

import { useAuth } from "../../contexts/AuthContext";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function DashboardPage() {
  const { logout } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black text-keypad-gold p-8">
        hi there
      </div>
    </ProtectedRoute>
  );
}
