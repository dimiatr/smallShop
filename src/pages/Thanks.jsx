import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Thanks() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { state: { maxPrice: 600 } });
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <div>Вы будете перенаправлены на главную через 5 секунд...</div>;
}

export default Thanks;
