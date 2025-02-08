import ProgramsList from "./ProgramsList";

async function getPrograms() {
  const res = await fetch("http://localhost:8000/api/programs/");
  if (!res.ok) {
    throw new Error("Failed to fetch programs");
  }
  return res.json();
}

export default async function ProgramsPage() {
  const programs = await getPrograms();

  return (
    <div className="px-4  pt-[100px] w-full bg-gray-900">
      <h1 className="text-4xl font-bold text-center text-white mb-5">
        Our Gym Programs 🏋️‍♂️
      </h1>
      <ProgramsList programs={programs} />
    </div>
  );
}
