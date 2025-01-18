'use client'

import { useAuth } from "../../contexts/AuthContext";
import ProtectedRoute from "../../components/ProtectedRoute";
import Submissions from "../../components/Submissions";

export default function DashboardPage() {
  const { logout } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black text-keypad-gold p-8">
        <Submissions />
      </div>
    </ProtectedRoute>
  );
}
