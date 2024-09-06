import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPages() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-8 mt-4">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-black"
          >
            <ChevronLeft size={30} />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="bg-zinc-800 p-4 rounded-md">
          <h2 className="text-xl text-white font-bold">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPages;
