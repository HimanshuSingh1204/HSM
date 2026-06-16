import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function AccessDeniedPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
          <Lock className="w-10 h-10 text-red-600" />
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-2">Access Denied</h1>
        <p className="text-slate-300 mb-8 max-w-md">
          You don't have permission to access this page. Please contact your administrator if you believe this is a mistake.
        </p>
        
        <Button 
          onClick={() => navigate(-1)}
          className="mb-3"
        >
          Go Back
        </Button>
        
        <button
          onClick={() => navigate('/login')}
          className="block mx-auto text-sm text-blue-400 hover:text-blue-300 transition"
        >
          Return to Login
        </button>
      </div>
    </div>
  );
}
